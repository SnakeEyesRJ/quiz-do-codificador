ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS bio text;

ALTER TABLE public.matches
  ADD COLUMN IF NOT EXISTS difficulty text NOT NULL DEFAULT 'normal'
  CHECK (difficulty IN ('facil', 'normal', 'dificil', 'expert'));

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

DROP POLICY IF EXISTS "own profile select" ON public.profiles;
CREATE POLICY "own profile select" ON public.profiles
  FOR SELECT TO authenticated
  USING ((SELECT auth.uid()) = id);

DROP POLICY IF EXISTS "own profile insert" ON public.profiles;
CREATE POLICY "own profile insert" ON public.profiles
  FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid()) = id);

DROP POLICY IF EXISTS "own profile update" ON public.profiles;
CREATE POLICY "own profile update" ON public.profiles
  FOR UPDATE TO authenticated
  USING ((SELECT auth.uid()) = id)
  WITH CHECK ((SELECT auth.uid()) = id);

DROP POLICY IF EXISTS "own matches" ON public.matches;
CREATE POLICY "own matches" ON public.matches
  FOR SELECT TO authenticated
  USING ((SELECT auth.uid()) = user_id);

DROP POLICY IF EXISTS "own rounds" ON public.rounds;
CREATE POLICY "own rounds" ON public.rounds
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.matches m
      WHERE m.id = match_id AND m.user_id = (SELECT auth.uid())
    )
  );

DROP POLICY IF EXISTS "own answers" ON public.answers;
CREATE POLICY "own answers" ON public.answers
  FOR SELECT TO authenticated
  USING (
    answered_at IS NOT NULL
    AND EXISTS (
      SELECT 1 FROM public.matches m
      WHERE m.id = match_id AND m.user_id = (SELECT auth.uid())
    )
  );

DROP POLICY IF EXISTS "questions service role access" ON public.questions;
CREATE POLICY "questions service role access" ON public.questions
  FOR SELECT TO service_role
  USING (true);

DROP POLICY IF EXISTS "avatar public read" ON storage.objects;
DROP POLICY IF EXISTS "avatar own read" ON storage.objects;
CREATE POLICY "avatar own read" ON storage.objects
  FOR SELECT TO authenticated
  USING (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::text
  );

DROP POLICY IF EXISTS "avatar own insert" ON storage.objects;
CREATE POLICY "avatar own insert" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::text
  );

DROP POLICY IF EXISTS "avatar own update" ON storage.objects;
CREATE POLICY "avatar own update" ON storage.objects
  FOR UPDATE TO authenticated
  USING (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::text
  )
  WITH CHECK (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::text
  );

DROP POLICY IF EXISTS "avatar own delete" ON storage.objects;
CREATE POLICY "avatar own delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::text
  );

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('avatars', 'avatars', false, 8388608, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO UPDATE
SET public = EXCLUDED.public,
    file_size_limit = EXCLUDED.file_size_limit,
    allowed_mime_types = EXCLUDED.allowed_mime_types;

CREATE INDEX IF NOT EXISTS answers_question_id_idx ON public.answers(question_id);
CREATE INDEX IF NOT EXISTS answers_round_id_idx ON public.answers(round_id);
