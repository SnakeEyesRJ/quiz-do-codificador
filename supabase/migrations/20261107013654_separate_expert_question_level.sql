-- Add a dedicated Expert tier to the question bank.
-- This migration was applied to the connected Supabase project as
-- 20261107013654 (separate_expert_question_level); keep the SQL in Git
-- so a fresh database can reproduce the same four-level difficulty model.

ALTER TABLE public.questions
  DROP CONSTRAINT IF EXISTS questions_difficulty_check;

ALTER TABLE public.questions
  ADD CONSTRAINT questions_difficulty_check
  CHECK (difficulty IN ('facil', 'medio', 'dificil', 'expert'));

-- Preserve the exact Expert classification currently used by the live bank.
UPDATE public.questions
SET difficulty = 'expert'
WHERE active
  AND (
    (book = 'ceu_inferno' AND code IN (106, 112, 127, 134, 138, 139, 142, 145, 147, 150))
    OR (book = 'genese' AND code IN (155, 156, 162, 169, 180, 182, 190, 193, 195, 197))
    OR (book = 'livro_mediuns' AND code IN (203, 207, 212, 215, 224, 226, 232, 237, 242, 248))
    OR (book = 'nosso_lar' AND code IN (320, 323, 327, 329, 330, 331, 334, 338, 343, 347))
    OR (book = 'o_que_e_espiritismo' AND code IN (823, 830, 832, 835, 840, 842, 846, 851, 854, 856, 857, 862, 868, 876, 879, 880, 882, 889, 894, 898))
    OR (book = 'obras_postumas' AND code IN (255, 259, 261, 263, 268, 269, 272, 273, 287, 293))
    OR (book = 'os_mensageiros' AND code IN (358, 359, 362, 363, 368, 372, 374, 378, 396, 398))
  );
