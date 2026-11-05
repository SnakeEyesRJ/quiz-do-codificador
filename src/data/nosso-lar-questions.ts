export interface QuestionSeed {
  code: number;
  book: "nosso_lar";
  difficulty: "facil" | "medio" | "dificil";
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correct_option: "A" | "B" | "C" | "D" | "E";
  explanation: string;
  reference: string;
  active: boolean;
}

export const NOSSO_LAR_QUESTIONS: QuestionSeed[] = [
  {
    code: 301,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 1 de "Nosso Lar" ("Nas Zonas Inferiores"), por quanto tempo aproximado o Espírito André Luiz permaneceu vagando e sofrendo nas regiões inferiores após sua desencarnação, antes de ser recolhido pelos mensageiros de "Nosso Lar"?',
    options: {
      A: "Mais de oito anos consecutivos de padecimentos, medo, fome e desorientação espiritual.",
      B: "Apenas três dias terrestres, equivalentes ao período de perturbação imediata pós-morte.",
      C: "Exatamente quarenta dias em sono letárgico profundo nas enfermarias da crosta.",
      D: "Cerca de seis meses de isolamento absoluto no interior de uma caverna escura.",
      E: "Vinte e cinco anos ininterruptos trabalhando forçadamente em minas subterrâneas.",
    },
    correct_option: "A",
    explanation:
      'Conforme narra André Luiz no Cap. 1 ("Nas Zonas Inferiores") e lhe é confirmado depois por Lísias (Cap. 7), ele permaneceu mais de oito anos vagando nas regiões inferiores até clamar a Deus em prece sincera.',
    reference: 'Nosso Lar — Cap. 1 ("Nas Zonas Inferiores")',
    active: true,
  },
  {
    code: 302,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 2 ("Clarêncio"), qual atitude íntima de André Luiz determinou o momento exato em que o venerável Ministro Clarêncio e dois serventes vieram socorrê-lo nas zonas inferiores?',
    options: {
      A: "A exigência imperiosa de seus direitos humanos, invocando seu diploma de médico terrestre.",
      B: "O abatimento do orgulho e a emissão de uma prece humilde e fervorosa a Deus, em pranto sincero.",
      C: "A realização de um pacto de vingança contra os obsessores que o acusavam de suicida.",
      D: "A leitura mental de um tratado de teologia que ele havia decorado na juventude.",
      E: "O pagamento prévio de indulgências e missas contratadas por sua família na Terra.",
    },
    correct_option: "B",
    explanation:
      "Somente quando André Luiz abateu a vaidade humana e deixou fluir das profundezas da alma uma prece sincera e humilde ao Criador é que o socorro espiritual pôde alcançá-lo através de Clarêncio.",
    reference: 'Nosso Lar — Cap. 2 ("Clarêncio")',
    active: true,
  },
  {
    code: 303,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 3 ("A Oração Coletiva"), já recolhido ao Parque Hospitalar de "Nosso Lar", André Luiz assiste comovido à prece coletiva do Governador e dos 72 Ministros. Que fenômeno luminoso acompanha o cântico e traz alívio imediato aos enfermos?',
    options: {
      A: "Uma tempestade de relâmpagos vermelhos que desintegra instantaneamente as paredes do hospital.",
      B: "O aparecimento de uma carruagem de fogo puxada por cavalos alados no firmamento.",
      C: "Um grande coração azul com estrias douradas no alto, do qual se desprendem pequeninas flores alvas de luz (miosótis fluídicos) sobre os corações.",
      D: "A materialização de estátuas de mármore representando os antigos reis da Europa.",
      E: "Um eclipse total do Sol acompanhado pelo toque de tambores militares.",
    },
    correct_option: "C",
    explanation:
      "Durante a prece coletiva na Governadoria, surge no alto um grande coração azul com estrias douradas, vertendo sobre os pavilhões pequeninas flores alvas e luminosas (semelhantes a miosótis) que balsamizam os enfermos.",
    reference: 'Nosso Lar — Cap. 3 ("A Oração Coletiva")',
    active: true,
  },
  {
    code: 304,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 4 ("O Médico Espiritual"), o assistente Henrique de Luna examina André Luiz e explica-lhe a verdadeira causa de sua desencarnação prematura e do coro de acusações que o chamava de "suicida". Qual foi o diagnóstico espiritual?',
    options: {
      A: "Suicídio direto e premeditado por ingestão voluntária de veneno químico no consultório.",
      B: "Assassinato cometido por um antigo rival político durante uma cirurgia de emergência.",
      C: "Morte natural por velhice avançada, sem qualquer comprometimento dos órgãos perispirituais.",
      D: "Suicídio inconsciente, pois André arruinara o fígado, os rins e o aparelho gástrico com excessos de alimentação, álcool, cólera, descontrole emocional e sífilis.",
      E: "Acidente ferroviário inevitável previsto como fatalidade absoluta em seu mapa cármico.",
    },
    correct_option: "D",
    explanation:
      "Henrique de Luna esclarece que André Luiz cometera suicídio indireto ou inconsciente: por imprevidência, destemperança alimentar, mau gênio e desregramentos, destruíra as forças vitais e lesara gravemente o estômago, o fígado e os rins.",
    reference: 'Nosso Lar — Cap. 4 ("O Médico Espiritual")',
    active: true,
  },
  {
    code: 305,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 5 ("Recebendo Assistência"), o enfermeiro visitador Lísias revela a André Luiz uma estatística impressionante sobre a turma de 80 doentes recém-recolhidos ao Parque Hospitalar. Quantos deles haviam desencarnado na condição de suicidas inconscientes?',
    options: {
      A: "Apenas 2 enfermos dentre os 80 recolhidos.",
      B: "Exatamente 10 enfermos dentre os 80 recolhidos.",
      C: "Exatamente 25 enfermos dentre os 80 recolhidos.",
      D: "Todos os 80 enfermos sem nenhuma exceção.",
      E: "57 enfermos dentre os 80 recolhidos, vitimados por imprevidências, excessos e cólera.",
    },
    correct_option: "E",
    explanation:
      "Lísias informa a André Luiz que, naquela turma de 80 enfermos hospitalizados, nada menos de 57 eram suicidas inconscientes que haviam abreviado a existência física pelo descontrole das paixões e dos hábitos.",
    reference: 'Nosso Lar — Cap. 5 ("Recebendo Assistência")',
    active: true,
  },
  {
    code: 306,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 6 ("Precioso Aviso"), quando André Luiz chora lamentando a saudade da esposa Zélia e dos três filhos que deixara na Terra, que advertência fraterna e decisiva o Ministro Clarêncio lhe dirige?',
    options: {
      A: "Que o pranto deve ser total no arrependimento, mas a lamentação ociosa é perigosa enfermidade mental, devendo-se conquistar a simpatia pelo esforço próprio no trabalho.",
      B: "Que ele deveria regressar imediatamente à crosta terrestre para assombrar a família até ser notado.",
      C: "Que os laços familiares se extinguem para sempre com a morte do corpo físico.",
      D: "Que em Nosso Lar é proibido amar os parentes que permaneceram encarnados na Terra.",
      E: "Que somente os Espíritos que esquecem completamente o passado têm direito à alimentação.",
    },
    correct_option: "A",
    explanation:
      "Clarêncio adverte André contra a autopiedade e a lamentação estéril, lembrando que a dor ociosa é enfermidade mental e que o verdadeiro amor se demonstra preparando-se pelo trabalho útil para servir aos amados.",
    reference: 'Nosso Lar — Cap. 6 ("Precioso Aviso")',
    active: true,
  },
  {
    code: 307,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 7 ("Explicações de Lísias"), ao conversar sobre o desejo de André de rever sua mãe desencarnada e visitar a família na Terra, Lísias cita o ensinamento de um instrutor sobre os três requisitos indispensáveis a qualquer realização nobre. Quais são eles?',
    options: {
      A: "Riqueza material, influência política e títulos acadêmicos.",
      B: "Desejar, saber desejar e merecer — isto é, vontade ativa, trabalho persistente e merecimento justo.",
      C: "Silêncio absoluto, jejum prolongado e isolamento em mosteiros.",
      D: "Pedir com insistência, exigir dos superiores e aguardar sem trabalhar.",
      E: "Sorte favorável, proteção de amigos influentes e isenção de deveres.",
    },
    correct_option: "B",
    explanation:
      "Lísias recorda a lição de que todo desejo nobre exige três requisitos fundamentais: desejar (vontade ativa), saber desejar (trabalho persistente) e merecer (merecimento justo).",
    reference: 'Nosso Lar — Cap. 7 ("Explicações de Lísias")',
    active: true,
  },
  {
    code: 308,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 8 ("Organização de Serviços"), Lísias descreve a origem histórica e a estrutura administrativa da colônia "Nosso Lar". Como estão organizados os seus Ministérios em torno da Governadoria?',
    options: {
      A: "Em doze províncias feudais independentes comandadas por antigos imperadores romanos.",
      B: "Em três conselhos militares voltados exclusivamente para a guerra contra as trevas.",
      C: "Em seis Ministérios orientados por doze Ministros cada um (Regeneração, Auxílio, Comunicação, Esclarecimento, Elevação e União Divina), dispostos em estrela triangular com a Governadoria ao centro.",
      D: "Em quatro secretarias comerciais dedicadas à compra e venda de terrenos espirituais.",
      E: "Em um único departamento hospitalar sem divisão de tarefas ou hierarquia moral.",
    },
    correct_option: "C",
    explanation:
      "Fundada por portugueses distintos no século XVI no Brasil, Nosso Lar divide-se em seis Ministérios (Regeneração, Auxílio, Comunicação, Esclarecimento, Elevação e União Divina), cada qual dirigido por 12 Ministros (totalizando 72).",
    reference: 'Nosso Lar — Cap. 8 ("Organização de Serviços")',
    active: true,
  },
  {
    code: 309,
    book: "nosso_lar",
    difficulty: "dificil",
    statement:
      'No Capítulo 9 ("Problema de Alimentação"), Lísias relata o episódio histórico em que o Governador convocou 200 instrutores de esfera muito elevada para reduzir o uso de alimentos densos na colônia. Qual Ministério resistiu por trinta anos à medida e o que levou à vitória definitiva da sobriedade?',
    options: {
      A: "O Ministério da União Divina resistiu, até que faltou água potável no Rio Azul.",
      B: "O Ministério do Auxílio recusou a mudança, sendo dissolvido pelo Governador.",
      C: "O Ministério da Elevação promoveu uma greve geral de cem anos na colônia.",
      D: "O Ministério do Esclarecimento (apegado a cálculos matemáticos) resistiu, até que uma tentativa de invasão de multidões famintas do Umbral exigiu seis meses de defesa em que todos viveram apenas de inalação e água pura com princípios solares e elétricos.",
      E: "O Ministério da Regeneração proibiu o consumo de sucos e frutas nos hospitais.",
    },
    correct_option: "D",
    explanation:
      "Os técnicos do Ministério do Esclarecimento resistiram por 30 anos à redução alimentar, mas durante o cerco de seis meses por hordas famintas do Umbral, toda a colônia sustentou-se apenas com o princípio vital inalado da atmosfera e água misturada a elementos solares, elétricos e magnéticos.",
    reference: 'Nosso Lar — Cap. 9 ("Problema de Alimentação")',
    active: true,
  },
  {
    code: 310,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 10 ("No Bosque das Águas"), André Luiz e Lísias viajam no "aeróbus" até o grande reservatório do Rio Azul. Segundo explica Lísias, a qual Ministério compete o serviço de magnetização geral das águas de "Nosso Lar"?',
    options: {
      A: "Ao Ministério da Regeneração.",
      B: "Ao Ministério da Comunicação.",
      C: "Ao Ministério do Esclarecimento.",
      D: "Ao Ministério do Auxílio.",
      E: "Ao Ministério da União Divina, cujos Ministros impregnam as águas de fluidos salutares e curativos.",
    },
    correct_option: "E",
    explanation:
      "Lísias esclarece que a água em Nosso Lar desempenha papel de veículo de forças sutis e que o serviço de magnetização geral das águas do Rio Azul cabe aos Ministros da União Divina.",
    reference: 'Nosso Lar — Cap. 10 ("No Bosque das Águas")',
    active: true,
  },
  {
    code: 311,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 11 ("Notícias do Plano"), Lísias menciona que muitos dos processos administrativos de "Nosso Lar" foram copiados de uma colônia espiritual ainda mais antiga e aperfeiçoada. Qual é o nome dessa colônia exemplar citada por ele?',
    options: {
      A: "Alvorada Nova.",
      B: "Redenção Celeste.",
      C: "Estrela do Oriente.",
      D: "Cidade do Sol.",
      E: "Nova Jerusalém do Sul.",
    },
    correct_option: "A",
    explanation:
      'No Capítulo 11, Lísias explica que muitas realizações e modelos de trabalho de "Nosso Lar" foram inspirados na colônia "Alvorada Nova", uma das mais antigas e adiantadas da região.',
    reference: 'Nosso Lar — Cap. 11 ("Notícias do Plano")',
    active: true,
  },
  {
    code: 312,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 12 ("O Umbral"), Lísias oferece a André Luiz uma explicação detalhada sobre a natureza e a finalidade dessa região espiritual. Onde começa o Umbral e qual é a sua função na economia divina?',
    options: {
      A: "Começa no centro ígneo da Terra e destina-se ao suplício eterno e irremediável dos pecadores.",
      B: "Começa na própria crosta terrestre e funciona como zona de esgotamento de resíduos mentais, onde se queima a bagagem ilusória de quem não aproveitou a vida física.",
      C: "Localiza-se na órbita de Saturno e recebe apenas Espíritos que cometeram crimes hediondos de guerra.",
      D: "É uma região paradisíaca reservada ao repouso exclusivo dos sacerdotes e teólogos.",
      E: "É um plano criado pelos próprios Espíritos perversos sem o conhecimento da Providência Divina.",
    },
    correct_option: "B",
    explanation:
      "Lísias ensina que o Umbral começa na crosta terrestre, sendo a zona obscura de transição onde a alma esgota os resíduos mentais e queima as ilusões acumuladas pela incúria na vida carnal.",
    reference: 'Nosso Lar — Cap. 12 ("O Umbral")',
    active: true,
  },
  {
    code: 313,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 13 ("No Gabinete do Ministro"), André Luiz presencia Clarêncio atender uma senhora aflita que desejava retirar os dois filhos do Umbral, mas possuía apenas 304 bônus-hora após seis anos na colônia, pois recusara todos os serviços humildes para ficar nos Campos de Repouso. Que lição máxima Clarêncio lhe transmite?',
    options: {
      A: "Que basta chorar aos pés dos Ministros para obter isenção das leis divinas.",
      B: "Que os bônus-hora podem ser comprados com o ouro deixado em testamento na Terra.",
      C: "Que o trabalho e a humildade são as duas margens do caminho do auxílio, sem as quais ninguém adquire credenciais para socorrer os amados.",
      D: "Que as mães desencarnadas perdem o direito de interceder pelos filhos após cinco anos.",
      E: "Que apenas os Espíritos masculinos podem ingressar nas caravanas de socorro ao Umbral.",
    },
    correct_option: "C",
    explanation:
      'Clarêncio mostra àquela mãe que ela rejeitara a Vigilância, os Irmãos da Suportação, a Enfermagem dos Perturbados e as Pesquisas por achá-los penosos, concluindo: "O trabalho e a humildade são as duas margens do caminho do auxílio."',
    reference: 'Nosso Lar — Cap. 13 ("No Gabinete do Ministro")',
    active: true,
  },
  {
    code: 314,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 14 ("Elucidações de Clarêncio"), quando André Luiz pede trabalho como médico, Clarêncio explica-lhe que o diploma terrestre vale apenas como "ficha de ingresso" e revela um detalhe surpreendente sobre os 15 anos de clínica de André na Terra. Que detalhe é esse?',
    options: {
      A: "Que André jamais atendera um único paciente pobre durante toda a sua carreira médica.",
      B: "Que todas as cirurgias realizadas por André haviam resultado na morte imediata dos pacientes.",
      C: "Que André havia construído dez hospitais filantrópicos com recursos próprios na juventude.",
      D: "Que André concedera receituário gratuito a mais de 6.000 necessitados (muitas vezes por troça), mas apenas 15 deles lhe enviaram preces de gratidão ao perceberem que o benefício vinha de Jesus.",
      E: "Que o título de médico terrestre garantia automaticamente o cargo de Ministro da Regeneração.",
    },
    correct_option: "D",
    explanation:
      "Clarêncio revela que, em 15 anos de clínica, André dera receituário gratuito a mais de 6.000 pobres — embora quase sempre em tom de ironia —, e que 15 desses doentes humildes oraram por ele com sincera gratidão.",
    reference: 'Nosso Lar — Cap. 14 ("Elucidações de Clarêncio")',
    active: true,
  },
  {
    code: 315,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 15 ("A Visita Materna"), André Luiz recebe a emocionante visita de sua mãe desencarnada, que vinha de esferas mais altas onde trabalhava pelo reerguimento da família. Qual recomendação essencial ela deixa ao filho sobre o sofrimento e o trabalho?',
    options: {
      A: "Que ele exija imediatamente um posto de comando médico compatível com o sobrenome da família.",
      B: "Que ele abandone a colônia Nosso Lar e volte sozinho ao Umbral para buscar o pai.",
      C: "Que ele se isole em contemplação mística sem ter contato com os doentes das enfermarias.",
      D: "Que ele escreva cartas mediúnicas de reprovação severa contra a esposa Zélia.",
      E: "Que ele faça o enterro de todas as lamentações, abrace o trabalho anônimo e lembre que lágrimas e úlceras constituem bendito processo de purificação e extensão dos nossos melhores sentimentos.",
    },
    correct_option: "E",
    explanation:
      "A mãe de André Luiz exorta-o a sepultar toda queixa, aceitar o serviço humilde de preparação e compreender que as dores e chagas morais são instrumentos benditos para dilatar o amor puro.",
    reference: 'Nosso Lar — Cap. 15 ("A Visita Materna")',
    active: true,
  },
  {
    code: 316,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 16 ("Confidências"), a mãe de André Luiz revela-lhe a dolorosa situação espiritual de seu pai, Laerte, que desencarnara com aparência de piedade cristã. Onde se encontrava Laerte havia doze anos e como a mãe pede que André se refira às duas mulheres que o retinham?',
    options: {
      A: "Nas zonas tenebrosas do Umbral, preso a ligações clandestinas; e a mãe pede a André que nunca as chame de 'infelizes mulheres', mas sim de 'nossas irmãs doentes, ignorantes ou infelizes'.",
      B: "No Ministério da União Divina, atuando como instrutor; e a mãe pede que André o reverencie como santo.",
      C: "Já reencarnado como governante na Europa; e a mãe pede que André não interfira em sua política.",
      D: "No Bosque das Águas, trabalhando como jardineiro; e a mãe pede que André lhe leve flores.",
      E: "Nas Câmaras de Retificação, completamente curado; e a mãe pede que André condene suas antigas amantes.",
    },
    correct_option: "A",
    explanation:
      "Laerte permanecia há 12 anos nas sombras do Umbral, imantado a antigas ligações clandestinas; quando André chama aquelas companheiras de 'infelizes mulheres', sua mãe o corrige com amor: 'Diga: nossas irmãs doentes, ignorantes ou infelizes.'",
    reference: 'Nosso Lar — Cap. 16 ("Confidências")',
    active: true,
  },
  {
    code: 317,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 17 ("Em Casa de Lísias"), após receber de Clarêncio uma caderneta de um ano de observação nos Ministérios da Regeneração, Auxílio, Comunicação e Esclarecimento, André Luiz é acolhido fraternalmente no lar de Lísias. Quem reside nessa casa com o enfermeiro?',
    options: {
      A: "O Governador da colônia e seus doze assessores diretos.",
      B: "Sua bondosa mãe, Dona Laura, e suas duas irmãs jovens, Iolanda e Judite.",
      C: "O Ministro Genésio e a cooperadora Narcisa.",
      D: "Apenas Lísias, pois em Nosso Lar cada habitante é obrigado a morar sozinho.",
      E: "O assistente Henrique de Luna e trinta médicos recém-chegados da Terra.",
    },
    correct_option: "B",
    explanation:
      "André Luiz passa a residir como hóspede fraterno na residência de Lísias, compartilhada com a venerável mãe dele, Senhora Laura, e suas duas irmãs, Iolanda e Judite.",
    reference: 'Nosso Lar — Cap. 17 ("Em Casa de Lísias")',
    active: true,
  },
  {
    code: 318,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 18 ("Amor, Alimento das Almas"), durante o jantar em família com os visitantes Polidoro e Estácio, a Senhora Laura desenvolve uma luminosa explicação sobre a nutrição espiritual. Qual é, segundo ela, a base de todo o sistema de alimentação nas esferas superiores?',
    options: {
      A: "A ingestão diária de proteínas animais sintéticas produzidas em laboratório.",
      B: "O jejum perpétuo imposto por decreto dos Ministros do Esclarecimento.",
      C: "O amor divino, que constitui o pão sublime das almas e sustenta a permuta magnética entre os corações que se amam.",
      D: "O consumo exclusivo de ervas amargas colhidas nas fronteiras do Umbral.",
      E: "A absorção de vapores metálicos provenientes das oficinas mecânicas.",
    },
    correct_option: "C",
    explanation:
      "Dona Laura ensina que o amor é a base de todo o sistema de alimentação espiritual: quanto mais evolui a criatura, mais se nutre da permuta magnética de afeto, alegria e harmonia divina.",
    reference: 'Nosso Lar — Cap. 18 ("Amor, Alimento das Almas")',
    active: true,
  },
  {
    code: 319,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 19 ("A Jovem Desencarnada"), André Luiz conhece Eloísa, neta de Dona Laura, recém-chegada da Terra após desencarnar por tuberculose. Por que Eloísa vivia em pranto constante e rebeldia espiritual em "Nosso Lar"?',
    options: {
      A: "Porque fora proibida de estudar música no Ministério da Elevação.",
      B: "Porque desejava trabalhar imediatamente nas caravanas de socorro às trevas.",
      C: "Porque perdera todos os seus bônus-hora em jogos de azar na colônia.",
      D: "Porque não aceitava a morte física e revoltava-se com o fato de seu ex-noivo Arnaldo estar prestes a casar-se na Terra com sua melhor amiga, Maria da Luz.",
      E: "Porque sua avó Laura a obrigava a trabalhar dezesseis horas por dia na tecelagem.",
    },
    correct_option: "D",
    explanation:
      "Eloísa permanecia inconformada com a desencarnação precoce e consumia-se de ciúme ao saber que o ex-noivo Arnaldo esquecera suas promessas e ia desposar sua amiga íntima, Maria da Luz.",
    reference: 'Nosso Lar — Cap. 19 ("A Jovem Desencarnada")',
    active: true,
  },
  {
    code: 320,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 20 ("Noções de Lar"), a Senhora Laura utiliza uma bela imagem geométrica para explicar a harmonia conjugal e a organização doméstica em "Nosso Lar". Como ela define o lar e o regime de trabalho da mulher na colônia?',
    options: {
      A: "Como um círculo fechado onde a mulher fica dispensada de qualquer trabalho útil fora de casa.",
      B: "Como uma pirâmide de comando masculino onde a esposa não possui bônus-hora próprios.",
      C: "Como duas linhas paralelas que jamais se encontram durante a eternidade.",
      D: "Como um estabelecimento comercial cujos filhos pagam aluguel mensal aos pais.",
      E: "Como um ângulo reto (a reta vertical é o sentimento feminino de inspiração e a horizontal é o sentimento masculino de realização), cumprindo a mulher 48 horas semanais de serviço, com horas contadas em dobro quando acolhe crianças.",
    },
    correct_option: "E",
    explanation:
      "Dona Laura compara o lar a um ângulo reto formado pela inspiração feminina (vertical) e realização masculina (horizontal), explicando que a mulher trabalha 8 horas diárias (48 semanais) e recebe bônus em dobro quando assume a tutela maternal de crianças.",
    reference: 'Nosso Lar — Cap. 20 ("Noções de Lar")',
    active: true,
  },
  {
    code: 321,
    book: "nosso_lar",
    difficulty: "dificil",
    statement:
      'No Capítulo 21 ("Continuando a palestra"), Dona Laura explica a André Luiz quantos bônus-hora foram necessários para que seu esposo Ricardo adquirisse a propriedade do lar onde residem, e quantos anos de memória integral de vidas passadas ela já conseguira recuperar com o auxílio dos magnetizadores do Esclarecimento. Quais são esses números?',
    options: {
      A: "30.000 bônus-hora para adquirir um lar próprio e 300 anos de memória integral recuperada.",
      B: "100 bônus-hora para adquirir um lar próprio e 10.000 anos de memória integral recuperada.",
      C: "1.000.000 de bônus-hora para adquirir um lar próprio e apenas 5 anos de memória recuperada.",
      D: "500 bônus-hora para adquirir um lar próprio e 50 anos de memória integral recuperada.",
      E: "5.000 bônus-hora para adquirir um lar próprio e 1.500 anos de memória integral recuperada.",
    },
    correct_option: "A",
    explanation:
      "Dona Laura informa que a aquisição mais simples de um lar exige 30.000 bônus-hora (valor conquistado por seu esposo Ricardo) e que, com a ajuda do assistente Longobardo e dos magnetizadores do Esclarecimento, ela já recordava integralmente três séculos (300 anos) de seu passado.",
    reference: 'Nosso Lar — Cap. 21 ("Continuando a palestra")',
    active: true,
  },
  {
    code: 322,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 22 ("O Bônus-Hora"), Lísias detalha o funcionamento da moeda de serviço em "Nosso Lar". O que é o "bônus-hora" e o que acontece com o patrimônio de bônus-hora de um habitante quando ele retorna à Terra pela reencarnação?',
    options: {
      A: "É uma moeda de ouro físico que o reencarnante leva escondida no perispírito para enriquecer na Terra.",
      B: "É a ficha individual correspondente a uma hora de trabalho útil; ao reencarnar, as economias de bônus-hora revertem ao patrimônio comum da Governadoria, conservando a família o direito de herança sobre o lar.",
      C: "É um imposto cobrado dos doentes hospitalizados que nunca pode ser transferido nem utilizado.",
      D: "É um título bancário que rende juros compostos mesmo para quem se recusa a trabalhar.",
      E: "É um passe livre que permite visitar a crosta terrestre sem autorização dos Ministros.",
    },
    correct_option: "B",
    explanation:
      "O bônus-hora representa uma hora de serviço útil prestado à coletividade (podendo valer o dobro ou o triplo em tarefas sacrificiais); quando o servidor reencarna, seus bônus-hora retornam ao fundo comum da Governadoria, permanecendo o imóvel sob herança familiar.",
    reference: 'Nosso Lar — Cap. 22 ("O Bônus-Hora")',
    active: true,
  },
  {
    code: 323,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 23 ("Saber Ouvir"), Dona Laura mostra a André Luiz a inscrição luminosa "Saber ouvir" na sala de estar e explica por que o Governador proibira, havia dois séculos, o intercâmbio desordenado de habitantes de "Nosso Lar" com a crosta terrestre. Em qual máxima evangélica de Jesus se baseou essa proibição?',
    options: {
      A: '"Dai a César o que é de César e a Deus o que é de Deus."',
      B: '"Atire a primeira pedra aquele que estiver sem pecado."',
      C: '"Deixai aos mortos o cuidado de enterrar os seus mortos."',
      D: '"É mais fácil passar um camelo pelo fundo de uma agulha do que entrar um rico no Reino de Deus."',
      E: '"Não saiba a vossa mão esquerda o que faz a vossa mão direita."',
    },
    correct_option: "C",
    explanation:
      'Dona Laura explica que muitos recém-desencarnados iam à Terra sem preparo e voltavam perturbados; por isso, há dois séculos a Governadoria regulamentou as visitas baseando-se nas palavras do Cristo: "Deixai aos mortos o cuidado de enterrar os seus mortos."',
    reference: 'Nosso Lar — Cap. 23 ("Saber Ouvir")',
    active: true,
  },
  {
    code: 324,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 24 ("O Impressionante Apelo"), em agosto de 1939, a família de Lísias reúne-se em torno do aparelho receptor de televisão doméstica para ouvir uma transmissão extraordinária do Posto Dois da colônia "Moradia". Qual era o conteúdo urgente dessa mensagem?',
    options: {
      A: "O anúncio da descoberta de vida inteligente nas luas de Júpiter.",
      B: "A comemoração do encerramento definitivo de todos os conflitos armados na Terra.",
      C: "A convocação para um festival esportivo entre as colônias espirituais da América do Sul.",
      D: "O alerta grave sobre a iminência da Segunda Guerra Mundial na Europa, conclamando todas as colônias espirituais à prece, à serenidade e ao preparo de socorro.",
      E: "A notícia da desativação permanente do Ministério da Comunicação em Nosso Lar.",
    },
    correct_option: "D",
    explanation:
      'Em agosto de 1939, o Posto Dois da colônia "Moradia" transmite um apelo solene prevenindo os espíritos sobre a deflagração iminente da Segunda Guerra Mundial e convocando todos à oração e ao trabalho de assistência.',
    reference: 'Nosso Lar — Cap. 24 ("O Impressionante Apelo")',
    active: true,
  },
  {
    code: 325,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 25 ("Generoso Alvitre"), antes de André Luiz seguir com o amigo Rafael para o Ministério da Regeneração, a Senhora Laura aconselha-o a abandonar a simples postura de observador curioso e ingressar no serviço ativo. Quais exemplos sublimes de trabalho manual ela recorda do Evangelho?',
    options: {
      A: "Salomão em seu trono de ouro e Herodes na construção do templo.",
      B: "Pilatos lavando as mãos e Caifás presidindo o Sinédrio.",
      C: "Alexandre, o Grande, conquistando a Pérsia e Júlio César em Roma.",
      D: "Os fariseus disputando os primeiros assentos nas sinagogas.",
      E: "Jesus trabalhando na carpintaria em Nazaré e o apóstolo Paulo de Tarso exercendo o ofício de tecelão.",
    },
    correct_option: "E",
    explanation:
      "Para curar André do preconceito intelectual que desprezava os serviços humildes, Dona Laura lembra-lhe que o próprio Cristo santificou a carpintaria e que Paulo de Tarso, mesmo sendo doutor da Lei, sustentava-se como tecelão.",
    reference: 'Nosso Lar — Cap. 25 ("Generoso Alvitre")',
    active: true,
  },
  {
    code: 326,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 26 ("Novas Perspectivas"), André Luiz desiste de usar sua caderneta apenas para passear e pede trabalho humilde ao Ministro Genésio, no Ministério da Regeneração. Com qual sentença sábia Genésio o acolhe antes de encaminhá-lo às Câmaras de Retificação dirigidas por Tobias?',
    options: {
      A: '"Quando o servidor está pronto, o serviço aparece."',
      B: '"Somente os doutores da Terra podem tocar nos doentes espirituais."',
      C: '"Volte daqui a dez anos, quando tiver decorado todas as leis da colônia."',
      D: '"O trabalho braçal é castigo reservado aos criminosos irrecuperáveis."',
      E: '"Quem possui diploma universitário está dispensado da obediência."',
    },
    correct_option: "A",
    explanation:
      'Vendo que André Luiz finalmente vencera a vaidade profissional e se dispunha a servir como aprendiz nas Câmaras de Retificação, o Ministro Genésio pronuncia a célebre frase: "Quando o servidor está pronto, o serviço aparece."',
    reference: 'Nosso Lar — Cap. 26 ("Novas Perspectivas")',
    active: true,
  },
  {
    code: 327,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 27 ("O Trabalho, Enfim"), iniciando seu aprendizado nas Câmaras de Retificação ao lado da dedicada enfermeira Narcisa, André Luiz auxilia na limpeza de 32 doentes graves que expeliam substância negra e fétida após os passes. Quem eram esses enfermos descritos por Narcisa como "crentes negativos"?',
    options: {
      A: "Cientistas ateus que dedicaram a vida inteira ao combate contra a febre amarela.",
      B: "Crentes que na Terra aceitavam a fé religiosa apenas da boca para fora, exigindo o céu sem esforço próprio de renovação moral (os 'contrabandistas na vida eterna').",
      C: "Crianças recém-desencarnadas que ainda não haviam aprendido a falar.",
      D: "Servidores antigos do Ministério da Elevação fatigados pelo excesso de estudo.",
      E: "Indígenas silvícolas que desconheciam completamente os alfabetos europeus.",
    },
    correct_option: "B",
    explanation:
      "Narcisa explica que aqueles 32 enfermos eram 'crentes negativos' ou 'contrabandistas na vida eterna': religiosos nominais que supunham comprar o Céu com fórmulas exteriores, sem jamais combaterem o próprio egoísmo e a maldade.",
    reference: 'Nosso Lar — Cap. 27 ("O Trabalho, Enfim")',
    active: true,
  },
  {
    code: 328,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 28 ("Em Serviço"), enquanto aguardam uma caravana dos Samaritanos trazendo 29 irmãos do Umbral, André Luiz pergunta a Narcisa por que os recém-desencarnados não conseguem elevar-se imediatamente às colônias superiores. Que comparação da natureza Narcisa utiliza para explicar a lei de densidade fluídica?',
    options: {
      A: "A diferença entre o ouro puro e o chumbo derretido nas fornalhas.",
      B: "O contraste entre a baleia no oceano e o leão na savana africana.",
      C: "A comparação entre o avestruz (que tem asas, mas é pesado demais e só corre no solo) e a andorinha (leve e ágil, que corta os ares a grande altura).",
      D: "A relação entre o carvalho centenário e a gramínea rasteira do campo.",
      E: "A oposição entre o gelo das montanhas e o vapor das fontes termais.",
    },
    correct_option: "C",
    explanation:
      "Narcisa compara o Espírito sobrecarregado de paixões densas ao avestruz, que possui asas mas não consegue elevar-se do chão devido ao peso, ao passo que a alma desprendida assemelha-se à andorinha que voa livremente nas alturas.",
    reference: 'Nosso Lar — Cap. 28 ("Em Serviço")',
    active: true,
  },
  {
    code: 329,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 29 ("A Visão de Francisco"), André Luiz e Narcisa atendem o enfermo Francisco, que gritava aterrorizado sentindo-se devorado por vermes, embora seu corpo físico já estivesse enterrado na Terra. Qual era a causa dessa torturante fixação mental?',
    options: {
      A: "Uma maldição lançada por feiticeiros no momento de seu sepultamento.",
      B: "Um defeito nos aparelhos elétricos de climatização das Câmaras de Retificação.",
      C: "A ingestão acidental de água não magnetizada do Rio Azul.",
      D: "O apego excessivo ao corpo físico durante a vida terrena, fazendo com que ele continuasse mentalmente imantado ao próprio cadáver em decomposição no túmulo.",
      E: "Uma punição aplicada pelo Ministro Pádua por indisciplina hospitalar.",
    },
    correct_option: "D",
    explanation:
      "O paciente Francisco adorava de tal modo o próprio corpo carnal que, após a morte, foi visitar os próprios despojos no cemitério e fixou na mente a imagem dos vermes e da decomposição, sofrendo por autossugestão.",
    reference: 'Nosso Lar — Cap. 29 ("A Visão de Francisco")',
    active: true,
  },
  {
    code: 330,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 30 ("Herança e Eutanásia"), no Pavilhão 5 das Câmaras de Retificação, a jovem Paulina visita seu pai desencarnado, que se achava em terrível revolta contra o outro filho, o médico Dr. Edelberto. O que Edelberto fizera ao próprio pai no leito de morte?',
    options: {
      A: "Recusara-se a comparecer ao velório por estar viajando a lazer pela Europa.",
      B: "Doara toda a fortuna da família para um orfanato sem consultar os irmãos.",
      C: "Internara o pai em um hospital público de indigentes apesar de ser milionário.",
      D: "Queimara os diários e poemas que o pai escrevera ao longo da juventude.",
      E: "Aplicara-lhe uma injeção letal sob o pretexto de 'eutanásia' (morte suave), movido pela pressa ambiciosa de repartir a herança de um milhão e quinhentos mil cruzeiros.",
    },
    correct_option: "E",
    explanation:
      "O pai de Paulina e Edelberto denuncia em pranto que o próprio filho médico lhe abreviara a vida física aplicando a chamada 'eutanásia', interessado na partilha imediata da herança de 1 milhão e 500 mil cruzeiros.",
    reference: 'Nosso Lar — Cap. 30 ("Herança e Eutanásia")',
    active: true,
  },
  {
    code: 331,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 31 ("Vampiro"), na cancela divisória entre o Umbral e as Câmaras de Retificação, o sentinela Justino e o Vigilante-Chefe Irmão Paulo barram a entrada de uma mulher sombria que exigia ingresso imediato no paraíso por ter sido católica fervorosa. Quem era ela e o que representavam as 58 manchas pretas ao seu redor?',
    options: {
      A: "Uma ex-parteira e ginecologista diplomada que praticara 58 abortos criminosos e infanticídios a peso de ouro, trazendo no halo vital as 58 manchas escuras das criancinhas asfixiadas.",
      B: "Uma antiga rainha medieval que mandara incendiar 58 aldeias camponesas durante as cruzadas.",
      C: "Uma escritora materialista que publicara 58 livros negando a existência de Deus.",
      D: "Uma juíza de direito que condenara 58 réus inocentes à prisão perpétua por suborno.",
      E: "Uma comerciante avarenta que escondera 58 sacas de trigo durante uma grande seca.",
    },
    correct_option: "A",
    explanation:
      "Irmão Paulo desmascara a hipocrisia daquela mulher: ex-parteira diplomada em ginecologia, ela ganhara fortuna assassinando 58 recém-nascidos sob o pretexto de salvar a honra de famílias, carregando 58 manchas negras em sua aura sem demonstrar qualquer remorso.",
    reference: 'Nosso Lar — Cap. 31 ("Vampiro")',
    active: true,
  },
  {
    code: 332,
    book: "nosso_lar",
    difficulty: "dificil",
    statement:
      'No Capítulo 32 ("Notícias de Veneranda"), André Luiz encanta-se com os "salões verdes" de mobiliário vivo criados pela Ministra Veneranda. Segundo explica Tobias, quais características tornam Veneranda uma figura única em "Nosso Lar"?',
    options: {
      A: "Ela é a mais jovem habitante da colônia, tendo desencarnado aos doze anos de idade.",
      B: "Ela é a mais antiga servidora da colônia (mais de 200 anos de atividade), a única além do Governador que já viu Jesus face a face, e detentora da Medalha do Mérito de Serviço por 1 milhão de horas de trabalho útil.",
      C: "Ela foi a fundadora material da cidade do Rio de Janeiro no século XVI.",
      D: "Ela nunca precisou reencarnar na Terra, tendo evoluído exclusivamente nas estrelas Sírius e Vega.",
      E: "Ela acumula simultaneamente a chefia dos seis Ministérios de Nosso Lar.",
    },
    correct_option: "B",
    explanation:
      "Tobias revela que a Ministra Veneranda reside em Nosso Lar há mais de dois séculos, é a única entidade além do Governador que já contemplou o Cristo pessoalmente e recebeu das Fraternidades da Luz a Medalha do Mérito por um milhão de horas de serviço ao bem.",
    reference: 'Nosso Lar — Cap. 32 ("Notícias de Veneranda")',
    active: true,
  },
  {
    code: 333,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 33 ("Curiosas Observações"), André Luiz observa a chegada da caravana dos Samaritanos vinda do Umbral em seis grandes carros puxados por muares, escoltados por cães e por um bando de aves de grande porte chamadas "íbis viajores". Qual é a utilidade dessas aves nas expedições ao Umbral?',
    options: {
      A: "Transportar os doentes desacordados sobre o dorso durante o voo.",
      B: "Cantar melodias clássicas para adormecer os guardas das fronteiras.",
      C: "Auxiliar na limpeza atmosférica devorando as formas mentais odiosas e perversas que pairam nas zonas inferiores, além de anunciar a aproximação da chuva.",
      D: "Carregar mensagens escritas em pergaminho para os parentes encarnados.",
      E: "Fornecer penas luminosas para a confecção de túnicas ministeriais.",
    },
    correct_option: "C",
    explanation:
      "Tobias explica que os 'íbis viajores' são aves fidelíssimas que limpam a atmosfera espiritual das caravanas, absorvendo e destruindo formas-pensamento odiosas e pestilenciais do Umbral.",
    reference: 'Nosso Lar — Cap. 33 ("Curiosas Observações")',
    active: true,
  },
  {
    code: 334,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 34 ("Os Recém-Chegados do Umbral"), entre os 29 socorridos trazidos pelos Samaritanos, André Luiz atende uma senhora idosa que permanecera mais de cinquenta anos no Umbral clamando pelo "padre Amâncio". Qual fora a causa de sua desencarnação na Terra, em maio de 1888?',
    options: {
      A: "Ela fora uma escrava mártir que morrera perdoando seus algozes no pelourinho.",
      B: "Ela desencarnara em um naufrágio quando viajava para visitar o Vaticano.",
      C: "Ela fora uma professora rural que morrera de exaustão ensinando crianças órfãs.",
      D: "Ela fora uma cruel senhora de escravos que mandava cativos ao tronco enquanto pagava missas na igreja, e desencarnara de choque colérico ao saber da assinatura da Lei Áurea pela Princesa Isabel.",
      E: "Ela fora uma freira enclausurada que jamais saíra de seu convento em Minas Gerais.",
    },
    correct_option: "D",
    explanation:
      "Aquela dama orgulhosa julgava ter comprado o Céu com donativos ao padre Amâncio, mas tratava os escravos com ferocidade e tivera uma síncope fatal de revolta em maio de 1888 ao receber a notícia da abolição da escravatura.",
    reference: 'Nosso Lar — Cap. 34 ("Os Recém-Chegados do Umbral")',
    active: true,
  },
  {
    code: 335,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 35 ("Encontro Singular"), ao acolher os Samaritanos da caravana, André Luiz reconhece com emoção o irmão Silveira, antigo comerciante do Rio de Janeiro que fora levado à falência e à morte pela dureza implacável de Laerte (pai de André). Qual é a reação de Silveira quando André lhe pede perdão em nome do pai?',
    options: {
      A: "Silveira recusa o cumprimento de André e exige uma indenização de trinta mil bônus-hora.",
      B: "Silveira pede a Tobias que expulse André imediatamente das Câmaras de Retificação.",
      C: "Silveira revela que ainda planeja vingar-se de Laerte quando este reencarnar na Terra.",
      D: "Silveira finge não reconhecer André e retira-se em silêncio hostil para o Umbral.",
      E: "Silveira abraça André generosamente, afirma que nada tem a perdoar e declara que nossos adversários na Terra são, na verdade, benfeitores que nos libertam das ilusões transitórias da fortuna.",
    },
    correct_option: "E",
    explanation:
      "Demonstrando elevada espiritualidade, o samaritano Silveira acolhe André no coração, bendiz a falência que o despertou do egoísmo comercial e afirma que já solicitara permissão para ajudar a socorrer o próprio Laerte no Umbral.",
    reference: 'Nosso Lar — Cap. 35 ("Encontro Singular")',
    active: true,
  },
  {
    code: 336,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 36 ("O Sonho"), após receber bônus-hora dobrados por seu primeiro plantão dedicado nas Câmaras de Retificação, André Luiz adormece e, em desdobramento espiritual (sonho), viaja num barco até uma esfera superior onde reencontra sua mãe. Que ensinamento profundo ela lhe dá sobre o valor do tempo e do bônus-hora?',
    options: {
      A: "Que o bônus-hora serve apenas para comprar roupas luxuosas e banquetes nos jardins da colônia.",
      B: "Que a compensação exterior da hora pertence à administração humana ou espiritual, mas o conteúdo sagrado da hora pertence a Deus, valendo pela qualidade de amor e renúncia que nela depositamos.",
      C: "Que os Espíritos das esferas superiores não trabalham e vivem em repouso contemplativo eterno.",
      D: "Que André deveria recusar qualquer pagamento de bônus-hora para não ser taxado pela Governadoria.",
      E: "Que uma hora de sono nas Câmaras de Retificação vale mais do que dez horas de enfermagem.",
    },
    correct_option: "B",
    explanation:
      "A mãe de André ensina-lhe a diferença entre a remuneração administrativa (o bônus-hora) e a essência espiritual do serviço: o conteúdo íntimo de cada hora pertence a Deus e edifica a nossa própria alma.",
    reference: 'Nosso Lar — Cap. 36 ("O Sonho")',
    active: true,
  },
  {
    code: 337,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 37 ("A Preleção da Ministra"), a venerável Ministra Veneranda visita as Câmaras de Retificação e profere uma luminosa palestra aos servidores e enfermos recuperados. Qual é o tema central de sua preleção?',
    options: {
      A: "As regras de arquitetura gótica aplicadas aos edifícios da Governadoria.",
      B: "A história das navegações portuguesas no século XVI.",
      C: "O poder criador do pensamento como força viva e matéria plástica, e a responsabilidade de cada espírito como pai e nutridor das criações mentais que gera.",
      D: "A tabela de conversão financeira entre o bônus-hora e o cruzeiro terrestre.",
      E: "A classificação botânica das árvores frutíferas do Bosque das Águas.",
    },
    correct_option: "C",
    explanation:
      'Veneranda disserta magistralmente sobre a força viva do pensamento: "Pensar é criar", advertindo que cada mente vive na atmosfera das formas-pensamento que projeta e sustenta.',
    reference: 'Nosso Lar — Cap. 37 ("A Preleção da Ministra")',
    active: true,
  },
  {
    code: 338,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 38 ("O Caso Tobias"), André Luiz e Narcisa visitam a residência de Tobias e surpreendem-se ao ver que ele convive em perfeita harmonia e pureza fraterna com duas mulheres que foram suas esposas sucessivas na Terra. Quem são elas e qual é a situação de cada uma?',
    options: {
      A: "Clara e Priscila, ambas irmãs consanguíneas de André Luiz recém-saídas do Umbral.",
      B: "Iolanda e Judite, irmãs de Lísias que se casaram simultaneamente com Tobias.",
      C: "Zélia e Maria da Luz, que desencarnaram juntas num acidente no Rio de Janeiro.",
      D: "Hilda (sua primeira esposa e verdadeira alma afim) e Luciana (sua segunda esposa após a viuvez, acolhida como irmã querida e já noiva de outro espírito com quem reencarnará em São Paulo).",
      E: "Nemésia e Paulina, duas médicas do Ministério da Regeneração que disputam a herança de Tobias.",
    },
    correct_option: "D",
    explanation:
      "Quando Luciana desencarnou viúva, Hilda (primeira esposa e alma gêmea de Tobias) pediu ao marido que a recebessem no lar com amor fraterno até que Luciana se restabelecesse e preparasse seu novo consórcio reencarnatório.",
    reference: 'Nosso Lar — Cap. 38 ("O Caso Tobias")',
    active: true,
  },
  {
    code: 339,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 39 ("Ouvindo a Senhora Laura"), ao comentar o nobre exemplo de Hilda e Tobias, que venceram o ciúme humano pela compreensão espiritual, Dona Laura enuncia um preceito fundamental sobre a verdadeira caridade. Qual é esse preceito?',
    options: {
      A: "A caridade consiste apenas em dar esmolas materiais aos mendigos das estradas.",
      B: "O ciúme apaixonado é a prova mais elevada do amor espiritual entre as almas.",
      C: "Ninguém deve acolher no lar um antigo companheiro de lutas terrestres.",
      D: "A fraternidade só é possível entre espíritos que nunca conviveram na crosta da Terra.",
      E: '"Toda caridade, para ser divina, precisa apoiar-se na fraternidade", superando o egoísmo possessivo do amor puramente humano.',
    },
    correct_option: "E",
    explanation:
      'Dona Laura esclarece a André Luiz que o gesto de Hilda não foi mera tolerância social, mas amor fraternal legítimo, pois "toda caridade, para ser divina, precisa apoiar-se na fraternidade".',
    reference: 'Nosso Lar — Cap. 39 ("Ouvindo a Senhora Laura")',
    active: true,
  },
  {
    code: 340,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 40 ("Quem Semeia Colherá"), ao visitar o Pavilhão 7 (departamento feminino dirigido pela cooperadora Nemésia), André Luiz reconhece em lágrimas uma enferma recolhida do Umbral e pede para assumi-la como irmã do coração. Quem era essa mulher?',
    options: {
      A: "Elisa, antiga serva doméstica da casa dos pais de André, cuja mocidade e pureza ele próprio havia arruinado na juventude irresponsável.",
      B: "Sua tia paterna que lhe havia deixado uma grande biblioteca médica em herança.",
      C: "A diretora do colégio interno onde André estudara as primeiras letras.",
      D: "Uma antiga paciente milionária que lhe pagara o dobro pelos serviços cirúrgicos.",
      E: "A esposa do Dr. Henrique de Luna, que desencarnara durante uma epidemia.",
    },
    correct_option: "A",
    explanation:
      'No Capítulo "Quem Semeia Colherá", André Luiz depara-se com Elisa, a humilde empregada doméstica que ele seduzira e abandonara na mocidade, levando-a ao infortúnio; arrependido, compromete-se a ampará-la como irmã querida.',
    reference: 'Nosso Lar — Cap. 40 ("Quem Semeia Colherá")',
    active: true,
  },
  {
    code: 341,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 41 ("Convocados à Luta"), em setembro de 1939, os clarins de alerta dos espíritos vigilantes soam em "Nosso Lar" anunciando o início efetivo da Segunda Guerra Mundial (invasão da Polônia). Qual é a tônica dos pronunciamentos do Ministro Esperidião e do Governador aos habitantes da colônia?',
    options: {
      A: "Pânico generalizado e ordem para evacuar imediatamente a colônia rumo ao planeta Marte.",
      B: "Serenidade firme, proibição de comentários ociosos ou alarmistas e intensificação do trabalho, pois 'a aflição não constrói, a ansiedade não edifica'.",
      C: "Neutralidade indiferente, proibindo qualquer envio de enfermeiros para socorrer as vítimas da guerra.",
      D: "Formação de exércitos armados para destruir fisicamente os arsenais europeus.",
      E: "Suspensão de todas as atividades hospitalares para realização de debates políticos nas praças.",
    },
    correct_option: "B",
    explanation:
      'Diante da eclosão da Segunda Guerra Mundial, o Ministro Esperidião e o Governador exortam a colônia à paz ativa, à disciplina mental e ao trabalho redobrado, lembrando que "a aflição não constrói, a ansiedade não edifica".',
    reference: 'Nosso Lar — Cap. 41 ("Convocados à Luta")',
    active: true,
  },
  {
    code: 342,
    book: "nosso_lar",
    difficulty: "dificil",
    statement:
      'No Capítulo 42 ("A Palavra do Governador"), durante o culto dominical no Ministério da Regeneração para preparar os servidores contra o medo ("um dos piores inimigos da criatura"), o Governador lê uma passagem de Jesus no Evangelho de Mateus (24:6) e anuncia uma grande mobilização. Qual texto ele lê e quantos servidores são convocados para a defesa vibratória?',
    options: {
      A: 'Lê "Bem-aventurados os pobres de espírito" e convoca 500 médicos.',
      B: 'Lê "Amai os vossos inimigos" e convoca 1.000 músicos da Elevação.',
      C: 'Lê "E ouvireis de guerras e de rumores de guerras; olhai, não vos assusteis, porque é mister que isso tudo aconteça, mas ainda não é o fim" e convoca 30.000 servidores para a defesa nas fronteiras vibratórias.',
      D: 'Lê "Multiplicai os pães e os peixes" e convoca 100.000 agricultores.',
      E: 'Lê "Pai, perdoa-lhes porque não sabem o que fazem" e fecha as portas da colônia por dez anos.',
    },
    correct_option: "C",
    explanation:
      "O Governador medita sobre Mateus 24:6 ('olhai, não vos assusteis...') para imunizar os corações contra o medo e mobiliza 30.000 servidores de Nosso Lar para conter nas fronteiras vibratórias as nuvens de miasmas e espíritos dementados pela guerra.",
    reference: 'Nosso Lar — Cap. 42 ("A Palavra do Governador")',
    active: true,
  },
  {
    code: 343,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 43 ("Em Conversação"), o Ministro Benevenuto relata na casa de Laura suas impressões ao regressar de uma expedição de socorro aos campos de batalha na Polônia invadida. Como os soldados agressores recém-desencarnados reagiam à aproximação dos socorristas espirituais iluminados?',
    options: {
      A: "Ajoelhavam-se imediatamente pedindo batismo e perdão pelos ataques aéreos.",
      B: "Ignoravam os socorristas por completo, pois ficavam cegos e surdos durante cem anos.",
      C: "Ofereciam medalhas militares aos mensageiros em troca de armamentos novos.",
      D: "Fugiam espavoridos dos missionários da luz, gritando que eles eram 'fantasmas da cruz' que lhes queriam roubar a coragem guerreira.",
      E: "Confundiam os socorristas com generais de seu próprio exército e prestavam-lhes continência.",
    },
    correct_option: "D",
    explanation:
      "Benevenuto narra que muitos jovens militares fanatizados pelo ódio continuavam combatendo após a morte do corpo e fugiam aterrorizados dos mensageiros de Jesus, chamando-os de 'fantasmas da cruz'.",
    reference: 'Nosso Lar — Cap. 43 ("Em Conversação")',
    active: true,
  },
  {
    code: 344,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 44 ("As Trevas"), continuando a palestra no lar de Dona Laura, o Ministro Benevenuto estabelece a diferença entre o "Umbral" e as "Trevas" propriamente ditas. O que caracteriza as zonas chamadas de "Trevas"?',
    options: {
      A: "São jardins de repouso onde apenas falta a iluminação elétrica durante a noite.",
      B: "São exatamente a mesma região que o Bosque das Águas, mudando apenas o nome conforme a estação.",
      C: "São colônias educativas dirigidas pelos Ministros da Elevação para treinar astrônomos.",
      D: "São regiões desabitadas onde nenhum espírito jamais penetrou desde a criação da Terra.",
      E: "Enquanto o Umbral é zona de expurgo e transição, as Trevas são regiões abismais mais profundas onde se agrupam inteligências poderosas mas pervertidas, regidas pela lei de gravitação espiritual ('o abismo atrai o abismo').",
    },
    correct_option: "E",
    explanation:
      "Benevenuto esclarece que, abaixo do Umbral, estendem-se as Trevas — furnas e abismos onde espíritos rebeldes e calculistas organizam redutos de dominação e crueldade, atraídos pelo próprio peso específico de suas consciências culpadas.",
    reference: 'Nosso Lar — Cap. 44 ("As Trevas")',
    active: true,
  },
  {
    code: 345,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 45 ("No Campo da Música"), André Luiz realiza um passeio recreativo e educativo ao Campo da Música (no Ministério da Elevação) em companhia de Lísias, Polidoro, Estácio e Lascínia. Como se distribuem as harmonias musicais nesse vasto departamento?',
    options: {
      A: "Nas extremidades ouve-se a música alegre e ligeira que reconforta os espíritos comuns, enquanto no centro vibram as sublimes sinfonias da música universal e divina, que inspiram a alma às mais altas construções do Espírito.",
      B: "Apenas marchas fúnebres são permitidas em todo o território da colônia para manter a seriedade.",
      C: "A música é produzida exclusivamente por máquinas automáticas sem participação de artistas espirituais.",
      D: "É proibido o acesso de compositores terrestres desencarnados às escolas do Ministério da Elevação.",
      E: "O som é audível apenas para os 72 Ministros, permanecendo o restante do público em silêncio absoluto.",
    },
    correct_option: "A",
    explanation:
      "No Campo da Música, as melodias graduam-se conforme a evolução espiritual: nas bordas há músicas suaves e populares para recreação sadia, e, à medida que se avança para o centro, ouvem-se as harmonias universais e divinas.",
    reference: 'Nosso Lar — Cap. 45 ("No Campo da Música")',
    active: true,
  },
  {
    code: 346,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 46 ("Sacrifício de Mulher"), em setembro de 1940 (quando André completava um ano de trabalho), sua mãe visita-o para despedir-se antes de reencarnar na Terra. Qual é a missão sacrificial que ela vai cumprir no plano físico e que frase sábia ela pronuncia sobre o livre-arbítrio?',
    options: {
      A: "Vai reencarnar como rainha na Europa, dizendo que 'o destino é imposto por Deus sem apelação'.",
      B: "Vai reencarnar como esposa de seu antigo marido Laerte (já reencarnado) e receber como filhas as duas mulheres que o perseguiam nas sombras, ensinando que 'Deus criou o livre-arbítrio, nós criamos a fatalidade'.",
      C: "Vai reencarnar em um convento isolado no Tibete para nunca mais encontrar os familiares.",
      D: "Vai reencarnar como filha de André Luiz quando este voltar ao mundo corporal.",
      E: "Vai reencarnar apenas por três meses para cumprir uma promessa feita a Clarêncio.",
    },
    correct_option: "B",
    explanation:
      'Num gesto supremo de amor redentor, a mãe de André abre mão das alegrias das esferas superiores para reencarnar ao lado de Laerte e acolher como próprias filhas as duas antigas obsidiadoras dele, afirmando: "Deus criou o livre-arbítrio, nós criamos a fatalidade."',
    reference: 'Nosso Lar — Cap. 46 ("Sacrifício de Mulher")',
    active: true,
  },
  {
    code: 347,
    book: "nosso_lar",
    difficulty: "medio",
    statement:
      'No Capítulo 47 ("A Volta de Laura"), a Senhora Laura também anuncia seu retorno próximo à carne (dentro de dois dias) para reencontrar o esposo Ricardo já reencarnado no Brasil. Durante o jantar de despedida com o Ministro Genésio, quem chega recém-desencarnada da Terra, tendo atravessado o Umbral em poucas horas graças à sua fé e paciência nas dores?',
    options: {
      A: "Zélia, esposa terrestre de André Luiz.",
      B: "Maria da Luz, ex-amiga de Eloísa.",
      C: "Teresa, filha de Dona Laura e mãe de Eloísa, que desencarnara santificada pelo sofrimento resignado.",
      D: "A Princesa Isabel, antiga redentora dos escravos.",
      E: "A irmã Luísa, que concluíra sua tarefa no Rio de Janeiro.",
    },
    correct_option: "C",
    explanation:
      "Teresa, mãe de Eloísa e filha de Laura, desencarna após longo martírio doméstico suportado com prece e resignação; por isso, atravessa a zona umbralina em poucas horas e chega a Nosso Lar a tempo de abraçar a mãe antes que esta reencarne.",
    reference: 'Nosso Lar — Cap. 47 ("A Volta de Laura")',
    active: true,
  },
  {
    code: 348,
    book: "nosso_lar",
    difficulty: "dificil",
    statement:
      'No Capítulo 48 ("Culto Familiar"), às zero hora e quarenta minutos, Clarêncio preside a última reunião no lar de Laura antes de sua reencarnação, trazendo em desdobramento pelo sono o espírito de Ricardo (já reencarnado como menino na Terra), que fala de dentro de um globo cristalino isolante. Que pedido impressionante Ricardo faz aos amigos espirituais?',
    options: {
      A: "Que os Ministros o ajudem a ganhar na loteria para não precisar trabalhar na juventude.",
      B: "Que o retirem imediatamente do corpo físico porque ele se arrependera de reencarnar.",
      C: "Que enviem castigos severos contra os professores de sua escola terrestre.",
      D: '"Roguem ao Senhor para que eu nunca disponha de facilidades na Terra", pedindo trabalho e luta para não falir em sua missão redentora.',
      E: "Que apaguem para sempre o nome de sua família dos registros de Nosso Lar.",
    },
    correct_option: "D",
    explanation:
      'Consciente em espírito dos perigos da ociosidade e da tentação no mundo, Ricardo suplica de dentro do globo protetor: "Roguem ao Senhor para que eu nunca disponha de facilidades na Terra!..." Nesse mesmo culto, Clarêncio concede a André uma semana de licença para visitar sua família na crosta.',
    reference: 'Nosso Lar — Cap. 48 ("Culto Familiar")',
    active: true,
  },
  {
    code: 349,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 49 ("Regressando à Casa"), usando sua licença de uma semana, André Luiz vai ao Rio de Janeiro visitar seu antigo lar terrestre e encontra um quadro inesperado. O que acontecera com sua esposa Zélia e qual é a atitude de André diante da situação?',
    options: {
      A: "Zélia havia entrado para um mosteiro de carmelitas; André revolta-se e tenta demovê-la.",
      B: "Zélia havia mudado para a Europa com os filhos; André desiste de procurá-la e volta a Nosso Lar.",
      C: "Zélia já havia desencarnado e estava no Umbral; André permanece chorando no cemitério.",
      D: "Zélia enriquecera no comércio e expulsara os três filhos de casa; André passa a obsediá-la.",
      E: "Zélia casara-se novamente com um homem digno, o Dr. Ernesto, que agora jazia gravemente enfermo (com pneumonia e hipertensão) e cercado de sombras; vencendo o ciúme e o egoísmo, André decide ficar para socorrer o segundo marido de Zélia.",
    },
    correct_option: "E",
    explanation:
      "Ao encontrar Zélia casada com o bondoso Dr. Ernesto, que agonizava enfermo sob o assédio de entidades inferiores, André Luiz supera o choque emocional do egoísmo humano e resolve lutar pela recuperação daquele que amparava sua antiga companheira.",
    reference: 'Nosso Lar — Cap. 49 ("Regressando à Casa")',
    active: true,
  },
  {
    code: 350,
    book: "nosso_lar",
    difficulty: "facil",
    statement:
      'No Capítulo 50 ("Cidadão de \'Nosso Lar\'"), após orar pedindo socorro para salvar a vida do Dr. Ernesto, quem vem de "Nosso Lar" ajudar André Luiz, como eles curam o doente e que título André recebe de Clarêncio ao regressar à colônia?',
    options: {
      A: "A enfermeira Narcisa vem auxiliá-lo (extraindo com 8 servidores vegetais substância medicamentosa de mangueira e eucalipto para curar Ernesto); no regresso, André volita pela primeira vez e é proclamado por Clarêncio 'cidadão de Nosso Lar'.",
      B: "O Governador comparece pessoalmente, desencarna Ernesto e nomeia André Ministro da Regeneração.",
      C: "Lísias aplica eutanásia em Ernesto para aliviar o sofrimento de Zélia e leva André de aeróbus.",
      D: "Henrique de Luna opera Ernesto com bisturis físicos e concede a André o título de médico-chefe.",
      E: "A Ministra Veneranda transporta toda a família de Zélia em definitivo para o Bosque das Águas.",
    },
    correct_option: "A",
    explanation:
      "Narcisa atende à prece de André e, com o concurso de oito servidores do reino vegetal, manipula elementos curativos da mangueira e do eucalipto, restabelecendo o Dr. Ernesto e afastando os obsessores. Ao regressar feliz, André conquista a faculdade de volitar e recebe de Clarêncio o título de 'cidadão de Nosso Lar'.",
    reference: "Nosso Lar — Cap. 50 (\"Cidadão de 'Nosso Lar'\")",
    active: true,
  },
];
