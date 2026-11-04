export interface OQueEEspiritismoQuestionSeed {
  code: number;
  book: "o_que_e_espiritismo";
  topic?:
    | "deus_criacao"
    | "espiritos"
    | "mediunidade"
    | "reencarnacao"
    | "leis_morais"
    | "vida_futura"
    | "jesus_evangelho"
    | "ciencia_espiritismo";
  difficulty: "facil" | "medio" | "dificil";
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e: string;
  correct_option: "A" | "B" | "C" | "D" | "E";
  correctIndex?: number;
  explanation: string;
  reference: string;
  active: boolean;
}

type RawSeed = {
  code: number;
  topic: NonNullable<OQueEEspiritismoQuestionSeed["topic"]>;
  difficulty: "facil" | "medio" | "dificil";
  statement: string;
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  correct: "A" | "B" | "C" | "D" | "E";
  explanation: string;
  reference: string;
};

const RAW_QUESTIONS: RawSeed[] = [
  {
    code: 801,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "Segundo a biografia escrita por Henri Sausse em 'O Que é o Espiritismo', em que cidade e data nasceu Allan Kardec?",
    A: "Em Lyon, a 3 de outubro de 1804.",
    B: "Em Paris, a 18 de abril de 1804.",
    C: "Em Bordeaux, a 31 de março de 1805.",
    D: "Em Tours, a 3 de novembro de 1803.",
    E: "Em Genebra, a 15 de agosto de 1804.",
    correct: "A",
    explanation:
      "Henri Sausse registra que Allan Kardec nasceu em Lyon a 3 de outubro de 1804, recebendo o nome civil de Hippolyte Léon Denizard Rivail.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 802,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "Qual era o nome civil completo do Codificador do Espiritismo antes de adotar o pseudônimo Allan Kardec?",
    A: "Jean-Baptiste Léon Fortier Rivail.",
    B: "Hippolyte Léon Denizard Rivail.",
    C: "Pierre-Paul Didier Baudin.",
    D: "Camille Nicolas Denizard Flammarion.",
    E: "Henri Léon Sausse Rivail.",
    correct: "B",
    explanation:
      "Filho do magistrado Jean-Baptiste Antoine Rivail, o Codificador chamava-se no registro civil Hippolyte Léon Denizard Rivail.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 803,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "Em qual instituição suíça o jovem Denizard Rivail realizou seus estudos pedagógicos sob a direção de um célebre educador?",
    A: "Na Academia de Genebra, sob a direção de Jean-Jacques Rousseau.",
    B: "No Colégio de Lausanne, dirigido pelo pastor Charles Wagner.",
    C: "No Instituto de Yverdon, dirigido pelo célebre professor Pestalozzi.",
    D: "No Liceu de Zurique, dirigido por Heinrich Lavater.",
    E: "Na Escola Politécnica de Berna, sob orientação de Girard.",
    correct: "C",
    explanation:
      "Seus pais enviaram-no para o famoso Instituto de Yverdon, na Suíça, dirigido por Johann Heinrich Pestalozzi, de quem se tornou discípulo e colaborador.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 804,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "Com quem o professor Hippolyte Léon Denizard Rivail se casou em 6 de fevereiro de 1832?",
    A: "Com Ermance Dufaux.",
    B: "Com Caroline e Julie Baudin.",
    C: "Com Ruth Japhet.",
    D: "Com Amélie Gabrielle Boudet.",
    E: "Com Madame Plainemaison.",
    correct: "D",
    explanation:
      "Em 1832, o professor Rivail desposou Amélie Gabrielle Boudet, culta professora que foi sua dedicada companheira e colaboradora durante toda a vida.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 805,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "Em que ano, segundo Henri Sausse, o professor Rivail ouviu falar pela primeira vez das mesas girantes por meio do magnetizador Sr. Fortier?",
    A: "Em 1848, logo após os fenômenos de Hydesville.",
    B: "Em 1850, durante um congresso de magnetismo em Lyon.",
    C: "Em 1852, na Academia Real de Ciências de Arras.",
    D: "Em 1857, pouco antes de publicar O Livro dos Espíritos.",
    E: "Em 1854, quando o Sr. Fortier lhe relatou que as mesas não apenas giravam, mas também falavam.",
    correct: "E",
    explanation:
      "Foi em 1854 que o Sr. Fortier, magnetizador de suas relações, falou-lhe pela primeira vez das mesas girantes e das comunicações obtidas por batidas.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 806,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "Na casa de quem, em maio de 1855, o professor Rivail presenciou pela primeira vez o fenômeno das mesas que giravam, saltavam e corriam?",
    A: "Na casa da Sra. Plainemaison, na rua Grange-Batelière.",
    B: "Na residência de Camille Flammarion, no Observatório de Paris.",
    C: "No salão literário do livreiro Didier, no Palais-Royal.",
    D: "No gabinete médico do Dr. Paul Bert.",
    E: "No Instituto Técnico da rua de Sèvres.",
    correct: "A",
    explanation:
      "Em maio de 1855, acompanhado do Sr. Pottié, Rivail assistiu pela primeira vez às experiências de mesas girantes e escrita em ardósia na casa da Sra. Plainemaison.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 807,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Na casa de qual família o professor Rivail iniciou seus estudos regulares e metódicos das comunicações psicográficas por meio de duas jovens médiuns?",
    A: "Na casa da família Fortier.",
    B: "Na casa da família Baudin, com as jovens Caroline e Julie.",
    C: "Na casa da família Sausse, em Lyon.",
    D: "Na casa da família Delanne, em Paris.",
    E: "Na casa da família Lachâtre, em Toulon.",
    correct: "B",
    explanation:
      "Foi nas reuniões semanais na casa da família Baudin, onde escreviam na cesta-pião as jovens médiuns Srta. Julie e Srta. Caroline Baudin, que Rivail iniciou seus estudos sérios.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 808,
    topic: "ciencia_espiritismo",
    difficulty: "dificil",
    statement:
      "Por meio de qual médium sonâmbula o professor Rivail fez a verificação e revisão completa dos cinquenta cadernos que deram origem a 'O Livro dos Espíritos'?",
    A: "Sra. Plainemaison.",
    B: "Sra. Amélie Boudet.",
    C: "Srta. Ruth Japhet.",
    D: "Srta. Aline Carlotti.",
    E: "Sra. d'Espérance.",
    correct: "C",
    explanation:
      "Cerca de cinquenta cadernos confiados pelos Srs. Carlotti, René Taillandier, Tiedeman-Manthese e Sardou foram coordenados e revistos com o concurso da médium Srta. Japhet.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 809,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "Em que data veio a lume a primeira edição de 'O Livro dos Espíritos', marco inaugural da Codificação Espírita?",
    A: "1 de janeiro de 1858.",
    B: "3 de outubro de 1856.",
    C: "31 de março de 1857.",
    D: "18 de abril de 1857.",
    E: "15 de agosto de 1859.",
    correct: "D",
    explanation:
      "A primeira edição de O Livro dos Espíritos foi publicada em Paris, pela livraria Dentu, no Palais-Royal, em 18 de abril de 1857.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 810,
    topic: "ciencia_espiritismo",
    difficulty: "dificil",
    statement:
      "Por que o professor Rivail decidiu assinar as obras espíritas com o pseudônimo Allan Kardec?",
    A: "Para ocultar sua nacionalidade francesa diante das autoridades eclesiásticas.",
    B: "Porque seu editor exigiu um nome de sonoridade inglesa para ampliar as vendas.",
    C: "Por imposição da Academia Real de Ciências de Arras.",
    D: "Para homenagear seu antigo mestre suíço Pestalozzi.",
    E: "Para não confundir sua obra espírita, fruto do ensino dos Espíritos, com seus conhecidos livros pedagógicos assinados com o nome civil.",
    correct: "E",
    explanation:
      "Sendo seu nome civil muito conhecido pelas obras didáticas e gramaticais, adotou o nome Allan Kardec — que seu Espírito protetor revelou ter sido seu em existência anterior entre os druidas — para distinguir a obra espírita.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 811,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "Em que datas foram fundadas por Allan Kardec, respectivamente, a 'Revista Espírita' e a 'Sociedade Parisiense de Estudos Espíritas'?",
    A: "1º de janeiro de 1858 e 1º de abril de 1858.",
    B: "18 de abril de 1857 e 1º de janeiro de 1858.",
    C: "3 de outubro de 1858 e 25 de dezembro de 1858.",
    D: "15 de maio de 1857 e 18 de abril de 1859.",
    E: "1º de março de 1859 e 31 de março de 1860.",
    correct: "A",
    explanation:
      "Allan Kardec lançou o primeiro número da Revista Espírita em 1º de janeiro de 1858 e fundou regularmente a Sociedade Parisiense de Estudos Espíritas em 1º de abril de 1858.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 812,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "Em que data e por qual causa orgânica desencarnou Allan Kardec em Paris, aos 64 anos de idade?",
    A: "Em 18 de abril de 1869, vítima de pneumonia aguda.",
    B: "Em 31 de março de 1869, fulminado pela ruptura de um aneurisma.",
    C: "Em 2 de novembro de 1869, em decorrência de febre tifoide.",
    D: "Em 3 de outubro de 1868, após um acidente vascular em viagem a Lyon.",
    E: "Em 15 de janeiro de 1870, por insuficiência renal crônica.",
    correct: "B",
    explanation:
      "Em 31 de março de 1869, enquanto preparava a mudança da sede para a rua e passagem Sainte-Anne e entregava um exemplar da Revista Espírita a um caixeiro de livraria, tombou fulminado pela ruptura de um aneurisma.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 813,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "Qual célebre astrônomo francês pronunciou um discurso memorável à beira do túmulo de Allan Kardec, chamando-o de 'o bom senso encarnado'?",
    A: "Urbain Le Verrier.",
    B: "François Arago.",
    C: "Camille Flammarion.",
    D: "Pierre-Simon Laplace.",
    E: "Jean-Baptiste Biot.",
    correct: "C",
    explanation:
      "No sepultamento de Allan Kardec, o astrônomo Camille Flammarion proferiu vibrante alocução, definindo o Codificador como 'o bom senso encarnado' e ressaltando o caráter científico do Espiritismo.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 814,
    topic: "reencarnacao",
    difficulty: "facil",
    statement:
      "Qual inscrição sintetizadora da lei de evolução encontra-se gravada no frontão do dólmen de Allan Kardec no cemitério do Père-Lachaise?",
    A: "A fé inabalável é apenas aquela que pode encarar a razão face a face.",
    B: "Fora da caridade não há salvação para o Espírito imortal.",
    C: "Os mortos não morrem: apenas mudam de morada na casa do Pai.",
    D: "Nascer, morrer, renascer ainda e progredir sempre, tal é a lei.",
    E: "Trabalho, solidariedade e tolerância constituem o lema do espírita.",
    correct: "D",
    explanation:
      "No alto do monumento druídico (dólmen) no cemitério do Père-Lachaise acha-se gravado o postulado fundamental: 'Nascer, morrer, renascer ainda e progredir sempre, tal é a lei'.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 815,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "Segundo o Preâmbulo de 'O Que é o Espiritismo', qual foi o objetivo principal de Allan Kardec ao publicar este livro sumário?",
    A: "Substituir definitivamente a leitura de O Livro dos Espíritos e de O Livro dos Médiuns.",
    B: "Criar um ritual litúrgico obrigatório para todas as sociedades espíritas da França.",
    C: "Reunir apenas relatos de fenômenos físicos extraordinários para entreter o público.",
    D: "Combater pessoalmente os sacerdotes e cientistas que atacavam sua reputação.",
    E: "Oferecer um resumo sintético dos princípios da Doutrina e responder às principais objeções para quem deseja compreendê-la rapidamente.",
    correct: "E",
    explanation:
      "No Preâmbulo, Kardec explica que publicou este resumo para dar em poucas palavras uma ideia exata do Espiritismo, fornecendo os pontos cardeais da ciência e respondendo às objeções mais comuns.",
    reference: "O Que é o Espiritismo - Preâmbulo",
  },
  {
    code: 816,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "No Capítulo I de 'O Que é o Espiritismo' ('Pequena conferência espírita'), quais são os três interlocutores com quem o Adeptos dialoga sucessivamente?",
    A: "O Crítico, o Cético e o Padre.",
    B: "O Médico, o Juiz e o Filósofo.",
    C: "O Materialista, o Cientista e o Pastor.",
    D: "O Jornalista, o Magnetizador e o Bispo.",
    E: "O Professor, o Ateo e o Monge.",
    correct: "A",
    explanation:
      "O Capítulo I é dividido em três diálogos: o Primeiro Diálogo com O Crítico, o Segundo Diálogo com O Cético e o Terceiro Diálogo com O Padre.",
    reference: "O Que é o Espiritismo - Cap. I, Pequena conferência espírita",
  },
  {
    code: 817,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "No Primeiro Diálogo ('O Crítico'), que diferença fundamental o Visitante aponta entre a atitude do Crítico e a do Cético?",
    A: "O Crítico crê nos Espíritos, enquanto o Cético acredita apenas em anjos.",
    B: "O Cético duvida, mas busca esclarecer-se; o Crítico julga sem conhecer e procura ridicularizar aquilo que não estudou.",
    C: "O Crítico realiza experiências práticas, enquanto o Cético apenas escreve panfletos.",
    D: "O Cético é sempre inimigo da Ciência, ao passo que o Crítico defende as academias.",
    E: "Não há diferença alguma, pois ambos negam a existência de Deus.",
    correct: "B",
    explanation:
      "Kardec mostra no diálogo que o Crítico condena a priori e usa a zombaria sem haver lido nem observado nada, ao passo que o Cético sincero apresenta dúvidas racionais e deseja instruir-se.",
    reference: "O Que é o Espiritismo - Cap. I, Primeiro Diálogo: O Crítico",
  },
  {
    code: 818,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "No Primeiro Diálogo, quando o Crítico alega que os sábios e as academias oficiais condenaram o Espiritismo, que exemplos históricos o espírita lhe recorda?",
    A: "A aceitação imediata do telégrafo óptico e da imprensa em toda a Europa.",
    B: "A aprovação unânime das descobertas de Newton pela Igreja de Roma.",
    C: "A rejeição inicial de grandes descobertas científicas, como o movimento da Terra por Galileu e a aplicação do vapor por Fulton.",
    D: "O apoio financeiro concedido por Napoleão aos primeiros barcos a vapor.",
    E: "A criação das universidades medievais pelos escolásticos.",
    correct: "C",
    explanation:
      "Kardec lembra ao Crítico que corporações sábias também rejeitaram ou zombaram de Galileu, de Colombo e de Fulton com o barco a vapor, provando que a verdade independe de decretos acadêmicos.",
    reference: "O Que é o Espiritismo - Cap. I, Primeiro Diálogo: O Crítico",
  },
  {
    code: 819,
    topic: "ciencia_espiritismo",
    difficulty: "dificil",
    statement:
      "Segundo argumenta Kardec no Primeiro Diálogo com o Crítico, qual foi o efeito prático das zombarias e dos ataques da imprensa burlesca contra o Espiritismo?",
    A: "Reduziram drasticamente o número de adeptos nas grandes capitais.",
    B: "Forçaram o fechamento temporário da Sociedade Parisiense de Estudos Espíritas.",
    C: "Impediram a tradução das obras espíritas para outros idiomas europeus.",
    D: "Despertaram a atenção do público, levando milhares de pessoas a examinar a Doutrina e aumentando o número de adeptos.",
    E: "Fizeram com que os médiuns abandonassem a psicografia pelo receio do ridículo.",
    correct: "D",
    explanation:
      "Kardec demonstra que as críticas levianas funcionaram como propaganda involuntária: aguando a curiosidade pública, fizeram com que pessoas sérias lessem as obras e se tornassem espíritas.",
    reference: "O Que é o Espiritismo - Cap. I, Primeiro Diálogo: O Crítico",
  },
  {
    code: 820,
    topic: "mediunidade",
    difficulty: "dificil",
    statement:
      "Ao responder ao Crítico sobre os casos de charlatanismo e exploração financeira das manifestações, qual é a posição firme da Doutrina Espírita?",
    A: "Tolera a cobrança moderada quando o médium é comprovadamente pobre.",
    B: "Permite sessões pagas desde que a renda seja destinada a hospitais.",
    C: "Autoriza os médiuns profissionais a cobrarem consultas particulares.",
    D: "Reconhece que apenas os fenômenos de efeitos físicos podem ser remunerados.",
    E: "Repudia formalmente qualquer exploração mercantil da mediunidade, declarando que o verdadeiro Espiritismo jamais faz de suas manifestações objeto de lucro.",
    correct: "E",
    explanation:
      "Kardec enfatiza que o Espiritismo sério condena de modo absoluto os espetáculos pagos e o comércio da mediunidade, não podendo a Ciência verdadeira responder pelos abusos dos charlatães.",
    reference: "O Que é o Espiritismo - Cap. I, Primeiro Diálogo: O Crítico",
  },
  {
    code: 821,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "No início do Segundo Diálogo ('O Cético'), como o espírita recebe a declaração do Visitante de que não crê nos Espíritos, mas deseja compreender a questão?",
    A: "Com simpatia e respeito, pois a dúvida sincera de quem procura instruir-se merece explicação racional.",
    B: "Com indignação, recusando-se a conversar com quem ainda não tem fé.",
    C: "Exigindo que o visitante faça antes um juramento de adesão religiosa.",
    D: "Cobrando uma taxa de matrícula no curso preparatório da Sociedade.",
    E: "Aconselhando-o a desistir, pois a fé espírita só se obtém por graça mística.",
    correct: "A",
    explanation:
      "Kardec acolhe o Cético com estima, esclarecendo que o Espiritismo não exige fé cega, mas convida ao exame sério, metódico e livre de ideias preconcebidas.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 822,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "No Segundo Diálogo ('O Cético'), como Allan Kardec define de modo claro e direto o que são os Espíritos?",
    A: "São seres angélicos criados à parte da humanidade e que jamais encarnaram.",
    B: "São as próprias almas dos homens que viveram na Terra ou em outros mundos, despojadas de seu envoltório corporal.",
    C: "São emanações magnéticas inconscientes produzidas pelo cérebro dos médiuns.",
    D: "São divindades secundárias encarregadas de governar as forças da natureza.",
    E: "São alucinações coletivas provocadas pelo fluido nervoso dos assistentes.",
    correct: "B",
    explanation:
      "Kardec explica ao Cético que os Espíritos não são seres abstratos nem uma criação nova: são simplesmente as almas dos homens após a morte do corpo físico.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 823,
    topic: "espiritos",
    difficulty: "medio",
    statement:
      "Para demonstrar ao Cético a existência da alma independente da matéria, que argumento fundamental o espírita utiliza?",
    A: "A tradição mitológica dos povos gregos e romanos.",
    B: "A autoridade infalível dos concílios medievais.",
    C: "O fato de que o pensamento, a vontade e o livre-arbítrio são propriedades inteligentes que não podem ser produzidas pela matéria bruta.",
    D: "A semelhança anatômica entre o sistema nervoso humano e o dos vegetais.",
    E: "O cálculo matemático da distância entre as estrelas fixas.",
    correct: "C",
    explanation:
      "Todo efeito inteligente há de ter uma causa inteligente; como a matéria por si mesma é inerte e desprovida de inteligência, o pensamento humano prova a presença de um princípio espiritual.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 824,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "Segundo explica Kardec ao Cético, de quantos elementos essenciais se compõe o homem encarnado?",
    A: "De dois elementos apenas: o corpo carnal e o fluido elétrico.",
    B: "De quatro elementos: terra, água, ar e fogo.",
    C: "De um único elemento material capaz de produzir o pensamento.",
    D: "De três elementos: o corpo (ser material), a alma (Espírito encarnado) e o perispírito (envoltório semimaterial que une a alma ao corpo).",
    E: "De cinco corpos astrais independentes entre si.",
    correct: "D",
    explanation:
      "Kardec apresenta a constituição ternária do homem: 1º o corpo físico; 2º a alma ou Espírito; 3º o perispírito, laço fluídico semimaterial que serve de intermediário entre ambos.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 825,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Quando o Cético pergunta por que uma mesa se move ou responde por pancadas nas sessões de efeitos físicos, o que o espírita lhe esclarece?",
    A: "Que a madeira adquire inteligência própria ao ser magnetizada pelos presentes.",
    B: "Que o movimento resulta exclusivamente da eletricidade terrestre acumulada no móvel.",
    C: "Que todos os movimentos de mesas são produzidos por mecanismos ocultos sob o soalho.",
    D: "Que os Espíritos se transformam materialmente na própria estrutura da mesa.",
    E: "Que a mesa é apenas um instrumento passivo movido pelo Espírito, que combina parte de seu perispírito com o fluido animalizado do médium.",
    correct: "E",
    explanation:
      "A mesa não pensa nem tem músculos: o Espírito utiliza o fluido próprio do médium combinado ao fluido universal e ao seu perispírito para imprimir movimento ao objeto e dar sinais convencionados.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 826,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "No Segundo Diálogo, por que o uso das mesas falantes e das cestas foi gradualmente substituído pela escrita direta com a mão do médium (psicografia)?",
    A: "Porque a escrita manual direta é o meio mais simples, rápido e cômodo de comunicação, dispensando aparelhos acessórios.",
    B: "Porque as mesas deixaram de girar após o ano de 1856 em toda a Europa.",
    C: "Porque a polícia francesa proibiu a fabricação de cestas-pião e pranchetas.",
    D: "Porque os Espíritos Superiores só conseguem se comunicar por meio de mesas pesadas.",
    E: "Porque a escrita direta impede totalmente a manifestação de Espíritos levianos.",
    correct: "A",
    explanation:
      "As mesas, cestas e pranchetas eram apenas apêndices do lápis; compreendeu-se logo que o Espírito podia atuar diretamente sobre o braço e a mão do médium, tornando a comunicação muito mais rápida.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 827,
    topic: "ciencia_espiritismo",
    difficulty: "dificil",
    statement:
      "No diálogo com o Cético, qual é a posição do Espiritismo a respeito do Magnetismo e do Sonambulismo?",
    A: "Considera o magnetismo uma superstição medieval sem qualquer base real.",
    B: "Reconhece-os como ciências irmãs que prepararam o caminho ao demonstrar a ação dos fluidos e a independência da alma.",
    C: "Afirma que o magnetizador só cura quando pronuncia fórmulas cabalísticas.",
    D: "Sustenta que todo médium psicógrafo precisa antes ser magnetizado por um médico.",
    E: "Declara que o fluido magnético destrói a faculdade mediúnica.",
    correct: "B",
    explanation:
      "Kardec explica que o magnetismo preparou o caminho do Espiritismo, pois o estudo do fluido magnético e da clarividência sonambúlica já demonstrava a ação da alma fora dos sentidos corpóreos.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 828,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Que fatos comprovam ao Cético que as comunicações mediúnicas não são simples reflexo das ideias do próprio médium?",
    A: "O fato de o médium usar sempre papel timbrado das sociedades espíritas.",
    B: "A velocidade com que o lápis percorre o papel em linha reta.",
    C: "Comunicações contrárias às opiniões e conhecimentos do médium, em línguas que ele ignora ou até por pessoas analfabetas.",
    D: "O cansaço muscular sentido no braço após duas horas de escrita.",
    E: "A presença obrigatória de sete testemunhas diplomadas na sala.",
    correct: "C",
    explanation:
      "O Espírito frequentemente trata de assuntos estranhos aos estudos do médium, contradiz suas ideias preconcebidas, revela fatos desconhecidos e por vezes escreve em idiomas que o médium desconhece.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 829,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "Quando o Cético pergunta se basta morrer para que o Espírito saiba tudo e possua toda a sabedoria, o que Kardec responde?",
    A: "Sim, pois a morte rasga imediatamente todos os véus do universo.",
    B: "Sim, desde que o falecido tenha recebido os sacramentos antes de partir.",
    C: "Não, porque após a morte todos os Espíritos perdem a memória para sempre.",
    D: "Não; a morte física não opera transformação miraculosa: o Espírito conserva o grau intelectual e moral que tinha em vida, progredindo gradualmente.",
    E: "Apenas os cientistas conservam a inteligência no mundo espiritual.",
    correct: "D",
    explanation:
      "Ao deixar o corpo, o homem não se torna instantaneamente sábio nem virtuoso; há no mundo invisível Espíritos de todos os graus de saber e de moralidade.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 830,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Por que os Espíritos não vêm revelar tesouros ocultos, fórmulas para enriquecer sem trabalho ou invenções prontas para especulação financeira?",
    A: "Porque desconhecem o valor das moedas modernas.",
    B: "Porque estão proibidos de observar a superfície material da Terra.",
    C: "Porque apenas os Espíritos zombeteiros conhecem onde estão os tesouros.",
    D: "Porque perderam toda a capacidade de raciocínio prático ao desencarnar.",
    E: "Porque a lei de Deus impõe ao homem o progresso pelo trabalho e pela pesquisa própria, e os bons Espíritos não servem à cupidez nem ao orgulho.",
    correct: "E",
    explanation:
      "Os Espíritos Superiores auxiliam o progresso moral e intelectual da humanidade, mas não poupam ao homem o esforço do trabalho; quem busca os Espíritos por interesse material torna-se joguete de mistificadores.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 831,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "No Segundo Diálogo, que resposta o espírita dá à objeção de que o estudo do Espiritismo produziria a loucura?",
    A: "O Espiritismo verdadeiro, longe de produzir a loucura, previne-a e consola as aflições pela fé raciocinada na vida futura e na justiça divina.",
    B: "Admite que metade dos médiuns acaba perdendo a razão após alguns anos.",
    C: "Recomenda que apenas médicos psiquiatras estudem as obras da Codificação.",
    D: "Afirma que a loucura é sempre um castigo físico incurável sem relação com o cérebro.",
    E: "Reconhece que qualquer estudo filosófico ou religioso destrói o sistema nervoso.",
    correct: "A",
    explanation:
      "Qualquer ideia exagerada em um cérebro já predisposto e enfraquecido pode desencadear delírios (como na política, nas paixões ou no fanatismo religioso), mas o estudo calmo e racional do Espiritismo fortalece a alma contra o desespero.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 832,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "No diálogo com o Cético, por que os fenômenos espíritas não podem ser repetidos à vontade, como uma experiência física ou química de laboratório?",
    A: "Porque os fluidos espirituais evaporam na presença de luz solar.",
    B: "Porque os Espíritos são seres livres e inteligentes, e não máquinas nem reagentes químicos submetidos ao capricho dos observadores.",
    C: "Porque os médiuns perdem suas faculdades diante de mais de três pessoas.",
    D: "Porque a gravidade terrestre anula o perispírito durante o dia.",
    E: "Porque as leis civis proíbem experiências científicas com médiuns.",
    correct: "B",
    explanation:
      "As ciências físicas operam sobre a matéria inerte que se manipula à vontade; o Espiritismo lida com inteligências livres que têm vontade própria e não se prestam a exigências frívolas de curiosos.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 833,
    topic: "mediunidade",
    difficulty: "dificil",
    statement:
      "Segundo explica Kardec ao Cético, qual foi a utilidade providencial dos fenômenos materiais (mesas girantes e pancadas) no início do Espiritismo?",
    A: "Demonstrar que os Espíritos preferem comunicar-se por objetos de madeira.",
    B: "Substituir definitivamente a imprensa escrita na transmissão dos ensinos morais.",
    C: "Chamar a atenção dos homens pelos sentidos físicos e vencer a incredulidade materialista, servindo de prelúdio ao ensino filosófico.",
    D: "Provar que apenas os Espíritos inferiores podem agir sobre a matéria.",
    E: "Criar uma nova fonte de energia mecânica para a indústria europeia.",
    correct: "C",
    explanation:
      "Os fenômenos físicos foram o vestíbulo da Ciência: falavam aos olhos para despertar a atenção de uma geração incrédula, abrindo caminho para as comunicações inteligentes e morais.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 834,
    topic: "reencarnacao",
    difficulty: "medio",
    statement:
      "No Segundo Diálogo, como o espírita explica ao Cético a justiça das desigualdades de aptidões intelectuais e morais que as crianças trazem desde o berço?",
    A: "Pelo acaso genético resultante apenas da alimentação materna.",
    B: "Pelo privilégio arbitrário concedido por Deus a certas almas recém-criadas.",
    C: "Pela influência astrológica da posição dos planetas no instante do parto.",
    D: "Pela preexistência da alma e pela pluralidade das existências (reencarnação), em que cada Espírito traz o patrimônio adquirido em vidas anteriores.",
    E: "Pela transmissão hereditária da própria alma dos pais para os filhos.",
    correct: "D",
    explanation:
      "Se Deus criasse almas novas a cada nascimento com aptidões tão desiguais, seria parcial; a reencarnação explica que uns já viveram e progrediram mais do que outros em existências precedentes.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 835,
    topic: "reencarnacao",
    difficulty: "medio",
    statement:
      "Quando o Cético pergunta se o Espírito pode retrogradar e reencarnar no corpo de um animal, o que responde a Doutrina Espírita?",
    A: "Sim, como punição temporária para os grandes criminosos da humanidade.",
    B: "Sim, sempre que o homem se entrega aos instintos puramente sensuais.",
    C: "Depende da decisão dos Espíritos Superiores em cada julgamento.",
    D: "Apenas nas espécies domésticas mais próximas do convívio humano.",
    E: "Não; o progresso do Espírito é contínuo: ele pode estacionar, mas jamais retrograda, sendo a metempsicose nos animais contrária à lei divina.",
    correct: "E",
    explanation:
      "Kardec distingue claramente a reencarnação espírita da antiga metempsicose: o Espírito humano nunca volta a ser animal; se estaciona, reencarna em condições humanas de expiação para avançar.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 836,
    topic: "reencarnacao",
    difficulty: "facil",
    statement:
      "No Segundo Diálogo, todas as reencarnações do Espírito ocorrem exclusivamente no planeta Terra?",
    A: "Não; a Terra é apenas um dos numerosos mundos habitados, e as reencarnações ocorrem em diferentes globos conforme o adiantamento do Espírito.",
    B: "Sim, pois a Terra é o único planeta habitado do universo.",
    C: "Sim, porque o perispírito humano não suporta a atmosfera de outros orbes.",
    D: "Não, pois cada Espírito só encarna uma única vez na Terra e nunca mais retorna.",
    E: "Apenas os Espíritos perfeitos reencarnam na Lua e no Sol.",
    correct: "A",
    explanation:
      "As diversas existências corporais podem realizar-se na Terra ou em outros mundos materiais mais ou menos adiantados, segundo a máxima evangélica de que 'há muitas moradas na casa de meu Pai'.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 837,
    topic: "vida_futura",
    difficulty: "medio",
    statement:
      "Ao final do Segundo Diálogo, que tríplice efeito moral produz no homem a convicção profunda das verdades ensinadas pelo Espiritismo?",
    A: "Isolamento monástico, desprezo pela ciência e temor constante da morte.",
    B: "Paciência e resignação nas provas da vida, afastamento do suicídio e prática sincera da caridade e fraternidade.",
    C: "Ambição política, orgulho intelectual e busca de privilégios sociais.",
    D: "Indiferença diante do sofrimento alheio, fatalismo passivo e ociosidade.",
    E: "Crença na salvação exclusiva por fórmulas exteriores e rituais.",
    correct: "B",
    explanation:
      "Compreendendo que a vida terrestre é breve estação de aprendizado, o homem encara a morte sem pavor, suporta as vicissitudes com coragem, repele o suicídio e esforça-se no bem.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 838,
    topic: "jesus_evangelho",
    difficulty: "medio",
    statement:
      "No Terceiro Diálogo ('O Padre'), como o espírita responde à afirmação eclesiástica de que apenas o demônio e seus anjos decaídos podem comunicar-se com os homens?",
    A: "Concordando que as almas humanas permanecem adormecidas até o juízo final.",
    B: "Afirmando que os maus Espíritos não existem no plano espiritual.",
    C: "Mostrando que seria absurdo e contrário à bondade de Deus conceder liberdade de ação apenas ao espírito do mal e proibir as boas almas de consolar e instruir os vivos.",
    D: "Dizendo que os Espíritos só se comunicam dentro dos templos consagrados.",
    E: "Alegando que o Antigo e o Novo Testamento jamais mencionam manifestações espirituais.",
    correct: "C",
    explanation:
      "Kardec argumenta com lógica irrefutável: se Deus permite que os maus Espíritos tentem os homens, com muito mais razão permite que os bons Espíritos venham ampará-los e encaminhá-los ao bem.",
    reference: "O Que é o Espiritismo - Cap. I, Terceiro Diálogo: O Padre",
  },
  {
    code: 839,
    topic: "mediunidade",
    difficulty: "facil",
    statement:
      "No Terceiro Diálogo com o Padre, qual é o critério seguro apontado pelo Espiritismo para distinguir se um Espírito comunicante é bom ou mau?",
    A: "O nome famoso ou sagrado com que ele assina a mensagem.",
    B: "A beleza caligráfica da escrita psicografada pelo médium.",
    C: "A intensidade das pancadas ou o peso da mesa que se levanta.",
    D: "A qualidade moral de sua linguagem e de seus conselhos, pois 'reconhece-se a árvore pelo fruto': um Espírito que só ensina a caridade e o bem não pode ser mau.",
    E: "O horário noturno ou diurno em que ocorre a reunião mediúnica.",
    correct: "D",
    explanation:
      "Aplicando a máxima de Jesus ('Pelos seus frutos os conhecereis'), Kardec lembra que o demônio não poderia pregar o amor a Deus, o perdão das ofensas, a humildade e a caridade sem destruir seu próprio reino.",
    reference: "O Que é o Espiritismo - Cap. I, Terceiro Diálogo: O Padre",
  },
  {
    code: 840,
    topic: "jesus_evangelho",
    difficulty: "medio",
    statement:
      "Quando o Padre cita a proibição mosaica de interrogar os mortos (Deuteronômio), que explicação histórica e doutrinária o espírita apresenta?",
    A: "Que Moisés desconhecia totalmente a existência da alma imortal.",
    B: "Que o texto bíblico foi inventado apenas no século XVIII.",
    C: "Que Moisés proibiu apenas a escrita manual, mas permitiu as mesas girantes.",
    D: "Que a lei mosaica só se aplicava aos sacerdotes egípcios e babilônios.",
    E: "Que Moisés reprimiu o abuso supersticioso da adivinhação mercenária e idólatra entre os hebreus, e que essa própria proibição prova que a comunicação com os mortos era real.",
    correct: "E",
    explanation:
      "Não se proíbe aquilo que não existe: Moisés vetou a evocação transformada em ofício de adivinhação e comércio supersticioso, ao passo que o Espiritismo condena esses mesmos abusos e busca a edificação moral.",
    reference: "O Que é o Espiritismo - Cap. I, Terceiro Diálogo: O Padre",
  },
  {
    code: 841,
    topic: "jesus_evangelho",
    difficulty: "medio",
    statement:
      "No Terceiro Diálogo, o que o espírita responde quando o Padre afirma que a religião já ensina tudo e que a humanidade não precisa de novas luzes espirituais?",
    A: "Se os ensinos tradicionais bastassem na forma como foram interpretados, não haveria tantos incrédulos e materialistas, os quais o Espiritismo reconduz a Deus pela prova experimental.",
    B: "Que a ciência moderna deve abolir toda forma de sentimento religioso.",
    C: "Que o Evangelho de Jesus tornou-se obsoleto diante da filosofia moderna.",
    D: "Que o Espiritismo veio instituir um novo sacerdócio hierárquico na Europa.",
    E: "Que apenas os teólogos podem compreender as leis morais do universo.",
    correct: "A",
    explanation:
      "O Espiritismo não vem destruir os princípios fundamentais da religião nem a moral do Cristo, mas combater o materialismo fornecendo provas palpáveis da sobrevivência da alma.",
    reference: "O Que é o Espiritismo - Cap. I, Terceiro Diálogo: O Padre",
  },
  {
    code: 842,
    topic: "vida_futura",
    difficulty: "medio",
    statement:
      "No diálogo com o Padre, qual é o ponto em que a Doutrina Espírita diverge do dogma teológico das penas eternas e de um inferno material de fogo?",
    A: "O Espiritismo nega que o culpado sofra qualquer consequência após a morte.",
    B: "Os Espíritos ensinam que as penas são morais e proporcionais às faltas, mas nunca perpétuas, pois Deus jamais fecha ao arrependimento a porta da regeneração.",
    C: "A Doutrina Espírita afirma que o sofrimento dura exatamente sete anos para todos os Espíritos.",
    D: "O Espiritismo ensina que os Espíritos criminosos são aniquilados no momento do desencarne.",
    E: "Kardec sustenta que apenas as preces pagas podem libertar uma alma sofredora.",
    correct: "B",
    explanation:
      "A condenação irrevogável e eterna é incompatível com a infinita justiça e bondade de Deus; o Espírito culpado sofre nas trevas morais de sua consciência até arrepender-se e reparar o mal por novas provas.",
    reference: "O Que é o Espiritismo - Cap. I, Terceiro Diálogo: O Padre",
  },
  {
    code: 843,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "Segundo o Capítulo II ('Noções elementares de Espiritismo', itens 1 a 8), qual é a grande missão prática do Espiritismo perante o mundo moderno?",
    A: "Substituir as ciências exatas por revelações místicas.",
    B: "Formar uma corporação política para governar as nações.",
    C: "Combater a incredulidade e o materialismo pela prova dos fatos e regenerar a humanidade pela aplicação da moral evangélica.",
    D: "Ensinar processos mágicos para evitar as doenças do corpo físico.",
    E: "Descobrir minas de ouro e pedras preciosas por meio de sonâmbulos.",
    correct: "C",
    explanation:
      "Nos itens iniciais do Capítulo II, Kardec destaca que o Espiritismo é o mais poderoso antagonista do materialismo e tem por fim o melhoramento moral da humanidade.",
    reference: "O Que é o Espiritismo - Cap. II, itens 1 a 8",
  },
  {
    code: 844,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "De acordo com o Capítulo II (itens 13 a 16), de onde os Espíritos tiram o seu envoltório semimaterial denominado perispírito?",
    A: "Dos átomos metálicos do núcleo terrestre.",
    B: "Do oxigênio respirado nos primeiros dias após o nascimento.",
    C: "Da imaginação criadora dos médiuns videntes.",
    D: "Do fluido universal de cada globo, razão pela qual a natureza do perispírito varia conforme o mundo em que o Espírito habita.",
    E: "Da decomposição química dos alimentos ingeridos pelo corpo.",
    correct: "D",
    explanation:
      "O Espírito extrai o seu perispírito do fluido cósmico universal próprio de cada mundo; por isso, ao mudar de mundo, muda esse envoltório como quem troca de vestimenta.",
    reference: "O Que é o Espiritismo - Cap. II, itens 13 a 16",
  },
  {
    code: 845,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "No Capítulo II (itens 17 a 23), ao tratar das diversas ordens de Espíritos, como Allan Kardec sintetiza as três categorias principais da escala espírita?",
    A: "Querubins, Serafins e Arcanjos.",
    B: "Sábios, Guerreiros e Artistas.",
    C: "Visíveis, Invisíveis e Tangíveis.",
    D: "Antigos, Medievais e Modernos.",
    E: "Espíritos imperfeitos (predomínio da matéria sobre o espírito), bons Espíritos (predomínio do espírito sobre a matéria, desejo do bem) e Espíritos puros (perfeição absoluta).",
    correct: "E",
    explanation:
      "Embora a transição entre os graus seja insensível, Kardec resume a classificação em Espíritos imperfeitos (inclinados ao mal ou levianos), bons Espíritos e Espíritos puros ou superiores.",
    reference: "O Que é o Espiritismo - Cap. II, itens 17 a 23",
  },
  {
    code: 846,
    topic: "espiritos",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo II (itens 21 e 22), que tipos de Espíritos compõem a classe dos chamados Espíritos levianos, zombeteiros e pseudossábios?",
    A: "Espíritos imperfeitos que, sem serem essencialmente maus, comprazem-se em mistificar, intrigar ou ostentar falso saber com linguagem pomposa.",
    B: "Espíritos puros que testam a paciência dos médiuns por meio de mentiras.",
    C: "Almas de crianças desencarnadas que jamais atingirão a maturidade intelectual.",
    D: "Entidades não humanas criadas exclusivamente para habitar as florestas.",
    E: "Espíritos superiores encarregados de punir os cientistas orgulhosos.",
    correct: "A",
    explanation:
      "Nos itens 21 e 22, Kardec descreve os Espíritos levianos, ignorantes e zombeteiros, que se intrometem em tudo e respondem sem saber, bem como os pseudossábios, cheios de orgulho e sistemas falsos.",
    reference: "O Que é o Espiritismo - Cap. II, itens 21 e 22",
  },
  {
    code: 847,
    topic: "mediunidade",
    difficulty: "facil",
    statement:
      "Conforme o Capítulo II (itens 25 a 29), qual é a diferença entre manifestações ocultas e manifestações ostensivas dos Espíritos?",
    A: "As ocultas ocorrem apenas à meia-noite e as ostensivas ao meio-dia.",
    B: "As ocultas dão-se pela inspiração invisível no pensamento (sugestões da consciência), enquanto as ostensivas produzem-se por efeitos apreciáveis aos sentidos ou pela mediunidade.",
    C: "As ocultas são sempre produzidas por maus Espíritos e as ostensivas apenas por anjos.",
    D: "As ocultas exigem aparelhos elétricos e as ostensivas dispensam médiuns.",
    E: "Não existe diferença real entre ambas na classificação de Allan Kardec.",
    correct: "B",
    explanation:
      "A ação oculta ocorre quando os Espíritos nos inspiram pensamentos e conselhos sem que o percebamos; a ação ostensiva ou patente se dá pela escrita, fala, visão, audição ou fenômenos físicos.",
    reference: "O Que é o Espiritismo - Cap. II, itens 25 a 29",
  },
  {
    code: 848,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "De acordo com o Capítulo II (itens 30 a 35), que são as manifestações espontâneas e as manifestações provocadas?",
    A: "Espontâneas são as obtidas por médiuns pagos; provocadas são as gratuitas.",
    B: "Espontâneas são as escritas em verso; provocadas são as escritas em prosa.",
    C: "Espontâneas ocorrem sem que ninguém chame o Espírito; provocadas dão-se por meio da evocação ou do concurso intencional dos médiuns.",
    D: "Espontâneas acontecem apenas no sono; provocadas acontecem em vigília.",
    E: "Espontâneas são exclusivas das crianças; provocadas pertencem aos idosos.",
    correct: "C",
    explanation:
      "Kardec explica que muitas vezes os Espíritos se manifestam espontaneamente (por ruídos, aparições ou comunicações não solicitadas), mas também podem ser chamados por evocação.",
    reference: "O Que é o Espiritismo - Cap. II, itens 30 a 35",
  },
  {
    code: 849,
    topic: "mediunidade",
    difficulty: "facil",
    statement:
      "Segundo o Capítulo II (itens 36 a 39), qual é o fim providencial das manifestações espíritas na atualidade?",
    A: "Satisfazer a curiosidade fútil dos salões mundanos.",
    B: "Substituir a medicina, a engenharia e a jurisprudência.",
    C: "Prever o futuro detalhado de cada indivíduo para livrá-lo de provas.",
    D: "Convencer os homens da existência e imortalidade da alma e da justiça futura, conduzindo-os ao aperfeiçoamento moral.",
    E: "Restaurar os antigos oráculos pagãos da Grécia e do Egito.",
    correct: "D",
    explanation:
      "Deus permite as manifestações para esclarecer a humanidade numa época de dúvida, provando que tudo não acaba com a morte do corpo e que colhemos na vida futura o fruto de nossas obras.",
    reference: "O Que é o Espiritismo - Cap. II, itens 36 a 39",
  },
  {
    code: 850,
    topic: "mediunidade",
    difficulty: "facil",
    statement:
      "No Capítulo II (itens 40 a 47), como são denominados no Espiritismo os médiuns que escrevem sob a influência dos Espíritos?",
    A: "Médiuns tiptólogos.",
    B: "Médiuns videntes.",
    C: "Médiuns audientes.",
    D: "Médiuns de efeitos físicos.",
    E: "Médiuns escreventes ou psicógrafos.",
    correct: "E",
    explanation:
      "No item 45, Allan Kardec define os médiuns escreventes ou psicógrafos como aqueles que têm a faculdade de escrever por si mesmos sob a influência dos Espíritos.",
    reference: "O Que é o Espiritismo - Cap. II, item 45",
  },
];

