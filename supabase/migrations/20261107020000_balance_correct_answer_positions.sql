-- Preserve every question and distractor while removing answer-position bias.
-- The previous bank placed the correct answer in option B for 87/100 questions
-- across these two books. A deterministic rotation balances A-E per book.
WITH ranked AS (
  SELECT
    id,
    correct_option,
    row_number() OVER (PARTITION BY book ORDER BY code, id) AS rn,
    array[option_a, option_b, option_c, option_d, option_e] AS opts
  FROM public.questions
  WHERE active AND book IN ('ceu_inferno', 'genese')
),
mapped AS (
  SELECT
    id,
    opts,
    strpos('ABCDE', correct_option) AS old_idx,
    ((rn - 1) % 5 + 1)::int AS new_idx
  FROM ranked
),
rotated AS (
  SELECT
    id,
    new_idx,
    array_agg(opts[ord] ORDER BY ((ord - 1 + new_idx - old_idx + 5) % 5)) AS new_opts
  FROM mapped
  CROSS JOIN generate_series(1, 5) AS ord
  GROUP BY id, new_idx, old_idx, opts
)
UPDATE public.questions q
SET
  option_a = r.new_opts[1],
  option_b = r.new_opts[2],
  option_c = r.new_opts[3],
  option_d = r.new_opts[4],
  option_e = r.new_opts[5],
  correct_option = substr('ABCDE', r.new_idx, 1)
FROM rotated r
WHERE q.id = r.id;
