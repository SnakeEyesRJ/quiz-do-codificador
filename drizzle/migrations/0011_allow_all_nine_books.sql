ALTER TABLE public.questions DROP CONSTRAINT IF EXISTS questions_book_check;
ALTER TABLE public.questions ADD CONSTRAINT questions_book_check CHECK (book IN (
  'livro_espiritos',
  'evangelho',
  'ceu_inferno',
  'genese',
  'livro_mediuns',
  'obras_postumas',
  'nosso_lar',
  'os_mensageiros',
  'o_que_e_espiritismo'
));
