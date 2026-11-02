-- Migration: Add genese to questions book check and insert 50 questions from A Gênese
DO $$
BEGIN
  ALTER TABLE public.questions DROP CONSTRAINT IF EXISTS questions_book_check;
  ALTER TABLE public.questions ADD CONSTRAINT questions_book_check CHECK (book IN ('livro_espiritos', 'evangelho', 'ceu_inferno', 'genese'));
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  151,
  'genese',
  'Segundo Allan Kardec no Capítulo I de A Gênese, qual é o duplo caráter que define a revelação espírita?',
  'Participa exclusivamente da revelação mística e da inspiração profética sobrenatural.',
  'Participa ao mesmo tempo da revelação divina (pela iniciativa e ensino dos Espíritos) e da revelação científica (pela observação, pesquisa e livre-exame do homem).',
  'Participa da filosofia dogmática tradicional e do ocultismo medieval hermético.',
  'É uma revelação individual restrita a médiuns sacerdotes que atuam como intermediários infalíveis.',
  'É uma compilação de teorias hipotéticas sem nenhuma base experimental ou comprovação lógica.',
  'B',
  'Kardec define que a revelação espírita é divina em sua origem e iniciativa (providencial e ditada pelos Espíritos), e científica em sua elaboração (fruto do trabalho de observação, análise e raciocínio do homem).',
  'Cap. I, item 13',
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
  152,
  'genese',
  'Qual o princípio fundamental estabelecido por Kardec no Cap. I sobre a progressividade e a relação do Espiritismo com a Ciência?',
  'O Espiritismo deve rejeitar todas as descobertas da Ciência material que contrariem os dogmas da fé.',
  'Caminhando de par com o progresso, o Espiritismo jamais será ultrapassado, porque se novas descobertas lhe demonstrassem estar em erro acerca de um ponto qualquer, ele se modificaria nesse ponto.',
  'A Doutrina Espírita foi entregue pronta e imutável pelos Espíritos, não admitindo revisão em nenhum detalhe.',
  'As leis da matéria não guardam nenhuma relação com as leis da espiritualidade ensinadas pelos Espíritos.',
  'Apenas as ciências astronômicas possuem autoridade para validar ou refutar as comunicações mediúnicas.',
  'B',
  'No célebre item 55 do Cap. I, Kardec afirma que o Espiritismo estabelece como absoluto apenas o demonstrado; se a Ciência demonstrar erro em algum ponto, o Espiritismo assimilará a nova verdade.',
  'Cap. I, item 55',
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
  153,
  'genese',
  'Ao comparar a revelação espírita com as revelações de Moisés e do Cristo (Cap. I), qual diferença fundamental de transmissão Kardec destaca?',
  'As duas primeiras foram anônimas; a terceira foi personificada em um único líder religioso supremo.',
  'As duas primeiras foram individuais e localizadas num só ponto; a terceira não está personificada em nenhum indivíduo, tendo surgido coletiva e simultaneamente em milhares de pontos da Terra.',
  'Moisés e Jesus transmitiram ensinamentos puramente científicos, ao passo que o Espiritismo é puramente litúrgico.',
  'A terceira revelação foi ditada unicamente em língua francesa aos membros da Sociedade de Paris.',
  'A revelação mosaica baseou-se na persuasão amorosa, enquanto a de Jesus impôs-se pelo temor e pela espada.',
  'B',
  'Moisés e Jesus personificaram individualmente as revelações que se propagaram de um centro local. O Espiritismo não tem um profeta exclusivo; foi ensinado simultaneamente em todo o globo por miríades de Espíritos a uma multidão de médiuns.',
  'Cap. I, itens 45 e 46',
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
  154,
  'genese',
  'No Capítulo II de A Gênese, qual princípio lógico elementar é formulado por Kardec para demonstrar a existência de Deus pelas obras da natureza?',
  'A ordem do universo resulta do encontro fortuito de átomos eternos sem consciência.',
  'Não há efeito sem causa, e todo efeito inteligente há de decorrer necessariamente de uma causa inteligente.',
  'O universo foi criado do nada no momento exato em que os homens começaram a pensar.',
  'Apenas o que é diretamente palpável aos cinco sentidos corporais possui existência real.',
  'A matéria inerte possui em si mesma inteligência autônoma e capacidade criadora espontânea.',
  'B',
  'Pelo axioma fundamental de causalidade, não há efeito sem causa; e, apresentando o universo ordem, providência e harmonia insuperáveis pela inteligência humana, sua causa há de ser uma inteligência soberana: Deus.',
  'Cap. II, itens 2 e 3',
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
  155,
  'genese',
  'Por que Deus não pode ser concebido como tendo simultaneamente bondade e maldade em sua natureza (Cap. II)?',
  'Porque o infinito de uma qualidade exclui a possibilidade de uma qualidade contrária, que a anularia; sendo Deus infinitamente bom, nenhuma parcela de maldade pode nele existir.',
  'Porque Deus é passivo e delegou o governo do cosmos a duas potências de forças rigorosamente idênticas.',
  'Porque a bondade divina aplica-se apenas aos anjos puros, enquanto a maldade rege os mundos materiais.',
  'Porque os atributos de Deus variam conforme a latitude geográfica dos povos que o adoram.',
  'Porque a justiça consiste em vingar as ofensas feitas à Divindade mediante castigos impiedosos.',
  'A',
  'Se Deus tivesse qualquer parcela de maldade ou parcialidade, já não seria infinito em bondade e perfeição, deixando de ser Deus. O infinito de um atributo divino exclui absolutamente o seu oposto.',
  'Cap. II, itens 14 e 19',
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
  156,
  'genese',
  'Como o Espiritismo explica a ação providencial de Deus sobre todas as criaturas e sobre as menores coisas da Criação (Cap. II)?',
  'Deus precisa vigiar pessoalmente cada ser do alto de um trono material situado no centro do céu.',
  'O universo inteiro está mergulhado no fluido divino; estando esse fluido em toda parte e sendo dotado dos atributos essenciais da Divindade, nenhum ato ou pensamento escapa à Sua solicitude.',
  'Deus estabeleceu leis gerais no princípio e desde então permanece em absoluto repouso sem intervir na vida das criaturas.',
  'A Providência atua exclusivamente por intermédio de anjos que anotam os pecados em livros de pergaminho.',
  'Apenas os seres humanos batizados recebem os eflúvios da atenção providencial divina.',
  'B',
  'Kardec utiliza a figura do fluido divino inteligente que preenche a imensidade: estando todas as criaturas mergulhadas no pensamento e na presença do Criador, nada lhe passa desapercebido.',
  'Cap. II, itens 20 e 24',
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
  157,
  'genese',
  'De acordo com o Capítulo III de A Gênese, qual é a origem e a natureza real do mal?',
  'O mal é uma entidade substancial criada por Deus para rivalizar com o princípio do bem.',
  'O mal é a ausência do bem, como o frio é a ausência do calor; não procede de Deus, mas das imperfeições e do livre-arbítrio do homem quando transgride as Leis divinas.',
  'O mal reside na própria matéria cósmica, que é intrinsecamente corrompida e oposta ao Espírito.',
  'O mal foi gerado por anjos caídos que venceram temporariamente as forças cósmicas de Deus.',
  'O mal é uma necessidade eterna e absoluta para que os mundos superiores possam manter sua estabilidade.',
  'B',
  'Kardec demonstra que o mal não é um princípio criado nem uma força positiva autônoma: é o negativo do bem, fruto temporário do atraso moral e do abuso da liberdade humana.',
  'Cap. III, itens 1 e 8',
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
  158,
  'genese',
  'Ao abordar a destruição dos seres vivos uns pelos outros no Cap. III, como Kardec concilia esse fato com a soberana sabedoria de Deus?',
  'Demonstrando que a destruição física atinge apenas a veste corporal transitória, enquanto o princípio inteligente sobrevive e desenvolve suas faculdades na luta evolutiva.',
  'Afirmando que os animais inferiores não possuem nenhuma centelha de princípio inteligente e são apenas máquinas insensíveis.',
  'Justificando que Deus Se compraz no espetáculo do sofrimento material dos mais fracos.',
  'Admitindo que se trata de uma imperfeição irresolúvel da criação cósmica.',
  'Afirmando que a morte biológica dos animais resulta de uma maldição lançada na época do pecado original de Adão.',
  'A',
  'A verdadeira vida não está na carne, mas no princípio espiritual. A destruição corpórea recicla a matéria orgânica e serve de estímulo evolutivo para que o princípio inteligente desenvolva suas faculdades de defesa e trabalho.',
  'Cap. III, itens 20 a 24',
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
  159,
  'genese',
  'Por que, segundo o Capítulo IV de A Gênese, o homem foi incapaz de compreender a verdadeira história da formação do mundo antes do advento da Ciência moderna?',
  'Porque os textos sagrados proibiam qualquer reflexão sobre os corpos celestes.',
  'Porque faltavam os instrumentos de observação e os conhecimentos fornecidos pela Astronomia, Física, Química e Geologia para decifrar as leis da natureza.',
  'Porque a Terra era governada por cometas que alteravam diariamente a gravitação dos continentes.',
  'Porque a humanidade primitiva era composta por Espíritos puros que prescindiam de conhecimentos empíricos.',
  'Porque os fenômenos astronômicos só começaram a ocorrer após a Era Renascentista.',
  'B',
  'Sem os dados positivos das ciências da observação (a Geologia a ler nas camadas da Terra, a Astronomia a desbravar o espaço, a Física e a Química a desvendar as forças e afinidades), o homem só podia formular hipóteses imaginárias.',
  'Cap. IV, itens 1 a 3',
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
  160,
  'genese',
  'Qual a diferença basilar entre o sistema de Ptolomeu e o sistema estabelecido por Copérnico e confirmado por Galileu (Cap. V)?',
  'Ptolomeu colocava o Sol no centro do cosmos; Copérnico demonstrou que a Terra é uma superfície plana e imóvel.',
  'Ptolomeu julgava a Terra fixa no centro do universo, rodeada por esferas cristalinas concêntricas; Copérnico e Galileu demonstraram que o Sol ocupa o centro e a Terra gira em torno dele e sobre seu próprio eixo.',
  'O sistema de Ptolomeu baseava-se em observações telescópicas, ao passo que Copérnico usava apenas cálculos astrológicos.',
  'Galileu provou que os planetas possuem luz própria e que as estrelas estão cravadas numa abóbada sólida.',
  'O sistema copernicano admitia que a Terra é sustentada por elefantes mitológicos sobre uma tartaruga.',
  'B',
  'Ptolomeu criou o sistema geocêntrico com 11 céus superpostos; Copérnico restabeleceu a ideia heliocêntrica de Pitágoras, confirmada pelas observações telescópicas de Galileu sobre as fases dos planetas e os satélites de Júpiter.',
  'Cap. V, itens 11 e 12',
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
  161,
  'genese',
  'No Cap. VI de A Gênese (''Uranografia geral'', ditado pelo Espírito Galileu), qual é o conceito central sobre a constituição da matéria no universo?',
  'Existem quatro substâncias elementares irredutíveis: água, terra, fogo e ar.',
  'Toda a infinita diversidade de corpos e substâncias ponderáveis e imponderáveis procede de uma única substância primitiva elementar: o fluido cósmico universal ou matéria cósmica.',
  'Cada planeta do sistema solar é formado por uma matéria química sem qualquer parentesco atômico com os demais.',
  'Os corpos celestes são formados de éter espiritual imutável que não sofre transformações moleculares.',
  'A matéria densa surgiu espontaneamente do nada absoluto por efeito de uma única explosão há seis mil anos.',
  'B',
  'O capítulo ensina que, sob as incontáveis combinações e forças que a governam, a matéria universal é una em sua essência: todas as substâncias procedem de modificações da matéria cósmica primitiva.',
  'Cap. VI, itens 5 a 7',
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
  162,
  'genese',
  'O que ensina o Espírito Galileu sobre a duração da Criação e a atividade criadora de Deus (Cap. VI, itens 14 e 15)?',
  'Deus criou o universo em seis dias e depois entrou em repouso definitivo.',
  'Deus cria desde toda a eternidade, cria incessantemente e nunca deixará de criar, sendo a sucessão dos mundos uma criação perpétua.',
  'A criação começou com a formação da Terra e terminará quando nosso Sol se extinguir.',
  'A criação dos mundos materiais ocorre apenas quando há cataclismos repentinos nos oceanos siderais.',
  'Deus encerrou a criação dos seres inteligentes e agora apenas transforma os minerais dos asteroides.',
  'B',
  'Não houve um momento de inércia ou mutismo estéril para Deus; sendo Ele eterno e infinito, Suas obras remontam à eternidade, e a criação dos mundos e dos seres se processa incessantemente no espaço sem fim.',
  'Cap. VI, itens 14 e 15',
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
  163,
  'genese',
  'Segundo a teoria da condensação explicada na Uranografia Geral (Cap. VI), como se formaram os planetas a partir da nebulosa solar?',
  'Pela colisão de um bloco maciço de gelo que se partiu em dezenas de pedaços.',
  'Pelo aumento da velocidade de rotação da nebulosa, fazendo a força centrífuga predominar sobre a atração central e destacar sucessivos anéis equatoriais que se condensaram em globos.',
  'Por pedras arremessadas violentamente da crosta do Sol durante erupções vulcânicas solares.',
  'Pela fusão de quatro mundos velhos desmanchados que foram atraídos pela gravidade da Terra.',
  'Por meteoros gigantescos vindos de fora da Via Láctea que se fixaram em órbitas quadradas.',
  'B',
  'Conforme a hipótese nebular (Laplace/Galileu espírita), o resfriamento e a rotação acelerada da nebulosa geraram anéis equatoriais isolados pela força centrífuga, os quais se aglomeraram e deram origem aos planetas.',
  'Cap. VI, itens 20 a 22',
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
  164,
  'genese',
  'Qual reflexão de humildade cosmológica Kardec e Galileu propõem ao analisar a posição da Terra no cosmos (Cap. VI, itens 34 a 36)?',
  'A Terra é o centro moral e astronômico soberano de todas as galáxias do universo.',
  'A Terra é quase nada no sistema solar; este é quase nada na Via Láctea; e a Via Láctea é apenas uma nebulosa entre milhões no oceano sem limites do infinito.',
  'O Sol existe exclusivamente para iluminar as plantações e recrear os olhos da humanidade terrena.',
  'As outras estrelas são meros focos de gás inerte desprovidos de planetas e de seres pensantes.',
  'O planeta Terra é o mais perfeito e antigo de todos os mundos habitados existentes.',
  'B',
  'Kardec abate a presunção humana demonstrando que nosso globo é um grãozinho de poeira imperceptível no concerto incomensurável dos mundos e dos bilhões de sóis que povoam o espaço infinito.',
  'Cap. VI, itens 35 e 36',
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
  165,
  'genese',
  'Quais são os seis períodos geológicos principais descritos por Allan Kardec no Capítulo VII de A Gênese?',
  'Lunar, solar, estelar, comético, planetário e sideral.',
  'Primário, de transição, secundário, terciário, diluviano e pós-diluviano (ou atual).',
  'Paleolítico, neolítico, da pedra lascada, do bronze, do ferro e atômico.',
  'Pré-adâmico, noaico, abraâmico, mosaico, profético e evangélico.',
  'Ígneo, gasoso, aéreo, aquático, vegetal e espiritual.',
  'B',
  'No Cap. VII, item 13, Kardec cataloga os grandes períodos geológicos que marcaram a evolução física da Terra: primário (consolidação do granito), de transição (hulha e primeiros seres), secundário (grandes répteis), terciário (mamíferos e relevo), diluviano (grandes correntes e blocos erráticos) e pós-diluviano (advento e fixação do homem).',
  'Cap. VII, item 13',
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
  166,
  'genese',
  'No período primário da história geológica da Terra, qual foi a primeira rocha sólida a formar-se pelo resfriamento da crosta (Cap. VII)?',
  'O calcário conchífero derivado de conchas marinhas.',
  'O granito, massa uniforme e compacta constituída de feldspato, quartzo e mica.',
  'A hulha fóssil gerada por imensas florestas carbonizadas.',
  'O mármore sedimentar formado no leito de rios tranquilos.',
  'O basalto poroso resultante de cinzas orgânicas vulcânicas.',
  'B',
  'O granito foi a primeira camada sólida que envolveu a massa incandescente da Terra em resfriamento, formando o arcabouço ósseo mineral do planeta, caracterizado pela ausência de estratificação e de fósseis orgânicos.',
  'Cap. VII, itens 19 e 20',
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
  167,
  'genese',
  'Qual o principal argumento que levou a Ciência e o Espiritismo a abandonarem a teoria de Buffon sobre a origem da Terra por choque cometário (Cap. VIII)?',
  'A revelação mediúnica de que os cometas não entram na Via Láctea.',
  'A constatação de que os cometas são massas gasosas de densidade extremamente tênue e rarefeita, incapazes de arrancar e projetar porções sólidas da massa solar.',
  'A prova de que a Terra foi criada inteiramente fria e coberta de gelo polar desde o primeiro instante.',
  'A constatação de que os planetas giram em órbitas em formato de espiral caótica.',
  'A descoberta de que o Sol é um astro frio habitado por seres puramente materiais.',
  'B',
  'Buffon supunha que os cometas eram corpos sólidos e densos que colidiram com o Sol. Ao se comprovar que os cometas têm densidade gasosa irrisória, a hipótese de um choque mecânico capaz de arrancar matéria solar desmoronou.',
  'Cap. VIII, itens 1 e 2',
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
  168,
  'genese',
  'Por que Kardec refuta a chamada ''teoria da incrustação'' (que afirmava ter a Terra sido formada pela junção de quatro mundos: Ásia, África, Europa e América) no Cap. VIII?',
  'Porque os quatro planetas originais continuam visíveis no céu ao lado de Marte.',
  'Porque ela contraria a Geologia: as camadas geológicas são homogêneas, contínuas e idênticas em todos os continentes, sem nenhuma soldadura ou fronteira abrupta entre as regiões do globo.',
  'Porque a teoria bíblica não menciona a existência do continente americano.',
  'Porque a Lua é feita de substâncias que repelem a gravidade terrestre.',
  'Porque os animais antediluvianos eram todos anfíbios e não sobreviveriam em terra seca.',
  'B',
  'Kardec demonstra que as camadas de rocha e os fósseis da mesma época são universais e contínuos de um continente para outro, provando uma formação gradativa e planetária única, e não a colagem fantástica de pedaços de orbes distintos.',
  'Cap. VIII, itens 4 a 6',
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
  169,
  'genese',
  'Como Allan Kardec caracteriza o ''princípio vital'' em relação à matéria inorgânica no Capítulo X de A Gênese?',
  'É o próprio Espírito individual imortal com todas as suas faculdades intelectuais.',
  'É uma propriedade especial decorrente de uma modificação do fluido cósmico universal, que anima os corpos orgânicos durante a vida e se extingue com a morte física.',
  'É um elemento químico metálico descoberto nas camadas graníticas da Terra.',
  'É uma substância eterna que reencarna indefinidamente de mineral em mineral.',
  'É a faculdade exclusiva do ser humano de articular linguagem falada e escrita.',
  'B',
  'O princípio vital dá aos corpos orgânicos propriedades que os diferenciam dos minerais inanimados. Ele atua como um agente de animação celular (comparado à eletricidade animal) e cessa com a desorganização do corpo, não se confundindo com o princípio espiritual inteligente.',
  'Cap. X, itens 16 a 19',
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
  170,
  'genese',
  'De acordo com o Cap. XI de A Gênese, o que representou espiritualmente a chamada ''raça adâmica'' na história da Terra?',
  'O primeiro casal biológico absoluto criado milagrosamente do barro há seis mil anos.',
  'Uma colônia de Espíritos exilados de um mundo mais adiantado, que veio encarnar na Terra já povoada para impulsionar o progresso das raças primitivas.',
  'Uma raça de anjos puros que perdeu suas faculdades ao respirar a atmosfera dos pântanos terrestres.',
  'Um grupo de seres humanos que descendeu de astronautas materiais do planeta Marte.',
  'Os únicos seres humanos na história do planeta a quem Deus concedeu a imortalidade da alma.',
  'B',
  'O Espiritismo elucida a narrativa de Adão: tratou-se de uma imigração em massa de Espíritos decaídos de um orbe em regeneração, os quais trouxeram à Terra conhecimentos mais avançados, acelerando as artes, as ciências e a civilização.',
  'Cap. XI, itens 38 a 45',
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
  171,
  'genese',
  'Qual é a posição formal do Espiritismo quanto à existência de ''milagres'' no sentido teológico tradicional (Cap. XIII)?',
  'Afirma que os médiuns espíritas realizam milagres diários que derrogam as leis da física.',
  'Rejeita o milagre como derrogação das leis da natureza, demonstrando que todos os fenômenos da alma e das manifestações mediúnicas repousam em leis naturais e universais.',
  'Admite os milagres divinos, mas considera que Satanás tem o poder de criar milagres ainda maiores.',
  'Restringe os milagres autênticos apenas àqueles homologados por conselhos eclesiásticos.',
  'Ensina que os milagres dependem da repetição de fórmulas místicas em línguas mortas.',
  'B',
  'O Espiritismo não faz milagres nem admite derrogação das leis eternas de Deus. Deus não desfaz Sua própria obra; os fatos considerados sobrenaturais decorrem de leis naturais do elemento espiritual ainda desconhecidas ou mal interpretadas.',
  'Cap. XIII, itens 1 a 4',
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
  172,
  'genese',
  'No Cap. XIII, ao responder à pergunta ''Faz Deus milagres?'', que argumento de suma sabedoria Kardec apresenta?',
  'Deus faz milagres frequentes para satisfazer a curiosidade dos incrédulos.',
  'Sendo perfeitas as leis divinas, Deus não tem necessidade de derrogá-las; a grandeza de Deus manifesta-se muito mais na imutabilidade e harmonia de Suas leis do que em derrogações passageiras.',
  'Deus delega a execução de milagres a espíritos inferiores que desejam testar os homens.',
  'Os milagres são necessários porque a criação primitiva continha falhas que Deus precisa consertar periodicamente.',
  'Deus altera a gravitação e o curso dos astros sempre que um justo lhe suplica em oração.',
  'B',
  'Kardec argumenta que um mecanismo perfeito atesta muito mais o saber de seu artífice pela regularidade infalível do que pelo desmantelamento de suas engrenagens; Deus não precisa violar Suas próprias leis para provar Seu poder.',
  'Cap. XIII, item 15',
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
  173,
  'genese',
  'Como se forma o perispírito e qual a relação de seus elementos constitutivos com o mundo onde o Espírito habita (Cap. XIV)?',
  'É formado de matéria pura e imutável trazida diretamente do reino celestial, idêntica em qualquer planeta.',
  'É uma condensação do fluido cósmico universal extraído do meio ambiente do mundo onde o Espírito se encontra, variando em pureza conforme a evolução desse mundo e a elevação moral do próprio Espírito.',
  'O perispírito é gerado exclusivamente pela união do óvulo com o espermatozoide maternos.',
  'Constitui uma ilusão psicológica da mente encarnada sem nenhuma substancialidade fluídica.',
  'O perispírito só se forma nos Espíritos que já concluíram todas as reencarnações na Terra.',
  'B',
  'O Espírito haure seu envoltório perispiritual nos fluidos ambientes do orbe em que estagia; por isso, ao mudar de planeta, ele despoja-se do invólucro do mundo que deixa e assimila um perispírito adaptado ao novo orbe.',
  'Cap. XIV, itens 7 e 8',
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
  174,
  'genese',
  'De acordo com o Cap. XIV de A Gênese, qual é o papel do pensamento e da vontade sobre os fluidos espirituais?',
  'O pensamento não exerce nenhuma ação perceptível no plano fluídico invisível.',
  'O pensamento e a vontade são para os Espíritos o que a mão é para o homem: moldam, combinam, dirigem e criam formas fluídicas que se refletem e fotografam no perispírito.',
  'O pensamento dissolve instantaneamente o perispírito se for voltado para coisas do passado.',
  'A vontade só atua sobre a matéria física densa com o auxílio de instrumentos mecânicos.',
  'Os fluidos espirituais repelem qualquer impulso mental que não seja expresso por voz audível.',
  'B',
  'Na oficina da vida espiritual, os Espíritos manipulam os fluidos pelo pensamento e pela vontade, criando imagens, formas e cenários temporários com a mesma facilidade com que o homem manipula os objetos materiais.',
  'Cap. XIV, itens 14 e 15',
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
  175,
  'genese',
  'Como o Espiritismo explica o mecanismo científico e fluídico das curas magnéticas e espirituais (Cap. XIV)?',
  'Pela intervenção de milagres inexplicáveis que revogam a fisiologia dos tecidos biológicos.',
  'Pela substituição de moléculas perispirituais e orgânicas lesadas ou doentes por moléculas sãs, mediante a inoculação de fluidos curativos acionados pela vontade e intenção pura do operador.',
  'Pelo pagamento em dinheiro de taxas religiosas que compram a intercessão de santos martirizados.',
  'Pelo uso compulsório de talismãs e ervas rituais consagradas em altares de pedra.',
  'Pela aniquilação definitiva do sistema nervoso do paciente para suprimir a dor.',
  'B',
  'A cura fluídica opera-se pela absorção de princípios salutares que restauram o equilíbrio das correntes perispirituais do enfermo, expulsando ou transmutando as moléculas mórbidas sob a ação de fluidos puros e benfazejos.',
  'Cap. XIV, itens 31 a 33',
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
  176,
  'genese',
  'O que são os chamados ''agêneres'' descritos por Kardec no Cap. XIV de A Gênese?',
  'Almas que nunca foram criadas por Deus e habitam os confins do vácuo sideral.',
  'Aparições de Espíritos que conseguem condensar o perispírito ao ponto de apresentarem todas as aparências da tangibilidade material carnal, com as quais se pode confabular e tocar temporariamente.',
  'Criaturas mitológicas nascidas de animais marinhos descritas na mitologia grega.',
  'Médiuns que perderam todas as faculdades de transe e psicofonia.',
  'Corpos humanos gerados sem alma que vivem apenas a vida vegetativa.',
  'B',
  'O agênere é um Espírito que adquire momentaneamente a forma e a tangibilidade carnal, parecendo um ser humano vivo comum, embora não tenha nascido nem possa morrer como os encarnados, desvanecendo-se ao cessar a condensação fluídica.',
  'Cap. XIV, itens 35 e 36',
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
  177,
  'genese',
  'Qual a diferença entre a obsessão e a possessão explicada por Allan Kardec no Cap. XIV?',
  'A obsessão é causada por demônios eternos; a possessão é causada exclusivamente por anjos celestes.',
  'Na obsessão o Espírito mau atua exteriormente envolvendo a mente da vítima; na possessão, o Espírito atuante se substitui momentaneamente ao encarnado, tomando de empréstimo o seu corpo para falar e agir diretamente.',
  'A obsessão ocorre apenas em crianças; a possessão é um delírio patológico sem existência real.',
  'Na obsessão a alma abandona o corpo definitivamente; na possessão dois corpos físicos se fundem em um só.',
  'Não há diferença prática, sendo ambas designações vulgares para o sonambulismo lúcido.',
  'B',
  'Na obsessão há um constrangimento moral exterior; na possessão (que é sempre temporária e intermitente), o Espírito desencarnado assume o controle direto dos órgãos materiais do paciente, falando e gesticulando através dele.',
  'Cap. XIV, itens 47 e 48',
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
  178,
  'genese',
  'No Cap. XV de A Gênese, como Kardec analisa a superioridade da natureza de Jesus e suas excepcionais faculdades?',
  'Jesus não era homem nem Espírito, mas o Criador Supremo disfarçado com um corpo aparente.',
  'Como Espírito superior de altíssima elevação, sua alma dominava de modo absoluto a matéria e possuía perispírito quintessenciado, conferindo-lhe imensa força magnética e constante dupla vista espiritual.',
  'Suas faculdades eram privilégios miraculosos concedidos temporariamente para anular as leis de Israel.',
  'Jesus precisava consultar médiuns adivinhos antes de operar qualquer cura na Galileia.',
  'Seus prodígios decorriam exclusivamente do conhecimento de fórmulas de alquimia egípcia antiga.',
  'B',
  'Kardec pontua que Jesus foi o maior Messias e modelo da humanidade: sua imensa superioridade derivava das qualidades excelsas de Seu Espírito, que purificara Seu perispírito ao mais alto grau, atuando com soberana autoridade sobre as forças da natureza.',
  'Cap. XV, itens 1 e 2',
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
  179,
  'genese',
  'Como o Espiritismo explica o episódio evangélico da ''pesca milagrosa'' realizada por indicação de Jesus (Cap. XV)?',
  'Jesus materializou instantaneamente milhares de peixes no fundo da água a partir do nada.',
  'Pelo dom da dupla vista (visão espiritual), Jesus percebeu onde se encontrava o cardume de peixes no lago e indicou aos pescadores com segurança onde lançar as redes.',
  'Um anjo mergulhou no lago de Genesaré e arrastou os peixes à força até a barca de Pedro.',
  'Foi uma hipnose coletiva em que os discípulos acreditaram ver peixes na rede vazia.',
  'O lago inteiro secou momentaneamente deixando os peixes na areia seca.',
  'B',
  'O fato nada tem de sobrenatural: Jesus, dotado de clarividência e lucidez espiritual em estado de vigília, viu com a vista da alma onde estavam os peixes que fugiam às vistas dos discípulos cansados.',
  'Cap. XV, itens 7 a 9',
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
  180,
  'genese',
  'Na cura da mulher que sofria de fluxo de sangue (hemorroíssa), ao tocar as vestes de Jesus, por que o Mestre disse: ''Alguém me tocou, pois conheci que de mim saiu uma virtude'' (Cap. XV)?',
  'Porque o toque físico da mulher causou-lhe dor muscular aguda no ombro.',
  'Porque a fé ardente da mulher agiu como força atrativa que drenou espontaneamente uma emissão de fluido curativo vivificante do perispírito de Jesus.',
  'Porque Jesus foi despojado de seus dons messiânicos pelo contato com uma pessoa impura.',
  'Porque a mulher sussurrou uma prece mágica no ouvido dos apóstolos.',
  'Porque Jesus precisava repreender publicamente a mulher por quebrar o protocolo cerimonial.',
  'B',
  'Kardec explica a dinâmica fluídica: o curador atua como bomba calcante e o doente com fé atua como bomba aspirante. A confiança da mulher atraiu a irradiação fluídica terapêutica sem necessidade de ato voluntário prévio de Jesus.',
  'Cap. XV, itens 10 e 11',
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
  181,
  'genese',
  'Por que a cura do cego de Betsaida (Marcos, 8:22) é um testemunho evidente da ação magnética gradual de Jesus (Cap. XV)?',
  'Porque Jesus não conseguiu curá-lo e o mandou de volta para casa cego.',
  'Porque a cura não foi instantânea, mas processou-se em etapas sucessivas de ação fluídica, vendo o homem primeiro homens como árvores e depois distintamente.',
  'Porque o cego foi curado após banhar-se no oceano Atlântico.',
  'Porque os fariseus impediram Jesus de completar a cirurgia ocular do cego.',
  'Porque Jesus utilizou colírios químicos fabricados pelos sacerdotes de Roma.',
  'B',
  'Kardec destaca que o processo seguiu a gradação comum dos tratamentos magnéticos reiterados; e a impressão de ver ''homens que parecem árvores'' é a reação ótica natural de quem recobra a visão após longo período de trevas.',
  'Cap. XV, itens 12 e 13',
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
  182,
  'genese',
  'Ao curar o paralítico de Cafarnaum, que significado real tinham as palavras de Jesus: ''Teus pecados te são remitidos'' (Cap. XV)?',
  'Jesus exigiu que o paralítico pagasse o dízimo do Templo para ser perdoado.',
  'Revelava que as enfermidades são frequentemente expiações de faltas passadas; cessada a causa pelo resgate moral e pela fé, o efeito mórbido é extinto.',
  'Declarava que os apóstolos tinham o poder sacerdotal de condenar almas ao inferno eterno.',
  'Afirmava que o paralítico havia quebrado o descanso do sábado no dia anterior.',
  'Demonstrava que os doentes de nascença não possuem alma imortal.',
  'B',
  'A doutrina da reencarnação esclarece que muitas dores são resgates cármicos. Quando o débito moral é expiado ou a lição é assimilada, a enfermidade perde sua razão de ser: é como abrir as portas da prisão ao sentenciado reabilitado.',
  'Cap. XV, itens 14 e 15',
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
  183,
  'genese',
  'Como o Espiritismo explica os episódios evangélicos de ressurreição (a filha de Jairo, o filho da viúva de Naim e Lázaro) no Cap. XV?',
  'Corpos em que os laços perispirituais já haviam sido definitivamente rompidos foram forçados a reviver em desrespeito às leis naturais.',
  'Tratou-se de casos de letargia, síncope profunda ou catalepsia em que a morte real não havia ocorrido; o fluido vivificante de Jesus reanimou os órgãos entorpecidos antes da desincorporação final.',
  'Foram lendas alegóricas inventadas pelos apóstolos sem nenhum fundamento histórico real.',
  'Os indivíduos ressuscitaram sob a forma de fantasmas incorpóreos e nunca mais comeram alimento terrestre.',
  'Jesus utilizou substâncias químicas de embalsamamento que curavam o cérebro necrosado.',
  'B',
  'Uma verdadeira ressurreição biológica após a morte definitiva seria derrogação das leis da natureza. O próprio Jesus disse da filha de Jairo: ''Ela não está morta, está dormindo''; tratava-se de estados catalépticos em que o fio perispiritual ainda ligava o Espírito ao corpo.',
  'Cap. XV, itens 37 a 40',
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
  184,
  'genese',
  'Na passagem em que Jesus caminha sobre o mar de Genesaré (Cap. XV), quais são as duas explicações naturais compatíveis com as leis fluídicas apresentadas por Kardec?',
  'Ele usou pranchas de madeira ocultas sob as ondas ou congelou a superfície da água.',
  'Ou Jesus apareceu em corpo fluídico tangível (aparição/agênere) estando seu corpo físico repousando alhures, ou seu corpo físico foi sustentado por uma força fluídica que neutralizou a gravidade (levitação).',
  'Os apóstolos estavam embriagados com vinho e sonharam coletivamente o fato.',
  'Um terremoto submarino ergueu temporariamente o leito de areia do lago até a superfície.',
  'Tratou-se de uma miragem causada pelo reflexo do Sol em noite de tempestade.',
  'B',
  'Fenômenos de aparição tangível à distância (bicorporeidade) e de levitação física por modificação do peso específico mediante fluidos são comprovados na mediunidade e explicam o evento sem recorrer ao maravilhoso miraculoso.',
  'Cap. XV, itens 41 e 42',
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
  185,
  'genese',
  'Qual a interpretação mais racional adotada por Kardec para o episódio das Bodas de Caná e a multiplicação dos pães (Cap. XV)?',
  'São fatos puramente materiais que demonstraram a capacidade de Jesus de gerar matéria densa do nada.',
  'Tratam-se fundamentalmente de parábolas alegóricas e ensinamentos morais comparando a sabedoria e a palavra do Cristo ao vinho novo e ao pão espiritual que alimenta as almas.',
  'Foram truques ilusionistas encenados para impressionar os governadores romanos.',
  'Jesus contratou fornecedores de trigo em segredo para alimentar as multidões no deserto.',
  'O vinho e os pães foram transportados por meteoros caídos do céu de Samaria.',
  'B',
  'Kardec frisa que a grandeza de Jesus assenta na superioridade moral de Sua palavra (''Eu sou o pão da vida; as minhas palavras são espírito e vida''), sendo pueril e incoerente rebaixar Seu papel messiânico a demonstrações gastronômicas miraculosas.',
  'Cap. XV, itens 47 a 51',
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
  186,
  'genese',
  'Ao comentar a chamada ''Tentação de Jesus'' no deserto pelo demônio (Cap. XV), qual a explicação ditada pelo Espírito João Evangelista?',
  'O demônio era uma criatura material de chifres que carregou Jesus nos ombros até o teto do templo.',
  'Trata-se de uma parábola sublime na qual a figura da tentação simboliza os embates e as más inspirações do orgulho e da ambição aos quais a humanidade está sujeita e aos quais se deve resistir com coragem moral.',
  'Jesus foi derrotado temporariamente por Satanás e precisou refugiar-se nas cavernas do Egito.',
  'O diabo prometeu dar a Jesus o governo do Império Romano em troca de moedas de ouro.',
  'O episódio foi uma narrativa mitológica copiada literalmente das tradições dos druidas da Gália.',
  'B',
  'O Espírito do mal nada podia sobre a pureza imaculada de Jesus. A narrativa é uma figura alegórica ensinando aos homens o dever da vigilância e da renúncia ante as ilusões da ambição, do poder terrestre e da vaidade.',
  'Cap. XV, itens 52 e 53',
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
  187,
  'genese',
  'Como o Espiritismo explica a natureza das aparições de Jesus aos discípulos após a sua morte na cruz (aos discípulos de Emaús, no cenáculo de portas fechadas e a Tomé) no Cap. XV?',
  'Jesus ressurgiu com o mesmo corpo de carne putrescível que foi recomposto átomo por átomo no sepulcro.',
  'Jesus mostrou-se com o seu corpo fluídico ou perispírito, que Ele tornava visível e tangível pela vontade, explicando por que entrava de portas fechadas, desaparecia inopinadamente e apresentava aspectos cambiantes.',
  'As aparições foram apenas alucinações mentais causadas pela dor da perda.',
  'O corpo sepultado era de um sósia e Jesus esteve escondido na Galileia durante as perseguições.',
  'Os apóstolos conversaram com anjos que imitavam a voz do Mestre com ventriloquia.',
  'B',
  'Após a morte carnal, o corpo de Jesus sofreu a decomposição natural de toda matéria sólida; Ele manifestou-se com Seu envoltório perispirítico quintessenciado, apresentando todos os traços característicos das aparições fluídicas tangíveis.',
  'Cap. XV, itens 61 a 66',
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
  188,
  'genese',
  'Segundo Allan Kardec no encerramento do Capítulo XV, qual foi o verdadeiro e maior ''milagre'' operado por Jesus na Terra?',
  'A caminhada sobre as águas revoltas do lago de Tiberíades.',
  'A revolução moral que seus ensinos produziram no mundo, regenerando a civilização e abatendo o paganismo sem possuir armas, riquezas ou poder material.',
  'A transformação da água em vinho no casamento de Caná da Galileia.',
  'A paralisação temporária da rotação do Sol para iluminar a batalha de Jerusalém.',
  'A destruição física das sinagogas e templos de seus perseguidores fariseus.',
  'B',
  'O triunfo sublime do Evangelho é o maior milagre: um homem obscuro, pobre, nascido de um povo dominado, que nada escreveu e morreu na cruz de infâmia, legou à humanidade o código moral que refundou os alicerces da civilização.',
  'Cap. XV, item 63',
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
  189,
  'genese',
  'Na ''Teoria da presciência'' (Cap. XVI), como Kardec explica a faculdade dos Espíritos superiores de preverem o futuro através da comparação do homem na montanha?',
  'O homem na montanha lança feitiços mágicos para obrigar os viajantes a seguirem seu destino traçado.',
  'Assim como o observador no alto da montanha abarca com um único olhar todo o trajeto da estrada e vê os obstáculos que o viajor ainda vai encontrar, o Espírito desmaterializado contempla simultaneamente o início e o fim de um período temporal.',
  'Os Espíritos só podem prever o futuro se consultarem o zodíaco e a posição astrológica dos planetas.',
  'A presciência é impossível para qualquer ser espiritual, pertencendo exclusivamente ao acaso cósmico.',
  'Os Espíritos inferiores possuem maior visão do futuro porque estão mais próximos da matéria do planeta.',
  'B',
  'Para o Espírito purificado, libertado dos entraves da carne, a percepção não é aprisionada pela sucessão cronológica terrestre: eventos que para o encarnado constituem o futuro já se acham no raio panorâmico presente do Espírito elevado.',
  'Cap. XVI, itens 2 e 3',
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
  190,
  'genese',
  'Por que as predições circunstanciadas dadas pelos Espíritos com datas fixas e detalhes minuciosos não devem ser acolhidas com certeza absoluta (Cap. XVI)?',
  'Porque os Espíritos superiores se divertem enganando os seres humanos na Terra.',
  'Porque os pormenores dos acontecimentos e sua aceleração ou retardamento subordinam-se às decisões eventuais do livre-arbítrio dos homens, tornando ilusórias datas pré-fixadas.',
  'Porque o calendário gregoriano é considerado inválido pelos mensageiros espirituais.',
  'Porque as datas futuras dependem exclusivamente da temperatura dos polos lunares.',
  'Porque somente os profetas do Antigo Testamento tinham autorização para fixar cronologias terrestres.',
  'B',
  'Embora o desfecho geral e a direção providencial dos fatos sejam certos, os caminhos secundários e as datas exatas dependem das escolhas e reações do livre-arbítrio dos indivíduos, razão pela qual Espíritos sérios não determinam dias e horas fixas.',
  'Cap. XVI, itens 14 a 16',
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
  191,
  'genese',
  'Ao comentar a máxima ''Ninguém é profeta em sua terra'' (Cap. XVII), qual causa psicológica e moral Kardec aponta para a rejeição dos grandes homens entre seus contemporâneos?',
  'A falta de registros civis de nascimento nos tempos da Antiguidade.',
  'O orgulho, o ciúme e a inveja dos companheiros de infância, aos quais custa reconhecer a superioridade moral de quem viram crescer no mesmo meio vulgar e com as mesmas limitações materiais.',
  'A proibição governamental romana contra pregadores ambulantes na Judeia.',
  'O desinteresse total dos povos antigos pelas questões de ordem filosófica.',
  'A inexistência de médiuns intuitivos nas pequenas aldeias da Galileia.',
  'B',
  'O homem material ofusca a visão do homem espiritual; a proximidade diária e o hábito de convívio alimentam a inveja daqueles que se recusam a aceitar que alguém de sua própria convivência se eleve acima deles em saber moral.',
  'Cap. XVII, itens 1 e 2',
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
  192,
  'genese',
  'O que as palavras de Jesus sobre o advento de Elias (''Elias já veio e eles não o conheceram... Então os discípulos compreenderam que falava de João Batista'') consagram formalmente (Cap. XVII)?',
  'A criação única da alma no momento do nascimento do corpo físico.',
  'O princípio fundamental da reencarnação ou pluralidade das existências da alma.',
  'A condenação eterna dos profetas judeus que duvidaram do Messias.',
  'A existência de anjos com corpos materiais imortais habitando o deserto.',
  'A validade perpétua dos sacrifícios sangrentos no altar do Templo.',
  'B',
  'Como Elias não poderia voltar senão tomando um novo corpo no útero materno (como João Batista), o Evangelho consagra de modo solene e categórico a lei da reencarnação dos Espíritos.',
  'Cap. XVII, itens 33 e 34',
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
  193,
  'genese',
  'Por que o Consolador prometido por Jesus (''o Espírito de Verdade que o mundo não pode receber...'') não pode ser entendido como uma individualidade encarnada única (Cap. XVII)?',
  'Porque Jesus afirmou que o Consolador habitaria o palácio dos reis da Terra.',
  'Porque Jesus declarou que o Consolador ficaria eternamente com os homens e estaria neles, condição que só se aplica a uma doutrina consoladora de verdade revelada coletivamente pelos Espíritos.',
  'Porque os Espíritos de Verdade só se comunicam através de livros escritos em hebraico antigo.',
  'Porque o Consolador deveria vir montado sobre uma nuvem física logo após a crucificação.',
  'Porque a promessa de Jesus restringia-se unicamente aos onze apóstolos reunidos em Jerusalém.',
  'B',
  'Um homem encarnado morre e não pode habitar em todos nem permanecer para sempre. O Consolador prometido personifica a Doutrina dos Espíritos, que ensina todas as coisas, restabelece o Evangelho e permanece eternamente viva na consciência humana.',
  'Cap. XVII, itens 35 a 40',
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
  194,
  'genese',
  'Como o Espiritismo interpreta a predição evangélica do ''fim do mundo'' associada ao segundo advento do Cristo (Cap. XVII)?',
  'Como a desintegração física e atômica do globo terrestre em cinzas cósmicas.',
  'Não como a destruição material do planeta, mas como o fim do ''mundo velho'' governado pelos preconceitos, pelo orgulho e pelo egoísmo, que cederá lugar ao reinado do bem.',
  'Como o afogamento permanente de todos os continentes por uma chuva ininterrupta.',
  'Como a queda material de todas as estrelas do firmamento sobre os oceanos da Terra.',
  'Como a condenação definitiva de 99% da humanidade aos abismos de fogo do inferno.',
  'B',
  'Deus não destrói Sua obra no momento em que ela atinge a maturidade moral. O ''fim dos tempos'' é o término da era do império do mal na Terra e o início de sua transição para mundo de regeneração.',
  'Cap. XVII, itens 54 a 58',
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
  195,
  'genese',
  'Qual o sentido racional que A Gênese atribui ao dogma do ''Juízo Final'' ensinado no Evangelho (Cap. XVII)?',
  'Uma sessão judiciária de um único dia em que todas as almas de todos os tempos serão julgadas sem apelação.',
  'Os juízos gerais e periódicos de renovação moral que ocorrem quando um planeta ascende na hierarquia cósmica, acarretando a emigração dos Espíritos rebeldes para mundos inferiores e a recepção de Espíritos regenerados.',
  'A aniquilação total das almas que não professaram o cristianismo eclesiástico romano.',
  'Um tribunal secreto presidido por Moisés no vale de Josafá em Jerusalém.',
  'O congelamento eterno de todos os corpos celestes do sistema solar.',
  'B',
  'A separação das ''ovelhas e bodes'' é o processo natural das migrações interplanetárias: chegados os tempos de renovação da Terra, os que perseveram no mal são transferidos para orbes primitivos correspondentes ao seu atraso, permitindo o triunfo do bem na Terra.',
  'Cap. XVII, itens 63 a 67',
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
  196,
  'genese',
  'O que significam, segundo o Cap. XVIII de A Gênese, as palavras proféticas ''São chegados os tempos''?',
  'O término da existência biológica da espécie humana no sistema solar.',
  'Que a humanidade atingiu a maturidade para uma fase ascensional de transformação moral e regeneração espiritual, segundo as leis imutáveis do progresso divino.',
  'A aproximação de um planeta errante que colidirá com a Terra para pulverizá-la.',
  'O restabelecimento da escravidão corporal em todos os continentes do globo.',
  'A revogação do livre-arbítrio dos seres inteligentes encarnados na Terra.',
  'B',
  '''São chegados os tempos'' indica o momento providencial em que a Terra deixa de ser um mundo de expiações e provas para se transformar gradualmente em planeta de regeneração moral, pelo cumprimento das leis naturais da evolução.',
  'Cap. XVIII, itens 1 a 3',
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
  197,
  'genese',
  'De onde se originarão as graves comoções e crises anunciadas para a época da renovação da Terra (Cap. XVIII)?',
  'De fendas geológicas submarinas que farão o fogo central engolir todos os continentes.',
  'Da luta de ideias, do choque inevitável entre os erros do passado decrépito e as novas ideias morais de fraternidade e liberdade que despontam com a nova geração.',
  'De choques frontais de cometas radioativos com as capitais europeias.',
  'De revoluções mecânicas no núcleo de ferro da Terra que alterarão os pontos cardeais em 24 horas.',
  'De epidemias alienígenas trazidas por meteoros gigantescos vindos da nebulosa de Órion.',
  'B',
  'Kardec assevera: os cataclismos gerais pertenceram à infância física do globo; hoje, as convulsões não vêm das entranhas materiais do planeta, mas das entranhas da humanidade: é o conflito moral e social entre o egoísmo retrógrado e o progresso regenerador.',
  'Cap. XVIII, itens 7 e 8',
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
  198,
  'genese',
  'Como se operará a substituição da geração atual pela ''geração nova'' de Espíritos na Terra (Cap. XVIII)?',
  'Por um cataclismo instantâneo e sobrenatural que exterminará de uma só vez todos os habitantes adultos do globo.',
  'De maneira gradual e na ordem natural das coisas: os Espíritos endurecidos no mal deixarão a Terra pelas mortes sucessivas e não mais reencarnarão nela, sendo substituídos por Espíritos mais adiantados que nascerão inclinados ao bem.',
  'Pela criação miraculosa de uma nova espécie biológica alada desprovida de órgãos materiais.',
  'Por um decreto político universal assinado pelos governantes de todas as nações civilizadas.',
  'Pela partida forçada de todas as crianças para o mundo dos anjos puros.',
  'B',
  'A transformação se processa exteriormente sem espetáculos mágicos: dá-se pela renovação natural da população espiritual do orbe, na qual nascem Espíritos portadores de disposições inatas de concórdia, inteligência e fé raciocinada.',
  'Cap. XVIII, itens 27 e 28',
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
  199,
  'genese',
  'Quais características morais e intelectuais distinguirão os Espíritos que compõem a nova geração anunciada em A Gênese (Cap. XVIII)?',
  'Aversão à ciência e retorno fanático às superstições da Idade Média.',
  'Inteligência e razão precoces unidas ao sentimento inato do bem, ao espírito de caridade, à tolerância e à predisposição para acolher ideias de progresso moral.',
  'Busca obsessiva pelo enriquecimento material rápido sem trabalho social.',
  'Orgulho aristocrático e defesa intransigente de preconceitos de raça e de casta.',
  'Total ausência de livre-arbítrio na escolha de suas condutas diárias.',
  'B',
  'A nova geração não é formada por Espíritos perfeitos, mas por almas já amadurecidas no bem que trazem no coração aversão ao egoísmo e à violência e grande entusiasmo pelas reformas humanitárias e fraternas.',
  'Cap. XVIII, itens 28 a 30',
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
  200,
  'genese',
  'Em face dos flagelos destruidores e das crises sociais da transição da Terra, qual a atitude do espírita lúcido perante a morte e o futuro (Cap. XVIII)?',
  'O desespero absoluto, por acreditar que as vidas perdidas representam aniquilação definitiva e triunfo do acaso.',
  'A serenidade e a coragem moral decorrentes da certeza inabalável na imortalidade da alma, na justiça de Deus e de que a morte apenas desfaz o envoltório corporal, impulsionando a renovação coletiva da humanidade.',
  'A fuga covarde para regiões desérticas com abandono dos deveres de família e cidadania.',
  'A invocação de maldições cósmicas contra os adversários ideológicos do progresso.',
  'A rejeição da medicina e do auxílio material às vítimas das catástrofes sociais.',
  'B',
  'Kardec conclui a obra mostrando que, para o espírita, a morte não é o nada nem um abismo tenebroso, mas a transição bendita que transfere a alma para sua verdadeira pátria, sabendo que as dores do presente preparam o radioso porvir da humanidade regenerada.',
  'Cap. XVIII, itens 34 e 35',
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

