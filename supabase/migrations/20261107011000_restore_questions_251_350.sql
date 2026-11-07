INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  251,
  'obras_postumas',
  'Na biografia inicial de Allan Kardec em Obras Póstumas, qual lema fundamental o mestre inscreveu em sua bandeira para orientar o movimento espírita?',
  'Trabalho, solidariedade, tolerância.',
  'Fé cega, obediência monástica, penitência.',
  'Poder temporal, riqueza material, autoritarismo.',
  'Ciência pura sem moral, misticismo isolado, reclusão.',
  'Renúncia ao estudo, dogmatismo eclesiástico, ascetismo.',
  'A',
  'Na biografia do Codificador em Obras Póstumas destaca-se: ''O mestre inscreveu em sua bandeira estas palavras: Trabalho, solidariedade, tolerância. Sejamos, como ele, infatigáveis, tolerantes e solidários''.',
  'Biografia de Allan Kardec, p. 11',
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
  252,
  'obras_postumas',
  'Antes de adotar o pseudônimo Allan Kardec em 1855, qual foi a sólida trajetória educacional de Hippolyte-Léon Denizard Rivail registrada na biografia da obra?',
  'Comerciante naval e militar da marinha mercante de Marselha.',
  'Eminente pedagogo, discípulo de Pestalozzi em Yverdun e autor de obras clássicas de educação e gramática francesa.',
  'Magistrado de corte real dedicado exclusivamente ao direito penal em Lyon.',
  'Médico cirurgião e fundador de hospitais militares na Suíça.',
  'Sacerdote católico que renunciou aos votos eclesiásticos na velhice.',
  'B',
  'Educado no célebre Instituto de Pestalozzi em Yverdun, Rivail distinguiu-se como eminente educador, autor de planos pedagógicos e cursos práticos adotados na França e na Alemanha antes do Espiritismo.',
  'Biografia de Allan Kardec, p. 11-12',
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
  253,
  'obras_postumas',
  'No célebre discurso pronunciado junto ao túmulo de Allan Kardec em 1869, como o eminente astrônomo Camille Flammarion definiu a genialidade metodológica do Codificador?',
  'Como um líder místico arrebatado por transes sobrenaturais incontroláveis.',
  'Como um experimentador que subordinava a moral ao acaso dos fenômenos materiais de salão.',
  'Como ''o bom-senso encarnado'', aplicando sem cessar à sua vasta obra as indicações íntimas da razão e do método positivo.',
  'Como um orador político preocupado em fundar um império temporal na Europa.',
  'Como um teórico dogmático avesso ao exame livre e às descobertas das ciências astronômicas.',
  'C',
  'Flammarion declarou junto ao túmulo: ''Ele, porém, era o que eu denominarei simplesmente o bom-senso encarnado. Razão reta e judiciosa, aplicava sem cessar à sua obra permanente as indicações íntimas do senso comum''.',
  'Discurso de Camille Flammarion, p. 17',
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
  254,
  'obras_postumas',
  'Na ''Profissão de Fé Espírita Raciocinada'' (§ I — Deus), qual é o axioma fundamental que Kardec adota como prova incontestável da existência de Deus?',
  'A obediência aos decretos dos concílios clericais medievais.',
  'A autoridade absoluta dos textos litúrgicos hebraicos.',
  'A ocorrência de milagres excepcionais que anulam as leis físicas.',
  'O princípio lógico de que ''não há efeito sem causa'', provando que a harmonia universal decorre de uma causa soberanamente inteligente.',
  'A intuição dos sonhos místicos coletivos verificados na infância.',
  'D',
  'Kardec demonstra que, não havendo efeito sem causa, os grandiosos efeitos do Universo, cuja produção ultrapassa todo poder humano, atestam uma causa soberanamente inteligente acima da Humanidade: Deus.',
  '1ª Parte, Profissão de Fé, § I, item 1',
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
  255,
  'obras_postumas',
  'Por que Allan Kardec refuta categoricamente a doutrina materialista que pretende que ''o cérebro secreta o pensamento como o fígado secreta a bílis'' (§ II — A Alma)?',
  'Porque a Bíblia proíbe terminantemente qualquer pesquisa anatômica sobre o cérebro.',
  'Porque os animais demonstram mais capacidade poética e moral do que os seres humanos.',
  'Porque a ciência química desconhece a função orgânica de segregar bílis nos seres vertebrados.',
  'Porque o cérebro humano é composto exclusivamente de fluidos imponderáveis etéreos.',
  'Porque a matéria inerte não tem a faculdade de pensar, e os órgãos materiais são apenas instrumentos através dos quais a alma independente manifesta seu pensamento.',
  'E',
  'Se o pensamento fosse propriedade da matéria, veríamos a matéria bruta pensar; como o corpo morto cessa de pensar embora os órgãos ainda estejam ali, é evidente que a alma inteligente independe do corpo físico.',
  '1ª Parte, Profissão de Fé, § II, item 4',
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
  256,
  'obras_postumas',
  'Na seção sobre a Criação (§ III), como a Doutrina Espírita define a origem e a condição primitiva de todos os Espíritos criados por Deus?',
  'Todos são criados simples e ignorantes, desprovidos de ciência e do conhecimento do bem e do mal, porém perfectíveis e com igual aptidão para evoluir.',
  'Uns são criados santos e puros para o céu e outros condenados eternamente ao abismo do mal.',
  'São gerados prontos e perfeitos, sem necessidade de trabalhar ou progredir.',
  'Nascem como semideuses privilegiados dotados de conhecimento enciclopédico inato.',
  'Surgem como frações materiais temporárias que se extinguem para sempre após a primeira encarnação.',
  'A',
  'O Espiritismo ensina que Deus não cria seres privilegiados: todos os Espíritos partem do mesmo estado de infância moral (simples e ignorantes), cabendo-lhes conquistar a perfeição pelo mérito do seu próprio esforço.',
  '1ª Parte, Profissão de Fé, § III, itens 14-15',
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
  257,
  'obras_postumas',
  'Qual a função fundamental atribuída à encarnação corpórea na jornada de aperfeiçoamento dos Espíritos (§ III, item 21)?',
  'Servir como castigo perpétuo e irremediável contra rebeldes incorrigíveis do plano invisível.',
  'Permitir que, pelo trabalho imposto na matéria, eles desenvolvam a inteligência, cumpram as leis divinas e adquiram os méritos para a felicidade eterna.',
  'Reduzir o poder da alma até que ela se esqueça definitivamente de sua origem celeste.',
  'Proporcionar o acúmulo de bens e títulos materiais passageiros aos favoritos do destino.',
  'Impedir que a alma adquira novos conhecimentos nas diferentes ciências terrenas.',
  'B',
  'A encarnação faz parte das leis da Natureza: através das dificuldades e do trabalho da existência corpórea, o Espírito exercita suas faculdades, adquire conhecimentos e depura suas imperfeições.',
  '1ª Parte, Profissão de Fé, § III, item 21',
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
  258,
  'obras_postumas',
  'No capítulo sobre as Manifestações dos Espíritos (item 2), por que a ação recíproca entre o mundo visível e o mundo invisível não pode ser classificada como sobrenatural?',
  'Porque só ocorre sob a invocação solene de fórmulas mágicas dos sacerdotes antigos.',
  'Porque se limita estritamente ao momento do transe hipnótico induzido por magnetizadores.',
  'Porque é uma das leis e forças naturais da Criação, tão indispensável à harmonia universal quanto a gravidade e as forças físicas.',
  'Porque os Espíritos perderam a capacidade de atuar sobre a matéria após o século I.',
  'Porque é produzida unicamente pela imaginação delirante de assistentes crédulos.',
  'C',
  'A ação dos Espíritos sobre o mundo corporal não constitui revogação das leis divinas, mas sim a manifestação de uma força natural até então desconhecida pela ciência materialista, afastando todo caráter miraculoso.',
  '1ª Parte, Manifestações dos Espíritos, item 2',
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
  259,
  'obras_postumas',
  'Como Allan Kardec define o papel do perispírito nas relações entre o Espírito e o corpo material (item 10)?',
  'Uma ilusão ótica que desaparece assim que o corpo adormece.',
  'Uma couraça densa e impenetrável que isola a alma de qualquer influência exterior.',
  'Um órgão ósseo fossilizável que se desagrega juntamente com o esqueleto físico.',
  'O intermediário e órgão de transmissão: o corpo recebe a impressão, o perispírito a transmite e o Espírito a recebe; o que o Espírito quer, o perispírito transmite e o corpo executa.',
  'A própria mente consciente do ser humano, desprovida de qualquer substância fluídica.',
  'D',
  'O perispírito é o envoltório semimaterial da alma e serve de elo entre a matéria densa e o princípio espiritual; atua como condutor de todas as sensações e da vontade do Espírito para os órgãos corporais.',
  '1ª Parte, Manifestações dos Espíritos, item 10',
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
  260,
  'obras_postumas',
  'Nas ''Manifestações Visuais'' (§ II, item 16), a que processo físico Kardec compara a condensação e invisibilidade do perispírito nas aparições?',
  'À queima espontânea do magnésio em combustão química rápida.',
  'À reflexão do arco-íris sobre prismas triangulares de cristal lapidado.',
  'Ao congelamento abrupto das massas minerais na crosta terrestre.',
  'À propagação das ondas sonoras no vácuo de laboratório.',
  'Às transformações da água, que passa do vapor invisível ao estado brumoso, ao líquido e em seguida ao sólido e tangível.',
  'E',
  'Kardec compara as variações do perispírito ao vapor d''água: assim como a água passa da invisibilidade à névoa, ao líquido e ao gelo sólido e resistente, o perispírito pode condensar-se e tornar-se palpável ou sutilizar-se instantaneamente.',
  '1ª Parte, Manifestações Visuais, item 16',
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
  261,
  'obras_postumas',
  'Em que consiste o fenômeno da ''transfiguração'' analisado no § III de Obras Póstumas?',
  'Uma alteração fluídica no perispírito da pessoa viva em que seu corpo material parece desvanecer-se sob uma camada fluídica, tomando temporariamente outra aparência facial e luminosa.',
  'A substituição definitiva da alma de um encarnado pela alma de um animal doméstico.',
  'A morte física aparente de um indivíduo que revive após quarenta dias de sepultamento.',
  'A perda total da memória biográfica provocada pelo magnetismo animal.',
  'A levitação de objetos pesados sem a presença de nenhum ser vivo no aposento.',
  'A',
  'Na transfiguração, o perispírito da pessoa viva irradia fluidos com abundância, modificando a irradiação externa do rosto a ponto de lhe dar outro semblante, expressar grande beleza ou refletir a fisionomia de outro Espírito.',
  '1ª Parte, Transfiguração e Invisibilidade, item 22',
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
  262,
  'obras_postumas',
  'O que acontece com a alma durante o sono físico natural do corpo humano (§ IV — Emancipação da Alma)?',
  'A alma se extingue temporariamente no nada até que o cérebro acorde.',
  'Apenas o corpo repousa, mas a alma nunca dorme: aproveita o repouso para emancipar-se parcialmente pelo laço fluídico e reencontrar outros seres no mundo espiritual.',
  'A alma fica aprisionada e adormecida dentro dos ventrículos cerebrais.',
  'O laço periespiritual se rompe e um Espírito estranho assume permanentemente o corpo.',
  'A alma perde sua consciência moral e regride aos instintos primitivos dos animais selvagens.',
  'B',
  'O sono é a porta aberta por Deus: enquanto o corpo se refaz das fadigas materiais, o Espírito se desprende parcialmente, viaja, instrui-se e conversa com amigos espirituais, conservando-se preso ao corpo pelo laço fluídico.',
  '1ª Parte, Emancipação da Alma, itens 24-25',
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
  263,
  'obras_postumas',
  'Como Kardec define o ''êxtase'' em relação aos outros graus de emancipação da alma (item 29)?',
  'Um estado doentio de histeria contagiosa que afeta apenas cérebros ignorantes.',
  'Um transe passageiro induzido exclusivamente por substâncias narcóticas fortes.',
  'A emancipação da alma no seu grau máximo, onde o desprendimento corporal é quase completo e o Espírito penetra em esferas mais elevadas.',
  'O sono letárgico em que a alma perde para sempre a capacidade de retornar ao organismo físico.',
  'Uma alucinação sensorial que impede o Espírito de perceber qualquer verdade espiritual.',
  'C',
  'No êxtase, o aniquilamento do corpo físico é quase completo; a alma, liberta dos laços mais grosseiros, antecipa a felicidade celeste e penetra no mundo dos Espíritos etéreos com sublime lucidez.',
  '1ª Parte, Emancipação da Alma, item 29',
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
  264,
  'obras_postumas',
  'No § VI (Dos Médiuns), qual é o conceito geral enunciado a respeito da faculdade mediúnica (item 33)?',
  'Um privilégio milagroso concedido apenas aos santos e sacerdotes consagrados.',
  'Uma enfermidade do sistema nervoso que desaparece com a evolução da medicina.',
  'Um dom exclusivo dos povos antigos que se perdeu na era moderna.',
  'Uma aptidão natural inerente ao homem em diferentes graus, sendo médium toda pessoa que sente a influência dos Espíritos e transmite seus pensamentos.',
  'Uma habilidade puramente mecânica aprendida por meio de cursos teóricos de filosofia.',
  'D',
  'A mediunidade é uma faculdade natural inerente à espécie humana; todo mundo é mais ou menos médium, reservando-se a denominação especial àqueles em quem a faculdade produz efeitos ostensivos e caracterizados.',
  '1ª Parte, Dos Médiuns, item 33',
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
  265,
  'obras_postumas',
  'Por que Allan Kardec atesta que o exorcismo tradicional com fórmulas e ritos é ineficaz nos casos de obsessão e possessão (§ VII, item 59)?',
  'Porque os demônios não entendem as línguas modernas ocidentais.',
  'Porque a Igreja Romana proibiu os padres de realizarem preces e bênçãos a doentes.',
  'Porque a água benta perde suas propriedades químicas após o toque do sacerdote.',
  'Porque os Espíritos obsessores são criaturas imortais incapazes de sentir qualquer dor moral.',
  'Porque a autoridade sobre os maus Espíritos repousa na superioridade moral e na pureza de sentimentos do homem, e não em cerimônias exteriores e fórmulas de que eles zombam.',
  'E',
  'Os maus Espíritos não se curvam a palavras sacramentais ou talismãs; eles cedem apenas à autoridade moral real daquele que pratica o bem e se depura de suas próprias imperfeições.',
  '1ª Parte, Da Obsessão e da Possessão, item 59',
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
  266,
  'obras_postumas',
  'No estudo ''Dos homens duplos e das aparições de pessoas vivas'', como Kardec refuta a ideia de que um mesmo indivíduo possa ter vontades e atitudes morais opostas simultâneas nos dois corpos?',
  'O princípio inteligente da alma é uno e indivisível; não pode haver antagonismo de vontades em um mesmo ser, tratando-se, em tais casos alegados, de mistificações ou lendas fantásticas.',
  'Cada ser humano possui duas almas congênitas que brigam perpetuamente entre si.',
  'O perispírito humano divide-se facilmente em dez entidades autônomas dotadas de cérebros próprios.',
  'Os órgãos materiais têm o poder de gerar pensamentos independentes da vontade da alma.',
  'As leis da gravidade impedem que o perispírito viaje para fora da cidade natal do indivíduo.',
  'A',
  'Kardec demonstra a impossibilidade de o mesmo Espírito ser ao mesmo tempo homem honesto num lugar e bandido noutro: o ser espiritual é uno; qualquer divergência moral prova a atuação de um segundo Espírito ou ilusão das testemunhas.',
  '1ª Parte, Dos homens duplos, p. 51-52',
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
  267,
  'obras_postumas',
  'Como Allan Kardec explica o fenômeno da visão à distância na clarividência sonambúlica (''Causa e natureza da clarividência sonambúlica'')?',
  'O objeto distante aproxima-se materialmente do sonâmbulo através de uma lente magnética invisível.',
  'Não é o objeto que se aproxima por miragem ótica, mas a própria alma do sonâmbulo que se transporta em Espírito até o local observado.',
  'Os raios solares refletem a imagem nas paredes da sala onde o corpo repousa.',
  'O sonâmbulo adivinha as coisas por deduções puramente matemáticas e estatísticas.',
  'O nervo ótico físico estica-se através da atmosfera até tocar o ponto contemplado.',
  'B',
  'Na clarividência à distância, a alma emancipada transporta-se instantaneamente pelo pensamento para onde quer que dirija sua atenção, enxergando os acontecimentos como se estivesse fisicamente presente no local.',
  '1ª Parte, Causa e natureza da clarividência sonambúlica, p. 60',
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
  268,
  'obras_postumas',
  'Qual é a distinção primordial estabelecida por Kardec entre a clarividência do sonâmbulo e o fenômeno da ''segunda vista''?',
  'A segunda vista é uma enfermidade ocular contagiosa, enquanto o sonambulismo é um dom espiritual.',
  'A segunda vista só ocorre à noite na escuridão completa, enquanto o sonambulismo ocorre ao meio-dia.',
  'No sonambulismo a lucidez atua com os sentidos físicos adormecidos; na segunda vista o indivíduo está perfeitamente desperto e a visão espiritual se opera simultaneamente com a vista dos olhos materiais.',
  'A segunda vista exige a utilização de pranchetas e lápis, enquanto o sonambulismo exige mesas girantes.',
  'O sonâmbulo conversa apenas com anjos, enquanto o portador de segunda vista só enxerga animais.',
  'C',
  'Na segunda vista ou vista dupla, o fenômeno ocorre em estado de vigília: a pessoa conversa normalmente, com os olhos abertos, mas sua alma percebe os quadros e acontecimentos além do alcance da visão comum.',
  '1ª Parte, A segunda vista, p. 62-63',
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
  269,
  'obras_postumas',
  'Por que motivo, segundo Kardec no ensaio ''A segunda vista — Conhecimento do futuro'', a Providência Divina cobriu com um véu o conhecimento absoluto do futuro?',
  'Porque os anjos guardiães ignoram completamente todas as leis do Universo.',
  'Para permitir que os adivinhos e cartomantes cobrassem consultas e fizessem comércio da fé.',
  'Para punir os seres humanos com a incerteza perpétua da morte biológica.',
  'Porque a certeza do futuro tiraria ao homem todo o estímulo ao trabalho e esforço, paralisando suas forças e arrastando-o ao perigoso dogma da fatalidade.',
  'Porque o futuro do planeta depende unicamente de cataclismos aleatórios sem planejamento espiritual.',
  'D',
  'Se o homem soubesse de antemão seu destino irrevogável, não lutaria para progredir: a certeza da felicidade geraria inércia e a certeza da desgraça causaria desespero e paralisia das forças morais e ativas.',
  '1ª Parte, A segunda vista, p. 64-65',
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
  270,
  'obras_postumas',
  'Em que consiste o mecanismo da ''fotografia do pensamento'' detalhado por Allan Kardec em Obras Póstumas?',
  'A gravação mecânica de sinapses nervosas através de placas químicas fotográficas em estúdios.',
  'A pintura manual de retratos mediúnicos feita com tintas a óleo em transe hipnótico.',
  'A captura das sombras corporais projetadas pela luz da lua em noites de verão.',
  'A transmissão de imagens cerebrais por meio de cabos metálicos submarinos telegráficos.',
  'O pensamento atua sobre os fluidos perispiríticos como num espelho, desenhando cenas e imagens fluídicas que retratam com precisão as intenções e ideias íntimas da alma.',
  'E',
  'O pensamento se reflete no envoltório fluídico da alma: ao conceber uma ideia ou intenção, o ser executa fluidicamente a cena correspondente, permitindo que outros Espíritos leiam na sua aura como num livro aberto.',
  '1ª Parte, Fotografia e telegrafia do pensamento, p. 70-71',
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
  271,
  'obras_postumas',
  'O que Allan Kardec define como ''telegrafia do pensamento'' ou telegrafia humana?',
  'A propagação instantânea de pensamentos e sentimentos através das ondas fluídicas que ligam as mentes de encarnados e desencarnados no Universo.',
  'A invenção de telégrafos elétricos movidos a pilhas químicas para fins militares.',
  'O código secreto de sinais manuais utilizado por sociedades secretas iniciáticas.',
  'O uso de pombos-correio treinados para transportar mensagens entre médiuns de cidades distantes.',
  'A emissão de sons guturais ritmados em cerimônias fúnebres de evocação.',
  'A',
  'Assim como a telegrafia elétrica conecta continentes pelo mundo material, as ondas de pensamento propagam-se pelo fluido cósmico, ligando os espíritos por afinidade simpática e ação recíproca.',
  '1ª Parte, Fotografia e telegrafia do pensamento, p. 71-72',
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
  272,
  'obras_postumas',
  'No ''Estudo sobre a natureza do Cristo'' (§ I), onde Kardec afirma que se deve buscar com exclusividade as provas legítimas sobre a natureza de Jesus?',
  'Nos decretos imperiais do Império Bizantino e nas bulas medievais.',
  'Nos atos e nas próprias palavras textuais de Jesus preservadas nos Evangelhos, e não em especulações teológicas posteriores.',
  'Nas lendas populares folclóricas transmitidas oralmente na Idade Média.',
  'Nas opiniões pessoais dos filósofos materialistas do século XVIII.',
  'Exclusivamente nas cartas atribuídas aos imperadores romanos da dinastia júlio-claudiana.',
  'B',
  'Kardec demonstra que, para saber se Jesus era Deus ou seu enviado, a única autoridade irrefutável são as suas próprias palavras nos Evangelhos, pois ninguém conhecia melhor a sua própria natureza do que ele mesmo.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § I, p. 73-74',
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
  273,
  'obras_postumas',
  'No § II do Estudo sobre o Cristo, por que os milagres evangélicos não constituem prova da divindade de Jesus?',
  'Porque Jesus nunca realizou nenhuma cura ou fenômeno de alívio na Judeia.',
  'Porque todos os relatos de curas nos Evangelhos foram comprovadamente inventados por historiadores pagãos.',
  'Porque prodígios e curas decorrem de leis naturais psíquicas e magnéticas inerentes ao Espírito, tendo sido operados por profetas, apóstolos e até homens comuns.',
  'Porque a Igreja proíbe os cristãos de acreditarem na ressurreição da filha de Jairo.',
  'Porque Jesus exigia dinheiro para operar manifestações perante os fariseus.',
  'C',
  'Os fenômenos operados por Jesus encontram explicação nas leis do magnetismo e da mediunidade; não sendo derrogações das leis naturais e tendo sido praticados também por discípulos e profetas, não implicam divindade ontológica.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § II, p. 74-75',
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
  274,
  'obras_postumas',
  'Qual expressão repetida dezenas de vezes por Jesus nos Evangelhos demonstra de forma incontestável a sua subordinação ao Criador (§ III)?',
  '''Eu sou o próprio Deus Criador''.',
  '''A minha força criou todas as galáxias''.',
  '''Não devereis prestar contas ao Pai Celestial''.',
  '''Aquele que me enviou'' e ''Não vim de mim mesmo; foi Ele quem me enviou''.',
  '''Não preciso orar porque tenho o mesmo poder do Altíssimo''.',
  'D',
  'Aquele que é enviado é necessariamente subordinado e distinto daquele que envia. Jesus nunca se colocou como soberano originário, mas sim como submisso embaixador da vontade de Seu Pai.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § III, p. 76-78',
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
  275,
  'obras_postumas',
  'Quando o jovem rico aproximou-se de Jesus chamando-o de ''Bom Mestre'', qual foi a resposta imediata de Jesus que desmente sua igualdade moral com Deus (p. 78)?',
  '''Exijo que te prostres e me adores como único Criador do Universo''.',
  '''Sim, sou a perfeição suprema de todos os seres celestes''.',
  '''Minha bondade ultrapassa a sabedoria do Pai Celestial''.',
  '''Todos os profetas anteriores a mim foram mentirosos''.',
  '''Por que me chamas bom? Somente há Deus de bom. Se queres entrar na vida, guarda os mandamentos''.',
  'E',
  'Jesus rejeita categoricamente o atributo de bondade absoluta para si, afirmando que somente Deus é bom por excelência, confessando assim sua inferioridade em face do Criador Supremo.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § III, p. 78',
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
  276,
  'obras_postumas',
  'No horto do Getsêmani, qual prece dolorosa de Jesus confirma de forma sublime a distinção entre a sua alma humana e a soberana vontade divina (p. 80-81)?',
  '''Meu Pai, se for possível, afasta de mim este cálice; contudo, não seja como eu quero, mas como tu queiras''.',
  '''Anunciarei aos anjos que revogarei a crucificação pelo meu próprio poder''.',
  '''Minha alma é imune a dores físicas porque meu corpo é puramente ilusório''.',
  '''Malditos sejam aqueles que conspiram contra o meu trono terreno em Jerusalém''.',
  '''Que as legiões romanas sejam aniquiladas por relâmpagos vindos dos céus''.',
  'A',
  'A oração na agonia do Getsêmani revela a submissão filial e o livre-arbítrio submetido à vontade superior do Pai: se Jesus fosse o próprio Deus, não teria a quem orar nem subordinar sua vontade pessoal.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § III, p. 80-81',
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
  277,
  'obras_postumas',
  'Como Allan Kardec interpreta a célebre passagem do Evangelho de João ''O Verbo se fez carne e habitou entre nós'' (§ VIII)?',
  'Significa que Deus abandonou o trono do Universo e se transformou biologicamente num feto mortal.',
  'O Verbo é a palavra divina e a verdade de Deus, que encarnou na Terra através de Jesus, seu mensageiro perfeitamente identificado com a vontade do Pai.',
  'Representa uma fábula pagã importada da mitologia grega sem nenhum valor filosófico.',
  'Indica que o Verbo é uma divindade rival que destronou o Deus do Antigo Testamento.',
  'Declara que a carne humana é eterna e nunca sofrerá decomposição no túmulo.',
  'B',
  'O Verbo é o pensamento e a mensagem divina comunicada à Humanidade; encarnando essa revelação em sua plenitude moral e testemunho, Jesus foi o verbo feito carne, transmitindo a palavra do Pai aos homens.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § VIII, p. 87-88',
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
  278,
  'obras_postumas',
  'No § IX, por que Jesus insistia reiteradamente em autodenominar-se ''Filho do homem'' em suas pregações públicas?',
  'Para demonstrar que não possuía sentimentos de amor filial por seus genitores terrenos.',
  'Para esconder sua ignorância acerca das profecias das escrituras judaicas.',
  'Para lembrar categoricamente que pertencia à família humana terrena, protestando de antemão contra qualquer pretensão idolátrica de considerá-lo Deus.',
  'Para indicar que descendia diretamente dos reis faraônicos do Egito antigo.',
  'Para repudiar a existência da vida espiritual e dos mundos invisíveis.',
  'C',
  'À semelhança da expressão bíblica usada pelo profeta Ezequiel, ''Filho do homem'' ressalta a natureza humana de Jesus, servindo de barreira inequívoca contra a teologia que tentou equipará-lo ao Criador Supremo.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § IX, p. 89-90',
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
  279,
  'obras_postumas',
  'Qual fato histórico político decisivo Allan Kardec destaca a respeito da proclamação do Credo de Niceia no ano de 325 (p. 90)?',
  'Foi uma decisão ditada espontaneamente por todos os apóstolos reunidos em Jerusalém.',
  'O concílio foi convocado e presidido por apóstolos espíritas sonâmbulos.',
  'Todos os bispos aprovaram a reencarnação e aboliram o inferno perpétuo.',
  'Foi imposto pela pressão política e intimidatória do imperador romano Constantino, que necessitava de uma fórmula unificada por razões de Estado.',
  'O dogma da Trindade foi revelado por escrita direta pneumatográfica no altar papal.',
  'D',
  'Kardec demonstra que o Concílio de Niceia deveu-se à intervenção do imperador romano Constantino, visando a interesses políticos do Império Romano, impondo a derrota dos arianos sob ameaça de exílio e anátemas.',
  '1ª Parte, Estudo sobre a natureza do Cristo, § IX, p. 90',
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
  280,
  'obras_postumas',
  'No estudo ''Influência perniciosa das ideias materialistas sobre as artes'' (p. 92-94), qual o impacto funesto que o materialismo causa sobre os artistas e escritores?',
  'Obriga os artistas a pintarem exclusivamente telas astronômicas em preto e branco.',
  'Aumenta extraordinariamente a produção de tragédias poéticas de alta elevação moral.',
  'Favorece a criação de orquestras dedicadas à caridade evangélica nos campos de batalha.',
  'Faz com que todos os museus da Europa fechem as portas por falta de público.',
  'Concentra o pensamento no círculo acanhado da vida carnal efêmera e no nada, esterilizando a inspiração nobre do ideal e conduzindo a arte ao mercantilismo e à decadência.',
  'E',
  'Quem semeia pedras não colhe frutos: ao negar a imortalidade da alma e a vida futura, o materialismo retira da arte o horizonte do infinito, rebaixando a inspiração criadora às conveniências passageiras da matéria.',
  '1ª Parte, Influência perniciosa das ideias materialistas, p. 92-94',
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
  281,
  'obras_postumas',
  'No ensaio ''Teoria da beleza'' (p. 95-98), qual lei bioespiritual Kardec formula sobre a evolução da fisionomia e da estética dos corpos humanos ao longo dos milênios?',
  'A beleza real da forma é consequência da depuração moral e espiritual: quanto mais o ser se afasta da animalidade bruta, mais seus traços físicos se tornam delicados, nobres e harmônicos.',
  'A beleza humana era perfeita na época dos homens das cavernas e degenerou com a civilização moderna.',
  'A forma exterior independe das qualidades morais do ser espiritual encarnado.',
  'Os animais carnívoros selvagens possuem traços fisionômicos mais nobres que os anjos.',
  'A riqueza financeira é a causa exclusiva que molda os contornos ósseos das futuras gerações.',
  'A',
  'O semblante é o espelho da alma: a matéria molda-se às necessidades do Espírito. Ao depurar seus instintos grosseiros, a Humanidade avança para formas físicas cada vez mais afastadas da fealdade primitiva dos fósseis.',
  '1ª Parte, Teoria da beleza, p. 98',
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
  282,
  'obras_postumas',
  'No capítulo ''A música celeste'' (p. 101-102), que explicação o Espírito São Luís oferece ao pai da jovem que duvidava da existência de música no mundo espiritual?',
  'Que os Espíritos não possuem audição e comunicam-se apenas por choque elétrico.',
  'Que as harmonias do Espaço são de essência divina incomparavelmente superior à música terrena, sendo percebidas pela alma desprendida em êxtase sem necessidade de instrumentos materiais.',
  'Que a música dos céus utiliza órgãos de tubos de chumbo instalados nas nuvens.',
  'Que apenas compositores eruditos encarnados têm o privilégio de inventar melodias.',
  'Que no plano espiritual reina um silêncio absoluto e eterno onde nenhum som ressoa.',
  'B',
  'São Luís esclarece que os sons materiais e os instrumentos da Terra são pálidos reflexos grosseiros da harmonia do mundo espiritual, que arrebata a alma e a coloca em comunhão extática com Deus.',
  '1ª Parte, A música celeste, p. 101-102',
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
  283,
  'obras_postumas',
  'Na dissertação mediúnica de Gioachino Rossini sobre a ''Música espírita'' (p. 104-107), qual metáfora o célebre compositor utiliza para definir o papel da música terrena?',
  'A música é o motor a vapor que acelera as fábricas de tecidos mecânicos.',
  'A música é um brinquedo infantil destinado a distrair crianças na corte dos reis.',
  'A música é o médium da harmonia; ela a recebe da alma e a transmite ao ouvinte, assim como o refletor é o médium da luz.',
  'A música é um veneno auditivo que corrompe as almas bem-aventuradas.',
  'A música terrena é uma invenção exclusivamente comercial criada para enriquecer maestros.',
  'C',
  'Rossini compara a música a um instrumento mediúnico: ''A música é o médium da harmonia; ela a recebe e a dá, como o refletor é o médium da luz e o médium é o intermediário dos pensamentos dos Espíritos''.',
  '1ª Parte, Música espírita, p. 106',
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
  284,
  'obras_postumas',
  'Em ''O caminho da vida'' (p. 108-109), como Kardec responde à clássica objeção sobre o esquecimento das existências anteriores na reencarnação?',
  'O esquecimento prova que a reencarnação é uma ilusão e que a alma vive apenas uma vez.',
  'O Espírito esquece o passado porque o cérebro humano é criado do nada por acaso.',
  'Deus apaga a memória das almas para que elas cometam os mesmos crimes perpetuamente.',
  'O esquecimento é uma bênção providencial que poupa o homem da humilhação, da dor e dos remorsos das faltas pretéritas, oferecendo um novo recomeço na senda do progresso.',
  'A memória é destruída pela ação química do oxigênio atmosférico durante o parto.',
  'D',
  'A ausência de lembrança das vidas passadas preserva o homem do sofrimento constante de suas antigas misérias e dos ódios recíprocos; cada nova existência é um ponto de partida limpo para novas conquistas morais.',
  '1ª Parte, O caminho da vida, p. 108-109',
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
  285,
  'obras_postumas',
  'Na célebre alegoria de ''O caminho da vida'' (p. 109-111), o que representam a longa estrada, as florestas espessas e a montanha culminante?',
  'A estrada é a política partidária, as florestas são as eleições e a montanha é o parlamento.',
  'A estrada é o comércio material, as florestas são os bancos e a montanha é o tesouro público.',
  'A estrada é o tempo geológico, as florestas são os dinossauros e a montanha é a lua.',
  'A estrada é a literatura poética, as florestas são os teatros e a montanha é a glória acadêmica.',
  'A estrada representa a vida espiritual contínua da alma, as florestas são as existências corporais de provas e aprendizado, e a montanha é a meta da perfeição conquistada.',
  'E',
  'A alegoria retrata o homem atravessando florestas sucessivas (vidas corpóreas) onde adquire experiência e cura suas feridas, até contemplar do alto da montanha (perfeição espiritual) o caminho percorrido com gratidão.',
  '1ª Parte, O caminho da vida, p. 109-111',
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
  286,
  'obras_postumas',
  'No estudo ''As cinco alternativas da Humanidade'' (p. 112-116), quais são as cinco doutrinas essenciais comparadas por Allan Kardec?',
  'Materialismo, Panteísmo, Deísmo, Dogmatismo e Espiritismo.',
  'Monoteísmo, Politeísmo, Animismo, Xamanismo e Ocultismo.',
  'Platonismo, Aristotelismo, Estoicismo, Epicurismo e Cinismo.',
  'Catolicismo, Protestantismo, Judaísmo, Islamismo e Budismo.',
  'Idealismo, Realismo, Positivismo, Ceticismo e Niilismo.',
  'A',
  'Kardec resume o destino da alma após a morte às cinco grandes concepções filosófico-religiosas: o materialismo (nada), o panteísmo (fusão no todo), o deísmo, o dogmatismo clerical e o Espiritismo.',
  '1ª Parte, As cinco alternativas da Humanidade, p. 112',
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
  287,
  'obras_postumas',
  'Em ''As cinco alternativas da Humanidade'' (§ III), qual a distinção apresentada por Kardec entre o ''deísta independente'' e o ''deísta providencialista''?',
  'O deísta independente é ateu militante; o providencialista frequenta a missa dominical.',
  'O deísta independente crê num Deus criador que não mais se ocupa do mundo; o providencialista crê na intervenção incessante da Providência divina na criação e a Ele ora.',
  'O deísta independente defende a ressurreição da carne; o providencialista rejeita a alma imortal.',
  'O deísta independente aceita os dogmas católicos; o providencialista admite os sacrifícios de animais.',
  'Ambos são sinônimos perfeitos que negam categoricamente a existência de Deus.',
  'B',
  'Os deístas independentes veem Deus como um relojoeiro que deu corda ao mundo e o abandonou; os providencialistas creem na solicitude paternal e contínua de Deus sobre todas as criaturas, orando a Ele sem dogmas exteriores.',
  '1ª Parte, As cinco alternativas da Humanidade, § III, p. 114',
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
  288,
  'obras_postumas',
  'No exame da Doutrina Dogmática (§ IV, p. 114-115), qual problema fundamental fica inteiramente sem resposta racional na teologia das penas eternas?',
  'A velocidade da luz no vácuo estelar.',
  'A composição mineral do solo lunar e marciano.',
  'A sorte das crianças mortas em tenra idade, dos deficientes mentais e a justiça das misérias de nascença sem vidas anteriores.',
  'A navegação a vapor nos rios europeus da Idade Média.',
  'A tradução das obras gregas antigas para a língua latina.',
  'C',
  'Sem a preexistência da alma e a pluralidade das existências, o dogma das penas eternas não consegue explicar a sorte dos que morrem na infância, dos incapazes nem as desigualdades de nascimento perante a justiça divina.',
  '1ª Parte, As cinco alternativas da Humanidade, § IV, p. 115',
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
  289,
  'obras_postumas',
  'No capítulo ''A morte espiritual'' (p. 117-119), qual é o significado filosófico atribuído à expressão ''morte espiritual'' segundo Allan Kardec?',
  'O aniquilamento total e definitivo do princípio pensante da alma nas trevas do nada.',
  'A decomposição atômica do perispírito que transforma o Espírito em substância fóssil.',
  'A condenação irrevogável de uma alma culpada ao sono letárgico eterno.',
  'A regeneração moral contínua: o Espírito ''morre'' para os seus hábitos inferiores a cada encarnação, renascendo com novos atributos depurados sem perder sua identidade pessoal.',
  'A perda da consciência que ocorre exclusivamente nos anjos quando visitam mundos inferiores.',
  'D',
  'O Espírito não morre no sentido de aniquilamento de sua individualidade (o eu permanece o mesmo); a morte espiritual representa a transformação da alma, que desbasta o homem velho para renascer iluminada de virtudes.',
  '1ª Parte, A morte espiritual, p. 119',
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
  290,
  'obras_postumas',
  'Na dissertação sobre as ''Expiações coletivas'' dada pelo Espírito Clélia Duplantier (p. 124-125), como o Espiritismo elucida as catástrofes que atingem famílias, cidades e nações inteiras?',
  'São acidentes geológicos e meteorológicos arbitrários desprovidos de qualquer plano inteligente da Providência.',
  'Representam castigos divinos vindos da cólera de Deus contra os descendentes de Adão.',
  'São produzidas exclusivamente por demônios que derrotam temporariamente as falanges dos anjos de Deus.',
  'Constituem punições cegas onde os inocentes pagam culpas das quais nunca participaram.',
  'Faltas coletivas cometidas por cidadãos reunidos num crime comum no passado são resgatadas em conjunto no presente sob a lei de solidariedade e responsabilidade coletiva.',
  'E',
  'Assim como há faltas individuais, há crimes coletivos cometidos em comum por famílias ou povos (como guerras, opressões e massacres); pela reencarnação, esses Espíritos reúnem-se para resgatarem solidariamente suas dívidas históricas.',
  '1ª Parte, Questões e problemas — As expiações coletivas, p. 124-125',
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
  291,
  'obras_postumas',
  'No capítulo ''O egoísmo e o orgulho'' (p. 127-130), em qual sentimento natural e providencial Kardec situa a origem primária dessas duas chagas da Humanidade?',
  'No instinto de conservação, que é legítimo e útil em si mesmo, mas que se torna pernicioso pelo excesso e abuso do livre-arbítrio humano.',
  'Na tentação física de um demônio exterior com chifres e tridentes corporais.',
  'Na herança biológica do cérebro transmitida pelas leis de genética animal.',
  'Na ingestão de alimentos cozidos em vez de frutos crus da natureza primitiva.',
  'Na prática do comércio e na fundação das primeiras cidades marítimas.',
  'A',
  'Deus não criou nada inútil ou mau: o instinto de conservação é necessário à vida; quando o homem o exagera e o desvia para o culto exclusivista de si mesmo em detrimento do próximo, faz nascer o egoísmo e o orgulho.',
  '1ª Parte, O egoísmo e o orgulho, p. 127',
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
  292,
  'obras_postumas',
  'No ensaio ''Liberdade, igualdade, fraternidade'' (p. 131-133), qual dos três termos Kardec define como a base indispensável sobre a qual se apoiam os outros dois?',
  'A liberdade, porque um homem livre dispensa a caridade e a solidariedade de seus concidadãos.',
  'A fraternidade, pois sem ela a igualdade degenera em inveja e tirania do pequeno contra o grande, e a liberdade vira rédea solta ao egoísmo e à anarquia.',
  'A igualdade material de salários, imposta por decretos severos da polícia civil.',
  'O absolutismo monárquico herdado da nobreza feudal da Idade Média.',
  'A abolição de todas as leis escritas e tribunais judiciários da sociedade civil.',
  'B',
  'A fraternidade está na primeira linha: é a caridade evangélica em ação. Sem fraternidade no coração, o egoísmo e o orgulho destruirão qualquer ensaio de igualdade e farão da liberdade um instrumento de opressão.',
  '1ª Parte, Liberdade, igualdade, fraternidade, p. 131-132',
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
  293,
  'obras_postumas',
  'No estudo ''As aristocracias'' (p. 134-137), após analisar a autoridade da força bruta, do nascimento e do dinheiro, qual aristocracia definitiva Kardec prevê para o futuro regenerado da Terra?',
  'A aristocracia militar baseada na posse de armamentos bélicos pesados.',
  'A aristocracia teocrática comandada por ordens monásticas de clausura.',
  'A aristocracia intelecto-moral, onde a união da inteligência esclarecida com a moralidade e a caridade inspirará a confiança e o respeito legítimo das massas.',
  'A aristocracia dos banqueiros e financistas das grandes bolsas de valores internacionais.',
  'A aristocracia hereditária de castas imutáveis da antiguidade oriental.',
  'C',
  'Todas as aristocracias materiais tiveram sua época. A última e duradoura será a aristocracia intelecto-moral, pois somente a autoridade do saber unido à virtude pode governar com justiça e desinteresse supremo.',
  '1ª Parte, As aristocracias, p. 135-137',
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
  294,
  'obras_postumas',
  'Nos ''Extratos do livro das previsões'' (2ª Parte, p. 147), em que ano e através de quem Allan Kardec ouviu falar pela primeira vez no fenômeno das ''mesas falantes'' que respondiam a perguntas?',
  'Em 1848, pelas irmãs Fox no vilarejo de Hydesville nos Estados Unidos.',
  'Em 1860, por Camille Flammarion na Sociedade Astronômica de Paris.',
  'Em 1858, pela médium Srta. Ermance Dufaux no Palais Royal.',
  'Em 1854, pelo magnetizador Sr. Fortier, respondendo Kardec inicialmente com ceticismo racional.',
  'Em 1865, pelo editor Didier na Livraria Acadêmica de Paris.',
  'D',
  'Foi em 1854 que o Sr. Fortier lhe falou das mesas girantes e, depois, das mesas que respondiam; Kardec replicou que só acreditaria quando visse e lhe provassem que uma mesa tinha cérebro para pensar e nervos para sentir.',
  '2ª Parte, A minha primeira iniciação no Espiritismo, p. 147',
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
  295,
  'obras_postumas',
  'Nas primeiras sessões espíritas que Allan Kardec frequentou na residência da família Baudin em 1855, qual era o nome do Espírito comunicante habitual (p. 148-149)?',
  'Santo Agostinho.',
  'São Luís.',
  'Erasto.',
  'Sócrates.',
  'Zéfiro, espírito familiar que se afeiçoou a Kardec e lhe prestou valioso auxílio inicial.',
  'E',
  'Zéfiro manifestava-se por intermédio das senhoritas Baudin; embora não fosse um Espírito de alta elevação, era extremamente benevolente, espirituoso e protegeu os primeiros passos das investigações de Kardec.',
  '2ª Parte, A minha primeira iniciação no Espiritismo, p. 148-149',
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
  296,
  'obras_postumas',
  'Em 25 de março de 1856, após misteriosas pancadas ouvidas no seu gabinete de trabalho na rua dos Mártires, qual identificação foi dada pelo Espírito protetor a Kardec (p. 152)?',
  '''Para ti, eu me chamarei A Verdade, e todos os meses, aqui, durante um quarto de hora, estarei à tua disposição''.',
  '''Sou o arcanjo Gabriel enviado para ditar-te dogmas infalíveis''.',
  '''Sou o rei Luís IX da França e exijo vassalagem imediata''.',
  '''Sou o fantasma de Napoleão Bonaparte e venho comandar teus exércitos''.',
  '''Não possuo nome nem permissão para auxiliar teus estudos doutrinários''.',
  'A',
  'O Espírito familiar que produziu as pancadas advertiu Kardec sobre um erro na 30ª linha de seus manuscritos e declarou: ''Para ti, eu me chamarei A Verdade'', tornando-se seu sublime guia espiritual.',
  '2ª Parte, Meu Guia Espiritual, p. 152',
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
  297,
  'obras_postumas',
  'Na histórica sessão de 30 de abril de 1856 na casa do Sr. Roustan (médium Srta. Japhet), qual missão providencial foi revelada nominalmente a Rivail (p. 154)?',
  'Eleger-se deputado na Assembleia Nacional para criar um partido espírita clerical.',
  'Ser o ''obreiro que reconstrói o que foi demolido'', lançando as bases da nova doutrina de renovação moral da Humanidade.',
  'Fundar uma ordem monástica de retiro permanente nas montanhas suíças.',
  'Abandonar os livros e dedicar-se unicamente a espetáculos teatrais de efeitos físicos.',
  'Traduzir obras pagãs gregas sem qualquer conteúdo ético ou espiritual.',
  'B',
  'A cesta mediúnica voltou-se bruscamente para Rivail escrevendo: ''Quanto a ti, Rivail, a tua missão é aí... Ele, Rivail, virá em segundo lugar: é o obreiro que reconstrói o que foi demolido'', consagrando sua missão.',
  '2ª Parte, Primeira revelação da minha missão, p. 154',
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
  298,
  'obras_postumas',
  'Qual acontecimento histórico de intolerância religiosa ocorrido em 9 de outubro de 1861 em Barcelona foi interpretado pelos Espíritos como poderoso impulso de difusão doutrinária (p. 166-168)?',
  'A publicação da encíclica papal que aprovou o livre-exame dos Evangelhos.',
  'A assinatura do tratado de paz entre a Espanha e as nações do Novo Mundo.',
  'O Auto-de-Fé de Barcelona, em que o bispo e a Inquisição mandaram queimar em praça pública 300 volumes espíritas, despertando a indignação liberal e a curiosidade mundial.',
  'A inauguração do primeiro observatório astronômico espírita na Catalunha.',
  'A apreensão de manuscritos de física quântica na Universidade de Berne.',
  'C',
  'O último auto-de-fé da Inquisição espanhola queimou 300 livros espíritas de Kardec. O Espírito de Verdade advertira que o ato medieval traria imensa publicidade e expansão febricitante às ideias espíritas em toda a Europa.',
  '2ª Parte, Auto-de-fé em Barcelona, p. 166-168',
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
  299,
  'obras_postumas',
  'Quando Allan Kardec consultou os Espíritos em dezembro de 1861 a respeito de quem seria seu sucessor na direção do Espiritismo (p. 169), qual foi a resposta dos benfeitores?',
  'Que um papa espírita com poderes infalíveis perpétuos seria nomeado imediatamente em Roma.',
  'Que o Espiritismo desapareceria completamente logo após a desencarnação do seu fundador.',
  'Que um único sucessor secreto recebera anéis sacerdotais para comandar a doutrina com mão de ferro.',
  'Que a obra não dependia de um único homem providencial: a Kardec coube o encargo da concepção e meditação, e a seu sucessor caberia a energia da execução prática, a ser revelado na hora oportuna.',
  'Que os Espíritos assumiriam fisicamente todos os tribunais e cartórios públicos da França.',
  'D',
  'Os Espíritos esclareceram que o Espiritismo não periclitaria: a Providência escolhera Kardec para a elaboração teórica da Doutrina e reservava homens de ação para a consolidação futura do edifício institucional.',
  '2ª Parte, Meu sucessor, p. 169',
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
  300,
  'obras_postumas',
  'No projeto ''Constituição do Espiritismo'' (§ IV — Comissão Central, p. 196-198), qual modelo institucional Allan Kardec planejou para a direção suprema do movimento após a sua partida?',
  'A coroação de um monarca hereditário absoluto com direito de veto universal.',
  'A submissão de todos os centros espíritas do mundo ao clero da Igreja Católica romana.',
  'A dissolução completa de todas as sociedades espíritas em favor do isolamento individualista.',
  'A entrega do patrimônio do Espiritismo a empresas financeiras de capital aberto na bolsa de Paris.',
  'Uma Comissão Central permanente e coletiva de até doze membros titulares, com presidente anual de autoridade puramente administrativa, fiscalizada por congressos gerais periódicos para evitar qualquer autocracia pessoal.',
  'E',
  'Para evitar a personificação e os riscos do autoritarismo ou de cismas, Kardec concebeu uma direção central colegiada de até 12 membros, garantindo a gestão coletiva, a unidade doutrinária e a transparência em prol do progresso da Humanidade.',
  '2ª Parte, Constituição do Espiritismo, § IV, p. 196-198',
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
  301,
  'nosso_lar',
  'No Capítulo 1 de "Nosso Lar" ("Nas Zonas Inferiores"), por quanto tempo aproximado o Espírito André Luiz permaneceu vagando e sofrendo nas regiões inferiores após sua desencarnação, antes de ser recolhido pelos mensageiros de "Nosso Lar"?',
  'Mais de oito anos consecutivos de padecimentos, medo, fome e desorientação espiritual.',
  'Apenas três dias terrestres, equivalentes ao período de perturbação imediata pós-morte.',
  'Exatamente quarenta dias em sono letárgico profundo nas enfermarias da crosta.',
  'Cerca de seis meses de isolamento absoluto no interior de uma caverna escura.',
  'Vinte e cinco anos ininterruptos trabalhando forçadamente em minas subterrâneas.',
  'A',
  'Conforme narra André Luiz no Cap. 1 ("Nas Zonas Inferiores") e lhe é confirmado depois por Lísias (Cap. 7), ele permaneceu mais de oito anos vagando nas regiões inferiores até clamar a Deus em prece sincera.',
  'Nosso Lar — Cap. 1 ("Nas Zonas Inferiores")',
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
  302,
  'nosso_lar',
  'No Capítulo 2 ("Clarêncio"), qual atitude íntima de André Luiz determinou o momento exato em que o venerável Ministro Clarêncio e dois serventes vieram socorrê-lo nas zonas inferiores?',
  'A exigência imperiosa de seus direitos humanos, invocando seu diploma de médico terrestre.',
  'O abatimento do orgulho e a emissão de uma prece humilde e fervorosa a Deus, em pranto sincero.',
  'A realização de um pacto de vingança contra os obsessores que o acusavam de suicida.',
  'A leitura mental de um tratado de teologia que ele havia decorado na juventude.',
  'O pagamento prévio de indulgências e missas contratadas por sua família na Terra.',
  'B',
  'Somente quando André Luiz abateu a vaidade humana e deixou fluir das profundezas da alma uma prece sincera e humilde ao Criador é que o socorro espiritual pôde alcançá-lo através de Clarêncio.',
  'Nosso Lar — Cap. 2 ("Clarêncio")',
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
  303,
  'nosso_lar',
  'No Capítulo 3 ("A Oração Coletiva"), já recolhido ao Parque Hospitalar de "Nosso Lar", André Luiz assiste comovido à prece coletiva do Governador e dos 72 Ministros. Que fenômeno luminoso acompanha o cântico e traz alívio imediato aos enfermos?',
  'Uma tempestade de relâmpagos vermelhos que desintegra instantaneamente as paredes do hospital.',
  'O aparecimento de uma carruagem de fogo puxada por cavalos alados no firmamento.',
  'Um grande coração azul com estrias douradas no alto, do qual se desprendem pequeninas flores alvas de luz (miosótis fluídicos) sobre os corações.',
  'A materialização de estátuas de mármore representando os antigos reis da Europa.',
  'Um eclipse total do Sol acompanhado pelo toque de tambores militares.',
  'C',
  'Durante a prece coletiva na Governadoria, surge no alto um grande coração azul com estrias douradas, vertendo sobre os pavilhões pequeninas flores alvas e luminosas (semelhantes a miosótis) que balsamizam os enfermos.',
  'Nosso Lar — Cap. 3 ("A Oração Coletiva")',
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
  304,
  'nosso_lar',
  'No Capítulo 4 ("O Médico Espiritual"), o assistente Henrique de Luna examina André Luiz e explica-lhe a verdadeira causa de sua desencarnação prematura e do coro de acusações que o chamava de "suicida". Qual foi o diagnóstico espiritual?',
  'Suicídio direto e premeditado por ingestão voluntária de veneno químico no consultório.',
  'Assassinato cometido por um antigo rival político durante uma cirurgia de emergência.',
  'Morte natural por velhice avançada, sem qualquer comprometimento dos órgãos perispirituais.',
  'Suicídio inconsciente, pois André arruinara o fígado, os rins e o aparelho gástrico com excessos de alimentação, álcool, cólera, descontrole emocional e sífilis.',
  'Acidente ferroviário inevitável previsto como fatalidade absoluta em seu mapa cármico.',
  'D',
  'Henrique de Luna esclarece que André Luiz cometera suicídio indireto ou inconsciente: por imprevidência, destemperança alimentar, mau gênio e desregramentos, destruíra as forças vitais e lesara gravemente o estômago, o fígado e os rins.',
  'Nosso Lar — Cap. 4 ("O Médico Espiritual")',
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
  305,
  'nosso_lar',
  'No Capítulo 5 ("Recebendo Assistência"), o enfermeiro visitador Lísias revela a André Luiz uma estatística impressionante sobre a turma de 80 doentes recém-recolhidos ao Parque Hospitalar. Quantos deles haviam desencarnado na condição de suicidas inconscientes?',
  'Apenas 2 enfermos dentre os 80 recolhidos.',
  'Exatamente 10 enfermos dentre os 80 recolhidos.',
  'Exatamente 25 enfermos dentre os 80 recolhidos.',
  'Todos os 80 enfermos sem nenhuma exceção.',
  '57 enfermos dentre os 80 recolhidos, vitimados por imprevidências, excessos e cólera.',
  'E',
  'Lísias informa a André Luiz que, naquela turma de 80 enfermos hospitalizados, nada menos de 57 eram suicidas inconscientes que haviam abreviado a existência física pelo descontrole das paixões e dos hábitos.',
  'Nosso Lar — Cap. 5 ("Recebendo Assistência")',
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
  306,
  'nosso_lar',
  'No Capítulo 6 ("Precioso Aviso"), quando André Luiz chora lamentando a saudade da esposa Zélia e dos três filhos que deixara na Terra, que advertência fraterna e decisiva o Ministro Clarêncio lhe dirige?',
  'Que o pranto deve ser total no arrependimento, mas a lamentação ociosa é perigosa enfermidade mental, devendo-se conquistar a simpatia pelo esforço próprio no trabalho.',
  'Que ele deveria regressar imediatamente à crosta terrestre para assombrar a família até ser notado.',
  'Que os laços familiares se extinguem para sempre com a morte do corpo físico.',
  'Que em Nosso Lar é proibido amar os parentes que permaneceram encarnados na Terra.',
  'Que somente os Espíritos que esquecem completamente o passado têm direito à alimentação.',
  'A',
  'Clarêncio adverte André contra a autopiedade e a lamentação estéril, lembrando que a dor ociosa é enfermidade mental e que o verdadeiro amor se demonstra preparando-se pelo trabalho útil para servir aos amados.',
  'Nosso Lar — Cap. 6 ("Precioso Aviso")',
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
  307,
  'nosso_lar',
  'No Capítulo 7 ("Explicações de Lísias"), ao conversar sobre o desejo de André de rever sua mãe desencarnada e visitar a família na Terra, Lísias cita o ensinamento de um instrutor sobre os três requisitos indispensáveis a qualquer realização nobre. Quais são eles?',
  'Riqueza material, influência política e títulos acadêmicos.',
  'Desejar, saber desejar e merecer — isto é, vontade ativa, trabalho persistente e merecimento justo.',
  'Silêncio absoluto, jejum prolongado e isolamento em mosteiros.',
  'Pedir com insistência, exigir dos superiores e aguardar sem trabalhar.',
  'Sorte favorável, proteção de amigos influentes e isenção de deveres.',
  'B',
  'Lísias recorda a lição de que todo desejo nobre exige três requisitos fundamentais: desejar (vontade ativa), saber desejar (trabalho persistente) e merecer (merecimento justo).',
  'Nosso Lar — Cap. 7 ("Explicações de Lísias")',
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
  308,
  'nosso_lar',
  'No Capítulo 8 ("Organização de Serviços"), Lísias descreve a origem histórica e a estrutura administrativa da colônia "Nosso Lar". Como estão organizados os seus Ministérios em torno da Governadoria?',
  'Em doze províncias feudais independentes comandadas por antigos imperadores romanos.',
  'Em três conselhos militares voltados exclusivamente para a guerra contra as trevas.',
  'Em seis Ministérios orientados por doze Ministros cada um (Regeneração, Auxílio, Comunicação, Esclarecimento, Elevação e União Divina), dispostos em estrela triangular com a Governadoria ao centro.',
  'Em quatro secretarias comerciais dedicadas à compra e venda de terrenos espirituais.',
  'Em um único departamento hospitalar sem divisão de tarefas ou hierarquia moral.',
  'C',
  'Fundada por portugueses distintos no século XVI no Brasil, Nosso Lar divide-se em seis Ministérios (Regeneração, Auxílio, Comunicação, Esclarecimento, Elevação e União Divina), cada qual dirigido por 12 Ministros (totalizando 72).',
  'Nosso Lar — Cap. 8 ("Organização de Serviços")',
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
  309,
  'nosso_lar',
  'No Capítulo 9 ("Problema de Alimentação"), Lísias relata o episódio histórico em que o Governador convocou 200 instrutores de esfera muito elevada para reduzir o uso de alimentos densos na colônia. Qual Ministério resistiu por trinta anos à medida e o que levou à vitória definitiva da sobriedade?',
  'O Ministério da União Divina resistiu, até que faltou água potável no Rio Azul.',
  'O Ministério do Auxílio recusou a mudança, sendo dissolvido pelo Governador.',
  'O Ministério da Elevação promoveu uma greve geral de cem anos na colônia.',
  'O Ministério do Esclarecimento (apegado a cálculos matemáticos) resistiu, até que uma tentativa de invasão de multidões famintas do Umbral exigiu seis meses de defesa em que todos viveram apenas de inalação e água pura com princípios solares e elétricos.',
  'O Ministério da Regeneração proibiu o consumo de sucos e frutas nos hospitais.',
  'D',
  'Os técnicos do Ministério do Esclarecimento resistiram por 30 anos à redução alimentar, mas durante o cerco de seis meses por hordas famintas do Umbral, toda a colônia sustentou-se apenas com o princípio vital inalado da atmosfera e água misturada a elementos solares, elétricos e magnéticos.',
  'Nosso Lar — Cap. 9 ("Problema de Alimentação")',
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
  310,
  'nosso_lar',
  'No Capítulo 10 ("No Bosque das Águas"), André Luiz e Lísias viajam no "aeróbus" até o grande reservatório do Rio Azul. Segundo explica Lísias, a qual Ministério compete o serviço de magnetização geral das águas de "Nosso Lar"?',
  'Ao Ministério da Regeneração.',
  'Ao Ministério da Comunicação.',
  'Ao Ministério do Esclarecimento.',
  'Ao Ministério do Auxílio.',
  'Ao Ministério da União Divina, cujos Ministros impregnam as águas de fluidos salutares e curativos.',
  'E',
  'Lísias esclarece que a água em Nosso Lar desempenha papel de veículo de forças sutis e que o serviço de magnetização geral das águas do Rio Azul cabe aos Ministros da União Divina.',
  'Nosso Lar — Cap. 10 ("No Bosque das Águas")',
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
  311,
  'nosso_lar',
  'No Capítulo 11 ("Notícias do Plano"), Lísias menciona que muitos dos processos administrativos de "Nosso Lar" foram copiados de uma colônia espiritual ainda mais antiga e aperfeiçoada. Qual é o nome dessa colônia exemplar citada por ele?',
  'Alvorada Nova.',
  'Redenção Celeste.',
  'Estrela do Oriente.',
  'Cidade do Sol.',
  'Nova Jerusalém do Sul.',
  'A',
  'No Capítulo 11, Lísias explica que muitas realizações e modelos de trabalho de "Nosso Lar" foram inspirados na colônia "Alvorada Nova", uma das mais antigas e adiantadas da região.',
  'Nosso Lar — Cap. 11 ("Notícias do Plano")',
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
  312,
  'nosso_lar',
  'No Capítulo 12 ("O Umbral"), Lísias oferece a André Luiz uma explicação detalhada sobre a natureza e a finalidade dessa região espiritual. Onde começa o Umbral e qual é a sua função na economia divina?',
  'Começa no centro ígneo da Terra e destina-se ao suplício eterno e irremediável dos pecadores.',
  'Começa na própria crosta terrestre e funciona como zona de esgotamento de resíduos mentais, onde se queima a bagagem ilusória de quem não aproveitou a vida física.',
  'Localiza-se na órbita de Saturno e recebe apenas Espíritos que cometeram crimes hediondos de guerra.',
  'É uma região paradisíaca reservada ao repouso exclusivo dos sacerdotes e teólogos.',
  'É um plano criado pelos próprios Espíritos perversos sem o conhecimento da Providência Divina.',
  'B',
  'Lísias ensina que o Umbral começa na crosta terrestre, sendo a zona obscura de transição onde a alma esgota os resíduos mentais e queima as ilusões acumuladas pela incúria na vida carnal.',
  'Nosso Lar — Cap. 12 ("O Umbral")',
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
  313,
  'nosso_lar',
  'No Capítulo 13 ("No Gabinete do Ministro"), André Luiz presencia Clarêncio atender uma senhora aflita que desejava retirar os dois filhos do Umbral, mas possuía apenas 304 bônus-hora após seis anos na colônia, pois recusara todos os serviços humildes para ficar nos Campos de Repouso. Que lição máxima Clarêncio lhe transmite?',
  'Que basta chorar aos pés dos Ministros para obter isenção das leis divinas.',
  'Que os bônus-hora podem ser comprados com o ouro deixado em testamento na Terra.',
  'Que o trabalho e a humildade são as duas margens do caminho do auxílio, sem as quais ninguém adquire credenciais para socorrer os amados.',
  'Que as mães desencarnadas perdem o direito de interceder pelos filhos após cinco anos.',
  'Que apenas os Espíritos masculinos podem ingressar nas caravanas de socorro ao Umbral.',
  'C',
  'Clarêncio mostra àquela mãe que ela rejeitara a Vigilância, os Irmãos da Suportação, a Enfermagem dos Perturbados e as Pesquisas por achá-los penosos, concluindo: "O trabalho e a humildade são as duas margens do caminho do auxílio."',
  'Nosso Lar — Cap. 13 ("No Gabinete do Ministro")',
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
  314,
  'nosso_lar',
  'No Capítulo 14 ("Elucidações de Clarêncio"), quando André Luiz pede trabalho como médico, Clarêncio explica-lhe que o diploma terrestre vale apenas como "ficha de ingresso" e revela um detalhe surpreendente sobre os 15 anos de clínica de André na Terra. Que detalhe é esse?',
  'Que André jamais atendera um único paciente pobre durante toda a sua carreira médica.',
  'Que todas as cirurgias realizadas por André haviam resultado na morte imediata dos pacientes.',
  'Que André havia construído dez hospitais filantrópicos com recursos próprios na juventude.',
  'Que André concedera receituário gratuito a mais de 6.000 necessitados (muitas vezes por troça), mas apenas 15 deles lhe enviaram preces de gratidão ao perceberem que o benefício vinha de Jesus.',
  'Que o título de médico terrestre garantia automaticamente o cargo de Ministro da Regeneração.',
  'D',
  'Clarêncio revela que, em 15 anos de clínica, André dera receituário gratuito a mais de 6.000 pobres — embora quase sempre em tom de ironia —, e que 15 desses doentes humildes oraram por ele com sincera gratidão.',
  'Nosso Lar — Cap. 14 ("Elucidações de Clarêncio")',
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
  315,
  'nosso_lar',
  'No Capítulo 15 ("A Visita Materna"), André Luiz recebe a emocionante visita de sua mãe desencarnada, que vinha de esferas mais altas onde trabalhava pelo reerguimento da família. Qual recomendação essencial ela deixa ao filho sobre o sofrimento e o trabalho?',
  'Que ele exija imediatamente um posto de comando médico compatível com o sobrenome da família.',
  'Que ele abandone a colônia Nosso Lar e volte sozinho ao Umbral para buscar o pai.',
  'Que ele se isole em contemplação mística sem ter contato com os doentes das enfermarias.',
  'Que ele escreva cartas mediúnicas de reprovação severa contra a esposa Zélia.',
  'Que ele faça o enterro de todas as lamentações, abrace o trabalho anônimo e lembre que lágrimas e úlceras constituem bendito processo de purificação e extensão dos nossos melhores sentimentos.',
  'E',
  'A mãe de André Luiz exorta-o a sepultar toda queixa, aceitar o serviço humilde de preparação e compreender que as dores e chagas morais são instrumentos benditos para dilatar o amor puro.',
  'Nosso Lar — Cap. 15 ("A Visita Materna")',
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
  316,
  'nosso_lar',
  'No Capítulo 16 ("Confidências"), a mãe de André Luiz revela-lhe a dolorosa situação espiritual de seu pai, Laerte, que desencarnara com aparência de piedade cristã. Onde se encontrava Laerte havia doze anos e como a mãe pede que André se refira às duas mulheres que o retinham?',
  'Nas zonas tenebrosas do Umbral, preso a ligações clandestinas; e a mãe pede a André que nunca as chame de ''infelizes mulheres'', mas sim de ''nossas irmãs doentes, ignorantes ou infelizes''.',
  'No Ministério da União Divina, atuando como instrutor; e a mãe pede que André o reverencie como santo.',
  'Já reencarnado como governante na Europa; e a mãe pede que André não interfira em sua política.',
  'No Bosque das Águas, trabalhando como jardineiro; e a mãe pede que André lhe leve flores.',
  'Nas Câmaras de Retificação, completamente curado; e a mãe pede que André condene suas antigas amantes.',
  'A',
  'Laerte permanecia há 12 anos nas sombras do Umbral, imantado a antigas ligações clandestinas; quando André chama aquelas companheiras de ''infelizes mulheres'', sua mãe o corrige com amor: ''Diga: nossas irmãs doentes, ignorantes ou infelizes.''',
  'Nosso Lar — Cap. 16 ("Confidências")',
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
  317,
  'nosso_lar',
  'No Capítulo 17 ("Em Casa de Lísias"), após receber de Clarêncio uma caderneta de um ano de observação nos Ministérios da Regeneração, Auxílio, Comunicação e Esclarecimento, André Luiz é acolhido fraternalmente no lar de Lísias. Quem reside nessa casa com o enfermeiro?',
  'O Governador da colônia e seus doze assessores diretos.',
  'Sua bondosa mãe, Dona Laura, e suas duas irmãs jovens, Iolanda e Judite.',
  'O Ministro Genésio e a cooperadora Narcisa.',
  'Apenas Lísias, pois em Nosso Lar cada habitante é obrigado a morar sozinho.',
  'O assistente Henrique de Luna e trinta médicos recém-chegados da Terra.',
  'B',
  'André Luiz passa a residir como hóspede fraterno na residência de Lísias, compartilhada com a venerável mãe dele, Senhora Laura, e suas duas irmãs, Iolanda e Judite.',
  'Nosso Lar — Cap. 17 ("Em Casa de Lísias")',
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
  318,
  'nosso_lar',
  'No Capítulo 18 ("Amor, Alimento das Almas"), durante o jantar em família com os visitantes Polidoro e Estácio, a Senhora Laura desenvolve uma luminosa explicação sobre a nutrição espiritual. Qual é, segundo ela, a base de todo o sistema de alimentação nas esferas superiores?',
  'A ingestão diária de proteínas animais sintéticas produzidas em laboratório.',
  'O jejum perpétuo imposto por decreto dos Ministros do Esclarecimento.',
  'O amor divino, que constitui o pão sublime das almas e sustenta a permuta magnética entre os corações que se amam.',
  'O consumo exclusivo de ervas amargas colhidas nas fronteiras do Umbral.',
  'A absorção de vapores metálicos provenientes das oficinas mecânicas.',
  'C',
  'Dona Laura ensina que o amor é a base de todo o sistema de alimentação espiritual: quanto mais evolui a criatura, mais se nutre da permuta magnética de afeto, alegria e harmonia divina.',
  'Nosso Lar — Cap. 18 ("Amor, Alimento das Almas")',
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
  319,
  'nosso_lar',
  'No Capítulo 19 ("A Jovem Desencarnada"), André Luiz conhece Eloísa, neta de Dona Laura, recém-chegada da Terra após desencarnar por tuberculose. Por que Eloísa vivia em pranto constante e rebeldia espiritual em "Nosso Lar"?',
  'Porque fora proibida de estudar música no Ministério da Elevação.',
  'Porque desejava trabalhar imediatamente nas caravanas de socorro às trevas.',
  'Porque perdera todos os seus bônus-hora em jogos de azar na colônia.',
  'Porque não aceitava a morte física e revoltava-se com o fato de seu ex-noivo Arnaldo estar prestes a casar-se na Terra com sua melhor amiga, Maria da Luz.',
  'Porque sua avó Laura a obrigava a trabalhar dezesseis horas por dia na tecelagem.',
  'D',
  'Eloísa permanecia inconformada com a desencarnação precoce e consumia-se de ciúme ao saber que o ex-noivo Arnaldo esquecera suas promessas e ia desposar sua amiga íntima, Maria da Luz.',
  'Nosso Lar — Cap. 19 ("A Jovem Desencarnada")',
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
  320,
  'nosso_lar',
  'No Capítulo 20 ("Noções de Lar"), a Senhora Laura utiliza uma bela imagem geométrica para explicar a harmonia conjugal e a organização doméstica em "Nosso Lar". Como ela define o lar e o regime de trabalho da mulher na colônia?',
  'Como um círculo fechado onde a mulher fica dispensada de qualquer trabalho útil fora de casa.',
  'Como uma pirâmide de comando masculino onde a esposa não possui bônus-hora próprios.',
  'Como duas linhas paralelas que jamais se encontram durante a eternidade.',
  'Como um estabelecimento comercial cujos filhos pagam aluguel mensal aos pais.',
  'Como um ângulo reto (a reta vertical é o sentimento feminino de inspiração e a horizontal é o sentimento masculino de realização), cumprindo a mulher 48 horas semanais de serviço, com horas contadas em dobro quando acolhe crianças.',
  'E',
  'Dona Laura compara o lar a um ângulo reto formado pela inspiração feminina (vertical) e realização masculina (horizontal), explicando que a mulher trabalha 8 horas diárias (48 semanais) e recebe bônus em dobro quando assume a tutela maternal de crianças.',
  'Nosso Lar — Cap. 20 ("Noções de Lar")',
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
  321,
  'nosso_lar',
  'No Capítulo 21 ("Continuando a palestra"), Dona Laura explica a André Luiz quantos bônus-hora foram necessários para que seu esposo Ricardo adquirisse a propriedade do lar onde residem, e quantos anos de memória integral de vidas passadas ela já conseguira recuperar com o auxílio dos magnetizadores do Esclarecimento. Quais são esses números?',
  '30.000 bônus-hora para adquirir um lar próprio e 300 anos de memória integral recuperada.',
  '100 bônus-hora para adquirir um lar próprio e 10.000 anos de memória integral recuperada.',
  '1.000.000 de bônus-hora para adquirir um lar próprio e apenas 5 anos de memória recuperada.',
  '500 bônus-hora para adquirir um lar próprio e 50 anos de memória integral recuperada.',
  '5.000 bônus-hora para adquirir um lar próprio e 1.500 anos de memória integral recuperada.',
  'A',
  'Dona Laura informa que a aquisição mais simples de um lar exige 30.000 bônus-hora (valor conquistado por seu esposo Ricardo) e que, com a ajuda do assistente Longobardo e dos magnetizadores do Esclarecimento, ela já recordava integralmente três séculos (300 anos) de seu passado.',
  'Nosso Lar — Cap. 21 ("Continuando a palestra")',
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
  322,
  'nosso_lar',
  'No Capítulo 22 ("O Bônus-Hora"), Lísias detalha o funcionamento da moeda de serviço em "Nosso Lar". O que é o "bônus-hora" e o que acontece com o patrimônio de bônus-hora de um habitante quando ele retorna à Terra pela reencarnação?',
  'É uma moeda de ouro físico que o reencarnante leva escondida no perispírito para enriquecer na Terra.',
  'É a ficha individual correspondente a uma hora de trabalho útil; ao reencarnar, as economias de bônus-hora revertem ao patrimônio comum da Governadoria, conservando a família o direito de herança sobre o lar.',
  'É um imposto cobrado dos doentes hospitalizados que nunca pode ser transferido nem utilizado.',
  'É um título bancário que rende juros compostos mesmo para quem se recusa a trabalhar.',
  'É um passe livre que permite visitar a crosta terrestre sem autorização dos Ministros.',
  'B',
  'O bônus-hora representa uma hora de serviço útil prestado à coletividade (podendo valer o dobro ou o triplo em tarefas sacrificiais); quando o servidor reencarna, seus bônus-hora retornam ao fundo comum da Governadoria, permanecendo o imóvel sob herança familiar.',
  'Nosso Lar — Cap. 22 ("O Bônus-Hora")',
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
  323,
  'nosso_lar',
  'No Capítulo 23 ("Saber Ouvir"), Dona Laura mostra a André Luiz a inscrição luminosa "Saber ouvir" na sala de estar e explica por que o Governador proibira, havia dois séculos, o intercâmbio desordenado de habitantes de "Nosso Lar" com a crosta terrestre. Em qual máxima evangélica de Jesus se baseou essa proibição?',
  '"Dai a César o que é de César e a Deus o que é de Deus."',
  '"Atire a primeira pedra aquele que estiver sem pecado."',
  '"Deixai aos mortos o cuidado de enterrar os seus mortos."',
  '"É mais fácil passar um camelo pelo fundo de uma agulha do que entrar um rico no Reino de Deus."',
  '"Não saiba a vossa mão esquerda o que faz a vossa mão direita."',
  'C',
  'Dona Laura explica que muitos recém-desencarnados iam à Terra sem preparo e voltavam perturbados; por isso, há dois séculos a Governadoria regulamentou as visitas baseando-se nas palavras do Cristo: "Deixai aos mortos o cuidado de enterrar os seus mortos."',
  'Nosso Lar — Cap. 23 ("Saber Ouvir")',
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
  324,
  'nosso_lar',
  'No Capítulo 24 ("O Impressionante Apelo"), em agosto de 1939, a família de Lísias reúne-se em torno do aparelho receptor de televisão doméstica para ouvir uma transmissão extraordinária do Posto Dois da colônia "Moradia". Qual era o conteúdo urgente dessa mensagem?',
  'O anúncio da descoberta de vida inteligente nas luas de Júpiter.',
  'A comemoração do encerramento definitivo de todos os conflitos armados na Terra.',
  'A convocação para um festival esportivo entre as colônias espirituais da América do Sul.',
  'O alerta grave sobre a iminência da Segunda Guerra Mundial na Europa, conclamando todas as colônias espirituais à prece, à serenidade e ao preparo de socorro.',
  'A notícia da desativação permanente do Ministério da Comunicação em Nosso Lar.',
  'D',
  'Em agosto de 1939, o Posto Dois da colônia "Moradia" transmite um apelo solene prevenindo os espíritos sobre a deflagração iminente da Segunda Guerra Mundial e convocando todos à oração e ao trabalho de assistência.',
  'Nosso Lar — Cap. 24 ("O Impressionante Apelo")',
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
  325,
  'nosso_lar',
  'No Capítulo 25 ("Generoso Alvitre"), antes de André Luiz seguir com o amigo Rafael para o Ministério da Regeneração, a Senhora Laura aconselha-o a abandonar a simples postura de observador curioso e ingressar no serviço ativo. Quais exemplos sublimes de trabalho manual ela recorda do Evangelho?',
  'Salomão em seu trono de ouro e Herodes na construção do templo.',
  'Pilatos lavando as mãos e Caifás presidindo o Sinédrio.',
  'Alexandre, o Grande, conquistando a Pérsia e Júlio César em Roma.',
  'Os fariseus disputando os primeiros assentos nas sinagogas.',
  'Jesus trabalhando na carpintaria em Nazaré e o apóstolo Paulo de Tarso exercendo o ofício de tecelão.',
  'E',
  'Para curar André do preconceito intelectual que desprezava os serviços humildes, Dona Laura lembra-lhe que o próprio Cristo santificou a carpintaria e que Paulo de Tarso, mesmo sendo doutor da Lei, sustentava-se como tecelão.',
  'Nosso Lar — Cap. 25 ("Generoso Alvitre")',
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
  326,
  'nosso_lar',
  'No Capítulo 26 ("Novas Perspectivas"), André Luiz desiste de usar sua caderneta apenas para passear e pede trabalho humilde ao Ministro Genésio, no Ministério da Regeneração. Com qual sentença sábia Genésio o acolhe antes de encaminhá-lo às Câmaras de Retificação dirigidas por Tobias?',
  '"Quando o servidor está pronto, o serviço aparece."',
  '"Somente os doutores da Terra podem tocar nos doentes espirituais."',
  '"Volte daqui a dez anos, quando tiver decorado todas as leis da colônia."',
  '"O trabalho braçal é castigo reservado aos criminosos irrecuperáveis."',
  '"Quem possui diploma universitário está dispensado da obediência."',
  'A',
  'Vendo que André Luiz finalmente vencera a vaidade profissional e se dispunha a servir como aprendiz nas Câmaras de Retificação, o Ministro Genésio pronuncia a célebre frase: "Quando o servidor está pronto, o serviço aparece."',
  'Nosso Lar — Cap. 26 ("Novas Perspectivas")',
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
  327,
  'nosso_lar',
  'No Capítulo 27 ("O Trabalho, Enfim"), iniciando seu aprendizado nas Câmaras de Retificação ao lado da dedicada enfermeira Narcisa, André Luiz auxilia na limpeza de 32 doentes graves que expeliam substância negra e fétida após os passes. Quem eram esses enfermos descritos por Narcisa como "crentes negativos"?',
  'Cientistas ateus que dedicaram a vida inteira ao combate contra a febre amarela.',
  'Crentes que na Terra aceitavam a fé religiosa apenas da boca para fora, exigindo o céu sem esforço próprio de renovação moral (os ''contrabandistas na vida eterna'').',
  'Crianças recém-desencarnadas que ainda não haviam aprendido a falar.',
  'Servidores antigos do Ministério da Elevação fatigados pelo excesso de estudo.',
  'Indígenas silvícolas que desconheciam completamente os alfabetos europeus.',
  'B',
  'Narcisa explica que aqueles 32 enfermos eram ''crentes negativos'' ou ''contrabandistas na vida eterna'': religiosos nominais que supunham comprar o Céu com fórmulas exteriores, sem jamais combaterem o próprio egoísmo e a maldade.',
  'Nosso Lar — Cap. 27 ("O Trabalho, Enfim")',
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
  328,
  'nosso_lar',
  'No Capítulo 28 ("Em Serviço"), enquanto aguardam uma caravana dos Samaritanos trazendo 29 irmãos do Umbral, André Luiz pergunta a Narcisa por que os recém-desencarnados não conseguem elevar-se imediatamente às colônias superiores. Que comparação da natureza Narcisa utiliza para explicar a lei de densidade fluídica?',
  'A diferença entre o ouro puro e o chumbo derretido nas fornalhas.',
  'O contraste entre a baleia no oceano e o leão na savana africana.',
  'A comparação entre o avestruz (que tem asas, mas é pesado demais e só corre no solo) e a andorinha (leve e ágil, que corta os ares a grande altura).',
  'A relação entre o carvalho centenário e a gramínea rasteira do campo.',
  'A oposição entre o gelo das montanhas e o vapor das fontes termais.',
  'C',
  'Narcisa compara o Espírito sobrecarregado de paixões densas ao avestruz, que possui asas mas não consegue elevar-se do chão devido ao peso, ao passo que a alma desprendida assemelha-se à andorinha que voa livremente nas alturas.',
  'Nosso Lar — Cap. 28 ("Em Serviço")',
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
  329,
  'nosso_lar',
  'No Capítulo 29 ("A Visão de Francisco"), André Luiz e Narcisa atendem o enfermo Francisco, que gritava aterrorizado sentindo-se devorado por vermes, embora seu corpo físico já estivesse enterrado na Terra. Qual era a causa dessa torturante fixação mental?',
  'Uma maldição lançada por feiticeiros no momento de seu sepultamento.',
  'Um defeito nos aparelhos elétricos de climatização das Câmaras de Retificação.',
  'A ingestão acidental de água não magnetizada do Rio Azul.',
  'O apego excessivo ao corpo físico durante a vida terrena, fazendo com que ele continuasse mentalmente imantado ao próprio cadáver em decomposição no túmulo.',
  'Uma punição aplicada pelo Ministro Pádua por indisciplina hospitalar.',
  'D',
  'O paciente Francisco adorava de tal modo o próprio corpo carnal que, após a morte, foi visitar os próprios despojos no cemitério e fixou na mente a imagem dos vermes e da decomposição, sofrendo por autossugestão.',
  'Nosso Lar — Cap. 29 ("A Visão de Francisco")',
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
  330,
  'nosso_lar',
  'No Capítulo 30 ("Herança e Eutanásia"), no Pavilhão 5 das Câmaras de Retificação, a jovem Paulina visita seu pai desencarnado, que se achava em terrível revolta contra o outro filho, o médico Dr. Edelberto. O que Edelberto fizera ao próprio pai no leito de morte?',
  'Recusara-se a comparecer ao velório por estar viajando a lazer pela Europa.',
  'Doara toda a fortuna da família para um orfanato sem consultar os irmãos.',
  'Internara o pai em um hospital público de indigentes apesar de ser milionário.',
  'Queimara os diários e poemas que o pai escrevera ao longo da juventude.',
  'Aplicara-lhe uma injeção letal sob o pretexto de ''eutanásia'' (morte suave), movido pela pressa ambiciosa de repartir a herança de um milhão e quinhentos mil cruzeiros.',
  'E',
  'O pai de Paulina e Edelberto denuncia em pranto que o próprio filho médico lhe abreviara a vida física aplicando a chamada ''eutanásia'', interessado na partilha imediata da herança de 1 milhão e 500 mil cruzeiros.',
  'Nosso Lar — Cap. 30 ("Herança e Eutanásia")',
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
  331,
  'nosso_lar',
  'No Capítulo 31 ("Vampiro"), na cancela divisória entre o Umbral e as Câmaras de Retificação, o sentinela Justino e o Vigilante-Chefe Irmão Paulo barram a entrada de uma mulher sombria que exigia ingresso imediato no paraíso por ter sido católica fervorosa. Quem era ela e o que representavam as 58 manchas pretas ao seu redor?',
  'Uma ex-parteira e ginecologista diplomada que praticara 58 abortos criminosos e infanticídios a peso de ouro, trazendo no halo vital as 58 manchas escuras das criancinhas asfixiadas.',
  'Uma antiga rainha medieval que mandara incendiar 58 aldeias camponesas durante as cruzadas.',
  'Uma escritora materialista que publicara 58 livros negando a existência de Deus.',
  'Uma juíza de direito que condenara 58 réus inocentes à prisão perpétua por suborno.',
  'Uma comerciante avarenta que escondera 58 sacas de trigo durante uma grande seca.',
  'A',
  'Irmão Paulo desmascara a hipocrisia daquela mulher: ex-parteira diplomada em ginecologia, ela ganhara fortuna assassinando 58 recém-nascidos sob o pretexto de salvar a honra de famílias, carregando 58 manchas negras em sua aura sem demonstrar qualquer remorso.',
  'Nosso Lar — Cap. 31 ("Vampiro")',
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
  332,
  'nosso_lar',
  'No Capítulo 32 ("Notícias de Veneranda"), André Luiz encanta-se com os "salões verdes" de mobiliário vivo criados pela Ministra Veneranda. Segundo explica Tobias, quais características tornam Veneranda uma figura única em "Nosso Lar"?',
  'Ela é a mais jovem habitante da colônia, tendo desencarnado aos doze anos de idade.',
  'Ela é a mais antiga servidora da colônia (mais de 200 anos de atividade), a única além do Governador que já viu Jesus face a face, e detentora da Medalha do Mérito de Serviço por 1 milhão de horas de trabalho útil.',
  'Ela foi a fundadora material da cidade do Rio de Janeiro no século XVI.',
  'Ela nunca precisou reencarnar na Terra, tendo evoluído exclusivamente nas estrelas Sírius e Vega.',
  'Ela acumula simultaneamente a chefia dos seis Ministérios de Nosso Lar.',
  'B',
  'Tobias revela que a Ministra Veneranda reside em Nosso Lar há mais de dois séculos, é a única entidade além do Governador que já contemplou o Cristo pessoalmente e recebeu das Fraternidades da Luz a Medalha do Mérito por um milhão de horas de serviço ao bem.',
  'Nosso Lar — Cap. 32 ("Notícias de Veneranda")',
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
  333,
  'nosso_lar',
  'No Capítulo 33 ("Curiosas Observações"), André Luiz observa a chegada da caravana dos Samaritanos vinda do Umbral em seis grandes carros puxados por muares, escoltados por cães e por um bando de aves de grande porte chamadas "íbis viajores". Qual é a utilidade dessas aves nas expedições ao Umbral?',
  'Transportar os doentes desacordados sobre o dorso durante o voo.',
  'Cantar melodias clássicas para adormecer os guardas das fronteiras.',
  'Auxiliar na limpeza atmosférica devorando as formas mentais odiosas e perversas que pairam nas zonas inferiores, além de anunciar a aproximação da chuva.',
  'Carregar mensagens escritas em pergaminho para os parentes encarnados.',
  'Fornecer penas luminosas para a confecção de túnicas ministeriais.',
  'C',
  'Tobias explica que os ''íbis viajores'' são aves fidelíssimas que limpam a atmosfera espiritual das caravanas, absorvendo e destruindo formas-pensamento odiosas e pestilenciais do Umbral.',
  'Nosso Lar — Cap. 33 ("Curiosas Observações")',
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
  334,
  'nosso_lar',
  'No Capítulo 34 ("Os Recém-Chegados do Umbral"), entre os 29 socorridos trazidos pelos Samaritanos, André Luiz atende uma senhora idosa que permanecera mais de cinquenta anos no Umbral clamando pelo "padre Amâncio". Qual fora a causa de sua desencarnação na Terra, em maio de 1888?',
  'Ela fora uma escrava mártir que morrera perdoando seus algozes no pelourinho.',
  'Ela desencarnara em um naufrágio quando viajava para visitar o Vaticano.',
  'Ela fora uma professora rural que morrera de exaustão ensinando crianças órfãs.',
  'Ela fora uma cruel senhora de escravos que mandava cativos ao tronco enquanto pagava missas na igreja, e desencarnara de choque colérico ao saber da assinatura da Lei Áurea pela Princesa Isabel.',
  'Ela fora uma freira enclausurada que jamais saíra de seu convento em Minas Gerais.',
  'D',
  'Aquela dama orgulhosa julgava ter comprado o Céu com donativos ao padre Amâncio, mas tratava os escravos com ferocidade e tivera uma síncope fatal de revolta em maio de 1888 ao receber a notícia da abolição da escravatura.',
  'Nosso Lar — Cap. 34 ("Os Recém-Chegados do Umbral")',
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
  335,
  'nosso_lar',
  'No Capítulo 35 ("Encontro Singular"), ao acolher os Samaritanos da caravana, André Luiz reconhece com emoção o irmão Silveira, antigo comerciante do Rio de Janeiro que fora levado à falência e à morte pela dureza implacável de Laerte (pai de André). Qual é a reação de Silveira quando André lhe pede perdão em nome do pai?',
  'Silveira recusa o cumprimento de André e exige uma indenização de trinta mil bônus-hora.',
  'Silveira pede a Tobias que expulse André imediatamente das Câmaras de Retificação.',
  'Silveira revela que ainda planeja vingar-se de Laerte quando este reencarnar na Terra.',
  'Silveira finge não reconhecer André e retira-se em silêncio hostil para o Umbral.',
  'Silveira abraça André generosamente, afirma que nada tem a perdoar e declara que nossos adversários na Terra são, na verdade, benfeitores que nos libertam das ilusões transitórias da fortuna.',
  'E',
  'Demonstrando elevada espiritualidade, o samaritano Silveira acolhe André no coração, bendiz a falência que o despertou do egoísmo comercial e afirma que já solicitara permissão para ajudar a socorrer o próprio Laerte no Umbral.',
  'Nosso Lar — Cap. 35 ("Encontro Singular")',
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
  336,
  'nosso_lar',
  'No Capítulo 36 ("O Sonho"), após receber bônus-hora dobrados por seu primeiro plantão dedicado nas Câmaras de Retificação, André Luiz adormece e, em desdobramento espiritual (sonho), viaja num barco até uma esfera superior onde reencontra sua mãe. Que ensinamento profundo ela lhe dá sobre o valor do tempo e do bônus-hora?',
  'Que o bônus-hora serve apenas para comprar roupas luxuosas e banquetes nos jardins da colônia.',
  'Que a compensação exterior da hora pertence à administração humana ou espiritual, mas o conteúdo sagrado da hora pertence a Deus, valendo pela qualidade de amor e renúncia que nela depositamos.',
  'Que os Espíritos das esferas superiores não trabalham e vivem em repouso contemplativo eterno.',
  'Que André deveria recusar qualquer pagamento de bônus-hora para não ser taxado pela Governadoria.',
  'Que uma hora de sono nas Câmaras de Retificação vale mais do que dez horas de enfermagem.',
  'B',
  'A mãe de André ensina-lhe a diferença entre a remuneração administrativa (o bônus-hora) e a essência espiritual do serviço: o conteúdo íntimo de cada hora pertence a Deus e edifica a nossa própria alma.',
  'Nosso Lar — Cap. 36 ("O Sonho")',
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
  337,
  'nosso_lar',
  'No Capítulo 37 ("A Preleção da Ministra"), a venerável Ministra Veneranda visita as Câmaras de Retificação e profere uma luminosa palestra aos servidores e enfermos recuperados. Qual é o tema central de sua preleção?',
  'As regras de arquitetura gótica aplicadas aos edifícios da Governadoria.',
  'A história das navegações portuguesas no século XVI.',
  'O poder criador do pensamento como força viva e matéria plástica, e a responsabilidade de cada espírito como pai e nutridor das criações mentais que gera.',
  'A tabela de conversão financeira entre o bônus-hora e o cruzeiro terrestre.',
  'A classificação botânica das árvores frutíferas do Bosque das Águas.',
  'C',
  'Veneranda disserta magistralmente sobre a força viva do pensamento: "Pensar é criar", advertindo que cada mente vive na atmosfera das formas-pensamento que projeta e sustenta.',
  'Nosso Lar — Cap. 37 ("A Preleção da Ministra")',
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
  338,
  'nosso_lar',
  'No Capítulo 38 ("O Caso Tobias"), André Luiz e Narcisa visitam a residência de Tobias e surpreendem-se ao ver que ele convive em perfeita harmonia e pureza fraterna com duas mulheres que foram suas esposas sucessivas na Terra. Quem são elas e qual é a situação de cada uma?',
  'Clara e Priscila, ambas irmãs consanguíneas de André Luiz recém-saídas do Umbral.',
  'Iolanda e Judite, irmãs de Lísias que se casaram simultaneamente com Tobias.',
  'Zélia e Maria da Luz, que desencarnaram juntas num acidente no Rio de Janeiro.',
  'Hilda (sua primeira esposa e verdadeira alma afim) e Luciana (sua segunda esposa após a viuvez, acolhida como irmã querida e já noiva de outro espírito com quem reencarnará em São Paulo).',
  'Nemésia e Paulina, duas médicas do Ministério da Regeneração que disputam a herança de Tobias.',
  'D',
  'Quando Luciana desencarnou viúva, Hilda (primeira esposa e alma gêmea de Tobias) pediu ao marido que a recebessem no lar com amor fraterno até que Luciana se restabelecesse e preparasse seu novo consórcio reencarnatório.',
  'Nosso Lar — Cap. 38 ("O Caso Tobias")',
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
  339,
  'nosso_lar',
  'No Capítulo 39 ("Ouvindo a Senhora Laura"), ao comentar o nobre exemplo de Hilda e Tobias, que venceram o ciúme humano pela compreensão espiritual, Dona Laura enuncia um preceito fundamental sobre a verdadeira caridade. Qual é esse preceito?',
  'A caridade consiste apenas em dar esmolas materiais aos mendigos das estradas.',
  'O ciúme apaixonado é a prova mais elevada do amor espiritual entre as almas.',
  'Ninguém deve acolher no lar um antigo companheiro de lutas terrestres.',
  'A fraternidade só é possível entre espíritos que nunca conviveram na crosta da Terra.',
  '"Toda caridade, para ser divina, precisa apoiar-se na fraternidade", superando o egoísmo possessivo do amor puramente humano.',
  'E',
  'Dona Laura esclarece a André Luiz que o gesto de Hilda não foi mera tolerância social, mas amor fraternal legítimo, pois "toda caridade, para ser divina, precisa apoiar-se na fraternidade".',
  'Nosso Lar — Cap. 39 ("Ouvindo a Senhora Laura")',
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
  340,
  'nosso_lar',
  'No Capítulo 40 ("Quem Semeia Colherá"), ao visitar o Pavilhão 7 (departamento feminino dirigido pela cooperadora Nemésia), André Luiz reconhece em lágrimas uma enferma recolhida do Umbral e pede para assumi-la como irmã do coração. Quem era essa mulher?',
  'Elisa, antiga serva doméstica da casa dos pais de André, cuja mocidade e pureza ele próprio havia arruinado na juventude irresponsável.',
  'Sua tia paterna que lhe havia deixado uma grande biblioteca médica em herança.',
  'A diretora do colégio interno onde André estudara as primeiras letras.',
  'Uma antiga paciente milionária que lhe pagara o dobro pelos serviços cirúrgicos.',
  'A esposa do Dr. Henrique de Luna, que desencarnara durante uma epidemia.',
  'A',
  'No Capítulo "Quem Semeia Colherá", André Luiz depara-se com Elisa, a humilde empregada doméstica que ele seduzira e abandonara na mocidade, levando-a ao infortúnio; arrependido, compromete-se a ampará-la como irmã querida.',
  'Nosso Lar — Cap. 40 ("Quem Semeia Colherá")',
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
  341,
  'nosso_lar',
  'No Capítulo 41 ("Convocados à Luta"), em setembro de 1939, os clarins de alerta dos espíritos vigilantes soam em "Nosso Lar" anunciando o início efetivo da Segunda Guerra Mundial (invasão da Polônia). Qual é a tônica dos pronunciamentos do Ministro Esperidião e do Governador aos habitantes da colônia?',
  'Pânico generalizado e ordem para evacuar imediatamente a colônia rumo ao planeta Marte.',
  'Serenidade firme, proibição de comentários ociosos ou alarmistas e intensificação do trabalho, pois ''a aflição não constrói, a ansiedade não edifica''.',
  'Neutralidade indiferente, proibindo qualquer envio de enfermeiros para socorrer as vítimas da guerra.',
  'Formação de exércitos armados para destruir fisicamente os arsenais europeus.',
  'Suspensão de todas as atividades hospitalares para realização de debates políticos nas praças.',
  'B',
  'Diante da eclosão da Segunda Guerra Mundial, o Ministro Esperidião e o Governador exortam a colônia à paz ativa, à disciplina mental e ao trabalho redobrado, lembrando que "a aflição não constrói, a ansiedade não edifica".',
  'Nosso Lar — Cap. 41 ("Convocados à Luta")',
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
  342,
  'nosso_lar',
  'No Capítulo 42 ("A Palavra do Governador"), durante o culto dominical no Ministério da Regeneração para preparar os servidores contra o medo ("um dos piores inimigos da criatura"), o Governador lê uma passagem de Jesus no Evangelho de Mateus (24:6) e anuncia uma grande mobilização. Qual texto ele lê e quantos servidores são convocados para a defesa vibratória?',
  'Lê "Bem-aventurados os pobres de espírito" e convoca 500 médicos.',
  'Lê "Amai os vossos inimigos" e convoca 1.000 músicos da Elevação.',
  'Lê "E ouvireis de guerras e de rumores de guerras; olhai, não vos assusteis, porque é mister que isso tudo aconteça, mas ainda não é o fim" e convoca 30.000 servidores para a defesa nas fronteiras vibratórias.',
  'Lê "Multiplicai os pães e os peixes" e convoca 100.000 agricultores.',
  'Lê "Pai, perdoa-lhes porque não sabem o que fazem" e fecha as portas da colônia por dez anos.',
  'C',
  'O Governador medita sobre Mateus 24:6 (''olhai, não vos assusteis...'') para imunizar os corações contra o medo e mobiliza 30.000 servidores de Nosso Lar para conter nas fronteiras vibratórias as nuvens de miasmas e espíritos dementados pela guerra.',
  'Nosso Lar — Cap. 42 ("A Palavra do Governador")',
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
  343,
  'nosso_lar',
  'No Capítulo 43 ("Em Conversação"), o Ministro Benevenuto relata na casa de Laura suas impressões ao regressar de uma expedição de socorro aos campos de batalha na Polônia invadida. Como os soldados agressores recém-desencarnados reagiam à aproximação dos socorristas espirituais iluminados?',
  'Ajoelhavam-se imediatamente pedindo batismo e perdão pelos ataques aéreos.',
  'Ignoravam os socorristas por completo, pois ficavam cegos e surdos durante cem anos.',
  'Ofereciam medalhas militares aos mensageiros em troca de armamentos novos.',
  'Fugiam espavoridos dos missionários da luz, gritando que eles eram ''fantasmas da cruz'' que lhes queriam roubar a coragem guerreira.',
  'Confundiam os socorristas com generais de seu próprio exército e prestavam-lhes continência.',
  'D',
  'Benevenuto narra que muitos jovens militares fanatizados pelo ódio continuavam combatendo após a morte do corpo e fugiam aterrorizados dos mensageiros de Jesus, chamando-os de ''fantasmas da cruz''.',
  'Nosso Lar — Cap. 43 ("Em Conversação")',
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
  344,
  'nosso_lar',
  'No Capítulo 44 ("As Trevas"), continuando a palestra no lar de Dona Laura, o Ministro Benevenuto estabelece a diferença entre o "Umbral" e as "Trevas" propriamente ditas. O que caracteriza as zonas chamadas de "Trevas"?',
  'São jardins de repouso onde apenas falta a iluminação elétrica durante a noite.',
  'São exatamente a mesma região que o Bosque das Águas, mudando apenas o nome conforme a estação.',
  'São colônias educativas dirigidas pelos Ministros da Elevação para treinar astrônomos.',
  'São regiões desabitadas onde nenhum espírito jamais penetrou desde a criação da Terra.',
  'Enquanto o Umbral é zona de expurgo e transição, as Trevas são regiões abismais mais profundas onde se agrupam inteligências poderosas mas pervertidas, regidas pela lei de gravitação espiritual (''o abismo atrai o abismo'').',
  'E',
  'Benevenuto esclarece que, abaixo do Umbral, estendem-se as Trevas — furnas e abismos onde espíritos rebeldes e calculistas organizam redutos de dominação e crueldade, atraídos pelo próprio peso específico de suas consciências culpadas.',
  'Nosso Lar — Cap. 44 ("As Trevas")',
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
  345,
  'nosso_lar',
  'No Capítulo 45 ("No Campo da Música"), André Luiz realiza um passeio recreativo e educativo ao Campo da Música (no Ministério da Elevação) em companhia de Lísias, Polidoro, Estácio e Lascínia. Como se distribuem as harmonias musicais nesse vasto departamento?',
  'Nas extremidades ouve-se a música alegre e ligeira que reconforta os espíritos comuns, enquanto no centro vibram as sublimes sinfonias da música universal e divina, que inspiram a alma às mais altas construções do Espírito.',
  'Apenas marchas fúnebres são permitidas em todo o território da colônia para manter a seriedade.',
  'A música é produzida exclusivamente por máquinas automáticas sem participação de artistas espirituais.',
  'É proibido o acesso de compositores terrestres desencarnados às escolas do Ministério da Elevação.',
  'O som é audível apenas para os 72 Ministros, permanecendo o restante do público em silêncio absoluto.',
  'A',
  'No Campo da Música, as melodias graduam-se conforme a evolução espiritual: nas bordas há músicas suaves e populares para recreação sadia, e, à medida que se avança para o centro, ouvem-se as harmonias universais e divinas.',
  'Nosso Lar — Cap. 45 ("No Campo da Música")',
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
  346,
  'nosso_lar',
  'No Capítulo 46 ("Sacrifício de Mulher"), em setembro de 1940 (quando André completava um ano de trabalho), sua mãe visita-o para despedir-se antes de reencarnar na Terra. Qual é a missão sacrificial que ela vai cumprir no plano físico e que frase sábia ela pronuncia sobre o livre-arbítrio?',
  'Vai reencarnar como rainha na Europa, dizendo que ''o destino é imposto por Deus sem apelação''.',
  'Vai reencarnar como esposa de seu antigo marido Laerte (já reencarnado) e receber como filhas as duas mulheres que o perseguiam nas sombras, ensinando que ''Deus criou o livre-arbítrio, nós criamos a fatalidade''.',
  'Vai reencarnar em um convento isolado no Tibete para nunca mais encontrar os familiares.',
  'Vai reencarnar como filha de André Luiz quando este voltar ao mundo corporal.',
  'Vai reencarnar apenas por três meses para cumprir uma promessa feita a Clarêncio.',
  'B',
  'Num gesto supremo de amor redentor, a mãe de André abre mão das alegrias das esferas superiores para reencarnar ao lado de Laerte e acolher como próprias filhas as duas antigas obsidiadoras dele, afirmando: "Deus criou o livre-arbítrio, nós criamos a fatalidade."',
  'Nosso Lar — Cap. 46 ("Sacrifício de Mulher")',
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
  347,
  'nosso_lar',
  'No Capítulo 47 ("A Volta de Laura"), a Senhora Laura também anuncia seu retorno próximo à carne (dentro de dois dias) para reencontrar o esposo Ricardo já reencarnado no Brasil. Durante o jantar de despedida com o Ministro Genésio, quem chega recém-desencarnada da Terra, tendo atravessado o Umbral em poucas horas graças à sua fé e paciência nas dores?',
  'Zélia, esposa terrestre de André Luiz.',
  'Maria da Luz, ex-amiga de Eloísa.',
  'Teresa, filha de Dona Laura e mãe de Eloísa, que desencarnara santificada pelo sofrimento resignado.',
  'A Princesa Isabel, antiga redentora dos escravos.',
  'A irmã Luísa, que concluíra sua tarefa no Rio de Janeiro.',
  'C',
  'Teresa, mãe de Eloísa e filha de Laura, desencarna após longo martírio doméstico suportado com prece e resignação; por isso, atravessa a zona umbralina em poucas horas e chega a Nosso Lar a tempo de abraçar a mãe antes que esta reencarne.',
  'Nosso Lar — Cap. 47 ("A Volta de Laura")',
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
  348,
  'nosso_lar',
  'No Capítulo 48 ("Culto Familiar"), às zero hora e quarenta minutos, Clarêncio preside a última reunião no lar de Laura antes de sua reencarnação, trazendo em desdobramento pelo sono o espírito de Ricardo (já reencarnado como menino na Terra), que fala de dentro de um globo cristalino isolante. Que pedido impressionante Ricardo faz aos amigos espirituais?',
  'Que os Ministros o ajudem a ganhar na loteria para não precisar trabalhar na juventude.',
  'Que o retirem imediatamente do corpo físico porque ele se arrependera de reencarnar.',
  'Que enviem castigos severos contra os professores de sua escola terrestre.',
  '"Roguem ao Senhor para que eu nunca disponha de facilidades na Terra", pedindo trabalho e luta para não falir em sua missão redentora.',
  'Que apaguem para sempre o nome de sua família dos registros de Nosso Lar.',
  'D',
  'Consciente em espírito dos perigos da ociosidade e da tentação no mundo, Ricardo suplica de dentro do globo protetor: "Roguem ao Senhor para que eu nunca disponha de facilidades na Terra!..." Nesse mesmo culto, Clarêncio concede a André uma semana de licença para visitar sua família na crosta.',
  'Nosso Lar — Cap. 48 ("Culto Familiar")',
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
  349,
  'nosso_lar',
  'No Capítulo 49 ("Regressando à Casa"), usando sua licença de uma semana, André Luiz vai ao Rio de Janeiro visitar seu antigo lar terrestre e encontra um quadro inesperado. O que acontecera com sua esposa Zélia e qual é a atitude de André diante da situação?',
  'Zélia havia entrado para um mosteiro de carmelitas; André revolta-se e tenta demovê-la.',
  'Zélia havia mudado para a Europa com os filhos; André desiste de procurá-la e volta a Nosso Lar.',
  'Zélia já havia desencarnado e estava no Umbral; André permanece chorando no cemitério.',
  'Zélia enriquecera no comércio e expulsara os três filhos de casa; André passa a obsediá-la.',
  'Zélia casara-se novamente com um homem digno, o Dr. Ernesto, que agora jazia gravemente enfermo (com pneumonia e hipertensão) e cercado de sombras; vencendo o ciúme e o egoísmo, André decide ficar para socorrer o segundo marido de Zélia.',
  'E',
  'Ao encontrar Zélia casada com o bondoso Dr. Ernesto, que agonizava enfermo sob o assédio de entidades inferiores, André Luiz supera o choque emocional do egoísmo humano e resolve lutar pela recuperação daquele que amparava sua antiga companheira.',
  'Nosso Lar — Cap. 49 ("Regressando à Casa")',
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
  350,
  'nosso_lar',
  'No Capítulo 50 ("Cidadão de ''Nosso Lar''"), após orar pedindo socorro para salvar a vida do Dr. Ernesto, quem vem de "Nosso Lar" ajudar André Luiz, como eles curam o doente e que título André recebe de Clarêncio ao regressar à colônia?',
  'A enfermeira Narcisa vem auxiliá-lo (extraindo com 8 servidores vegetais substância medicamentosa de mangueira e eucalipto para curar Ernesto); no regresso, André volita pela primeira vez e é proclamado por Clarêncio ''cidadão de Nosso Lar''.',
  'O Governador comparece pessoalmente, desencarna Ernesto e nomeia André Ministro da Regeneração.',
  'Lísias aplica eutanásia em Ernesto para aliviar o sofrimento de Zélia e leva André de aeróbus.',
  'Henrique de Luna opera Ernesto com bisturis físicos e concede a André o título de médico-chefe.',
  'A Ministra Veneranda transporta toda a família de Zélia em definitivo para o Bosque das Águas.',
  'A',
  'Narcisa atende à prece de André e, com o concurso de oito servidores do reino vegetal, manipula elementos curativos da mangueira e do eucalipto, restabelecendo o Dr. Ernesto e afastando os obsessores. Ao regressar feliz, André conquista a faculdade de volitar e recebe de Clarêncio o título de ''cidadão de Nosso Lar''.',
  'Nosso Lar — Cap. 50 ("Cidadão de ''Nosso Lar''")',
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
