-- Reclassify questions that require deeper conceptual synthesis or
-- detailed interpretation so each selected book has a usable difficult pool.
UPDATE public.questions
SET difficulty = 'dificil'
WHERE active
  AND (
    (book = 'ceu_inferno' AND code IN (111, 113, 116, 117))
    OR (book = 'genese' AND code IN (158, 163, 167, 168, 175, 177, 183, 184, 187))
    OR (book = 'livro_mediuns' AND code IN (209))
    OR (book = 'nosso_lar' AND code IN (314, 316, 328, 341, 344))
    OR (book = 'obras_postumas' AND code IN (267))
    OR (book = 'os_mensageiros' AND code IN (356, 361, 364, 369, 371, 373, 375, 391, 400))
    OR (book = 'o_que_e_espiritismo' AND code IN (828, 834, 859, 871, 877, 883))
  )
  AND difficulty = 'medio';
