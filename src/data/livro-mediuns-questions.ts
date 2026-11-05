export interface QuestionSeed {
  code: number;
  book: "livro_mediuns";
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

export const LIVRO_MEDIUNS_QUESTIONS: QuestionSeed[] = [
  // 1ª Parte: Noções Preliminares (201 - 208)
  {
    code: 201,
    book: "livro_mediuns",
    statement:
      "Em O Livro dos Médiuns (1ª Parte, Cap. I), qual é o ponto de partida lógico que Kardec estabelece para demonstrar a realidade dos fenômenos espíritas àqueles que duvidam?",
    option_a:
      "A exigência de crença dogmática cega nas escrituras antigas antes de qualquer observação.",
    option_b:
      "A realização obrigatória de prodígios físicos em locais públicos sob o controle exclusivo de mágicos de teatro.",
    option_c:
      "O raciocínio encadeado: a existência da alma, sua sobrevivência após a morte física e a possibilidade de comunicação entre o mundo visível e o invisível.",
    option_d:
      "A aceitação incondicional de que toda visão humana é prova infalível da presença de um Espírito.",
    option_e:
      "A submissão a fórmulas cabalísticas e rituais de consagração mediúnica herdados da antiguidade.",
    correct_option: "C",
    explanation:
      "Kardec demonstra que, admitida a existência da alma e sua sobrevivência à morte corporal, é racionalmente inadmissível que ela perca a faculdade de pensar e de se comunicar com os entes amados que ficaram na Terra.",
    reference: "1ª Parte, Cap. I, itens 1-3",
    difficulty: "facil",
    active: true,
  },
  {
    code: 202,
    book: "livro_mediuns",
    statement:
      'De acordo com o Cap. II da 1ª Parte de O Livro dos Médiuns, qual é a posição do Espiritismo a respeito do "maravilhoso" e do "sobrenatural"?',
    option_a:
      "O Espiritismo fundamenta sua doutrina na crença em milagres que revogam as leis naturais eternas de Deus.",
    option_b:
      "O Espiritismo sustenta que os médiuns possuem poderes mágicos excepcionais que violam a física universal.",
    option_c:
      "O Espiritismo aceita a intervenção do Diabo e forças ocultas fora do alcance da razão humana.",
    option_d:
      "O Espiritismo considera que apenas os fenômenos de levitação são puramente sobrenaturais e inexplicáveis pela ciência.",
    option_e:
      "O Espiritismo demonstra que todos os fenômenos espíritas decorrem de leis naturais imutáveis, afastando o caráter miraculoso ou sobrenatural.",
    correct_option: "E",
    explanation:
      "O Espiritismo não admite milagres ou derrogações das leis da Natureza; as manifestações espíritas apoiam-se em leis naturais até então desconhecidas, retirando delas qualquer roupagem mística ou sobrenatural.",
    reference: "1ª Parte, Cap. II, itens 15-18",
    difficulty: "facil",
    active: true,
  },
  {
    code: 203,
    book: "livro_mediuns",
    statement:
      "No Cap. III da 1ª Parte (Do Método), por que os fenômenos mediúnicos não podem ser produzidos à vontade dos experimentadores nem submetidos a desafios públicos céticos?",
    option_a:
      "Porque os Espíritos são inteligências livres que recusam servir de joguete à curiosidade e não obedecem a caprichos humanos.",
    option_b:
      "Porque os médiuns perdem suas faculdades sempre que são observados por mais de duas pessoas.",
    option_c:
      "Porque a eletricidade da atmosfera diurna impede completamente qualquer aproximação fluídica espiritual.",
    option_d:
      "Porque as leis humanas proíbem terminantemente qualquer ensaio científico de ectoplasmia e tiptologia.",
    option_e:
      "Porque os bons Espíritos só operam quando há pagamento financeiro adiantado aos operadores encarnados.",
    correct_option: "A",
    explanation:
      "Os Espíritos não são forças cegas da matéria manipuláveis em laboratório sob comando; são consciências dotadas de vontade própria que comparecem quando acham conveniente e útil, nunca para satisfazer vaidades ou desafios.",
    reference: "1ª Parte, Cap. III, itens 20-22",
    difficulty: "medio",
    active: true,
  },
  {
    code: 204,
    book: "livro_mediuns",
    statement:
      'No Cap. III da 1ª Parte, Kardec classifica os adeptos do Espiritismo em categorias. Qual categoria representa os "espíritas-cristãos" ou "moralistas"?',
    option_a:
      "Aqueles que buscam unicamente o aspecto das manifestações físicas e curiosidades fenomênicas.",
    option_b:
      "Aqueles que apenas admiram a filosofia e a lógica doutrinária, sem mudar sua conduta individual.",
    option_c: "Aqueles que acreditam que a mediunidade dispensa a prática da caridade e do perdão.",
    option_d:
      "Aqueles que não se limitam a admirar a moral espírita, mas a praticam e se esforçam constantemente para vencer suas más inclinações.",
    option_e:
      "Aqueles que exigem ver prodígios constantes para manterem sua fé nos ensinamentos dos Espíritos.",
    correct_option: "D",
    explanation:
      "Os espíritas verdadeiros ou cristãos-espíritas são aqueles que assimilam a essência moral do Espiritismo e realizam a sua reforma íntima, praticando a caridade, a humildade e a benevolência cristã.",
    reference: "1ª Parte, Cap. III, item 28",
    difficulty: "facil",
    active: true,
  },
  {
    code: 205,
    book: "livro_mediuns",
    statement:
      'No Cap. IV da 1ª Parte (Dos Sistemas), como Kardec refuta o "sistema do reflexo" ou da alma coletiva, que pretendia que as mensagens fossem apenas o reflexo do pensamento dos presentes?',
    option_a:
      "Argumentando que o pensamento humano é incapaz de emitir qualquer tipo de onda mental ou fluido.",
    option_b:
      "Provando que muitas comunicações expressam ideias totalmente contrárias às opiniões e convicções de todos os membros presentes na reunião.",
    option_c:
      "Mostrando que nenhuma comunicação escrita possui valor sem a confirmação de aparelhos mecânicos de laboratório.",
    option_d:
      "Exigindo que os médiuns fiquem amordaçados e vendados em câmaras hermeticamente isoladas.",
    option_e: "Declarando que os médiuns não pensam durante o processo da escrita automática.",
    correct_option: "B",
    explanation:
      "Se a comunicação fosse mero reflexo da mente dos presentes, ela jamais sustentaria teses opostas, revelaria fatos totalmente ignorados por todos ou combateria com veemência os preconceitos do próprio grupo ali reunido.",
    reference: "1ª Parte, Cap. IV, item 43",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 206,
    book: "livro_mediuns",
    statement:
      "Como Kardec rebate o sistema da alucinação coletiva no Cap. IV da 1ª Parte para explicar as manifestações espíritas?",
    option_a:
      "Demonstra que a alucinação só ocorre durante o sono profundo de indivíduos hipnotizados.",
    option_b: "Afirma que médiuns videntes nunca se enganam sobre a realidade das formas visíveis.",
    option_c:
      "Aponta que a alucinação não deixa vestígios materiais tangíveis, ao passo que os fenômenos espíritas produzem efeitos físicos duradouros, como escritas e deslocamentos de objetos.",
    option_d:
      "Sustenta que a alucinação é uma patologia restrita exclusivamente aos céticos e materialistas.",
    option_e:
      "Explica que a alucinação coletiva nunca foi descrita na história da medicina clássica.",
    correct_option: "C",
    explanation:
      "Uma alucinação pode impressionar a imaginação de um indivíduo, mas não quebra móveis, não escreve páginas reais de próprio punho nem levita objetos pesados diante de testemunhas sóbrias e conscientes.",
    reference: "1ª Parte, Cap. IV, item 39",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 207,
    book: "livro_mediuns",
    statement:
      "No Cap. IV da 1ª Parte, o sistema que atribui todas as comunicações a uma única entidade maligna (o demônio ou espírito das trevas) é refutado por Kardec principalmente porque:",
    option_a:
      "Os demônios não possuem inteligência suficiente para se comunicar por via mediúnica.",
    option_b:
      "O Espiritismo nega a existência do plano espiritual inferior e de Espíritos imperfeitos.",
    option_c: "Os fenômenos espíritas ocorrem apenas sob a bênção de rituais clericais solenes.",
    option_d:
      "A moral ensinada pelos Espíritos superiores é de uma pureza sublime, convidando à caridade, ao amor a Deus e ao bem, o que seria absurdo para um demônio interessado no mal.",
    option_e:
      "Nenhuma entidade espiritual tem permissão de emitir mensagens aos homens encarnados.",
    correct_option: "D",
    explanation:
      "Kardec recorda as palavras do Evangelho: 'Se Satanás expulsa a Satanás, está dividido contra si mesmo'. Uma entidade do mal jamais pregaria a renúncia ao orgulho, o amor aos inimigos e o perdão sincero.",
    reference: "1ª Parte, Cap. IV, itens 47-48",
    difficulty: "medio",
    active: true,
  },
  {
    code: 208,
    book: "livro_mediuns",
    statement:
      "Na introdução e noções preliminares de O Livro dos Médiuns, qual é o conceito fundamental de perispírito apresentado por Allan Kardec?",
    option_a:
      "O envoltório semimaterial da alma, intermediário entre o Espírito e o corpo físico, composto de fluido cósmico condensado.",
    option_b:
      "Uma centelha puramente imaterial desprovida de qualquer envoltório ou ligação com a matéria.",
    option_c:
      "Um órgão anatômico visível ao microscópio que desaparece completamente logo após o nascimento.",
    option_d:
      "Um corpo astral eterno e fixo que impede a alma de evoluir para mundos mais adiantados.",
    option_e:
      "O conjunto dos pensamentos cerebrais conscientes gerados pelas sinapses nervosas do encarnado.",
    correct_option: "A",
    explanation:
      "O perispírito é o liame que une a alma ao corpo carnal durante a encarnação; após a desencarnação, serve de envoltório fluídico permanente ao Espírito, permitindo-lhe atuar sobre a matéria.",
    reference: "1ª Parte, Cap. I, item 3 / 2ª Parte, Cap. I",
    difficulty: "facil",
    active: true,
  },

  // 2ª Parte: Manifestações Físicas e Efeitos Mecânicos (209 - 218)
  {
    code: 209,
    book: "livro_mediuns",
    statement:
      "Na 2ª Parte, Cap. I (Ação dos Espíritos sobre a Matéria), como o Espírito consegue agir sobre a matéria inerte e movimentar objetos corpóreos?",
    option_a:
      "Modificando mecanicamente as leis de gravitação por meio de encantamentos sonoros proferidos pelo médium.",
    option_b:
      "Utilizando cordas magnéticas microscópicas invisíveis que ligam o cérebro do médium ao centro do objeto.",
    option_c:
      "Transformando temporariamente sua alma em matéria densa equivalente ao peso do objeto deslocado.",
    option_d:
      "Invocando forças angélicas superiores que suspendem a física quântica a pedido dos assistentes.",
    option_e:
      "Combinando uma porção do fluido cósmico universal assimilado pelo seu perispírito com o fluido animalizado próprio do médium.",
    correct_option: "E",
    explanation:
      "O Espírito combina o seu próprio fluido periespiritual com o fluido animalizado cedido pelo médium de efeitos físicos, saturando o corpo inerte de modo a dar-lhe uma vida factícia que permite o movimento.",
    reference: "2ª Parte, Cap. I, itens 58-59",
    difficulty: "medio",
    active: true,
  },
  {
    code: 210,
    book: "livro_mediuns",
    statement:
      'Em O Livro dos Médiuns (2ª Parte, Cap. II e IV), qual foi a constatação definitiva que provou que o fenômeno das "mesas girantes" não era fruto de mera eletricidade ou magnetismo cego?',
    option_a:
      "O fato de que as mesas eram sempre de madeira nobre e pesada, como mogno ou carvalho.",
    option_b:
      "A alteração constante da temperatura ambiente e a produção de faíscas elétricas azuis.",
    option_c:
      "A constatação de respostas inteligentes, respostas a perguntas mentais e manifestação de vontade própria e coerente.",
    option_d: "A impossibilidade física de mover mesas redondas quando apoiadas em tapetes de lã.",
    option_e:
      "O fato de que o fenômeno só ocorria na presença de magnetizadores profissionais diplomados.",
    correct_option: "C",
    explanation:
      "Todo efeito inteligente deve ter uma causa inteligente. Quando as mesas começaram a responder com pancadas a perguntas complexas, comprovou-se a intervenção de inteligências ocultas independentes da física cega.",
    reference: "2ª Parte, Cap. II, item 60 / Cap. III, item 65",
    difficulty: "facil",
    active: true,
  },
  {
    code: 211,
    book: "livro_mediuns",
    statement:
      "De acordo com a teoria das manifestações físicas (2ª Parte, Cap. IV), o que ocorre com o peso de uma mesa durante o fenômeno de levitação ou sustentação no ar?",
    option_a:
      "A mesa não sofre qualquer alteração, sendo erguida por músculos físicos invisíveis do médium sonâmbulo.",
    option_b:
      "O peso é modificado pela saturação fluídica dos corpos, podendo o Espírito diminuir a gravidade aparente ou aumentá-la sensivelmente.",
    option_c:
      "O ar ambiente sob a mesa é transformado em vácuo absoluto, empurrando o móvel para o teto.",
    option_d:
      "A massa atômica da mesa é destruída e depois reconstituída milagrosamente ao tocar o chão.",
    option_e:
      "A gravidade da Terra é cancelada em todo o cômodo onde os assistentes se encontram sentados.",
    correct_option: "B",
    explanation:
      "Pela impregnação fluídica, o Espírito altera a densidade aparente do corpo material, podendo torná-lo mais leve do que o ar (fazendo-o levitar) ou tão pesado que homens robustos não consigam erguê-lo do solo.",
    reference: "2ª Parte, Cap. IV, itens 72-78",
    difficulty: "medio",
    active: true,
  },
  {
    code: 212,
    book: "livro_mediuns",
    statement:
      "No Cap. V da 2ª Parte (Manifestações Físicas Espontâneas), o que Kardec esclarece sobre os ruídos noturnos, perturbações e arremesso de objetos em certas casas?",
    option_a:
      "São causados por Espíritos inferiores ou perturbadores, utilizando quase sempre a força fluídica involuntária de alguém presente com aptidão mediúnica.",
    option_b:
      "São provocados exclusivamente por demônios condenados ao fogo eterno que não podem ser afastados.",
    option_c:
      "Devem-se unicamente a ilusões de ótica e barulhos causados por roedores ou correntes de ar canalizadas.",
    option_d:
      "Representam a vingança irrevogável da alma de antigos proprietários contra qualquer habitante vivo.",
    option_e:
      "Cessam imediatamente se forem jogados amuletos bentos e sal grosso nas quatro extremidades do edifício.",
    correct_option: "A",
    explanation:
      "Manifestações espontâneas de barulhos e arremessos exigem a presença de uma pessoa com forte potencial mediúnico de efeitos físicos inconsciente (frequentemente crianças ou jovens), explorada por Espíritos levianos.",
    reference: "2ª Parte, Cap. V, itens 82-99",
    difficulty: "medio",
    active: true,
  },
  {
    code: 213,
    book: "livro_mediuns",
    statement:
      "Em relação ao fenômeno do transporte de objetos fechados (aportes), tratado no Cap. V da 2ª Parte, qual Espírito apresenta uma detalhada dissertação elucidativa sobre o processo fluídico?",
    option_a: "Santo Agostinho.",
    option_b: "São Luís.",
    option_c: "Erasto.",
    option_d: "Sócrates.",
    option_e: "Fénelon.",
    correct_option: "C",
    explanation:
      "Erasto, discípulo de São Paulo, assina no item 98 do Capítulo V uma das mais célebres instruções teóricas sobre os fenômenos de transporte e desagregação molecular dos corpos trazidos do exterior.",
    reference: "2ª Parte, Cap. V, item 98",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 214,
    book: "livro_mediuns",
    statement:
      "Segundo a dissertação de Erasto sobre os aportes e transportes (2ª Parte, Cap. V), como um objeto material pode penetrar em um recinto hermeticamente fechado?",
    option_a:
      "O Espírito abre uma fenda invisível na parede, destruindo os tijolos e rebocando-os em fração de segundo.",
    option_b:
      "O médium é teletransportado para fora do cômodo para buscar o objeto com suas próprias mãos.",
    option_c:
      "O fenômeno é puramente ilusório e hipnótico, não havendo objeto real transportado para o recinto.",
    option_d:
      "O objeto é envolvido pelo fluido espiritual e sofre uma desagregação ou alteração molecular fluídica temporária que lhe permite atravessar a matéria, sendo reconstituído a seguir.",
    option_e:
      "Os átomos do ar expandem-se gerando um campo eletromagnético antigravitacional permanente.",
    correct_option: "D",
    explanation:
      "Erasto explica que o Espírito envolve o objeto em seu próprio fluido, tornando os elementos constitutivos do objeto temporariamente sutis e desunidos, capazes de passar pelos interstícios da matéria sólida.",
    reference: "2ª Parte, Cap. V, item 98",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 215,
    book: "livro_mediuns",
    statement:
      "No Cap. VI da 2ª Parte (Manifestações Visuais), qual é a explicação de Kardec para o mecanismo da visão espiritual nos médiuns videntes?",
    option_a:
      "Ocorre pela retina do olho físico, que se dilata extraordinariamente para captar a luz ultravioleta.",
    option_b:
      "Dá-se por efeito de uma ilusão reflexa gerada pela ingestão de certas substâncias vegetais.",
    option_c:
      "Resulta de uma transmissão telepática que afeta exclusivamente o nervo olfativo do médium.",
    option_d:
      "É uma faculdade que atua apenas quando o médium está em estado de morte aparente ou coma.",
    option_e:
      "Não se dá pelos olhos materiais, mas pela própria alma ou perispírito do vidente, razão pela qual se pode ver tanto com os olhos abertos quanto cerrados.",
    correct_option: "E",
    explanation:
      "A vidência mediúnica não é uma visão puramente ótica retiniana; é uma faculdade da alma que enxerga através de sua própria sensibilidade periespiritual, permitindo ver inclusive no escuro ou de olhos vendados.",
    reference: "2ª Parte, Cap. VI, itens 100-104",
    difficulty: "medio",
    active: true,
  },
  {
    code: 216,
    book: "livro_mediuns",
    statement:
      'No Cap. VII da 2ª Parte, Kardec estuda a bicorporeidade e a transfiguração. O que caracteriza a "bicorporeidade"?',
    option_a: "A existência simultânea de duas almas distintas habitando um único feto biológico.",
    option_b:
      "O desdobramento em que o Espírito de um vivo se emancipa temporariamente do corpo físico em repouso e adquire visibilidade e tangibilidade aparente em outro local.",
    option_c: "A fusão definitiva de dois corpos materiais por meio de magnetização prolongada.",
    option_d: "O fenômeno pelo qual uma pessoa troca de corpo carnal permanentemente com outra.",
    option_e: "A capacidade de clonar o organismo biológico através do poder puramente mental.",
    correct_option: "B",
    explanation:
      "Na bicorporeidade, o corpo físico da pessoa permanece adormecido ou em êxtase em um lugar, enquanto seu perispírito se desloca a distâncias consideráveis e condensa fluidos a ponto de se tornar visível e palpável.",
    reference: "2ª Parte, Cap. VII, itens 114-119",
    difficulty: "facil",
    active: true,
  },
  {
    code: 217,
    book: "livro_mediuns",
    statement:
      "Qual caso célebre da história da Igreja Católica é citado por Kardec no Cap. VII da 2ª Parte para exemplificar o fenômeno da bicorporeidade de um vivo?",
    option_a:
      "O desdobramento de Santo Afonso de Ligório, que foi visto ao lado do Papa Clemente XIV em Roma enquanto seu corpo permanecia em êxtase em Arienzo.",
    option_b: "A transfiguração de Moisés no Monte Sinai diante dos anciãos de Israel.",
    option_c: "O estigma de São Francisco de Assis recebido nas montanhas de Alverne.",
    option_d: "A oração de Santo Agostinho em Hipona diante das invasões dos vândalos.",
    option_e: "A aparição de Joana d'Arc diante do delfim da França em Chinon.",
    correct_option: "A",
    explanation:
      "Em 1774, Santo Afonso de Ligório entrou em êxtase em Arienzo e ao mesmo tempo foi visto assistindo espiritualmente os últimos momentos do Papa Clemente XIV em Roma, a quatro dias de viagem.",
    reference: "2ª Parte, Cap. VII, item 119",
    difficulty: "medio",
    active: true,
  },
  {
    code: 218,
    book: "livro_mediuns",
    statement:
      "No Cap. VIII da 2ª Parte (Laboratório do Mundo Invisível), como os Espíritos confeccionam as roupas, joias e objetos com que se apresentam nas aparições tangíveis?",
    option_a:
      "Retirando peças reais de guarda-roupas terrestres e devolvendo-as sem que os donos percebam.",
    option_b: "Comprando essências etéreas no comércio espiritual de planetas vizinhos.",
    option_c:
      "Agindo pela vontade e pelo pensamento sobre o fluido cósmico universal, condensando-o temporariamente nas formas e cores desejadas.",
    option_d:
      "Tecendo fios de seda espiritual através de maquinários complexos existentes na erraticidade.",
    option_e:
      "Utilizando a imaginação passiva do vidente para criar uma ilusão ótica sem substância fluídica.",
    correct_option: "C",
    explanation:
      "O pensamento e a vontade do Espírito atuam sobre o fluido cósmico universal como os químicos atuam sobre os reagentes, criando temporariamente vestuários, armas ou objetos que se desvanecem com a dispersão da vontade.",
    reference: "2ª Parte, Cap. VIII, itens 126-130",
    difficulty: "facil",
    active: true,
  },

  // Comunicação, Tipos de Mediunidade e Papel do Médium (219 - 230)
  {
    code: 219,
    book: "livro_mediuns",
    statement:
      'Ainda no Cap. VIII da 2ª Parte, o que é um "agênere" na terminologia espírita adotada por Allan Kardec?',
    option_a:
      "Um médium curador que rejeita qualquer prece ou invocação religiosa em suas práticas.",
    option_b: "Um Espírito puro que nunca necessitou de nenhuma encarnação no plano material.",
    option_c: "Uma classe de demônio aprisionado perpetuamente em cavernas e florestas desertas.",
    option_d:
      "Uma variedade de aparição tangível em que o Espírito toma uma forma temporariamente viva e carnal a ponto de parecer um ser humano normal, podendo conversar e tocar as pessoas.",
    option_e:
      "Um indivíduo que perdeu completamente o perispírito devido a crimes cometidos na Terra.",
    correct_option: "D",
    explanation:
      "Agênere é o estado de um Espírito que, momentaneamente revestido de matéria tangível, apresenta todas as aparências de um ser humano vivo, participando da vida comum sem que se suspeite de sua verdadeira natureza.",
    reference: "2ª Parte, Cap. VIII, item 125",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 220,
    book: "livro_mediuns",
    statement:
      "No Cap. IX da 2ª Parte (Lugares Assombrados), qual é o ensinamento dos Espíritos a respeito da fixação de certas almas em determinados castelos ou casas?",
    option_a:
      "Os Espíritos ficam aprisionados por feitiços e correntes mágicas enterradas nos alicerces das construções.",
    option_b:
      "Os Espíritos superiores escolhem locais históricos para punir os descendentes de seus antigos inimigos.",
    option_c:
      "Toda casa velha desabitada é obrigatoriamente habitada por falanges de demônios guardiães de riquezas.",
    option_d:
      "O apego físico do Espírito dura no máximo quarenta dias após o sepultamento do corpo biológico.",
    option_e:
      "Espíritos apegados à matéria ou que cometeram ou sofreram dramas no local permanecem retidos pela afinidade fluídica, lembranças ou remorsos, até serem esclarecidos e perdoados.",
    correct_option: "E",
    explanation:
      "Não são as pedras ou paredes que atraem os Espíritos, mas as recordações morais de afeições ou crimes ali ocorridos. Eles deixam o local quando encontram orações, esclarecimento e desapego às paixões terrestres.",
    reference: "2ª Parte, Cap. IX, itens 132-138",
    difficulty: "facil",
    active: true,
  },
  {
    code: 221,
    book: "livro_mediuns",
    statement:
      "No Cap. X da 2ª Parte, Kardec divide as comunicações espíritas quanto à sua natureza moral e intelectual em quatro categorias. Quais são elas?",
    option_a: "Angélicas, demoníacas, proféticas e humanas.",
    option_b: "Grosseiras, frívolas, graves e instrutivas.",
    option_c: "Místicas, científicas, poéticas e comerciais.",
    option_d: "Teosóficas, ocultas, populares e dogmáticas.",
    option_e: "Verbais, escritas, impressas e intuitivas.",
    correct_option: "B",
    explanation:
      "Kardec classifica as mensagens segundo a escala espírita: grosseiras (chocantes/indecentes), frívolas (levianas e zombeteiras), graves (sérias, mas nem sempre verdadeiras) e instrutivas (sólidas, profundas e morais).",
    reference: "2ª Parte, Cap. X, itens 133-137",
    difficulty: "facil",
    active: true,
  },
  {
    code: 222,
    book: "livro_mediuns",
    statement:
      'De acordo com o Cap. XI da 2ª Parte, qual a distinção correta entre "sematologia" e "tiptologia"?',
    option_a:
      "Sematologia é a linguagem dos sinais e movimentos dos corpos; tiptologia é a linguagem por pancadas ou batidas num objeto.",
    option_b:
      "Sematologia é a comunicação pela voz direta; tiptologia é a escrita com lápis em pranchetas.",
    option_c: "Sematologia é a visão dos fluidos; tiptologia é o canto mediúnico inspirado.",
    option_d:
      "Sematologia refere-se aos desenhos de médiuns pintores; tiptologia designa a cura pelas mãos.",
    option_e:
      "Ambas são sinônimos perfeitos que designam exclusivamente a escrita psicográfica no papel.",
    correct_option: "A",
    explanation:
      "Sematologia é a comunicação por sinais e movimentos (uma mesa que se inclina para saudar ou negar algo); tiptologia é a comunicação através de golpes e batidas convencionais que indicam letras e palavras.",
    reference: "2ª Parte, Cap. XI, itens 139-144",
    difficulty: "medio",
    active: true,
  },
  {
    code: 223,
    book: "livro_mediuns",
    statement: 'No Cap. XII da 2ª Parte, o que define especificamente a "pneumatografia"?',
    option_a:
      "A transmissão do pensamento do Espírito através de cabos telegráficos e instrumentos de cobre.",
    option_b: "O som de vozes ressoando no ar sem intervenção de cordas vocais humanas.",
    option_c:
      "A escrita obtida diretamente sem o concurso da mão do médium nem de um instrumento empunhado por encarnado.",
    option_d:
      "A respiração cadenciada exigida dos médiuns antes de iniciarem o trabalho psicográfico.",
    option_e:
      "A escrita mecânica rápida obtida exclusivamente sob transe hipnótico induzido por terceiros.",
    correct_option: "C",
    explanation:
      "Pneumatografia (do grego pneuma, ar/espírito, e graphein, escrever) é a escrita direta deixada sobre o papel ou ardósia sem que nenhuma pessoa toque no lápis ou utilize a própria mão.",
    reference: "2ª Parte, Cap. XII, itens 146-149",
    difficulty: "facil",
    active: true,
  },
  {
    code: 224,
    book: "livro_mediuns",
    statement:
      'Qual a diferença essencial entre "pneumatofonia" e "psicofonia" apresentada em O Livro dos Médiuns (Cap. XII e XIV)?',
    option_a:
      "Pneumatofonia é a audição interna do médium; psicofonia é o grito histérico de espíritos zombeteiros.",
    option_b:
      "Pneumatofonia é uma ilusão auditiva subjetiva; psicofonia é a gravação sonora em fita magnética.",
    option_c:
      "Pneumatofonia só ocorre em cemitérios; psicofonia só acontece em recintos fechados e escuros.",
    option_d:
      "Na pneumatofonia a voz ressoa no ar ambiente sem utilização do aparelho vocal humano; na psicofonia o Espírito se utiliza da laringe e dos órgãos vocais do próprio médium.",
    option_e:
      "Pneumatofonia exige transe sonambúlico profundo; psicofonia ocorre com o médium em vigília absoluta.",
    correct_option: "D",
    explanation:
      "Na pneumatofonia a voz se forma diretamente no espaço fluídico exterior; na psicofonia o Espírito atua sobre o centro motor da fala do médium, fazendo-o falar com sua própria boca e pregas vocais.",
    reference: "2ª Parte, Cap. XII, item 150 / Cap. XIV, item 166",
    difficulty: "medio",
    active: true,
  },
  {
    code: 225,
    book: "livro_mediuns",
    statement: "No Cap. XIII da 2ª Parte, como se define o médium psicógrafo mecânico?",
    option_a:
      "Aquele que elabora mentalmente cada frase e a escreve deliberadamente com sua caligrafia cotidiana.",
    option_b: "Aquele que só consegue escrever quando conectado a um aparelho de telegrafia Morse.",
    option_c: "Aquele que ouve uma voz em seu ouvido e dita as palavras para um secretário anotar.",
    option_d:
      "Aquele que copia mensagens previamente guardadas em sua memória subconsciente de infância.",
    option_e:
      "Aquele cuja mão se move por uma impulsão involuntária dada pelo Espírito comunicante, sem que o médium saiba antecipadamente o que escreve.",
    correct_option: "E",
    explanation:
      "No médium mecânico, a mão é movida de forma inteiramente independente de sua vontade; o médium não tem consciência prévia do pensamento que está sendo grafado e só toma conhecimento ao ler o texto concluído.",
    reference: "2ª Parte, Cap. XIII, item 157 / Cap. XV, item 179",
    difficulty: "facil",
    active: true,
  },
  {
    code: 226,
    book: "livro_mediuns",
    statement:
      "Como funciona a mente do médium psicógrafo intuitivo segundo o Cap. XIII e XV da 2ª Parte?",
    option_a:
      "Sua mão é movida de forma automática e independente de qualquer participação dos seus centros cerebrais.",
    option_b:
      "O Espírito comunicante atua diretamente sobre o cérebro do médium; o médium assimila o pensamento transmitido e o exprime escrevendo com suas próprias palavras e vontade voluntária.",
    option_c:
      "O médium perde a consciência de si mesmo e acorda sem saber seu próprio nome ou localidade.",
    option_d: "A mensagem surge gravada em letras de fogo sobre a epiderme do antebraço do médium.",
    option_e:
      "O médium precisa adivinhar o que o Espírito deseja através da leitura da fisionomia dos assistentes.",
    correct_option: "B",
    explanation:
      "No médium intuitivo, o Espírito age sobre a alma do médium, sugerindo as ideias. O médium as apreende e redige voluntariamente com seu vocabulário particular, sem deixar de ser fiel ao pensamento transmitido.",
    reference: "2ª Parte, Cap. XIII, item 158 / Cap. XV, item 180",
    difficulty: "medio",
    active: true,
  },
  {
    code: 227,
    book: "livro_mediuns",
    statement:
      "Em que consiste a faculdade do médium psicógrafo semimecânico (Cap. XIII e XV da 2ª Parte)?",
    option_a:
      "O médium sente a impulsão muscular involuntária na mão e no braço, mas tem consciência simultânea das palavras à medida que vão sendo grafadas.",
    option_b: "O médium escreve alternadamente uma palavra em português e outra em latim clássico.",
    option_c:
      "O médium desenha esquemas mecânicos industriais e plantas de engenharia sob transe sonambúlico.",
    option_d:
      "O médium só escreve se tiver metade do corpo paralisada por uma enfermidade congênita.",
    option_e:
      "A velocidade da escrita é exatamente a metade da velocidade habitual de um escrivão público.",
    correct_option: "A",
    explanation:
      "O médium semimecânico participa das duas modalidades: sua mão é impulsionada involuntariamente pelo Espírito, mas ele tem a percepção consciente das palavras no mesmo instante em que o lápis as traça.",
    reference: "2ª Parte, Cap. XIII, item 159 / Cap. XV, item 181",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 228,
    book: "livro_mediuns",
    statement:
      "No Cap. XIV da 2ª Parte (Dos Médiuns), qual a célebre definição de médium enunciada por Allan Kardec?",
    option_a:
      '"Todo aquele que passou por cursos e rituais iniciáticos de magia e teosofia oriental."',
    option_b:
      '"Exclusivamente os indivíduos que realizam levitações e transporte tangível de objetos materiais."',
    option_c:
      '"Toda pessoa que sente, em um grau qualquer, a influência dos Espíritos, sendo essa faculdade inerente ao homem e não um privilégio exclusivo."',
    option_d:
      '"Apenas os videntes e profetas sagrados consagrados pela autoridade eclesiástica tradicional."',
    option_e:
      '"O ser humano perfeito e livre de qualquer imperfeição moral ou inclinação ao erro terreno."',
    correct_option: "C",
    explanation:
      "No item 159, Kardec afirma: 'Toda pessoa que sente, num grau qualquer, a influência dos Espíritos é, por esse fato, médium. Essa faculdade é inerente ao homem; não constitui, portanto, um privilégio exclusivo'.",
    reference: "2ª Parte, Cap. XIV, item 159",
    difficulty: "facil",
    active: true,
  },
  {
    code: 229,
    book: "livro_mediuns",
    statement:
      'No Cap. XVI da 2ª Parte, Kardec classifica diversas variedades especiais de médiuns. O que distingue os "médiuns tiptólogos"?',
    option_a:
      "São aqueles que transmitem ensinamentos apenas por meio de composições musicais ao piano.",
    option_b:
      "São aqueles dotados de extrema lentidão para grafar pensamentos filosóficos elevados.",
    option_c:
      "São médiuns especializados exclusivamente no diagnóstico médico de enfermidades infecciosas.",
    option_d:
      "São aqueles sob cuja influência se produzem ruídos, estalos e pancadas cadenciadas para a transmissão de palavras e frases.",
    option_e:
      "São médiuns que só se comunicam por meio de caracteres tipográficos impressos em tipografias antigas.",
    correct_option: "D",
    explanation:
      "Os médiuns tiptólogos possuem uma aptidão especial para facilitar a produção de ruídos percussivos e pancadas (tiptologia), permitindo que os Espíritos conversem por sinais convencionados com o alfabeto.",
    reference: "2ª Parte, Cap. XVI, item 189",
    difficulty: "medio",
    active: true,
  },
  {
    code: 230,
    book: "livro_mediuns",
    statement:
      'O que caracteriza os médiuns "falantes" (ou psicofônicos) de acordo com o Cap. XVI da 2ª Parte?',
    option_a:
      "Falam de si mesmos ininterruptamente sem permitir que os outros presentes se manifestem na reunião.",
    option_b:
      "Falam apenas idiomas que aprenderam formalmente na infância e nas salas de aula acadêmicas.",
    option_c:
      "Necessitam que os assistentes lhes façam perguntas gritando para que consigam responder com clareza.",
    option_d: "Têm a voz modificada permanentemente mesmo quando não estão em trabalho mediúnico.",
    option_e:
      "São aqueles através de cujos órgãos vocais os Espíritos se exprimem diretamente aos ouvintes, com entonações e modulações da entidade manifestante.",
    correct_option: "E",
    explanation:
      "Nos médiuns psicofônicos ou falantes, o Espírito se comunica pela palavra falada, servindo-se dos órgãos vocais do médium, muitas vezes reproduzindo o tom de voz e o sotaque que possuía em vida.",
    reference: "2ª Parte, Cap. XVI, item 190",
    difficulty: "facil",
    active: true,
  },

  // Formação, Cuidados, Moral e o Meio (231 - 238)
  {
    code: 231,
    book: "livro_mediuns",
    statement:
      "No Cap. XVII da 2ª Parte (Formação dos Médiuns), qual conselho Kardec oferece ao principiante que deseja desenvolver a psicografia?",
    option_a:
      "Jejuar rigorosamente por trinta dias e isolar-se em grutas longe de qualquer contato humano.",
    option_b:
      "Colocar-se em atitude de recolhimento, prece sincera a Deus e ao bom guia, segurando o lápis com flexibilidade e perseverando com paciência sem desanimar nas primeiras tentativas estéreis.",
    option_c:
      "Tomar substâncias estimulantes fortes para acelerar o ritmo dos batimentos cardíacos e do fluxo sanguíneo.",
    option_d:
      "Contratar médiuns famosos para escreverem em seu lugar sob um compromisso de sigilo financeiro.",
    option_e:
      "Forçar a mão mecanicamente com pesos de chumbo até vencer a rigidez dos músculos carpianos.",
    correct_option: "B",
    explanation:
      "Kardec recomenda a calma, a humildade e a disciplina: segurar o lápis suavemente no papel, recolher-se em oração fervorosa pedindo a assistência do anjo guardião e exercitar-se com constância e serenidade.",
    reference: "2ª Parte, Cap. XVII, itens 200-209",
    difficulty: "facil",
    active: true,
  },
  {
    code: 232,
    book: "livro_mediuns",
    statement:
      "No Cap. XVIII da 2ª Parte (Inconvenientes e Perigos da Mediunidade), qual advertência Kardec faz sobre o desenvolvimento mediúnico em crianças pequenas?",
    option_a:
      "É sumamente inconveniente e perigoso, pois sua organização física e nervosa frágil pode sofrer abalos danosos com a exaltação prematura da sensibilidade.",
    option_b:
      "Deve ser estimulado ao máximo desde a mais tenra idade para que se tornem celebridades mundiais.",
    option_c:
      "É indiferente, pois a mediunidade independe completamente do estado biológico ou do sistema nervoso do indivíduo.",
    option_d:
      "Só deve ser praticado se a criança for submetida diariamente a transes de levitação corporal.",
    option_e:
      "As crianças nunca possuem aptidão mediúnica, que só surge invariavelmente após os quarenta anos de idade.",
    correct_option: "A",
    explanation:
      "Na infância, a fragilidade dos órgãos e do sistema nervoso recomenda resguardo. A excitação da imaginação e das forças fluídicas em cérebros jovens pode comprometer a saúde e o desenvolvimento equilibrado.",
    reference: "2ª Parte, Cap. XVIII, item 221",
    difficulty: "medio",
    active: true,
  },
  {
    code: 233,
    book: "livro_mediuns",
    statement:
      "A mediunidade é causa de loucura? Como Allan Kardec elucida essa questão no Cap. XVIII da 2ª Parte?",
    option_a:
      "Sim, a mediunidade produz inevitavelmente a demência e o delírio persecutório em todos os praticantes.",
    option_b:
      "Apenas os médiuns videntes tornam-se incuravelmente loucos devido ao pavor das aparições espirituais.",
    option_c:
      "Não; a mediunidade não gera a loucura quando bem conduzida, embora perturbações possam sobrevir em mentes predispostas fragilizadas pelo orgulho, medo ou excessos.",
    option_d:
      "Qualquer pessoa que sinta arrepios na coluna vertebral desenvolverá desequilíbrio mental irreversível.",
    option_e:
      "A loucura é uma exigência prévia dos Espíritos para concederem a faculdade psicográfica.",
    correct_option: "C",
    explanation:
      "A mediunidade não ocasiona a loucura por si mesma. Em cérebros orgânica e psiquicamente sadios, ela se exerce com perfeita calma; o desequilíbrio decorre de fraquezas e predisposições patológicas pré-existentes.",
    reference: "2ª Parte, Cap. XVIII, item 222",
    difficulty: "facil",
    active: true,
  },
  {
    code: 234,
    book: "livro_mediuns",
    statement:
      "No Cap. XIX da 2ª Parte, ao examinar o papel do médium nas comunicações, qual metáfora clássica é empregada para explicar como o Espírito utiliza os recursos do médium?",
    option_a: "A do astrônomo observando estrelas fixas através de um telescópio descalibrado.",
    option_b: "A do escravo acorrentado que repete mecanicamente as ordens do senhor feitor.",
    option_c: "A de uma bússola magnética que sempre aponta para o polo sul geográfico.",
    option_d:
      "A do intérprete ou instrumento musical que expressa a música segundo a afinação e as notas disponíveis no teclado do médium.",
    option_e: "A de um marionete manipulado por fios de náilon diante de uma plateia teatral.",
    correct_option: "D",
    explanation:
      "Kardec compara o Espírito a um músico virtuoso: se o piano (o cérebro e o conhecimento do médium) estiver desafinado ou tiver poucas teclas, o músico terá de limitar sua execução aos recursos do instrumento.",
    reference: "2ª Parte, Cap. XIX, itens 223-225",
    difficulty: "medio",
    active: true,
  },
  {
    code: 235,
    book: "livro_mediuns",
    statement:
      "Segundo o Cap. XIX da 2ª Parte, um Espírito que deseja ditar uma mensagem em idioma que o médium desconhece totalmente enfrenta qual dificuldade principal?",
    option_a:
      "O Espírito é proibido pelas leis divinas de falar línguas diferentes da língua nativa do médium.",
    option_b:
      "O lápis utilizado na escrita quebra-se automaticamente devido ao choque de dialetos antagônicos.",
    option_c:
      "A mensagem só pode ser escrita se for traduzida previamente por um dicionário impresso colocado sob a mesa.",
    option_d:
      "Nenhuma dificuldade, pois a matéria orgânica humana não opõe resistência à pronúncia de línguas desconhecidas.",
    option_e:
      "Grande dificuldade, porque o cérebro do médium carece dos vocábulos e sons correspondentes em sua memória orgânica, exigindo um esforço mecânico fluídico muito maior e raro.",
    correct_option: "E",
    explanation:
      "Falar ou escrever numa língua que o médium não compreende (xenoglossia) exige do Espírito um esforço puramente mecânico de guiar a mão letra por letra, já que inexistem as matrizes cerebrais prévias na memória do intermediário.",
    reference: "2ª Parte, Cap. XIX, itens 226-233",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 236,
    book: "livro_mediuns",
    statement:
      "No Cap. XX da 2ª Parte (Influência Moral do Médium), qual é o principal fator que atrai a assistência e a comunicação dos Espíritos Superiores?",
    option_a:
      "A posição social de destaque, a opulência financeira e a formação acadêmica erudita do médium.",
    option_b:
      "A humildade sincera, o desinteresse material, a pureza de sentimentos e o devotamento constante ao bem do próximo.",
    option_c:
      "O uso de vestes cerimoniais brancas e o consumo de incensos aromáticos durante as sessões.",
    option_d: "A posse de relíquias sagradas e anéis magnetizados por sacerdotes consagrados.",
    option_e:
      "A habilidade de realizar manifestações de efeitos físicos barulhentos para atrair multidões.",
    correct_option: "B",
    explanation:
      "A afinidade moral é a lei que rege a atração dos Espíritos: os bons vão espontaneamente para onde encontram bondade, sinceridade, humildade e caridade desinteressada, afastando-se do orgulho e da vaidade.",
    reference: "2ª Parte, Cap. XX, itens 226-230",
    difficulty: "facil",
    active: true,
  },
  {
    code: 237,
    book: "livro_mediuns",
    statement:
      "Por que, de acordo com o Cap. XX da 2ª Parte, médiuns com imperfeições morais notórias conseguem às vezes receber excelentes mensagens doutrinárias?",
    option_a:
      "Porque bons Espíritos aproveitam a aptidão fluídica do médium para instruir os presentes e despertar a consciência do próprio médium para sua urgente reforma moral.",
    option_b:
      "Porque os Espíritos superiores são indiferentes à moralidade dos instrumentos humanos que utilizam.",
    option_c:
      "Porque os Espíritos inferiores adoram pregar a mais sublime virtude cristã para se converterem publicamente.",
    option_d:
      "Porque a faculdade mediúnica apaga todos os vícios e pecados do indivíduo no exato momento do transe.",
    option_e:
      "Trata-se sempre de uma farsa planejada em que o próprio médium inventa a mensagem virtuosa.",
    correct_option: "A",
    explanation:
      "Kardec esclarece que os bons Espíritos utilizam a aptidão do médium para benefício do grupo e para advertir o próprio médium que, ao escrever verdades salutares, condena suas próprias imperfeições.",
    reference: "2ª Parte, Cap. XX, item 228",
    difficulty: "medio",
    active: true,
  },
  {
    code: 238,
    book: "livro_mediuns",
    statement:
      "No Cap. XXI da 2ª Parte (Influência do Meio), qual condição ambiental é fundamental para o sucesso e seriedade de uma reunião mediúnica?",
    option_a:
      "A presença de uma grande plateia ruidosa que desafie e questione publicamente os médiuns.",
    option_b:
      "A escuridão total e absoluta acompanhada de música estridente e instrumentos de percussão.",
    option_c:
      "O recolhimento de pensamentos, a harmonia moral e a concordância de sentimentos elevados voltados para o bem comum.",
    option_d:
      "A cobrança de ingressos para selecionar apenas assistentes de alto poder aquisitivo financeiro.",
    option_e:
      "A realização das sessões exclusivamente à meia-noite em noites de lua cheia de tempestade.",
    correct_option: "C",
    explanation:
      "A assembleia dos participantes forma uma corrente coletiva de pensamentos. Se houver desunião, ironia ou leviandade, os Espíritos sérios se retiram, deixando o campo livre aos Espíritos zombeteiros.",
    reference: "2ª Parte, Cap. XXI, itens 231-233",
    difficulty: "facil",
    active: true,
  },

  // Animais, Obsessão e Identidade dos Espíritos (239 - 243)
  {
    code: 239,
    book: "livro_mediuns",
    statement:
      "No Cap. XXII da 2ª Parte (Da Mediunidade nos Animais), qual a conclusão doutrinária apresentada pelo Espírito Erasto a respeito da possibilidade de os animais serem médiuns?",
    option_a:
      "Os animais podem ser médiuns mecânicos e intuitivos idênticos aos seres humanos se forem treinados domesticamente.",
    option_b:
      "Cães e cavalos são os melhores médiuns psicógrafos conhecidos em virtude de sua extrema lealdade ao homem.",
    option_c:
      "Apenas os animais selvagens que habitam florestas virgens possuem percepção dos fluidos espirituais.",
    option_d:
      "Os animais não podem ser médiuns, pois lhes falta a aptidão intelectual e moral para assimilar o pensamento espiritual, sendo apenas passíveis de ação mecânica externa e temporária.",
    option_e:
      "Os animais possuem uma mediunidade superior à dos humanos por não possuírem livre-arbítrio culpável.",
    correct_option: "D",
    explanation:
      "Erasto esclarece de forma categórica que a mediunidade exige a união fluídica de pensamentos e sentimentos inteligentes. O Espírito pode assustar ou mover mecanicamente um animal, mas o animal não serve de médium.",
    reference: "2ª Parte, Cap. XXII, item 236",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 240,
    book: "livro_mediuns",
    statement:
      "No Cap. XXIII da 2ª Parte (Da Obsessão), Kardec define as três formas principais pelas quais o domínio dos maus Espíritos se manifesta. Quais são elas?",
    option_a: "Obsessão passageira, possessão biológica e catalepsia mórbida.",
    option_b: "Hipnose carnal, sonambulismo perverso e poltergeist doméstico.",
    option_c: "Demência juvenil, mania religiosa e histeria contagiosa.",
    option_d: "Simulação voluntária, fascinação lúcida e exorcismo ritual.",
    option_e: "Obsessão simples, fascinação e subjugação.",
    correct_option: "E",
    explanation:
      "O Cap. XXIII divide a obsessão em três graus: obsessão simples (importunação consciente), fascinação (ilusão intelectual grave em que o obsidiado não vê o erro) e subjugação (domínio constrangedor da vontade física e moral).",
    reference: "2ª Parte, Cap. XXIII, itens 237-240",
    difficulty: "facil",
    active: true,
  },
  {
    code: 241,
    book: "livro_mediuns",
    statement:
      'No Cap. XXIII da 2ª Parte, por que a "fascinação" é considerada a forma mais grave e perigosa de obsessão?',
    option_a:
      "Porque paralisa imediatamente os membros e impede o médium de caminhar ou alimentar-se.",
    option_b:
      "Porque produz uma ilusão direta no julgamento do médium, fazendo-o tomar os maiores absurdos e erros por verdades sublimes, repelindo os conselhos dos amigos sinceros.",
    option_c:
      "Porque transmite enfermidades contagiosas aos familiares mais próximos do obsidiado.",
    option_d:
      "Porque obriga o médium a praticar atos de violência física extrema contra si mesmo em praça pública.",
    option_e:
      "Porque não existe nenhum Espírito protetor capaz de visitar quem caiu em fascinação.",
    correct_option: "B",
    explanation:
      "Na fascinação, o médium acredita piamente que está sob a tutela de uma grande figura espiritual, considerando sublimes as maiores tolices e rejeitando todo conselho de bom senso por achar que os outros sentem inveja dele.",
    reference: "2ª Parte, Cap. XXIII, item 239",
    difficulty: "dificil",
    active: true,
  },
  {
    code: 242,
    book: "livro_mediuns",
    statement:
      'O que caracteriza a "subjugação" (outrora denominada possessão) segundo o Cap. XXIII da 2ª Parte de O Livro dos Médiuns?',
    option_a:
      "A constrição moral ou física em que o Espírito dominador paralisa a vontade da vítima, obrigando-a a agir ou falar contra o seu próprio discernimento consciente.",
    option_b: "A compra da alma do médium mediante contrato assinado em pergaminho antigo.",
    option_c:
      "A saída irreversível da alma humana do seu corpo, sendo o organismo biológico adotado por um Espírito animalizado.",
    option_d:
      "Uma perturbação respiratória ligeira que cessa quando o médium ingere água fluidificada.",
    option_e:
      "O esquecimento repentino das noções gramaticais de sua língua pátria durante a juventude.",
    correct_option: "A",
    explanation:
      "A subjugação é uma ligação fluídica opressiva que paralisa o livre-arbítrio: a vítima tem consciência de sua situação absurda, mas não consegue comandar seus próprios membros ou sua boca por estar moral ou fisicamente subjugada.",
    reference: "2ª Parte, Cap. XXIII, item 240",
    difficulty: "medio",
    active: true,
  },
  {
    code: 243,
    book: "livro_mediuns",
    statement:
      "No Cap. XXIV da 2ª Parte (Identidade dos Espíritos), qual é o critério mais seguro para discernir se uma comunicação procede verdadeiramente de um Espírito Superior?",
    option_a:
      "A assinatura pomposa e o uso repetido de títulos nobiliárquicos e acadêmicos na mensagem.",
    option_b:
      "A presença de rimas poéticas perfeitas e palavras rebuscadas tiradas de dicionários arcaicos.",
    option_c:
      "A elevação dos pensamentos, a pureza da moralidade, a ausência de contradições lógicas e a linguagem digna, sóbria e benevolente.",
    option_d:
      "O fato de a escrita surgir em papel timbrado especial com selos e carimbos sacramentais.",
    option_e:
      "A rapidez vertiginosa da caligrafia e a força com que o lápis fura a folha de papel.",
    correct_option: "C",
    explanation:
      "Os Espíritos superiores julgam-se por suas palavras e princípios: sua linguagem é sempre simples, nobre, caridosa e destituída de orgulho, jamais contradizendo as leis da lógica, da ciência e da fraternidade universal.",
    reference: "2ª Parte, Cap. XXIV, itens 255-268",
    difficulty: "facil",
    active: true,
  },

  // Evocações, Fraudes e Sociedades (244 - 247)
  {
    code: 244,
    book: "livro_mediuns",
    statement:
      "Em O Livro dos Médiuns (2ª Parte, Cap. XXV e XXVI), qual é a orientação doutrinária para aqueles que desejam consultar os Espíritos a respeito de datas de morte, loterias ou localização de tesouros materiais ocultos?",
    option_a:
      "Os Espíritos superiores fornecem alegremente números da sorte para enriquecer médiuns devotados à causa.",
    option_b:
      "Deve-se sempre evocar reis e tesoureiros do passado, que guardam com exatidão os mapas dos tesouros.",
    option_c:
      "A doutrina recomenda o uso do pêndulo de cristal sobre moedas de ouro para encontrar riquezas subterrâneas.",
    option_d:
      "Os bons Espíritos recusam responder a futilidades ou perguntas que sirvam à cobiça e especulação, sendo tais questões campo fértil para mistificações de espíritos zombeteiros.",
    option_e:
      "Todas as perguntas sobre fortuna material são atendidas prontamente se houver promessa de doação futura.",
    correct_option: "D",
    explanation:
      "O objetivo das comunicações com o Além é o progresso moral e a consolação. A Providência Divina não permite que o futuro ou ganhos materiais fáceis sejam revelados, punindo a leviandade com mistificações decepcionantes.",
    reference: "2ª Parte, Cap. XXVI, itens 286-295",
    difficulty: "facil",
    active: true,
  },
  {
    code: 245,
    book: "livro_mediuns",
    statement:
      "No Cap. XXVIII da 2ª Parte (Do Charlatanismo e da Fraude), qual princípio evangélico fundamental Kardec reafirma a respeito do exercício da faculdade mediúnica?",
    option_a: '"Ao trabalhador é digno seu salário em qualquer ramo do comércio da fé."',
    option_b:
      '"Aquele que mais arrecada fundos financeiros na reunião terá maior assento no Reino dos Céus."',
    option_c:
      '"Toda manifestação pública de efeitos físicos deve pagar impostos aos governantes locais."',
    option_d:
      '"A faculdade mediúnica cresce proporcionalmente ao preço cobrado pelas consultas individuais."',
    option_e:
      '"Dai de graça o que de graça recebestes", não devendo a mediunidade jamais ser convertida em profissão lucrativa ou meio de vida mercantil.',
    correct_option: "E",
    explanation:
      "A mediunidade não é propriedade do homem e não deve ser mercadoria vendida. Fazer dela um negócio é afastar os bons Espíritos e atrair a zombaria e a exploração de entidades interesseiras e inferiores.",
    reference: "2ª Parte, Cap. XXVIII, itens 304-313",
    difficulty: "facil",
    active: true,
  },
  {
    code: 246,
    book: "livro_mediuns",
    statement:
      'No Cap. XXIX da 2ª Parte (Das Reuniões e das Sociedades Espíritas), como Allan Kardec classifica e descreve as "reuniões instrutivas"?',
    option_a:
      "Assembleias voltadas exclusivamente para a diversão social e jogos de salão entre jovens curiosos.",
    option_b:
      "Reuniões caracterizadas pela gravidade, ordem e silêncio, onde se busca o ensino dos Espíritos para o aperfeiçoamento moral e o esclarecimento filosófico sólido.",
    option_c:
      "Sessões onde o objetivo principal é produzir ruídos estrondosos e quebra de objetos para convencer incrédulos teimosos.",
    option_d:
      "Encontros para discussão política e partidária visando à eleição de candidatos espíritas aos parlamentos.",
    option_e:
      "Sessões teatrais de ilusionismo para demonstrar a fraqueza dos sentidos corpóreos dos espectadores.",
    correct_option: "B",
    explanation:
      "Kardec distingue reuniões fúteis, experimentais e instrutivas. As instrutivas são o verdadeiro centro do estudo espírita, exigindo gravidade, concentração de propósitos e busca pelo autoaperfeiçoamento e caridade.",
    reference: "2ª Parte, Cap. XXIX, itens 324-329",
    difficulty: "facil",
    active: true,
  },
  {
    code: 247,
    book: "livro_mediuns",
    statement:
      "No Cap. XXXI da 2ª Parte (Dissertações Espíritas), qual é a célebre recomendação dada pelo apóstolo Erasto sobre a aceitação das comunicações mediúnicas?",
    option_a:
      '"Mais vale rejeitar noventa e nove verdades do que admitir uma única falsidade, uma só mentira."',
    option_b:
      '"Mais vale aceitar cem mentiras piedosas do que ferir a vaidade de um médium prestigiado."',
    option_c:
      '"Tudo o que for psicografado com rapidez e beleza caligráfica deve ser aceito como dogma inegável."',
    option_d:
      '"Os ensinamentos dos Espíritos não precisam ser submetidos à razão humana nem à lógica comum."',
    option_e:
      '"O nome ilustre assinado ao final da mensagem garante categoricamente a infalibilidade do seu conteúdo."',
    correct_option: "A",
    explanation:
      "Na sua dissertação no Capítulo XXXI, item XX, Erasto estabelece a regra de ouro da vigilância crítica: na dúvida, rejeite a mensagem até que sua veracidade e lógica sejam plenamente atestadas.",
    reference: "2ª Parte, Cap. XXXI, item XX (Erasto)",
    difficulty: "facil",
    active: true,
  },

  // Dissertações e Vocabulário Espírita (248 - 250)
  {
    code: 248,
    book: "livro_mediuns",
    statement:
      "Na dissertação de Santo Agostinho transcrita no Cap. XXXI da 2ª Parte, que conselho fundamental é dado aos médiuns sobre o uso de suas faculdades?",
    option_a: "Exigir veneração pública de seus concidadãos como emissários dos céus.",
    option_b:
      "Não permitir que outros médiuns escrevam na mesma cidade para evitar concorrência desleal.",
    option_c:
      "Lembrar-se de que a mediunidade é uma graça concedida para o próprio adiantamento moral, devendo cultivar a modéstia, o amor aos semelhantes e o desapego aos aplausos do mundo.",
    option_d:
      "Utilizar sua mediunidade para prever catástrofes climáticas e cobrar por avisos meteorológicos.",
    option_e: "Desprezar os ensinamentos dos Evangelhos em favor de novas revelações exclusivas.",
    correct_option: "C",
    explanation:
      "Santo Agostinho convida os médiuns a considerarem a faculdade como um compromisso de resgate e serviço cristão: aquele que se envaidece cai nas garras da obsessão; quem permanece humilde atrai os anjos do Senhor.",
    reference: "2ª Parte, Cap. XXXI, item IX (Santo Agostinho)",
    difficulty: "medio",
    active: true,
  },
  {
    code: 249,
    book: "livro_mediuns",
    statement:
      'No Cap. XXXII da 2ª Parte (Vocabulário Espírita), como é definido o termo "Psicofonia" introduzido na terminologia espírita?',
    option_a:
      "Transmissão do pensamento do Espírito através de mensagens telegráficas ou por cabos submarinos.",
    option_b:
      "A capacidade de ouvir ruídos subterrâneos causados pelo movimento das placas tectônicas.",
    option_c:
      "O cântico sagrado entoado por corais mediúnicos em solenidades fúnebres de desobsessão.",
    option_d:
      "Manifestação dos Espíritos pela voz de um médium falante, cujos órgãos vocais são utilizados para a emissão das palavras.",
    option_e:
      "A escrita cursiva no ar por meio de faíscas fosforescentes geradas pelo perispírito.",
    correct_option: "D",
    explanation:
      "No vocabulário espírita elaborado por Allan Kardec, psicofonia é a transmissão do pensamento dos Espíritos através da palavra oral pelo concurso de um médium falante.",
    reference: "2ª Parte, Cap. XXXII (Vocabulário Espírita)",
    difficulty: "facil",
    active: true,
  },
  {
    code: 250,
    book: "livro_mediuns",
    statement:
      'No Vocabulário Espírita (2ª Parte, Cap. XXXII), qual a definição precisa do termo "Perispírito" adotada por Allan Kardec na Codificação?',
    option_a:
      "O corpo carnal do homem enquanto se encontra em estado de decomposição orgânica no túmulo.",
    option_b:
      "A substância densa e combustível que forma o núcleo incandescente dos planetas rochosos.",
    option_c:
      "A aura colorida visível apenas aos aparelhos fotográficos eletrônicos e microscópios atômicos.",
    option_d:
      "A faculdade que permite ao médium levitar seu próprio peso sem assistência de fluidos espirituais.",
    option_e:
      "O envoltório semimaterial da alma, que nos encarnados serve de laço intermediário entre o Espírito e a matéria corporal, e nos desencarnados constitui seu corpo fluídico.",
    correct_option: "E",
    explanation:
      "Kardec criou o neologismo 'Perispírito' (peri = em torno de; spírito = espírito) para designar o corpo fluídico semimaterial e sutil que envolve a alma, sendo o veículo de suas manifestações no plano físico e espiritual.",
    reference: "2ª Parte, Cap. XXXII (Vocabulário Espírita)",
    difficulty: "facil",
    active: true,
  },
];