const RAW_QUESTIONS_PART_2: RawSeed[] = [
  {
    code: 851,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo II (itens 46 a 49), qual é a diferença entre os médiuns psicógrafos mecânicos, semimecânicos e intuitivos?",
    A: "No mecânico a mão move-se sem consciência do que escreve; no intuitivo o Espírito atua sobre o pensamento do médium; no semimecânico há impulso na mão acompanhado de consciência das palavras.",
    B: "O mecânico usa máquinas de escrever; o intuitivo usa cestas; o semimecânico usa ardósias.",
    C: "O mecânico só recebe Espíritos inferiores; o intuitivo só recebe Espíritos puros.",
    D: "O mecânico escreve dormindo; o intuitivo escreve em transe cataléptico.",
    E: "Não há distinção alguma entre os três modos de psicografia.",
    correct: "A",
    explanation:
      "No médium mecânico o Espírito move diretamente a mão sem que o médium tenha consciência do escrito; no intuitivo transmite o pensamento; no semimecânico participam ambos os mecanismos.",
    reference: "O Que é o Espiritismo - Cap. II, itens 46 a 49",
  },
  {
    code: 852,
    topic: "mediunidade",
    difficulty: "facil",
    statement:
      "De acordo com o Capítulo II (itens 41 a 44), como se caracterizam os médiuns de efeitos físicos, os audientes, os falantes e os videntes?",
    A: "São graus hierárquicos de sacerdócio dentro das sociedades espíritas.",
    B: "Pelos diferentes modos de percepção ou ação: produzem fenômenos materiais (ruídos, movimentos), ouvem os Espíritos, falam sob sua ação ou os veem em estado de vigília.",
    C: "São faculdades exclusivas de pessoas que nasceram cegas ou surdas.",
    D: "Referem-se apenas aos fenômenos de sonambulismo provocado por hipnose.",
    E: "Designam médiuns que atuam somente uma vez na vida.",
    correct: "B",
    explanation:
      "Kardec classifica as variedades de médiuns segundo os efeitos: efeitos físicos, sensitivos ou impressionáveis, audientes, falantes, videntes, sonâmbulos, curadores, pneumatógrafos e psicógrafos.",
    reference: "O Que é o Espiritismo - Cap. II, itens 41 a 44",
  },
  {
    code: 853,
    topic: "mediunidade",
    difficulty: "dificil",
    statement:
      "No Capítulo II (item 44), que nome específico Allan Kardec dá à faculdade raríssima de obter a escrita direta traçada pelos próprios Espíritos sem o uso da mão do médium?",
    A: "Tiptologia alfabética.",
    B: "Psicofonia consciente.",
    C: "Pneumatografia (e pneumatofonia para os sons articulados no ar).",
    D: "Clariaudiência intuitiva.",
    E: "Bicorporeidade tangível.",
    correct: "C",
    explanation:
      "Kardec denomina pneumatografia a escrita direta produzida pelos Espíritos sem intermediário manual, advertindo também contra as fraudes dos que simulam esse fenômeno.",
    reference: "O Que é o Espiritismo - Cap. II, item 44",
  },
  {
    code: 854,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo II ('Escolhos da mediunidade', itens 55 a 64), qual é o maior perigo que ameaça os médiuns e pode levá-los à obsessão e à perda da assistência dos bons Espíritos?",
    A: "O estudo constante das obras fundamentais da Codificação.",
    B: "A prática gratuita da caridade em benefício dos enfermos.",
    C: "O hábito de fazer preces antes das reuniões mediúnicas.",
    D: "O orgulho, a presunção de infalibilidade e a fascinação exercida por Espíritos enganadores que lisonjeiam a vaidade do médium.",
    E: "A leitura comparada das comunicações em grupos sérios.",
    correct: "D",
    explanation:
      "O orgulho é a pedra de toque: quando o médium se julga privilegiado e infalível, afasta os bons Espíritos e entrega-se aos Espíritos mistificadores e fascinadores.",
    reference: "O Que é o Espiritismo - Cap. II, itens 55 a 64",
  },
  {
    code: 855,
    topic: "mediunidade",
    difficulty: "facil",
    statement:
      "De acordo com o Capítulo II ('Qualidades dos médiuns', itens 65 a 71), o que atrai os bons Espíritos para junto de um médium?",
    A: "A riqueza material e os títulos acadêmicos do médium.",
    B: "A força física muscular e o temperamento sanguíneo.",
    C: "O uso de talismãs, vestes especiais e incensos.",
    D: "A cobrança de honorários elevados pelas sessões.",
    E: "As qualidades morais do médium: bondade, benevolência, simplicidade de coração, humildade, devotamento e amor ao bem.",
    correct: "E",
    explanation:
      "A faculdade mediúnica em si é orgânica e independe da moral, mas o seu bom uso e a assistência dos bons Espíritos dependem essencialmente das qualidades morais do médium.",
    reference: "O Que é o Espiritismo - Cap. II, itens 65 a 71",
  },
  {
    code: 856,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "No Capítulo II ('Charlatanismo', itens 72 a 81), por que Allan Kardec afirma que o desinteresse material absoluto é a mais segura garantia contra o charlatanismo mediúnico?",
    A: "Porque onde não há lucro nem especulação não há interesse em simular fenômenos, e os Espíritos Superiores não se prestam a exibições mercantis.",
    B: "Porque os Espíritos cobram tributos espirituais em moedas antigas.",
    C: "Porque a lei francesa proibia apenas as reuniões gratuitas.",
    D: "Porque os médiuns gratuitos jamais precisam estudar a Doutrina.",
    E: "Porque o dinheiro destrói quimicamente o fluido magnético humano.",
    correct: "A",
    explanation:
      "Os Espíritos não estão à disposição de quem paga; um médium que explorasse sua faculdade precisaria simular fenômenos quando os Espíritos não quisessem comparecer, caindo na fraude.",
    reference: "O Que é o Espiritismo - Cap. II, itens 72 a 81",
  },
  {
    code: 857,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo II ('Identidade dos Espíritos', itens 82 a 89), por que não devemos aceitar cegamente os grandes nomes venerados com que certos Espíritos assinam suas comunicações?",
    A: "Porque nenhum Espírito elevado jamais se comunicou com a Terra.",
    B: "Porque Espíritos mistificadores e orgulhosos frequentemente usurpam nomes respeitáveis para impor ideias absurdas ou apócrifas.",
    C: "Porque os Espíritos esquecem todos os nomes próprios após a morte.",
    D: "Porque apenas os Espíritos familiares possuem nome no mundo espiritual.",
    E: "Porque a escrita mediúnica altera automaticamente as letras da assinatura.",
    correct: "B",
    explanation:
      "A identidade dos Espíritos antigos ou ilustres não se prova pelo nome assinado, mas pela elevação constante das ideias, pureza moral, ausência de contradições e gravidade da linguagem.",
    reference: "O Que é o Espiritismo - Cap. II, itens 82 a 89",
  },
  {
    code: 858,
    topic: "ciencia_espiritismo",
    difficulty: "dificil",
    statement:
      "No Capítulo II ('Contradições', itens 90 a 97), qual é a causa principal das aparentes contradições encontradas em certas comunicações espíritas?",
    A: "A variação climática entre os hemisférios norte e sul.",
    B: "A instabilidade do fluido cósmico universal durante os eclipses.",
    C: "A diversidade de graus de saber e moralidade entre os Espíritos comunicantes, pois cada um fala segundo seus conhecimentos e opiniões pessoais.",
    D: "A falta de dicionários padronizados nas escolas europeias.",
    E: "O defeito de fabricação dos lápis utilizados nas sessões.",
    correct: "C",
    explanation:
      "Nem todos os Espíritos sabem tudo: os Espíritos inferiores ou pseudossábios emitem sistemas pessoais e opiniões divergentes, ao passo que os Espíritos Superiores estão sempre de acordo quanto ao ensino moral e fundamental.",
    reference: "O Que é o Espiritismo - Cap. II, itens 90 a 97",
  },
  {
    code: 859,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "De acordo com o Capítulo II (itens 95 a 97), que método de controle Allan Kardec estabeleceu para distinguir a verdade do erro no ensino dos Espíritos?",
    A: "Aceitar exclusivamente as comunicações de um único médium parisiense.",
    B: "Submeter todas as mensagens à votação política das câmaras municipais.",
    C: "Rejeitar qualquer comunicação que trate de filosofia ou moral.",
    D: "O controle da razão aliado à concordância universal do ensino dado pelos Espíritos em diferentes lugares por múltiplos médiuns desconhecidos entre si.",
    E: "Realizar sorteios semanais entre as mensagens psicografadas.",
    correct: "D",
    explanation:
      "Kardec apoiou a Codificação na concordância geral do ensino dos Espíritos através de numerosos médiuns em diversos países e no exame rigoroso da lógica e do bom senso.",
    reference: "O Que é o Espiritismo - Cap. II, itens 95 a 97",
  },
  {
    code: 860,
    topic: "leis_morais",
    difficulty: "facil",
    statement:
      "Segundo o Capítulo II ('Consequências do Espiritismo', itens 98 a 104), qual é o critério pelo qual se reconhece o verdadeiro espírita?",
    A: "Pela faculdade de mover objetos pesados sem contato físico.",
    B: "Pelo número de livros espíritas que guarda em sua biblioteca.",
    C: "Pelo uso de insígnias exteriores e fórmulas místicas de saudação.",
    D: "Pela capacidade de adivinhar a sorte e o futuro das pessoas.",
    E: "Pela sua transformação moral e pelos esforços que emprega para domar suas más inclinações, praticando a caridade por pensamentos, palavras e obras.",
    correct: "E",
    explanation:
      "Crer apenas nos fenômenos faz o crente ou simpatizante; o verdadeiro espírita é o que aplica a moral da Doutrina para reformar-se intimamente e ser mais benevolente e caridoso.",
    reference: "O Que é o Espiritismo - Cap. II, itens 98 a 104",
  },
  {
    code: 861,
    topic: "deus_criacao",
    difficulty: "facil",
    statement:
      "No início do Capítulo III ('Solução de alguns problemas pela Doutrina Espírita', item 105), o que ensina o Espiritismo sobre a pluralidade dos mundos?",
    A: "Que todos os globos que circulam no espaço são habitados por seres apropriados à constituição física de cada mundo.",
    B: "Que apenas a Terra e Marte possuem seres vivos inteligentes.",
    C: "Que os astros são apenas pontos luminosos criados para enfeitar a noite terrestre.",
    D: "Que os demais planetas só serão habitados após a destruição da Terra.",
    E: "Que a vida espiritual não pode existir fora da atmosfera terrestre.",
    correct: "A",
    explanation:
      "No item 105, Kardec expõe que todos os mundos que gravitam no espaço são habitados e apresentam diferentes graus de adiantamento físico e moral.",
    reference: "O Que é o Espiritismo - Cap. III, item 105",
  },
  {
    code: 862,
    topic: "deus_criacao",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III (itens 106 e 107), qual é a posição da Terra na hierarquia dos mundos habitados?",
    A: "É o mundo mais atrasado e primitivo de todo o universo.",
    B: "Não está na primeira nem na última linha, mas é um dos mundos menos adiantados, onde ainda predominam as provas, expiações e necessidades materiais.",
    C: "É um mundo celeste onde só habitam Espíritos puros.",
    D: "É o único globo onde existe o livre-arbítrio humano.",
    E: "É um planeta superior a Júpiter em evolução moral e física.",
    correct: "B",
    explanation:
      "Kardec esclarece que a Terra não ocupa nem o primeiro nem o último degrau, mas pertence à categoria dos mundos onde a imperfeição moral e as vicissitudes corporais ainda exigem duro trabalho e expiação.",
    reference: "O Que é o Espiritismo - Cap. III, itens 106 e 107",
  },
  {
    code: 863,
    topic: "espiritos",
    difficulty: "medio",
    statement:
      "De acordo com o Capítulo III ('Do homem durante a vida terrestre', itens 108 a 111), em que momento se completa a união definitiva da alma com o corpo?",
    A: "Apenas aos sete anos de idade, quando começa a razão.",
    B: "Três meses após o batismo religioso da criança.",
    C: "Começa na concepção e só é completa no instante do nascimento.",
    D: "Somente quando o jovem atinge a maioridade civil.",
    E: "Apenas no momento da desencarnação do corpo físico.",
    correct: "C",
    explanation:
      "No item 110, Kardec precisa que a união da alma com o corpo começa na concepção, mas só se torna completa no momento do nascimento.",
    reference: "O Que é o Espiritismo - Cap. III, item 110",
  },
  {
    code: 864,
    topic: "espiritos",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III (itens 112 e 113), o que ocorre com a alma durante o sono do corpo físico?",
    A: "A alma adormece profundamente e perde toda a atividade consciente.",
    B: "O perispírito dissolve-se temporariamente até o despertar matinal.",
    C: "O Espírito desencarna definitivamente e outro Espírito ocupa o corpo.",
    D: "Os laços que a prendem ao corpo afrouxam-se e a alma recobra parte de sua liberdade, entrando em relação com outros Espíritos nos sonhos.",
    E: "A alma permanece aprisionada exclusivamente dentro do coração.",
    correct: "D",
    explanation:
      "Enquanto o corpo repousa, o Espírito não precisa de descanso: afrouxam-se os laços fluídicos, ele percorre o espaço e comunica-se com encarnados e desencarnados, originando muitas lembranças de sonhos.",
    reference: "O Que é o Espiritismo - Cap. III, itens 112 e 113",
  },
  {
    code: 865,
    topic: "deus_criacao",
    difficulty: "facil",
    statement:
      "Conforme o Capítulo III ('A alma antes da união com o corpo', itens 114 e 115), como Deus cria todos os Espíritos?",
    A: "Uns já sábios e virtuosos, e outros predestinados ao mal.",
    B: "Dotados desde o primeiro dia de toda a ciência universal.",
    C: "Divididos em castas eternas que jamais se misturam.",
    D: "Formados a partir da divisão da alma dos próprios pais.",
    E: "Simples e ignorantes, isto é, sem ciência e sem conhecimento do bem e do mal, mas com igual aptidão para tudo adquirir pelo esforço próprio.",
    correct: "E",
    explanation:
      "Deus, soberanamente justo, não privilegia nenhum Espírito na criação: todos partem do mesmo ponto inicial — simples e ignorantes — e conquistam a perfeição pelo trabalho e livre-arbítrio.",
    reference: "O Que é o Espiritismo - Cap. III, itens 114 e 115",
  },
  {
    code: 866,
    topic: "reencarnacao",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III (itens 116 a 119), o que faz o Espírito quando abusa de seu livre-arbítrio e retarda seu adiantamento?",
    A: "Sofre as consequências de suas faltas e precisa recomeçar em novas existências corporais a tarefa que desempenhou mal.",
    B: "É condenado ao fogo eterno sem possibilidade de reparação.",
    C: "Regressa à condição de mineral ou vegetal.",
    D: "Perde a individualidade e dissolve-se no fluido cósmico.",
    E: "Recebe o perdão automático no instante da morte sem precisar progredir.",
    correct: "A",
    explanation:
      "Não podendo ir para os mundos felizes sem haver-se depurado, o Espírito estacionário ou culpado reencarna em mundos de provas e expiações para reparar o tempo perdido.",
    reference: "O Que é o Espiritismo - Cap. III, itens 116 a 119",
  },
  {
    code: 867,
    topic: "vida_futura",
    difficulty: "facil",
    statement:
      "De acordo com o Capítulo III ('A alma após a morte', itens 120 a 123), a alma conserva a sua individualidade após a morte do corpo?",
    A: "Não, pois mergulha no todo universal como uma gota d'água no oceano.",
    B: "Sim; jamais a perde, conservando a consciência de si mesma e o envoltório etéreo (perispírito), que reproduz a forma humana.",
    C: "Conserva a individualidade apenas durante quarenta dias após o enterro.",
    D: "Somente os grandes gênios mantêm a memória individual após a morte.",
    E: "A alma divide-se em várias centelhas inconscientes.",
    correct: "B",
    explanation:
      "Sem individualidade e consciência de si mesma, a sobrevivência seria equivalente ao nada; o Espírito leva consigo o perispírito, sua memória, seus afetos, suas luzes ou sua ignorância.",
    reference: "O Que é o Espiritismo - Cap. III, itens 120 a 123",
  },
  {
    code: 868,
    topic: "vida_futura",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III (itens 124 a 127), de que depende a duração e a intensidade da perturbação que se segue à morte?",
    A: "Da riqueza do mausoléu construído pela família na Terra.",
    B: "Da idade cronológica do corpo físico no instante do óbito.",
    C: "Da elevação moral do Espírito e do seu grau de desapego das coisas materiais.",
    D: "Da estação do ano e da fase da Lua no dia do desencarne.",
    E: "Do número de velas acesas ao redor do féretro.",
    correct: "C",
    explanation:
      "Para o homem de consciência pura, que já se desligou dos interesses terrenos durante a vida, o despertar espiritual é rápido e calmo; para o materialista e o culpado, a perturbação é longa e penosa.",
    reference: "O Que é o Espiritismo - Cap. III, itens 124 a 127",
  },
  {
    code: 869,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "No Capítulo III ('Estado dos Espíritos', itens 128 a 132), como são chamados os Espíritos que se encontram no intervalo entre duas existências corporais?",
    A: "Espíritos elementais.",
    B: "Espíritos cristalizados.",
    C: "Espíritos incriados.",
    D: "Espíritos errantes (no estado de erraticidade).",
    E: "Espíritos anônimos.",
    correct: "D",
    explanation:
      "No item 128, Kardec explica que no intervalo de suas existências corporais os Espíritos estão no estado de erraticidade e são denominados Espíritos errantes.",
    reference: "O Que é o Espiritismo - Cap. III, item 128",
  },
  {
    code: 870,
    topic: "espiritos",
    difficulty: "medio",
    statement:
      "De acordo com o Capítulo III (itens 129 e 130), todos os Espíritos desencarnados permanecem errantes indefinidamente?",
    A: "Sim, todos os Espíritos continuam errantes por toda a eternidade.",
    B: "Sim, pois nenhum Espírito jamais fica livre da reencarnação.",
    C: "Não, porque após três séculos os Espíritos deixam de existir.",
    D: "Apenas os Espíritos inferiores deixam de ser errantes.",
    E: "Não; os Espíritos puros, que atingiram a perfeição e não precisam mais de novas reencarnações, não são mais errantes, pois seu estado é definitivo.",
    correct: "E",
    explanation:
      "O estado errante é transitório e próprio dos Espíritos que ainda têm de reencarnar para progredir; os Espíritos puros já chegaram ao termo da escala e gozam da felicidade definitiva.",
    reference: "O Que é o Espiritismo - Cap. III, itens 129 e 130",
  },
  {
    code: 871,
    topic: "vida_futura",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III ('Penas e gozos futuros', itens 133 a 137), qual é a natureza das penas e das alegrias da alma na vida espiritual?",
    A: "São essencialmente morais e inerentes ao grau de elevação ou de imperfeição do próprio Espírito, que carrega em si mesmo o seu céu ou o seu inferno.",
    B: "Consistem em torturas físicas produzidas por caldeiras e chamas materiais.",
    C: "Resumem-se na contemplação imóvel e ociosa sem qualquer atividade útil.",
    D: "Dependem exclusivamente da posição social que o indivíduo ocupou na Terra.",
    E: "São iguais para todos os Espíritos, independentemente de suas obras.",
    correct: "A",
    explanation:
      "Não tendo mais corpo carnal, o Espírito não sofre torturas físicas exteriores: a felicidade nasce da pureza, do amor e das missões úteis, enquanto o sofrimento decorre do remorso, das paixões não saciadas e da visão de suas vítimas.",
    reference: "O Que é o Espiritismo - Cap. III, itens 133 a 137",
  },
  {
    code: 872,
    topic: "vida_futura",
    difficulty: "medio",
    statement:
      "Conforme o Capítulo III (item 136), onde estão localizados o céu e o inferno segundo a Doutrina Espírita?",
    A: "O céu fica acima das estrelas fixas e o inferno no centro incandescente da Terra.",
    B: "Em toda parte: o céu está onde há Espíritos felizes e mundos superiores; o inferno está no próprio íntimo dos Espíritos imperfeitos e nos mundos de expiação.",
    C: "O céu localiza-se no Sol e o inferno na superfície da Lua.",
    D: "Ambos são lugares circunscritos cercados por muralhas intransponíveis.",
    E: "Existem apenas como figuras poéticas sem correspondência com o estado da alma.",
    correct: "B",
    explanation:
      "O céu e o inferno não são lugares geograficamente circunscritos: o Espírito feliz leva consigo a ventura onde quer que esteja, e o Espírito perverso ou impenitente carrega em si mesmo o seu tormento.",
    reference: "O Que é o Espiritismo - Cap. III, item 136",
  },
  {
    code: 873,
    topic: "reencarnacao",
    difficulty: "facil",
    statement:
      "De acordo com o Capítulo III (item 137), a que corresponde na Doutrina Espírita a ideia tradicional do purgatório?",
    A: "A um vale escuro onde as almas aguardam passivamente o fim do mundo.",
    B: "A uma prisão subterrânea onde se paga resgate em moedas.",
    C: "Ao estado de erraticidade dolorosa e às encarnações corporais expiatórias em que o Espírito se depura de suas imperfeições.",
    D: "Ao sono letárgico dos Espíritos que desencarnaram na infância.",
    E: "À perda temporária da inteligência nos mundos inferiores.",
    correct: "C",
    explanation:
      "Kardec explica no item 137 que o purgatório é uma realidade moral: consiste nas dores da erraticidade e nas existências terrestres de prova e expiação pelas quais nos purificamos.",
    reference: "O Que é o Espiritismo - Cap. III, item 137",
  },
  {
    code: 874,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "Segundo o Capítulo III ('Intervenção dos Espíritos no mundo corporal', itens 138 a 143), o que é o Espírito protetor ou Anjo de guarda?",
    A: "Um Espírito inferior encarregado de vigiar os bens materiais da família.",
    B: "Uma força magnética impessoal gerada pelo pensamento humano.",
    C: "Um Espírito que anula o livre-arbítrio do protegido para impedi-lo de errar.",
    D: "Um Espírito de ordem elevada ligado ao indivíduo desde o nascimento para guiá-lo no caminho do bem por meio de bons conselhos.",
    E: "Apenas uma figura alegórica sem existência real no plano espiritual.",
    correct: "D",
    explanation:
      "Todo homem tem um Espírito protetor (anjo guardião ou bom gênio) de natureza superior, que o assiste com inspirações salutares sem jamais suprimir o seu livre-arbítrio.",
    reference: "O Que é o Espiritismo - Cap. III, itens 140 e 141",
  },
  {
    code: 875,
    topic: "leis_morais",
    difficulty: "facil",
    statement:
      "De acordo com o Capítulo III (itens 142 e 143), qual é o meio mais eficaz de afastar os maus Espíritos e atrair a assistência dos bons?",
    A: "Pronunciar fórmulas latinas de exorcismo e queimar ervas aromáticas.",
    B: "Traçar sinais cabalísticos nas portas e janelas da residência.",
    C: "Evitar qualquer conversa sobre assuntos espirituais ou filosóficos.",
    D: "Portar amuletos metálicos magnetizados por sonâmbulos.",
    E: "Praticar o bem, confiar em Deus, elevar o pensamento pela prece sincera e vencer as próprias imperfeições morais.",
    correct: "E",
    explanation:
      "Os maus Espíritos são atraídos pelas nossas próprias paixões (orgulho, egoísmo, ódio, cobiça); nenhuma fórmula exterior os afasta se o homem não se reformar moralmente.",
    reference: "O Que é o Espiritismo - Cap. III, itens 142 e 143",
  },
  {
    code: 876,
    topic: "leis_morais",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III ('Causas anteriores das aflições', itens 144 a 148), onde reside a causa da maioria das aflições terrenas?",
    A: "Na própria conduta imprudente, orgulhosa ou egoísta do homem na vida presente; e, quando não têm causa atual, nas faltas cometidas em existências anteriores.",
    B: "Na fatalidade cega do destino contra a qual o homem nada pode fazer.",
    C: "No pecado original cometido por um único casal no início dos tempos.",
    D: "Na influência maléfica dos cometas sobre a atmosfera terrestre.",
    E: "No capricho arbitrário da Providência ao distribuir dores sem motivo.",
    correct: "A",
    explanation:
      "Kardec distingue duas fontes de aflições: 1ª as que o homem cria nesta própria vida por sua imprevidência e más paixões; 2ª as que atingem o homem de bem sem causa atual aparente, que são expiações de vidas passadas.",
    reference: "O Que é o Espiritismo - Cap. III, itens 144 a 148",
  },
  {
    code: 877,
    topic: "reencarnacao",
    difficulty: "medio",
    statement:
      "No Capítulo III (itens 146 a 148), por que a justiça divina exige que a falta cometida em uma existência seja reparada por uma expiação equivalente?",
    A: "Porque Deus sente prazer em vingar-se das criaturas que erraram.",
    B: "Porque cada Espírito é solidário com o seu próprio passado, e a expiação ensina pela experiência da dor aquilo que ele fez outros sofrerem.",
    C: "Porque os Espíritos Superiores cobram tributos proporcionais a cada erro.",
    D: "Porque o arrependimento sincero não tem nenhum valor perante as leis morais.",
    E: "Porque somente o sofrimento físico cria a inteligência no Espírito.",
    correct: "B",
    explanation:
      "Quem abusou da riqueza, do poder ou da saúde aprende, passando pelas provas contrárias, a corrigir o orgulho e a desenvolver a humildade e a caridade.",
    reference: "O Que é o Espiritismo - Cap. III, itens 146 a 148",
  },
  {
    code: 878,
    topic: "reencarnacao",
    difficulty: "facil",
    statement:
      "Segundo o Capítulo III ('Esquecimento do passado', itens 149 a 152), por que Deus concedeu ao homem encarnado o esquecimento temporário de suas existências anteriores?",
    A: "Para impedir que a humanidade progrida nas ciências e nas artes.",
    B: "Porque o cérebro material não possui espaço físico para guardar lembranças.",
    C: "Porque a lembrança precisa das faltas e inimizades passadas humilharia o homem, perturbaria as relações sociais e entravaria o seu livre-arbítrio.",
    D: "Porque o perispírito apaga definitivamente toda a história do Espírito.",
    E: "Para que ninguém possa jamais acreditar na pluralidade das existências.",
    correct: "C",
    explanation:
      "O esquecimento temporário durante a vida corpórea é um benefício da sabedoria divina: evita vergonhas paralisantes e ódios perpétuos, permitindo que antigos adversários se reconciliem na mesma família.",
    reference: "O Que é o Espiritismo - Cap. III, itens 149 a 152",
  },
  {
    code: 879,
    topic: "reencarnacao",
    difficulty: "medio",
    statement:
      "De acordo com o Capítulo III (itens 151 e 152), embora não tenhamos a lembrança detalhada dos fatos de vidas passadas, o que nos resta delas durante a existência atual?",
    A: "Apenas marcas físicas de nascença na pele.",
    B: "O conhecimento exato do idioma que falamos na encarnação anterior.",
    C: "A memória completa dos nomes e datas de todas as nossas famílias passadas.",
    D: "As tendências instintivas, as aptidões inatas e a voz da consciência, que nos adverte contra os erros já sofridos.",
    E: "Absolutamente nada, nem mesmo no campo intelectual ou moral.",
    correct: "D",
    explanation:
      "Esquecemos os fatos particulares, mas conservamos o resultado da experiência adquirida sob a forma de ideias inatas, aptidões precoces e intuições morais.",
    reference: "O Que é o Espiritismo - Cap. III, itens 151 e 152",
  },
  {
    code: 880,
    topic: "reencarnacao",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III (itens 153 e 154), como a Doutrina Espírita explica as simpatias e antipatias espontâneas entre pessoas que parecem ver-se pela primeira vez?",
    A: "Pela coincidência da cor dos olhos e do timbre da voz.",
    B: "Pela ação exclusiva da temperatura ambiente no sistema nervoso.",
    C: "Por um sorteio aleatório realizado antes do nascimento.",
    D: "Pela diferença de nacionalidade e de classe financeira.",
    E: "Pela intuição vaga de relações anteriores de afeição ou de animosidade que os Espíritos tiveram em existências passadas ou na erraticidade.",
    correct: "E",
    explanation:
      "Dois Espíritos que se conheceram — como amigos dedicados ou como inimigos — pressentem-se ao se reencontrarem na carne, gerando simpatia imediata ou repulsão instintiva que o dever moral manda vencer.",
    reference: "O Que é o Espiritismo - Cap. III, itens 153 e 154",
  },
  {
    code: 881,
    topic: "leis_morais",
    difficulty: "facil",
    statement:
      "No Capítulo III ('Suicídio', itens 155 a 157), qual é o ensinamento constante de todos os Espíritos sobre o suicídio?",
    A: "O homem nunca tem o direito de dispor da própria vida; o suicídio é sempre uma transgressão da lei de Deus que agrava os sofrimentos do Espírito.",
    B: "O suicídio é permitido quando a pessoa sofre de doença física incurável.",
    C: "O suicida alcança imediatamente o repouso e o esquecimento de suas dores.",
    D: "O suicídio apressa a evolução espiritual quando motivado por desgosto amoroso.",
    E: "A alma do suicida desintegra-se no instante em que o coração para de bater.",
    correct: "A",
    explanation:
      "Nos itens 155 a 157, Kardec registra que o suicida procura fugir de um sofrimento passageiro e cai em torturas morais e perispirituais muito mais longas e terríveis.",
    reference: "O Que é o Espiritismo - Cap. III, itens 155 a 157",
  },
  {
    code: 882,
    topic: "vida_futura",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III (item 156), por que o suicida sente por longo tempo após a morte todas as angústias e impressões da agonia física?",
    A: "Porque o corpo material continua respirando dentro do túmulo.",
    B: "Porque na morte violenta provocada antes do termo natural os laços entre o perispírito e o corpo estavam cheios de vitalidade e só se rompem lentamente.",
    C: "Porque os bons Espíritos recusam-se a ouvir qualquer prece em favor dele.",
    D: "Porque ele perde para sempre a capacidade de arrepender-se.",
    E: "Porque o fluido cósmico congela-se ao redor do local do sepultamento.",
    correct: "B",
    explanation:
      "Na morte natural a vida orgânica extingue-se pouco a pouco e o desprendimento é suave; no suicídio os laços vitais são quebrados à força em plena vitalidade, repercutindo dolorosamente no perispírito.",
    reference: "O Que é o Espiritismo - Cap. III, item 156",
  },
  {
    code: 883,
    topic: "reencarnacao",
    difficulty: "medio",
    statement:
      "De acordo com o Capítulo III ('Loucura, idiotia', itens 158 a 162), o Espírito do louco ou do idiota de nascença é uma alma inferior ou privada de inteligência?",
    A: "Sim, é uma alma criada sem o princípio da razão humana.",
    B: "Sim, trata-se do espírito de um animal encarnado por engano em corpo humano.",
    C: "Não; o Espírito em si pode ser inteligente, mas acha-se impedido de manifestar seu pensamento pela imperfeição ou lesão dos órgãos cerebrais que lhe servem de instrumento.",
    D: "Não possui alma própria, vivendo apenas pela vida vegetativa do corpo.",
    E: "Perdeu definitivamente a memória e a consciência por toda a eternidade.",
    correct: "C",
    explanation:
      "O cérebro é o instrumento de manifestação do pensamento na vida corpórea: assim como o mais hábil músico não pode tirar sons harmoniosos de um instrumento quebrado, o Espírito fica tolhido por órgãos imperfeitos.",
    reference: "O Que é o Espiritismo - Cap. III, itens 158 a 162",
  },
  {
    code: 884,
    topic: "reencarnacao",
    difficulty: "dificil",
    statement:
      "Segundo o Capítulo III (itens 160 a 162), com que finalidade moral e educativa um Espírito inteligente pode ser submetido à dura prova da idiotia ou da loucura?",
    A: "Por mero acidente biológico sem qualquer relação com a justiça de Deus.",
    B: "Para premiar os Espíritos que já atingiram a santidade suprema.",
    C: "Para demonstrar que a matéria governa soberanamente o destino da alma.",
    D: "Como expiação do abuso que fez de sua inteligência, de seu orgulho ou de suas paixões em existência anterior, sofrendo o constrangimento de não poder exprimir-se.",
    E: "Para isentar a família de qualquer dever de caridade e assistência.",
    correct: "D",
    explanation:
      "No corpo do idiota o Espírito tem consciência interior de sua situação e sofre o constrangimento de não poder comunicar-se, expiando assim o abuso anterior de suas faculdades intelectuais.",
    reference: "O Que é o Espiritismo - Cap. III, itens 160 a 162",
  },
  {
    code: 885,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "Na Biografia de Allan Kardec por Henri Sausse, qual memória premiada em 1831 pela Academia Real de Ciências de Arras o jovem professor Rivail escreveu?",
    A: "Um tratado sobre a aplicação da eletricidade aos telégrafos marítimos.",
    B: "Um estudo astronômico sobre as órbitas dos cometas periódicos.",
    C: "Uma tese médica sobre o tratamento da febre amarela nas colônias.",
    D: "Um romance histórico sobre os druidas da antiga Gália.",
    E: "'Qual o sistema de estudos mais em harmonia com as necessidades da época?'.",
    correct: "E",
    explanation:
      "Henri Sausse destaca que em 1831 a Academia Real de Ciências de Arras premiou a notável memória pedagógica de Rivail sobre a reforma do ensino público na França.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 886,
    topic: "ciencia_espiritismo",
    difficulty: "dificil",
    statement:
      "Segundo Henri Sausse, que resposta memorável deu o professor Rivail em 1854 quando o Sr. Fortier lhe disse que as mesas falavam ao serem interrogadas?",
    A: "'Só acreditarei quando o vir e quando me provarem que uma mesa tem cérebro para pensar, nervos para sentir e que possa tornar-se sonâmbula; até lá, permita que eu não veja nisso mais que um conto para fazer dormir em pé.'",
    B: "'Aceito imediatamente o prodígio, pois tudo no universo é sobrenatural e miraculoso.'",
    C: "'Jamais assistirei a uma sessão, porque a ciência oficial já proibiu tais estudos.'",
    D: "'As mesas falam porque são habitadas pelos gênios elementais da floresta.'",
    E: "'Publicarei amanhã mesmo um livro confirmando essas revelações sem precisar verificá-las.'",
    correct: "A",
    explanation:
      "Essa resposta célebre mostra a prudência e o rigor científico de Rivail: ele não negou a possibilidade de uma força desconhecida, mas exigiu observação direta e explicação racional antes de admitir uma causa inteligente.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 887,
    topic: "espiritos",
    difficulty: "medio",
    statement:
      "Conforme relata Henri Sausse na Biografia, qual era o nome do Espírito protetor de Allan Kardec, que se comunicou com ele pela médium Srta. Aline C. em 1856 confirmando sua missão?",
    A: "O Espírito de São Luís.",
    B: "O Espírito da Verdade (e também o seu Espírito familiar Zéfiro nas reuniões da família Baudin).",
    C: "O Espírito de Emanuel Swedenborg.",
    D: "O Espírito de Galileu Galilei.",
    E: "O Espírito de Joana d'Arc.",
    correct: "B",
    explanation:
      "Nas sessões da família Baudin manifestava-se o Espírito protetor Zéfiro (que lhe revelou o nome Allan Kardec), e em 1856 o Espírito da Verdade confirmou-lhe a árdua missão de codificar a Doutrina.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 888,
    topic: "ciencia_espiritismo",
    difficulty: "dificil",
    statement:
      "Segundo a Biografia escrita por Henri Sausse, em que cidade espanhola ocorreu em 9 de outubro de 1861 o célebre auto de fé em que foram queimados trezentos volumes espíritas?",
    A: "Em Madri.",
    B: "Em Sevilha.",
    C: "Em Barcelona.",
    D: "Em Valência.",
    E: "Em Salamanca.",
    correct: "C",
    explanation:
      "Em 9 de outubro de 1861, por ordem do bispo de Barcelona, foram queimados em praça pública trezentos volumes e brochuras espíritas, fato que repercutiu imensamente a favor da divulgação do Espiritismo.",
    reference: "O Que é o Espiritismo - Biografia de Allan Kardec (Henri Sausse)",
  },
  {
    code: 889,
    topic: "ciencia_espiritismo",
    difficulty: "medio",
    statement:
      "No Segundo Diálogo ('O Cético'), como o espírita explica por que a Ciência oficial não é competente para julgar a priori a questão dos Espíritos?",
    A: "Porque todos os cientistas são inimigos declarados do progresso humano.",
    B: "Porque a matemática e a física são ciências falsas e ilusórias.",
    C: "Porque o Espiritismo proíbe que médicos e físicos estudem suas obras.",
    D: "Porque as ciências exatas tratam apenas das leis da matéria bruta, enquanto o Espiritismo estuda o elemento espiritual e suas relações com a matéria, o que escapa aos instrumentos de laboratório.",
    E: "Porque os Espíritos apagam a memória dos cientistas que entram nas reuniões.",
    correct: "D",
    explanation:
      "Cada ciência tem a sua especialidade: a química e a física estudam a matéria inerte; querer submeter o Espírito livre ao cadinho ou ao bisturi é sair do objeto próprio das ciências materiais.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 890,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "No Segundo Diálogo, quando o Cético pergunta se o médium sente o pensamento do Espírito antes de escrever, o que Kardec esclarece?",
    A: "Nunca; o médium fica sempre inconsciente como uma estátua de pedra.",
    B: "Sempre; não existe nenhum médium que escreva sem saber antes toda a frase.",
    C: "Apenas quando o Espírito comunicante é um parente próximo desencarnado.",
    D: "Somente nas noites de tempestade elétrica.",
    E: "Isso depende do tipo de mediunidade: no médium mecânico a mão escreve sem que ele tenha consciência; no médium intuitivo ou semimecânico o pensamento atravessa o seu cérebro no ato da escrita.",
    correct: "E",
    explanation:
      "Kardec explica ao Cético a distinção entre o médium puramente passivo ou mecânico e o médium intuitivo ou semimecânico, mostrando como em ambos os casos se comprova a independência da ideia comunicada.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 891,
    topic: "espiritos",
    difficulty: "dificil",
    statement:
      "No Segundo Diálogo ('O Cético'), como Allan Kardec explica o fenômeno das aparições visíveis e até tangíveis (agêneres) de Espíritos?",
    A: "Pela condensação momentânea do fluido perispiritual combinada ao fluido emitido por um médium de efeitos físicos, tornando o perispírito visível e por vezes palpável.",
    B: "Pela ressurreição definitiva da carne e dos ossos que estavam no cemitério.",
    C: "Por simples ilusão de óptica causada por espelhos côncavos nas salas.",
    D: "Pela transformação química do oxigênio do ar em tecido muscular permanente.",
    E: "Pelo desdobramento exclusivo dos animais domésticos presentes na casa.",
    correct: "A",
    explanation:
      "Em estado normal o perispírito é invisível para os nossos olhos materiais, mas por uma modificação molecular e combinação com o fluido de certos médiuns pode condensar-se até tornar-se visível e momentaneamente tangível.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 892,
    topic: "ciencia_espiritismo",
    difficulty: "facil",
    statement:
      "No Segundo Diálogo, por que Allan Kardec afirma que no Espiritismo não há nada de sobrenatural nem de maravilhoso?",
    A: "Porque o Espiritismo nega a existência de Deus e da alma imortal.",
    B: "Porque todos os fenômenos espíritas repousam sobre leis da Natureza até então desconhecidas; uma vez conhecida a lei que os rege, o maravilhoso desaparece.",
    C: "Porque todas as manifestações mediúnicas são meros truques de prestidigitação.",
    D: "Porque os Espíritos são feitos de matéria sólida idêntica ao ferro.",
    E: "Porque a Ciência já conhecia o perispírito desde a antiguidade clássica.",
    correct: "B",
    explanation:
      "Deus não derroga as próprias leis que estabeleceu; o que parecia sobrenatural ou miraculoso na ignorância das leis fluídicas e espirituais entra na ordem dos fenômenos naturais explicados pelo Espiritismo.",
    reference: "O Que é o Espiritismo - Cap. I, Segundo Diálogo: O Cético",
  },
  {
    code: 893,
    topic: "jesus_evangelho",
    difficulty: "dificil",
    statement:
      "No Terceiro Diálogo ('O Padre'), como o espírita responde à pergunta sobre se o Espiritismo é uma nova religião?",
    A: "Afirmando que o Espiritismo tem bispos, dogmas fechados e sacramentos próprios.",
    B: "Dizendo que o Espiritismo proíbe seus adeptos de entrarem em qualquer igreja.",
    C: "Explicando que o Espiritismo é uma ciência de observação e uma doutrina filosófica de consequências morais que não possui culto material, sacerdócio nem templos, proclamando a liberdade de consciência.",
    D: "Declarando que o Espiritismo exige o batismo obrigatório nas águas do rio Sena.",
    E: "Sustentando que a moral espírita é oposta ao ensino de Jesus Cristo.",
    correct: "C",
    explanation:
      "Em O Que é o Espiritismo, Kardec esclarece ao Padre que o Espiritismo não se constitui como igreja com sacerdócio ou rituais exteriores, mas acolhe homens de todas as crenças na vivência da caridade cristã.",
    reference: "O Que é o Espiritismo - Cap. I, Terceiro Diálogo: O Padre",
  },
  {
    code: 894,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo II (itens 31 a 34), todos os Espíritos que são evocados podem atender imediatamente ao chamado?",
    A: "Sim, qualquer Espírito é obrigado a comparecer no instante em que seu nome é pronunciado.",
    B: "Não, porque nenhum Espírito pode jamais ouvir o pensamento dos encarnados.",
    C: "Sim, desde que o evocador pronuncie o nome do Espírito três vezes em voz alta.",
    D: "Não; o Espírito pode estar reencarnado ou ocupado em missão distante, ou a permissão pode ser-lhe negada; nesse caso, ou avisa que não pode vir, ou um Espírito amigo responde por ele.",
    E: "Apenas os Espíritos sofredores têm permissão de atender às evocações.",
    correct: "D",
    explanation:
      "Kardec explica nos itens 32 a 34 que diversas causas podem impedir a comunicação imediata de um Espírito evocado, inclusive o fato de achar-se reencarnado na Terra ou em outro mundo.",
    reference: "O Que é o Espiritismo - Cap. II, itens 31 a 34",
  },
  {
    code: 895,
    topic: "mediunidade",
    difficulty: "medio",
    statement:
      "No Capítulo II (itens 50 a 54), o que recomenda Allan Kardec àquele que deseja verificar experimentalmente se possui a faculdade de médium escrevente (psicógrafo)?",
    A: "Submeter-se antes a um jejum rigoroso de sete dias no escuro.",
    B: "Comprar aparelhos magnéticos de cobre e cristal.",
    C: "Ingerir substâncias narcóticas para provocar o transe.",
    D: "Exigir que os Espíritos movam os móveis da sala como sinal prévio.",
    E: "Recolher-se em silêncio com fé, elevar o pensamento em prece ao seu Espírito protetor e aguardar com paciência e perseverança, renovando a tentativa por vários dias sem desanimar.",
    correct: "E",
    explanation:
      "Nos itens 50 a 54, Kardec ensina que o meio de tentar é simples: recolhimento, prece sincera ao anjo guardião e aos bons Espíritos, evitando perguntas frívolas ou interesseiras e perseverando com calma.",
    reference: "O Que é o Espiritismo - Cap. II, itens 50 a 54",
  },
  {
    code: 896,
    topic: "mediunidade",
    difficulty: "dificil",
    statement:
      "Segundo o Capítulo II (itens 57 a 62), quais são os sinais característicos pelos quais se reconhece a obsessão e a fascinação mediúnica?",
    A: "A exigência do Espírito de que o médium se isole, rejeite todo exame crítico alheio, escreva incessantemente coisas pueris ou absurdas e acredite cegamente em sua própria infalibilidade.",
    B: "O conselho constante para estudar, praticar a caridade e submeter os escritos ao crivo da razão.",
    C: "A raridade das comunicações e a brevidade das respostas morais.",
    D: "A recomendação de respeitar os deveres familiares e profissionais.",
    E: "O estímulo à humildade, à paciência e ao perdão das ofensas.",
    correct: "A",
    explanation:
      "Todo Espírito que receia o exame e a discussão, que isola o médium dos conselhos prudentes, que impõe ordens ridículas ou lisonjeia o orgulho é infalivelmente um Espírito mistificador e obsessor.",
    reference: "O Que é o Espiritismo - Cap. II, itens 57 a 62",
  },
  {
    code: 897,
    topic: "espiritos",
    difficulty: "medio",
    statement:
      "De acordo com o Capítulo III (itens 108 e 109), a alma existe antes da formação do corpo físico que vai animar?",
    A: "Não; a alma é criada no exato instante em que o recém-nascido respira.",
    B: "Sim; a alma preexiste à união com o corpo, pois é um Espírito que já viveu na erraticidade e em existências anteriores.",
    C: "Apenas as almas dos profetas preexistiam ao nascimento.",
    D: "Não, porque a alma é uma secreção produzida pelo cérebro infantil.",
    E: "Somente nos planetas superiores a alma existe antes do corpo.",
    correct: "B",
    explanation:
      "No item 109, Kardec afirma categoricamente a preexistência da alma: antes de unir-se ao corpo, ela é um dos Espíritos que povoam o mundo invisível e que se encarna para progredir.",
    reference: "O Que é o Espiritismo - Cap. III, itens 108 e 109",
  },
  {
    code: 898,
    topic: "vida_futura",
    difficulty: "medio",
    statement:
      "Segundo o Capítulo III (itens 122 e 125), como se dá a separação entre a alma e o corpo no momento da morte?",
    A: "De forma sempre instantânea e acompanhada de dores físicas lancinantes para todos os homens.",
    B: "Somente após a decomposição total dos ossos no sepulcro.",
    C: "Gradualmente, desatando-se os laços fluídicos do perispírito sem dor maior do que na vida; para o justo, a separação é pronta e suave como o despertar de um sono.",
    D: "Mediante o rompimento mecânico da coluna vertebral.",
    E: "Apenas quando o sol se põe no horizonte local.",
    correct: "C",
    explanation:
      "No item 122, Kardec explica que a separação não é brusca nem dolorosa em si mesma: o corpo frequentemente sofre mais durante a vida e a moléstia do que no momento do desprendimento final.",
    reference: "O Que é o Espiritismo - Cap. III, itens 122 e 125",
  },
  {
    code: 899,
    topic: "espiritos",
    difficulty: "facil",
    statement:
      "Conforme o Capítulo III (itens 131 e 132), o que fazem os Espíritos durante o estado de erraticidade?",
    A: "Dormem em letargia profunda até o momento de reencarnar.",
    B: "Ficam presos imóvelmente ao redor do próprio túmulo.",
    C: "Perdem o livre-arbítrio e tornam-se autômatos inconscientes.",
    D: "Refletem sobre a existência passada, instruem-se, procuram meios de se adiantar e escolhem novas provas para as futuras encarnações.",
    E: "Dedicam-se exclusivamente a produzir ruídos materiais nas casas.",
    correct: "D",
    explanation:
      "Na erraticidade, o Espírito esclarecido estuda o seu passado, reconhece seus erros, frequenta centros de instrução espiritual e prepara as provas que lhe permitirão avançar em nova existência.",
    reference: "O Que é o Espiritismo - Cap. III, itens 131 e 132",
  },
  {
    code: 900,
    topic: "leis_morais",
    difficulty: "facil",
    statement:
      "Na conclusão de 'O Que é o Espiritismo', qual é a síntese prática de toda a moral ensinada pelos Espíritos Superiores?",
    A: "O isolamento absoluto do mundo social e a renúncia ao trabalho.",
    B: "A busca do poder terreno e da supremacia intelectual sobre os semelhantes.",
    C: "A observância exclusiva de cerimônias exteriores sem reforma íntima.",
    D: "O fatalismo resignado que dispensa o esforço de aperfeiçoamento.",
    E: "O amor a Deus acima de tudo e a caridade para com o próximo — benevolência para com todos, indulgência para as imperfeições alheias e perdão das ofensas.",
    correct: "E",
    explanation:
      "Toda a filosofia moral de O Que é o Espiritismo converge para a máxima evangélica da caridade ativa, da fraternidade e da reforma íntima como condição indispensável da felicidade futura.",
    reference: "O Que é o Espiritismo - Cap. II, itens 98 a 104 / Cap. III",
  },
];

const LETTER_TO_INDEX: Record<"A" | "B" | "C" | "D" | "E", number> = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

export const O_QUE_E_ESPIRITISMO_QUESTIONS: OQueEEspiritismoQuestionSeed[] = [
  ...RAW_QUESTIONS,
  ...RAW_QUESTIONS_PART_2,
].map((q) => ({
  code: q.code,
  book: "o_que_e_espiritismo",
  topic: q.topic,
  difficulty: q.difficulty,
  statement: q.statement,
  options: {
    A: q.A,
    B: q.B,
    C: q.C,
    D: q.D,
    E: q.E,
  },
  option_a: q.A,
  option_b: q.B,
  option_c: q.C,
  option_d: q.D,
  option_e: q.E,
  correct_option: q.correct,
  correctIndex: LETTER_TO_INDEX[q.correct],
  explanation: q.explanation,
  reference: q.reference,
  active: true,
}));
