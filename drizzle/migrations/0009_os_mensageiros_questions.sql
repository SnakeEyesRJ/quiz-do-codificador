-- Migration: Add os_mensageiros to questions book check and insert 50 questions from Os Mensageiros
DO $$
BEGIN
  ALTER TABLE public.questions DROP CONSTRAINT IF EXISTS questions_book_check;
  ALTER TABLE public.questions ADD CONSTRAINT questions_book_check CHECK (book IN ('livro_espiritos', 'evangelho', 'ceu_inferno', 'genese', 'livro_mediuns', 'obras_postumas', 'nosso_lar', 'os_mensageiros'));
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  351,
  'os_mensageiros',
  'No prefácio de "Os Mensageiros", Emmanuel utiliza uma comparação evolutiva para explicar por que as paisagens e serviços da vida espiritual guardam semelhança com os da Terra, sem que isso signifique que "tudo está no cérebro do homem". Que comparação ele faz?',
  'Assim como o macaco encontra no ambiente humano uma vida animal enobrecida (onde apenas a auréola da razão lhe escapa), o homem que merece ingressar nos círculos elevados do invisível encontra uma vida humana sublimada, pois a morte física não é salto no desequilíbrio, mas passo da evolução.',
  'Assim como a pedra se transforma instantaneamente em estrela pela ação do fogo, o homem desencarnado converte-se automaticamente em arcanjo onisciente.',
  'Assim como o peixe morre fora da água, o espírito perde toda a memória, toda a forma e toda a identidade ao deixar o corpo carnal.',
  'Assim como o sonho noturno não possui qualquer realidade, as colônias espirituais são apenas miragens passageiras sem leis nem trabalho.',
  'Assim como as máquinas substituem o esforço humano, os espíritos desencarnados ficam dispensados de qualquer estudo ou responsabilidade moral.',
  'A',
  'No prefácio (datado de Pedro Leopoldo, 26 de fevereiro de 1944), Emmanuel explica que ninguém pode trair as leis evolutivas: à maneira do símio que encontra no lar humano uma vida animal aperfeiçoada, o espírito encontra nos círculos elevados do Além uma vida humana sublimada.',
  'Os Mensageiros — Prefácio de Emmanuel',
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
  352,
  'os_mensageiros',
  'No Capítulo 1 ("Renovação"), ao observar a profunda transformação interior de André Luiz — que se libertara do exclusivismo doméstico mas sentia o coração como um "cálice luminoso, porém vazio" —, que conselho a enfermeira Narcisa lhe dá?',
  'Que ele retorne definitivamente ao Rio de Janeiro para disputar a direção material de seu antigo lar.',
  'Que ele encha a taça do coração nas águas eternas do Amor Divino, medite no Evangelho de Jesus e aproveite os novos cursos de serviço instalados no Ministério da Comunicação.',
  'Que ele abandone todas as atividades hospitalares e se recolha por vinte anos aos Campos de Repouso.',
  'Que ele exija do Ministro Clarêncio sua nomeação imediata como diretor médico da Regeneração.',
  'Que ele esqueça para sempre os encarnados, pois os habitantes de Nosso Lar não devem descer à Crosta.',
  'B',
  'Narcisa compreende que André Luiz atravessa a fase de renovação mental ("cálice luminoso, porém vazio dos sentimentos do mundo") e incentiva-o a enchê-lo com o bálsamo do amor divino, matriculando-se nos cursos de serviço do Ministério da Comunicação.',
  'Os Mensageiros — Cap. 1 ("Renovação")',
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
  353,
  'os_mensageiros',
  'No Capítulo 2 ("Aniceto"), Tobias apresenta André Luiz ao instrutor Aniceto, no Ministério da Comunicação. Como Aniceto organiza seu quadro suplementar de 50 aprendizes para os serviços urgentes na crosta terrestre?',
  'Ele leva sempre todos os 50 alunos juntos em uma única caravana ruidosa para visitar os palácios governamentais.',
  'Ele escolhe apenas antigos príncipes e doutores em teologia, recusando operários e trabalhadores domésticos.',
  'Ele divide a classe em grupos especializados conforme a profissão familiar aos estudantes (tendo na ocasião 1 sacerdote, 1 médico, 6 engenheiros, 4 professores, 4 enfermeiras, 2 pintores, 11 irmãs de trabalhos domésticos e 18 operários), num curso de extinção das velhas vaidades pessoais.',
  'Ele sorteia diariamente as tarefas sem levar em conta a aptidão ou a experiência anterior de cada aprendiz.',
  'Ele exige que cada candidato pague dez mil bônus-hora de inscrição antes de assistir à primeira aula.',
  'C',
  'Aniceto explica que na ''Instituição do Homem Novo'' ninguém exige expressão nominal nas obras úteis e que ele divide sua turma de 50 lugares em pequenos grupos especializados de acordo com a profissão de cada aprendiz, dispondo naquele momento de três vagas.',
  'Os Mensageiros — Cap. 2 ("Aniceto")',
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
  354,
  'os_mensageiros',
  'No Capítulo 3 ("No Centro de Mensageiros"), quando André Luiz pergunta a Tobias se aquela imensa organização do Ministério da Comunicação se restringia ao movimento de transmissão de notícias, qual é a resposta esclarecedora de Tobias?',
  'Que o Centro funciona apenas como agência telegráfica e postal entre as colônias espirituais.',
  'Que o Centro se dedica exclusivamente à impressão de livros e jornais para a Governadoria.',
  'Que o Centro prepara apenas espíritos desencarnados que jamais voltarão a reencarnar na Terra.',
  'Que o Centro não prepara simples postalistas, mas espíritos que se transformem em "cartas vivas de Jesus" de socorro e auxílio para o Umbral, a Crosta e as Trevas, habilitando anualmente centenas de médiuns e doutrinadores para a reencarnação.',
  'Que o Centro foi desativado porque todos os mensageiros enviados à Terra triunfaram sem dificuldade.',
  'D',
  'Tobias esclarece que o Centro de Mensageiros prepara milhares de tarefeiros — inclusive médiuns e doutrinadores que reencarnam anualmente — para serem "cartas vivas de Jesus", embora raros triunfem por completo quando esquecem a renúncia e o espírito de serviço.',
  'Os Mensageiros — Cap. 3 ("No Centro de Mensageiros")',
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
  355,
  'os_mensageiros',
  'No Capítulo 4 ("O caso Vicente"), André Luiz trava fraterna amizade com Vicente, o outro aprendiz médico da turma de Aniceto. Ao ouvir as queixas de André sobre o segundo casamento de Zélia, que história pessoal muito mais dolorosa Vicente lhe relata?',
  'Que ele nunca tivera família na Terra por haver desencarnado ainda na infância.',
  'Que sua esposa o abandonara na pobreza, levando consigo todos os bens materiais do casal.',
  'Que fora traído por seus colegas de hospital e condenado injustamente à prisão perpétua.',
  'Que morrera em um naufrágio durante sua viagem de núpcias para o continente europeu.',
  'Que sua esposa Rosalinda e seu próprio irmão, o advogado Eleutério, apaixonaram-se e o assassinaram introduzindo uma cultura microbiana letal em uma pequena ferida nasal enquanto ele dormia, casando-se depois; mas Vicente já os perdoara, vendo no mal apenas o resultado da ignorância.',
  'E',
  'Vicente conta que o próprio irmão Eleutério e a esposa Rosalinda tramaram sua morte por septicemia, aplicando-lhe um vírus de laboratório numa pequena borbulha nasal enquanto dormia; ainda assim, Vicente mantinha o coração sereno e sem ódio, afirmando que ''a árvore, para produzir, não reclama as folhas mortas''.',
  'Os Mensageiros — Cap. 4 ("O caso Vicente")',
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
  356,
  'os_mensageiros',
  'No Capítulo 5 ("Ouvindo instruções"), o instrutor Telésforo dirige a palavra aos aprendizes e cooperadores reunidos no Centro de Mensageiros. Como ele define a situação atual da Humanidade terrena e que exigência faz aos candidatos da Comunicação?',
  'Compara a Humanidade a um grande organismo coletivo cujas células (as personalidades humanas) estão em processo geral de reajustamento, e adverte que na Comunicação, acima de simples trabalhadores, são necessários servidores dispostos à renúncia e à boa vontade.',
  'Afirma que a Ciência materialista já suprimiu todas as aflições morais e que não há mais necessidade de médiuns na Terra.',
  'Condena severamente o catolicismo romano e o protestantismo como obras diabólicas sem qualquer valor educativo.',
  'Garante que o trabalho da Comunicação é um passatempo leve, isento de riscos ou sacrifícios pessoais.',
  'Determina que o intercâmbio mediúnico seja suspenso por cem anos até que cessem as guerras no planeta.',
  'A',
  'Telésforo respeita todas as expressões religiosas sinceras, mostra o contraste entre o avanço científico e a crise moral humana, e proclama com firmeza: ''Quem não deseje servir, procure outros gêneros de tarefa... Aqui, porém, acima de trabalhadores, precisamos de servidores que atendam de boa vontade.''',
  'Os Mensageiros — Cap. 5 ("Ouvindo instruções")',
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
  357,
  'os_mensageiros',
  'No Capítulo 6 ("Advertências profundas"), ao analisar por que tantos cooperadores enviados de "Nosso Lar" à Terra faliram nas missões da mediunidade e da doutrinação, qual é, segundo Telésforo, a causa geral dos desastres mediúnicos?',
  'A falta de diplomas acadêmicos e de fortuna monetária entre os trabalhadores espíritas.',
  'A ausência da noção de responsabilidade e do esquecimento do dever a cumprir, aliada à ambição, à preguiça, à vaidade e ao hábito de formular conceitos apenas para os outros (''para exportação'').',
  'O excesso de humildade e de trabalho gratuito em favor dos enfermos desamparados.',
  'A interferência inevitável dos astros e do clima tropical sobre o sistema nervoso dos médiuns.',
  'A leitura constante do Evangelho de Jesus nas reuniões familiares.',
  'B',
  'Telésforo é incisivo: "A causa geral dos desastres mediúnicos é a ausência da noção de responsabilidade e da recordação do dever a cumprir", ressaltando que ninguém sobe espiritualmente sem esforço, sem suor e sem lágrimas.',
  'Os Mensageiros — Cap. 6 ("Advertências profundas")',
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
  358,
  'os_mensageiros',
  'No Capítulo 7 ("A queda de Otávio"), André Luiz conversa com Otávio, que se preparara durante trinta anos em "Nosso Lar" para uma nobre missão mediúnica no Brasil, mas regressara antes dos quarenta anos derrotado pela sífilis, pelo álcool e pelos desgostos. Qual fora o erro central de Otávio na Terra?',
  'Ele recusou-se a aprender a ler e passou a vida inteira isolado como eremita no sertão.',
  'Ele dedicou-se exclusivamente à pintura sacra, esquecendo de comparecer ao centro espírita.',
  'Impaciente e vaidoso, duvidou dos orientadores espirituais, entregou-se aos desregramentos sexuais aos 19 anos e, quando o pai desencarnou e a madrasta foi recolhida a um leprosário, abandonou na rua as seis crianças órfãs que eram justamente seus benfeitores reencarnados de Nosso Lar.',
  'Ele doou todos os bens da família para instituições de caridade sem reservar recursos para si.',
  'Ele trabalhou em excesso na evangelização infantil até perder a saúde física por estafa.',
  'C',
  'Otávio comprometera-se a permanecer solteiro e acolher aos 20 anos seis amigos de Nosso Lar que reencarnariam como órfãos sob sua tutela; contudo, entregou-se ao vício, abandonou os seis pequeninos quando a madrasta adoeceu de lepra e uniu-se a uma mulher inferior que lhe arruinou a existência.',
  'Os Mensageiros — Cap. 7 ("A queda de Otávio")',
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
  359,
  'os_mensageiros',
  'No Capítulo 8 ("O desastre de Acelino"), o ex-médium Acelino relata a André Luiz e Vicente por que amargara onze anos de expiação nas zonas inferiores, preso a uma ronda escura de desencarnados delinquentes. Qual fora a causa de sua queda?',
  'Ele negara a existência dos Espíritos e queimara os livros da codificação em praça pública.',
  'Ele abandonara a esposa Ruth para ingressar na carreira militar em país estrangeiro.',
  'Ele recusara atender gratuitamente os pobres, atendendo somente reis e governantes.',
  'Dotado de vidência, audição e psicografia, transformou a mediunidade em fonte de renda material e consulta comercial (cobrando pelas consultas e dando palpites em negócios escusos e ligações clandestinas), ficando algemado após a morte aos clientes criminosos.',
  'Ele tentara curar enfermos aplicando passes magnéticos sem possuir diploma de medicina.',
  'D',
  'Acelino mercantilizou os dons mediúnicos de vidência, audição e psicografia, transformando a tarefa evangélica em balcão de negócios e palpites inferiores; ao desencarnar, viu-se escravizado por onze anos às entidades criminosas e viciadas a que servira.',
  'Os Mensageiros — Cap. 8 ("O desastre de Acelino")',
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
  360,
  'os_mensageiros',
  'No Capítulo 9 ("Ouvindo impressões"), André Luiz escuta os relatos de três cooperadores que fracassaram na tarefa mediúnica: Mariana (que culpava o ciúme do marido Joaquim), Ernestina (preparada no Esclarecimento) e um cavalheiro viúvo de Dona Adélia. O que paralisou Ernestina na Terra?',
  'A ambição desmedida pelo ouro e pelas joias da aristocracia terrena.',
  'Uma paralisia física congênita que a impediu de sair do leito durante cinquenta anos.',
  'O orgulho acadêmico após conquistar o título de doutora em filosofia na Europa.',
  'A mudança repentina para uma região deserta onde não havia templos espíritas.',
  'O medo excessivo de tudo e de todos e a desconfiança sistemática das mistificações, que a levou a ver má-fé nos homens e galhofeiros nos espíritos, ouvindo da amiga Lesta a síntese: "Tanto tememos as mistificações, que acabamos por mistificar os serviços do Cristo."',
  'E',
  'Ernestina confessa que seu grande mal foi o medo e a suspeita contínua contra encarnados, desencarnados e si mesma; sua amiga Lesta resume a lição advertindo: "Tanto tememos as mistificações, que acabamos por mistificar os serviços do Cristo."',
  'Os Mensageiros — Cap. 9 ("Ouvindo impressões")',
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
  361,
  'os_mensageiros',
  'No Capítulo 10 ("A experiência de Joel"), André Luiz conhece Joel, que ainda sofria de vertigens e alucinações ligadas ao passado. Tendo recebido no Ministério do Esclarecimento um tratamento que lhe aguçou a sensibilidade psíquica como uma "lente poderosa", por que Joel fracassou na Terra?',
  'Porque usou mal a sensibilidade (a clarividência e a audição), deixando-se empolgar pela curiosidade doentia e pela volúpia de investigar apenas sua penúltima encarnação como Monsenhor Alexandre Pizarro na Inquisição Espanhola, esquecendo a caridade e o grupo espírita.',
  'Porque perdeu completamente a memória ao renascer e tornou-se um banqueiro materialista.',
  'Porque utilizou a clarividência para descobrir minas de diamantes e enriquecer ilicitamente.',
  'Porque se recusou a desenvolver a mediunidade e internou-se num mosteiro na Espanha.',
  'Porque passou a vida perseguindo politicamente os antigos companheiros da Inquisição.',
  'A',
  'Joel recordou sua existência pregressa como Monsenhor Alexandre Pizarro (na Inquisição Espanhola) e, fascinado pelas fichas biográficas do passado (como Higino de Salcedo e Gaspar de Lorenzo), abandonou os deveres assistenciais do presente, caindo em doloroso desequilíbrio mental.',
  'Os Mensageiros — Cap. 10 ("A experiência de Joel")',
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
  362,
  'os_mensageiros',
  'No Capítulo 11 ("Belarmino, o Doutrinador"), o ex-doutrinador Belarmino Ferreira relata que reencarnou com o endosso do Ministro Gedeão e o apoio da esposa Elisa, assumindo a presidência de um grande grupo espírita com oito médiuns dedicados. Qual foi a causa de sua ruína espiritual?',
  'O analfabetismo, que o impedia de ler as obras básicas da codificação espírita.',
  'O apego vaidosa à posição de comando e a obsessão por exigir dos médiuns provas científicas insofismáveis para agradar amigos intelectuais incrédulos, o que o levou à dúvida, ao desprezo pelo Evangelho e, por fim, à politicalha e à escravidão ao dinheiro.',
  'A timidez excessiva, que o fazia fugir das reuniões públicas sempre que chegavam visitantes.',
  'O fanatismo místico, que o levou a fechar o centro espírita para fundar uma ordem monástica.',
  'A perda prematura da esposa Elisa, que o levou ao suicídio direto no primeiro ano de casamento.',
  'B',
  'Belarmino conta que sua tragédia foi a dos que ''conhecem o bem, esquecendo-lhe a prática'': envaidecido na presidência do grupo, passou a exigir fenômenos e provas para satisfazer falsos sábios, caiu na descrença, tachou o Evangelho de velharia e desviou-se para a politicalha e a ambição financeira.',
  'Os Mensageiros — Cap. 11 ("Belarmino, o Doutrinador")',
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
  363,
  'os_mensageiros',
  'No Capítulo 12 ("A palavra de Monteiro"), outro doutrinador relata que comparecia assiduamente a quatro reuniões semanais, onde dissertava sobre paciência e enfrentava obsessores com rispidez, mas fora do centro descompunha crianças, repreendia mães aflitas e executava implacavelmente devedores em seu comércio. Ao desencarnar revoltado e queixar-se por duas horas à Ministra Veneranda, que resposta sintética recebeu dela?',
  '"Monteiro, você foi injustiçado pelos homens e merece ingresso imediato no Ministério da Elevação."',
  '"Monteiro, seu único erro foi não ter escrito livros filosóficos para a posteridade."',
  '"Monteiro, meu amigo, a causa da sua derrota não é complicada nem difícil de explicar. Entregou-se você ao Espiritismo prático, junto dos homens nossos irmãos, mas nunca se interessou pela verdadeira prática do Espiritismo junto de Jesus, nosso Mestre."',
  '"Monteiro, a doutrinação dos espíritos sofredores é proibida pelas leis de Nosso Lar."',
  '"Monteiro, os comerciantes terrestres estão impedidos de exercer qualquer tarefa doutrinária."',
  'C',
  'Após ouvi-lo pacientemente por duas horas, a Ministra Veneranda resumiu a cegueira de Monteiro (que tinha mais raciocínio na cabeça do que sentimento no coração): "Entregou-se você ao Espiritismo prático, junto dos homens nossos irmãos, mas nunca se interessou pela verdadeira prática do Espiritismo junto de Jesus, nosso Mestre."',
  'Os Mensageiros — Cap. 12 ("A palavra de Monteiro")',
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
  364,
  'os_mensageiros',
  'No Capítulo 13 ("Ponderações de Vicente"), passeando pelos jardins do Centro de Mensageiros, Vicente menciona diversas instituições do Ministério do Esclarecimento (Escolas Maternais, Centros de Preparação à Paternidade, Especialização Médica, Instituto de Administradores) e relata o caso de um amigo cirurgião atormentado após a morte por dois pacientes desencarnados, embora não tivesse culpa técnica na morte deles. Por que o cirurgião não conseguia desvencilhar-se dos cobradores?',
  'Porque a Justiça Divina condena todos os cirurgiões cujos pacientes venham a falecer na mesa operatória.',
  'Porque os dois pacientes eram espíritos superiores encarregados de castigá-lo eternamente.',
  'Porque o cirurgião havia assassinado propositalmente ambos os enfermos para roubar-lhes a herança.',
  'Porque, tendo mercantilizado a profissão e operado com a mente voltada a negócios bancários, não estava seguro do dever cumprido nem tranquilo com a própria consciência; e, como todo erro traz fraqueza, faltava-lhe autoridade moral para afastar os acusadores.',
  'Porque em Nosso Lar nenhum médico recebe socorro espiritual antes de completar cem anos no Umbral.',
  'D',
  'Vicente explica que o colega não tinha culpa da morte física deles, mas, por haver abusado da Medicina por ganância, tinha a consciência intranquila e sentia-se fraco perante os algozes, concluindo: "A noção do dever bem cumprido, André, ainda que todos os homens permaneçam contra nós, é uma luz firme para o dia e abençoado travesseiro para a noite."',
  'Os Mensageiros — Cap. 13 ("Ponderações de Vicente")',
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
  365,
  'os_mensageiros',
  'No Capítulo 14 ("Preparativos"), antes de partirem para uma semana de serviço e aprendizado na Crosta, a que local Aniceto encaminha André Luiz e Vicente pela madrugada, e qual finalidade tem esse atendimento?',
  'Ao Arsenal de Armas Elétricas da Governadoria, para receberem escudos metálicos de combate.',
  'À Tesouraria do Bônus-Hora, para trocarem suas fichas por moedas correntes no Rio de Janeiro.',
  'Ao Bosque das Águas, para ingerirem alimentos pesados capazes de sustentar o corpo por sete dias.',
  'Ao Arquivo Geral da Colônia, para decorarem o mapa das ruas e avenidas da capital brasileira.',
  'Ao Gabinete de Auxílio Magnético às Percepções (junto ao Centro de Mensageiros), para receberem em prece o melhoramento e a dilatação do poder visual e auditivo necessários para identificar as causas espirituais dos dramas humanos.',
  'E',
  'Aniceto explica que na carne costumamos ver apenas os efeitos (a miséria no mendigo, a ruína física no enfermo) e encaminha André e Vicente ao Gabinete de Auxílio Magnético às Percepções para dilatar-lhes a visão e a audição espiritual.',
  'Os Mensageiros — Cap. 14 ("Preparativos")',
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
  366,
  'os_mensageiros',
  'No Capítulo 15 ("A viagem"), ao penetrarem zonas inferiores cobertas de sombras entre "Nosso Lar" e a Crosta, André Luiz e Vicente veem seus corpos espirituais irradiarem intensa luz, ajoelhando-se em lágrimas de gratidão a Deus. Todavia, pouco adiante, ao avistarem vultos negros fugindo pelas furnas, que recomendação cautelosa Aniceto lhes faz?',
  'Que interrompam pelo pensamento os efeitos luminosos do corpo espiritual, pois atravessavam extensa zona de desventurados e não é justo humilhar os que sofrem com a exibição de nossos bens.',
  'Que aumentem ao máximo o brilho de suas túnicas para cegar e afugentar os habitantes das furnas.',
  'Que voltem imediatamente para Nosso Lar, pois a luz espiritual se apaga para sempre nas sombras.',
  'Que lancem chamas ardentes sobre as cavernas para purificar a vegetação daquela montanha.',
  'Que cantem hinos em voz alta para demonstrar a superioridade hierárquica dos mensageiros.',
  'A',
  'Por caridade e fidalguia espiritual, Aniceto orienta: "Procuremos interromper os efeitos luminosos do nosso corpo espiritual... Estamos atravessando extensa zona, a que se acolhem muitos desventurados, e não é justo humilhar os que sofrem com a exibição de nossos bens."',
  'Os Mensageiros — Cap. 15 ("A viagem")',
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
  367,
  'os_mensageiros',
  'No Capítulo 16 ("No Posto de Socorro" — grafado XVII no sumário da edição), Aniceto conduz André Luiz e Vicente a um grande castelo cercado de muralhas, jardins e pavilhões de trabalho, vinculado à colônia "Campo da Paz" e administrado por Alfredo. Que obra de arte no salão central chama a atenção de André Luiz e qual é sua verdadeira origem revelada por Alfredo?',
  'A estátua de Moisés, esculpida originalmente em Roma e transportada fisicamente para o Além.',
  'Uma tela magnífica do martírio de São Dinis (o Apóstolo das Gálias), cujo original fora criado por um nobre artista cristão numa cidade espiritual ligada à França e visto em sonho pelo pintor francês Florentino Bonnat, que o reproduziu palidamente no Panteão de Paris.',
  'O quadro da Santa Ceia de Leonardo da Vinci, pintado por aprendizes do Ministério do Esclarecimento.',
  'Uma tapeçaria persa representando as conquistas militares de Alexandre, o Grande.',
  'Um retrato a óleo do Governador de Nosso Lar pintado por André Luiz na juventude.',
  'B',
  'Alfredo explica a André Luiz que nem todas as grandes obras nascem na Terra: a tela do martírio de São Dinis fora concebida numa colônia espiritual ligada à França, onde o pintor Florentino Bonnat a contemplou em desdobramento pelo sono antes de pintá-la para o Panteão de Paris.',
  'Os Mensageiros — Cap. 16 ("No Posto de Socorro")',
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
  368,
  'os_mensageiros',
  'No Capítulo 17 ("O romance de Alfredo"), o administrador do Posto de Socorro relata por que ainda não podia viver em união permanente com sua esposa Ismália (que residia num plano superior e vinha visitá-lo mensalmente). Qual fora a falta cometida por Alfredo na Terra?',
  'Ele abandonara Ismália na juventude para dedicar-se à pirataria marítima.',
  'Ele negara socorro médico aos sogros durante uma epidemia de febre amarela no interior.',
  'Deu ouvidos às calúnias e ciladas de um sócio desleal (que assediava Ismália em vão e introduziu um farsante no quarto do casal), expulsando a esposa inocente de casa, separando-a dos dois filhinhos — o que a levou a morrer de tuberculose e dor moral — e recusando-se a perdoar o sócio agonizante.',
  'Ele perdera toda a fortuna da esposa em mesas de jogo na Europa e cometera suicídio.',
  'Ele proibira Ismália de educar os filhos na fé cristã, impondo-lhes o ateísmo absoluto.',
  'C',
  'Alfredo conta que se deixou envenenar pela calúnia de um sócio traidor, expulsou a santa Ismália de casa (que desencarnou dois anos depois, colhida pela tuberculose na fazenda paterna) e não conseguiu perdoar o caluniador no leito de morte, concluindo: "A calúnia é um monstro invisível, que ataca o homem através dos ouvidos invigilantes e dos olhos desprevenidos."',
  'Os Mensageiros — Cap. 17 ("O romance de Alfredo")',
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
  369,
  'os_mensageiros',
  'No Capítulo 18 ("Informações e esclarecimentos"), Alfredo recomenda que Aniceto, Vicente e André pernoitem no Posto devido à aproximação de uma grande tempestade magnética gerada pela Segunda Guerra Mundial, e relata um episódio emocionante que presenciara nos céus de Bristol (Inglaterra) durante um bombardeio aéreo. O que os socorristas viram ali?',
  'Um abrigo militar subterrâneo onde generais planejavam o contra-ataque aéreo.',
  'Um palácio real cercado por canhões antiaéreos que emitiam chamas vermelhas.',
  'Um navio hospitalar afundando no porto sem que houvesse qualquer sobrevivente.',
  'Um farol de intensa luz espiritual que partia de uma igreja modesta onde cristãos corajosos cantavam hinos e liam Atos dos Apóstolos (Paulo e Silas na prisão) enquanto as bombas caíam lá fora, edificando um verdadeiro "abrigo antitrevoso".',
  'Uma praça pública totalmente vazia onde apenas cães abandonados uivavam na escuridão.',
  'D',
  'Alfredo narra que oPosto já abrigava mais de 400 desencarnados removidos da guerra europeia e recorda que, sob o bombardeio de Bristol, viram um foco de luz celeste subindo de uma igreja onde cristãos oravam e cantavam hinos com fé heroica, construindo na Terra ''os abrigos antitrevosos''.',
  'Os Mensageiros — Cap. 18 ("Informações e esclarecimentos")',
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
  370,
  'os_mensageiros',
  'No Capítulo 19 ("O sopro"), Alfredo convoca Olívia, Madalena e outros "técnicos do sopro" para o atendimento noturno aos enfermos graves. Segundo explica o administrador, quais são os três requisitos indispensáveis para que o homem encarnado possa exercer com eficiência o sopro curativo, calmante e revigorador?',
  'Possuir diploma médico, usar aparelhos de oxigênio comprimido e cobrar pelas aplicações.',
  'Fazer jejum absoluto de sete dias, pronunciar fórmulas mágicas em latim e isolar-se da sociedade.',
  'Ser solteiro, pertencer a uma ordem sacerdotal antiga e residir no alto das montanhas.',
  'Ter grande capacidade pulmonar atlética, riqueza financeira e autoridade política.',
  'Ter o estômago sadio, a boca habituada a falar o bem (com abstenção do mal) e a mente reta, interessada em auxiliar.',
  'E',
  'Alfredo explica que o sopro curador está ao alcance das criaturas como o passe magnético, mas exige esforço individual: ''Nos círculos carnais, para que o sopro se afirme suficientemente, é imprescindível que o homem tenha o estômago sadio, a boca habituada a falar o bem, com abstenção do mal, e a mente reta, interessada em auxiliar.''',
  'Os Mensageiros — Cap. 19 ("O sopro")',
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
  371,
  'os_mensageiros',
  'No Capítulo 20 ("Defesas contra o mal"), André Luiz admira as fortificações do Posto de Socorro (fossos, torre de vigia com bandeira alva de paz e pequenos canhões de projéteis elétricos). Como Alfredo justifica a necessidade desse aparelhamento defensivo e que lenda oriental ele narra para ilustrar a lição?',
  'Explica que os projéteis elétricos não exterminam ninguém, mas assustam e afastam as vastas cooperativas de entidades perversas; e conta a lenda hindu da serpente e do santo, segundo a qual não devemos morder nem ferir ninguém, mas é preciso manter o perverso à distância para defender a obra do bem.',
  'Afirma que os canhões disparam balas de aço que destroem definitivamente a alma dos obsessores, citando a epopeia grega da Guerra de Troia.',
  'Diz que as muralhas e canhões são apenas peças decorativas de museu, sem qualquer utilidade prática nas zonas inferiores.',
  'Explica que o Posto promove ataques preventivos semanais para conquistar territórios das trevas a ferro e fogo.',
  'Conta a fábula do lobo e do cordeiro para provar que os bons devem entregar os abrigos aos maus sem oferecer qualquer resistência.',
  'A',
  'Alfredo esclarece que, enquanto não imperar a lei universal do amor, é indispensável o reinado da justiça para defender a obra do bem com projéteis elétricos que apenas afastam os assaltantes, ilustrando o ensino com a lenda hindu do sábio que aconselhou a serpente convertida a não morder nem matar, mas a emitir seus silvos para deter a maldade humana.',
  'Os Mensageiros — Cap. 20 ("Defesas contra o mal")',
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
  372,
  'os_mensageiros',
  'No Capítulo 21 ("Espíritos dementados"), ao visitar os vastos albergues do Posto, André Luiz presencia Alfredo atender com paciência paternal três desencarnados que se julgavam ainda na Terra: o velho Malaquias, o fidalgo Aristarco e uma senhora colérica. A que ideias fixas inferiores estavam presos esses três enfermos mentais?',
  'Ao estudo da astronomia, à composição de sinfonias e à pintura de quadros religiosos.',
  'Malaquias reclamava suas terras e escravos (tendo exercido tirania rural); Aristarco exigia sua parte numa herança contra os primos e o Visconde de Cairu (querendo lesá-los); e a senhora dizia temer pelo marido e filhas, mas desencarnara justamente quando pretendia envenenar o esposo às ocultas.',
  'Todos os três acreditavam ser imperadores romanos perseguidos pelos soldados cristãos.',
  'Eles choravam arrependidos por terem doado seus bens aos pobres durante a vida física.',
  'Eles pediam permissão para trabalhar como enfermeiros nos pavilhões de Campo da Paz.',
  'B',
  'Alfredo mostra que no círculo carnal os três pareciam pessoas normais, mas no Além revelavam a loucura da centralização mental em propósitos inferiores e criminosos (a tirania escravista de Malaquias, a cobiça hereditária de Aristarco e a tentativa oculta de homicídio daquela senhora).',
  'Os Mensageiros — Cap. 21 ("Espíritos dementados")',
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
  373,
  'os_mensageiros',
  'No Capítulo 22 ("Os que dormem"), Alfredo conduz os visitantes a extensos pavilhões silenciosos onde repousavam 1.980 abrigados em rigidez cataléptica, semelhantes a múmias egípcias. Segundo explica Aniceto, por que esses espíritos permanecem mergulhados naquele sono profundo pós-morte?',
  'Porque tomaram medicamentos anestésicos aplicados pelos médicos do Ministério da Regeneração.',
  'Porque foram santos mártires na Terra e receberam como prêmio um repouso de cem anos.',
  'Porque na Terra nunca se entregaram ao bem ativo e perseveraram na negação deliberada da vida eterna, acreditando convictamente que a morte era o nada e o sono eterno; não exercitaram a fé ("ginástica do Espírito") e ficaram magnetizados pelas próprias concepções negativistas.',
  'Porque ainda estão ligados pelo cordão de prata aos corpos físicos sepultados nos cemitérios.',
  'Porque escolheram voluntariamente hibernar para aguardar a construção de novas cidades na Terra.',
  'C',
  'Aniceto esclarece: "A fé sincera é ginástica do Espírito. Quem não a exercitar de algum modo, na Terra, preferindo deliberadamente a negação injustificável, encontrar-se-á mais tarde sem movimento", hipnotizado pela própria ideia de que a morte é o sono eterno.',
  'Os Mensageiros — Cap. 22 ("Os que dormem")',
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
  374,
  'os_mensageiros',
  'No Capítulo 23 ("Pesadelos"), Aniceto pede a André Luiz que exercite sua visão espiritual recém-ampliada examinando a mente de uma daquelas mulheres adormecidas nos pavilhões. Que cena dramática André vê repetindo-se no campo mental daquela enferma (Ana) e que sentimento ele consegue despertar em si mesmo?',
  'Vê Ana trabalhando feliz num jardim de infância e sente inveja da tranquilidade dela.',
  'Vê Ana sendo coroada rainha num salão de festas e sente admiração pela riqueza humana.',
  'Não consegue ver absolutamente nada porque a mente dos adormecidos fica totalmente vazia.',
  'Vê o pesadelo do crime que ela cometera: Ana envenenara um homem casado, esmagara-lhe o crânio a marteladas gritando ''Deus não existe!'' e pusera o cadáver nos trilhos do trem; mas, vencendo o impulso de revolta, André sente viva compaixão fraternal, e seus pensamentos de paz a auxiliam.',
  'Vê Ana sofrendo um acidente de automóvel inocente e exige que Alfredo a desperte à força.',
  'D',
  'Aniceto ensina que quem dorme em desequilíbrio entrega-se a terríveis pesadelos; André vê na tela mental de Ana a cena do homicídio que ela praticara e o pavor das sombras que a cercavam, mas, lembrando as lições de Nosso Lar, envolve-a em compaixão fraterna, sendo elogiado pelo instrutor.',
  'Os Mensageiros — Cap. 23 ("Pesadelos")',
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
  375,
  'os_mensageiros',
  'No Capítulo 24 ("A prece de Ismália"), durante a oração coletiva presidida por Ismália nos pavilhões dos adormecidos, André Luiz vê cair do Alto sobre todos os que oravam uma chuva abundante de flocos esbranquiçados (elementos-força), que ao tocá-los se transformavam em bolhas luminosas dirigidas aos doentes. Por que as luzes emitidas por Ismália, Aniceto, Alfredo e pelos servidores tinham brilho e alcance diferentes?',
  'Porque a Providência Divina envia quantidades desiguais de fluido, privilegiando apenas os chefes.',
  'Porque a intensidade da luz depende exclusivamente da idade cronológica do corpo físico anterior.',
  'Porque apenas as mulheres possuem faculdade de transmitir energias curativas durante a prece.',
  'Porque os aparelhos elétricos do teto iluminavam apenas o estrado onde se encontrava Ismália.',
  'Porque, embora os elementos-força cheguem da Providência em quantidade igual para todos os que intercedem, cada Espírito tem uma capacidade diferente de receber e distribuir segundo as qualidades de elevação e amor já conquistadas por si mesmo.',
  'E',
  'Durante a prece, André observa a gradação luminosa (a luz diamantina e azul das senhoras de Ismália, o lilás de Aniceto, o verde suave de Alfredo) e Aniceto explica que o auxílio do Alto desce em porções iguais para todos, mas cada alma o recebe e irradia conforme o próprio patrimônio evolutivo.',
  'Os Mensageiros — Cap. 24 ("A prece de Ismália")',
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
  376,
  'os_mensageiros',
  'No Capítulo 25 ("Efeitos da oração"), sob o influxo das bolhas luminosas da prece de Ismália, quantos dentre os 1.980 adormecidos conseguiram levantar-se do leito naquela noite, e que lição Aniceto extrai desse fato para os trabalhadores do bem?',
  'Somente dois enfermos se levantaram (ainda assim espavoridos), ensinando-nos que devemos semear o bem sempre e em toda parte, sem qualquer ansiedade ou exigência de resultados imediatos, pois a germinação, o crescimento e o fruto pertencem a Deus.',
  'Todos os 1.980 adormecidos despertaram completamente curados e seguiram volitando para Nosso Lar.',
  'Exatamente metade dos internos levantou-se e passou a trabalhar imediatamente como enfermeiros.',
  'Nenhum interno reagiu à prece, provando que a oração intercessória é inútil para quem dorme.',
  'Quatrocentos internos levantaram-se e foram transferidos no mesmo instante para a crosta terrestre.',
  'A',
  'Dos 1.980 abrigados, 400 recebiam tratamento intensivo, dois terços destes recebiam passes, poucos recebiam o sopro e apenas 2 conseguiram erguer-se naquela noite; Aniceto conclui: "Façamos todos o bem, sem qualquer ansiedade... O lavrador pode espalhar as sementes à vontade e onde quer que esteja, mas precisa reconhecer que a germinação, o crescimento e o resultado pertencem a Deus."',
  'Os Mensageiros — Cap. 25 ("Efeitos da oração")',
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
  377,
  'os_mensageiros',
  'No Capítulo 26 ("Ouvindo servidores"), o humilde colaborador Alonso pede permissão a Alfredo para visitar a Terra a fim de consolar a viúva e os filhinhos, cujos prantos e chamados dolorosos o perturbavam à noite. Como Alfredo o aconselha e o que leva Alonso a desistir do pedido?',
  'Alfredo proíbe rispidamente o pedido, ameaçando expulsar Alonso do Posto de Socorro se ele tornar a falar na família.',
  'Alfredo adverte que a saudade que impede de atender à Vontade Divina é enfermidade do coração, relata que dois colegas autorizados antes acabaram ficando presos e derrotados no antigo lar pelo sentimentalismo doentio, e lembra que "os voos de grande altura pedem asas fortes".',
  'Alfredo informa que a viúva de Alonso já se casara novamente e não desejava mais lembrar-se dele.',
  'Alfredo exige que Alonso acumule cinquenta mil bônus-hora antes de dirigir uma prece pelos filhos.',
  'Alfredo revela que é proibido a qualquer espírito desencarnado sentir amor pelos parentes deixados na Terra.',
  'B',
  'Com bondade paterna, Alfredo mostra a Alonso que ele ainda não tinha o coração suficientemente fortalecido para visitar o lar sem cair preso aos fluidos pesados do pranto doméstico (como sucedera a dois outros servidores), concluindo: "Os voos de grande altura pedem asas fortes."',
  'Os Mensageiros — Cap. 26 ("Ouvindo servidores")',
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
  378,
  'os_mensageiros',
  'No Capítulo 27 ("O caluniador"), Aniceto leva André Luiz e Vicente a uma câmara isolada onde se encontrava o enfermo Paulo, que já chorava e conseguia pronunciar com esforço "Graças a Deus", mas via em sua tela mental as imagens de Ismália aflita e Alfredo envelhecido a acusá-lo. Quem era Paulo e como fora parar naquele Posto de Socorro?',
  'Era o médico que cuidara de Ismália durante sua enfermidade na fazenda paterna.',
  'Era um antigo governador colonial que não tinha qualquer ligação pessoal com Alfredo.',
  'Era justamente o falso amigo e sócio caluniador que destruíra o lar de Alfredo na Terra; o próprio Alfredo, vencendo o rancor para conquistar a iluminação íntima, fora buscá-lo no abismo, conversa com ele diariamente como irmão, e Ismália já intercedeu para que uma ex-vítima dele o receba como filho na próxima reencarnação.',
  'Era o irmão consanguíneo de Vicente que fora preso pelos guardas de Campo da Paz.',
  'Era um escritor famoso que fora trazido à força para sofrer a vingança pessoal de Alfredo.',
  'C',
  'Aniceto revela a sublime vitória moral de Alfredo: aquele enfermo era o próprio caluniador que lhe arruinara o lar; embora Alfredo e Ismália hoje se vestissem de luz e o amparassem com amor fraterno, Paulo ainda os via em sua mente culpada como vítimas acusadoras, pois ''o dever possui as bênçãos da confiança, mas a dívida tem os fantasmas da cobrança''.',
  'Os Mensageiros — Cap. 27 ("O caluniador")',
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
  379,
  'os_mensageiros',
  'No Capítulo 28 ("Vida social"), o Posto de Socorro recebe a visita festiva do casal Bacelar e de duas jovens, vindos de carro da colônia "Campo da Paz". Conversando com André Luiz e Vicente, o experiente chefe de assistência Sr. Bacelar compara os espíritos encarnados aos pacientes dos médicos terrenos e destaca um vício muito comum entre os homens que fogem ao testemunho do bem. Como ele chama esse hábito?',
  'O "cientificismo exagerado".',
  'O "ascetismo monástico".',
  'O "trabalho compulsório".',
  'O "desculpismo", pelo qual as criaturas terrestres inventam mil pretextos contraditórios (excesso de deveres ou falta de ensejo, riqueza ou pobreza, juventude ou velhice, casamento ou solteirice, doença ou saúde) para fugir às tarefas divinas, lembrando que é preciso "aprender a servir e passar".',
  'O "silêncio absoluto".',
  'D',
  'O Sr. Bacelar ensina que no auxílio aos encarnados é preciso "aprender a servir e passar" e descreve com bom humor o "desculpismo" humano: moços dizem-se jovens demais, idosos dizem-se inúteis, casados alegam a família, solteiros queixam-se da falta dela, doentes dizem que não podem e sãos afirmam que não precisam.',
  'Os Mensageiros — Cap. 28 ("Vida social")',
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
  380,
  'os_mensageiros',
  'No Capítulo 29 ("Notícias interessantes"), André Luiz e Vicente conversam com as jovens Cecília (filha do casal Bacelar) e Aldonina (sobrinha), que trabalham em "Campo da Paz". Que diferença essencial Cecília aponta entre os internos das Câmaras de Retificação de "Nosso Lar" e os assistidos da colônia "Campo da Paz"?',
  'Em Campo da Paz só existem espíritos angélicos, enquanto em Nosso Lar só há criminosos.',
  'Em Campo da Paz ninguém trabalha, enquanto em Nosso Lar o serviço é obrigatório.',
  'Ambas as colônias ficam na mesma altitude vibratória e atendem exatamente ao mesmo público.',
  'Em Campo da Paz são atendidos apenas animais e vegetais, sem presença de espíritos humanos.',
  'Em Nosso Lar atende-se a espíritos sofredores que já choram e sentem remorso (indicativo de renovação), enquanto em Campo da Paz — fundada há mais de dois séculos em plena região inferior — luta-se com espíritos obsessores e revoltados, doentes que não acreditam na própria enfermidade.',
  'E',
  'Cecília explica que viver em "Nosso Lar" é grande bênção (seus Ministérios são verdadeiras universidades), pois lá os internos já choram arrependidos, ao passo que em "Campo da Paz" é preciso lidar com revoltados e obsessores, sendo "mais fácil remediar o que geme, que atender ao revoltado".',
  'Os Mensageiros — Cap. 29 ("Notícias interessantes")',
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
  381,
  'os_mensageiros',
  'No Capítulo 30 ("Em palestra afetuosa"), Cecília e Aldonina explicam como sua irmã Isaura se casara em "Campo da Paz" com Antônio (funcionário do Ministério do Esclarecimento de "Nosso Lar"), preparando-se durante seis anos para "apurar o enxoval dos sentimentos", e revelam uma importante tarefa diária de "Campo da Paz" junto às crianças que reencarnam. Qual é essa tarefa?',
  'A colônia prepara, em média, quinze a vinte reencarnações diárias e presta assistência espiritual contínua aos companheiros ou tutelados recém-encarnados pelo menos durante os primeiros sete anos de existência carnal.',
  'A colônia retira todas as crianças da Terra aos três anos de idade para educá-las no Além.',
  'A colônia impede qualquer reencarnação em famílias pobres ou trabalhadoras.',
  'A colônia acompanha os reencarnados apenas no último dia de sua velhice física.',
  'A colônia envia instrutores isolados, proibindo o trabalho em grupo nas zonas da Crosta.',
  'A',
  'Cecília informa que ''Campo da Paz'' (definida por seu governador como ''um campo de batalha, com a Paz de Jesus'', cercada de Postos de Socorro de dez em dez quilômetros) prepara de 15 a 20 reencarnações por dia, assistindo os reencarnantes especialmente durante o período infantil dos primeiros sete anos.',
  'Os Mensageiros — Cap. 30 ("Em palestra afetuosa")',
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
  382,
  'os_mensageiros',
  'No Capítulo 31 ("Cecília ao órgão" — grafado XXI no título interno), no Salão de Música iluminado de azul onde oitenta crianças formavam um coro e orquestra, Cecília executa ao órgão uma peça clássica predileta do pai de Ismália e depois canta uma comovente canção de sua própria alma dedicada a Hermínio (que ainda caía na Terra). Que peça clássica ela tocou e que frase consoladora Ismália lhe disse ao final?',
  'Tocou a "Marcha Nupcial" de Mendelssohn, e Ismália ordenou-lhe que esquecesse Hermínio para sempre.',
  'Tocou a "Tocata e Fuga em Ré Menor", de Bach, e, após sua canção a Hermínio, ouviu de Ismália: "Devotar-se não é crime, minha boa Cecília. O amor é luz de Deus, ainda mesmo quando resplandece no fundo do abismo."',
  'Tocou a "Quinta Sinfonia" de Beethoven, e Ismália repreendeu-a por chorar em público.',
  'Tocou o "Noturno" de Chopin, e Ismália prometeu trazer Hermínio desencarnado no dia seguinte.',
  'Tocou a "Ave Maria" de Gounod, e Ismália proibiu a entrada de instrumentos musicais no Posto.',
  'B',
  'Acompanhada pelas oitenta crianças, Cecília executa magistralmente a "Tocata e Fuga em Ré Menor", de Bach, e em seguida entoa seu poema de saudade e esperança por Hermínio ("Guardei para os teus olhos / As estrelas brilhantes do céu calmo..."), sendo abraçada por Ismália com a sublime sentença sobre o amor fiel.',
  'Os Mensageiros — Cap. 31 ("Cecília ao órgão")',
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
  383,
  'os_mensageiros',
  'No Capítulo 32 ("Melodia sublime"), atendendo ao pedido de Aniceto, Ismália senta-se ao órgão e executa uma melodia de sua elevada esfera. Que fenômeno extraordinário André Luiz percebe e presencia durante e logo após a execução de Ismália?',
  'O órgão transforma-se em ouro maciço e as paredes do castelo desaparecem por completo.',
  'O som produz uma tempestade elétrica que desperta instantaneamente todos os internos do manicômio.',
  'Sem que Ismália pronunciasse palavras articuladas, sua música transmitia diretamente à alma uma sublime prece de louvor ao Senhor Supremo, enquanto luzes do Alto a envolviam num arco irisado e de seu coração partiam belas flores fluídicas azul-celeste que se espalhavam sobre todos.',
  'Todos os presentes adormecem profundamente durante três dias devido ao cansaço acústico.',
  'Aparecem no salão os antigos compositores europeus para disputar a autoria da partitura.',
  'C',
  'Ismália transmite através das vibrações musicais uma silenciosa oração de glorificação a Deus (''Ó Senhor Supremo de Todos os Mundos...'') e de seu coração desprendem-se corolas fluídicas azul-celeste perfumadas; Aniceto explica que, enquanto os maus como Paulo exibem o inferno íntimo, os bons como Ismália repartem o paraíso que edificaram no próprio coração.',
  'Os Mensageiros — Cap. 32 ("Melodia sublime")',
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
  384,
  'os_mensageiros',
  'No Capítulo 33 ("A caminho da Crosta"), Aniceto, Vicente e André partem pela manhã no carro gentilmente cedido por Alfredo (semelhante a um pequeno automóvel de asas movido por fluidos elétricos) até o meio-dia, prosseguindo depois a pé pelas zonas caliginosas até avistarem a luz do Sol e chegarem ao Rio de Janeiro. Como eles voltam a volitar ao atingir a zona de influenciação direta da Crosta?',
  'Utilizando aparelhos mecânicos de propulsão a jato fornecidos pelo posto de abastecimento.',
  'Sendo carregados nos braços pelos guardas dos Samaritanos até as praias da Guanabara.',
  'Aguardando a passagem do aeróbus funicular que faz a linha regular entre Nosso Lar e Petrópolis.',
  'Utilizando seus conhecimentos de transformação da força centrípeta, orientando o pensamento no campo magnético da América do Sul (sob a luz resultante do contato magnético entre a energia positiva do Sol e a força negativa da massa planetária) e refazendo as forças junto ao mar.',
  'Entrando em estado de coma cataléptico para serem transportados pelas correntes de vento.',
  'D',
  'Ao saírem das zonas densas e avistarem o Sol (''na Natureza física, a mais alta imagem de Deus que conhecemos''), Aniceto explica que a luz resulta do contato magnético entre a energia positiva solar e a força negativa planetária, permitindo-lhes volitar pela transformação da força centrípeta até Petrópolis e a baía da Guanabara.',
  'Os Mensageiros — Cap. 33 ("A caminho da Crosta")',
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
  385,
  'os_mensageiros',
  'No Capítulo 34 ("Oficina de ''Nosso Lar''"), após atravessarem as ruas cariocas repletas de desencarnados inferiores colados aos transeuntes, Aniceto conduz André e Vicente a uma casa modesta mas espiritualmente iluminada, que servia de refúgio e oficina de "Nosso Lar" na Crosta. Quem eram os dirigentes daquele lar cristão?',
  'O Dr. Ernesto e Dona Zélia, antigos familiares de André Luiz.',
  'O advogado Eleutério e Dona Rosalinda, parentes de Vicente.',
  'O Sr. Monteiro e o Sr. Belarmino Ferreira, que já haviam reencarnado no Rio de Janeiro.',
  'Um casal de milionários que cobrava ingressos para a realização de espetáculos mediúnicos.',
  'O casal Isidoro (desencarnado havia três anos, mas autorizado por "Nosso Lar" a permanecer no lar como esposo amigo, pai devotado e sentinela vigilante) e sua esposa encarnada Dona Isabel, viúva pobre e médium vidente que cuidava de cinco filhos fazendo o papel de "âncora" espiritual.',
  'E',
  'Isidoro e Isabel haviam saído de Nosso Lar mais de 40 anos antes para edificar aquela tenda de amor; mesmo após a desencarnação de Isidoro três anos antes, os vínculos de amor puro permitiram que ele continuasse chefiando espiritualmente a casa ao lado da dedicada esposa e médium Isabel.',
  'Os Mensageiros — Cap. 34 ("Oficina de ''Nosso Lar''")',
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
  386,
  'os_mensageiros',
  'No Capítulo 35 ("Culto doméstico"), Dona Isabel reúne os cinco filhos em torno da mesa para o culto do Evangelho no Lar: a primogênita Joaninha lê um trecho sobre a irreflexão e a notícia do suicídio de uma jovem; a pequena Neli faz a prece; e Dona Isabel lê Mateus 13:31 (a parábola do grão de mostarda). Quem inspira diretamente o luminoso comentário de Dona Isabel sobre o valor das "coisas pequeninas"?',
  'O nobre espírito Fábio Aleto, que coloca a destra sobre a fronte da viúva, transmitindo-lhe a interpretação espiritual que ela traduz em palavras maternais ao alcance das crianças.',
  'O próprio André Luiz, que incorpora mediunicamente em Dona Isabel para estrear na tarefa.',
  'Um espírito galhofeiro que passava pela rua e entrou sem permissão dos vigilantes.',
  'O filho de doze anos (Joãozinho), que já era doutor em teologia bíblica.',
  'Ninguém, pois durante o culto doméstico os espíritos amigos retiram-se completamente da sala.',
  'A',
  'Isidoro auxilia na abertura do Novo Testamento em Mateus 13:31 e o elevado mentor Fábio Aleto pousa a mão sobre a fronte de Dona Isabel, transmitindo-lhe a sublime lição sobre o grão de mostarda (a ciência de começar pelas pequenas coisas no próprio coração).',
  'Os Mensageiros — Cap. 35 ("Culto doméstico")',
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
  387,
  'os_mensageiros',
  'No Capítulo 36 ("Mãe e filhos"), após o comentário evangélico, a menina Marieta pergunta por que comiam apenas uma vez por dia, e a caçula Noemi conta ter visto o pai desencarnado ajudando a segurar o bolo no domingo. Em seguida, o filho de doze anos, Joãozinho (espírito procedente de região inferior), pergunta ironicamente o que a mãe entende por pobreza e propõe alugar o salão de culto ao "seu" Maciel para depósito de móveis. Como Dona Isabel reage?',
  'Concorda imediatamente com o filho, encerrando as reuniões evangélicas para ganhar o aluguel.',
  'Explica serenamente que a pobreza honesta e trabalhadora é uma das melhores oportunidades de elevação e liberdade espiritual, e responde com firmeza amorosa que, enquanto respeitarem a memória do pai, o salão continuará consagrado ao Evangelho.',
  'Expulsa Joãozinho de casa naquela mesma noite por falta de respeito à religião da família.',
  'Chora desesperada e pede que as filhas menores obedeçam a todas as ordens do irmão.',
  'Promete a Joãozinho que Jesus os tornará milionários na semana seguinte se ele fizer jejum.',
  'B',
  'Dona Isabel dá uma admirável lição de pedagogia materna: trata a filha mais velha como amiga, as menores como mãe e o filho orgulhoso como instrutora firme e serena, recusando alugar o salão sagrado do culto e fazendo Aniceto observar: ''O Evangelho dá equilíbrio ao coração.''',
  'Os Mensageiros — Cap. 36 ("Mãe e filhos")',
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
  388,
  'os_mensageiros',
  'No Capítulo 37 ("No santuário doméstico"), ao saírem ao jardim antes de um forte aguaceiro, André Luiz vê formas sombrias e vagabundas da rua aproximarem-se da casa de Dona Isabel procurando abrigo, mas recuarem espantadas sem conseguir entrar. Como Aniceto explica esse fenômeno de proteção?',
  'Porque a casa possuía grades de ferro pontiagudas e cães ferozes soltos no quintal.',
  'Porque a chuva física dissolve instantaneamente o perispírito das entidades inferiores.',
  'Porque cada prece do coração constitui emissão eletromagnética de poder e o culto familiar do Evangelho acende claridades espirituais em torno, transformando o lar que ora em verdadeira fortaleza contra a qual as entidades da sombra sofrem choques de vulto.',
  'Porque os espíritos desencarnados não conseguem enxergar casas construídas em bairros humildes.',
  'Porque a polícia terrestre mantinha guardas armados na esquina daquela rua.',
  'C',
  'Aniceto ensina: "O culto familiar do Evangelho não é tão só um curso de iluminação interior, mas também processo avançado de defesa exterior, pelas claridades espirituais que acende em torno. O homem que ora traz consigo inalienável couraça. O lar que cultiva a prece transforma-se em fortaleza."',
  'Os Mensageiros — Cap. 37 ("No santuário doméstico")',
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
  389,
  'os_mensageiros',
  'No Capítulo 38 ("Atividade plena"), durante a madrugada, numerosos encarnados desprendidos pelo sono físico comparecem à oficina de Dona Isabel. Ali, uma bondosa avozinha desencarnada consola a neta encarnada Niêta, dizendo-lhe que a calúnia é uma víbora de brinquedo que se quebra como vidro para dar lugar à flor da virtude. Segundo explica Aniceto, de que maneira Niêta se recordará desse encontro ao acordar no corpo físico?',
  'Lembrará palavra por palavra todo o discurso da avó, anotando-o integralmente em taquigrafia.',
  'Não guardará nenhum vestígio emocional nem simbólico, acordando ainda mais desesperada.',
  'Acordará falando em língua estrangeira que nunca estudara na vida física.',
  'Por estar sob o véu das vibrações carnais, não lembrará as palavras exatas, mas acordará encorajada e recordará as imagens simbólicas criadas pelo pensamento da avó: dirá que sonhou com uma cobra ameaçadora que se transformou em serpente de vidro, quebrou-se em suas mãos e virou perfumosa flor.',
  'Ficará sonâmbula durante sete dias até que a avó volte a retirar o fluido magnético.',
  'D',
  'Aniceto explica a psicologia dos sonhos: devido à muralha vibratória do corpo físico, o encarnado comum traz de volta imagens simbólicas gravadas pelas criações mentais recebidas no encontro espiritual (no caso de Niêta, a serpente de vidro que se parte e se transforma em flor), além do conforto moral no coração.',
  'Os Mensageiros — Cap. 38 ("Atividade plena")',
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
  390,
  'os_mensageiros',
  'No Capítulo 39 ("Trabalho incessante"), ao raiar do dia na oficina de Dona Isabel, os auxiliares espirituais Vieira e Hildegardo recebem uma justa admoestação de um orientador da casa. Que imprudência ambos haviam cometido na reunião evangélica anterior?',
  'Haviam dormido durante toda a preleção evangélica, esquecendo de abrir o portão do jardim.',
  'Haviam cobrado bônus-hora dos doentes encarnados que vieram receber passes magnéticos.',
  'Haviam furtado medicamentos dos armários da oficina para levá-los ao Umbral.',
  'Haviam impedido a entrada de uma pobre mãe desencarnada que queria socorrer a filha Dalva.',
  'Levados pela simpatia pessoal aos laços de sangue, introduziram na reunião o tio Hilário e o primo Carlos — espíritos escarninhos e despreparados —, os quais tentaram assaltar as faculdades mediúnicas de Dona Isabel e provocaram grave distúrbio no recinto.',
  'E',
  'O orientador adverte Vieira e Hildegardo de que não é falta de caridade, mas compreensão do dever, barrar na oficina espíritos vagabundos, irônicos ou de má-fé, mesmo que sejam parentes queridos, pois "quem aceita um compromisso não vive sem contas".',
  'Os Mensageiros — Cap. 39 ("Trabalho incessante")',
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
  391,
  'os_mensageiros',
  'No Capítulo 40 ("Rumo ao campo"), volitando com Aniceto e Vicente sobre a cidade a caminho do repouso no campo, André Luiz enxerga nas vias públicas manchas escuras (nuvens de bactérias) e grandes núcleos pardacentos ou obscuros expelidos por certas pessoas. O que são esses núcleos mentais e que relação Aniceto estabelece com a medicina do futuro?',
  'São zonas de matéria mental inferior e nuvens de larvas mentais produzidas pela mente enferma (que têm vida própria como os micróbios físicos); por isso, no futuro a medicina da alma absorverá a medicina do corpo, pois a cura real pertence ao homem-espírito.',
  'São apenas fumaça de chaminés industriais e poeira comum das estradas, sem qualquer relação com o pensamento humano.',
  'São nuvens de oxigênio puro condensado que protegem os transeuntes contra as doenças infecciosas.',
  'São sombras projetadas pelos edifícios altos devido à posição do Sol ao meio-dia.',
  'São fluidos enviados pelas colônias superiores para anestesiar os moradores da cidade.',
  'A',
  'Aniceto mostra que, assim como o corpo doente produz nuvens de bactérias, a mente enferma expele nuvens de larvas mentais com vida própria, destacando a importância do ''orai e vigiai'' e o papel da luz solar casada ao magnetismo terrestre na destruição incessante da flora microbiana inferior.',
  'Os Mensageiros — Cap. 40 ("Rumo ao campo")',
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
  392,
  'os_mensageiros',
  'No Capítulo 41 ("Entre as Árvores" — grafado XVI no título interno), após descansarem num pomar campestre — onde Aniceto explica que apenas um terço dos cooperadores espirituais atua durante o dia para deixar ao encarnado a responsabilidade de sua "página diária" —, eles presenciam na estrada um carroceiro ferido na cabeça pelo coice de um burro. Ao ser interpelado pelo chefe espiritual local, o que explica o guarda espiritual Glicério?',
  'Que ele próprio assustara o animal de propósito para vingar-se de uma ofensa antiga do carroceiro.',
  'Que fizera todo o possível para proteger o carroceiro, mas este era de uma grosseria e crueldade inomináveis com os animais, surrando e ferindo o burro com tanta fúria e ingratidão que neutralizou o amparo espiritual e atraiu sobre si o choque de retorno.',
  'Que se distraíra colhendo frutas no pomar e não vira o veículo passar pela estrada.',
  'Que os espíritos protetores nunca auxiliam trabalhadores rurais ou condutores de veículos.',
  'Que o burro estava possuído por um espírito obsessor que planejara o crime durante meses.',
  'B',
  'Glicério relata que o carroceiro fechara a mente a qualquer sugestão do bem e castigara brutalmente o muar humilde até receber a patada; Aniceto confirma a justiça da lição, ensinando que "a cólera é punida por suas consequências" e que devemos aos animais os valores da educação e nunca a brutalidade.',
  'Os Mensageiros — Cap. 41 ("Entre as Árvores")',
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
  393,
  'os_mensageiros',
  'No Capítulo 42 ("Evangelho no ambiente rural"), cercado pelos trabalhadores espirituais do solo, por um rebanho bovino, muares e aves em silêncio, Aniceto lê a Epístola de Paulo aos Romanos (8:19-21: "a ardente expectação da criatura espera a manifestação dos filhos de Deus"). Em seu comentário, qual elemento químico vital ele destaca como centro de toda a atividade das plantas e das indústrias agropecuárias na Terra?',
  'O ouro metálico escondido no subsolo das montanhas.',
  'O gás hélio presente nas camadas superiores da estratosfera.',
  'O nitrogênio: embora o homem respire cerca de mil litros dele por dia, só as plantas conseguem retirá-lo do solo e fixá-lo em cada grão de trigo e fruto como bolsa de açúcar e albumina; e quando a humanidade substituir a matança e a ganância pela cooperação com a Natureza, o Senhor lhe permitirá solucionar a fixação do nitrogênio do ar.',
  'O chumbo mineral utilizado nas fundições industriais das grandes metrópoles.',
  'O urânio radioativo empregado na fabricação de armamentos bélicos.',
  'C',
  'Em uma página antológica de ecologia espiritual, Aniceto exalta o sacrifício das plantas (''infatigáveis operárias do orbe'') e dos animais, explicando que toda a luta agropecuária humana gira em torno da busca do nitrogênio indispensável à vida orgânica e anunciando a era futura em que o matadouro será substituído pela cooperação fraterna com a Natureza.',
  'Os Mensageiros — Cap. 42 ("Evangelho no ambiente rural")',
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
  394,
  'os_mensageiros',
  'No Capítulo 43 ("Antes da reunião"), ao regressarem às 18 horas à residência de Dona Isabel para a reunião pública, André Luiz observa os cooperadores espirituais dividindo a sala com longas faixas fluídicas e magnetizando o ar, enquanto chegavam dezenas de desencarnados sofredores ostentando mãos no ventre, feridas e ataduras. Como Aniceto explica o estado daquelas entidades?',
  'Que aquelas feridas eram causadas pelos guardas espirituais na entrada do recinto.',
  'Que o corpo físico delas fora enterrado dentro daquela mesma sala anos antes.',
  'Que eram espíritos angélicos disfarçados de doentes apenas para testar a caridade dos médiuns.',
  'Que as faixas fluídicas limitavam a zona de influenciação dos sofredores, e que muitos destes ainda não aceitavam a morte corporal por terem cultivado na Terra a ''volúpia da enfermidade'', permanecendo prisioneiros mentais da ideia de doença após a desencarnação.',
  'Que todos os desencarnados são obrigados a usar ataduras brancas durante o primeiro século no Além.',
  'D',
  'Aniceto explica a preparação magnética do ambiente e mostra que muitas boas almas se tornam na Terra prisioneiras voluntárias da ideia de doença, apaixonando-se por diagnósticos e sintomas; ao desencarnarem, mantêm no corpo espiritual a imagem das chagas que adoravam, pois "remediar a saúde e viciar a mente são duas atitudes essencialmente antagônicas".',
  'Os Mensageiros — Cap. 43 ("Antes da reunião")',
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
  395,
  'os_mensageiros',
  'No Capítulo 44 ("Assistência"), recordando os conselhos de Narcisa, André Luiz aplica passes magnéticos com ternura e fé em Jesus sobre os olhos de uma senhora desencarnada que gritava estar cega pelo tracoma, restituindo-lhe imediatamente a visão espiritual. Quando André se deixa envolver pelo deslumbramento íntimo diante da cura, que advertência sábia Aniceto lhe faz em voz baixa?',
  'Que André deveria cobrar bônus-hora da enferma curada antes que ela saísse da sala.',
  'Que André já se tornara igual a Jesus Cristo e não precisava mais da supervisão de instrutores.',
  'Que apenas os quatro últimos doentes (que não sentiram alívio imediato) tinham valor perante Deus.',
  'Que os médicos desencarnados são proibidos de aplicar passes em espíritos sofredores.',
  '"André, a excessiva contemplação dos resultados pode prejudicar o trabalhador. Em ocasiões como esta, a vaidade costuma acordar dentro de nós, fazendo-nos esquecer o Senhor... O servo fiel não é aquele que se inquieta pelos resultados, nem o que permanece enlevado na contemplação deles, mas justamente o que cumpre a vontade divina do Senhor e passa adiante."',
  'E',
  'Após curar a cega desencarnada e atender outros cinco doentes (dos quais um melhorou e quatro ainda permaneceram impermeáveis ao auxílio), André aprende com Aniceto a guardar o coração contra a vaidade dos resultados: ao servidor fiel compete semear o bem, cumprir a vontade divina e passar adiante.',
  'Os Mensageiros — Cap. 44 ("Assistência")',
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
  396,
  'os_mensageiros',
  'No Capítulo 45 ("Mente enferma"), antes da palestra, Aniceto aponta um cavalheiro encarnado rodeado de pequenas nuvens escuras no cérebro — o Dr. Fidélis —, que conversava com o doutrinador Sr. Bentes. Enquanto o Dr. Fidélis exaltava a metapsíquica de Richet e acusava os médiuns de mistificação, como o Sr. Bentes e o instrutor Aniceto analisam a postura daqueles pesquisadores?',
  'Bentes compara os metapsiquistas a estranhos lavradores que contam os grãos de areia, os vermes e o calor da terra, mas desprezam a semente divina da renovação moral; e Aniceto define o Dr. Fidélis como uma ''mente enfermiça'', pesquisador de superfície que exige provas dos outros sem auscultar a própria consciência.',
  'Bentes concorda que a metapsíquica substituiu definitivamente o Evangelho de Jesus e fecha o grupo espírita.',
  'Aniceto ordena que os espíritos materiais produzam fenômenos de levitação imediata para satisfazer o orgulho do Dr. Fidélis.',
  'Bentes afirma que o Espiritismo proíbe qualquer estudo científico ou filosófico.',
  'Dr. Fidélis converte-se instantaneamente em médium psicógrafo exemplar durante a conversa.',
  'A',
  'O Sr. Bentes responde com serenidade que os médiuns são simples colaboradores e que a pretensa infalibilidade científica transforma médiuns em cobaias enquanto despreza a semente espiritual; Aniceto acrescenta que o Dr. Fidélis traz o sentimento envenenado, querendo ''a realização divina sem o esforço humano'' e ''a ciência sem consultar a consciência''.',
  'Os Mensageiros — Cap. 45 ("Mente enferma")',
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
  397,
  'os_mensageiros',
  'No Capítulo 46 ("Aprendendo sempre"), diante da grande mesa repleta de pedidos escritos de receituário e orientação trazidos pelos 35 encarnados presentes (acompanhados por mais de duzentos desencarnados necessitados), Vicente pergunta se todos recebem tudo quanto pedem. Qual é a resposta de Aniceto?',
  'Sim, pois os benfeitores espirituais são obrigados a satisfazer todos os caprichos materiais e comerciais dos consulentes.',
  'Não: "Recebem o que precisam." A solicitação terapêutica sincera para a saúde é justa, mas, quanto a pedidos levianos de orientação comum feitos por quem já conhece o Evangelho e foge ao dever, os mentores recorrem muitas vezes ao silêncio para não tolher a liberdade nem estimular a ociosidade.',
  'Não, porque os médicos espirituais só atendem pedidos escritos em idioma clássico.',
  'Sim, inclusive fornecendo palpites de loteria e negócios para aumentar a fé dos frequentadores.',
  'Não, porque nenhum encarnado recebe jamais qualquer assistência médica do plano invisível.',
  'B',
  'Aniceto esclarece que as pessoas "recebem o que precisam" e que todo conhecimento do Cristo traduz responsabilidade; por isso, os mentores não fornecem palpites subalternos a mentes preguiçosas nem repetem conselhos óbvios a quem já conhece seus deveres evangélicos.',
  'Os Mensageiros — Cap. 46 ("Aprendendo sempre")',
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
  398,
  'os_mensageiros',
  'No Capítulo 47 ("No trabalho ativo"), ao final da preleção de Bentes, Isidoro precisa negar com bondade dois pedidos feitos por entidades desencarnadas amigas: o de uma mãe que queria comunicar-se diretamente pela médium com a filha presente, e o de um tio que pedia uma sexta receita mediúnica para o sobrinho encarnado Amaro. Por que ambos os pedidos foram recusados?',
  'Porque a médium Dona Isabel cobrava caro pelas comunicações e receitas particulares.',
  'Porque em reuniões espíritas é proibido qualquer tipo de receituário mediúnico ou consolação familiar.',
  'Porque a filha encarnada, por velho hábito, se agarraria excessivamente à mãe (devendo ser auxiliada indiretamente em sonho para aprender a testemunhar sozinha); e porque o sobrinho Amaro já recebera cinco receitas sem adquirir os remédios nem respeitar o método, "e não será caridade o ato de dar aos que não querem receber".',
  'Porque o mentor Anselmo estava irritado com o atraso dos frequentadores da reunião.',
  'Porque tanto a filha quanto o sobrinho Amaro já haviam desencarnado naquela mesma tarde.',
  'C',
  'O instrutor Anselmo e Isidoro mostram que a verdadeira caridade é sábia e educativa: a comunicação direta tiraria a autonomia de testemunho da filha (que poderia encontrar a mãe em sonho), e dar uma sexta receita ao rebelde e zombeteiro Amaro seria desperdiçar tempo sagrado com quem estima a brincadeira.',
  'Os Mensageiros — Cap. 47 ("No trabalho ativo")',
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
  399,
  'os_mensageiros',
  'No Capítulo 48 ("Pavor da morte"), após explicar que até os frequentadores encarnados preguiçosos ou sonolentos doam calor magnético e irradiações vitais úteis como numa "incubadora de energias psíquicas", Aniceto vai a um necrotério socorrer a jovem Cremilda, desencarnada havia seis horas, que continuava colada ao próprio cadáver em pavor, fugindo do noivo desencarnado que a chamava. Como Aniceto resolve a situação?',
  'Ordena que o noivo a arranque à força do necrotério, mesmo que ela grite de terror.',
  'Deixa Cremilda sozinha no necrotério até que o corpo seja sepultado no dia seguinte.',
  'Ressuscita o corpo físico de Cremilda para que ela viva mais vinte anos na Terra.',
  'Pede ao noivo que se afaste temporariamente para não intensificar o choque emocional da jovem (despreparada religiosamente), apresenta-se a ela paternalmente como ''o novo médico'', aplica-lhe um passe magnético que a faz adormecer em paz, desliga-a dos despojos e entrega-a suavemente ao noivo.',
  'Repreende severamente Cremilda pela falta de fé e encaminha-a para as zonas tenebrosas.',
  'D',
  'Com admirável tato psicológico, Aniceto compreende que Cremilda não dormira no desprendimento e assustara-se com a ideia da morte; falando-lhe como médico carinhoso, adormece-a magneticamente em prece e afasta-a sem trauma do cadáver, lembrando que ''Deus não é Deus de mortos, e, sim, o Pai das criaturas que vivem para sempre''.',
  'Os Mensageiros — Cap. 48 ("Pavor da morte")',
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
  400,
  'os_mensageiros',
  'Nos Capítulos 49 ("Máquina divina"), 50 ("A desencarnação de Fernando") e 51 ("Nas despedidas"), André Luiz observa sob o influxo magnético de Aniceto o corpo de Fernando (agonizante de leucemia) como uma "usina maravilhosa" governada pela mente (vendo no centro do crânio a luz mental como um candelabro), acompanha o corte do cordão fluídico e, ao final da semana de trabalho, despede-se da oficina de Dona Isabel. Que texto bíblico Aniceto lê na despedida antes de sua prece final de regresso a "Nosso Lar"?',
  'O Apocalipse de João, capítulo 20, anunciando o fim imediato do planeta Terra.',
  'O Livro do Êxodo, capítulo 14, narrando a travessia do Mar Vermelho por Moisés.',
  'O Salmo 109 de Davi, pedindo punição severa contra os adversários dos justos.',
  'O Cântico dos Cânticos, celebrando exclusivamente os casamentos realizados na Terra.',
  'O capítulo segundo dos Provérbios de Salomão (2:1-5 — sobre aceitar os mandamentos, inclinar o coração ao entendimento e buscar a Divina Sabedoria como a prata e os tesouros ocultos), seguido de uma emocionante prece a Jesus pelos labores de Isidoro e Isabel.',
  'E',
  'Após o estudo da ''máquina divina'' (onde cada célula é um minúsculo motor subordinado à mente) e a desencarnação de Fernando (amparado pela mãe desencarnada contra o assédio da ''nuvem de testemunhas'' inferiores), Aniceto encerra a semana na oficina de Isabel lendo Provérbios 2:1-5 e erguendo sublime oração ao Mestre antes da caravana regressar a ''Nosso Lar''.',
  'Os Mensageiros — Caps. 49 ("Máquina divina"), 50 ("A desencarnação de Fernando") e 51 ("Nas despedidas")',
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
