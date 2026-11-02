-- Migration: Add difficulty column to matches table (facil, normal, dificil, expert)
ALTER TABLE public.matches ADD COLUMN IF NOT EXISTS difficulty text NOT NULL DEFAULT 'normal' CHECK (difficulty IN ('facil', 'normal', 'dificil', 'expert'));

