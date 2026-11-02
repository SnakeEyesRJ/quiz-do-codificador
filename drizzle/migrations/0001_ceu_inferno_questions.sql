-- Migration: Add ceu_inferno to questions book check and insert 50 questions from O Céu e o Inferno
DO $$
BEGIN
  ALTER TABLE public.questions DROP CONSTRAINT IF EXISTS questions_book_check;
  ALTER TABLE public.questions ADD CONSTRAINT questions_book_check CHECK (book IN ('livro_espiritos', 'evangelho', 'ceu_inferno'));
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  101,
  'ceu_inferno',
  'De acordo com Allan Kardec no Capítulo I de O Céu e o Inferno, qual é a principal consequência moral da crença no nada (niilismo)?',
  'Estimular a solidariedade e o amor fraterno desinteressado.',
  'Concentrar todos os pensamentos do homem na vida presente, justificando o egoísmo e a busca desmedida do prazer material.',
  'Conduzir espontaneamente o ser humano à ascese religiosa e à caridade silenciosa.',
  'Despertar a intuição inata da imortalidade e a resignação ante os sofrimentos.',
  'Neutralizar o medo da morte por meio da esperança num reencontro celestial.',
  'B',
  'Kardec demonstra que o niilismo limita os horizontes humanos à existência carnal, legitimando a satisfação dos apetites materiais a qualquer preço, o que fomenta o egoísmo em detrimento do dever moral.',
  '1ª Parte, Cap. I, item 3',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  102,
  'ceu_inferno',
  'Segundo O Céu e o Inferno, por que a doutrina espírita faz desaparecer o temor da morte?',
  'Porque promete a salvação eterna a todos que realizarem rituais fúnebres adequados.',
  'Porque ensina que a alma entra em um sono perpétuo e sem consciência de sofrimentos.',
  'Porque demonstra que a morte não passa de uma simples transição, revelando a continuidade da vida e dos afetos no mundo espiritual.',
  'Porque anula imediatamente todo e qualquer compromisso cármico contraído na Terra.',
  'Porque garante que todos os Espíritos reencarnam instantaneamente após o passamento.',
  'C',
  'O Espiritismo demonstra experimentalmente que a morte é apenas a destruição do envoltório corporal perecível, conservando a individualidade, as lembranças e as afeições da alma imortal.',
  '1ª Parte, Cap. II, itens 3 e 4',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  103,
  'ceu_inferno',
  'Qual das seguintes causas NÃO é apontada por Kardec no Cap. II como geradora do pavor que os homens costumam ter da morte?',
  'O apego excessivo aos bens e gozos da vida corporal.',
  'Os quadros aterrorizantes do inferno e das chamas eternas difundidos pela educação tradicional.',
  'A ignorância da verdadeira natureza da vida futura.',
  'A certeza empírica e científica de que a alma deixa de existir na decomposição corporal.',
  'A ideia errônea de que a alma fica isolada para sempre na imensidade sem rever seus entes queridos.',
  'D',
  'Kardec ressalta que o homem teme a morte pelo apego aos bens materiais, pela falta de clareza sobre o Além e pelas representações trágicas do inferno, e não por qualquer demonstração científica de aniquilamento da alma.',
  '1ª Parte, Cap. II, itens 1 e 2',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  104,
  'ceu_inferno',
  'Em relação ao céu, qual é o ensinamento de Allan Kardec no Capítulo III de O Céu e o Inferno?',
  'O céu é uma região espacial fixa situada no centro da Via Láctea, habitada exclusivamente por santos.',
  'O céu não é uma circunscrição geográfica nem um lugar circunscrito, mas um estado de felicidade moral da alma pura espalhada pela imensidade do Universo.',
  'O céu é um palácio etéreo criado por Deus antes da fundação dos mundos materiais.',
  'Apenas os Espíritos que passaram pelo martírio físico possuem acesso às camadas do céu superior.',
  'O céu é um local provisório onde as almas descansam em repouso passivo até o Juízo Final.',
  'B',
  'No Espiritismo, o céu não está circunscrito a um lugar privilegiado: o Universo inteiro é morada dos Espíritos, e o ''céu'' representa o estado íntimo de pureza, elevação e plenitude espiritual.',
  '1ª Parte, Cap. III, itens 1 a 4',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  105,
  'ceu_inferno',
  'Ao analisar a gênese histórica do dogma do inferno no Cap. IV, Kardec explica que a ideia de suplícios eternos pelo fogo teve como modelo direto:',
  'A filosofia iluminista francesa do século XVIII.',
  'O Tártaro e a mitologia pagã dos gregos e romanos, adaptados e materializados pelas tradições antigas.',
  'As comunicações mediúnicas dos primeiros apóstolos em Jerusalém.',
  'A cosmologia moderna elaborada por astrônomos renascentistas.',
  'Os princípios de reencarnação progressiva ensinados pelos profetas hebreus.',
  'B',
  'Kardec pontua que as descrições tradicionais do inferno reproduzem quase textualmente os horrores materiais do Tártaro pagão (fogo, caldeirões, demônios com forquilhas), concepção herdada de épocas em que o homem só compreendia punições físicas.',
  '1ª Parte, Cap. IV, itens 1 a 6',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  106,
  'ceu_inferno',
  'Por que o conceito teológico de ''Limbo'' das crianças mortas sem batismo é considerado inconsistente com a justiça de Deus segundo O Céu e o Inferno?',
  'Porque as crianças são anjos isentos das leis universais de Deus.',
  'Porque privar uma alma da visão beatífica eterna por falta de um sacramento exterior executado por terceiros fere a justiça e a bondade divinas.',
  'Porque no momento da morte a criança é compulsoriamente transportada para o inferno de fogo.',
  'Porque o batismo exterior apaga irrevogavelmente todo o passado evolutivo de um Espírito.',
  'Porque apenas os adultos possuem envoltório periespiritual suscetível de sensações morais.',
  'B',
  'Kardec evidencia o absurdo moral de condenar uma criatura indefesa à exclusão eterna da bem-aventurança unicamente pela omissão de uma cerimônia física da qual ela não participou conscientemente.',
  '1ª Parte, Cap. IV, item 13',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  107,
  'ceu_inferno',
  'Como o Espiritismo interpreta a ideia do Purgatório exposta no Capítulo V de O Céu e o Inferno?',
  'Rejeita-a integralmente, afirmando que a alma culpada vai direto para a aniquilação total.',
  'Considera que a Terra e os mundos de expiação e provas são o verdadeiro purgatório, no qual as almas se depuram através das reencarnações sucessivas.',
  'Confirma a existência de um local subterrâneo com chamas atenuadas onde as almas aguardam orações pagas.',
  'Admite o purgatório apenas para os Espíritos que cometeram delitos contra a hierarquia sacerdotal.',
  'Encoraja o comércio de indulgências pecuniárias para acelerar a liberação das almas detidas.',
  'B',
  'O Espiritismo reconhece o valor intuitivo do Purgatório como transição temporária e corretiva, mas ensina que a verdadeira purgação das faltas ocorre no labor educativo das reencarnações na Terra e em outros orbes congêneres.',
  '1ª Parte, Cap. V, itens 1 e 5',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  108,
  'ceu_inferno',
  'Qual o argumento lógico formulado por Kardec para refutar a eternidade absoluta das penas no Cap. VI de O Céu e o Inferno?',
  'Deus não se importa com a conduta moral dos homens na Terra.',
  'Uma falta temporal cometida por um ser finito e falível não pode receber um castigo infinito de um Deus soberanamente justo e bom.',
  'O mal é mais poderoso que o bem, impedindo o Criador de redimir seus filhos.',
  'Os pecadores desaparecem completamente no momento do desencarne por ausência de fluido vital.',
  'Apenas os demônios têm permissão de sofrer por tempo indeterminado.',
  'B',
  'Kardec frisa que uma punição sem termo nem finalidade corretiva representaria vingança estéril, incompatível com a justiça e a misericórdia infinitas do Criador.',
  '1ª Parte, Cap. VI, itens 1 a 4',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  109,
  'ceu_inferno',
  'No Cap. VI de O Céu e o Inferno, Kardec cita a passagem do profeta Ezequiel (Ez 18:23 e 33:11) para demonstrar que Deus:',
  'Deseja que todos os pecadores ardam eternamente para servir de exemplo aos justos.',
  'Não quer a morte do ímpio, mas sim que ele se converta, mude de caminho e viva.',
  'Exige sacrifícios de sangue para aplacar sua ira cósmica.',
  'Predeterminou que a maioria da humanidade seja irrevogavelmente condenada.',
  'Estabeleceu o batismo ritual como condição obrigatória de salvação da alma.',
  'B',
  'Kardec recorre às próprias Escrituras para demonstrar que a pedagogia de Deus visa a transformação moral e a vida do pecador, e nunca a sua condenação estéril e perpétua.',
  '1ª Parte, Cap. VI, item 13',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  110,
  'ceu_inferno',
  'No ''Código Penal da Vida Futura'' (Capítulo VII), qual é o princípio número 1 referente à origem das penas do Espírito?',
  'A alma é punida por decreto arbitrário de tribunais celestes compostos por arcanjos.',
  'A alma sofre as consequências diretas de suas próprias imperfeições, encontrando em si mesma a causa de sua infelicidade.',
  'O sofrimento é infligido exclusivamente pela ação de espíritos obsessores autorizados por Deus.',
  'O castigo da alma depende do julgamento dos sacerdotes que a assistiram na agonia.',
  'O sofrimento após a morte é sempre de natureza física e transmitido por fluidos materiais incandescentes.',
  'B',
  'O item 1 do Código Penal da Vida Futura estabelece que a alma traz em si o princípio de sua felicidade ou desdita, sofrendo as consequências naturais de suas próprias imperfeições morais.',
  '1ª Parte, Cap. VII, Código Penal da Vida Futura, item 1',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  111,
  'ceu_inferno',
  'De acordo com o Código Penal da Vida Futura (item 16), o que é estritamente necessário para que a alma culpada alcance a reabilitação completa perante a Lei Divina?',
  'Apenas receber orações de parentes encarnados em dias determinados.',
  'Somente o arrependimento verbal pronunciado diante de um ministro religioso.',
  'O concurso de três condições indispensáveis: o arrependimento, a expiação e a reparação.',
  'Uma única reencarnação na opulência para distribuir riquezas materiais.',
  'A permanência isolada nas regiões abismais até que o planeta Terra se extinga.',
  'C',
  'Conforme o item 16 do Código Penal, o arrependimento é o primeiro passo de conscientização, a expiação purifica o ser pelas dores que o educam, e a reparação apaga o mal causado mediante o bem ativo.',
  '1ª Parte, Cap. VII, Código Penal da Vida Futura, item 16',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  112,
  'ceu_inferno',
  'Segundo o Código Penal da Vida Futura (item 21), de que depende essencialmente a duração do castigo ou do sofrimento de um Espírito?',
  'De uma sentença judicial definitiva e imutável proferida no instante do passamento.',
  'Do tempo que seus herdeiros levaram para erigir um túmulo suntuoso.',
  'Da persistência do próprio Espírito no erro e de sua vontade de converter-se ao bem.',
  'Da influência dos astros e dos ciclos solares sobre a região perispiritual.',
  'De uma cota mínima inalterável de séculos de expiação fixada para cada tipo de pecado.',
  'C',
  'O sofrimento dura enquanto perdura o apego ao mal. Logo que o Espírito se arrepende sinceramente e busca a corrigenda moral, a misericórdia de Deus lhe abre as portas da reabilitação.',
  '1ª Parte, Cap. VII, Código Penal da Vida Futura, item 21',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  113,
  'ceu_inferno',
  'No item 25 do Código Penal da Vida Futura, como Kardec define a relação entre a natureza da falta cometida e a natureza da expiação?',
  'A expiação é sempre aleatória, sem correlação necessária com os vícios passados.',
  'Há sempre uma correspondência moral estreita entre a falta e o castigo, sofrendo o indivíduo naquilo em que pecou.',
  'A expiação atinge exclusivamente o corpo físico, jamais afetando a consciência do Espírito.',
  'Os crimes de sangue são perdoados automaticamente, ao passo que as faltas leves exigem dores atrozes.',
  'O castigo é tanto menor quanto maior tiver sido a vaidade do indivíduo.',
  'B',
  'Pela lei de correspondência e de talião moral, o orgulhoso expia pela humilhação, o avarento pela penúria, o egoísta pelo abandono, sentindo na própria alma as dores que infligiu aos outros.',
  '1ª Parte, Cap. VII, Código Penal da Vida Futura, item 25',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  114,
  'ceu_inferno',
  'Em O Céu e o Inferno (Cap. VIII), qual é a diferença fundamental entre a concepção dogmática tradicional dos anjos e a concepção espírita?',
  'A Igreja crê que os anjos já foram demônios arrependidos; o Espiritismo diz que são espíritos da natureza vegetal.',
  'A teologia tradicional afirma que os anjos foram criados perfeitos e privilegiados desde a origem; o Espiritismo ensina que todos foram criados simples e ignorantes e atingiram a pureza angélica por esforço próprio através de múltiplas vidas.',
  'O Espiritismo nega terminantemente a existência de Espíritos puros na hierarquia cósmica.',
  'A doutrina espírita afirma que apenas seres extraterrestres podem alcançar a categoria de anjos protetores.',
  'A tradição ensina que os anjos necessitam de asas materiais para cruzar o espaço etéreo.',
  'B',
  'Kardec ressalta a justiça e imparcialidade de Deus: ninguém é criado em privilégio aristocrático; todos os Espíritos partem do mesmo ponto e conquistam a condição de anjo (Espírito puro) por meio de seu próprio progresso moral e intelectual.',
  '1ª Parte, Cap. VIII, itens 1 a 6',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  115,
  'ceu_inferno',
  'Como o Espiritismo, no Capítulo IX de O Céu e o Inferno, conceitua os chamados ''demônios''?',
  'Seres criados intrinsecamente para o mal perpétuo, liderados por uma entidade rival e igual em poder a Deus.',
  'Monstros zoomórficos de chifres e cauda que habitam as entranhas subterrâneas da crosta terrestre.',
  'Espíritos ainda atrasados e imperfeitos que temporariamente se comprazem no mal, mas que um dia hão de se converter e evoluir para o bem.',
  'Almas de criminosos que perderam irremediavelmente a centelha divina de sua consciência.',
  'Entidades puramente mitológicas sem nenhuma existência como personalidades espirituais reais.',
  'C',
  'Não existem seres voltados ao mal eterno. Aqueles chamados de demônios são Espíritos da terceira ordem (imperfeitos), rebeldes às leis divinas, suscetíveis todavia de arrependimento e reabilitação na escala progressiva.',
  '1ª Parte, Cap. IX, itens 1 a 5',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  116,
  'ceu_inferno',
  'Ao tratar da intervenção atribuída aos demônios nas manifestações mediúnicas (Cap. X), qual critério racional Allan Kardec estabelece para distinguir a origem das mensagens?',
  'A aprovação prévia e o carimbo de uma autoridade eclesiástica da cidade.',
  'A análise moral dos ensinamentos: bons frutos provêm de boa árvore; palavras de caridade, humildade e sabedoria não provêm de entidades malévolas.',
  'A língua estrangeira em que o médium se expressa durante o transe sonambúlico.',
  'A exibição obrigatória de prodígios físicos e levitações de objetos pesados.',
  'A idade e o nível social da pessoa que atua como médium recepcionista.',
  'B',
  'Kardec aplica o preceito evangélico de Jesus: a árvore se conhece pelos frutos. Se uma mensagem prega o perdão, a fraternidade, a justiça e o amor a Deus, ela procede de Espíritos bons, e não de demônios.',
  '1ª Parte, Cap. X, itens 1 a 8',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  117,
  'ceu_inferno',
  'Por que Moisés proibiu categoricamente a evocação dos mortos entre os hebreus, conforme analisado por Kardec no Cap. XI de O Céu e o Inferno?',
  'Porque o mundo dos mortos não existia na época do Antigo Testamento.',
  'Porque a comunicação com os Espíritos era impossível antes da vinda de Jesus Cristo à Terra.',
  'Para coibir o charlatanismo, a magia mercantilista e as práticas supersticiosas de adivinhação comuns entre os povos pagãos vizinhos.',
  'Porque os Espíritos só tinham autorização para se comunicar com os sumos sacerdotes no Tabernáculo.',
  'Porque a evocação dos mortos provocava doenças contagiosas e pragas no deserto do Sinai.',
  'C',
  'Moisés legislou para um povo inculto e suscetível à idolatria que consultava os mortos como oráculos mágicos com fins vulgares e adivinhatórios. A proibição tinha caráter político-disciplinar e sanitário-moral de época.',
  '1ª Parte, Cap. XI, itens 1 a 12',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  118,
  'ceu_inferno',
  'Qual o fato evangélico demonstrado por Kardec para evidenciar que a proibição mosaica de evocar mortos não era uma condenação absoluta da mediunidade em si mesma?',
  'O próprio Moisés e o profeta Elias compareceram em espírito e conversaram com Jesus no Monte Tabor, na presença dos apóstolos.',
  'Moisés recomendou que os reis posteriores a ele contratassem adivinhos oficiais.',
  'Os Dez Mandamentos revogaram expressamente o livro de Deuteronômio.',
  'O rei Salomão construiu o Templo de Jerusalém dedicado à evocação de almas penadas.',
  'As leis de Moisés caducavam automaticamente a cada jubileu de cinquenta anos.',
  'A',
  'No episódio da Transfiguração (Mateus 17), Jesus comunica-se visivelmente com Moisés e Elias; se toda comunicação com os desencarnados fosse proibida por Deus para sempre, o Cristo não teria inaugurado essa sublime manifestação perante Seus discípulos.',
  '1ª Parte, Cap. XI, item 13',
  'dificil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  119,
  'ceu_inferno',
  'No item 8 do Código Penal da Vida Futura, o que acontece com os Espíritos que praticaram o mal quando chegam à erraticidade?',
  'São arremessados em rios de lava fervente sob a guarda de monstros mitológicos.',
  'Ficam cegos e surdos sem nenhuma percepção do meio cósmico ao seu redor.',
  'Têm a visão constante de suas vítimas e do mal que cometeram, sentindo uma vergonha moral profunda e um remorso pungente.',
  'Esquecem instantaneamente tudo o que fizeram até reencarnarem como animais silvestres.',
  'São julgados por tribunais humanos que já desencarnaram nos séculos anteriores.',
  'C',
  'No plano espiritual, a memória das faltas se desdobra com intensidade. A alma vê continuamente as vítimas que prejudicou e as consequências de sua torpeza, gerando o fogo íntimo da vergonha e do remorso expiatório.',
  '1ª Parte, Cap. VII, Código Penal da Vida Futura, item 8',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  120,
  'ceu_inferno',
  'O que estabelece o item 30 do Código Penal da Vida Futura a respeito da reencarnação como instrumento da justiça de Deus?',
  'A reencarnação é obrigatória apenas para os Espíritos que cometeram homicídios dolosos.',
  'A reencarnação é a lei pela qual a justiça e a misericórdia divinas proporcionam ao culpado a oportunidade de reparar, no próprio cenário da matéria, o mal que causou a outrem.',
  'A alma reencarna infinitas vezes sem jamais alcançar o término da série de renascimentos materiais.',
  'É vedado ao Espírito escolher o gênero de provações que deseja enfrentar na carne.',
  'A reencarnação na Terra sempre ocorre em famílias de status social e financeiro idênticos aos do passado.',
  'B',
  'A reencarnação não é punição arbitrária, mas uma abençoada concessão pedagógica na qual o Espírito pode retificar seus passos, quitar débitos morais e reconciliar-se com seus antigos adversários.',
  '1ª Parte, Cap. VII, Código Penal da Vida Futura, item 30',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  121,
  'ceu_inferno',
  'Segundo Kardec no Cap. I, qual das seguintes afirmativas sobre a certeza da vida futura e da justiça divina é verdadeira?',
  'Induz o homem a esperar milagres divinos sem se dar ao trabalho de agir no bem.',
  'Concede ao homem forças morais para suportar as dores e vicissitudes da Terra, dando sentido lógico às desigualdades temporárias da vida.',
  'Torna o ser humano indiferente às desgraças e aflições de seus semelhantes.',
  'Obriga o crente a abandonar a convivência social para viver isolado no deserto.',
  'Elimina a liberdade de arbítrio na tomada de decisões cotidianas.',
  'B',
  'A fé lúcida no porvir ilumina a finalidade da dor terrena, demonstrando que as provas atuais são transitórias e preparam a felicidade futura, conferindo paciência, resignação e equilíbrio ao Espírito.',
  '1ª Parte, Cap. I, item 4',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  122,
  'ceu_inferno',
  'Onde se localizam os mundos felizes referidos por Kardec no Capítulo III de O Céu e o Inferno?',
  'Em uma redoma inacessível situada além da atmosfera do sistema solar.',
  'Nas infinitas moradas do espaço universal, onde orbes mais evoluídos servem de habitação a humanidades desmaterializadas e fraternas.',
  'Exclusivamente no plano perispiritual da Terra a mil quilômetros de altitude.',
  'No centro do Sol, onde a intensidade da luz purifica todas as imperfeições das almas.',
  'Em constelações imaginárias que não possuem substância física nem atômica.',
  'B',
  'Em conformidade com as palavras de Jesus (''Há muitas moradas na casa de meu Pai''), Kardec esclarece que orbes superiores em vários pontos do Universo abrigam sociedades regeneradas e felizes.',
  '1ª Parte, Cap. III, itens 5 a 7',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  123,
  'ceu_inferno',
  'Qual o impacto pedagógico e moral negativo da crença nas penas eternas sobre os próprios pecadores, segundo Kardec no Cap. VI?',
  'Estimula-os a buscar a redenção rapidamente por medo de perder o prazo.',
  'Leva-os muitas vezes ao desespero e à obstinação no mal, pois a perspectiva de que a condenação é irrevogável anula o incentivo ao esforço de regeneração.',
  'Convence-os a realizar doações anônimas em hospitais e asilos.',
  'Aumenta seu respeito e adoração filial pela suprema bondade do Criador.',
  'Facilita a comunicação fraterna com os anjos protetores de sua família.',
  'B',
  'Quando se prega que o condenado não tem salvação e que seus sofrimentos durarão para sempre independentemente de seu arrependimento, subtrai-se dele a esperança, levando-o à revolta desesperada e ao endurecimento no erro.',
  '1ª Parte, Cap. VI, itens 5 e 6',
  'dificil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  124,
  'ceu_inferno',
  'Conforme o item 33 do Código Penal da Vida Futura, o que acontece com a alma que foi má, ingrata e desumana para com seus semelhantes quando reencarna?',
  'Renasce com dons milagrosos para converter multidões sem esforço moral.',
  'Experimenta, por sua vez, a ingratidão, o desprezo e as humilhações de outros, compreendendo a amargura que antes causou.',
  'Transmigra compulsoriamente para o corpo de um animal irracional rastejante.',
  'É isenta de qualquer provação para que não tenha desculpa de fraquejar novamente.',
  'Herda honrarias e aplausos dos poderosos da Terra como teste de santidade.',
  'B',
  'A lei da reciprocidade moral ensina que o homem colhe o que semeia. O déspota ressurge submetido à tirania; o filho ingrato é ferido pela rebeldia de seus próprios descendentes, para que a dor eduque sua sensibilidade.',
  '1ª Parte, Cap. VII, Código Penal da Vida Futura, item 33',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  125,
  'ceu_inferno',
  'Qual dos seguintes conceitos expressa com fidelidade a filosofia espírita a respeito das categorias de ''anjos'' e ''demônios''?',
  'São duas espécies biológicas criadas separadamente por dois deuses em conflito cósmico.',
  'Anjos e demônios são almas humanas em graus diferentes de adiantamento na mesma escala evolutiva universal.',
  'Os anjos habitam a luz material e os demônios não possuem perispírito nem inteligência.',
  'Os demônios foram concebidos a partir do pecado original de Adão e não podem orar.',
  'Somente os anjos possuem livre-arbítrio; os demônios são programados irrevogavelmente para a destruição.',
  'B',
  'No Espiritismo, a criação é una. Não há seres heterogêneos: anjos são Espíritos que atingiram o ápice do progresso moral, e demônios são Espíritos que ainda estagiam nos degraus inferiores da caminhada espiritual.',
  '1ª Parte, Cap. VIII e IX',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  126,
  'ceu_inferno',
  'O que caracteriza o fenômeno do passamento nos homens que viveram apegados exclusivamente aos prazeres materiais, de acordo com o Cap. I da 2ª Parte de O Céu e o Inferno?',
  'A separação do perispírito é instantânea e acompanhada de alegria imensa.',
  'A ruptura dos laços fluídicos é penosa, lenta e difícil, persistindo uma forte ilusão de que o corpo físico ainda vive.',
  'A alma é de pronto admitida nos mundos superiores para descansar.',
  'O Espírito entra imediatamente em sono letárgico absoluto por vários milênios.',
  'O perispírito se desintegra no ar, ficando apenas o pensamento puro isolado.',
  'B',
  'Quando a vida foi essencialmente carnal, as moléculas perispirituais encontram-se intimamente agregadas à matéria densa; por isso a desincorporação se processa lentamente, com atrito e perturbação aflitiva.',
  '2ª Parte, Cap. I, itens 1 a 4',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  127,
  'ceu_inferno',
  'O que tornou notável a evocação do Sr. Sanson, ex-membro da Sociedade Espírita de Paris, logo após o seu passamento (Cap. II da 2ª Parte)?',
  'Ele precisou de vários meses de orações fúnebres para conseguir articular uma única frase.',
  'Conservou a lucidez completa durante a separação da alma, descrevendo com serenidade o desprendimento progressivo do corpo e o alívio que sentiu.',
  'Ficou revoltado por ter abandonado as honrarias terrestres e o círculo intelectual de Paris.',
  'Pediu que suas cinzas fossem levadas a um templo antigo do oriente.',
  'Declarou que não existia Deus e que o Universo era regido pelo acaso mecânico.',
  'B',
  'O Sr. Sanson, tendo se preparado moralmente pela fé raciocinada e pelo desprendimento, vivenciou a desincorporação em plena consciência espiritual, descrevendo com precisão os laços fluídicos se desatando suavemente.',
  '2ª Parte, Cap. II, Sr. Sanson',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  128,
  'ceu_inferno',
  'Como o inventor Jobard descreveu suas sensações logo após deixar o envoltório corporal (Cap. II da 2ª Parte)?',
  'Sofreu um terrível pesadelo com animais monstruosos no fundo do mar.',
  'Sentiu-se tão leve que comparou sua libertação a um pássaro que se evola da gaiola, reconhecendo de imediato a realidade da vida espiritual.',
  'Acreditou que continuava vivo na sua oficina em Bruxelas e pediu seus instrumentos de trabalho.',
  'Perdeu totalmente a capacidade de reconhecer seus velhos amigos e colaboradores.',
  'Queixou-se de que o além-túmulo era silencioso e vazio de ideias inovadoras.',
  'B',
  'Jobard, espírito jovial, laborioso e desprendido das vaidades, experimentou um despertar radioso e sem perturbação sensível, maravilhado com a expansão de suas faculdades no mundo espiritual.',
  '2ª Parte, Cap. II, Jobard',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  129,
  'ceu_inferno',
  'Qual foi a principal virtude demonstrada em vida pelo humilde operário Samuel Philippe, que lhe assegurou uma condição feliz no mundo espiritual (Cap. II da 2ª Parte)?',
  'A acumulação de grandes fortunas para erguer basílicas suntuosas.',
  'A resignação heróica e a caridade evangélica de perdoar de coração a quem o caluniou e perseguiu injustamente.',
  'O domínio das línguas clássicas e a erudição teológica perante a academia.',
  'A renúncia total ao trabalho diário para viver isolado da família.',
  'A capacidade de fazer previsões astrológicas infalíveis sobre guerras mundiais.',
  'B',
  'Samuel Philippe viveu com humildade, suportando a calúnia sem ódio e devolvendo o bem pelo mal, o que elevou seu Espírito aos mais luminosos e serenos páramos da erraticidade.',
  '2ª Parte, Cap. II, Samuel Philippe',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  130,
  'ceu_inferno',
  'Logo após seu desencarne, como o Dr. Demeure revelou estar empregando suas atividades no mundo espiritual (Cap. II da 2ª Parte)?',
  'Permanecia em repouso passivo e sem se preocupar com os enfermos da Terra.',
  'Continuava a atuar como médico das almas, assistindo espiritualmente aos doentes e aliviando o sofrimento dos encarnados.',
  'Exigia homenagens públicas e estátuas de bronze erigidas em sua homenagem na faculdade de medicina.',
  'Reclamava que no plano espiritual não encontrava medicamentos químicos terrestres.',
  'Reencarnou no mesmo dia como monarca de um país longínquo.',
  'B',
  'O Dr. Demeure, que fora na Terra apóstolo da medicina caridosa, prosseguiu no Além com sua nobre vocação, visitando doentes, confortando aflitos e cooperando no tratamento fluídico de sofredores.',
  '2ª Parte, Cap. II, Dr. Demeure',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  131,
  'ceu_inferno',
  'Qual lição a Condessa Paula transmitiu através de sua comunicação em O Céu e o Inferno (Cap. II da 2ª Parte) a respeito da riqueza material?',
  'Que a riqueza condena inevitavelmente qualquer alma que a possua ao fogo do inferno.',
  'Que a fortuna é uma prova difícil, mas pode ser santificada quando usada com desprendimento, beneficência ativa e sem ostentação orgulhosa.',
  'Que o luxo e a nobreza terrena continuam a dar privilégios de casta no mundo dos Espíritos.',
  'Que os ricos não necessitam de caridade moral, bastando fazer testamentos filantrópicos ao falecer.',
  'Que a alma de um nobre não pode manter contato com almas de pessoas de origem humilde.',
  'B',
  'Jovem, bela e riquíssima, a Condessa Paula fez de seus bens um instrumento de socorro aos deserdados sem nunca se envaidecer, demonstrando que o mérito reside no emprego cristão dos recursos confiados por Deus.',
  '2ª Parte, Cap. II, Condessa Paula',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  132,
  'ceu_inferno',
  'Na comunicação da jovem Srta. Emma (Cap. II da 2ª Parte), desencarnada na flor da juventude, qual foi o sentimento relatado ao despertar no plano espiritual?',
  'O espanto de não encontrar o inferno aterrorizante de que lhe falavam e a inefável alegria de rever entes queridos na luz.',
  'O desespero de ter perdido suas festas mundanas e seus vestidos de baile.',
  'A frustração de ter de caminhar por desertos de cinzas escuras durante séculos.',
  'A dor excruciante de chamas materiais queimando seu perispírito.',
  'A perda completa de sua personalidade e absorção em uma força impessoal.',
  'A',
  'Dotada de pureza de sentimentos, a jovem Emma desatou os laços terrenos sem dor e despertou rodeada de Espíritos benfazejos, atestando a brandura com que os Espíritos bons deixam a carne.',
  '2ª Parte, Cap. II, Srta. Emma',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  133,
  'ceu_inferno',
  'O caso do Marquês de Saint-Paul (Cap. III da 2ª Parte) exemplifica a situação dos Espíritos medianos que na Terra:',
  'Cometeram crimes sangrentos e traição pública.',
  'Não fizeram maldades atrozes, mas desperdiçaram a existência no egoísmo fútil, no luxo inútil e na esterilidade moral, experimentando o tédio e a amargura da mediocridade.',
  'Foram proclamados santos pelas comunidades religiosas de sua época.',
  'Praticaram o suicídio após perderem títulos de nobreza na revolução.',
  'Trabalharam incansavelmente no socorro aos desvalidos e doentes incuráveis.',
  'B',
  'O Marquês não fora criminoso, mas viveu unicamente para o gozo mundano e as aparências sociais. No Além, não arde em fogueiras, mas sofre o tormento do vazio, do tédio espiritual e da inferioridade perante os que progrediram.',
  '2ª Parte, Cap. III, Marquês de Saint-Paul',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  134,
  'ceu_inferno',
  'Na comunicação de Joseph Bré (Cap. III da 2ª Parte), qual era o estado moral que o impedia de elevar-se a regiões de maior luz e paz?',
  'A crueldade de ter escravizado populações nativas indefesas.',
  'O apego excessivo aos hábitos materiais e a ausência de aspirações espirituais superiores durante a vida física.',
  'O hábito de zombar abertamente da fé religiosa em praça pública.',
  'Ter sido um revolucionário violento procurado pela polícia francesa.',
  'Ter escondido um cofre com barras de ouro de sua própria família.',
  'B',
  'Joseph Bré personifica o cidadão comum cumpridor das leis humanas, mas totalmente indiferente à vida do espírito e ao próximo. Sua alma permaneceu na apatia e na densidade das camadas fluídicas terrestres.',
  '2ª Parte, Cap. III, Joseph Bré',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  135,
  'ceu_inferno',
  'Nas evocações de Ferdinand Bertin e Pascal Lavic (afogados e náufragos, Cap. IV da 2ª Parte), por que esses Espíritos continuavam a sentir a agonia da asfixia mesmo após o desenlace físico?',
  'Porque foram alvos de maldições lançadas pelos passageiros sobreviventes.',
  'Porque o forte laço fluídico que prendia o perispírito ao corpo material repercutiu as sensações físicas da asfixia enquanto durou a perturbação decorrente do apego material.',
  'Porque a água salgada do oceano destrói os fluidos perispirituais da alma.',
  'Porque os anjos da guarda os abandonaram nas profundezas oceânicas.',
  'Porque cometeram suicídio voluntário ao desafiar as ondas do mar.',
  'B',
  'A violência repentina da morte somada ao apego às sensações corporais faz com que o perispírito repercuta temporariamente as impressões de sufocamento e de frio vividas nos instantes finais da tragédia.',
  '2ª Parte, Cap. IV, Ferdinand Bertin e Pascal Lavic',
  'dificil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  136,
  'ceu_inferno',
  'Qual era a causa central do sofrimento do Príncipe Ouran (Cap. IV da 2ª Parte) no mundo espiritual?',
  'Sentir-se despojado de suas carruagens e privilégios mundanos, humilhado em sua nudez moral e impotente perante aqueles a quem outrora desprezou.',
  'Sofrer agressões físicas infligidas por demônios armados de tridentes de ferro.',
  'A perda total da fala e da visão por determinação de sentinelas celestes.',
  'O frio de uma cela escura no castelo de seus ancestrais.',
  'Estar prisioneiro em uma montanha isolada do oriente médio.',
  'A',
  'Antigo déspota acostumado ao comando tirânico, o Príncipe Ouran vê desmoronar todas as suas ilusões de grandeza mundana. Ele se vê pequeno, feio, desprovido de criados e zombado pelos que tiranizara na carne.',
  '2ª Parte, Cap. IV, O Príncipe Ouran',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  137,
  'ceu_inferno',
  'O célebre caso do suicida que se atirou da ponte da Samaritana, no rio Sena (Cap. V da 2ª Parte), revela qual dolorosa realidade perispiritual?',
  'O suicida entra no paraíso porque a morte pela água purifica todas as manchas da alma.',
  'O Espírito não encontrou o aniquilamento que buscava e permaneceu ligado ao cadáver, sentindo as águas geladas, a asfixia contínua e a decomposição dos tecidos cadavéricos.',
  'A alma do suicida é imediatamente transmutada em substância inerte por um milênio.',
  'O suicida perdeu a memória e passou a imaginar que era um ser aquático do rio Sena.',
  'Uma equipe de benfeitores o transportou de imediato a um centro de recreação etéreo.',
  'B',
  'O Espírito relata com pavor que acreditava extinguir a consciência no rio, mas continuou vivo sentindo a água nos pulmões, os vermes na carne e o suplício atroz de estar magneticamente preso ao cadáver.',
  '2ª Parte, Cap. V, O suicida da Samaritana',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  138,
  'ceu_inferno',
  'No relato ''O pai e o conscrito'' (Cap. V da 2ª Parte), um pai se suicida para isentar o filho único da convocação militar. Qual foi o desfecho espiritual dessa atitude?',
  'O pai foi aclamado no plano espiritual pela grandeza heroica de seu gesto altruísta.',
  'O ato foi inútil perante as leis divinas: o pai sofreu dura expiação moral e não impediu que o filho enfrentasse as provações reservadas à sua própria evolução.',
  'O filho foi promovido a oficial de honra e isento de combater na guerra.',
  'O pai recebeu autorização para proteger o filho com uma couraça invisível.',
  'As autoridades declararam luto oficial e homenagearam a família com uma pensão vitalícia.',
  'B',
  'Kardec demonstra que nenhuma violação da Lei Divina produz frutos reais de paz. Ninguém tem o direito de abreviar a própria existência com a desculpa de intervir no destino alheio por meios violentos.',
  '2ª Parte, Cap. V, O pai e o conscrito',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  139,
  'ceu_inferno',
  'No episódio de Louis e da jovem pespontadeira (Cap. V da 2ª Parte), que se suicidaram juntos por desilusão amorosa, o que aconteceu com os amantes no Além?',
  'Foram unidos em matrimônio celestial eterno numa colônia de paz.',
  'Em vez da sonhada união idílica, encontraram-se envoltos em trevas e sofrimentos, acusando-se mutuamente e amargando a inconsequência de seu gesto.',
  'Foram enviados para planetas distintos situados em constelações opostas.',
  'Reencarnaram no dia seguinte como irmãos gêmeos em Paris.',
  'Receberam de pronto o dom de inspirar poetas românticos encarnados.',
  'B',
  'O suicídio conjunto na ilusão romântica de ''ficarem juntos para sempre'' desfez a fantasia: no Além, o sofrimento perispiritual e o remorso deram lugar a desentendimentos, desespero e queixas recíprocas.',
  '2ª Parte, Cap. V, Louis e a pespontadeira',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  140,
  'ceu_inferno',
  'O que mais estarreceu o ateu J.-B. D. (Cap. V da 2ª Parte) após atentar contra a própria vida na convicção do nada absoluto?',
  'Ver que Deus tinha a fisionomia física de um imperador terreno.',
  'O fato de continuar a pensar, sentir e sofrer, constatando perplexo que a morte do corpo não extinguira sua alma imortal.',
  'Encontrar um conselho de juízes vestidos com togas pretas medievais.',
  'Ver que o planeta Terra era observado por civilizações de outras galáxias.',
  'Descobrir que os médiuns da Sociedade de Paris previram sua morte em detalhes.',
  'B',
  'O suicida ateu buscou a extinção do pensamento, mas deparou-se com o choque de sua própria lucidez indestrutível, preso às angústias das quais intentava fugir pelo aniquilamento carnal.',
  '2ª Parte, Cap. V, Um ateu',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  141,
  'ceu_inferno',
  'Na comunicação de Jacques Latour (Cap. VI da 2ª Parte), executado na guilhotina por crimes graves, o que caracteriza a sua postura espiritual?',
  'A revolta vingativa e o juramento de ódio perpétuo contra a sociedade humana.',
  'O despertar sincero para o arrependimento, a súplica humilde por preces e a aceitação resignada da justiça de seus sofrimentos morais.',
  'O cinismo sarcástico, afirmando que repetiria todas as atrocidades se pudesse.',
  'A exigência de que a Igreja lhe outorgasse indulgência plenária imediata.',
  'A amnésia total sobre as pessoas e famílias que prejudicou.',
  'B',
  'Latour não culpa a Deus nem à sociedade: sua alma reconhece a gravidade de seus crimes, suplica as preces dos espíritas comovidos e aceita a dor expiatória como remédio bendito para sua regeneração.',
  '2ª Parte, Cap. VI, Jacques Latour',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  142,
  'ceu_inferno',
  'Qual era o suplício moral invisível experimentado pelo Espírito do assassino de Castelnaudary (Cap. VI da 2ª Parte)?',
  'Ficar flutuando sem gravidade no vácuo espacial por vários séculos.',
  'Permanecer ligado magneticamente ao cenário do delito, revivendo sem cessar a cena sangrenta e tendo diante dos olhos a imagem de sua vítima.',
  'Sentir picadas contínuas de animais peçonhentos astrais.',
  'Vagar sem rumo pelos edifícios públicos da capital francesa.',
  'Ficar confinado em um poço seco nas dependências de uma fortaleza militar.',
  'B',
  'O criminoso confessa que o cenário do crime e o horror da morte provocada tornaram-se uma alucinação indelével em sua visão espiritual, constituindo o mais terrível dos purgatórios morais.',
  '2ª Parte, Cap. VI, O assassino de Castelnaudary',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  143,
  'ceu_inferno',
  'No caso do médico Edmond de La Pommerais (Lapommeray, Cap. VII da 2ª Parte), condenado pelo envenenamento premeditado de uma mulher por dinheiro, qual era o seu estado nas primeiras evocações?',
  'Ajoelhado em pranto convulsivo rogando o perdão das pessoas que ofendeu.',
  'Endurecido, cínico, negando a autoria do crime, dominado pelo orgulho e hostil à verdade espiritual.',
  'Subitamente transformado em pregador do Evangelho junto aos encarcerados.',
  'Em estado de letargia total sem capacidade de articular pensamento.',
  'Conduzido a mansões espirituais em função de seus títulos acadêmicos de doutor.',
  'B',
  'Lapommeray ilustra o Espírito endurecido no crime: inteligente na Terra, mas moralmente corrompido, tenta dissimular a culpa mesmo na erraticidade, revelando a teimosia e a cegueira moral dos perversos.',
  '2ª Parte, Cap. VII, Lapommeray',
  'dificil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  144,
  'ceu_inferno',
  'A Rainha de Oude (Cap. VII da 2ª Parte), soberana indiana desencarnada na Europa, manifestava no mundo espiritual qual apego persistente?',
  'A recusa obstinada em aceitar que no Além era igual a qualquer outro ser humano, exigindo reverências e tratamento de realeza perante os demais Espíritos.',
  'O desejo urgente de reencarnar na miséria para experimentar a vida dos servos.',
  'A exigência de moedas de ouro e joias dos membros da Sociedade Espírita de Paris.',
  'A saudade de rituais de queima de oferendas às margens de rios sagrados.',
  'A amargura por não ter construído palácios de mármore branco em Paris.',
  'A',
  'A soberana oriental não conseguia compreender que os títulos terrenos não valem nada no mundo espiritual. Ela protestava contra a igualdade espiritual e não aceitava estar desprovida de sua corte e vassalagem.',
  '2ª Parte, Cap. VII, A Rainha de Oude',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  145,
  'ceu_inferno',
  'No relato de Marcel, o menino disforme e sofredor (Cap. VIII da 2ª Parte), o que o Espírito esclarece sobre o motivo de sua dolorosa paralisia corporal na Terra?',
  'Tratava-se de um castigo arbitrário imposto por forças cósmicas irracionais.',
  'Fora em vida anterior um nobre orgulhoso e vaidoso que escolheu espontaneamente a prova da deformidade corporal para domar a soberba e resgatar o passado.',
  'Era um Espírito recém-criado que nunca havia vivenciado encarnações materiais anteriores.',
  'Sua deformidade decorreu de influências maléficas de feitiçaria antiga.',
  'A paralisia física servia unicamente para desenvolver faculdades de telepatia mecânica.',
  'B',
  'Marcel revela a sublime sabedoria da reencarnação: a disformidade física foi solicitada por ele próprio na erraticidade como antídoto salutar contra a soberba e a futilidade cultivadas em vidas pregressas.',
  '2ª Parte, Cap. VIII, Marcel, o menino do nº 4',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  146,
  'ceu_inferno',
  'Qual ensinamento moral foi proporcionado pelo mendigo cego Szymel Slizgol (Cap. VIII da 2ª Parte)?',
  'Que a revolta dos necessitados contra os abastados garante méritos espirituais automáticos.',
  'Que a cegueira e a indigência, quando suportadas com serenidade, resignação e partilha fraterna, purificam a alma e representam um triunfo evolutivo.',
  'Que a deficiência visual autoriza a pessoa a descumprir as leis de cortesia humana.',
  'Que os desprovidos de recursos materiais estão dispensados de prestar contas de suas condutas a Deus.',
  'Que a esmola material em dinheiro apaga integralmente os débitos morais pretéritos.',
  'B',
  'Szymel mendigou sem blasfemar e dividia seu pouco pão com outros desvalidos; sua comunicação brilha pela dignidade e pelo reconhecimento do imenso valor expiatório e educativo de sua provação na carne.',
  '2ª Parte, Cap. VIII, Szymel Slizgol',
  'facil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  147,
  'ceu_inferno',
  'Em existência anterior, qual fora a condição do Espírito Max (Cap. VIII da 2ª Parte), que na última vida fora um mendigo solitário e desprezado?',
  'Um modesto agricultor nos campos do interior da França.',
  'Um príncipe déspota e desumano que abusara do poder e da opulência, deixando suas populações perecerem na penúria e no abandono.',
  'Um pregador cristão primitivo sacrificado nas arenas de Roma.',
  'Um poeta andarilho que recusava honras e cargos públicos.',
  'Um marinheiro náufrago em ilhas remotas do hemisfério sul.',
  'B',
  'A lei da causalidade moral colocou o antigo opressor na condição dos deserdados que outrora pisoteou, ensinando-lhe na carne o peso da fome, do desprezo social e do desamparo absoluto.',
  '2ª Parte, Cap. VIII, Max, o mendigo',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  148,
  'ceu_inferno',
  'No caso de Antonio B... (Cap. VIII da 2ª Parte), que teve ambos os braços amputados por uma máquina de trabalho, que revelação espiritual esclareceu o acontecimento?',
  'Tratou-se de uma fatalidade cega sem nenhuma raiz nas suas vidas passadas.',
  'A aplicação da lei de causa e efeito: em encarnação anterior, fora senhor cruel que mandara cortar com machado os braços de um escravo que tentara fugir.',
  'Uma retaliação espiritual porque Antonio não seguiu a vocação do sacerdócio.',
  'Uma provação aleatória sorteada pelos espíritos guardiões da fábrica.',
  'Um meio de torná-lo conhecido internacionalmente pela superação física.',
  'B',
  'Antonio B... reconheceu a perfeita justiça de sua provação: quem com ferro fere, com ferro será ferido; a mutilação sofrida correspondia moralmente à barbaridade que infligira a outrem em vida pretérita.',
  '2ª Parte, Cap. VIII, Antonio B...',
  'dificil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  149,
  'ceu_inferno',
  'O que o Espírito de Letil (Cap. VIII da 2ª Parte), que desencarnou consumido em um trágico incêndio, explicou sobre a causa de sua morte pelo fogo?',
  'Foi um acidente fortuito sem nenhuma correspondência com o passado de sua alma.',
  'Em encarnação pretérita, fora um criminoso impiedoso que incendiara a choupana de seus desafetos indefesos, queimando-os vivos.',
  'Era um mártir voluntário que buscou as chamas para expiar os pecados de seus vizinhos.',
  'Foi vítima de uma possessão demoníaca que o atirou nas labaredas.',
  'Recebera o dom de não sentir dores durante a ação térmica do fogo.',
  'B',
  'Pela rigorosa e compassiva pedagogia divina, Letil colheu nas labaredas a mesma agonia que proporcionara friamente às suas vítimas de antanho, libertando sua consciência do pesado fardo do remorso.',
  '2ª Parte, Cap. VIII, Letil',
  'dificil',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  150,
  'ceu_inferno',
  'O que o Espírito de Charles de Saint-G... (Cap. VIII da 2ª Parte), que viveu na Terra como um jovem idiota congênito, declarou sobre a condição da idiotia perante o Espiritismo?',
  'A idiotia decorre da inexistência transitória da alma no corpo biológico.',
  'O Espírito não é idiota em sua essência; ele conserva sua inteligência integral presa nos liames de um cérebro defeituoso, servindo esse estado de temporário e salutar refreamento contra o orgulho intelectual pretérito.',
  'O deficiente mental incorre em faltas graves perante a lei e por isso é segregado no Além.',
  'A mente de um deficiente mental retrograda permanentemente à condição dos animais rastejantes.',
  'Trata-se de uma anomalia meramente anatômica sem nenhum valor moral para o ser imortal.',
  'B',
  'Kardec pontua um dos princípios mais consoladores da Doutrina: na idiotia, a alma não é deficiente, mas sim um prisioneiro consciente encerrado num instrumento orgânico travado, prova que aniquila a vaidade intelectual pretérita e educa a paciência da alma.',
  '2ª Parte, Cap. VIII, Charles de Saint-G...',
  'medio',
  true
)
ON CONFLICT (statement) DO UPDATE SET
  code = EXCLUDED.code,
  book = EXCLUDED.book,
  option_a = EXCLUDED.option_a,
  option_b = EXCLUDED.option_b,
  option_c = EXCLUDED.option_c,
  option_d = EXCLUDED.option_d,
  option_e = EXCLUDED.option_e,
  correct_option = EXCLUDED.correct_option,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  difficulty = EXCLUDED.difficulty,
  active = EXCLUDED.active;

