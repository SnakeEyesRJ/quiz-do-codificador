CREATE UNIQUE INDEX IF NOT EXISTS answers_one_pending_per_match_idx
  ON public.answers(match_id)
  WHERE answered_at IS NULL;

CREATE OR REPLACE FUNCTION public.submit_single_player_answer(
  p_match_id uuid,
  p_answer_id uuid,
  p_option char(1)
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  m public.matches%ROWTYPE;
  a public.answers%ROWTYPE;
  q public.questions%ROWTYPE;
  r public.rounds%ROWTYPE;
  v_player_score integer;
  v_codificador_score integer;
  v_round_winner text;
  v_player_rounds integer;
  v_codificador_rounds integer;
  v_match_winner text;
  v_next_round integer;
  v_finished boolean;
  v_target integer;
BEGIN
  IF p_option NOT IN ('A', 'B', 'C', 'D', 'E') THEN
    RAISE EXCEPTION 'Alternativa inválida.';
  END IF;

  SELECT * INTO m FROM public.matches WHERE id = p_match_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Partida não encontrada.'; END IF;
  IF m.status <> 'in_progress' THEN RAISE EXCEPTION 'A partida já terminou.'; END IF;

  SELECT * INTO a
  FROM public.answers
  WHERE id = p_answer_id AND match_id = p_match_id
  FOR UPDATE;
  IF NOT FOUND OR a.answered_at IS NOT NULL THEN
    RAISE EXCEPTION 'Esta pergunta já foi respondida ou não pertence à partida.';
  END IF;

  SELECT * INTO r
  FROM public.rounds
  WHERE id = a.round_id AND match_id = p_match_id AND number = m.current_round
  FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'A pergunta não pertence à rodada atual.'; END IF;

  SELECT * INTO q FROM public.questions WHERE id = a.question_id AND active = true;
  IF NOT FOUND THEN RAISE EXCEPTION 'A pergunta não está mais disponível.'; END IF;

  UPDATE public.answers
  SET answered_at = now(), player_option = p_option,
      player_correct = (p_option = q.correct_option),
      codificador_option = NULL, codificador_correct = NULL
  WHERE id = a.id;

  v_player_score := r.player_score + CASE WHEN p_option = q.correct_option THEN 1 ELSE 0 END;
  v_codificador_score := r.codificador_score + CASE WHEN p_option = q.correct_option THEN 0 ELSE 1 END;
  v_round_winner := CASE
    WHEN v_player_score >= 10 THEN 'player'
    WHEN v_codificador_score >= 10 THEN 'codificador'
    ELSE NULL
  END;

  UPDATE public.rounds
  SET player_score = v_player_score, codificador_score = v_codificador_score,
      winner = v_round_winner
  WHERE id = r.id;

  v_player_rounds := m.player_rounds;
  v_codificador_rounds := m.codificador_rounds;
  v_match_winner := NULL;
  v_next_round := m.current_round;
  v_finished := false;

  IF v_round_winner IS NOT NULL THEN
    IF v_round_winner = 'player' THEN
      v_player_rounds := v_player_rounds + 1;
    ELSE
      v_codificador_rounds := v_codificador_rounds + 1;
    END IF;

    v_target := floor(m.total_rounds / 2.0)::integer + 1;
    IF v_player_rounds >= v_target THEN
      v_match_winner := 'player';
    ELSIF v_codificador_rounds >= v_target THEN
      v_match_winner := 'codificador';
    END IF;

    v_finished := v_match_winner IS NOT NULL;
    IF NOT v_finished THEN v_next_round := m.current_round + 1; END IF;

    UPDATE public.matches
    SET player_rounds = v_player_rounds, codificador_rounds = v_codificador_rounds,
        current_round = v_next_round,
        status = CASE WHEN v_finished THEN 'finished' ELSE 'in_progress' END,
        winner = v_match_winner,
        finished_at = CASE WHEN v_finished THEN now() ELSE NULL END
    WHERE id = m.id
    RETURNING * INTO m;

    IF NOT v_finished THEN
      INSERT INTO public.rounds(match_id, number) VALUES (m.id, v_next_round);
    END IF;
  END IF;

  RETURN jsonb_build_object(
    'correctOption', q.correct_option, 'playerOption', p_option,
    'playerCorrect', (p_option = q.correct_option),
    'roundWinner', v_round_winner, 'finishedRound', r.number,
    'roundScore', jsonb_build_object('player', v_player_score, 'codificador', v_codificador_score),
    'match', jsonb_build_object(
      'id', m.id, 'player_name', m.player_name, 'total_rounds', m.total_rounds,
      'difficulty', m.difficulty, 'status', m.status, 'current_round', m.current_round,
      'player_rounds', m.player_rounds, 'codificador_rounds', m.codificador_rounds,
      'winner', m.winner
    ),
    'explanation', q.explanation, 'reference', q.reference
  );
END;
$$;

REVOKE ALL ON FUNCTION public.submit_single_player_answer(uuid, uuid, char) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_single_player_answer(uuid, uuid, char) TO service_role;
