ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS bio text;

ALTER TABLE public.matches
  ADD COLUMN IF NOT EXISTS difficulty text NOT NULL DEFAULT 'normal'
  CHECK (difficulty IN ('facil', 'normal', 'dificil', 'expert'));
