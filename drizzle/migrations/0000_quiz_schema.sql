CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own profile select" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "own profile insert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "own profile update" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email,'@',1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture'))
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code serial UNIQUE,
  book text NOT NULL CHECK (book IN ('livro_espiritos','evangelho','ceu_inferno')),
  statement text NOT NULL UNIQUE,
  option_a text NOT NULL, option_b text NOT NULL, option_c text NOT NULL, option_d text NOT NULL, option_e text NOT NULL,
  correct_option char(1) NOT NULL CHECK (correct_option IN ('A','B','C','D','E')),
  explanation text NOT NULL,
  reference text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('facil','medio','dificil')),
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.questions TO service_role;
GRANT USAGE ON SEQUENCE public.questions_code_seq TO service_role;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  player_name text NOT NULL DEFAULT 'Jogador',
  status text NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress','finished')),
  current_round int NOT NULL DEFAULT 1,
  player_rounds int NOT NULL DEFAULT 0,
  codificador_rounds int NOT NULL DEFAULT 0,
  winner text CHECK (winner IN ('player','codificador')),
  created_at timestamptz NOT NULL DEFAULT now(),
  finished_at timestamptz
);
CREATE INDEX ON public.matches(user_id, created_at DESC);
GRANT SELECT ON public.matches TO authenticated;
GRANT ALL ON public.matches TO service_role;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own matches" ON public.matches FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.rounds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id uuid NOT NULL REFERENCES public.matches(id) ON DELETE CASCADE,
  number int NOT NULL,
  player_score int NOT NULL DEFAULT 0,
  codificador_score int NOT NULL DEFAULT 0,
  winner text CHECK (winner IN ('player','codificador')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (match_id, number)
);
GRANT SELECT ON public.rounds TO authenticated;
GRANT ALL ON public.rounds TO service_role;
ALTER TABLE public.rounds ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own rounds" ON public.rounds FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.matches m WHERE m.id = match_id AND m.user_id = auth.uid()));

CREATE TABLE public.answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id uuid NOT NULL REFERENCES public.matches(id) ON DELETE CASCADE,
  round_id uuid NOT NULL REFERENCES public.rounds(id) ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES public.questions(id),
  player_option char(1),
  player_correct boolean,
  codificador_option char(1),
  codificador_correct boolean,
  served_at timestamptz NOT NULL DEFAULT now(),
  answered_at timestamptz
);
CREATE INDEX ON public.answers(match_id);
GRANT SELECT ON public.answers TO authenticated;
GRANT ALL ON public.answers TO service_role;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own answers" ON public.answers FOR SELECT TO authenticated
  USING (answered_at IS NOT NULL AND EXISTS (SELECT 1 FROM public.matches m WHERE m.id = match_id AND m.user_id = auth.uid()));

CREATE POLICY "avatar public read" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "avatar own insert" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "avatar own update" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "avatar own delete" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);