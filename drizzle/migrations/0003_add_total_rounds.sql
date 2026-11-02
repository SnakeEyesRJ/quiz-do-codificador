-- Migration: Add total_rounds column to matches table (3, 5, 7, 9)
ALTER TABLE public.matches ADD COLUMN IF NOT EXISTS total_rounds int NOT NULL DEFAULT 3 CHECK (total_rounds IN (3, 5, 7, 9));

