export interface ExtraQuestionSeed {
  code: number;
  book: "nosso_lar" | "os_mensageiros";
  statement: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e: string;
  correct_option: "A" | "B" | "C" | "D" | "E";
  explanation: string;
  reference: string;
  difficulty: "facil" | "medio" | "dificil";
  active: boolean;
}

export const EXTRA_NOSSOLAR_MENSAGEIROS_QUESTIONS: ExtraQuestionSeed[] = [
  {
    code: 701,
    book: "nosso_lar",
    statement:
      'No Capítulo 1 de "Nosso Lar" ("Nas Zonas Inferiores"), antes de saber que já havia desencarnado, qual era a última lembrança clínica que André Luiz guardava de sua enfermidade física na Terra e como ele procurava saciar a fome e a sede nas regiões sombrias?',
    option_a:
      "Recordava a operação cirúrgica de oclusão intestinal e o quarto do hospital, passando depois a sorver o sumo de ervas rasteiras e a água lodosa dos charcos para mitigar a fome e a sede.",
    option_b:
      "Lembrava-se de um acidente automobilístico nas montanhas e alimentava-se de frutos luminosos colhidos em pomares celestes.",
    option_c:
      "Recordava uma viagem marítima à Europa e saciava a sede em fontes cristalinas guardadas por sentinelas do Ministério do Auxílio.",
    option_d:
      "Lembrava-se de haver falecido em avançada velhice no próprio consultório, sem jamais experimentar sensações de fome ou sede após a morte.",
    option_e:
      "Recordava uma febre tifoide contraída na infância e recebia diariamente cestas de pães enviadas pelos familiares encarnados.",
    correct_option: "A",
    explanation:
      'No Capítulo 1 ("Nas Zonas Inferiores"), André Luiz relata que guardava a lembrança da radiografia, do diagnóstico de oclusão intestinal e da intervenção cirúrgica, e que nas zonas inferiores chegava a chupar talos de ervas escassas e beber água de charcos lamacentos.',
    reference: 'Nosso Lar — Cap. 1 ("Nas Zonas Inferiores")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 702,
    book: "nosso_lar",
    statement:
      'No Capítulo 2 ("Clarêncio"), quando o ancião de túnica alva se aproxima de André Luiz com dois serventes carregando uma padiola, como o benfeitor responde à queixa de André de que chorava porque sofria?',
    option_a:
      "Diz que o sofrimento nas zonas inferiores é eterno e que ninguém jamais deveria derramar lágrimas.",
    option_b:
      'Observa com bondade: "Há muita diferença. Choravam os maus espíritos que nos rodeavam, unicamente porque sofriam; você, porém, começou a chorar, pensando em Deus", fazendo cessar o coro de gargalhadas com um simples gesto.',
    option_c:
      "Afirma que André Luiz estava sendo premiado apenas por possuir pergaminhos universitários de medicina terrestre.",
    option_d:
      "Declara que a prece não possui eficácia fora dos templos de pedra construídos na crosta planetária.",
    option_e:
      "Repreende os dois serventes e ordena que André caminhe a pé durante trinta dias até os portões da colônia.",
    correct_option: "B",
    explanation:
      'No Capítulo 2 ("Clarêncio"), o venerável Ministro destaca a diferença essencial entre o pranto de revolta dos espíritos perturbados e o choro humilde de quem se lembra do Criador em sincero arrependimento.',
    reference: 'Nosso Lar — Cap. 2 ("Clarêncio")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 703,
    book: "nosso_lar",
    statement:
      'No Capítulo 3 ("A Oração Coletiva"), ao despertar no apartamento alvíssimo do Parque Hospitalar, que bebida reconfortante é servida a André Luiz depois do banho morno e que sensação imediata ela lhe proporciona?',
    option_a:
      "Um cálice de vinho fermentado que lhe provoca imediata sonolência e amnésia temporária.",
    option_b:
      "Uma infusão amarga de raízes umbralinas destinada a provocar febre depurativa.",
    option_c:
      "Uma taça de caldo reconfortante, de sabor delicioso e desconhecido na Terra, cujos princípios nutritivos e curativos lhe infundem vigor novo em todo o organismo perispiritual.",
    option_d:
      "Um copo de leite animal trazido diretamente das fazendas agropecuárias do Rio de Janeiro.",
    option_e:
      "Apenas vapor de água fervente inalado através de tubos metálicos ligados à parede.",
    correct_option: "C",
    explanation:
      'No Capítulo 3 ("A Oração Coletiva"), após o banho tépido e a troca de vestes, o servente oferece a André Luiz um caldo reconfortante de sabor inexprimível, que lhe restaura prontamente as forças abatidas.',
    reference: 'Nosso Lar — Cap. 3 ("A Oração Coletiva")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 704,
    book: "nosso_lar",
    statement:
      'No Capítulo 4 ("O Médico Espiritual"), durante o exame clínico sem aparelhos, que instrumentos e recursos o médico Henrique de Luna utiliza para localizar os pontos obscuros no intestino de André Luiz e realizar o curativo?',
    option_a:
      "Um aparelho pesado de raios X importado da Terra e bisturis de aço inoxidável.",
    option_b:
      "Pêndulos de cristal de rocha e emplastros de barro aquecido colhido nas margens do Rio Azul.",
    option_c:
      "Fórmulas cabalísticas pronunciadas em voz alta sem tocar o corpo espiritual do paciente.",
    option_d:
      "Seus próprios olhos dotados de poder magnético autoscópico para ver o interior dos órgãos, aplicando em seguida gaze embebida em substância perfumada sobre a zona intestinal enferma.",
    option_e:
      "Choques elétricos de alta voltagem que queimam superficialmente a epiderme perispiritual.",
    correct_option: "D",
    explanation:
      'No Capítulo 4 ("O Médico Espiritual"), Henrique de Luna examina o interior do abdômen de André Luiz apenas com o poder penetrante de sua visão espiritual e aplica-lhe gaze medicamentosa perfumada sobre a região operada.',
    reference: 'Nosso Lar — Cap. 4 ("O Médico Espiritual")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 705,
    book: "nosso_lar",
    statement:
      'No Capítulo 5 ("Recebendo Assistência"), como o enfermeiro visitador Lísias explica a André Luiz o motivo pelo qual os suicidas diretos ou indiretos continuam sentindo dores físicas intensas após a perda do corpo carnal?',
    option_a:
      "Porque o cadáver sepultado na Terra continua enviando impulsos nervosos elétricos através da atmosfera.",
    option_b:
      "Porque os Ministros da Regeneração impõem dores artificiais como castigo disciplinar obrigatório.",
    option_c:
      "Porque a alma perde definitivamente o perispírito ao desencarnar, ficando exposta ao vácuo cósmico.",
    option_d:
      "Porque os vermes do túmulo sobem fisicamente até os pavilhões hospitalares das colônias espirituais.",
    option_e:
      "Porque o corpo físico é apenas a vestimenta que recebe os fluidos vitais, e quando a morte ocorre antes de esgotado o combustível orgânico previsto, os elementos vitais remanescentes aderem ao corpo espiritual, gerando torturante sensação de dor e decomposição.",
    correct_option: "E",
    explanation:
      'No Capítulo 5 ("Recebendo Assistência"), Lísias esclarece que, quando o homem abrevia a vida física pelo suicídio consciente ou inconsciente, a sobrecarga de forças vitais não esgotadas permanece aderida ao perispírito, produzindo terríveis padecimentos.',
    reference: 'Nosso Lar — Cap. 5 ("Recebendo Assistência")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 706,
    book: "nosso_lar",
    statement:
      'No Capítulo 6 ("Precioso Aviso"), antes de retirar-se do quarto hospitalar, que objeto o Ministro Clarêncio entrega a André Luiz para assinalar sua passagem da condição de enfermo acamado à de hóspede em recuperação?',
    option_a:
      "O cartão de identificação pessoal que lhe facultava sair do leito e caminhar pelos jardins e alamedas do Parque Hospitalar.",
    option_b:
      "Uma chave de ouro maciço que abria todos os gabinetes secretos da Governadoria.",
    option_c:
      "Um diploma honorário de diretor clínico das Câmaras de Retificação.",
    option_d:
      "Um passaporte definitivo para regressar imediatamente ao Rio de Janeiro e morar com a família.",
    option_e:
      "Uma bolsa contendo dez mil bônus-hora de adiantamento salarial.",
    correct_option: "A",
    explanation:
      'No Capítulo 6 ("Precioso Aviso"), Clarêncio entrega a André Luiz o cartão de identificação que lhe permite deixar o leito e passear livremente pelos jardins do Parque Hospitalar em companhia de Lísias.',
    reference: 'Nosso Lar — Cap. 6 ("Precioso Aviso")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 707,
    book: "nosso_lar",
    statement:
      'No Capítulo 7 ("Explicações de Lísias"), ao passearem pelas alamedas floridas do Parque Hospitalar, Lísias comenta a situação da mãe desencarnada de André Luiz. Por que razão ela não residia em "Nosso Lar"?',
    option_a:
      "Porque ainda se encontrava retida nas furnas mais densas do Umbral em companhia do esposo Laerte.",
    option_b:
      "Porque já habitava uma esfera espiritual superior, muito mais elevada que Nosso Lar, onde trabalhava abnegadamente em favor dos familiares.",
    option_c:
      "Porque já havia reencarnado havia vinte anos em uma cidade do continente europeu.",
    option_d:
      "Porque fora transferida compulsoriamente para outro planeta do sistema solar.",
    option_e:
      "Porque recusara cumprir as leis de trabalho estabelecidas pelo Governador da colônia.",
    correct_option: "B",
    explanation:
      'No Capítulo 7 ("Explicações de Lísias"), Lísias informa a André Luiz que sua genitora já conquistara direito de residência em esfera mais alta que Nosso Lar, mas acompanhava de lá os passos do filho e viria visitá-lo oportunamente.',
    reference: 'Nosso Lar — Cap. 7 ("Explicações de Lísias")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 708,
    book: "nosso_lar",
    statement:
      'No Capítulo 8 ("Organização de Serviços"), Lísias narra a fundação histórica de "Nosso Lar" por portugueses ilustres desencarnados no Brasil no século XVI. Qual é o único Ministério em que os recém-chegados podem manter relações com a família terrena antes de obterem credenciais superiores?',
    option_a:
      "O Ministério da União Divina, situado no bosque mais silencioso da colônia.",
    option_b:
      "O Ministério da Elevação, dedicado exclusivamente às artes e à música celestial.",
    option_c:
      "O Ministério da Comunicação, através do qual se processam os serviços ordenados de intercâmbio e notícias com a crosta e o Umbral, além do atendimento inicial na Regeneração.",
    option_d:
      "O Departamento de Construção Mecânica da Governadoria Central.",
    option_e:
      "O Arquivo Histórico de Alvorada Nova, vedado aos médicos desencarnados.",
    correct_option: "C",
    explanation:
      'No Capítulo 8 ("Organização de Serviços"), Lísias detalha que os Ministérios são mais rigorosamente separados segundo a hierarquia evolutiva, cabendo à Regeneração, ao Auxílio e à Comunicação os contatos mais próximos com as dores e famílias da Terra.',
    reference: 'Nosso Lar — Cap. 8 ("Organização de Serviços")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 709,
    book: "nosso_lar",
    statement:
      'No Capítulo 9 ("Problema de Alimentação"), Lísias explica que em "Nosso Lar" apenas dois Ministérios ainda mantêm serviços maiores de fornecimento de caldos, sucos e frutas concentradas, enquanto os demais se nutrem quase só de fluidos e inalação. Quais são esses dois Ministérios mais próximos da feição terrestre?',
    option_a:
      "Os Ministérios da União Divina e da Elevação.",
    option_b:
      "Os Ministérios da Elevação e do Esclarecimento.",
    option_c:
      "Os Ministérios da União Divina e da Comunicação.",
    option_d:
      "Os Ministérios da Regeneração e do Auxílio, por abrigarem grande número de enfermos e espíritos ainda muito ligados aos hábitos da crosta.",
    option_e:
      "A Governadoria Central e o Conselho dos Setenta e Dois Ministros.",
    correct_option: "D",
    explanation:
      'No Capítulo 9 ("Problema de Alimentação"), Lísias esclarece que na Governadoria e na União Divina a alimentação é quase exclusivamente fluídica, restando maiores serviços de caldos e sucos nos Ministérios da Regeneração e do Auxílio devido às necessidades dos recém-chegados.',
    reference: 'Nosso Lar — Cap. 9 ("Problema de Alimentação")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 710,
    book: "nosso_lar",
    statement:
      'No Capítulo 10 ("No Bosque das Águas"), ao viajar pela primeira vez no "aeróbus" com Lísias, que características desse veículo coletivo de "Nosso Lar" surpreendem André Luiz?',
    option_a:
      "É puxado por doze cavalos brancos alados e faz enorme estrondo metálico pelas avenidas.",
    option_b:
      "Move-se sobre trilhos de ferro fumegantes alimentados a carvão mineral.",
    option_c:
      "É uma embarcação a remo que navega exclusivamente pelo leito subterrâneo do Rio Azul.",
    option_d:
      "Só pode transportar três passageiros por viagem devido ao peso específico dos espíritos.",
    option_e:
      "É um grande carro suspenso a cerca de cinco metros do solo, preso a antenas invisíveis na torre da Governadoria, construído de material flexível e silencioso, capaz de atingir grande velocidade sem solavancos.",
    correct_option: "E",
    explanation:
      'No Capítulo 10 ("No Bosque das Águas"), André Luiz descreve o aeróbus como um veículo longo e confortável, ligado a fios invisíveis de forças eletromagnéticas, deslizando silenciosamente a cerca de cinco metros de altura.',
    reference: 'Nosso Lar — Cap. 10 ("No Bosque das Águas")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 711,
    book: "nosso_lar",
    statement:
      'No Capítulo 11 ("Notícias do Plano"), passeando às margens do Rio Azul sob as árvores frondosas, Lísias fala a André Luiz sobre a divisão das horas e do clima em "Nosso Lar". Como se regulam o dia e a noite na colônia?',
    option_a:
      "Seguem o mesmo ritmo de vinte e quatro horas da geografia terrestre próxima, com claridade solar e noite estrelada, embora sem os rigores extremos das intempéries da crosta.",
    option_b:
      "Não existe noite em Nosso Lar, permanecendo o Sol imóvel no zênite durante toda a eternidade.",
    option_c:
      "A colônia permanece mergulhada em crepúsculo perpétuo, iluminada apenas por tochas de resina.",
    option_d:
      "Cada dia em Nosso Lar equivale a exatamente cem anos do calendário terrestre.",
    option_e:
      "A luz é ligada e desligada manualmente a cada seis meses pelos engenheiros do Esclarecimento.",
    correct_option: "A",
    explanation:
      'No Capítulo 11 ("Notícias do Plano"), Lísias explica que a colônia acompanha o quadro de horas da própria Terra (dividindo o tempo em 24 horas com dia e noite), por achar-se intimamente ligada às regiões brasileiras a que serve.',
    reference: 'Nosso Lar — Cap. 11 ("Notícias do Plano")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 712,
    book: "nosso_lar",
    statement:
      'No Capítulo 12 ("O Umbral"), Lísias explica como a administração de "Nosso Lar" mantém a segurança e as vias de acesso através da zona umbralina. Que imagem ele utiliza para descrever a atuação das caravanas de socorro nas regiões inferiores?',
    option_a:
      "Compara as caravanas a exércitos conquistadores que destroem todas as cavernas com explosivos.",
    option_b:
      "Explica que os Ministérios do Auxílio e da Regeneração mantêm verdadeiras estradas magnéticas de serviço (como picadas abertas no mato espesso) e postos avançados para socorrer os que se fazem dignos de assistência.",
    option_c:
      "Afirma que nenhum trabalhador de Nosso Lar jamais desce ao Umbral por falta de meios de transporte.",
    option_d:
      "Diz que os espíritos sofredores precisam construir barcos de madeira para atravessar um oceano de fogo.",
    option_e:
      "Relata que o Umbral é inteiramente cercado por muros de concreto construídos pelos encarnados.",
    correct_option: "B",
    explanation:
      'No Capítulo 12 ("O Umbral"), Lísias esclarece que no seio da névoa espessa do Umbral existem caminhos regulares traçados pelas caravanas fraternas que ligam a colônia à crosta terrestre e aos postos de socorro.',
    reference: 'Nosso Lar — Cap. 12 ("O Umbral")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 713,
    book: "nosso_lar",
    statement:
      'No Capítulo 13 ("No Gabinete do Ministro"), além da mãe que possuía apenas 304 bônus-hora, André Luiz vê Clarêncio atender um antigo sacerdote desencarnado que exigia a entrada imediata de uma irmã ainda retida nas zonas inferiores. Qual é a orientação justa de Clarêncio a esse religioso?',
    option_a:
      "Concede imediatamente a transferência da irmã sem exigir qualquer adaptação hospitalar.",
    option_b:
      "Expulsa o ex-sacerdote da colônia por ter pertencido a uma igreja terrestre.",
    option_c:
      "Mostra-lhe com bondade que a irmã ainda não possuía condições vibratórias para suportar a luz de Nosso Lar, mas convida-o a ingressar pessoalmente nos serviços de socorro no Umbral para ajudá-la a renovar-se.",
    option_d:
      "Ordena que o religioso pague cinquenta mil moedas romanas à tesouraria da Governadoria.",
    option_e:
      "Informa que os laços de consanguinidade são proibidos de receber qualquer atenção no Ministério do Auxílio.",
    correct_option: "C",
    explanation:
      'No Capítulo 13 ("No Gabinete do Ministro"), Clarêncio ensina que os títulos religiosos da Terra não alteram a lei de afinidade vibratória, convidando os solicitantes ao esforço próprio nos serviços de assistência.',
    reference: 'Nosso Lar — Cap. 13 ("No Gabinete do Ministro")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 714,
    book: "nosso_lar",
    statement:
      'No Capítulo 14 ("Elucidações de Clarêncio"), por que o Ministro Clarêncio pondera que André Luiz ainda não estava apto a exercer imediatamente a medicina em "Nosso Lar", apesar de sua boa vontade inicial?',
    option_a:
      "Porque em Nosso Lar não existem doentes nem hospitais em nenhum dos seis Ministérios.",
    option_b:
      "Porque a medicina espiritual exige que o candidato tenha desencarnado com mais de oitenta anos de idade.",
    option_c:
      "Porque o idioma falado pelos médicos da colônia é o grego arcaico, desconhecido por André.",
    option_d:
      "Porque na Terra a patologia se circunscrevia ao campo físico, enquanto no plano espiritual é indispensável estudar a patologia da alma, conhecer a fundo o perispírito como centro das forças celulares e aprender primeiro a disciplina da humildade.",
    option_e:
      "Porque apenas os espíritos que nunca erraram em nenhuma encarnação podem entrar nas enfermarias.",
    correct_option: "D",
    explanation:
      'No Capítulo 14 ("Elucidações de Clarêncio"), o Ministro explica a André que a ciência médica terrestre observa apenas a superfície somática, sendo necessário longo estágio de observação e humildade para lidar com as matrizes perispirituais da alma.',
    reference: 'Nosso Lar — Cap. 14 ("Elucidações de Clarêncio")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 715,
    book: "nosso_lar",
    statement:
      'No Capítulo 15 ("A Visita Materna"), durante o encontro no gabinete particular de Clarêncio, que gesto simbólico e afetuoso a mãe de André Luiz realiza para confortar o filho enfermo?',
    option_a:
      "Entrega-lhe um cofre cheio de joias de família trazidas ocultamente do Rio de Janeiro.",
    option_b:
      "Promete-lhe que no dia seguinte o levará definitivamente para morar em sua esfera superior sem que ele precise trabalhar.",
    option_c:
      "Lê uma sentença judicial condenando Zélia e os filhos pelo esquecimento na Terra.",
    option_d:
      "Aplica-lhe uma anestesia profunda para que ele durma durante todo o ano de estágio.",
    option_e:
      "Acolhe a cabeça de André em seu regaço materno como nos tempos de criança, enxuga-lhe o pranto e fortalece-lhe o espírito com vibrações de ternura e coragem cristã.",
    correct_option: "E",
    explanation:
      'No Capítulo 15 ("A Visita Materna"), a genitora de André Luiz envolve-o nos braços com sublime carinho maternal, reanimando-lhe as forças morais para a jornada de regeneração pelo trabalho.',
    reference: 'Nosso Lar — Cap. 15 ("A Visita Materna")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 716,
    book: "nosso_lar",
    statement:
      'No Capítulo 16 ("Confidências"), além das notícias sobre o pai Laerte, o que a mãe de André Luiz lhe informa a respeito de suas duas irmãs consanguíneas, Clara e Priscila, que haviam desencarnado antes dele?',
    option_a:
      "Que ambas já haviam reencarnado na Terra havia cerca de cinco anos, retomando o aprendizado evolutivo.",
    option_b:
      "Que ambas exerciam o cargo de Ministras na União Divina ao lado de Veneranda.",
    option_c:
      "Que ambas permaneciam adormecidas nos pavilhões catalépticos de Campo da Paz.",
    option_d:
      "Que ambas trabalhavam como enfermeiras ao lado de Narcisa nas Câmaras de Retificação.",
    option_e:
      "Que ambas haviam sido exiladas para um planeta inferior devido ao orgulho familiar.",
    correct_option: "A",
    explanation:
      'No Capítulo 16 ("Confidências"), quando André pergunta pelas irmãs Clara e Priscila, sua mãe esclarece que ambas já haviam regressado à carne cerca de cinco anos antes para novas experiências redentoras.',
    reference: 'Nosso Lar — Cap. 16 ("Confidências")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 717,
    book: "nosso_lar",
    statement:
      'No Capítulo 17 ("Em Casa de Lísias"), ao chegar à residência de Dona Laura, André Luiz maravilha-se com a beleza do jardim doméstico e com as flores que exalavam perfume suave e musical. Como Dona Laura lhe dá as boas-vindas?',
    option_a:
      "Exigindo que ele apresente fiadores bancários antes de ocupar o quarto de hóspedes.",
    option_b:
      "Recebendo-o como a um filho espiritual muito querido, apresentando-o às filhas Iolanda e Judite e oferecendo-lhe o ambiente fraterno de seu lar para o período de estágio.",
    option_c:
      "Estabelecendo um contrato comercial de aluguel pago antecipadamente em bônus-hora.",
    option_d:
      "Determinando que ele permaneça trancado no sótão sem conversar com os visitantes da casa.",
    option_e:
      "Comunicando que ele só poderia permanecer ali por vinte e quatro horas.",
    correct_option: "B",
    explanation:
      'No Capítulo 17 ("Em Casa de Lísias"), a Senhora Laura acolhe André Luiz com generosa hospitalidade materna, integrando-o à convivência harmoniosa de sua família.',
    reference: 'Nosso Lar — Cap. 17 ("Em Casa de Lísias")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 718,
    book: "nosso_lar",
    statement:
      'No Capítulo 18 ("Amor, Alimento das Almas"), quem são os dois jovens visitantes que comparecem ao jantar na residência da Senhora Laura e qual é a relação deles com as filhas da anfitriã?',
    option_a:
      "Henrique de Luna e Tobias, que iam realizar uma inspeção sanitária no quarteirão.",
    option_b:
      "Genésio e Benevenuto, Ministros encarregados de fiscalizar o consumo de frutas na colônia.",
    option_c:
      "Polidoro e Estácio, noivos respectivos de Iolanda e Judite, que compartilhavam com a família o banquete espiritual de afeto, música e conversação edificante.",
    option_d:
      "Vicente e Acelino, colegas de André Luiz recém-matriculados no Ministério da Comunicação.",
    option_e:
      "Justino e Paulo, sentinelas armados das muralhas divisórias com o Umbral.",
    correct_option: "C",
    explanation:
      'No Capítulo 18 ("Amor, Alimento das Almas"), participam do jantar os jovens Polidoro e Estácio, noivos de Iolanda e Judite, num ambiente de pura alegria e comunhão espiritual.',
    reference: 'Nosso Lar — Cap. 18 ("Amor, Alimento das Almas")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 719,
    book: "nosso_lar",
    statement:
      'No Capítulo 19 ("A Jovem Desencarnada"), que conselho cheio de sabedoria a Senhora Laura transmite à neta Eloísa para ajudá-la a vencer o ciúme pelo casamento terrestre do ex-noivo Arnaldo com Maria da Luz?',
    option_a:
      "Que Eloísa peça permissão a Clarêncio para descer à Terra e perturbar a cerimônia de casamento.",
    option_b:
      "Que Eloísa tome uma poção do esquecimento no Ministério do Esclarecimento para apagar toda a memória.",
    option_c:
      "Que Eloísa processe Arnaldo nos tribunais da Governadoria por quebra de promessa conjugal.",
    option_d:
      "Que Eloísa substitua o amor egoísta pelo amor fraternal, perdoe os amigos encarnados e se prepare para ser um anjo tutelar de ambos, inclusive acolhendo-os ou preparando-se para o futuro reencontro espiritual.",
    option_e:
      "Que Eloísa se case imediatamente no dia seguinte com o primeiro habitante que encontrar na rua.",
    correct_option: "D",
    explanation:
      'No Capítulo 19 ("A Jovem Desencarnada"), Dona Laura exorta Eloísa a transformar a paixão possessiva em dedicação superior, trabalhando e orando pela felicidade de Arnaldo e Maria da Luz.',
    reference: 'Nosso Lar — Cap. 19 ("A Jovem Desencarnada")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 720,
    book: "nosso_lar",
    statement:
      'No Capítulo 20 ("Noções de Lar"), a Senhora Laura explica a André Luiz como funciona o banho e a vestimenta doméstica em "Nosso Lar". De onde provêm os tecidos utilizados pelos habitantes da colônia?',
    option_a:
      "São importados por materialização direta das fábricas têxteis do Rio de Janeiro e de São Paulo.",
    option_b:
      "Não existem tecidos na colônia, pois todos os espíritos vestem apenas túnicas feitas de folhas secas.",
    option_c:
      "São confeccionados exclusivamente com lã de carneiros criados nas cavernas do Umbral.",
    option_d:
      "São criados instantaneamente pela mente de cada recém-chegado sem necessidade de oficinas ou trabalho.",
    option_e:
      "São produzidos nas grandes oficinas de fiação e tecelagem da colônia a partir de fibras vegetais e elementos fluídicos manipulados por trabalhadores especializados, sendo adquiridos mediante bônus-hora.",
    correct_option: "E",
    explanation:
      'Nos Capítulos 17 a 22 de "Nosso Lar", esclarece-se que o vestuário e as utilidades domésticas resultam do trabalho organizado nas oficinas da colônia, sendo distribuídos conforme o esforço representado pelo bônus-hora.',
    reference: 'Nosso Lar — Cap. 20 ("Noções de Lar")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 721,
    book: "nosso_lar",
    statement:
      'No Capítulo 21 ("Continuando a palestra"), quando André Luiz pergunta por que a Senhora Laura não recuperou de uma só vez a memória de todas as suas encarnações anteriores, que explicação prudente ela lhe apresenta?',
    option_a:
      "Que a recordação total e brusca de culpas e tragédias remotas esmagaria o equilíbrio emotivo da alma, razão pela qual os magnetizadores do Esclarecimento graduam o despertar da memória conforme a resistência moral do espírito.",
    option_b:
      "Que os arquivos de memória anteriores a trezentos anos foram destruídos por um incêndio no Umbral.",
    option_c:
      "Que cada século adicional de memória custa exatamente cem mil bônus-hora pagos à vista.",
    option_d:
      "Que os espíritos femininos são proibidos pelas leis da colônia de conhecer o próprio passado.",
    option_e:
      "Que antes do século XVII nenhum habitante de Nosso Lar possuía individualidade própria.",
    correct_option: "A",
    explanation:
      'No Capítulo 21 ("Continuando a palestra"), Dona Laura explica que o desvendamento integral do passado exige maturidade espiritual, sob pena de o espírito sucumbir ao peso das lembranças dolorosas de erros pretéritos.',
    reference: 'Nosso Lar — Cap. 21 ("Continuando a palestra")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 722,
    book: "nosso_lar",
    statement:
      'No Capítulo 22 ("O Bônus-Hora"), segundo as explicações de Lísias a André Luiz, quantos bônus-hora de serviço básico pode ganhar diariamente o trabalhador comum que cumpre a jornada regular de oito horas, e em quanto essa remuneração pode aumentar nos serviços de sacrifício?',
    option_a:
      "Ganha apenas 1 bônus-hora por mês, sem possibilidade de acréscimo em nenhum Ministério.",
    option_b:
      "Ganha 8 bônus-hora por dia de trabalho normal (48 por semana), podendo a hora valer o dobro ou o triplo (até 16 ou 24 por dia) nas tarefas penosas de sacrifício e dedicação nas zonas inferiores ou nas Câmaras de Retificação.",
    option_c:
      "Ganha 1.000 bônus-hora por minuto de passeio recreativo nos jardins do Campo da Música.",
    option_d:
      "Recebe um salário fixo de 500 bônus-hora diários mesmo que permaneça ocioso nos Campos de Repouso.",
    option_e:
      "Apenas os 72 Ministros recebem bônus-hora, enquanto os demais servidores trabalham gratuitamente.",
    correct_option: "B",
    explanation:
      'No Capítulo 22 ("O Bônus-Hora"), Lísias detalha que a jornada regular é de 8 horas diárias, mas os serviços abnegados de regeneração, auxílio no Umbral e enfermagem difícil são remunerados em dobro ou em triplo.',
    reference: 'Nosso Lar — Cap. 22 ("O Bônus-Hora")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 723,
    book: "nosso_lar",
    statement:
      'No Capítulo 23 ("Saber Ouvir"), Dona Laura narra a André Luiz exemplos de recém-desencarnados que desciam à Terra sem preparo espiritual e regressavam em deplorável estado de perturbação. Que costumava acontecer a esses espíritos imprudentes ao visitarem seus antigos lares?',
    option_a:
      "Eram imediatamente eleitos governadores das cidades terrestres onde haviam residido.",
    option_b:
      "Conseguiam ressuscitar seus corpos físicos sepultados nos cemitérios municipais.",
    option_c:
      "Revoltavam-se ao verem viúvas e viúvos casados novamente ou filhos partilhando bens com avareza, entregando-se ao ciúme, à vingança e à obsessão, perdendo a paz e caindo nas zonas inferiores.",
    option_d:
      "Ficavam invisíveis até para os mentores de Nosso Lar e transformavam-se em anjos de luz instantaneamente.",
    option_e:
      "Perdiam a capacidade de falar o idioma português e passavam a comunicar-se apenas por sinais.",
    correct_option: "C",
    explanation:
      'No Capítulo 23 ("Saber Ouvir"), Dona Laura mostra que, sem suficiente iluminação íntima e desprendimento, a visita ao ninho doméstico terrestre desperta paixões inferiores de posse e revolta, justificando a disciplina estabelecida pela Governadoria.',
    reference: 'Nosso Lar — Cap. 23 ("Saber Ouvir")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 724,
    book: "nosso_lar",
    statement:
      'No Capítulo 24 ("O Impressionante Apelo"), durante a transmissão radiofônica e televisiva da colônia "Moradia" sobre a crise europeia de agosto de 1939, que atitude espiritual é recomendada às colônias do continente americano?',
    option_a:
      "Que rompam todas as comunicações espirituais com a Europa e construam muralhas de chumbo.",
    option_b:
      "Que incentivem as nações americanas a entrar imediatamente em guerra de conquista territorial.",
    option_c:
      "Que suspendam todas as reencarnações no Brasil durante o período de cinquenta anos.",
    option_d:
      "Que fortaleçam as reservas de prece, fraternidade e serviço assistencial nas Américas, preparando postos de socorro e mantendo a harmonia mental para amparar as multidões de vítimas do conflito.",
    option_e:
      "Que transfiram todos os arquivos do Ministério do Esclarecimento para o fundo do Oceano Atlântico.",
    correct_option: "D",
    explanation:
      'No Capítulo 24 ("O Impressionante Apelo"), a mensagem de "Moradia" conclama as colônias espirituais a redobrarem a vigilância, a oração e os preparativos de socorro fraterno diante da tempestade bélica que se abateria sobre o mundo.',
    reference: 'Nosso Lar — Cap. 24 ("O Impressionante Apelo")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 725,
    book: "nosso_lar",
    statement:
      'No Capítulo 25 ("Generoso Alvitre"), quem é o jovem servidor do Ministério da Regeneração que vem buscar André Luiz na casa de Dona Laura para acompanhá-lo na visita de observação aos serviços daquele Ministério?',
    option_a:
      "O médico Henrique de Luna.",
    option_b:
      "O sentinela Justino.",
    option_c:
      "O administrador Alfredo.",
    option_d:
      "O doutrinador Belarmino.",
    option_e:
      "O amigo Rafael, dedicado trabalhador da Regeneração que fora designado para guiá-lo.",
    correct_option: "E",
    explanation:
      'No Capítulo 25 ("Generoso Alvitre"), o jovem Rafael comparece à residência de Laura para conduzir André Luiz ao Ministério da Regeneração, onde André decidirá trocar o passeio de observação pelo trabalho humilde.',
    reference: 'Nosso Lar — Cap. 25 ("Generoso Alvitre")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 726,
    book: "nosso_lar",
    statement:
      'No Capítulo 26 ("Novas Perspectivas"), quando o Ministro Genésio apresenta André Luiz ao chefe Tobias nas Câmaras de Retificação, de que modo André Luiz é inscrito no quadro de trabalhadores do setor?',
    option_a:
      "Como simples cooperador aprendiz para os serviços gerais e humildes de limpeza, passes e enfermagem, abrindo mão de qualquer prerrogativa de seu antigo título médico.",
    option_b:
      "Como diretor supremo de todos os pavilhões cirúrgicos do Ministério da Regeneração.",
    option_c:
      "Como fiscal-geral encarregado de punir os enfermeiros que chegassem atrasados ao plantão.",
    option_d:
      "Como professor catedrático de anatomia perispiritual para os setenta e dois Ministros.",
    option_e:
      "Como hóspede vitalício dispensado de tocar nos doentes recém-chegados do Umbral.",
    correct_option: "A",
    explanation:
      'No Capítulo 26 ("Novas Perspectivas"), André Luiz vence o orgulho profissional e aceita alegremente iniciar sua jornada como aprendiz humilde sob a orientação de Tobias e Narcisa nas Câmaras de Retificação.',
    reference: 'Nosso Lar — Cap. 26 ("Novas Perspectivas")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 727,
    book: "nosso_lar",
    statement:
      'No Capítulo 27 ("O Trabalho, Enfim"), qual é a reação inicial do organismo espiritual de André Luiz ao participar da limpeza dos fluidos fétidos e viscosos expelidos pelos 32 enfermos nas Câmaras de Retificação, e como Narcisa o reanima?',
    option_a:
      "Ele não sente absolutamente nenhum desconforto, pois seu perispírito já era idêntico ao dos anjos superiores.",
    option_b:
      "Ele sente fortes náuseas e repugnância quase invencível diante do mau cheiro e da matéria escura, mas Narcisa o encoraja com ternura materna, lembrando que também eles já haviam sido lavados por mãos caridosas.",
    option_c:
      "Ele desmaia durante três semanas consecutivas e precisa ser transferido de volta ao Parque Hospitalar.",
    option_d:
      "Ele abandona o plantão indignado e reclama ao Ministro Clarêncio contra a insalubridade do recinto.",
    option_e:
      "Ele ordena que os próprios doentes limpem o salão sob ameaça de regressarem imediatamente ao Umbral.",
    correct_option: "B",
    explanation:
      'No Capítulo 27 ("O Trabalho, Enfim"), André Luiz experimenta engulhos e suor frio ante os resíduos pestilenciais dos "crentes negativos", mas vence a repulsa amparado pelo exemplo e pela palavra bondosa de Narcisa.',
    reference: 'Nosso Lar — Cap. 27 ("O Trabalho, Enfim")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 728,
    book: "nosso_lar",
    statement:
      'No Capítulo 28 ("Em Serviço"), além da comparação entre o avestruz e a andorinha, o que Narcisa revela a André Luiz sobre o destino de muitos cientistas, filósofos e pregadores famosos quando desencarnam sem terem vivido moralmente o que ensinavam?',
    option_a:
      "Que todos são recebidos com arcos de triunfo diretamente no Ministério da União Divina.",
    option_b:
      "Que a cultura intelectual isenta o espírito de qualquer responsabilidade perante a Lei de Deus.",
    option_c:
      "Que muitos deles permanecem retidos no Umbral ou nas zonas inferiores porque tinham a mente brilhante de teorias, mas o coração pesado de egoísmo, vaidade e paixões subalternas.",
    option_d:
      "Que eles perdem para sempre a capacidade de ler e escrever em futuras reencarnações.",
    option_e:
      "Que são transformados em guardas mudos nas muralhas externas da colônia.",
    correct_option: "C",
    explanation:
      'No Capítulo 28 ("Em Serviço"), Narcisa esclarece que a elevação espiritual não depende de verniz intelectual ou retórica religiosa, mas da leveza moral conquistada pela vivência sincera do bem.',
    reference: 'Nosso Lar — Cap. 28 ("Em Serviço")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 729,
    book: "nosso_lar",
    statement:
      'No Capítulo 29 ("A Visão de Francisco"), que providência terapêutica o chefe Tobias adota para libertar o enfermo Francisco da alucinação terrível de sentir-se devorado pelos vermes de seu próprio cadáver?',
    option_a:
      "Ordena que os serventes queimem o cemitério terrestre onde o corpo de Francisco estava sepultado.",
    option_b:
      "Aplica-lhe um castigo físico severo para obrigá-lo a calar os gritos na enfermaria.",
    option_c:
      "Envia Francisco de volta ao túmulo para que ele se acostume definitivamente com a escuridão.",
    option_d:
      "Aplica-lhe passes magnéticos calmantes sobre o córtex cerebral e projeta quadros mentais de paz e renovação, desligando-lhe a atenção da cova funerária e induzindo-o ao sono reparador.",
    option_e:
      "Substitui o perispírito de Francisco por um modelo artificial fabricado no Ministério do Esclarecimento.",
    correct_option: "D",
    explanation:
      'No Capítulo 29 ("A Visão de Francisco"), Tobias socorre o doente com passes magnéticos concentrados na região cerebral, quebrando a fixação hipnótica que o mantinha preso aos despojos carnais.',
    reference: 'Nosso Lar — Cap. 29 ("A Visão de Francisco")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 730,
    book: "nosso_lar",
    statement:
      'No Capítulo 30 ("Herança e Eutanásia"), que ensinamento doutrinário Narcisa transmite a André Luiz a respeito da prática da chamada "eutanásia" nos hospitais ou lares da Terra?',
    option_a:
      "Que a eutanásia é um ato de suprema caridade sempre que o paciente possui bens materiais para deixar aos filhos.",
    option_b:
      "Que o médico humano tem autoridade absoluta para decidir o minuto exato da morte de qualquer enfermo.",
    option_c:
      "Que a interrupção deliberada da vida física não traz qualquer consequência espiritual para quem a executa.",
    option_d:
      "Que as dores finais da agonia são meros acidentes biológicos sem utilidade para a alma.",
    option_e:
      "Que ao médico compete aliviar a dor e consolar sempre, mas jamais suprimir a vida física, pois os últimos momentos de sofrimento no leito costumam ser preciosos processos de esgotamento de resíduos e purificação para o espírito.",
    correct_option: "E",
    explanation:
      'No Capítulo 30 ("Herança e Eutanásia"), Narcisa e o episódio do pai de Paulina demonstram que a eutanásia constitui homicídio perante as Leis Divinas, interrompendo processos depurativos essenciais ao desencarnante.',
    reference: 'Nosso Lar — Cap. 30 ("Herança e Eutanásia")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 731,
    book: "nosso_lar",
    statement:
      'No Capítulo 31 ("Vampiro"), por que o Vigilante-Chefe Irmão Paulo afirma que a ex-parteira criminosa era um verdadeiro "vampiro" espiritual que não podia ser admitido naquele instante nas Câmaras de Retificação?',
    option_a:
      "Porque ela não trazia o menor sinal de arrependimento ou dor sincera, mas sim orgulho ferido, hipocrisia religiosa e emanações mentais venenosas que perturbariam gravemente os enfermos em recuperação.",
    option_b:
      "Porque ela possuía asas de morcego visíveis e alimentava-se fisicamente do sangue dos guardas.",
    option_c:
      "Porque as Câmaras de Retificação estavam com todos os leitos ocupados por soldados da guerra europeia.",
    option_d:
      "Porque em Nosso Lar nunca se admite nenhum espírito que tenha exercido profissão ligada à medicina.",
    option_e:
      "Porque o sentinela Justino exigia dela o pagamento prévio de mil bônus-hora na cancela.",
    correct_option: "A",
    explanation:
      'No Capítulo 31 ("Vampiro"), Irmão Paulo esclarece que as portas do socorro estão abertas aos que gemem arrependidos, mas precisam barrar a invasão de espíritos rebeldes e impenitentes que pretendem impor a própria maldade.',
    reference: 'Nosso Lar — Cap. 31 ("Vampiro")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 732,
    book: "nosso_lar",
    statement:
      'No Capítulo 32 ("Notícias de Veneranda"), o que são os "salões verdes" idealizados pela Ministra Veneranda que tanto encantam André Luiz nas Câmaras de Retificação?',
    option_a:
      "Anfiteatros pintados com tinta a óleo verde onde se realizam julgamentos criminais.",
    option_b:
      "Recintos formados pela própria vegetação viva e disciplinada, onde arbustos e ramos floridos se entrelaçam naturalmente para constituir paredes, tetos, divãs e poltronas perfumadas de repouso e refazimento.",
    option_c:
      "Estufas subterrâneas fechadas a sete chaves onde se cultivam plantas carnívoras do Umbral.",
    option_d:
      "Salas revestidas de esmeraldas minerais extraídas das minas profundas da crosta terrestre.",
    option_e:
      "Pavilhões hospitalares iluminados exclusivamente por lâmpadas de gás néon esverdeado.",
    correct_option: "B",
    explanation:
      'No Capítulo 32 ("Notícias de Veneranda"), Tobias mostra a André Luiz os "salões verdes", maravilhas de dendrologia espiritual criadas por Veneranda, nos quais a natureza viva oferece mobília e abrigo balsâmico.',
    reference: 'Nosso Lar — Cap. 32 ("Notícias de Veneranda")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 733,
    book: "nosso_lar",
    statement:
      'No Capítulo 33 ("Curiosas Observações"), como os muares e os cães que integram a caravana dos Samaritanos obedecem aos condutores durante a chegada às Câmaras de Retificação?',
    option_a:
      "Sob o estalo constante de chicotes de couro e gritos ameaçadores dos cocheiros.",
    option_b:
      "Através de coleiras eletrônicas que aplicam descargas dolorosas no pescoço dos animais.",
    option_c:
      "Sem qualquer violência ou açoite, atendendo docilmente à voz amiga e ao pensamento amoroso dos condutores, pois em Nosso Lar os animais são tratados como irmãos menores em evolução.",
    option_d:
      "Sendo arrastados por correntes de ferro puxadas por tratores mecânicos da Governadoria.",
    option_e:
      "Por meio de hipnose forçada que os mantém cegos e imóveis durante toda a viagem.",
    correct_option: "C",
    explanation:
      'No Capítulo 33 ("Curiosas Observações"), André Luiz admira a inteligência e a docilidade dos muares, dos cães e dos íbis viajores, que cooperam alegremente com os Samaritanos sob o influxo da bondade e do respeito mútuo.',
    reference: 'Nosso Lar — Cap. 33 ("Curiosas Observações")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 734,
    book: "nosso_lar",
    statement:
      'No Capítulo 34 ("Os Recém-Chegados do Umbral"), além da antiga senhora de escravos de 1888, que outros tipos de enfermos espirituais André Luiz observa entre os 29 socorridos trazidos pela caravana dos Samaritanos?',
    option_a:
      "Apenas crianças recém-nascidas que desencarnaram em hospitais maternidade da Europa.",
    option_b:
      "Somente antigos faraós do Egito que aguardavam transporte para o planeta Júpiter.",
    option_c:
      "Exclusivamente médicos e enfermeiros que haviam trabalhado no Parque Hospitalar de Nosso Lar.",
    option_d:
      "Espíritos mutilados, dementados, suicidas e vítimas de longos desequilíbrios passionais e criminosos, que finalmente haviam emitido um gemido sincero de arrependimento e súplica ao Alto.",
    option_e:
      "Espíritos perfeitamente sãos que vinham apenas passar férias recreativas no Bosque das Águas.",
    correct_option: "D",
    explanation:
      'No Capítulo 34 ("Os Recém-Chegados do Umbral"), André Luiz contempla o doloroso quadro dos 29 resgatados do Umbral, portadores de graves lesões perispirituais e mentais, mas já tocados pela dor salvadora do remorso.',
    reference: 'Nosso Lar — Cap. 34 ("Os Recém-Chegados do Umbral")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 735,
    book: "nosso_lar",
    statement:
      'No Capítulo 35 ("Encontro Singular"), o samaritano Silveira conta a André Luiz como desencarnara no Rio de Janeiro após a ruína financeira imposta por Laerte. O que o ajudou a não cair no ódio contra o pai de André?',
    option_a:
      "A descoberta de um bilhete premiado de loteria no mesmo dia em que declarou falência.",
    option_b:
      "A vingança judicial movida por seus filhos contra o patrimônio imobiliário de Laerte.",
    option_c:
      "O completo esquecimento de seu nome e de sua família logo após atravessar o túmulo.",
    option_d:
      "A promessa dos Ministros de que Laerte seria condenado ao sofrimento eterno nas trevas.",
    option_e:
      "A aceitação humilde da pobreza e da enfermidade final com fé em Deus, compreendendo mais tarde no Além que a perda dos bens materiais o livrara dos perigos da avareza e da corrupção espiritual.",
    correct_option: "E",
    explanation:
      'No Capítulo 35 ("Encontro Singular"), Silveira explica a André Luiz que a falência material, suportada com resignação cristã, foi o remédio amargo mas bendito que lhe abriu as portas da iluminação espiritual.',
    reference: 'Nosso Lar — Cap. 35 ("Encontro Singular")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 736,
    book: "nosso_lar",
    statement:
      'No Capítulo 36 ("O Sonho"), como se inicia a viagem em desdobramento espiritual que leva André Luiz, adormecido após o plantão, até a esfera luminosa onde se encontra sua mãe?',
    option_a:
      "Ele sente-se fora do corpo habitual, embarca num batel silencioso que desliza sobre águas plácidas e luminosas e aporta numa praia florida onde sua mãe o aguarda.",
    option_b:
      "Ele é transportado num carro blindado puxado por muares através das furnas do Umbral.",
    option_c:
      "Ele sobe por uma escada metálica de dez mil degraus construída no centro da Governadoria.",
    option_d:
      "Ele toma o aeróbus comum da linha do Bosque das Águas em companhia de Lísias e Polidoro.",
    option_e:
      "Ele mergulha nas águas profundas do Rio Azul até sair em uma caverna subterrânea.",
    correct_option: "A",
    explanation:
      'No Capítulo 36 ("O Sonho"), André Luiz experimenta no próprio plano espiritual o fenômeno do sonho (desdobramento para esfera ainda mais sutil), viajando num barco sobre águas tranquilas até os braços maternos.',
    reference: 'Nosso Lar — Cap. 36 ("O Sonho")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 737,
    book: "nosso_lar",
    statement:
      'No Capítulo 37 ("A Preleção da Ministra"), durante sua palestra nas Câmaras de Retificação, que alerta a Ministra Veneranda faz sobre as palavras e conversações habituais das criaturas?',
    option_a:
      "Que as palavras faladas se dissolvem no ar sem deixar qualquer registro no perispírito ou no ambiente.",
    option_b:
      "Que a palavra é o canal da mente e que os comentários maledicentes, queixosos ou impuros projetam larvas e formas mentais destrutivas que envenenam primeiramente quem os emite.",
    option_c:
      "Que em Nosso Lar todos os servidores devem fazer voto perpétuo de mudez absoluta.",
    option_d:
      "Que somente os discursos pronunciados em latim clássico são ouvidos pela Providência Divina.",
    option_e:
      "Que é recomendável criticar diariamente os defeitos alheios para exercitar a sinceridade.",
    correct_option: "B",
    explanation:
      'No Capítulo 37 ("A Preleção da Ministra"), Veneranda ensina a responsabilidade da criação mental e verbal, demonstrando que cada espírito respira na atmosfera psíquica das imagens e palavras que exterioriza.',
    reference: 'Nosso Lar — Cap. 37 ("A Preleção da Ministra")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 738,
    book: "nosso_lar",
    statement:
      'No Capítulo 38 ("O Caso Tobias"), como Luciana (a segunda esposa de Tobias na Terra) reagira inicialmente ao desencarnar e encontrar Tobias já unido espiritualmente a Hilda em "Nosso Lar"?',
    option_a:
      "Tentou incendiar a residência de Tobias e foi presa pelos guardas do Ministério da Regeneração.",
    option_b:
      "Exigiu que o Governador expulsasse Hilda da colônia por ter desencarnado primeiro.",
    option_c:
      "A princípio sofreu o choque natural da mentalidade possessiva terrestre, mas, envolvida pela ternura angélica de Hilda e pela lealdade fraterna de Tobias, compreendeu a superioridade do amor espiritual e reencontrou seu antigo afeto de outras vidas.",
    option_d:
      "Recusou-se a entrar em Nosso Lar e voltou voluntariamente para o fundo das trevas.",
    option_e:
      "Perdeu completamente a fala e a visão durante cinquenta anos consecutivos.",
    correct_option: "C",
    explanation:
      'No Capítulo 38 ("O Caso Tobias"), relata-se como a bondade desarmada de Hilda conquistou o coração de Luciana, curando-a do exclusivismo terrestre e preparando-a para unir-se ao verdadeiro companheiro com quem reencarnaria em São Paulo.',
    reference: 'Nosso Lar — Cap. 38 ("O Caso Tobias")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 739,
    book: "nosso_lar",
    statement:
      'No Capítulo 39 ("Ouvindo a Senhora Laura"), quando André Luiz manifesta admiração quase incrédula diante da renúncia de Hilda no lar de Tobias, como Dona Laura explica a diferença entre o amor na Terra e o amor em "Nosso Lar"?',
    option_a:
      "Afirma que em Nosso Lar os espíritos têm o coração congelado e não sentem mais afeição por ninguém.",
    option_b:
      "Diz que na Terra o casamento é sempre perfeito, enquanto no mundo espiritual só existem divórcios litigiosos.",
    option_c:
      "Explica que apenas os homens conseguem amar espiritualmente, sendo as mulheres incapazes de perdão.",
    option_d:
      "Esclarece que na Terra o amor costuma ser misturado ao egoísmo feroz que exige posse exclusiva, ao passo que nas esferas superiores o amor se ilumina pela fraternidade universal, desejando sinceramente a felicidade do ser amado.",
    option_e:
      "Sustenta que a lei de Nosso Lar obriga todos os casais a viverem em casas separadas por muros altos.",
    correct_option: "D",
    explanation:
      'No Capítulo 39 ("Ouvindo a Senhora Laura"), a mãe de Lísias mostra que o ciúme não é prova de amor, mas de posse egoística, e que o amor redimido alegra-se em repartir a bondade e amparar a todos.',
    reference: 'Nosso Lar — Cap. 39 ("Ouvindo a Senhora Laura")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 740,
    book: "nosso_lar",
    statement:
      'No Capítulo 40 ("Quem Semeia Colherá"), quem dirige o Pavilhão 7 das Câmaras de Retificação, onde André Luiz reencontra a infeliz Elisa, e que auxílio imediato André passa a prestar àquela antiga vítima de sua juventude?',
    option_a:
      "O pavilhão é dirigido por Clarêncio, que proíbe André de aproximar-se do leito de Elisa.",
    option_b:
      "O pavilhão é dirigido por Lascínia, que transfere Elisa imediatamente para o Campo da Música.",
    option_c:
      "O pavilhão é dirigido por Henrique de Luna, que realiza uma cirurgia cardíaca em Elisa.",
    option_d:
      "O pavilhão é dirigido por Genésio, que cobra de André todos os bônus-hora acumulados no mês.",
    option_e:
      "O pavilhão feminino é dirigido pela bondosa cooperadora Nemésia, que acolhe o pedido de André Luiz e permite que ele dedique horas diárias de assistência fraterna, passes e consolação ao reerguimento de Elisa.",
    correct_option: "E",
    explanation:
      'No Capítulo 40 ("Quem Semeia Colherá"), a cooperadora Nemésia dirige o Pavilhão 7 e autoriza André Luiz a assumir o amparo espiritual direto a Elisa, resgatando pelo amor fraterno a dívida moral contraída na mocidade.',
    reference: 'Nosso Lar — Cap. 40 ("Quem Semeia Colherá")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 741,
    book: "nosso_lar",
    statement:
      'No Capítulo 41 ("Convocados à Luta"), que providência prática os diversos Ministérios de "Nosso Lar" tomam imediatamente após o soar dos clarins que anunciam a eclosão da Segunda Guerra Mundial em setembro de 1939?',
    option_a:
      "Organizam turmas extraordinárias de socorro, vigilância e defesa vibratória, suspendendo licenças recreativas para atender as regiões assoladas pelo conflito e proteger as fronteiras da colônia.",
    option_b:
      "Fecham todas as escolas e hospitais para que a população assista aos combates pela televisão.",
    option_c:
      "Enviam mensagens mediúnicas ordenando que os soldados aliados fabriquem bombas atômicas.",
    option_d:
      "Desligam a iluminação pública de Nosso Lar por receio de ataques de aviões terrestres.",
    option_e:
      "Distribuem espadas de ferro e escudos medievais aos enfermeiros do Parque Hospitalar.",
    correct_option: "A",
    explanation:
      'No Capítulo 41 ("Convocados à Luta"), sob a palavra serena do Ministro Esperidião e do Governador, toda a colônia se mobiliza em silêncio disciplinado para multiplicar os serviços de assistência e contenção das trevas.',
    reference: 'Nosso Lar — Cap. 41 ("Convocados à Luta")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 742,
    book: "nosso_lar",
    statement:
      'No Capítulo 42 ("A Palavra do Governador"), por que o Governador de "Nosso Lar" adverte solenemente os habitantes contra o "medo" durante a grande assembleia no Ministério da Regeneração?',
    option_a:
      "Porque o medo faz com que o espírito mude de cor física e perca o cartão de identificação.",
    option_b:
      "Porque o medo é um dos piores inimigos da criatura, abrindo brechas na couraça vibratória da mente e sintonizando a alma com as correntes desintegradoras do pânico e das trevas.",
    option_c:
      "Porque quem sente medo é multado em dez mil bônus-hora pela tesouraria da Governadoria.",
    option_d:
      "Porque o medo impede o funcionamento mecânico dos aeróbus que cruzam a colônia.",
    option_e:
      "Porque os espíritos que sentem medo reencarnam obrigatoriamente no mesmo dia nos campos de batalha.",
    correct_option: "B",
    explanation:
      'No Capítulo 42 ("A Palavra do Governador"), o dirigente máximo da colônia explica que o medo paralisa as forças criadoras do espírito e estabelece sintonia magnética imediata com as zonas de perturbação.',
    reference: 'Nosso Lar — Cap. 42 ("A Palavra do Governador")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 743,
    book: "nosso_lar",
    statement:
      'No Capítulo 43 ("Em Conversação"), além do relato sobre os campos de batalha da Polônia, o Ministro Benevenuto descreve a ação de falanges invisíveis que insuflavam a fúria homicida entre os combatentes terrestres. Como atuam os socorristas da Luz naquele cenário de dor?',
    option_a:
      "Interferem na trajetória das balas de canhão para destruir os quartéis do exército invasor.",
    option_b:
      "Tomam partido político nas disputas de fronteira entre as nações beligerantes da Europa.",
    option_c:
      "Trabalham sem descanso sob a tempestade magnética de ódio, recolhendo os desencarnados atordoados, aplicando passes anestésicos nos agonizantes e protegendo os corações que oram sem distinção de bandeira ou nacionalidade.",
    option_d:
      "Aguardam que a guerra termine completamente na Terra antes de enviar a primeira caravana de auxílio.",
    option_e:
      "Socorrem exclusivamente os oficiais de alta patente que possuíam monumentos funerários.",
    correct_option: "C",
    explanation:
      'No Capítulo 43 ("Em Conversação"), Benevenuto ressalta o caráter universal e supranacional da caridade cristã nos campos de luta, amparando todas as vítimas da loucura bélica.',
    reference: 'Nosso Lar — Cap. 43 ("Em Conversação")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 744,
    book: "nosso_lar",
    statement:
      'No Capítulo 44 ("As Trevas"), ao ouvir o Ministro Benevenuto explicar a lei de gravitação espiritual que rege as zonas abismais ("o abismo atrai o abismo"), que conclusão consoladora é apresentada sobre a misericórdia de Deus mesmo nessas regiões profundas?',
    option_a:
      "Que Deus esquece definitivamente os espíritos que descem abaixo da linha do Umbral.",
    option_b:
      "Que as Trevas serão destruídas por uma explosão cósmica que aniquilará seus habitantes.",
    option_c:
      "Que nenhum mensageiro do Cristo jamais desce às furnas abismais por proibição divina.",
    option_d:
      "Que mesmo nas Trevas mais densas a Providência Divina jamais desampara as criaturas, enviando missionários abnegados que aguardam o menor lampejo de arrependimento ou cansaço do mal para iniciar a obra de resgate.",
    option_e:
      "Que os habitantes das Trevas são demônios criados fora da espécie humana e incapazes de evolução.",
    correct_option: "D",
    explanation:
      'No Capítulo 44 ("As Trevas"), Benevenuto mostra que a Justiça Divina respeita o livre-arbítrio dos que escolhem a sombra, mas o Amor Divino mantém sentinelas e caravanas prontas a socorrer todo espírito que deseje regenerar-se.',
    reference: 'Nosso Lar — Cap. 44 ("As Trevas")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 745,
    book: "nosso_lar",
    statement:
      'No Capítulo 45 ("No Campo da Música"), quem é a jovem companheira que acompanha André Luiz durante o passeio musical ao lado dos casais Lísias-Lascínia, Polidoro-Iolanda e Estácio-Judite?',
    option_a:
      "Eloísa, neta da Senhora Laura, que já começava a sorrir e renovar-se espiritualmente graças ao trabalho e à convivência fraterna.",
    option_b:
      "Narcisa, que deixara pela primeira vez o plantão nas Câmaras de Retificação.",
    option_c:
      "Luciana, segunda esposa de Tobias, que viera despedir-se antes de reencarnar.",
    option_d:
      "Paulina, irmã do médico Dr. Edelberto.",
    option_e:
      "A própria Zélia, que viera da Terra em desdobramento durante o sono físico.",
    correct_option: "A",
    explanation:
      'No Capítulo 45 ("No Campo da Música"), a jovem Eloísa participa da excursão recreativa ao Ministério da Elevação, demonstrando os benéficos resultados do conselho de sua avó Laura.',
    reference: 'Nosso Lar — Cap. 45 ("No Campo da Música")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 746,
    book: "nosso_lar",
    statement:
      'No Capítulo 46 ("Sacrifício de Mulher"), por que a mãe de André Luiz afirma ao filho que, apesar de habitar uma esfera muito superior, escolheu voluntariamente reencarnar na Terra em condições difíceis?',
    option_a:
      "Porque perdera o direito de morar nas esferas superiores devido a uma falha administrativa.",
    option_b:
      "Porque desejava acumular fortuna material e construir um palácio no Rio de Janeiro.",
    option_c:
      "Porque o verdadeiro céu não é o gozo egoísta da paz enquanto os seres amados gemem no abismo, preferindo descer à arena terrestre para resgatar o esposo Laerte e as duas antigas adversárias.",
    option_d:
      "Porque fora sorteada compulsoriamente pelo computador central do Ministério do Esclarecimento.",
    option_e:
      "Porque queria impedir que André Luiz voltasse a estudar medicina espiritual em Nosso Lar.",
    correct_option: "C",
    explanation:
      'No Capítulo 46 ("Sacrifício de Mulher"), a mãe de André Luiz exemplifica a grandeza do amor materno e conjugal redimido, renunciando temporariamente à felicidade celeste para servir de âncora redentora aos seus.',
    reference: 'Nosso Lar — Cap. 46 ("Sacrifício de Mulher")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 747,
    book: "nosso_lar",
    statement:
      'No Capítulo 47 ("A Volta de Laura"), qual é a reação de Eloísa ao abraçar sua mãe Teresa recém-chegada da Terra e ouvir o relato das dores físicas e morais que Teresa suportara com paciência cristã até o fim?',
    option_a:
      "Eloísa revolta-se ainda mais contra Deus e recusa-se a conversar com a mãe desencarnada.",
    option_b:
      "Eloísa exige que o Ministro Genésio puna imediatamente os médicos que trataram de Teresa.",
    option_c:
      "Eloísa pede para esquecer a família e mudar-se sozinha para a colônia Alvorada Nova.",
    option_d:
      "Profundamente tocada pelo exemplo heroico da mãe e pela despedida da avó Laura, Eloísa consolida sua cura moral, envergonha-se de suas antigas queixas fúteis e dispõe-se ao trabalho dedicado.",
    option_e:
      "Eloísa exige reencarnar na mesma noite em substituição à avó Laura.",
    correct_option: "D",
    explanation:
      'No Capítulo 47 ("A Volta de Laura"), a chegada luminosa de Teresa — que atravessara o Umbral em poucas horas pela força da resignação — toca profundamente o coração da filha Eloísa e coroa a alegria de Dona Laura antes de partir.',
    reference: 'Nosso Lar — Cap. 47 ("A Volta de Laura")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 748,
    book: "nosso_lar",
    statement:
      'No Capítulo 48 ("Culto Familiar"), por que razão o espírito de Ricardo (esposo de Laura já reencarnado como criança na Terra) permanece envolto em um globo cristalino isolante durante a visita espiritual ao lar de "Nosso Lar"?',
    option_a:
      "Para evitar que ele fugisse correndo pelas avenidas da colônia e recusasse voltar ao berço.",
    option_b:
      "Porque ele estava contaminado por uma bactéria letal que ameaçava a saúde dos Ministros.",
    option_c:
      "Para impedi-lo de enxergar o rosto de sua esposa Laura e dos filhos Lísias, Iolanda e Judite.",
    option_d:
      "Porque era um castigo imposto pelo Ministério do Esclarecimento aos espíritos reencarnados.",
    option_e:
      "Para resguardar o delicado equilíbrio de seu organismo infantil encarnado e o cordão fluídico contra choques vibratórios excessivos, permitindo-lhe conversar sem prejudicar o veículo físico deixado no berço.",
    correct_option: "E",
    explanation:
      'No Capítulo 48 ("Culto Familiar"), o aparelho cristalino isolante protege as delicadas ligações magnéticas do menino reencarnado, demonstrando o zelo técnico dos mentores no desdobramento de encarnados em tenra idade.',
    reference: 'Nosso Lar — Cap. 48 ("Culto Familiar")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 749,
    book: "nosso_lar",
    statement:
      'No Capítulo 49 ("Regressando à Casa"), durante os dias em que permanece velando à cabeceira do Dr. Ernesto (segundo marido de Zélia), que luta espiritual André Luiz precisa travar dentro do quarto do enfermo?',
    option_a:
      "Precisa afastar com preces, coragem moral e emissão de forças magnéticas as entidades sombrias e vampirizadoras que cercavam o leito tentando agravar a asfixia e precipitar a morte de Ernesto.",
    option_b:
      "Precisa discutir com os médicos encarnados para que suspendam a aplicação de penicilina.",
    option_c:
      "Precisa esconder as carteiras de dinheiro de Ernesto para que os vizinhos não as furtem.",
    option_d:
      "Precisa impedir que seus três filhos encarnados expulsem Zélia da própria residência.",
    option_e:
      "Precisa apagar um incêndio físico provocado por um curto-circuito na rede elétrica da casa.",
    correct_option: "A",
    explanation:
      'No Capítulo 49 ("Regressando à Casa"), André Luiz identifica desencarnados inferiores que sugavam as forças vitais do Dr. Ernesto e coloca-se como sentinela amorosa em defesa da vida do companheiro de Zélia.',
    reference: 'Nosso Lar — Cap. 49 ("Regressando à Casa")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 750,
    book: "nosso_lar",
    statement:
      'No Capítulo 50 ("Cidadão de \'Nosso Lar\'"), ao se despedir do antigo lar terrestre depois que o Dr. Ernesto entra em franca convalescença, que sentimento domina o coração de André Luiz ao contemplar Zélia feliz ao lado do esposo recuperado?',
    option_a:
      "Uma amargura incurável por perceber que não fazia mais falta à família terrestre.",
    option_b:
      "Uma paz sublime e pura de quem venceu o egoísmo possessivo, sentindo-se verdadeiramente irmão e benfeitor de Zélia e Ernesto, o que lhe alivia a densidade perispiritual e lhe permite volitar com Narcisa rumo a Nosso Lar.",
    option_c:
      "O desejo urgente de pedir a Clarêncio sua reencarnação imediata como filho do casal.",
    option_d:
      "A intenção de nunca mais voltar à crosta terrestre em nenhuma circunstância futura.",
    option_e:
      "O orgulho intelectual de ter realizado a cura sozinho sem o auxílio de Narcisa.",
    correct_option: "B",
    explanation:
      'No Capítulo 50 ("Cidadão de \'Nosso Lar\'"), a vitória de André Luiz sobre o ciúme e o exclusivismo doméstico ilumina-lhe o perispírito, conferindo-lhe a leveza necessária à volitação e o título de cidadão de Nosso Lar.',
    reference: "Nosso Lar — Cap. 50 (\"Cidadão de 'Nosso Lar'\")",
    difficulty: "facil",
    active: true,
  },
  {
    code: 751,
    book: "os_mensageiros",
    statement:
      'No Capítulo 1 de "Os Mensageiros" ("Renovação"), ao recordar os acontecimentos finais de "Nosso Lar", como André Luiz descreve a mudança ocorrida em sua maneira de encarar a esposa Zélia e a família terrestre?',
    option_a:
      "Ele confessa que passou a odiar a instituição familiar, considerando o casamento terrestre um erro.",
    option_b:
      "Ele explica que esquecera completamente o nome de Zélia e dos filhos após tomar água do Rio Azul.",
    option_c:
      "Ele relata que o amor exclusivista e ciumento dera lugar a uma afeição serena e universal, mas que esse esvaziamento das antigas paixões mundanas deixara inicialmente em sua alma a sensação de um cálice luminoso ainda vazio de novas realizações.",
    option_d:
      "Ele afirma que pretendia regressar semanalmente ao Rio de Janeiro para fiscalizar a contabilidade doméstica de Ernesto.",
    option_e:
      "Ele declara que fora proibido por Clarêncio de orar pelos parentes deixados na crosta.",
    correct_option: "C",
    explanation:
      'No Capítulo 1 ("Renovação"), André Luiz analisa a transição psicológica do espírito que supera o apego passional da Terra e precisa preencher o coração renovado com os ideais superiores do serviço divino.',
    reference: 'Os Mensageiros — Cap. 1 ("Renovação")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 752,
    book: "os_mensageiros",
    statement:
      'No Capítulo 2 ("Aniceto"), quando Tobias conduz André Luiz ao Ministério da Comunicação, que conceito o instrutor Aniceto emite sobre o aproveitamento das profissões terrestres (como a medicina de André) nas tarefas espirituais?',
    option_a:
      "Que toda profissão exercida na Terra deve ser abominada e esquecida ao chegar a Nosso Lar.",
    option_b:
      "Que apenas os engenheiros e arquitetos têm utilidade prática nas colônias espirituais.",
    option_c:
      "Que os médicos terrenos são dispensados de qualquer aprendizado porque já conhecem a anatomia física.",
    option_d:
      "Que as aptidões profissionais nobres são valioso patrimônio do espírito, devendo ser ampliadas e santificadas no serviço ao próximo sem o orgulho dos rótulos e títulos mundanos.",
    option_e:
      "Que cada aprendiz é obrigado a exercer no Além exatamente o oposto daquilo que estudou na Terra.",
    correct_option: "D",
    explanation:
      'No Capítulo 2 ("Aniceto"), o instrutor acolhe André Luiz em sua turma suplementar valorizando sua bagagem médica, mas ressaltando a disciplina da "Instituição do Homem Novo", onde se serve por amor sem vaidade nominal.',
    reference: 'Os Mensageiros — Cap. 2 ("Aniceto")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 753,
    book: "os_mensageiros",
    statement:
      'No Capítulo 3 ("No Centro de Mensageiros"), ao percorrer os vastos departamentos de preparação no Ministério da Comunicação, o que Tobias revela a André Luiz sobre a estatística de aproveitamento dos missionários que reencarnam na Terra para tarefas mediúnicas e doutrinárias?',
    option_a:
      "Que cem por cento dos missionários regressam vitoriosos sem jamais sofrerem quedas morais.",
    option_b:
      "Que nenhum trabalhador preparado no Centro aceita reencarnar no continente americano.",
    option_c:
      "Que apenas os espíritos analfabetos conseguem manter a fidelidade aos compromissos assumidos.",
    option_d:
      "Que o Ministério da Comunicação envia apenas três médiuns à Terra a cada século.",
    option_e:
      "Que, embora centenas de servidores desçam anualmente à carne munidos de belos planos e faculdades psíquicas, a grande maioria fracassa parcial ou totalmente ao contato com as tentações do dinheiro, do sexo, da vaidade e do mando.",
    correct_option: "E",
    explanation:
      'No Capítulo 3 ("No Centro de Mensageiros"), Tobias mostra a André Luiz a gravidade dos compromissos reencarnatórios e a dolorosa frequência com que candidatos bem preparados sucumbem à invigilância no mundo.',
    reference: 'Os Mensageiros — Cap. 3 ("No Centro de Mensageiros")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 754,
    book: "os_mensageiros",
    statement:
      'No Capítulo 4 ("O caso Vicente"), quando o médico Vicente descobriu, logo após desencarnar, que fora assassinado pelo próprio irmão Eleutério em conluio com a esposa Rosalinda, que auxílio espiritual o salvou de cair na vingança e na obsessão?',
    option_a:
      "O amparo imediato de sua mãe desencarnada e de amigos espirituais, que o ajudaram a recordar suas próprias culpas de vidas passadas e a compreender o crime dos dois como fruto da ignorância espiritual.",
    option_b:
      "A intervenção policial que prendeu Eleutério e Rosalinda no mesmo dia do sepultamento.",
    option_c:
      "O pagamento de uma indenização em bônus-hora concedida pelo Ministério da Regeneração.",
    option_d:
      "A aplicação de um choque elétrico que apagou de sua memória a imagem da esposa e do irmão.",
    option_e:
      "A promessa de Aniceto de que ambos os criminosos ficariam cegos e paralíticos na Terra.",
    correct_option: "A",
    explanation:
      'No Capítulo 4 ("O caso Vicente"), o jovem médico relata a André Luiz como o amparo materno e a visão superior da lei de causa e efeito lhe permitiram perdoar sinceramente a esposa e o irmão.',
    reference: 'Os Mensageiros — Cap. 4 ("O caso Vicente")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 755,
    book: "os_mensageiros",
    statement:
      'No Capítulo 5 ("Ouvindo instruções"), que apreciação justa e respeitosa o instrutor Telésforo faz a respeito das diversas religiões existentes na Terra (como o Catolicismo, a Reforma Protestante e o Espiritismo)?',
    option_a:
      "Afirma que todas as religiões terrestres devem ser extintas pela força militar.",
    option_b:
      "Reconhece que todas as escolas religiosas cristãs prestaram e prestam relevantes serviços na educação das almas, mas adverte que os homens costumam viciar as mais santas instituições quando substituem a vivência do Evangelho pelo formalismo exterior.",
    option_c:
      "Declara que somente os habitantes de Nosso Lar possuem o monopólio da verdade divina.",
    option_d:
      "Ensina que a ciência materialista já resolveu todos os problemas morais da família humana.",
    option_e:
      "Sustenta que Deus rejeita as preces proferidas em templos que não adotem o idioma português.",
    correct_option: "B",
    explanation:
      'No Capítulo 5 ("Ouvindo instruções"), Telésforo analisa com elevada imparcialidade histórica o papel do Catolicismo, do Protestantismo e do Espiritismo, concitando os servidores à prática sincera do Cristo.',
    reference: 'Os Mensageiros — Cap. 5 ("Ouvindo instruções")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 756,
    book: "os_mensageiros",
    statement:
      'No Capítulo 6 ("Advertências profundas"), o instrutor Telésforo critica severamente os cooperadores que na Terra costumam formular preceitos morais brilhantes apenas "para exportação". O que significa essa expressão na preleção do mentor?',
    option_a:
      "Imprimir livros espíritas no Brasil para vendê-los comercialmente na Europa e na Ásia.",
    option_b:
      "Traduzir o Evangelho de Jesus para línguas estrangeiras sem autorização da Governadoria.",
    option_c:
      "Exigir santidade, renúncia e perfeição do próximo por meio de belos discursos e teorias, enquanto o próprio pregador se recusa a aplicar essas mesmas lições na reforma de sua conduta íntima.",
    option_d:
      "Enviar cartas mediúnicas pelo correio terrestre para parentes residentes no interior.",
    option_e:
      "Realizar viagens missionárias de navio entre os portos do Oceano Atlântico.",
    correct_option: "C",
    explanation:
      'No Capítulo 6 ("Advertências profundas"), Telésforo adverte contra a hipocrisia da moral "para exportação", lembrando que na obra do Cristo o exemplo vivo vale infinitamente mais que a palavra vazia.',
    reference: 'Os Mensageiros — Cap. 6 ("Advertências profundas")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 757,
    book: "os_mensageiros",
    statement:
      'No Capítulo 7 ("A queda de Otávio"), por que Otávio havia assumido em "Nosso Lar", antes de reencarnar, o compromisso específico de permanecer solteiro durante aquela existência terrestre?',
    option_a:
      "Porque o casamento civil e religioso é considerado pecado mortal pelo Ministério da Comunicação.",
    option_b:
      "Porque ele odiava as mulheres e fizera voto perpétuo de misoginia nos templos antigos.",
    option_c:
      "Porque não existia na Terra nenhum espírito feminino compatível com sua elevada nobreza.",
    option_d:
      "Para poder dedicar-se integralmente à tarefa mediúnica e acolher como filhos do coração, a partir dos vinte anos de idade, seis antigos amigos de Nosso Lar que reencarnariam como crianças órfãs sob a guarda de sua família.",
    option_e:
      "Para acumular sozinho toda a herança paterna sem precisar dividi-la com herdeiros.",
    correct_option: "D",
    explanation:
      'No Capítulo 7 ("A queda de Otávio"), explica-se que o celibato voluntário de Otávio fazia parte de um planejamento assistencial para tutelar seis companheiros reencarnados como órfãos, compromisso que ele infelizmente traiu.',
    reference: 'Os Mensageiros — Cap. 7 ("A queda de Otávio")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 758,
    book: "os_mensageiros",
    statement:
      'No Capítulo 8 ("O desastre de Acelino"), que papel desempenhou Ruth, a esposa terrestre de Acelino, diante da mercantilização mediúnica praticada pelo marido, e onde ela se encontrava quando Acelino conversou com André Luiz?',
    option_a:
      "Ruth foi a principal cúmplice dos negócios ilícitos de Acelino e encontrava-se presa nas furnas das Trevas.",
    option_b:
      "Ruth abandonou Acelino para casar-se com um banqueiro e ainda vivia encarnada em Paris.",
    option_c:
      "Ruth nunca tomou conhecimento de que o marido possuía faculdades mediúnicas.",
    option_d:
      "Ruth proibiu Acelino de orar e queimou todos os livros religiosos da residência.",
    option_e:
      "Ruth sempre desaprovou com lágrimas a exploração comercial da mediunidade, manteve-se fiel ao Evangelho e, tendo desencarnado antes dele como espírito iluminado, intercedeu junto aos benfeitores para resgatá-lo após onze anos de sofrimento no Umbral.",
    correct_option: "E",
    explanation:
      'No Capítulo 8 ("O desastre de Acelino"), Acelino recorda com gratidão e remorso a dedicação da esposa Ruth, que em vão o advertira na Terra e depois viera socorrê-lo nas regiões inferiores.',
    reference: 'Os Mensageiros — Cap. 8 ("O desastre de Acelino")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 759,
    book: "os_mensageiros",
    statement:
      'No Capítulo 9 ("Ouvindo impressões"), ao ouvir Mariana culpar exclusivamente o ciúme do marido Joaquim pelo seu fracasso mediúnico na Terra, que ponderação sincera o terceiro interlocutor (o cavalheiro viúvo de Dona Adélia) apresenta ao grupo?',
    option_a:
      "Confessa que na Terra também tivera uma esposa perfeita e dedicada (Dona Adélia), que lhe dera todas as facilidades para o trabalho espírita, e que mesmo assim ele falira por preguiça e comodismo próprios, provando que não devemos transferir a culpa aos cônjuges.",
    option_b:
      "Concorda que todas as mulheres casadas estão absolutamente impedidas de servir a Jesus.",
    option_c:
      "Propõe que o Ministério da Comunicação proíba o casamento de todos os médiuns na Terra.",
    option_d:
      "Relata que assassinou a esposa Adélia para poder frequentar livremente as sessões espíritas.",
    option_e:
      "Afirma que somente os espíritos que reencarnam milionários conseguem cumprir o dever mediúnico.",
    correct_option: "A",
    explanation:
      'No Capítulo 9 ("Ouvindo impressões"), o testemunho honesto do viúvo de Dona Adélia desfaz o "desculpismo" de Mariana, mostrando que quem realmente quer servir vence os obstáculos domésticos, enquanto o preguiçoso fracassa até nas melhores condições.',
    reference: 'Os Mensageiros — Cap. 9 ("Ouvindo impressões")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 760,
    book: "os_mensageiros",
    statement:
      'No Capítulo 10 ("A experiência de Joel"), por que razão o Ministério do Esclarecimento aplica em determinados candidatos à reencarnação um tratamento magnético especial que lhes aguça a sensibilidade psíquica como uma "lente poderosa"?',
    option_a:
      "Para que eles possam ler pensamentos alheios e ganhar fortuna nas bolsas de valores da Terra.",
    option_b:
      "Para habilitá-los ao exercício da clarividência, da clariaudiência e da psicometria a serviço do consolo, da cura e da iluminação espiritual dos encarnados e desencarnados.",
    option_c:
      "Para que eles se recordem minuciosamente de todos os crimes que cometeram na Idade Média.",
    option_d:
      "Para torná-los imunes ao envelhecimento biológico e às doenças infecciosas do corpo físico.",
    option_e:
      "Para que possam enxergar no escuro sem precisar de energia elétrica nas cidades terrestres.",
    correct_option: "B",
    explanation:
      'No Capítulo 10 ("A experiência de Joel"), explica-se que a preparação psíquica visa ao serviço caridoso da mediunidade construtiva, tendo Joel falido porque desviou esse recurso sagrado para a vaidade retrospectiva.',
    reference: 'Os Mensageiros — Cap. 10 ("A experiência de Joel")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 761,
    book: "os_mensageiros",
    statement:
      'No Capítulo 11 ("Belarmino, o Doutrinador"), como agiam os oito médiuns humildes do grupo presidido por Belarmino quando este passou a desprezar o Evangelho e a usar a sociedade espírita para fins políticos e financeiros?',
    option_a:
      "Associaram-se entusiasticamente à corrupção de Belarmino e passaram a cobrar ingressos na porta.",
    option_b:
      "Incendiaram a sede do centro espírita em protesto contra a diretoria.",
    option_c:
      "Afastaram-se silenciosamente, um a um, magoados e entristecidos com o desvio doutrinário, continuando suas tarefas caridosas em recintos modestos, enquanto Belarmino ficava cercado apenas de politiqueiros e espíritos mistificadores.",
    option_d:
      "Perderam instantaneamente todas as faculdades mediúnicas por ordem do Ministro Gedeão.",
    option_e:
      "Denunciaram Belarmino à polícia militar para que fosse deportado do país.",
    correct_option: "C",
    explanation:
      'No Capítulo 11 ("Belarmino, o Doutrinador"), Belarmino narra com arrependimento como os oito médiuns fiéis e os benfeitores espirituais se retiraram à medida que ele transformava o templo cristão em reduto de vaidade intelectual e interesses mundanos.',
    reference: 'Os Mensageiros — Cap. 11 ("Belarmino, o Doutrinador")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 762,
    book: "os_mensageiros",
    statement:
      'No Capítulo 12 ("A palavra de Monteiro"), que método errado de "doutrinação" Monteiro costumava empregar nas sessões espíritas contra os espíritos sofredores e obsessores que se comunicavam?',
    option_a:
      "Cantava óperas italianas em voz alta para abafar a fala dos médiuns psicofônicos.",
    option_b:
      "Oferecia dinheiro físico e banquetes materiais às entidades comunicantes.",
    option_c:
      "Ficava em silêncio absoluto durante toda a reunião por timidez de dirigir a palavra.",
    option_d:
      "Tratava os desencarnados infelizes com rispidez autoritária, gritos de comando e argumentação fria e orgulhosa, procurando vencê-los pela força verbal sem jamais sentir compaixão ou amor fraterno por suas dores.",
    option_e:
      "Lia trechos de romances policiais franceses em vez de comentar o Evangelho de Jesus.",
    correct_option: "D",
    explanation:
      'No Capítulo 12 ("A palavra de Monteiro"), o próprio Monteiro reconhece que doutrinava sem coração, usando de aspereza e superioridade vaidosa tanto no centro espírita quanto no lar e no comércio.',
    reference: 'Os Mensageiros — Cap. 12 ("A palavra de Monteiro")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 763,
    book: "os_mensageiros",
    statement:
      'No Capítulo 13 ("Ponderações de Vicente"), ao mencionar as diversas instituições educativas do Ministério do Esclarecimento em "Nosso Lar", que cursos preparatórios Vicente destaca como essenciais para a formação da família humana?',
    option_a:
      "Cursos de especulação imobiliária e técnicas de acumulação bancária.",
    option_b:
      "Escolas de esgrima medieval e estratégia de artilharia pesada.",
    option_c:
      "Academias de hipnotismo comercial para dominar clientes na crosta terrestre.",
    option_d:
      "Institutos de astrologia adivinhatória para prever números de loteria.",
    option_e:
      "As Escolas Maternais e os Centros de Preparação à Paternidade, onde os futuros pais e mães aprendem a sublime responsabilidade de acolher e educar os espíritos reencarnantes.",
    correct_option: "E",
    explanation:
      'No Capítulo 13 ("Ponderações de Vicente"), Vicente ressalta a existência de Escolas Maternais e Centros de Preparação à Paternidade no Ministério do Esclarecimento, mostrando o cuidado espiritual com a missão familiar.',
    reference: 'Os Mensageiros — Cap. 13 ("Ponderações de Vicente")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 764,
    book: "os_mensageiros",
    statement:
      'No Capítulo 14 ("Preparativos"), após receberem o passe de dilatação visual e auditiva no Gabinete de Auxílio Magnético às Percepções, que advertência o instrutor Aniceto faz a André Luiz e Vicente sobre o uso daquelas faculdades ampliadas na Crosta?',
    option_a:
      "Que o aumento de percepção aumenta a responsabilidade moral, devendo eles usar a visão espiritual penetrante nunca para a crítica ou escândalo diante das misérias humanas, mas unicamente para compreender e socorrer com mais eficiência.",
    option_b:
      "Que eles deveriam anotar os pecados ocultos dos encarnados para publicá-los nos jornais de Nosso Lar.",
    option_c:
      "Que a visão ampliada duraria apenas quinze minutos se eles conversassem durante a viagem.",
    option_d:
      "Que eles estavam autorizados a julgar e punir severamente todos os médiuns falhos que encontrassem.",
    option_e:
      "Que aquele recurso magnético os tornava infalíveis e superiores aos Ministros da colônia.",
    correct_option: "A",
    explanation:
      'No Capítulo 14 ("Preparativos"), Aniceto ensina que enxergar as causas profundas das dores e quedas alheias exige redobrada caridade e discrição por parte do trabalhador espiritual.',
    reference: 'Os Mensageiros — Cap. 14 ("Preparativos")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 765,
    book: "os_mensageiros",
    statement:
      'No Capítulo 15 ("A viagem"), por que razão Aniceto, Vicente e André Luiz perdem progressivamente a capacidade de volitar à medida que descem das regiões luminosas de "Nosso Lar" para as zonas densas próximas ao Posto de Socorro?',
    option_a:
      "Porque sofreram um ferimento físico nos pés ao atravessarem uma floresta de espinhos.",
    option_b:
      "Porque a atmosfera espiritual vai se tornando cada vez mais pesada e saturada de fluidos grosseiros, exigindo que adaptem a densidade perispiritual ao meio e passem a caminhar pelo solo como viajantes comuns.",
    option_c:
      "Porque esqueceram de pagar a taxa de circulação aérea ao Ministério da Comunicação.",
    option_d:
      "Porque o Governador desligou a corrente eletromagnética da colônia durante a noite.",
    option_e:
      "Porque carregavam malas pesadas cheias de livros e instrumentos cirúrgicos de ferro.",
    correct_option: "B",
    explanation:
      'No Capítulo 15 ("A viagem"), Aniceto explica a lei física e magnética das esferas espirituais: ao penetrar camadas de baixa vibração e grande densidade fluídica, o espírito precisa caminhar no chão da zona inferior.',
    reference: 'Os Mensageiros — Cap. 15 ("A viagem")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 766,
    book: "os_mensageiros",
    statement:
      'No Capítulo 16 ("No Posto de Socorro"), a qual colônia espiritual está diretamente subordinado o grande Posto de Socorro dirigido por Alfredo, e como se apresenta a paisagem no interior de suas muralhas?',
    option_a:
      "Subordina-se à colônia Alvorada Nova e consiste num deserto árido sem nenhuma árvore ou gota de água.",
    option_b:
      "Subordina-se ao Ministério da Elevação e possui apenas teatros de ópera e galerias de escultura.",
    option_c:
      "Subordina-se à colônia 'Campo da Paz' e, contrastando com a região caliginosa externa, ostenta no interior jardins bem cuidados, fontes luminosas, pavilhões hospitalares e ambiente de trabalho e refazimento cristão.",
    option_d:
      "Não se subordina a nenhuma colônia, sendo um feudo particular comprado por Alfredo no século XIX.",
    option_e:
      "Subordina-se diretamente à prefeitura municipal do Rio de Janeiro, mantendo arquitetura de cimento armado.",
    correct_option: "C",
    explanation:
      'No Capítulo 16 ("No Posto de Socorro"), André Luiz admira o contraste entre a charneca sombria de fora e o oásis de luz, ordem e vegetação reconfortante daquele Posto avançado da colônia "Campo da Paz".',
    reference: 'Os Mensageiros — Cap. 16 ("No Posto de Socorro")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 767,
    book: "os_mensageiros",
    statement:
      'No Capítulo 17 ("O romance de Alfredo"), quando Ismália desencarnou na fazenda paterna vitimada pela tuberculose e pela dor da calúnia, quem veio buscá-la e o que aconteceu a Alfredo quando ele próprio desencarnou anos mais tarde?',
    option_a:
      "Ismália ficou vagando um século no Umbral, enquanto Alfredo subiu diretamente para as esferas resplandecentes.",
    option_b:
      "Ambos reencarnaram no dia seguinte na mesma cidade sem jamais se reencontrarem no plano espiritual.",
    option_c:
      "Ismália recusou qualquer socorro celeste e passou a obsediar o marido caluniador até levá-lo à loucura.",
    option_d:
      "Ismália foi recebida por mensageiros luminosos como mártir da paciência e da fidelidade, e mais tarde foi ela mesma quem desceu às zonas de sofrimento para socorrer e reerguer Alfredo, que amargava o remorso e o ódio.",
    option_e:
      "O pai de Ismália proibiu para sempre que ela dirigisse a palavra a Alfredo na vida eterna.",
    correct_option: "D",
    explanation:
      'No Capítulo 17 ("O romance de Alfredo"), Alfredo narra em lágrimas como a esposa inocente que ele expulsara de casa tornou-se seu anjo salvador no Além, amparando-o nas sombras e incentivando-o a redimir-se no trabalho do Posto.',
    reference: 'Os Mensageiros — Cap. 17 ("O romance de Alfredo")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 768,
    book: "os_mensageiros",
    statement:
      'No Capítulo 18 ("Informações e esclarecimentos"), o que provoca a violenta "tempestade magnética" que obriga a caravana de Aniceto a pernoitar no Posto de Socorro de Alfredo?',
    option_a:
      "Uma erupção vulcânica submarina ocorrida nas costas do continente antártico.",
    option_b:
      "O rompimento das comportas do Rio Azul no Bosque das Águas de Nosso Lar.",
    option_c:
      "Um teste de aparelhos elétricos realizado pelos engenheiros do Ministério do Esclarecimento.",
    option_d:
      "A passagem de um cometa físico próximo à órbita da Lua.",
    option_e:
      "O turbilhão de pensamentos de ódio, desespero, vingança e dor vomitados continuamente pelos campos de batalha da Segunda Guerra Mundial, adensando as nuvens de matéria mental inferior nas zonas baixas.",
    correct_option: "E",
    explanation:
      'No Capítulo 18 ("Informações e esclarecimentos"), Alfredo explica que as guerras na crosta produzem pavorosas tormentas magnéticas e furacões de formas-pensamento destrutivas nas regiões espirituais circunvizinhas.',
    reference: 'Os Mensageiros — Cap. 18 ("Informações e esclarecimentos")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 769,
    book: "os_mensageiros",
    statement:
      'No Capítulo 19 ("O sopro"), que diferença técnica Alfredo explica a André Luiz entre o "sopro quente" e o "sopro frio" utilizados no magnetismo espiritual e humano?',
    option_a:
      "Ambos possuem sublimes funções terapêuticas quando dirigidos pela vontade amorosa, servindo para estimular as energias vitais (sopro quente/revigorador) ou acalmar dores, febres e excitações psíquicas (sopro fresco/calmante), mobilizando forças que o passe manual comum às vezes não alcança.",
    option_b:
      "O sopro quente serve para matar bactérias pelo fogo e o sopro frio congela os órgãos perispirituais.",
    option_c:
      "O sopro espiritual só pode ser aplicado por espíritos que desencarnaram de pneumonia.",
    option_d:
      "Não existe nenhuma diferença nem utilidade no sopro, sendo apenas uma superstição antiga.",
    option_e:
      "O sopro substitui completamente a necessidade de reforma moral e de prece do enfermo.",
    correct_option: "A",
    explanation:
      'No Capítulo 19 ("O sopro"), Alfredo e as cooperadoras Olívia e Madalena demonstram a ciência sutil da insuflação magnética (calmante e revigoradora), que opera prodígios no socorro aos desencarnados em crise.',
    reference: 'Os Mensageiros — Cap. 19 ("O sopro")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 770,
    book: "os_mensageiros",
    statement:
      'No Capítulo 20 ("Defesas contra o mal"), que símbolo tremula no alto da torre de vigia do Posto de Socorro de Alfredo, mesmo estando a instituição cercada de fossos e baterias elétricas defensivas?',
    option_a:
      "Uma bandeira negra com o desenho de uma espada flamejante de guerra.",
    option_b:
      "Uma grande bandeira alva (branca), simbolizando a Paz de Jesus e anunciando a todos os espíritos que ali existe um refúgio de amor e socorro para quantos busquem o bem.",
    option_c:
      "O brasão heráldico da antiga nobreza medieval portuguesa.",
    option_d:
      "Um estandarte vermelho proibindo a aproximação de qualquer caravana visitante.",
    option_e:
      "Uma placa metálica informando que os serviços do Posto são cobrados em ouro.",
    correct_option: "B",
    explanation:
      'No Capítulo 20 ("Defesas contra o mal"), André Luiz observa a bandeira alvíssima desfraldada na torre: o Posto defende-se energeticamente contra o assalto de hordas perversas, mas mantém arvorado o pavilhão branco da paz e do acolhimento cristão.',
    reference: 'Os Mensageiros — Cap. 20 ("Defesas contra o mal")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 771,
    book: "os_mensageiros",
    statement:
      'No Capítulo 21 ("Espíritos dementados"), por que Alfredo trata com tanta paciência e brandura o velho Malaquias, o fidalgo Aristarco e a senhora homicida, sem contrariar bruscamente os delírios de posse e época em que viviam?',
    option_a:
      "Porque Alfredo também acreditava que ainda estava vivendo no Brasil Império sob o reinado de D. Pedro II.",
    option_b:
      "Porque tinha medo de ser demitido por Aristarco e pelo Visconde de Cairu.",
    option_c:
      "Porque aqueles espíritos eram doentes mentais cristalizados em ideias fixas (monoideísmo), e o choque violento da verdade sem preparo gradual apenas agravaria sua loucura, exigindo psicoterapia compassiva e tempo.",
    option_d:
      "Porque as leis de Campo da Paz proíbem que os enfermos recobrem a lucidez mental.",
    option_e:
      "Porque pretendia comprar as fazendas e os escravos que Malaquias julgava possuir.",
    correct_option: "C",
    explanation:
      'No Capítulo 21 ("Espíritos dementados"), Alfredo exemplifica a psiquiatria espiritual iluminada pelo amor, acolhendo os alienados mentais pós-morte com paciência até que o tempo e o magnetismo lhes desfaçam a hipnose.',
    reference: 'Os Mensageiros — Cap. 21 ("Espíritos dementados")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 772,
    book: "os_mensageiros",
    statement:
      'No Capítulo 22 ("Os que dormem"), além dos ateus e negativistas sistemáticos, que outra classe de pessoas encarnadas costuma cair naquele sono letárgico e cataléptico nos pavilhões após a morte do corpo?',
    option_a:
      "Os missionários que trabalharam excessivamente na caridade cristã.",
    option_b:
      "As crianças que desencarnaram antes de completar sete anos de idade.",
    option_c:
      "Os cientistas que descobriram vacinas benéficas para a humanidade.",
    option_d:
      "Os crentes preguiçosos e egoístas que imaginavam a vida espiritual como um 'sono eterno até o juízo final' ou um ócio beatífico sem trabalho, hipnotizando a própria mente na inércia.",
    option_e:
      "Os trabalhadores rurais que cultivavam a terra com honestidade e prece.",
    correct_option: "D",
    explanation:
      'No Capítulo 22 ("Os que dormem"), Aniceto esclarece que tanto o materialismo negador quanto a falsa fé que espera o "sono do túmulo" ou a ociosidade celestial paralisam os movimentos do espírito desencarnado.',
    reference: 'Os Mensageiros — Cap. 22 ("Os que dormem")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 773,
    book: "os_mensageiros",
    statement:
      'No Capítulo 23 ("Pesadelos"), quando André Luiz examina a tela mental da adormecida Ana e vê o crime hediondo que ela praticara na Terra, que advertência Aniceto lhe faz sobre a atitude do médico ou socorrista diante do criminoso?',
    option_a:
      "Que o socorrista deve abandonar imediatamente o criminoso entregue aos seus remorsos.",
    option_b:
      "Que o crime de homicídio anula para sempre a filiação divina do espírito culpado.",
    option_c:
      "Que André deveria despertar Ana aos gritos para acusá-la publicamente diante dos 1.980 internos.",
    option_d:
      "Que os médicos de Nosso Lar só devem atender espíritos que tenham ficha moral irrepreensível.",
    option_e:
      "Que a maldade e o crime são graves enfermidades da alma ignorante, e que, se o médico físico não sente ódio do corpo canceroso ou ulcerado, o médico espiritual deve sentir compaixão ainda maior pelos doentes morais.",
    correct_option: "E",
    explanation:
      'No Capítulo 23 ("Pesadelos"), Aniceto aprofunda a lição evangélica do perdão e da medicina espiritual, ensinando André a substituir a indignação condenatória pela piedade fraternal que socorre e cura.',
    reference: 'Os Mensageiros — Cap. 23 ("Pesadelos")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 774,
    book: "os_mensageiros",
    statement:
      'No Capítulo 24 ("A prece de Ismália"), de que esfera espiritual desce Ismália com sua caravana de colaboradoras para visitar o Posto de Socorro e realizar o serviço de oração pelos adormecidos?',
    option_a:
      "De uma esfera muito elevada, superior até mesmo a Nosso Lar e a Campo da Paz, de onde ela baixa periodicamente por amor a Alfredo e aos sofredores daquelas regiões.",
    option_b:
      "Das zonas profundas do Umbral, onde ela ainda cumpria penitência pelo casamento infeliz.",
    option_c:
      "Diretamente da cidade do Rio de Janeiro, onde ela ainda se encontrava encarnada.",
    option_d:
      "Do Pavilhão 7 das Câmaras de Retificação dirigidas por Nemésia.",
    option_e:
      "De um posto militar instalado nos campos de batalha da Inglaterra.",
    correct_option: "A",
    explanation:
      'Nos Capítulos 17 e 24 de "Os Mensageiros", esclarece-se que Ismália habita planos sublimes de luz, mas desce regularmente ao Posto de Socorro para consolar o esposo Alfredo e espalhar bênçãos sobre os enfermos.',
    reference: 'Os Mensageiros — Cap. 24 ("A prece de Ismália")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 775,
    book: "os_mensageiros",
    statement:
      'No Capítulo 25 ("Efeitos da oração"), que destino imediato recebem os dois únicos enfermos que conseguem despertar do sono cataléptico e erguer-se do leito após a prece coletiva de Ismália?',
    option_a:
      "São enviados de volta à crosta terrestre na mesma hora sem qualquer explicação.",
    option_b:
      "São acolhidos com carinho pelos enfermeiros de Alfredo e encaminhados a pavilhões especiais de tratamento e reeducação gradual, onde começarão a compreender sua nova situação espiritual.",
    option_c:
      "São nomeados imediatamente diretores do Ministério do Esclarecimento em Nosso Lar.",
    option_d:
      "São expulsos do Posto de Socorro para que aprendam a caminhar sozinhos na charneca.",
    option_e:
      "Voltam a cair em coma profundo por ordem expressa do instrutor Aniceto.",
    correct_option: "B",
    explanation:
      'No Capítulo 25 ("Efeitos da oração"), os dois recém-despertos — ainda trêmulos e assustados como crianças que acordam em lugar desconhecido — são carinhosamente amparados pela equipe de Alfredo para o trabalho paciente de reajustamento.',
    reference: 'Os Mensageiros — Cap. 25 ("Efeitos da oração")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 776,
    book: "os_mensageiros",
    statement:
      'No Capítulo 26 ("Ouvindo servidores"), que providência generosa Alfredo promete tomar em favor da viúva e dos filhinhos do servidor Alonso, já que este ainda não possuía fortaleza emocional para ir pessoalmente à Terra?',
    option_a:
      "Promete que desencarnará a viúva e as crianças na semana seguinte para trazê-los ao Posto.",
    option_b:
      "Diz que nada pode ser feito porque os encarnados estão entregues ao acaso.",
    option_c:
      "Compromete-se a solicitar que tarefeiros experientes e equilibrados em serviço na Crosta visitem o lar de Alonso, levando socorro magnético, consolação e inspiração de paz à viúva e aos pequeninos.",
    option_d:
      "Ordena que Alonso esqueça para sempre o nome dos filhos e se case novamente no Posto.",
    option_e:
      "Envia um saco de moedas de ouro materializadas para a porta da casa da viúva.",
    correct_option: "C",
    explanation:
      'No Capítulo 26 ("Ouvindo servidores"), Alfredo alia a prudência disciplinar à ternura fraterna: preserva Alonso de uma queda sentimental, mas providencia assistência espiritual segura para a família dele na Terra.',
    reference: 'Os Mensageiros — Cap. 26 ("Ouvindo servidores")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 777,
    book: "os_mensageiros",
    statement:
      'No Capítulo 27 ("O caluniador"), por que Paulo (o antigo sócio traidor de Alfredo) ainda enxergava Alfredo como um velho severo e Ismália como uma mulher tuberculosa e acusadora, quando ambos já resplandeciam de juventude e amor espiritual?',
    option_a:
      "Porque Alfredo e Ismália usavam máscaras assustadoras sempre que entravam no quarto de Paulo.",
    option_b:
      "Porque a iluminação elétrica da câmara isolada apresentava defeito técnico proposital.",
    option_c:
      "Porque Aniceto havia hipnotizado Paulo para que ele nunca fosse perdoado.",
    option_d:
      "Porque a consciência culpada de Paulo funcionava como um espelho deformado pelo remorso, projetando sobre os benfeitores as próprias imagens mentais do crime que ele cometera no passado.",
    option_e:
      "Porque Paulo havia perdido completamente os globos oculares perispirituais na desencarnação.",
    correct_option: "D",
    explanation:
      'No Capítulo 27 ("O caluniador"), Aniceto explica a lei psicológica da percepção espiritual: vemos os outros através das lentes de nossa própria consciência, e a dívida moral gera os fantasmas da cobrança até que a alma se purifique.',
    reference: 'Os Mensageiros — Cap. 27 ("O caluniador")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 778,
    book: "os_mensageiros",
    statement:
      'No Capítulo 28 ("Vida social"), quem acompanha o Sr. Bacelar na visita ao Posto de Socorro e que belo exemplo de harmonia familiar eles oferecem aos aprendizes de "Nosso Lar"?',
    option_a:
      "Apenas guardas armados de lanças elétricas que vinham escoltar prisioneiros.",
    option_b:
      "O médico Dr. Fidélis e o comerciante Monteiro, que vinham debater metapsíquica.",
    option_c:
      "Trinta ministros da Governadoria de Nosso Lar em viagem diplomática oficial.",
    option_d:
      "Os espíritos dementados Malaquias e Aristarco, já completamente curados.",
    option_e:
      "Sua esposa, a filha Cecília e a sobrinha Aldonina, demonstrando que nas colônias dedicadas ao trabalho no bem a vida social e familiar é cultivada com santa alegria, música, afeto puro e cooperação.",
    correct_option: "E",
    explanation:
      'No Capítulo 28 ("Vida social"), a chegada da família Bacelar mostra a André Luiz como os espíritos redimidos no trabalho mantêm laços sociais encantadores, sem a futilidade nem a maledicência dos salões terrestres.',
    reference: 'Os Mensageiros — Cap. 28 ("Vida social")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 779,
    book: "os_mensageiros",
    statement:
      'No Capítulo 29 ("Notícias interessantes"), ao descrever a localização e a estrutura de "Campo da Paz", que detalhe geográfico e defensivo Cecília revela sobre os arredores daquela colônia espiritual?',
    option_a:
      "Que, por estar situada em plena zona inferior de luta contra falanges obsessoras, 'Campo da Paz' mantém uma rede de Postos de Socorro avançados distribuídos de dez em dez quilômetros ao redor de seu núcleo central.",
    option_b:
      "Que 'Campo da Paz' flutua nas camadas superiores da estratosfera, acima da União Divina de Nosso Lar.",
    option_c:
      "Que a colônia foi construída no fundo do mar para evitar o contato com espíritos desencarnados.",
    option_d:
      "Que 'Campo da Paz' possui apenas três habitantes e nenhum hospital ou escola.",
    option_e:
      "Que a colônia está desativada desde o término da Primeira Guerra Mundial.",
    correct_option: "A",
    explanation:
      'Nos Capítulos 29 e 30 de "Os Mensageiros", Cecília explica que "Campo da Paz" é um verdadeiro campo de batalha iluminado pela Paz de Jesus no seio das zonas inferiores, guarnecido por Postos de Socorro a cada dez quilômetros.',
    reference: 'Os Mensageiros — Cap. 29 ("Notícias interessantes")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 780,
    book: "os_mensageiros",
    statement:
      'No Capítulo 30 ("Em palestra afetuosa"), o que Cecília quer dizer quando conta que sua irmã Isaura e o noivo Antônio trabalharam durante seis anos antes das bodas em Campo da Paz para "apurar o enxoval dos sentimentos"?',
    option_a:
      "Que passaram seis anos fabricando móveis de madeira e cortinas de seda nas oficinas da colônia.",
    option_b:
      "Que dedicaram seis anos a tarefas abnegadas de assistência aos sofredores e autoaperfeiçoamento moral, preparando a harmonia íntima das almas para uma união verdadeiramente espiritual e duradoura.",
    option_c:
      "Que precisaram juntar um milhão de bônus-hora para pagar a festa de casamento aos Ministros.",
    option_d:
      "Que ficaram seis anos sem se ver e sem se falar por imposição do Sr. Bacelar.",
    option_e:
      "Que desceram à Terra para comprar joias e vestidos de noiva nas lojas do Rio de Janeiro.",
    correct_option: "B",
    explanation:
      'No Capítulo 30 ("Em palestra afetuosa"), a expressão "apurar o enxoval dos sentimentos" traduz a preparação moral e afetiva dos noivos espirituais, alicerçada no serviço fraterno e na afinidade superior.',
    reference: 'Os Mensageiros — Cap. 30 ("Em palestra afetuosa")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 781,
    book: "os_mensageiros",
    statement:
      'No Capítulo 31 ("Cecília ao órgão"), quem era Hermínio, o espírito a quem a jovem Cecília dedica sua comovente canção de saudade e esperança no Salão de Música do Posto de Socorro?',
    option_a:
      "O Governador fundador da colônia Campo da Paz.",
    option_b:
      "Um irmão consanguíneo de André Luiz que desencarnara na infância.",
    option_c:
      "O antigo bem-amado de Cecília que, tendo reencarnado na Terra para redimir-se, infelizmente falira nas provas mundanas e ainda se arrastava nas quedas do plano físico, mas por quem ela continuava velando e esperando com amor fiel.",
    option_d:
      "O compositor alemão Johann Sebastian Bach, autor da Tocata e Fuga em Ré Menor.",
    option_e:
      "Um guarda vigilante que trabalhava ao lado de Glicério nas estradas rurais.",
    correct_option: "C",
    explanation:
      'No Capítulo 31 ("Cecília ao órgão"), Cecília abre o coração em música dedicando seus versos a Hermínio, seu companheiro espiritual que sucumbira às tentações terrestres, recebendo de Ismália o consolo de que o amor puro resplandece até no fundo do abismo.',
    reference: 'Os Mensageiros — Cap. 31 ("Cecília ao órgão")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 782,
    book: "os_mensageiros",
    statement:
      'No Capítulo 32 ("Melodia sublime"), que destino têm as pequeninas flores fluídicas azul-celeste que se desprendem do coração de Ismália enquanto ela executa sua prece musical ao órgão?',
    option_a:
      "Transformam-se em pedras preciosas que são guardadas no cofre da administração.",
    option_b:
      "Evaporam-se imediatamente no teto sem tocar nenhum dos presentes no salão.",
    option_c:
      "Causam queimaduras leves nas mãos dos espíritos menos evoluídos da assembleia.",
    option_d:
      "Espalham-se suavemente pelo ambiente e são recolhidas com alegria pelas crianças e pelos assistentes no peito, deixando em todos um perfume celestial de paz, renovação e bênção espiritual.",
    option_e:
      "São levadas pelo vento para alimentar os íbis viajores nas muralhas externas.",
    correct_option: "D",
    explanation:
      'No Capítulo 32 ("Melodia sublime"), as corolas azul-celeste geradas pelo sentimento angélico de Ismália caem sobre os ouvintes como dádivas vivas de consolação e harmonia divina.',
    reference: 'Os Mensageiros — Cap. 32 ("Melodia sublime")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 783,
    book: "os_mensageiros",
    statement:
      'No Capítulo 33 ("A caminho da Crosta"), ao chegarem às praias da baía da Guanabara no Rio de Janeiro após a longa jornada, por que Aniceto convida Vicente e André Luiz a caminharem alguns instantes junto às ondas do mar?',
    option_a:
      "Para apanharem peixes físicos destinados ao jantar na casa de Dona Isabel.",
    option_b:
      "Para tomarem um barco a vela que os levaria até o continente europeu.",
    option_c:
      "Para esconderem o carro voador de Alfredo debaixo das areias da praia.",
    option_d:
      "Para fugirem da perseguição dos guardas municipais da prefeitura carioca.",
    option_e:
      "Para absorverem os recursos magnéticos e vitais da natureza marinha sob a luz solar, refazendo rapidamente as energias perispirituais desgastadas na travessia das zonas caliginosas.",
    correct_option: "E",
    explanation:
      'No Capítulo 33 ("A caminho da Crosta"), Aniceto explica o valor revigorante do magnetismo oceânico combinado à irradiação solar para o refazimento das forças dos trabalhadores espirituais em serviço na Crosta.',
    reference: 'Os Mensageiros — Cap. 33 ("A caminho da Crosta")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 784,
    book: "os_mensageiros",
    statement:
      'No Capítulo 34 ("Oficina de \'Nosso Lar\'"), que espetáculo doloroso André Luiz e Vicente presenciam nas ruas movimentadas do Rio de Janeiro antes de entrarem na residência de Dona Isabel e Isidoro?',
    option_a:
      "Uma multidão de desencarnados perturbados e viciados caminhando colados aos transeuntes encarnados, vampirizando-lhes as forças e insuflando-lhes pensamentos de cólera, sensualidade, cobiça e desânimo.",
    option_b:
      "O desfile militar das tropas que regressavam vitoriosas da Segunda Guerra Mundial.",
    option_c:
      "Uma cidade inteiramente vazia, pois todos os moradores haviam se mudado para o campo.",
    option_d:
      "Anjos alados visíveis a olho nu conversando em cada esquina com os motoristas de bonde.",
    option_e:
      "A destruição dos edifícios públicos por um terremoto de grande intensidade.",
    correct_option: "A",
    explanation:
      'No Capítulo 34 ("Oficina de \'Nosso Lar\'"), com a visão espiritual dilatada, André Luiz enxerga a triste simbiose obsessiva nas vias públicas, onde encarnados invigilantes carregam verdadeiros parasitas espirituais.',
    reference: "Os Mensageiros — Cap. 34 (\"Oficina de 'Nosso Lar'\")",
    difficulty: "facil",
    active: true,
  },
  {
    code: 785,
    book: "os_mensageiros",
    statement:
      'No Capítulo 35 ("Culto doméstico"), durante a leitura feita pela jovem Joaninha no culto do Evangelho no Lar de Dona Isabel, que notícia dos jornais do dia é comentada pela família como exemplo trágico da falta de fé e de reflexão?',
    option_a:
      "O naufrágio de um transatlântico de luxo nas costas da Inglaterra.",
    option_b:
      "O suicídio de uma jovem da sociedade que, contrariada em seus caprichos sentimentais e sem alicerce religioso no coração, ingerira veneno para fugir às lutas da vida.",
    option_c:
      "O assalto a uma agência bancária no centro comercial do Rio de Janeiro.",
    option_d:
      "A queda de um avião postal na cordilheira dos Andes.",
    option_e:
      "A eleição de um novo prefeito para o distrito federal.",
    correct_option: "B",
    explanation:
      'No Capítulo 35 ("Culto doméstico"), Joaninha comenta o caso doloroso da jovem suicida noticiado pela imprensa, ensejando a prece compassiva da menina Neli e os ensinamentos maternos de Dona Isabel sobre a paciência e a fé.',
    reference: 'Os Mensageiros — Cap. 35 ("Culto doméstico")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 786,
    book: "os_mensageiros",
    statement:
      'No Capítulo 36 ("Mãe e filhos"), por que razão o menino Joãozinho, de doze anos, mostrava temperamento tão diferente das quatro irmãs (Joaninha, Marieta, Neli e Noemi), inclinando-se à ironia e à ambição financeira?',
    option_a:
      "Porque não era filho biológico de Dona Isabel, tendo sido sequestrado de outra família.",
    option_b:
      "Porque sofria de uma lesão cerebral irreversível causada por uma queda na infância.",
    option_c:
      "Porque era um espírito procedente de regiões inferiores, antigo devedor acolhido por Isidoro e Isabel para reeducação no santuário familiar, trazendo ainda fortes tendências do passado.",
    option_d:
      "Porque fora instruído pelo próprio pai desencarnado a fechar a oficina evangélica.",
    option_e:
      "Porque os mentores de Nosso Lar o haviam proibido de assistir ao culto doméstico.",
    correct_option: "C",
    explanation:
      'No Capítulo 36 ("Mãe e filhos"), explica-se que no lar cristão reúnem-se espíritos de diferentes graus evolutivos, sendo Joãozinho um companheiro ainda rebelde que recebia na ternura firme de Dona Isabel a bênção da escola regeneradora.',
    reference: 'Os Mensageiros — Cap. 36 ("Mãe e filhos")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 787,
    book: "os_mensageiros",
    statement:
      'No Capítulo 37 ("No santuário doméstico"), além das claridades defensivas geradas pela oração familiar, que trabalho os cooperadores espirituais realizavam no jardim e no telhado da casa de Dona Isabel durante a tempestade noturna?',
    option_a:
      "Substituíam as telhas de barro quebradas por placas de ouro maciço.",
    option_b:
      "Dormiam profundamente em redes suspensas entre as mangueiras do quintal.",
    option_c:
      "Discutiam política internacional com os espíritos vagabundos da calçada.",
    option_d:
      "Mantiam cordões de vigilância magnética e limpavam a atmosfera psíquica ao redor do imóvel, impedindo a infiltração de entidades zombeteiras ou malévolas e preparando o recinto para os trabalhos da madrugada.",
    option_e:
      "Recolhiam água da chuva em baldes físicos para vender aos vizinhos.",
    correct_option: "D",
    explanation:
      'No Capítulo 37 ("No santuário doméstico"), André Luiz observa a dedicação das sentinelas e trabalhadores invisíveis que guarnecem a oficina doméstica de Dona Isabel dia e noite.',
    reference: 'Os Mensageiros — Cap. 37 ("No santuário doméstico")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 788,
    book: "os_mensageiros",
    statement:
      'No Capítulo 38 ("Atividade plena"), por que tantos encarnados que comparecem em espírito (desdobrados pelo sono físico) à oficina de Dona Isabel durante a noite mostram-se trêmulos, semiadormecidos ou incapazes de conversar com lucidez?',
    option_a:
      "Porque ingeriram venenos mortais antes de se deitarem em suas residências.",
    option_b:
      "Porque os vigilantes de Isidoro aplicam anestesia geral em todos os visitantes noturnos.",
    option_c:
      "Porque o idioma falado nas reuniões espirituais noturnas é o aramaico antigo.",
    option_d:
      "Porque o corpo físico impede absolutamente qualquer saída da alma antes da morte definitiva.",
    option_e:
      "Porque a maioria dos encarnados adormece sem prece, com o estômago sobrecarregado de alimentos pesados e a mente presa a preocupações materiais ou paixões inferiores, o que lhes entorpece a liberdade e a lucidez no desdobramento.",
    correct_option: "E",
    explanation:
      'No Capítulo 38 ("Atividade plena"), Aniceto mostra a André Luiz o contraste entre os raros encarnados que se desprendem lúcidos pela preparação espiritual e a multidão que traz para o sono o torpor dos excessos físicos e mentais.',
    reference: 'Os Mensageiros — Cap. 38 ("Atividade plena")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 789,
    book: "os_mensageiros",
    statement:
      'No Capítulo 39 ("Trabalho incessante"), após a repreensão fraterna aos auxiliares Vieira e Hildegardo, que caso comovente de socorro materno é atendido na oficina de Dona Isabel antes do amanhecer?',
    option_a:
      "O pedido de uma pobre mãe desencarnada que implorava auxílio para sua filha encarnada Dalva, a qual estava prestes a cair num abismo moral de sedução e desonra, sendo designados cooperadores para ampará-la.",
    option_b:
      "A solicitação de um banqueiro desencarnado que queria recuperar um cofre perdido no mar.",
    option_c:
      "O atendimento a um general europeu que pedia planos estratégicos para vencer uma batalha.",
    option_d:
      "A cura cirúrgica de um cavalo de corrida pertencente ao vizinho Maciel.",
    option_e:
      "A realização de um casamento civil entre dois espíritos recém-chegados do Umbral.",
    correct_option: "A",
    explanation:
      'No Capítulo 39 ("Trabalho incessante"), enquanto parentes levianos como o tio Hilário e o primo Carlos precisavam ser barrados, a súplica sincera daquela mãe aflita em favor da filha Dalva recebe imediato e amoroso acolhimento dos mentores.',
    reference: 'Os Mensageiros — Cap. 39 ("Trabalho incessante")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 790,
    book: "os_mensageiros",
    statement:
      'No Capítulo 40 ("Rumo ao campo"), ao observarem a ação purificadora dos raios solares sobre a atmosfera psíquica da cidade, como Aniceto define o Sol para André Luiz e Vicente?',
    option_a:
      "Como uma simples bola de gás incandescente sem qualquer influência sobre a vida espiritual.",
    option_b:
      'Como "na Natureza física, a mais alta imagem de Deus que conhecemos", cujo influxo magnético, conjugado às forças da Terra, destrói incessantemente miríades de larvas mentais e formações microbianas inferiores.',
    option_c:
      "Como uma colônia penal onde habitam os espíritos mais rebeldes do sistema planetário.",
    option_d:
      "Como um espelho côncavo construído pelos engenheiros de Alvorada Nova.",
    option_e:
      "Como um astro frio que só aquece as regiões próximas à linha do equador.",
    correct_option: "B",
    explanation:
      'Nos Capítulos 33 e 40 de "Os Mensageiros", Aniceto exalta a missão sublime da luz solar como agente de higienização física e fluídica, saneando as sombras e os miasmas produzidos pela imprevidência humana.',
    reference: 'Os Mensageiros — Cap. 40 ("Rumo ao campo")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 791,
    book: "os_mensageiros",
    statement:
      'No Capítulo 41 ("Entre as Árvores"), por que Aniceto explica que durante o dia dois terços dos cooperadores espirituais repousam ou estudam, permanecendo apenas um terço na vigilância direta junto aos encarnados?',
    option_a:
      "Porque a luz do Sol cega os espíritos desencarnados e os impede de caminhar nas cidades.",
    option_b:
      "Porque os sindicatos de Nosso Lar proíbem o trabalho diurno nas zonas da Crosta.",
    option_c:
      "Porque durante a vigília diurna o homem encarnado deve usar o próprio discernimento e livre-arbítrio para escrever sua 'página diária' de testemunho, sem ser transformado em marionete sem mérito pessoal.",
    option_d:
      "Porque durante o dia não ocorre nenhum crime nem tentação espiritual sobre a Terra.",
    option_e:
      "Porque todos os mentores precisam voltar a Nosso Lar ao meio-dia para almoçar no Parque Hospitalar.",
    correct_option: "C",
    explanation:
      'No Capítulo 41 ("Entre as Árvores"), Aniceto ensina que a assistência espiritual não anula a responsabilidade individual: durante o dia o encarnado está mais entregue à própria consciência para demonstrar o que aprendeu.',
    reference: 'Os Mensageiros — Cap. 41 ("Entre as Árvores")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 792,
    book: "os_mensageiros",
    statement:
      'No Capítulo 42 ("Evangelho no ambiente rural"), quem são as entidades invisíveis que se reúnem em torno de Aniceto sob a frondosa figueira do campo para ouvir a leitura e o comentário da Epístola de Paulo aos Romanos?',
    option_a:
      "Os senadores e deputados encarnados que passavam de automóvel pela rodovia.",
    option_b:
      "Os 72 Ministros de Nosso Lar que vieram de aeróbus especialmente para a solenidade.",
    option_c:
      "Apenas André Luiz e Vicente, pois não havia nenhum outro ser vivo naquela fazenda.",
    option_d:
      "Os humildes cooperadores espirituais dedicados à proteção da lavoura, das árvores e das águas, acompanhados inclusive por rebanhos de bois, muares e aves que se aproximam em respeitoso silêncio.",
    option_e:
      "Um grupo de espíritos zombeteiros que pretendia destruir o pomar com pragas agrícolas.",
    correct_option: "D",
    explanation:
      'No Capítulo 42 ("Evangelho no ambiente rural"), André Luiz presencia uma cena de sublime beleza franciscana: servidores espirituais da natureza e os próprios animais do campo recolhem-se em paz para ouvir a palavra evangélica de Aniceto.',
    reference: 'Os Mensageiros — Cap. 42 ("Evangelho no ambiente rural")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 793,
    book: "os_mensageiros",
    statement:
      'No Capítulo 43 ("Antes da reunião"), como Aniceto define a chamada "volúpia da enfermidade" observada em muitos espíritos desencarnados que comparecem às sessões espíritas gemendo e exibindo feridas imaginárias?',
    option_a:
      "Como uma lesão irreversível produzida pelas armas químicas da Segunda Guerra Mundial.",
    option_b:
      "Como um prêmio concedido por Jesus aos que sofreram com paciência nos hospitais.",
    option_c:
      "Como um fenômeno puramente físico causado pela umidade das salas de reunião.",
    option_d:
      "Como uma técnica avançada de camuflagem usada pelos instrutores do Ministério do Auxílio.",
    option_e:
      "Como o hábito doentio de pessoas que na Terra viviam exagerando sintomas, colecionando remédios e reclamando compaixão alheia, de tal modo que após a morte continuam mentalmente apegadas às doenças que cultivavam.",
    correct_option: "E",
    explanation:
      'No Capítulo 43 ("Antes da reunião"), Aniceto adverte contra a hipocondria e o vício da queixa constante ("volúpia da enfermidade"), que imprimem no perispírito a aparência das moléstias mesmo depois do túmulo.',
    reference: 'Os Mensageiros — Cap. 43 ("Antes da reunião")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 794,
    book: "os_mensageiros",
    statement:
      'No Capítulo 44 ("Assistência"), depois de restituir a visão à senhora desencarnada que se julgava cega pelo tracoma, quantos outros enfermos espirituais André Luiz atende em seguida naquela mesma reunião e qual é o resultado?',
    option_a:
      "Atende mais cinco doentes desencarnados: apenas o primeiro experimenta alívio sensível, enquanto os outros quatro permanecem fechados na própria perturbação sem apresentar melhora imediata.",
    option_b:
      "Atende mais cem doentes desencarnados e todos ficam instantaneamente curados e iluminados.",
    option_c:
      "Recusa-se a atender qualquer outro enfermo para não gastar suas reservas magnéticas.",
    option_d:
      "Atende apenas o Dr. Fidélis, aplicando-lhe um passe que o faz levitar até o teto da sala.",
    option_e:
      "Não consegue atender mais ninguém porque desmaia de exaustão nos braços de Vicente.",
    correct_option: "A",
    explanation:
      'No Capítulo 44 ("Assistência"), o contraste entre a cura espetacular da primeira doente e a aparente ausência de resultado nos quatro últimos serve de base para a lição de Aniceto contra a vaidade e a impaciência no serviço do bem.',
    reference: 'Os Mensageiros — Cap. 44 ("Assistência")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 795,
    book: "os_mensageiros",
    statement:
      'No Capítulo 45 ("Mente enferma"), que contraste espiritual André Luiz observa entre a figura exterior do Dr. Fidélis (elegante, culto e respeitado no mundo) e sua realidade perispiritual vista pelos olhos dos mensageiros?',
    option_a:
      "Dr. Fidélis ostentava uma auréola de luz dourada idêntica à de Francisco de Assis.",
    option_b:
      "Apesar do verniz acadêmico e da pose de pesquisador superior, sua mente emitia nuvens escuras de orgulho, ceticismo frio e sensualidade oculta, sendo rodeado por entidades inferiores que lhe exploravam a vaidade.",
    option_c:
      "Dr. Fidélis não possuía perispírito nem aura vital por ser estudioso de metapsíquica.",
    option_d:
      "Seu cérebro emitia flores azuis perfumadas semelhantes às da prece de Ismália.",
    option_e:
      "Ele já estava desencarnado havia dez anos sem que o doutrinador Bentes percebesse.",
    correct_option: "B",
    explanation:
      'No Capítulo 45 ("Mente enferma"), André Luiz constata como a cultura intelectual sem moralidade evangélica pode esconder graves enfermidades da alma, tornando o falso sábio joguete de sombras invisíveis.',
    reference: 'Os Mensageiros — Cap. 45 ("Mente enferma")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 796,
    book: "os_mensageiros",
    statement:
      'No Capítulo 46 ("Aprendendo sempre"), como os médicos e orientadores espirituais da equipe de Isidoro procedem para responder aos pedidos justos de receituário médico colocados sobre a mesa da reunião?',
    option_a:
      "Materializam caixas de remédios industriais diretamente no bolso de cada consulente.",
    option_b:
      "Sorteiam receitas prontas ao acaso sem examinar a situação orgânica dos doentes.",
    option_c:
      "Examinam cuidadosamente as fichas e as necessidades reais de cada enfermo (presente ou à distância) e ditam através dos médiuns a medicação oportuna, aliando o socorro farmacêutico ao esclarecimento moral.",
    option_d:
      "Proíbem o uso de qualquer medicamento físico, recomendando apenas jejum de quarenta dias.",
    option_e:
      "Cobram uma taxa em dinheiro físico que deve ser depositada sob a toalha da mesa.",
    correct_option: "C",
    explanation:
      'No Capítulo 46 ("Aprendendo sempre"), André Luiz observa a seriedade e o método científico-cristão com que os mentores selecionam e atendem as súplicas sinceras de auxílio à saúde.',
    reference: 'Os Mensageiros — Cap. 46 ("Aprendendo sempre")',
    difficulty: "facil",
    active: true,
  },
  {
    code: 797,
    book: "os_mensageiros",
    statement:
      'No Capítulo 47 ("No trabalho ativo"), quem é o elevado mentor espiritual que supervisiona os serviços mediúnicos na oficina de Isidoro e Isabel e orienta o discernimento nas comunicações e receitas?',
    option_a:
      "O Ministro Genésio, vindo diretamente das Câmaras de Retificação.",
    option_b:
      "O antigo Monsenhor Alexandre Pizarro, da Inquisição Espanhola.",
    option_c:
      "O próprio Governador de Nosso Lar em pessoa.",
    option_d:
      "O instrutor Anselmo, que preside com sabedoria e amor a triagem das comunicações, ensinando que a verdadeira caridade não patrocina a preguiça nem a imprudência.",
    option_e:
      "O sentinela Justino, guarda da cancela do Umbral.",
    correct_option: "D",
    explanation:
      'No Capítulo 47 ("No trabalho ativo"), o mentor Anselmo dirige superiormente os trabalhos da reunião pública na casa de Isidoro e Isabel, dando preciosas lições de educação mediúnica.',
    reference: 'Os Mensageiros — Cap. 47 ("No trabalho ativo")',
    difficulty: "dificil",
    active: true,
  },
  {
    code: 798,
    book: "os_mensageiros",
    statement:
      'No Capítulo 48 ("Pavor da morte"), antes de irem ao necrotério socorrer a jovem Cremilda, como Aniceto responde à dúvida de André Luiz sobre a utilidade da presença de encarnados sonolentos ou distraídos nas reuniões espíritas?',
    option_a:
      "Ordena que os vigilantes expulsem da sala a chicotadas todos os frequentadores que cochilarem.",
    option_b:
      "Afirma que os encarnados sonolentos roubam toda a energia dos médiuns e impedem o trabalho.",
    option_c:
      "Diz que apenas os doutores em filosofia deveriam ter permissão de sentar-se nos bancos do centro.",
    option_d:
      "Declara que os espíritos superiores nunca utilizam fluidos provenientes de pessoas encarnadas.",
    option_e:
      "Explica que, embora devam esforçar-se por aprender, mesmo os encarnados menos atentos que comparecem de boa vontade fornecem calor magnético e fluido vital preciosos, funcionando a assembleia como uma 'incubadora de energias psíquicas' para os serviços de socorro.",
    correct_option: "E",
    explanation:
      'No Capítulo 48 ("Pavor da morte"), Aniceto revela a função de cooperação magnética das reuniões espíritas, onde as emanações vitais dos encarnados servem de matéria-prima aos socorristas do invisível.',
    reference: 'Os Mensageiros — Cap. 48 ("Pavor da morte")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 799,
    book: "os_mensageiros",
    statement:
      'No Capítulo 49 ("Máquina divina"), ao examinar com a visão espiritual ampliada o corpo agonizante de Fernando, que imagem luminosa André Luiz enxerga no centro do crânio do enfermo e o que ela representa?',
    option_a:
      "Vê na região cerebral central (epífise/centro coronário) a luz mental brilhando como um pequeno candelabro vivo, de onde a mente governa todas as províncias celulares da 'máquina divina' do corpo físico.",
    option_b:
      "Vê uma pedra de carvão apagada indicando que o homem não possui alma imortal.",
    option_c:
      "Vê um relógio mecânico de engrenagens de bronze fabricado no século XVIII.",
    option_d:
      "Vê uma serpente de vidro partida ao meio conforme o sonho da jovem Niêta.",
    option_e:
      "Vê um livro aberto escrito em caracteres hebraicos sobre a testa do moribundo.",
    correct_option: "A",
    explanation:
      'No Capítulo 49 ("Máquina divina"), sob o auxílio magnético de Aniceto, André Luiz contempla o santuário cerebral como sede do governo mental, onde a luz do espírito comanda os bilhões de células microscópicas.',
    reference: 'Os Mensageiros — Cap. 49 ("Máquina divina")',
    difficulty: "medio",
    active: true,
  },
  {
    code: 800,
    book: "os_mensageiros",
    statement:
      'Nos Capítulos 50 ("A desencarnação de Fernando") e 51 ("Nas despedidas"), quem ampara diretamente Fernando no instante em que Aniceto desata os últimos laços do cordão fluídico, protegendo-o contra a "nuvem de testemunhas" inferiores que o acusavam?',
    option_a:
      "O médico Dr. Fidélis, que comparece ao quarto para aplicar-lhe passes magnéticos.",
    option_b:
      "A própria mãe desencarnada de Fernando, que o recebe nos braços em prece com o auxílio de Aniceto, adormecendo-o suavemente para poupá-lo ao assédio dos antigos companheiros de invigilância.",
    option_c:
      "O carroceiro colérico que havia sido ferido pelo coice do muar na estrada rural.",
    option_d:
      "A ex-parteira de cinquenta e oito manchas negras barrada por Irmão Paulo.",
    option_e:
      "Ninguém, pois Fernando é deixado sozinho no quarto para enfrentar os obsessores.",
    correct_option: "B",
    explanation:
      'No Capítulo 50 ("A desencarnação de Fernando"), o amor materno mais uma vez triunfa à cabeceira do filho agonizante: amparada por Aniceto, a genitora desencarnada acolhe Fernando recém-liberto do corpo, encerrando com sublime lição de esperança a jornada de aprendizado que culmina nas despedidas do Capítulo 51.',
    reference: 'Os Mensageiros — Caps. 50 ("A desencarnação de Fernando") e 51 ("Nas despedidas")',
    difficulty: "facil",
    active: true,
  },
];
