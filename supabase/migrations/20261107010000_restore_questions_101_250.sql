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

INSERT INTO public.questions (code, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference, difficulty, active)
VALUES (
  201,
  'livro_mediuns',
  'Em O Livro dos Médiuns (1ª Parte, Cap. I), qual é o ponto de partida lógico que Kardec estabelece para demonstrar a realidade dos fenômenos espíritas àqueles que duvidam?',
  'A exigência de crença dogmática cega nas escrituras antigas antes de qualquer observação.',
  'A realização obrigatória de prodígios físicos em locais públicos sob o controle exclusivo de mágicos de teatro.',
  'O raciocínio encadeado: a existência da alma, sua sobrevivência após a morte física e a possibilidade de comunicação entre o mundo visível e o invisível.',
  'A aceitação incondicional de que toda visão humana é prova infalível da presença de um Espírito.',
  'A submissão a fórmulas cabalísticas e rituais de consagração mediúnica herdados da antiguidade.',
  'C',
  'Kardec demonstra que, admitida a existência da alma e sua sobrevivência à morte corporal, é racionalmente inadmissível que ela perca a faculdade de pensar e de se comunicar com os entes amados que ficaram na Terra.',
  '1ª Parte, Cap. I, itens 1-3',
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
  202,
  'livro_mediuns',
  'De acordo com o Cap. II da 1ª Parte de O Livro dos Médiuns, qual é a posição do Espiritismo a respeito do "maravilhoso" e do "sobrenatural"?',
  'O Espiritismo fundamenta sua doutrina na crença em milagres que revogam as leis naturais eternas de Deus.',
  'O Espiritismo sustenta que os médiuns possuem poderes mágicos excepcionais que violam a física universal.',
  'O Espiritismo aceita a intervenção do Diabo e forças ocultas fora do alcance da razão humana.',
  'O Espiritismo considera que apenas os fenômenos de levitação são puramente sobrenaturais e inexplicáveis pela ciência.',
  'O Espiritismo demonstra que todos os fenômenos espíritas decorrem de leis naturais imutáveis, afastando o caráter miraculoso ou sobrenatural.',
  'E',
  'O Espiritismo não admite milagres ou derrogações das leis da Natureza; as manifestações espíritas apoiam-se em leis naturais até então desconhecidas, retirando delas qualquer roupagem mística ou sobrenatural.',
  '1ª Parte, Cap. II, itens 15-18',
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
  203,
  'livro_mediuns',
  'No Cap. III da 1ª Parte (Do Método), por que os fenômenos mediúnicos não podem ser produzidos à vontade dos experimentadores nem submetidos a desafios públicos céticos?',
  'Porque os Espíritos são inteligências livres que recusam servir de joguete à curiosidade e não obedecem a caprichos humanos.',
  'Porque os médiuns perdem suas faculdades sempre que são observados por mais de duas pessoas.',
  'Porque a eletricidade da atmosfera diurna impede completamente qualquer aproximação fluídica espiritual.',
  'Porque as leis humanas proíbem terminantemente qualquer ensaio científico de ectoplasmia e tiptologia.',
  'Porque os bons Espíritos só operam quando há pagamento financeiro adiantado aos operadores encarnados.',
  'A',
  'Os Espíritos não são forças cegas da matéria manipuláveis em laboratório sob comando; são consciências dotadas de vontade própria que comparecem quando acham conveniente e útil, nunca para satisfazer vaidades ou desafios.',
  '1ª Parte, Cap. III, itens 20-22',
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
  204,
  'livro_mediuns',
  'No Cap. III da 1ª Parte, Kardec classifica os adeptos do Espiritismo em categorias. Qual categoria representa os "espíritas-cristãos" ou "moralistas"?',
  'Aqueles que buscam unicamente o aspecto das manifestações físicas e curiosidades fenomênicas.',
  'Aqueles que apenas admiram a filosofia e a lógica doutrinária, sem mudar sua conduta individual.',
  'Aqueles que acreditam que a mediunidade dispensa a prática da caridade e do perdão.',
  'Aqueles que não se limitam a admirar a moral espírita, mas a praticam e se esforçam constantemente para vencer suas más inclinações.',
  'Aqueles que exigem ver prodígios constantes para manterem sua fé nos ensinamentos dos Espíritos.',
  'D',
  'Os espíritas verdadeiros ou cristãos-espíritas são aqueles que assimilam a essência moral do Espiritismo e realizam a sua reforma íntima, praticando a caridade, a humildade e a benevolência cristã.',
  '1ª Parte, Cap. III, item 28',
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
  205,
  'livro_mediuns',
  'No Cap. IV da 1ª Parte (Dos Sistemas), como Kardec refuta o "sistema do reflexo" ou da alma coletiva, que pretendia que as mensagens fossem apenas o reflexo do pensamento dos presentes?',
  'Argumentando que o pensamento humano é incapaz de emitir qualquer tipo de onda mental ou fluido.',
  'Provando que muitas comunicações expressam ideias totalmente contrárias às opiniões e convicções de todos os membros presentes na reunião.',
  'Mostrando que nenhuma comunicação escrita possui valor sem a confirmação de aparelhos mecânicos de laboratório.',
  'Exigindo que os médiuns fiquem amordaçados e vendados em câmaras hermeticamente isoladas.',
  'Declarando que os médiuns não pensam durante o processo da escrita automática.',
  'B',
  'Se a comunicação fosse mero reflexo da mente dos presentes, ela jamais sustentaria teses opostas, revelaria fatos totalmente ignorados por todos ou combateria com veemência os preconceitos do próprio grupo ali reunido.',
  '1ª Parte, Cap. IV, item 43',
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
  206,
  'livro_mediuns',
  'Como Kardec rebate o sistema da alucinação coletiva no Cap. IV da 1ª Parte para explicar as manifestações espíritas?',
  'Demonstra que a alucinação só ocorre durante o sono profundo de indivíduos hipnotizados.',
  'Afirma que médiuns videntes nunca se enganam sobre a realidade das formas visíveis.',
  'Aponta que a alucinação não deixa vestígios materiais tangíveis, ao passo que os fenômenos espíritas produzem efeitos físicos duradouros, como escritas e deslocamentos de objetos.',
  'Sustenta que a alucinação é uma patologia restrita exclusivamente aos céticos e materialistas.',
  'Explica que a alucinação coletiva nunca foi descrita na história da medicina clássica.',
  'C',
  'Uma alucinação pode impressionar a imaginação de um indivíduo, mas não quebra móveis, não escreve páginas reais de próprio punho nem levita objetos pesados diante de testemunhas sóbrias e conscientes.',
  '1ª Parte, Cap. IV, item 39',
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
  207,
  'livro_mediuns',
  'No Cap. IV da 1ª Parte, o sistema que atribui todas as comunicações a uma única entidade maligna (o demônio ou espírito das trevas) é refutado por Kardec principalmente porque:',
  'Os demônios não possuem inteligência suficiente para se comunicar por via mediúnica.',
  'O Espiritismo nega a existência do plano espiritual inferior e de Espíritos imperfeitos.',
  'Os fenômenos espíritas ocorrem apenas sob a bênção de rituais clericais solenes.',
  'A moral ensinada pelos Espíritos superiores é de uma pureza sublime, convidando à caridade, ao amor a Deus e ao bem, o que seria absurdo para um demônio interessado no mal.',
  'Nenhuma entidade espiritual tem permissão de emitir mensagens aos homens encarnados.',
  'D',
  'Kardec recorda as palavras do Evangelho: ''Se Satanás expulsa a Satanás, está dividido contra si mesmo''. Uma entidade do mal jamais pregaria a renúncia ao orgulho, o amor aos inimigos e o perdão sincero.',
  '1ª Parte, Cap. IV, itens 47-48',
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
  208,
  'livro_mediuns',
  'Na introdução e noções preliminares de O Livro dos Médiuns, qual é o conceito fundamental de perispírito apresentado por Allan Kardec?',
  'O envoltório semimaterial da alma, intermediário entre o Espírito e o corpo físico, composto de fluido cósmico condensado.',
  'Uma centelha puramente imaterial desprovida de qualquer envoltório ou ligação com a matéria.',
  'Um órgão anatômico visível ao microscópio que desaparece completamente logo após o nascimento.',
  'Um corpo astral eterno e fixo que impede a alma de evoluir para mundos mais adiantados.',
  'O conjunto dos pensamentos cerebrais conscientes gerados pelas sinapses nervosas do encarnado.',
  'A',
  'O perispírito é o liame que une a alma ao corpo carnal durante a encarnação; após a desencarnação, serve de envoltório fluídico permanente ao Espírito, permitindo-lhe atuar sobre a matéria.',
  '1ª Parte, Cap. I, item 3 / 2ª Parte, Cap. I',
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
  209,
  'livro_mediuns',
  'Na 2ª Parte, Cap. I (Ação dos Espíritos sobre a Matéria), como o Espírito consegue agir sobre a matéria inerte e movimentar objetos corpóreos?',
  'Modificando mecanicamente as leis de gravitação por meio de encantamentos sonoros proferidos pelo médium.',
  'Utilizando cordas magnéticas microscópicas invisíveis que ligam o cérebro do médium ao centro do objeto.',
  'Transformando temporariamente sua alma em matéria densa equivalente ao peso do objeto deslocado.',
  'Invocando forças angélicas superiores que suspendem a física quântica a pedido dos assistentes.',
  'Combinando uma porção do fluido cósmico universal assimilado pelo seu perispírito com o fluido animalizado próprio do médium.',
  'E',
  'O Espírito combina o seu próprio fluido periespiritual com o fluido animalizado cedido pelo médium de efeitos físicos, saturando o corpo inerte de modo a dar-lhe uma vida factícia que permite o movimento.',
  '2ª Parte, Cap. I, itens 58-59',
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
  210,
  'livro_mediuns',
  'Em O Livro dos Médiuns (2ª Parte, Cap. II e IV), qual foi a constatação definitiva que provou que o fenômeno das "mesas girantes" não era fruto de mera eletricidade ou magnetismo cego?',
  'O fato de que as mesas eram sempre de madeira nobre e pesada, como mogno ou carvalho.',
  'A alteração constante da temperatura ambiente e a produção de faíscas elétricas azuis.',
  'A constatação de respostas inteligentes, respostas a perguntas mentais e manifestação de vontade própria e coerente.',
  'A impossibilidade física de mover mesas redondas quando apoiadas em tapetes de lã.',
  'O fato de que o fenômeno só ocorria na presença de magnetizadores profissionais diplomados.',
  'C',
  'Todo efeito inteligente deve ter uma causa inteligente. Quando as mesas começaram a responder com pancadas a perguntas complexas, comprovou-se a intervenção de inteligências ocultas independentes da física cega.',
  '2ª Parte, Cap. II, item 60 / Cap. III, item 65',
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
  211,
  'livro_mediuns',
  'De acordo com a teoria das manifestações físicas (2ª Parte, Cap. IV), o que ocorre com o peso de uma mesa durante o fenômeno de levitação ou sustentação no ar?',
  'A mesa não sofre qualquer alteração, sendo erguida por músculos físicos invisíveis do médium sonâmbulo.',
  'O peso é modificado pela saturação fluídica dos corpos, podendo o Espírito diminuir a gravidade aparente ou aumentá-la sensivelmente.',
  'O ar ambiente sob a mesa é transformado em vácuo absoluto, empurrando o móvel para o teto.',
  'A massa atômica da mesa é destruída e depois reconstituída milagrosamente ao tocar o chão.',
  'A gravidade da Terra é cancelada em todo o cômodo onde os assistentes se encontram sentados.',
  'B',
  'Pela impregnação fluídica, o Espírito altera a densidade aparente do corpo material, podendo torná-lo mais leve do que o ar (fazendo-o levitar) ou tão pesado que homens robustos não consigam erguê-lo do solo.',
  '2ª Parte, Cap. IV, itens 72-78',
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
  212,
  'livro_mediuns',
  'No Cap. V da 2ª Parte (Manifestações Físicas Espontâneas), o que Kardec esclarece sobre os ruídos noturnos, perturbações e arremesso de objetos em certas casas?',
  'São causados por Espíritos inferiores ou perturbadores, utilizando quase sempre a força fluídica involuntária de alguém presente com aptidão mediúnica.',
  'São provocados exclusivamente por demônios condenados ao fogo eterno que não podem ser afastados.',
  'Devem-se unicamente a ilusões de ótica e barulhos causados por roedores ou correntes de ar canalizadas.',
  'Representam a vingança irrevogável da alma de antigos proprietários contra qualquer habitante vivo.',
  'Cessam imediatamente se forem jogados amuletos bentos e sal grosso nas quatro extremidades do edifício.',
  'A',
  'Manifestações espontâneas de barulhos e arremessos exigem a presença de uma pessoa com forte potencial mediúnico de efeitos físicos inconsciente (frequentemente crianças ou jovens), explorada por Espíritos levianos.',
  '2ª Parte, Cap. V, itens 82-99',
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
  213,
  'livro_mediuns',
  'Em relação ao fenômeno do transporte de objetos fechados (aportes), tratado no Cap. V da 2ª Parte, qual Espírito apresenta uma detalhada dissertação elucidativa sobre o processo fluídico?',
  'Santo Agostinho.',
  'São Luís.',
  'Erasto.',
  'Sócrates.',
  'Fénelon.',
  'C',
  'Erasto, discípulo de São Paulo, assina no item 98 do Capítulo V uma das mais célebres instruções teóricas sobre os fenômenos de transporte e desagregação molecular dos corpos trazidos do exterior.',
  '2ª Parte, Cap. V, item 98',
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
  214,
  'livro_mediuns',
  'Segundo a dissertação de Erasto sobre os aportes e transportes (2ª Parte, Cap. V), como um objeto material pode penetrar em um recinto hermeticamente fechado?',
  'O Espírito abre uma fenda invisível na parede, destruindo os tijolos e rebocando-os em fração de segundo.',
  'O médium é teletransportado para fora do cômodo para buscar o objeto com suas próprias mãos.',
  'O fenômeno é puramente ilusório e hipnótico, não havendo objeto real transportado para o recinto.',
  'O objeto é envolvido pelo fluido espiritual e sofre uma desagregação ou alteração molecular fluídica temporária que lhe permite atravessar a matéria, sendo reconstituído a seguir.',
  'Os átomos do ar expandem-se gerando um campo eletromagnético antigravitacional permanente.',
  'D',
  'Erasto explica que o Espírito envolve o objeto em seu próprio fluido, tornando os elementos constitutivos do objeto temporariamente sutis e desunidos, capazes de passar pelos interstícios da matéria sólida.',
  '2ª Parte, Cap. V, item 98',
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
  215,
  'livro_mediuns',
  'No Cap. VI da 2ª Parte (Manifestações Visuais), qual é a explicação de Kardec para o mecanismo da visão espiritual nos médiuns videntes?',
  'Ocorre pela retina do olho físico, que se dilata extraordinariamente para captar a luz ultravioleta.',
  'Dá-se por efeito de uma ilusão reflexa gerada pela ingestão de certas substâncias vegetais.',
  'Resulta de uma transmissão telepática que afeta exclusivamente o nervo olfativo do médium.',
  'É uma faculdade que atua apenas quando o médium está em estado de morte aparente ou coma.',
  'Não se dá pelos olhos materiais, mas pela própria alma ou perispírito do vidente, razão pela qual se pode ver tanto com os olhos abertos quanto cerrados.',
  'E',
  'A vidência mediúnica não é uma visão puramente ótica retiniana; é uma faculdade da alma que enxerga através de sua própria sensibilidade periespiritual, permitindo ver inclusive no escuro ou de olhos vendados.',
  '2ª Parte, Cap. VI, itens 100-104',
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
  216,
  'livro_mediuns',
  'No Cap. VII da 2ª Parte, Kardec estuda a bicorporeidade e a transfiguração. O que caracteriza a "bicorporeidade"?',
  'A existência simultânea de duas almas distintas habitando um único feto biológico.',
  'O desdobramento em que o Espírito de um vivo se emancipa temporariamente do corpo físico em repouso e adquire visibilidade e tangibilidade aparente em outro local.',
  'A fusão definitiva de dois corpos materiais por meio de magnetização prolongada.',
  'O fenômeno pelo qual uma pessoa troca de corpo carnal permanentemente com outra.',
  'A capacidade de clonar o organismo biológico através do poder puramente mental.',
  'B',
  'Na bicorporeidade, o corpo físico da pessoa permanece adormecido ou em êxtase em um lugar, enquanto seu perispírito se desloca a distâncias consideráveis e condensa fluidos a ponto de se tornar visível e palpável.',
  '2ª Parte, Cap. VII, itens 114-119',
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
  217,
  'livro_mediuns',
  'Qual caso célebre da história da Igreja Católica é citado por Kardec no Cap. VII da 2ª Parte para exemplificar o fenômeno da bicorporeidade de um vivo?',
  'O desdobramento de Santo Afonso de Ligório, que foi visto ao lado do Papa Clemente XIV em Roma enquanto seu corpo permanecia em êxtase em Arienzo.',
  'A transfiguração de Moisés no Monte Sinai diante dos anciãos de Israel.',
  'O estigma de São Francisco de Assis recebido nas montanhas de Alverne.',
  'A oração de Santo Agostinho em Hipona diante das invasões dos vândalos.',
  'A aparição de Joana d''Arc diante do delfim da França em Chinon.',
  'A',
  'Em 1774, Santo Afonso de Ligório entrou em êxtase em Arienzo e ao mesmo tempo foi visto assistindo espiritualmente os últimos momentos do Papa Clemente XIV em Roma, a quatro dias de viagem.',
  '2ª Parte, Cap. VII, item 119',
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
  218,
  'livro_mediuns',
  'No Cap. VIII da 2ª Parte (Laboratório do Mundo Invisível), como os Espíritos confeccionam as roupas, joias e objetos com que se apresentam nas aparições tangíveis?',
  'Retirando peças reais de guarda-roupas terrestres e devolvendo-as sem que os donos percebam.',
  'Comprando essências etéreas no comércio espiritual de planetas vizinhos.',
  'Agindo pela vontade e pelo pensamento sobre o fluido cósmico universal, condensando-o temporariamente nas formas e cores desejadas.',
  'Tecendo fios de seda espiritual através de maquinários complexos existentes na erraticidade.',
  'Utilizando a imaginação passiva do vidente para criar uma ilusão ótica sem substância fluídica.',
  'C',
  'O pensamento e a vontade do Espírito atuam sobre o fluido cósmico universal como os químicos atuam sobre os reagentes, criando temporariamente vestuários, armas ou objetos que se desvanecem com a dispersão da vontade.',
  '2ª Parte, Cap. VIII, itens 126-130',
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
  219,
  'livro_mediuns',
  'Ainda no Cap. VIII da 2ª Parte, o que é um "agênere" na terminologia espírita adotada por Allan Kardec?',
  'Um médium curador que rejeita qualquer prece ou invocação religiosa em suas práticas.',
  'Um Espírito puro que nunca necessitou de nenhuma encarnação no plano material.',
  'Uma classe de demônio aprisionado perpetuamente em cavernas e florestas desertas.',
  'Uma variedade de aparição tangível em que o Espírito toma uma forma temporariamente viva e carnal a ponto de parecer um ser humano normal, podendo conversar e tocar as pessoas.',
  'Um indivíduo que perdeu completamente o perispírito devido a crimes cometidos na Terra.',
  'D',
  'Agênere é o estado de um Espírito que, momentaneamente revestido de matéria tangível, apresenta todas as aparências de um ser humano vivo, participando da vida comum sem que se suspeite de sua verdadeira natureza.',
  '2ª Parte, Cap. VIII, item 125',
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
  220,
  'livro_mediuns',
  'No Cap. IX da 2ª Parte (Lugares Assombrados), qual é o ensinamento dos Espíritos a respeito da fixação de certas almas em determinados castelos ou casas?',
  'Os Espíritos ficam aprisionados por feitiços e correntes mágicas enterradas nos alicerces das construções.',
  'Os Espíritos superiores escolhem locais históricos para punir os descendentes de seus antigos inimigos.',
  'Toda casa velha desabitada é obrigatoriamente habitada por falanges de demônios guardiães de riquezas.',
  'O apego físico do Espírito dura no máximo quarenta dias após o sepultamento do corpo biológico.',
  'Espíritos apegados à matéria ou que cometeram ou sofreram dramas no local permanecem retidos pela afinidade fluídica, lembranças ou remorsos, até serem esclarecidos e perdoados.',
  'E',
  'Não são as pedras ou paredes que atraem os Espíritos, mas as recordações morais de afeições ou crimes ali ocorridos. Eles deixam o local quando encontram orações, esclarecimento e desapego às paixões terrestres.',
  '2ª Parte, Cap. IX, itens 132-138',
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
  221,
  'livro_mediuns',
  'No Cap. X da 2ª Parte, Kardec divide as comunicações espíritas quanto à sua natureza moral e intelectual em quatro categorias. Quais são elas?',
  'Angélicas, demoníacas, proféticas e humanas.',
  'Grosseiras, frívolas, graves e instrutivas.',
  'Místicas, científicas, poéticas e comerciais.',
  'Teosóficas, ocultas, populares e dogmáticas.',
  'Verbais, escritas, impressas e intuitivas.',
  'B',
  'Kardec classifica as mensagens segundo a escala espírita: grosseiras (chocantes/indecentes), frívolas (levianas e zombeteiras), graves (sérias, mas nem sempre verdadeiras) e instrutivas (sólidas, profundas e morais).',
  '2ª Parte, Cap. X, itens 133-137',
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
  222,
  'livro_mediuns',
  'De acordo com o Cap. XI da 2ª Parte, qual a distinção correta entre "sematologia" e "tiptologia"?',
  'Sematologia é a linguagem dos sinais e movimentos dos corpos; tiptologia é a linguagem por pancadas ou batidas num objeto.',
  'Sematologia é a comunicação pela voz direta; tiptologia é a escrita com lápis em pranchetas.',
  'Sematologia é a visão dos fluidos; tiptologia é o canto mediúnico inspirado.',
  'Sematologia refere-se aos desenhos de médiuns pintores; tiptologia designa a cura pelas mãos.',
  'Ambas são sinônimos perfeitos que designam exclusivamente a escrita psicográfica no papel.',
  'A',
  'Sematologia é a comunicação por sinais e movimentos (uma mesa que se inclina para saudar ou negar algo); tiptologia é a comunicação através de golpes e batidas convencionais que indicam letras e palavras.',
  '2ª Parte, Cap. XI, itens 139-144',
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
  223,
  'livro_mediuns',
  'No Cap. XII da 2ª Parte, o que define especificamente a "pneumatografia"?',
  'A transmissão do pensamento do Espírito através de cabos telegráficos e instrumentos de cobre.',
  'O som de vozes ressoando no ar sem intervenção de cordas vocais humanas.',
  'A escrita obtida diretamente sem o concurso da mão do médium nem de um instrumento empunhado por encarnado.',
  'A respiração cadenciada exigida dos médiuns antes de iniciarem o trabalho psicográfico.',
  'A escrita mecânica rápida obtida exclusivamente sob transe hipnótico induzido por terceiros.',
  'C',
  'Pneumatografia (do grego pneuma, ar/espírito, e graphein, escrever) é a escrita direta deixada sobre o papel ou ardósia sem que nenhuma pessoa toque no lápis ou utilize a própria mão.',
  '2ª Parte, Cap. XII, itens 146-149',
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
  224,
  'livro_mediuns',
  'Qual a diferença essencial entre "pneumatofonia" e "psicofonia" apresentada em O Livro dos Médiuns (Cap. XII e XIV)?',
  'Pneumatofonia é a audição interna do médium; psicofonia é o grito histérico de espíritos zombeteiros.',
  'Pneumatofonia é uma ilusão auditiva subjetiva; psicofonia é a gravação sonora em fita magnética.',
  'Pneumatofonia só ocorre em cemitérios; psicofonia só acontece em recintos fechados e escuros.',
  'Na pneumatofonia a voz ressoa no ar ambiente sem utilização do aparelho vocal humano; na psicofonia o Espírito se utiliza da laringe e dos órgãos vocais do próprio médium.',
  'Pneumatofonia exige transe sonambúlico profundo; psicofonia ocorre com o médium em vigília absoluta.',
  'D',
  'Na pneumatofonia a voz se forma diretamente no espaço fluídico exterior; na psicofonia o Espírito atua sobre o centro motor da fala do médium, fazendo-o falar com sua própria boca e pregas vocais.',
  '2ª Parte, Cap. XII, item 150 / Cap. XIV, item 166',
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
  225,
  'livro_mediuns',
  'No Cap. XIII da 2ª Parte, como se define o médium psicógrafo mecânico?',
  'Aquele que elabora mentalmente cada frase e a escreve deliberadamente com sua caligrafia cotidiana.',
  'Aquele que só consegue escrever quando conectado a um aparelho de telegrafia Morse.',
  'Aquele que ouve uma voz em seu ouvido e dita as palavras para um secretário anotar.',
  'Aquele que copia mensagens previamente guardadas em sua memória subconsciente de infância.',
  'Aquele cuja mão se move por uma impulsão involuntária dada pelo Espírito comunicante, sem que o médium saiba antecipadamente o que escreve.',
  'E',
  'No médium mecânico, a mão é movida de forma inteiramente independente de sua vontade; o médium não tem consciência prévia do pensamento que está sendo grafado e só toma conhecimento ao ler o texto concluído.',
  '2ª Parte, Cap. XIII, item 157 / Cap. XV, item 179',
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
  226,
  'livro_mediuns',
  'Como funciona a mente do médium psicógrafo intuitivo segundo o Cap. XIII e XV da 2ª Parte?',
  'Sua mão é movida de forma automática e independente de qualquer participação dos seus centros cerebrais.',
  'O Espírito comunicante atua diretamente sobre o cérebro do médium; o médium assimila o pensamento transmitido e o exprime escrevendo com suas próprias palavras e vontade voluntária.',
  'O médium perde a consciência de si mesmo e acorda sem saber seu próprio nome ou localidade.',
  'A mensagem surge gravada em letras de fogo sobre a epiderme do antebraço do médium.',
  'O médium precisa adivinhar o que o Espírito deseja através da leitura da fisionomia dos assistentes.',
  'B',
  'No médium intuitivo, o Espírito age sobre a alma do médium, sugerindo as ideias. O médium as apreende e redige voluntariamente com seu vocabulário particular, sem deixar de ser fiel ao pensamento transmitido.',
  '2ª Parte, Cap. XIII, item 158 / Cap. XV, item 180',
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
  227,
  'livro_mediuns',
  'Em que consiste a faculdade do médium psicógrafo semimecânico (Cap. XIII e XV da 2ª Parte)?',
  'O médium sente a impulsão muscular involuntária na mão e no braço, mas tem consciência simultânea das palavras à medida que vão sendo grafadas.',
  'O médium escreve alternadamente uma palavra em português e outra em latim clássico.',
  'O médium desenha esquemas mecânicos industriais e plantas de engenharia sob transe sonambúlico.',
  'O médium só escreve se tiver metade do corpo paralisada por uma enfermidade congênita.',
  'A velocidade da escrita é exatamente a metade da velocidade habitual de um escrivão público.',
  'A',
  'O médium semimecânico participa das duas modalidades: sua mão é impulsionada involuntariamente pelo Espírito, mas ele tem a percepção consciente das palavras no mesmo instante em que o lápis as traça.',
  '2ª Parte, Cap. XIII, item 159 / Cap. XV, item 181',
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
  228,
  'livro_mediuns',
  'No Cap. XIV da 2ª Parte (Dos Médiuns), qual a célebre definição de médium enunciada por Allan Kardec?',
  '"Todo aquele que passou por cursos e rituais iniciáticos de magia e teosofia oriental."',
  '"Exclusivamente os indivíduos que realizam levitações e transporte tangível de objetos materiais."',
  '"Toda pessoa que sente, em um grau qualquer, a influência dos Espíritos, sendo essa faculdade inerente ao homem e não um privilégio exclusivo."',
  '"Apenas os videntes e profetas sagrados consagrados pela autoridade eclesiástica tradicional."',
  '"O ser humano perfeito e livre de qualquer imperfeição moral ou inclinação ao erro terreno."',
  'C',
  'No item 159, Kardec afirma: ''Toda pessoa que sente, num grau qualquer, a influência dos Espíritos é, por esse fato, médium. Essa faculdade é inerente ao homem; não constitui, portanto, um privilégio exclusivo''.',
  '2ª Parte, Cap. XIV, item 159',
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
  229,
  'livro_mediuns',
  'No Cap. XVI da 2ª Parte, Kardec classifica diversas variedades especiais de médiuns. O que distingue os "médiuns tiptólogos"?',
  'São aqueles que transmitem ensinamentos apenas por meio de composições musicais ao piano.',
  'São aqueles dotados de extrema lentidão para grafar pensamentos filosóficos elevados.',
  'São médiuns especializados exclusivamente no diagnóstico médico de enfermidades infecciosas.',
  'São aqueles sob cuja influência se produzem ruídos, estalos e pancadas cadenciadas para a transmissão de palavras e frases.',
  'São médiuns que só se comunicam por meio de caracteres tipográficos impressos em tipografias antigas.',
  'D',
  'Os médiuns tiptólogos possuem uma aptidão especial para facilitar a produção de ruídos percussivos e pancadas (tiptologia), permitindo que os Espíritos conversem por sinais convencionados com o alfabeto.',
  '2ª Parte, Cap. XVI, item 189',
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
  230,
  'livro_mediuns',
  'O que caracteriza os médiuns "falantes" (ou psicofônicos) de acordo com o Cap. XVI da 2ª Parte?',
  'Falam de si mesmos ininterruptamente sem permitir que os outros presentes se manifestem na reunião.',
  'Falam apenas idiomas que aprenderam formalmente na infância e nas salas de aula acadêmicas.',
  'Necessitam que os assistentes lhes façam perguntas gritando para que consigam responder com clareza.',
  'Têm a voz modificada permanentemente mesmo quando não estão em trabalho mediúnico.',
  'São aqueles através de cujos órgãos vocais os Espíritos se exprimem diretamente aos ouvintes, com entonações e modulações da entidade manifestante.',
  'E',
  'Nos médiuns psicofônicos ou falantes, o Espírito se comunica pela palavra falada, servindo-se dos órgãos vocais do médium, muitas vezes reproduzindo o tom de voz e o sotaque que possuía em vida.',
  '2ª Parte, Cap. XVI, item 190',
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
  231,
  'livro_mediuns',
  'No Cap. XVII da 2ª Parte (Formação dos Médiuns), qual conselho Kardec oferece ao principiante que deseja desenvolver a psicografia?',
  'Jejuar rigorosamente por trinta dias e isolar-se em grutas longe de qualquer contato humano.',
  'Colocar-se em atitude de recolhimento, prece sincera a Deus e ao bom guia, segurando o lápis com flexibilidade e perseverando com paciência sem desanimar nas primeiras tentativas estéreis.',
  'Tomar substâncias estimulantes fortes para acelerar o ritmo dos batimentos cardíacos e do fluxo sanguíneo.',
  'Contratar médiuns famosos para escreverem em seu lugar sob um compromisso de sigilo financeiro.',
  'Forçar a mão mecanicamente com pesos de chumbo até vencer a rigidez dos músculos carpianos.',
  'B',
  'Kardec recomenda a calma, a humildade e a disciplina: segurar o lápis suavemente no papel, recolher-se em oração fervorosa pedindo a assistência do anjo guardião e exercitar-se com constância e serenidade.',
  '2ª Parte, Cap. XVII, itens 200-209',
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
  232,
  'livro_mediuns',
  'No Cap. XVIII da 2ª Parte (Inconvenientes e Perigos da Mediunidade), qual advertência Kardec faz sobre o desenvolvimento mediúnico em crianças pequenas?',
  'É sumamente inconveniente e perigoso, pois sua organização física e nervosa frágil pode sofrer abalos danosos com a exaltação prematura da sensibilidade.',
  'Deve ser estimulado ao máximo desde a mais tenra idade para que se tornem celebridades mundiais.',
  'É indiferente, pois a mediunidade independe completamente do estado biológico ou do sistema nervoso do indivíduo.',
  'Só deve ser praticado se a criança for submetida diariamente a transes de levitação corporal.',
  'As crianças nunca possuem aptidão mediúnica, que só surge invariavelmente após os quarenta anos de idade.',
  'A',
  'Na infância, a fragilidade dos órgãos e do sistema nervoso recomenda resguardo. A excitação da imaginação e das forças fluídicas em cérebros jovens pode comprometer a saúde e o desenvolvimento equilibrado.',
  '2ª Parte, Cap. XVIII, item 221',
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
  233,
  'livro_mediuns',
  'A mediunidade é causa de loucura? Como Allan Kardec elucida essa questão no Cap. XVIII da 2ª Parte?',
  'Sim, a mediunidade produz inevitavelmente a demência e o delírio persecutório em todos os praticantes.',
  'Apenas os médiuns videntes tornam-se incuravelmente loucos devido ao pavor das aparições espirituais.',
  'Não; a mediunidade não gera a loucura quando bem conduzida, embora perturbações possam sobrevir em mentes predispostas fragilizadas pelo orgulho, medo ou excessos.',
  'Qualquer pessoa que sinta arrepios na coluna vertebral desenvolverá desequilíbrio mental irreversível.',
  'A loucura é uma exigência prévia dos Espíritos para concederem a faculdade psicográfica.',
  'C',
  'A mediunidade não ocasiona a loucura por si mesma. Em cérebros orgânica e psiquicamente sadios, ela se exerce com perfeita calma; o desequilíbrio decorre de fraquezas e predisposições patológicas pré-existentes.',
  '2ª Parte, Cap. XVIII, item 222',
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
  234,
  'livro_mediuns',
  'No Cap. XIX da 2ª Parte, ao examinar o papel do médium nas comunicações, qual metáfora clássica é empregada para explicar como o Espírito utiliza os recursos do médium?',
  'A do astrônomo observando estrelas fixas através de um telescópio descalibrado.',
  'A do escravo acorrentado que repete mecanicamente as ordens do senhor feitor.',
  'A de uma bússola magnética que sempre aponta para o polo sul geográfico.',
  'A do intérprete ou instrumento musical que expressa a música segundo a afinação e as notas disponíveis no teclado do médium.',
  'A de um marionete manipulado por fios de náilon diante de uma plateia teatral.',
  'D',
  'Kardec compara o Espírito a um músico virtuoso: se o piano (o cérebro e o conhecimento do médium) estiver desafinado ou tiver poucas teclas, o músico terá de limitar sua execução aos recursos do instrumento.',
  '2ª Parte, Cap. XIX, itens 223-225',
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
  235,
  'livro_mediuns',
  'Segundo o Cap. XIX da 2ª Parte, um Espírito que deseja ditar uma mensagem em idioma que o médium desconhece totalmente enfrenta qual dificuldade principal?',
  'O Espírito é proibido pelas leis divinas de falar línguas diferentes da língua nativa do médium.',
  'O lápis utilizado na escrita quebra-se automaticamente devido ao choque de dialetos antagônicos.',
  'A mensagem só pode ser escrita se for traduzida previamente por um dicionário impresso colocado sob a mesa.',
  'Nenhuma dificuldade, pois a matéria orgânica humana não opõe resistência à pronúncia de línguas desconhecidas.',
  'Grande dificuldade, porque o cérebro do médium carece dos vocábulos e sons correspondentes em sua memória orgânica, exigindo um esforço mecânico fluídico muito maior e raro.',
  'E',
  'Falar ou escrever numa língua que o médium não compreende (xenoglossia) exige do Espírito um esforço puramente mecânico de guiar a mão letra por letra, já que inexistem as matrizes cerebrais prévias na memória do intermediário.',
  '2ª Parte, Cap. XIX, itens 226-233',
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
  236,
  'livro_mediuns',
  'No Cap. XX da 2ª Parte (Influência Moral do Médium), qual é o principal fator que atrai a assistência e a comunicação dos Espíritos Superiores?',
  'A posição social de destaque, a opulência financeira e a formação acadêmica erudita do médium.',
  'A humildade sincera, o desinteresse material, a pureza de sentimentos e o devotamento constante ao bem do próximo.',
  'O uso de vestes cerimoniais brancas e o consumo de incensos aromáticos durante as sessões.',
  'A posse de relíquias sagradas e anéis magnetizados por sacerdotes consagrados.',
  'A habilidade de realizar manifestações de efeitos físicos barulhentos para atrair multidões.',
  'B',
  'A afinidade moral é a lei que rege a atração dos Espíritos: os bons vão espontaneamente para onde encontram bondade, sinceridade, humildade e caridade desinteressada, afastando-se do orgulho e da vaidade.',
  '2ª Parte, Cap. XX, itens 226-230',
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
  237,
  'livro_mediuns',
  'Por que, de acordo com o Cap. XX da 2ª Parte, médiuns com imperfeições morais notórias conseguem às vezes receber excelentes mensagens doutrinárias?',
  'Porque bons Espíritos aproveitam a aptidão fluídica do médium para instruir os presentes e despertar a consciência do próprio médium para sua urgente reforma moral.',
  'Porque os Espíritos superiores são indiferentes à moralidade dos instrumentos humanos que utilizam.',
  'Porque os Espíritos inferiores adoram pregar a mais sublime virtude cristã para se converterem publicamente.',
  'Porque a faculdade mediúnica apaga todos os vícios e pecados do indivíduo no exato momento do transe.',
  'Trata-se sempre de uma farsa planejada em que o próprio médium inventa a mensagem virtuosa.',
  'A',
  'Kardec esclarece que os bons Espíritos utilizam a aptidão do médium para benefício do grupo e para advertir o próprio médium que, ao escrever verdades salutares, condena suas próprias imperfeições.',
  '2ª Parte, Cap. XX, item 228',
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
  238,
  'livro_mediuns',
  'No Cap. XXI da 2ª Parte (Influência do Meio), qual condição ambiental é fundamental para o sucesso e seriedade de uma reunião mediúnica?',
  'A presença de uma grande plateia ruidosa que desafie e questione publicamente os médiuns.',
  'A escuridão total e absoluta acompanhada de música estridente e instrumentos de percussão.',
  'O recolhimento de pensamentos, a harmonia moral e a concordância de sentimentos elevados voltados para o bem comum.',
  'A cobrança de ingressos para selecionar apenas assistentes de alto poder aquisitivo financeiro.',
  'A realização das sessões exclusivamente à meia-noite em noites de lua cheia de tempestade.',
  'C',
  'A assembleia dos participantes forma uma corrente coletiva de pensamentos. Se houver desunião, ironia ou leviandade, os Espíritos sérios se retiram, deixando o campo livre aos Espíritos zombeteiros.',
  '2ª Parte, Cap. XXI, itens 231-233',
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
  239,
  'livro_mediuns',
  'No Cap. XXII da 2ª Parte (Da Mediunidade nos Animais), qual a conclusão doutrinária apresentada pelo Espírito Erasto a respeito da possibilidade de os animais serem médiuns?',
  'Os animais podem ser médiuns mecânicos e intuitivos idênticos aos seres humanos se forem treinados domesticamente.',
  'Cães e cavalos são os melhores médiuns psicógrafos conhecidos em virtude de sua extrema lealdade ao homem.',
  'Apenas os animais selvagens que habitam florestas virgens possuem percepção dos fluidos espirituais.',
  'Os animais não podem ser médiuns, pois lhes falta a aptidão intelectual e moral para assimilar o pensamento espiritual, sendo apenas passíveis de ação mecânica externa e temporária.',
  'Os animais possuem uma mediunidade superior à dos humanos por não possuírem livre-arbítrio culpável.',
  'D',
  'Erasto esclarece de forma categórica que a mediunidade exige a união fluídica de pensamentos e sentimentos inteligentes. O Espírito pode assustar ou mover mecanicamente um animal, mas o animal não serve de médium.',
  '2ª Parte, Cap. XXII, item 236',
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
  240,
  'livro_mediuns',
  'No Cap. XXIII da 2ª Parte (Da Obsessão), Kardec define as três formas principais pelas quais o domínio dos maus Espíritos se manifesta. Quais são elas?',
  'Obsessão passageira, possessão biológica e catalepsia mórbida.',
  'Hipnose carnal, sonambulismo perverso e poltergeist doméstico.',
  'Demência juvenil, mania religiosa e histeria contagiosa.',
  'Simulação voluntária, fascinação lúcida e exorcismo ritual.',
  'Obsessão simples, fascinação e subjugação.',
  'E',
  'O Cap. XXIII divide a obsessão em três graus: obsessão simples (importunação consciente), fascinação (ilusão intelectual grave em que o obsidiado não vê o erro) e subjugação (domínio constrangedor da vontade física e moral).',
  '2ª Parte, Cap. XXIII, itens 237-240',
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
  241,
  'livro_mediuns',
  'No Cap. XXIII da 2ª Parte, por que a "fascinação" é considerada a forma mais grave e perigosa de obsessão?',
  'Porque paralisa imediatamente os membros e impede o médium de caminhar ou alimentar-se.',
  'Porque produz uma ilusão direta no julgamento do médium, fazendo-o tomar os maiores absurdos e erros por verdades sublimes, repelindo os conselhos dos amigos sinceros.',
  'Porque transmite enfermidades contagiosas aos familiares mais próximos do obsidiado.',
  'Porque obriga o médium a praticar atos de violência física extrema contra si mesmo em praça pública.',
  'Porque não existe nenhum Espírito protetor capaz de visitar quem caiu em fascinação.',
  'B',
  'Na fascinação, o médium acredita piamente que está sob a tutela de uma grande figura espiritual, considerando sublimes as maiores tolices e rejeitando todo conselho de bom senso por achar que os outros sentem inveja dele.',
  '2ª Parte, Cap. XXIII, item 239',
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
  242,
  'livro_mediuns',
  'O que caracteriza a "subjugação" (outrora denominada possessão) segundo o Cap. XXIII da 2ª Parte de O Livro dos Médiuns?',
  'A constrição moral ou física em que o Espírito dominador paralisa a vontade da vítima, obrigando-a a agir ou falar contra o seu próprio discernimento consciente.',
  'A compra da alma do médium mediante contrato assinado em pergaminho antigo.',
  'A saída irreversível da alma humana do seu corpo, sendo o organismo biológico adotado por um Espírito animalizado.',
  'Uma perturbação respiratória ligeira que cessa quando o médium ingere água fluidificada.',
  'O esquecimento repentino das noções gramaticais de sua língua pátria durante a juventude.',
  'A',
  'A subjugação é uma ligação fluídica opressiva que paralisa o livre-arbítrio: a vítima tem consciência de sua situação absurda, mas não consegue comandar seus próprios membros ou sua boca por estar moral ou fisicamente subjugada.',
  '2ª Parte, Cap. XXIII, item 240',
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
  243,
  'livro_mediuns',
  'No Cap. XXIV da 2ª Parte (Identidade dos Espíritos), qual é o critério mais seguro para discernir se uma comunicação procede verdadeiramente de um Espírito Superior?',
  'A assinatura pomposa e o uso repetido de títulos nobiliárquicos e acadêmicos na mensagem.',
  'A presença de rimas poéticas perfeitas e palavras rebuscadas tiradas de dicionários arcaicos.',
  'A elevação dos pensamentos, a pureza da moralidade, a ausência de contradições lógicas e a linguagem digna, sóbria e benevolente.',
  'O fato de a escrita surgir em papel timbrado especial com selos e carimbos sacramentais.',
  'A rapidez vertiginosa da caligrafia e a força com que o lápis fura a folha de papel.',
  'C',
  'Os Espíritos superiores julgam-se por suas palavras e princípios: sua linguagem é sempre simples, nobre, caridosa e destituída de orgulho, jamais contradizendo as leis da lógica, da ciência e da fraternidade universal.',
  '2ª Parte, Cap. XXIV, itens 255-268',
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
  244,
  'livro_mediuns',
  'Em O Livro dos Médiuns (2ª Parte, Cap. XXV e XXVI), qual é a orientação doutrinária para aqueles que desejam consultar os Espíritos a respeito de datas de morte, loterias ou localização de tesouros materiais ocultos?',
  'Os Espíritos superiores fornecem alegremente números da sorte para enriquecer médiuns devotados à causa.',
  'Deve-se sempre evocar reis e tesoureiros do passado, que guardam com exatidão os mapas dos tesouros.',
  'A doutrina recomenda o uso do pêndulo de cristal sobre moedas de ouro para encontrar riquezas subterrâneas.',
  'Os bons Espíritos recusam responder a futilidades ou perguntas que sirvam à cobiça e especulação, sendo tais questões campo fértil para mistificações de espíritos zombeteiros.',
  'Todas as perguntas sobre fortuna material são atendidas prontamente se houver promessa de doação futura.',
  'D',
  'O objetivo das comunicações com o Além é o progresso moral e a consolação. A Providência Divina não permite que o futuro ou ganhos materiais fáceis sejam revelados, punindo a leviandade com mistificações decepcionantes.',
  '2ª Parte, Cap. XXVI, itens 286-295',
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
  245,
  'livro_mediuns',
  'No Cap. XXVIII da 2ª Parte (Do Charlatanismo e da Fraude), qual princípio evangélico fundamental Kardec reafirma a respeito do exercício da faculdade mediúnica?',
  '"Ao trabalhador é digno seu salário em qualquer ramo do comércio da fé."',
  '"Aquele que mais arrecada fundos financeiros na reunião terá maior assento no Reino dos Céus."',
  '"Toda manifestação pública de efeitos físicos deve pagar impostos aos governantes locais."',
  '"A faculdade mediúnica cresce proporcionalmente ao preço cobrado pelas consultas individuais."',
  '"Dai de graça o que de graça recebestes", não devendo a mediunidade jamais ser convertida em profissão lucrativa ou meio de vida mercantil.',
  'E',
  'A mediunidade não é propriedade do homem e não deve ser mercadoria vendida. Fazer dela um negócio é afastar os bons Espíritos e atrair a zombaria e a exploração de entidades interesseiras e inferiores.',
  '2ª Parte, Cap. XXVIII, itens 304-313',
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
  246,
  'livro_mediuns',
  'No Cap. XXIX da 2ª Parte (Das Reuniões e das Sociedades Espíritas), como Allan Kardec classifica e descreve as "reuniões instrutivas"?',
  'Assembleias voltadas exclusivamente para a diversão social e jogos de salão entre jovens curiosos.',
  'Reuniões caracterizadas pela gravidade, ordem e silêncio, onde se busca o ensino dos Espíritos para o aperfeiçoamento moral e o esclarecimento filosófico sólido.',
  'Sessões onde o objetivo principal é produzir ruídos estrondosos e quebra de objetos para convencer incrédulos teimosos.',
  'Encontros para discussão política e partidária visando à eleição de candidatos espíritas aos parlamentos.',
  'Sessões teatrais de ilusionismo para demonstrar a fraqueza dos sentidos corpóreos dos espectadores.',
  'B',
  'Kardec distingue reuniões fúteis, experimentais e instrutivas. As instrutivas são o verdadeiro centro do estudo espírita, exigindo gravidade, concentração de propósitos e busca pelo autoaperfeiçoamento e caridade.',
  '2ª Parte, Cap. XXIX, itens 324-329',
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
  247,
  'livro_mediuns',
  'No Cap. XXXI da 2ª Parte (Dissertações Espíritas), qual é a célebre recomendação dada pelo apóstolo Erasto sobre a aceitação das comunicações mediúnicas?',
  '"Mais vale rejeitar noventa e nove verdades do que admitir uma única falsidade, uma só mentira."',
  '"Mais vale aceitar cem mentiras piedosas do que ferir a vaidade de um médium prestigiado."',
  '"Tudo o que for psicografado com rapidez e beleza caligráfica deve ser aceito como dogma inegável."',
  '"Os ensinamentos dos Espíritos não precisam ser submetidos à razão humana nem à lógica comum."',
  '"O nome ilustre assinado ao final da mensagem garante categoricamente a infalibilidade do seu conteúdo."',
  'A',
  'Na sua dissertação no Capítulo XXXI, item XX, Erasto estabelece a regra de ouro da vigilância crítica: na dúvida, rejeite a mensagem até que sua veracidade e lógica sejam plenamente atestadas.',
  '2ª Parte, Cap. XXXI, item XX (Erasto)',
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
  248,
  'livro_mediuns',
  'Na dissertação de Santo Agostinho transcrita no Cap. XXXI da 2ª Parte, que conselho fundamental é dado aos médiuns sobre o uso de suas faculdades?',
  'Exigir veneração pública de seus concidadãos como emissários dos céus.',
  'Não permitir que outros médiuns escrevam na mesma cidade para evitar concorrência desleal.',
  'Lembrar-se de que a mediunidade é uma graça concedida para o próprio adiantamento moral, devendo cultivar a modéstia, o amor aos semelhantes e o desapego aos aplausos do mundo.',
  'Utilizar sua mediunidade para prever catástrofes climáticas e cobrar por avisos meteorológicos.',
  'Desprezar os ensinamentos dos Evangelhos em favor de novas revelações exclusivas.',
  'C',
  'Santo Agostinho convida os médiuns a considerarem a faculdade como um compromisso de resgate e serviço cristão: aquele que se envaidece cai nas garras da obsessão; quem permanece humilde atrai os anjos do Senhor.',
  '2ª Parte, Cap. XXXI, item IX (Santo Agostinho)',
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
  249,
  'livro_mediuns',
  'No Cap. XXXII da 2ª Parte (Vocabulário Espírita), como é definido o termo "Psicofonia" introduzido na terminologia espírita?',
  'Transmissão do pensamento do Espírito através de mensagens telegráficas ou por cabos submarinos.',
  'A capacidade de ouvir ruídos subterrâneos causados pelo movimento das placas tectônicas.',
  'O cântico sagrado entoado por corais mediúnicos em solenidades fúnebres de desobsessão.',
  'Manifestação dos Espíritos pela voz de um médium falante, cujos órgãos vocais são utilizados para a emissão das palavras.',
  'A escrita cursiva no ar por meio de faíscas fosforescentes geradas pelo perispírito.',
  'D',
  'No vocabulário espírita elaborado por Allan Kardec, psicofonia é a transmissão do pensamento dos Espíritos através da palavra oral pelo concurso de um médium falante.',
  '2ª Parte, Cap. XXXII (Vocabulário Espírita)',
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
  250,
  'livro_mediuns',
  'No Vocabulário Espírita (2ª Parte, Cap. XXXII), qual a definição precisa do termo "Perispírito" adotada por Allan Kardec na Codificação?',
  'O corpo carnal do homem enquanto se encontra em estado de decomposição orgânica no túmulo.',
  'A substância densa e combustível que forma o núcleo incandescente dos planetas rochosos.',
  'A aura colorida visível apenas aos aparelhos fotográficos eletrônicos e microscópios atômicos.',
  'A faculdade que permite ao médium levitar seu próprio peso sem assistência de fluidos espirituais.',
  'O envoltório semimaterial da alma, que nos encarnados serve de laço intermediário entre o Espírito e a matéria corporal, e nos desencarnados constitui seu corpo fluídico.',
  'E',
  'Kardec criou o neologismo ''Perispírito'' (peri = em torno de; spírito = espírito) para designar o corpo fluídico semimaterial e sutil que envolve a alma, sendo o veículo de suas manifestações no plano físico e espiritual.',
  '2ª Parte, Cap. XXXII (Vocabulário Espírita)',
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
