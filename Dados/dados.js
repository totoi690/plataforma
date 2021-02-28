let Dados = {
    biologia: {
        nome: "Biologia",
        id: 1,
        temas: {
            sistemacardiovascular: {
                nome: "Sistema Cardiovascular",
                id: 1,
                gif: "https://i.pinimg.com/originals/fd/5f/db/fd5fdb1bb1b91faab600b253bcddc101.gif",
                perguntas: [{
                    topico: "Sangue",
                    perguntas: [{
                        pergunta: "Quais as diferenças entre sangue venoso e sangue arterial?",
                        resposta: "VENOSO: sangue pobre em oxigênio e rico em CO2.ARTERIAL: sangue rico em oxigênio e pobre em CO2."
                    }, {
                        pergunta: "Quais as diferenças entre veias e artérias?",
                        resposta: "VEIAS: vaso que CHEGA do coração, com válvulas. ARTÉRIAS: vaso que SAI do coração, parede mais grossa"
                    }, ]
                }, {
                    topico: "Coração",
                    perguntas: [{
                            pergunta: "Quantos átrios e quantos ventrículos tem no coração?",
                            resposta: "2 átrios e 2 ventrículos"
                        },
                        {
                            pergunta: "Qual artéria sai do coração e leva o sangue pro corpo?",
                            resposta: "Artéria aorta"
                        }, {
                            pergunta: "O sangue chega nos átrios ou ventrículos? Sai por onde?",
                            resposta: "Chega nos átrios e sai dos ventrículos"
                        }, {
                            pergunta: "Qual átrio recebe sangue venoso? De quais vasos? De onde os vasos vêm?",
                            resposta: "Átrio DIREITO, das VEIAS CAVAS SUPERIOR E INFERIOR, vêm do CORPO"
                        }, {
                            pergunta: "Qual ventrículo envia sangue venoso? Para qual órgão? Por meio de qual vaso?",
                            resposta: "Ventrículo DIREITO, para o PULMÃO, por meio da ARTÉRIA PULMONAR"
                        }, {
                            pergunta: "Qual átrio recebe sangue arterial? De quais vasos",
                            resposta: "Átrio ESQUERDO, das VEIAS CAVAS SUPERIOR E INFERIOR, vêm do CORPO"
                        }, {
                            pergunta: "Qual ventrículo recebe sangue arterial? Para qual órgão? Por meio de qual vaso?",
                            resposta: "Ventrículo DIREITO, para o PULMÃO, por meio da ARTÉRIA PULMONAR"
                        }, {
                            pergunta: "Quais são as quatro válvulas cardíacas? Onde cada uma fica?",
                            resposta: "TRÍCÚSPIDE: entre o átrio direito e o ventrículo direitoBICÚSPIDE: entre o átrio esquerdo e o ventrículo esquerdoAÓRTICA: na entrada da artéria aórtaTRÍCÚSPIDE: na entrada da artéria pulmonar"
                        }, {
                            pergunta: "Caracterize os movimentos de sístole e diástole, dizendo em qual o sangue entra e em qual sai",
                            resposta: "SÍSTOLE: CONTRAÇÃO → sangue entra no coração  DÍALOLE: RELAXAMENTO → sangue saí do coração"
                        },
                    ]
                }, ]
            },
            conceitosdeecologia: {
                nome: "Conceitos de Ecologia",
                id: 2,
                gif: "https://cdn.dribbble.com/users/969828/screenshots/2857364/food_chain_dribbble_v2.gif",
                perguntas: [{
                    topico: ' CONCEITOS BÁSICOS',
                    perguntas: [
                      {
                        pergunta: '- **Defina** cada um dos conceitos',
                        resposta: '',
                        nestedQuestions: [
                          {
                            destaque: '- **POPULAÇÃO**',
                            resposta: '- Conjunto de indivíduos da mesma espécie que vivem na mesma área e época'
                          },
                          {
                            destaque: '- **COMUNIDADE (BIOCENOSE)**',
                            resposta: '- Conjunto de populações de diferentes espécies que vivem na mesma área e época'
                          },
                          {
                            destaque: '- **ECOSSISTEMA**',
                            resposta: '- Interação entre fatores bióticos e abióticos'
                          },
                          {
                            destaque: '- **BIOSFERA**',
                            resposta: '- Conjunto de todas as regiões do planeta onde são encontrados seres vivos'
                          },
                          {
                            destaque: '- **BIOMA**',
                            resposta: '- Ecossistemas com características semelhantes'
                          },
                          { destaque: '- **HABITAT**', resposta: '- Lugar onde vive' },
                          {
                            destaque: '- **NICHO ECOLÓGICO**',
                            resposta: '- Papel do organismo na comunidade'
                          }
                        ]
                      }
                    ]
                  }, {
                    topico: ' NÍVEIS TRÓFICOS',
                    perguntas: [
                      {
                        pergunta: '- **Defina** cada um dos níveis tróficos, sua **função** e **quais organismos** geralmente as ocupam',
                        resposta: '',
                        nestedQuestions: [
                          {
                            destaque: '- **CONSUMIDORES**',
                            resposta: '- Se alimentam dos organismos de outros níveis'
                          },
                          {
                            destaque: '- **PRODUTORES**',
                            resposta: '- Produzem matéria orgânica e são base das cadeias alimentares - Ocupada por organismos autótrofos (plantas e algas)'
                          },
                          {
                            destaque: '- **DECOMPOSITORES**',
                            resposta: '- Reciclam a matéria orgânica, geralmente ocupada por fungos e bactérias - *OBS*: Animais necrófagos (que comem animais mortos), como os urubus, e animais detritívoros (que comem restos de folhas, fezes, etc.), como as minhocas, NÃO são decompositores.'
                          }
                        ]
                      }
                    ]
                  }, {
                    topico: ' CADEIAS E TEIAS ALIMENTARES',
                    perguntas: [
                      {
                        pergunta: '- Qual a diferença entre **teia** e **cadeia alimentar**?',
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7f9639b1-2b1d-47cd-86a7-58bedb90ddd2/cadeia_alimentar.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210220T013000Z&X-Amz-Expires=86400&X-Amz-Signature=b32d2852f78190b908883a817b305e070adab8fcaa331c31ad2facd74b4f4317&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22cadeia_alimentar.png%22",
                        resposta: '- Enquanto a **cadeia** é uma sequência de populações onde uma serve de alimento a outra, a **teia** é um conjunto de cadeias alimentares (na teia um organismo pode ocupar mais de um nível trófico)'
                      }
                    ]
                  } ]
            },
            transpiracaovegetal: {
                nome: "Transpiração Vegetal",
                id: 3,
                gif: "https://media0.giphy.com/media/1iLVjz6PbgRuOOxa/giphy.gif",
                perguntas: [{
                  topico: 'Conceitos básicos',
                  perguntas: [
                    {
                      pergunta: '- Qual o **papel** da transpiração?',
                      resposta: '- Regulação térmica e condução da seiva bruta'
                    },
                    {
                      pergunta: '- Qual o **papel** da **cutícula**? Do que é composta? Que problema a **quantidade excessiva** gera para a planta?',
                      resposta: '- Composta por substâncias hidrofóbicas (cera), dificulta a saída de água - **PROBLEMA**: dificulta a entrada de CO2'
                    },
                    {
                      pergunta: '- Quais são os **tipos** de transpiração dos vegetais? São **constantes**?',
                      resposta: '- **Cuticular** → constante, pela cutícula - **Estomática** → variável, pelos estômatos'
                    }
                  ]
                }, {
                  topico: 'Estômatos',
                  perguntas: [
                    {
                      pergunta: '- Qual o **papel do estômato** para a planta?',
                      resposta: '- Executar trocas gasosas e permitir a fotossíntese'
                    },
                    {
                      pergunta: '- Identifique no estômato abaixo as **estruturas**',
                      imagemPergunta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/66692ff8-f6db-4379-b052-dbf04707a4f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210220T141543Z&X-Amz-Expires=86400&X-Amz-Signature=b1e2f902ab52b03c659d779ab7114f434d659b624956746e4605048e21634b9c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
                      resposta: `- I -> Ostíolo
                      - II -> Célula-Guarda
                      - III -> Célula-Companheira`
                    },
                    {
                      pergunta: '- Do que o **movimento estomático** depende?',
                      resposta: '',
                      nestedQuestions: [
                        {
                          pergunta: '- **Quantidade de água nas células-guarda**',
                          resposta: '- MUITA ÁGUA → ABRE - POUCA ÁGUA → FECHA'
                        },
                        {
                          pergunta: '- **Concentração de íons K+ nas células guarda**',
                          resposta: '- MUITO CONCENTRADO → ABRE - POUCO CONCENTRADO → FECHA'
                        }
                      ]
                    },
                    {
                      pergunta: '- Quais são os mecanismos de **abertura** e **fechamento**?',
                      resposta: '',
                      nestedQuestions: [
                        {
                          destaque: '- **HIDROATIVO**',
                          resposta: '- SEM ÁGUA → FECHA DE QUALQUER MODO - COM ÁGUA → PODEM ABRIR'
                        },
                        {
                          destaque: '- **FOTOATIVO**',
                          resposta: '- COM LUZ → ABREM - SEM LUZ → FECHAM'
                        },
                        {
                          destaque: '- **CONCENTRAÇÃO DE CO2**',
                          resposta: '- POUCO CO2 E CO2 ÓTIMO → PODE ABRIR - MUITO CO2 → FECHA DE QUALQUER MODO'
                        },
                        {
                          pergunta: '- **EXERCÍCIO**: Para uma planta abrir os estômatos, como devem estar a **água no solo, a luz e a concentração de CO2 no ambiente**?',
                          resposta: '- ÁGUA: deve ter - LUZ: deve ter - CO2: pouco ou o suficiente'
                        }
                      ]
                    },
                    {
                      pergunta: '- Como é a **curva de fechamento estomático**?',
                      imagemResposta: 'https://djalmasantos.files.wordpress.com/2011/05/0711.jpg',
                      nestedQuestions: [
                        {
                          pergunta: '- O que a linha, quando fica **constante**, representa?',
                          resposta: '- Representa o **fechamento total dos estômatos** e a permanência apenas da **transpiração cuticular**'
                        }
                      ]
                    }
                  ]
                } ]
            },
            biotecnologia: {
                nome: "Biotecnologia",
                id: 4,
                gif: "https://thumbs.gfycat.com/InfatuatedCleverInexpectatumpleco-max-1mb.gif",
                perguntas: [{
                    topico: "DNA Recombinante",
                    perguntas: [{
                            pergunta: "O que é?",
                            resposta: "Molécula híbrida de DNA obtida pela união de moléculas de DNA de fontes biologicamente diferentes",
                        },
                        {
                            pergunta: "Como é feito?",
                            resposta: "Corte de moléculas de DNA em que se tem interesse e ligação das extremidades",
                        },
                        {
                            pergunta: "Quais enzimas são utilizadas e quais suas funções?",
                            resposta: `- <span class="bold">Enzimas de restrição</span>: corte do DNA nos segmentos escolhidos 
                        - <span class="bold">DNA ligase</span>: ligação das extremidades`,
                        },
                    ]
                }, {
                    topico: "Organismos geneticamente modificados",
                    perguntas: [{
                            pergunta: "O que é?",
                            resposta: "É um organismo que teve seu material genético modificado por alguma técnica de engenharia genética"
                        },
                        {
                            pergunta: "Qual a diferença para um organismo transgênico?",
                            resposta: "Um organismo só é chamado de transgênico quando são incorporados genes de OUTRA ESPÉCIE"
                        },
                        {
                            pergunta: "Cite algumas aplicações",
                            resposta: `- Produção de medicamentos
                        - Variação de plantas resistentes a pragas
                        - Aumento do valor nutricional de alimentos"`
                        }
                    ]
                }, {
                    topico: "Teste de DNA",
                    perguntas: [{
                            pergunta: "Cite algumas aplicações",
                            resposta: "É um organismo que teve seu material genético modificado por alguma técnica de engenharia genética"
                        },
                        {
                            pergunta: "Como analisar?",
                            resposta: "Um organismo só é chamado de transgênico quando são incorporados genes de OUTRA ESPÉCIE"
                        },
                        {
                            pergunta: "<span class='bold'>EXERCÍCIO:</span> Com as fitas de DNA a seguir, identifique quem é mais provável de ser o filho biológico dos pais",
                            imagemPergunta: "https://d2q576s0wzfxtl.cloudfront.net/2018/04/10151033/130.png",
                            resposta: `O filho é o indivíduo III`
                        }
                    ]
                }, {
                    topico: "PCR",
                    perguntas: [{
                        pergunta: "O que é?",
                        resposta: "Multiplicação de um trecho específico do DNA milhares de vezes sem a utilização de organismos vivos"
                    }]
                }]
            },            
            conducaodeseiva: {
                nome: "Condução de Seiva",
                id: 5,
                gif: "https://media4.giphy.com/media/3oEjHOUcNRKgpqTHiM/giphy.gif",
                perguntas: [{
                    topico: "Xilema",
                    perguntas: [{
                        pergunta: "Pelo que é composto?",
                        resposta: "Água e sais minerais"
                    },{
                        pergunta: "Quais são os dois tipos de células condutoras do xilema? Quais as caracteristicas de cada uma?",
                        resposta: "<span class='bold'>Traqueídes</span> são células finas. Na extremidade de cada traqueíde, assim como lateralmente, há uma série de pontuações ou poros (pequeníssimos orifícios) que permitem a passagem de seiva no sentido longitudinal e lateral.  Menores que as traqueídes, porém mais longos , os <span class='bold'>elementos de vaso</span> também possuem pontuações laterais que permitem a passagem da seiva. Sua principal característica é que em suas extremidades as paredes são perfuradas, isto é, não há parede divisória totalmente isolante entre uma e outra célula."
                    }, {
                        pergunta: "Além da função de condução da seiva, os vasos do xilema também apresentam outra função muito importante. Qual? Que substância permite isso?",
                        resposta: "Função de SUSTENTAÇÃO, por meio da impregnação com a LIGNINA"
                    },{
                        pergunta: "Quais os quatro mecanismos utilizados para a condução da seiva inorgânica? Qual o sentido da condução?",
                        resposta: "Pressão da raiz, coesão e adesão, transpiração e fotossíntese. Sentido raiz → folhas"
                    },{
                        pergunta: "Quais são as duas vias de transporte horizontal?",
                        resposta: "Apoplasto (entre as paredes celulares) e simplasto (Pelo interior do xilema com transporte ativo)"
                    }, ]
                }, {
                    topico: "Floema",
                    perguntas: [{
                        pergunta: "Pelo que é composto?",
                        resposta: "Água e substâncias orgânicas"
                    },{
                        pergunta: "Qual a estrutura do floema?",
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1cbba7e-8c6f-4a64-aaec-725c60007dc8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T202325Z&X-Amz-Expires=86400&X-Amz-Signature=ffa43108b27e7dfafaa21f965ee592a952d0f7a5838467ee9ed76edcdc2cfd2d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                    }, {
                        pergunta: "O que é a hipótese de Munch?",
                        resposta: "Água sai do xilema, vai pro floema e 'arrasta' as substâncias para baixo; depois, a água volta para o floema",
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f9bd17ca-7616-4fa4-8c89-c91491c857f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T202414Z&X-Amz-Expires=86400&X-Amz-Signature=c1d4a5b89cc07efa0ceae8240004f873d5f6228521fd0118c8fa52bc0e1b9499&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                    },{
                        pergunta: "O que é o experimento de Malpighi? Quais as consequências? O que ele prova?",
                        resposta: "Retirada de um anel superficial do tronco da árvore (retirada do floema)",
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/500979a0-8155-4d83-a07b-1ccc1e678ffc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T202450Z&X-Amz-Expires=86400&X-Amz-Signature=f05436e5879db9ab3fcd2e8feff08b64b1c237b9051139e8f08da88dc25bcaec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                    },{
                        pergunta: "Qual o sentido de condução do floema?",
                        resposta: "Embora o sentido normal seja folha→raiz, o xilema pode percorrer o caminho inverso"
                    }, ]
                }, ]
            },
            zoologia01: {
                nome: "Zoologia I",
                id: 6,
                gif: "https://i.gifer.com/3BHx.gif",
                perguntas: [{
                    topico: "Poríferos",
                    perguntas: [{
                        pergunta: `Quais são as **características gerais** dos poríferos?`,
                        nestedQuestions: [{
                            destaque: `HABITAT`,
                            resposta: `- exclusivamente aquáticos (maioria marinhos);`,
                        },{
                            destaque: `TECIDOS`,
                            resposta: `- Parazoários → não possuem tecidos`,
                        },{
                            destaque: `DIGESTÃO`,
                            resposta: `- Intracelular`,
                        },{
                            destaque: `RESPIRAÇÃO`,
                            resposta: `- Difusão`,
                        },{
                            destaque: `CIRCULAÇÃO`,
                            resposta: `- Avasculares`,
                        },{
                            destaque: `EXCREÇÃO`,
                            resposta: `- Difusão`,
                        },{
                            destaque: `SISTEMA NERVOSO`,
                            resposta: `- Ausente`,
                        },{
                            destaque: `SIMETRIA`,
                            resposta: `- Radial`,
                        },]
                    },{
                        pergunta: `- Quais as **principais células** dos poríferos?`,
                        resposta: "Porócitos, amebócitos, pinacócitos, espículas e coanócitos",
                        nestedQuestions: [{
                            destaque: `Porócitos`,
                            resposta: `- células com um buraco que permitem a passagem de água do meio para o átrio/espongiocele`,
                        },{
                            destaque: `Amebócitos`,
                            resposta: `- células-tronco das esponjas. Podem se diferenciar.`,
                        },{
                            destaque: `Pinacócitos`,
                            resposta: `- células que garantem revestimento e proteção.`,
                        },{
                            destaque: `Espículas`,
                            resposta: `- estruturas esqueléticas, compostas por calcário, sílica ou espongina.`,
                        },{
                            destaque: `Coanócitos`,
                            resposta: `- Mantêm o fluxo de água, captura de alimentos, realizam a digestão intracelular (com ajuda dos amebócitos)`,
                        },]
                    },{
                        pergunta: `- O que é o **mesênquima** ou meso-hilo?`,
                        resposta: `É uma matriz proteica gelatinosa que contém material esquelético (espículas) e amebócitos. Equivale ao tecido conjuntivo dos eumetazoários.`,
                    },{
                        pergunta: `Qual a *forma de reprodução* dos poríferos?`,
                        resposta: `- por *brotamento/gemiparidade*, por *fragmentação/regeneração* ou *gemulação* (apenas em esponjas dulcícolas).`,
                    },]
                },{
                    topico: "Cnidários",
                    perguntas: [{
                        pergunta: `Quais são as *características gerais* dos cnidários?`,
                        nestedQuestions: [{
                            destaque: `HABITAT`,
                            resposta: `- exclusivamente aquáticos (maioria marinhos);`,
                        },{
                            destaque: `TECIDOS`,
                            resposta: `- eumetazoários (formam tecidos verdadeiros);
                            - diblásticos;`,
                        },{
                            destaque: `DIGESTÃO`,
                            resposta: `- enterozoários (cavidade digestória);
                            - Intracelular + Extracelular`,
                        },{
                            destaque: `RESPIRAÇÃO`,
                            resposta: `- Difusão`,
                        },{
                            destaque: `CIRCULAÇÃO`,
                            resposta: `- Avasculares`,
                        },{
                            destaque: `EXCREÇÃO`,
                            resposta: `- Difusão`,
                        },{
                            destaque: `SISTEMA NERVOSO`,
                            resposta: `- células nervosas e sistema nervoso difuso (coordenação);`,
                        },{
                            destaque: `SIMETRIA`,
                            resposta: `- Radial`,
                        },]
                    },{
                        pergunta: `Quais são as **novidades evolutivas**?`,
                        resposta: `- etapa de gástrula no desenvolvimento embrionário, dois folhetos embrionários (endoderme e ectoderme), neurônios, células musculares, tecidos verdadeiros, cavidade para digestão extracelular e boca, cnidócitos, protostomia, sistema nervoso difuso, sistema digestório.`,
                    },{
                        pergunta: `Quais as **principais estruturas** dos cnidários?`,
                        resposta: `- tentáculos, mesogleia e cnidócitos`,
                        nestedQuestions: [{
                            destaque: "mesogleia",
                            resposta: `- camada gelatinosa onde se encontram as células nervosas`
                        }, {
                            destaque: "cnidócitos",
                            resposta: `- Células responsáveis pelas queimaduras.`
                        }]
                    },{
                        pergunta: `Quais as **formas de reprodução** dos cnidários?`,
                        nestedQuestions: [{
                            destaque: "sexuada",
                            resposta: "- fecundação cruzada (interna ou externa)"
                        }, {
                            destaque: "assexuada",
                            resposta: "- brotamento e regeneração"
                        }]
                    },{
                        pergunta: `O que é a **alternância de gerações ou metagênese**?`,
                        resposta: `Gerações alternam-se entre pólipo (rep. assexuada) e medusa (rep. sexuada).`,
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d8c9d7be-413b-4687-a9ec-b285f0229b6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210214T205718Z&X-Amz-Expires=86400&X-Amz-Signature=6e72d67f18e9a958dd57aa90909417d7475fcc90bb465a288fed51fb5688e9bb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                    },]
                },{
                    topico: "Platelmintos",
                    perguntas: [{
                        pergunta: `Quais são as *características gerais* dos platelmintos?`,
                        nestedQuestions: [{
                            destaque: `HABITAT`,
                            resposta: `terrestres, aquáticos ou endoparasitas;`,
                        },{
                            destaque: `TECIDOS`,
                            resposta: `- eumetazoários (formam tecidos verdadeiros);
                            - triblásticos;`,
                        },{
                            destaque: `DIGESTÃO`,
                            resposta: `- **enterozoários incompletos**: única abertura para o meio (boca) e digestão extra e intracelular;
                            - Intracelular + Extracelular`,
                        },{
                            destaque: `RESPIRAÇÃO`,
                            resposta: `- Difusão`,
                        },{
                            destaque: `CIRCULAÇÃO`,
                            resposta: `- ausência de sistema circulatório (distribuição de substâncias através da cavidade digestória ramificada).`,
                        },{
                            destaque: `EXCREÇÃO`,
                            resposta: `- Células-flama
                            - excreta amônia`,
                        },{
                            destaque: `SISTEMA NERVOSO`,
                            resposta: `- células nervosas e sistema nervoso difuso (coordenação);
                            - sistema nervoso centralizado, ganglionar e ventral;
                            - os representantes de vida-livre apresentam ocelos (responsáveis pela fotorrecepção - claro/escuro) e aurículas (percepção tátil e química).`,
                        },{
                            destaque: `SIMETRIA`,
                            resposta: `- Bilateral`,
                        },]
                    },{
                        pergunta: `Quais são as *novidades evolutivas*?`,
                        resposta: `- três folhetos embrionários (endoderme, mesoderme e ectoderme), simetria bilateral, cefalização, sistema excretor, sistema nervoso ganglionar, corpo achatado.`,
                    },{
                        pergunta: `Os platelmintos são divididos em *3 classes principais*. Quais são suas *características e nomes*?`,
                        resposta: ``,
                    },{
                        pergunta: `Quais as formas de *reprodução* dos platelmintos?`,
                        nestedQuestions: [{
                            destaque:`Assexuada`,
                            resposta: `- Fragmentação e Regeneração (assexuada)
                            - Estrobilização (assexuada - classe Cestoda)
                            - autofecundação (classe Cestoda)`,
                        },{
                            destaque:`Sexuada`,
                            resposta: `- Fecundação (sexuada)`,
                        },
                        {
                            pergunta:`Quais são as características do desenvolvimento embrionário?`,
                            resposta: `- Externo

                            - Direto (Classes Turbellaria e Monogenea)
                            
                            - Indireto (Classes Turbellaria, Trematoda e Cestoda)`,
                        },],
                    },]
                },]
            },
            ciclosbiogeoquimicos: {
                nome: "Ciclos biogeoquimícos",
                id: 7,
                gif:"https://i.pinimg.com/originals/06/57/bf/0657bf80f7b1223303e3ea755f9d25de.gif",
                perguntas: [{
                    topico: ' Ciclo da água',
                    perguntas: [
                      {
                        pergunta: '- Qual a importância da água?',
                        resposta: '- Solvente; participa das reações metabólicas (funcionamento enzimático) - Principal componente dos seres vivos; transporte de substâncias - Regulação térmica'
                      },
                      {
                        pergunta: '- Onde e como a água está disponível na terra?',
                        resposta: '- Ocupa 75% da superfície terrestre',
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1ba97d4c-ba19-41f6-9e14-111198bed8b9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210220T005650Z&X-Amz-Expires=86400&X-Amz-Signature=599ca3e3d8c001e5a88e92d131e2ae5f0eb70d867aa658c46d45fb98aee5731e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                      },
                      {
                        pergunta: '- Quais são fases do ciclo da água?',
                        resposta: '- Pequeno ciclo (chuvas), grande ciclo (seres vivos)',
                        imagemResposta: "https://lh5.googleusercontent.com/Ni2oGZdaU3XZtz-iQfURk4epVVDNI9U-uduDAD_2nIxFMKn0_z76PTRVjU7lKeF9yOdAB3ed1-zxA0ZF9ZvPvonfjiLQmRXJvhYqRhpK9oDG4q_ut7qqjcL3FpF0TTvWOVFk23s"
                      }
                    ]
                  },{
                    topico: ' Ciclo do carbono',
                    perguntas: [
                      {
                        pergunta: '- Qual a importância do carbono?',
                        resposta: '- Componente de todas as moléculas orgânicas dos seres vivos - Contribui para o efeito estufa (retém calor)'
                      },
                      {
                        pergunta: '- Onde e como está disponível na terra?',
                        resposta: '- Componente do CO2 (0,04% do ar atmosférico) - Presente nos combustíveis fósseis'
                      },
                      {
                        pergunta: '- Quais são as fases do ciclo da carbono?',
                        imagemResposta: "https://lh6.googleusercontent.com/DRlxwXhVCLWE0Oo3H4M7bg7ob--FOwBR5ZRJEnaqizZLSqNk26vC702KGLXJ_zE7Bg7kNkPq52i2N4CoJWfTmstWC7-vSt7xLOtqfzy0aVZaP7laMY-WMo_HrfhhNp8uKhZthaI",
                        resposta: '- Captado por seres fotossintetizantes na forma de matéria orgânica - Obtido pelos animais pela nutrição. - Apenas um nível trófico pode retirá-la do ambiente (produtores) e todos podem devolver para a atmosfera (respiração, fermentação, decomposição) - A matéria orgânica não decomposta se torna combústivel fóssil.'
                      }
                    ]
                  }, {
                    topico: ' Ciclo do nitrogênio',
                    perguntas: [
                      {
                        pergunta: '- Qual a importância do nitrogênio? Onde está disponível?',
                        resposta: '- Componente do N2 (78% do ar atmosférico), proteínas, ácidos nucleicos e clorofila.'
                      },
                      {
                        pergunta: '- Quais são as fases do ciclo do nitrogênio?',
                        resposta: '',
                        nestedQuestions: [
                          {
                            destaque: '- Fixação',
                            imagemResposta: "https://lh4.googleusercontent.com/rZfBY8b_5b6K9YDf1ecl89zZ7oNc0H5KUhM8QRju9jQfYmEhKPG7AhfwhKXKdogW_vmVgy-ZP_Nybpux6goi1sKcpYmgK1cTBQ5fd7kZl5zcWzfTj34dO6169jD74JW-eYfwjSs",
                            resposta: '- **Atmosférica/física**: reação do N2  atmosférico com O2 usando energia de descargas elétricas, formando NO-3(nitrato) - **Biológica**: produção de amônia (enzima nitrogenase) por bactérias/cianobactérias de vida livre ou associadas às raízes de plantas ➝ bactéria *Rhizóbium* em leguminosas (mutualismo)'
                          },
                          {
                            destaque: '- Amonificação',
                            resposta: '- Transformação de compostos e excretas nitrogenadas (ureia) em amônia (NH3), por bactérias e fungos decompositores.'
                          },
                          {
                            destaque: '- Nitrificação',
                            resposta: '- Transformação de amônia (NH3) em nitrato (NO3-) - Ocorre em 2 etapas: - ↳ Nitrosação: bactéria *Nitrosomonas* (NH3 ➝ NO2-) - ↳ Nitratação: bactéria *Nitrobacter* (NO2- → NO3-)'
                          },
                          {
                            destaque: '- Desnitrificação',
                            resposta: '- Transformação do NO3-(NH3 ou NO2-) em N2 por bactérias desnitrificantes (*Pseudomonas*)'
                          },
                          {
                              destaque: 'Imagem do ciclo',
                              imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a94ef5b-e7f4-4cf7-945f-0237a52c9ebf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210220T005702Z&X-Amz-Expires=86400&X-Amz-Signature=0ae2c8c31827933539f2c64f5133156dda788a294ef5912cdedb1f8545b56638&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                          }
                        ]
                        
                      },
                      {
                        pergunta: '- Qual o uso de leguminosas na agricultura? Quais são os métodos usados?',
                        resposta: '- Aumentam o nitrogênio no solo.',
                        nestedQuestions: [
                          {
                            destaque: '- **Rotação de culturas**',
                            resposta: '- alterna o plantio de leguminosas com o de não-leguminosas'
                          },
                          {
                            destaque: '- **Adubação verde**',
                            resposta: '- cultivo de plantas leguminosas que serão decompostas'
                          },
                          {
                            destaque: '- **Consórcio de culturas**',
                            resposta: '- plantio, ao mesmo tempo e área, de leguminosas e de não-leguminosas'
                          }
                        ]
                      }
                    ]
                  }]
            }
        }
    },
    matematica: {
        nome: "Matemática",
        id: 2,
        temas: {
            geometriaplana: {
                nome: "Geometria Plana",
                id: 1,
                gif: "https://i.pinimg.com/originals/96/f9/30/96f93060084041a239833eaa77286cdf.gif",
                perguntas: [{
                    topico: "Triângulos",
                    perguntas: [{
                        pergunta: "O que é um triângulo?",
                        resposta: "Figura com 3 lados"
                    }, ]
                }, ],
                loading: true
            },
            progressoes: {
                nome: "Progressões",
                id: 2,
                gif: "https://data.whicdn.com/images/201185999/original.gif",
                perguntas: [{
                    topico: ' Progressão Aritmética',
                    perguntas: [
                      {
                        pergunta: '- Em uma progressão aritmética de **razão $r$** e **primeiro termo** $a_1$, quais são os os **4 primeiros** termos da sequência?',
                        math: '\\large{a_1, \\;\\; a_1 + r,\\;\\; a_1 + 2r, \\;\\; a_1 + 3r}'
                      },
                      {
                        pergunta: '- Qual a fórmula do **TERMO GERAL**?',
                        math: '\\large{\\bold\\blue{a_n} = a_1 + (n-1)\\cdot r}'
                      },
                      {
                        pergunta: '- Qual a fórmula da **SOMA**?',
                        math: '\\large{\\bold\\blue{S_n} = \\frac{(a_1 + a_n) \\cdot n}{2}}'
                      }
                    ]
                  }, {
                    topico: ' Progressão Geométrica',
                    perguntas: [
                      {
                        pergunta: '- Em uma progressão geométrica de **razão $q$** e **primeiro termo** $a_1$, quais são os os **4 primeiros** termos da sequência?',
                        math: '\\large{a_1, \\;\\; a_1 \\cdot q,\\;\\; a_1 \\cdot q^2, \\;\\; a_1 \\cdot q^3}'
                      },
                      {
                        pergunta: '- **TERMO GERAL**',
                        math: '\\bold\\blue{a_n} = a_1 \\cdot q^{n-1}'
                      },
                      {
                        pergunta: '- **SOMA**',
                        resposta: '- Para $q geq 1$',
                        math: `\\bold\\blue{S_n} = \\frac{a_1 \\cdot (q^{n}-1)}{q-1}`
                      },
                      {
                        pergunta: '- **SOMA INFINITA**',
                        resposta: 'Usada quando $0 le q le 1$',
                        math: " \\bold\\blue{S_{infin}} = \\frac{a_1}{1-q}"
                      }
                    ]
                  }]
            }
        }
    },
    fisica: {
        nome: "Fisica",
        id: 3,
        temas: {
            gravitacao: {
                nome: "Gravitação",
                id: 1,
                gif: "https://i.gifer.com/77Yr.gif",
                perguntas: [{
                    topico: "Gravidade",
                    perguntas: [{
                        pergunta: "O que é a gravidade?",
                        resposta: "Do ponto de vista da Mecânica, a gravidade é a força de atração que surge entre dois corpos simplesmente pela presença deles em um ponto do espaço.",
                        imagemPergunta: "https://i.makeagif.com/media/6-30-2015/2pZiZJ.gif"
                    }, {
                        pergunta: "Quem descobriu a gravidade?",
                        resposta: "Isaac Newton",
                        imagemResposta: "https://media0.giphy.com/media/l1J9z5SmyhtdybtaU/giphy.gif",
                        nestedQuestions: [{
                            pergunta: "Em que ano se deu essa descoberta?",
                            resposta: "No ano de 1666",
                            imagemResposta: "http://1.bp.blogspot.com/-430QWGvpRAs/TZ5627ufXyI/AAAAAAAAAYc/HEcv9lQCJzc/s1600/isaac-newton-on-twitter-and-facebook.jpg"
                        }]
                    }]
                }],
            },
            hidrostatica: {
                nome: "Hidrostática",
                id: 2,
                gif: "https://media1.tenor.com/images/df999159eb1a51042ce94135901b78e7/tenor.gif?itemid=8611981",
                perguntas: [{
                    topico: "Densidade e pressão",
                    perguntas: [{
                        pergunta: "Como calcula-se a densidade de um corpo?",
                        math: "Densidade = \\frac {Massa} {Volume}",
                    },
                    {
                        pergunta: "Como calcula-se a pressão de uma força?",
                        math: "Pressão = \\frac {Força} {Área}",
                        nestedQuestions: [{
                            pergunta: "Qual a unidade no SI? Quanto mede 1 atm nesse unidade?",
                            resposta: "Pascal",
                            math: "1 atm = 10^5 Pa"
                        }]
                    }]
                }, {
                    topico: "Pressão hidrostática",
                    perguntas: [{
                        pergunta: "O que diz o <span class='bold'>Teorema de Stevin</span>?",
                        resposta: "Pontos do mesmo líquido a uma mesma profundidade terão uma mesma pressão",
                        nestedQuestions: [{
                            pergunta: "Qual dos vasos abaixo tem a maior pressão de fundo?",
                            resposta: "Todos tem a mesma pressão, desde que a altura do líquido seja igual",
                            imagemPergunta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/903d903c-462d-49bd-9f7a-17c7551449e8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210211T214626Z&X-Amz-Expires=86400&X-Amz-Signature=069443bbe972a40da8f75c9c64f255c36cd825ea64e9e75ae67302c7f84302c4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                        }, {
                            pergunta: "Qual a fórmula?",
                            math: '\\boxed{P_{líq} = \\mu_{liq}. g. H}'
                        }]
                    }, {
                        pergunta: "Como funcionam os vasos comunicantes?",
                        imagemPergunta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c3f4246-b0b9-45bc-9e57-5e89da14e72d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210211T220815Z&X-Amz-Expires=86400&X-Amz-Signature=5b4724df1006ad15d2aa37b5bde20e40915263d3cce73929a720b87eebdb77af&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
                        resposta: "Pontos em uma mesma altura possuem a mesma pressão:",
                        math: "P_A=P_B \\;\\rightarrow \\; P_{atm} + \\mu_2.g.h_2 = P_{atm} + \\mu_1.g.h_1 \\;\\rightarrow \\; \\frac {\\mu_1} {\\mu_2} = \\frac {h_2} {h_1}"
                    }, {
                        pergunta: "O que diz o Princípio de pascal? - prensa hidráulica",
                        resposta: "Um acréscimo de pressão feito em um ponto do líquido é transmitido integralmente a todos os pontos do líquido",
                        nestedQuestions: [{
                            pergunta: "Qual a relação entre as áreas 1 e 2 e as forças 1 e 2?",
                            imagemPergunta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a33766d-6534-49da-ad22-70ab434212fb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210211T221034Z&X-Amz-Expires=86400&X-Amz-Signature=afb7d17ab718d6bdb59ad879200314efd2ea3ab0fac0e1069c9c6041e38bc991&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
                            math: "\\boxed{\\frac {F_1} {A_1} = \\frac {F_2} {A_2}}",
                        }]
                    }]
                }, {
                    topico: "Empuxo",
                    perguntas: [{
                        pergunta: "O que diz o princípio de Arquimedes?",
                        resposta: "Um fluido faz uma força vertical para cima na parte submersa de um corpo.",
                        nestedQuestions: [{
                            pergunta: "Qual a fórmula para o cálculo do empuxo?",
                            math: "\\boxed {E = \\mu_{líq}. V_{submerso \\; do \\; corpo}. \\; g}",
                        }, {
                            pergunta: "Qual a condição de flutuação?",
                            math: "Empuxo = Peso"
                        }]
                    }]
                }],
            }
        }
    },
    geografia: {
        nome: "Geografia",
        id: 4,
        temas: {
            blocoseconomicos: {
                nome: "Blocos Econômicos",
                id: 1,
                gif: "https://files.bastter.com/outros/6745f643-94e6-49b3-9eb1-8b59616741c1.gif",
                perguntas: [{
                    topico: 'Principais blocos',
                    perguntas: [
                      {
                        pergunta: '- Quais são as *fases de blocos econômicos? e exemplos?*',
                        resposta: '',
                        nestedQuestions: 
                          [
                            {
                              destaque: '- **ZONA DE LIVRE COMÉRCIO**',
                              resposta: '- Livre circulação de mercadoria e bens ( menor taxa de importação e investimento) - ex:UMSCA'
                            },
                            {
                                destaque: '- **UNIÃO ADUANEIRA**',
                              resposta: '- **Tarifa Externa Comum**: se um membro define tarifa com um país, todos pagam o mesmo - ex: Mercosul'
                            },
                            {
                                destaque: '- **MERCADO COMUM**',
                              resposta: '- Livre circulação de pessoas e de serviços'
                            },
                            {
                              destaque: '- **UNIÃO MONETÁRIA**/ **ECONÔMICA**',
                              resposta: '- Moeda única - ex: União europeia a partir do T. de Maastrich'
                            }
                          ]
                        
                      },
                      {
                        pergunta: '- Como funcionam as fases?',
                        resposta: '- Elas adicionam-se, ou seja, uma fase implica na permanência dos critérios das anteriores.'
                      }
                    ]
                  }, ]
            },
            globalizacao: {
                loading: true,
                nome: "Globalização",
                id: 2,
                gif: "https://www.mckinsey.com/~/media/McKinsey/Email/Shortlist/52/hero.jpg",
                perguntas: [{
                    topico: "Definição",
                    perguntas: [{
                        pergunta: "O que é a globalização?",
                        resposta: "A globalização é um processo de integração social, econômica e cultural entre as diferentes regiões do planeta."
                    }, ]
                }, ]
            }, 
            orientemedio: {
                nome: "Oriente Médio",
                id: 3,
                gif: "https://i.gifer.com/ARqA.gif",
                perguntas: [{
                    topico: ' Conceitos gerais',
                    perguntas: [
                      {
                        pergunta: '- Qual o recurso mais importante do Oriente Médio?',
                        resposta: '- Petróleo'
                      },
                      {
                        pergunta: '- O que é o povo Curdo?',
                        imagemResposta:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0df888e7-957f-4f4a-a043-f8a7a4d0eaf4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210219T233233Z&X-Amz-Expires=86400&X-Amz-Signature=6e93ee7f30799610d0b33349047df31033bc03c15120c4ae2c9575231e5e916e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
                        resposta: '- É o maior povo sem território do mundo, desejando a criação do Curdistão nas regiões da Turquia, Iraque, Síria e Irã'
                      },
                      {
                        pergunta: '- O que são os kibuts judeus?',
                        resposta: '- Criados em 1910 na sociedade israelense, os kibutz são agrupamentos em que funcionam comunidades com as seguintes características: atividades agrícolas, propriedades coletivas, igualdade social, meios de produção próprios, distribuição da produção para a comunidade e prioridade à educação das crianças.'
                      }
                    ]
                  },{
                    topico: ' Questão Palestina',
                    perguntas: [
                      {
                        pergunta: '- Justificativa dos hebreus (judeus) para posse da terra?',
                        resposta: '- Segundo sua religião, eles já ocupavam o território'
                      },
                      {
                        pergunta: '- O que foi o movimento sionista?',
                        resposta: '- Foi um movimento que buscava criar um território para os judeus, futuramente ISRAEL'
                      },
                      {
                        pergunta: '- Como foi a divisão territorial prevista pela ONU?',
                        resposta: '- Divisão semelhante de territórios para os árabes e para os judeus',
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5b6ba0d1-0845-4887-8b99-d38078852c8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210219T233207Z&X-Amz-Expires=86400&X-Amz-Signature=79637226213a11cfea5a339576f5d6d18288da94618a48c247442cdac197f908&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                      },
                      {
                        pergunta: '- **Guerra de formação de Israel (1947)**',
                        resposta: '- Judeus x Árabes, judeus vencem e formam Israel - ISRAEL VENCE'
                      },
                      {
                        pergunta: '- **Guerra de Suez (1956)**',
                        resposta: '- Nacionalista do Egito assume o poder e nacionaliza o canal de Suez, mandando tropas para a fronteira de Israel - ISRAEL VENCE'
                      },
                      {
                        pergunta: '- **Guerra dos Seis Dias (1967)**',
                        resposta: '- Foi a que ocasionou a maior alteração de fronteiras - Justificado por Israel como um ataque preventivo, por causa de dados de inteligência - Colinas de Golã, Cisjordânia, Faixa de Gaza, Peninsula do Sinai e Jeusalém passam a integrar o território israelense - ISRAEL VENCE'
                      },
                      {
                        pergunta: '- **Guerra do Yom Kippur (1973)**',
                        resposta: '- Ataque árabe a Israel no feriado de Yom Kippur, esperando que as defesas estivessem fracas - Apoio declarado dos EUA - ISRAEL VENCE - Por causa da derrota, árabes nacionalizam todas os poços de petróleo, ocasionando a CRISE DO PETRÓLEO'
                      },
                      {
                        pergunta: '- **Acordo de Camp David (1978)**',
                        resposta: '- paz entre Egito e Israel, com devolvimento da península do Sinai para os egípsios'
                      },
                      {
                        pergunta: '- **Acordo de Oslo (1993)**',
                        resposta: '- FRACASSADO! - Tentativa de tratado de paz entre Israel e OLP (Organização Palestina) - Após assumir um partido radical na Palestina, o tratado é revogado'
                      },
                      { pergunta: '- Como estão os territórios hoje?', resposta: '',
                    imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/684ca9fc-ec33-459c-8234-b48b3c1e796c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210219T233044Z&X-Amz-Expires=86400&X-Amz-Signature=1d68cee5fade527b21f2c5f05caf6636ed113d199c42edaa951b3792c3c25547&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22" }
                    ]
                  }]
            },
            mineracao: {
                nome: "Mineração",
                id: 4,
                gif: "https://i.gifer.com/GiaJ.gif",
                perguntas: [{
                    topico: 'Locais e importância',
                    perguntas: [
                      {
                        pergunta: '- Quais são os **3 principais minérios abundantes** no território brasileiro**?**',
                        resposta: '- Ferro, manganês, bauxita'
                      },
                      {
                        pergunta: '- Quais minérios apresentam **deficiência** no Brasil**?**',
                        resposta: '- Chumbo, prata, platina, carvão, gás natural'
                      },
                      {
                        pergunta: '- Por que **importamos carvão?**',
                        resposta: '- É encontrado em áreas limitadas do território e possui baixa qualidade de aproveitamento nas siderúrgicas'
                      },
                      {
                        pergunta: '- Qual região do país se destaca nas **reservas de carvão**?',
                        resposta: '- O Sul do país, principalmente RS'
                      },
                      {
                        pergunta: '- Quais os 5 principais **projetos minerais** do Brasil?',
                        resposta: 'Os abaixo:',
                        description: `Quais os seus minérios e localizações?`,
                        nestedQuestions: [
                          {
                            destaque: '- **Quadrilátero Ferrífero**',
                            resposta: '- MG → Ferro'
                          },
                          {
                            destaque: '- **Projeto Grande Carajás**',
                            resposta: '- PA → Ferro, Manganês e Cobre'
                          },
                          {
                            destaque: '- **Maciço do Urucum**',
                            resposta: '- MS → Ferro e Manganês'
                          },
                          {
                            destaque: '- **Serra do Navio**',
                            resposta: '- AP → Manganês'
                          },
                          {
                            destaque: '- **Vale do Rio Trombetas**',
                            resposta: '- PA → Bauxita'
                          },
                          {
                              destaque: 'resumo',
                              imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77f9c352-fda4-4fb1-b1a3-96af4d6ebfb9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210219T233849Z&X-Amz-Expires=86400&X-Amz-Signature=01db50db18e6739892c70df6de5194e96c9dbbffa5b662cd0eb929f16638d80a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                          }
                        ]
                      },
                      {
                        pergunta: '- **OBS:** Quais os minérios constituíntes do **aço**?',
                        resposta: '- Ferro e manganês',
                        obs: true
                      },
                      {
                        pergunta: '- **OBS**: Qual critério possibilita **medir a qualidade do carvão**?',
                        resposta: '- Observa-se o teor de carbono, quanto maior, melhor poder calorífico',
                        obs: true
                      }
                    ]
                  }]
            }
        }
    },
    literatura: {
        nome: "Literatura",
        id: 5,
        temas: {
            trovadorismohumanismo: {
                nome: "Trovadorismo + Humanismo",
                id: 1,
                gif: "https://static.wixstatic.com/media/a1dc11_f9c3f1242b0f470f8703ed41beab2f80.gif",
                perguntas: [{
                    topico: "Trovadorismo",
                    perguntas: [{
                        pergunta: "Qual o *contexto* do Trovadorismo?",
                        resposta: `- Baixa idade média → teocentrismo 
                        - Decadência feudal 
                        - Época dos trovadores 
                        - Estilo gótico` 
                    }, {
                        pergunta: "Quais as *principais características* do trovadorismo?",
                        resposta: `- Vassalagem amorosa 
                        - Música e poesia 
                        - Português galego`
                    }, {
                        pergunta: "Quais são os tipos de *cantigas líricas*?",
                        resposta: "De amor e de amigo",
                        nestedQuestions: [{
                            pergunta: "Quais as características da <span class='bold'>de amor?</span>",
                            resposta: `- **Eu-lírico masculino** :vassalo-trovador
                            - Apaixonado pela **mulher superior, idealizada e deusificada**
                            - Ambiente **castelar**
                            - **Coito**: sofrimento amoroso
                            - linguagem rebuscada`
                        },{
                            pergunta: "Quais as características da **de amigo?**",
                            resposta: `- **Eu-lírico feminino**: camponesa que sente falta do amigo (foi pras cruzadas)
                            - Ambiente **rupestre**: rio tejo, mar
                            - **Saudade**
                            - **Linguagem simples**`
                        }]
                    }, {
                        pergunta: "Quais são os tipos de *cantigas satíricas*?",
                        resposta: "De escárnio e de maldizer",
                        nestedQuestions: [{
                            pergunta: "Quais são as características das de **escárnio**?",
                            resposta: "- criticas a sociedade da época, mas não cita o nome da criticado"
                        }, {
                            pergunta: "Quais são as características das de **maldizer**?",
                            resposta: `- criticas a sociedade da época e cita o nome do criticado
                            - fescenina/ erótica`
                        }]
                    }]
                }, {
                    topico: "Humanismo",
                    perguntas: [{
                        pergunta: `Qual o **contexto** do Humanismo?`,
                        resposta: `- Mudança de pensamento **teológico para antropocêntrico**
                        - Invenção da imprensa
                        - Portugal como **império de navegações**`,
                    }, {
                        pergunta: `Quais as principais **características** do Humanismo?`,
                        resposta: `- Postura erudita → homem racional e livresco
                        - Retomam obras da antiguidade: egito, **grécia** e **roma** → embrião do renascimento`
                    },{
                        pergunta: `Quais são os três **estilos** de Gil Vicente?`,
                        resposta: `Popular, satírico e medieval`,
                        description: `Descreva cada um desses estilos`,
                        nestedQuestions: [{
                            destaque: "POPULAR",
                            resposta: `- Usa **linguagem simples, engraçada e chula**
                            - defende **camponeses**`
                        }, {
                            destaque: "SATÍRICO",
                            resposta: `- **Denúncia os vícios da sociedade**
                            - 7 pecados capitais
                            - Isso é o que o inclui como humanista`
                        }, {
                            destaque: "MEDIEVAL",
                            resposta: `- Tosco, rudimentar
                            - Considera apenas a **ação** da peça, sem levar em conta o cenário e tempo`
                        }]
                    },{
                        pergunta: `Quais são os **subgêneros** usados pelo Gil Vicente?`,
                        resposta: `- **AUTO**: tom moralizante religioso
                        - **FARSA**: críticas sociais com tom satírico`
                    },{
                        pergunta: `Quais os **tipos de personagens** do Gil Vicente?`,
                        resposta: `- **ALEGORIAS**: representam ideias, ex: bem e mal
                        - **TIPOS**: representam esteriótipos de grupos sociais e seus vícios sem profundidade psicológica`
                    },{
                        pergunta: `Quais **tipos de linguagem** o Gil Vicente usa?`,
                        resposta: `- **POPULAR**: coloquial
                        - **MISTA**: não uniformizado em português ( mistura latim, castelhano...)
                        - **POÉTICA**: manipula a forma → verbos redondilhos em medidas velhas (5/7)`
                    },{
                        pergunta: `Quais as **classificações** de suas peças?`,
                        resposta: `- **Narrativa**: começo, meio e fim
                        - **Alegórica**: cenas independentes`,
                        obs: true
                    },]
                }, ]
            },
            classicismo: {
                nome: "Classicismo",
                id: 2,
                gif: "https://i.pinimg.com/originals/d0/83/bf/d083bf4dd342ce0805aa3239d063a882.gif",
                perguntas: [{
                    topico: "Contexto e características",
                    perguntas: [{
                        pergunta: `Qual o *contexto* do Classicismo?`,
                        resposta: `- **Renascimento** cultural → **antropocentrismo**
                        - **Grandes navegações** → colônias`,
                    },{
                        pergunta: `- Quais as *principais características* do Classicismo?`,
                        resposta: `- **Universalismo** (temas universais)
                        - **Racionalismo** ( razão explicando emoção)
                        - **Paganismo** ( volta a cultura **Greco-Romana)**
                        - **Neoplatonismo** ( Sensível x Inteligível )`,
                        nestedQuestions: [{
                            pergunta: `O que é o *amor neoplatônico*?`,
                            resposta: `Aquele que não se concretiza`, 
                            obs: true
                        }]
                    },{
                        pergunta: `- Qual as *formas* usadas no Classicismo?`,
                        resposta: `- Medidas Novas/ "Dulce still nuevo" → valorização da forma
                        - **SONETOS (4433)**
                        - **DECASSÍLABOS** ( 10 sílabas métricas )`,
                    },]
                }, {
                    topico: "Camões",
                    perguntas: [{
                        pergunta: `- Quais as características do *Camões Lírico*?`,
                        resposta: `- Explicação racional de sentimentos
                        - Neoplatonismo amoroso (mulher idealizada e inalçancável)
                        - Desconcerto de mundo
                        - Existencialismo filosófico`,
                    },{
                        pergunta: `- Qual a principal obra do *Camões Épico*?`,
                        resposta: `- Os Lusíadas, uma epopéia ufanista sobre a navegação do Vasco da Gama.`,
                    },{
                        pergunta: `- O que o *velho do restelo* significa nos Lusíadas?`,
                        resposta: `- O velho critica a viagem, perguntando se valeu a pena realmente perder tantas vidas pela navegação`,
                        obs: true
                    },{
                        pergunta: `- O que significa a *máquina do mundo* do *canto X* dos Lusíadas?`,
                        resposta: `- A máquina do mundo é um modelo de formação do universo, por explicação mitológica, religiosa ou científica → nesse caso, camões defende o **geocentrismo**`,
                        obs: true
                    },]
                }]
            }
        }
    },
    quimica: {
        nome: "Química",
        id: 6,
        temas: {
            eletroquimica: {

                nome: "Eletroquímica",
                id: 1,
                gif: "https://media2.giphy.com/media/l0MYD0wjKQ84goG6A/giphy.gif",
                perguntas: [{
                  topico: ' Pilha',
                  perguntas: [
                    { pergunta: '- É um **processo** espontâneo?', resposta: 'Sim' },
                    {
                      pergunta: '- Qual **transformação** a pilha faz?',
                      resposta: '**R:** Transforma **energia química em elétrica**'
                    },
                    {
                      pergunta: '- O **ânodo** representa qual **polo**?',
                      resposta: '**R:** O polo **negativo**'
                    },
                    {
                      pergunta: '- O **cátodo** representa qual **polo**?',
                      resposta: '**R:** Polo **positivo**'
                    },
                    {
                      pergunta: '- Em qual **eletrodo** ocorre a **oxidação**?',
                      resposta: '**R:** Ânodo'
                    },
                    {
                      pergunta: '- Em qual **eletrodo** ocorre a **redução**?',
                      resposta: '**R:** Cátodo'
                    },
                    {
                      pergunta: '- O que o **cátodo sofre**?',
                      resposta: '**R:** Sofre deposição (aumento de massa)'
                    },
                    {
                      pergunta: '- O que o **ânodo sofre**?',
                      resposta: '**R:** Sofre desgaste (corrosão)'
                    },
                    {
                      pergunta: '- Qual eletrodo **recebe e´**?',
                      resposta: '**R:** Cátodo'
                    },
                    {
                      pergunta: '- Qual eletrodo **perde e´**?',
                      resposta: '**R:** Ânodo'
                    },
                    {
                      pergunta: '- Qual o **sentido do fluxo de elétrons**?',
                      resposta: '**R:** Sempre vão no sentido do **ânodo → cátodo** (do menor para o maior Ered)'
                    },
                    {
                      pergunta: '- Qual o **sentido da corrente elétrica**?',
                      resposta: '**R:** Sempre o **oposto do sentido do fluxo de e´**, portanto do **cátodo → ânodo**'
                    },
                    {
                      pergunta: '- Qual a ordem da **notação da pilha**?',
                      resposta: '**R:** Ânodo**//**Cátodo'
                    },
                    {
                      pergunta: '- Para que serve a **ponte salina?**',
                      resposta: '**R:** Sua função é **permitir a passagem parcial de excesso de íons** para manter a neutralidade elétrica das soluções'
                    }
                  ]
                },{
                  topico: 'Conceitos de Eletrólise',
                  perguntas: [
                    {
                      pergunta: '- É um **processo** **espontâneo**?',
                      resposta: '**R:** **Não**'
                    },
                    {
                      pergunta: '- Qual transformação faz?',
                      resposta: '**R:** Transforma **energia elétrica em química**'
                    },
                    {
                      pergunta: '- O **ânodo** representa qual **polo**?',
                      resposta: '**R:** Polo **positivo**'
                    },
                    {
                      pergunta: '- O **cátodo** representa qual **polo**?',
                      resposta: '**R:** Polo **negativo**'
                    },
                    {
                      pergunta: '- Em qual **eletrodo** ocorre a **oxidação**?',
                      resposta: '**R:** Ânodo'
                    },
                    {
                      pergunta: '- Em qual **eletrodo** ocorre a **redução**?',
                      resposta: '**R:** Cátodo'
                    },
                    {
                      pergunta: '- Qual característica dos **eletrodos**?',
                      resposta: '**R:** São inertes'
                    },
                    {
                      pergunta: '- Qual é o objetivo dos **íons** na eletrólise?',
                      resposta: '**R:** Tanto o cátion quanto o ânion **querem descarregar**'
                    }
                  ]
                },{
                  topico: ' Eletrólise ígnea',
                  perguntas: [
                    { pergunta: '- Qual **principal característica**?', resposta: '' },
                    {
                      pergunta: '- OBS: qual o interesse/aplicação ao realizá-la?',
                      resposta: '**R:** Obter metais puros a partir de seus minérios',
                      obs: true
                    }
                  ]
                },{
                  topico: ' Eletrólise aquosa',
                  perguntas: [
                    {
                      pergunta: '- Qual **principal característica**?',
                      resposta: '**R:** Eletrólito **em solução aquosa**'
                    },
                    {
                      pergunta: '- OBS: qual o interesse/aplicação ao realizá-la?',
                      resposta: '**R:** Fazer revestimentos metálicos → **Galvanoplastia**',
                      obs: true
                    },
                    {
                      pergunta: '- Qual a **equação de redução da água**?',
                      resposta: '- Quando o H+ descarregar ↳ 2H2O (L) +2e´ → H2 (G) + 2OH-'
                    },
                    {
                      pergunta: '- Qual a **equação de oxidação da água**?',
                      resposta: '- Quando o OH- descarregar ↳ H20 (L) → 2H+ (AQ) +1/2O2 (G) +2e'
                    },
                    {
                      pergunta: '- Qual a fila de preferência de **descarga de ânions**?',
                      resposta: '- Ânions oxigenados < OH- < Demais ânions'
                    },
                    {
                      pergunta: '- Qual a fila de preferência de **descarga de cátions**?',
                      resposta: '- 1A, 2A, Al3+ **<** **H+ <** Outros cátions'
                    }
                  ]
                } ]
            },
            radioatividade: {
              loading: true,
                nome: "Radioatividade",
                id: 2,
                gif: "https://media2.giphy.com/media/l2Je7a6s6zNKXPD1e/giphy.gif",
                perguntas: [{
                    topico: "Conceitos básicos",
                    perguntas: [{
                            pergunta: "Quais são os três tipos principais de radiação?",
                            resposta: `Alfa, Beta e Gama`
                        },
                        {

                        }
                    ]
                }]
            },
            polimeros: {
                nome: "Polimeros",
                id: 3,
                gif: "https://thumbs.gfycat.com/ZanyKindlyDiplodocus-size_restricted.gif",
                perguntas: [{
                    topico: 'Características e reações',
                    perguntas: [
                      {
                        pergunta: '- O que são **polímeros**?',
                        resposta: '- Macromoléculas formadas a partir da reação de polimerização dos seus respectivos monômeros'
                      },
                      {
                        pergunta: '- Nos polímeros de **adição**, qual a **característica obrigatória** nos monômeros?',
                        resposta: '- Presença de insaturação'
                      },
                      {
                        pergunta: '- Como os **polímeros de condensação** são caracterizados? Cite os **dois** tipos',
                        resposta: '- Formados, geralmentes, pela reação entre **dois monômeros diferentes**, com a eliminição de moléculas pequenas, como água',
                        nestedQuestions: [
                          {
                            pergunta: '- **POLIÉSTERES**',
                            resposta: '- **Monômeros**: possuem dois ácidos carboxilicos, um de cada lado + um diálcool - **Polímeros**: são cadeias com vários ésteres ligando-as'
                          },
                          {
                            pergunta: '- **PÓLIAMIDAS**',
                            resposta: '- **Monômeros**: possuem dois ácidos carboxilicos, um de cada lado + uma diamina - **Polímeros**: são cadeias com várias amidas ligando-as'
                          }
                        ]
                      },
                      {
                        pergunta: '- **OBS**: Qual o nome da **borracha natural**? Em que categoria ela se encaixa?',
                        resposta: '- ISOPRENO (elastômero → propriedades elásticas)',
                        obs: true
                      },
                      {
                        pergunta: '- **OBS**: Caracterize o processo de **vulcanização** de borracha',
                        resposta: '- Criação de pontes de enxofre entre as cadeias carbonicas - Deixa a borracha mais dura e resistente (pneu)',
                        obs: true
                      },
                      {
                        pergunta: '- **OBS**: Qual a característica da cadeia dos **polímeros condutores**?',
                        resposta: '- A cadeia tem duplas conjugadas',
                        obs: true
                      }
                    ]
                  }]
            },
            ligacoesintermoleculares: {
                nome: "Ligações Intermoleculares",
                id: 4,
                gif: "https://i.pinimg.com/originals/b6/fb/9f/b6fb9f87a15aea2c968b3c28cd6efb2f.gif",
                perguntas: [{
                    topico: ' Forças intermoleculares',
                    perguntas: [
                      {
                        pergunta: '- Qual a **ordem de força (decrescente)** de interações intermoleculares?',
                        resposta: '- **Lig. iônica** > **íon-dipolo** > **forças intermoleculares**'
                      },
                      {
                        pergunta: '- Dentro das forças intermoleculares, quais a ordem de força em **ordem decrescente**',
                        resposta: '- **Ponte de hidrogênio** → **dipolo-dipolo** → **dipolo induzido**',
                        description:"Explique quando acontece cada uma!",
                        nestedQuestions: [
                          {
                            destaque: '- **PONTE DE HIDROGÊNIO**',
                            resposta: '- F, O ou N ligados à H'
                          },
                          {
                            destaque: '- **DIPOLO-DIPOLO**',
                            resposta: '- Molécula polar x molécula polar'
                          },
                          {
                            destaque: '- **DIPOLO INDUZIDO**',
                            resposta: '- Molécula apolar x molécula apolar - Obs: Forças de London ou Van der Walls'
                          }
                        ]
                      }
                    ]
                  },{
                    topico: ' Exemplos',
                    perguntas: [
                      {
                        pergunta: '- Para cada um dos casos abaixos dê o caso de interação intermolecular',
                        resposta: '',
                        nestedQuestions: [
                          { destaque: '- **ÁGUA COM SAL**', resposta: '- Íon-dipolo' },
                          {
                            destaque: '- **SAL DE COZINHA**',
                            resposta: '- Ligação iônica'
                          },
                          {
                            destaque: '- **ÁCIDO FLUORÍDRICO**',
                            resposta: '- HF → Ponte de hidrogênio'
                          },
                          {
                            destaque: '- **ÁCIDO CLORÍDRICO**',
                            resposta: '- HCl → dipolo-dipolo'
                          },
                          {
                            destaque: '- **ÁGUA**',
                            resposta: '- H2O → Ponte de hidrogênio'
                          },
                          {
                            destaque: '- **GÁS OXIGÊNIO**',
                            resposta: '- O2 → Dipolo induzido'
                          },
                          {
                            destaque: '- **HEXANO**',
                            resposta: '- C6H8 → Dipolo induzido'
                          },
                          { destaque: '- **ETANOL**', resposta: '- Ponte de hidrogênio' },
                          {
                            destaque: '- **METÓXI-METANO**',
                            resposta: '- Dipolo-dipolo'
                          },
                          { destaque: '- **CETONA**', resposta: '- Dipolo-dipolo' },
                          {
                            destaque: '- **CETONA E ÁGUA**',
                            resposta: '- Ponte de hidrogênio'
                          }
                        ]
                      }
                    ]
                  }]
            }
        }
    },
    gramatica: {
        nome: "Gramática",
        id: 7,
        temas: {
            sintaxe: {
                nome: "Sintaxe",
                id: 1,
                gif: "https://data.whicdn.com/images/141073945/original.gif",
                perguntas: [{
                    topico: "Sujeitos",
                    perguntas: [{
                        pergunta: "O que é um sujeito simples?",
                        resposta: "Visível e com apenas um núcleo"
                    }, ]
                }, ]
            },
            pontuacao: {
                nome: "Pontuação",
                id: 2,
                gif: "https://media1.tenor.com/images/3857d7a491decccf27802e35a6f2e74f/tenor.gif?itemid=16237337",
                perguntas: [{
                    topico: ' Vírgulas',
                    perguntas: [
                      {
                        pergunta: '- Quais os casos que usamos vírgulas *dentro de orações*?',
                        resposta: '',
                        nestedQuestions: [
                          {
                            pergunta: '- Isolar elementos deslocados da ordem **S+V+C**',
                            resposta: '- "*Amanhã, o tempo estará limpo"* - Obs: adjuntos adverbias curtos ( 1 ou 2 palavras) tem uso de vírgula opcional'
                          },
                          {
                            pergunta: '- Separar temos da **mesma função sintática**',
                            resposta: '- "*Chamei meu pai, minha mãe e meu irmão*"'
                          },
                          {
                            pergunta: '- Isolar **aposto e vocativo**',
                            resposta: '- "*Pessoal, o Vlad, professor de história, vai se atrasar"*'
                          },
                          {
                            pergunta: '- Marcar **elipse de verbo**',
                            resposta: '- "*Eu estudo português, Julia, física"*'
                          }
                        ]
                      },
                      {
                        pergunta: '- Quais os casos que usamos vírgulas *entre orações?*',
                        resposta: '',
                        nestedQuestions: [
                          {
                            pergunta: '- Separar **orações coordenadas**',
                            resposta: '- "*Eu queria ir na festa, mas preferi ficar em casa"* - Exceção: **orações de mesmo sujeito e conjunção "e"** - "*Eu queria comer e comprar uma blusa* "'
                          },
                          {
                            pergunta: '- Separar **orações subordinadas**',
                            resposta: '- **Substantiva** - Não ocorre separação - Exceção: apositiva → com 2 pontos: "*só quero uma coisa: que você se acalme"* - **Adjetiva** - **Restritiva** - Sem vírgula: "*os indivíduos que apoiaram o presidente comemoraram o fato"* - **Explicativa** - Com uso de vírgulas: "O*s indivíduos, que apoiaram o presidente, comemoraram o fato"* - **Adverbial** - Isola oração subordinada: "*Mal entrei na estrada, meu pneu furou"*'
                          }
                        ]
                      }
                    ]
                  },{
                    topico: ' Outros',
                    perguntas: [
                      {
                        pergunta: '- Qual a função dos *dois pontos*',
                        resposta: '- **Explicação** - ex: "*Não ande por ruas escuras: pode ter assaltos"*'
                      },
                      {
                        pergunta: '- Qual a função das *reticências*?',
                        resposta: '- Supressão de uma frase - I**mplícito**: "*Eu estudei muito, mas..."*'
                      },
                      {
                        pergunta: '- Qual a função das *aspas*?',
                        resposta: "",
                        nestedQuestions: [
                          { destaque: '- **citação**', resposta: '- *Ele disse: "..."*' },
                          {
                            destaque: '- **gírias, estrangeirismo, variantes**',
                            resposta: '- *Ele é um "playboy"*'
                          },
                          { destaque: '- **ironia**', resposta: '- *Ele é "lindo"*' },
                          {
                            destaque: '- sentido **metafóricos**',
                            resposta: '- *Estamos passando por uma "decomposição" da sociedade*'
                          }
                        ]
                      }
                    ]
                  }]
            }
        }
    },
    filosofia: {
        nome: "Filosofia",
        id: 8,
        temas: {
            filosofiaclassica: {
                nome: "Filosofia Clássica",
                id: 1,
                gif: "https://classicalwisdom.com/wp-content/uploads/2015/09/Plato-and-Aristotle-gif.gif",
                perguntas: [{
                    topico: "",
                    perguntas: [{
                        pergunta: "O que era o Movimento Sofista?",
                        resposta: '"Mestres da retórica considerados “sábios”, “detentores do conhecimento” → Para eles, a verdade seria algo relativo, cabendo a cada um convencer que sua verdade é a correta."',
                    }, {
                        pergunta: "O que era o Sofisma?",
                        resposta: "Enunciado aparentemente verdadeiro, mas de conteúdo falso/duvidoso",

                    }, ]
                },{
                    topico: "Sócrates",
                    perguntas: [{
                        pergunta: "Qual a frase famosa de Sócrates?",
                        resposta: '"Só sei que nada sei"',
                        imagemPergunta: "https://vegazeta.com.br/wp-content/uploads/2018/09/QUEM-FOI-S%C3%93CRATES-1200x681.png",

                    }, {
                        pergunta: "Qual o contexto específico da teoria socrática?",
                        resposta: "Século V a.c. (“de Péricles”/ “de Ouro”) → Auge da democracia ateniense, muito tempo para o ócio criativo."
                    },{
                        pergunta: "Como encontra-se a teoria de Sócrates?",
                        resposta: "Propagou seus conhecimento apenas oralmente, mas seus diálogos são registrados por Platão"
                    },{
                        pergunta: "Qual foi a revolução filosófica provocada?",
                        resposta: "Reverter o tema de Cosmogonia para a Verdade (racionalista)"
                    },{
                        pergunta: "Qual o método socrático?",
                        resposta: `- Reconhecimento da ignorância (“só sei que nada sei”), 
                        - <span class="bold">Maiêutica:</span> ''parir'' o conhecimento pela dialética socrática 
                        
                                ↳ OBS: composto por exortação (estímulo), indagação, ironia (falsa ignorância), aporia (contradição), racionalidade (lógica)`
                    },]
                },{
                    topico: ' Platão',
                    perguntas: [
                      {
                        pergunta: '- No que consistia a ***Teoria das ideias***?',
                        resposta: '- Realidade dividido em dois planos: *inteligível e sensível*. - *Mundo das ideias como causa do mundo das coisas* → tudo o que existe no plano sensível é uma reprodução imperfeita de uma ideia universal do mundo inteligível. - Existência, no mundo inteligível, de *formas perfeitas belas e imutáveis* (conhecimento) → a *essência* metafísica, alma imortal perfeita. - O *mundo das coisas é imperfeito e mutável* (sofismo) → a *aparência*, o não-ser'
                      },
                      {
                        pergunta: '- O que era a ***Alegoria da Caverna***?',
                        resposta: '- Homens que estariam *acorrentados* no fundo de uma gruta subterrânea, acorrentados, e só viam *imagens* projetadas na parede. Separados por um muro, eles não conseguiam visualizar o que havia atrás deles. - Um dos prisioneiros *consegue se desfazer* de suas correntes e sai da caverna (subitamente exposto a liberdade), visualiza o mundo da luz/racionalidade fora da caverna e volta para avisar aos seus companheiros sobre a existência de tal mundo. - Essa história termina com a *morte do prisioneiro* (morto por levar o conhecimento aos seus amigos)',
                        nestedQuestions: [
                          {
                            pergunta: '- Qual a *análise* desse teoria?',
                            resposta: '- sombras da caverna representam a existência de um plano sensível - saída da caverna representa a ida para o plano das ideias'
                          }
                        ]
                      },
                      {
                        pergunta: '- Do que tratava a ***Teoria da Reminiscência***?',
                        resposta: '- *Conhecimento inato*, presente na alma humana. - Conhecer é *lembrar* → dialética da maiêutica'
                      },
                      {
                        pergunta: '- O que Platão pregava em suas *filosofia política* (no livro “A República”)?',
                        resposta: '- *Educação para todos*, funções baseadas na “vocação” do indivíduo.',
                        nestedQuestions: [
                          {
                            pergunta: '- Qual era a *hierarquia* estabelecida pelos cidadãos?',
                            resposta: '- De acordo com as *almas* - Bronze < Prata < Ouro : hierarquia social pela educação'
                          },
                          {
                            pergunta: '- Qual a *forma de governo* defendida pelo autor?',
                            resposta: '- *Sofocracia* governo dos sábios, dos filósofos. (prevalência da razão)'
                          }
                        ]
                      },
                      {
                        pergunta: '- Para o filósofo, do que se tratava a ***Arte***?',
                        resposta: '- Arte como “cópia da cópia” → Mímesis - Ilusão da realidade: o poeta e o pintor são farsantes.'
                      }
                    ]
                  },{
                    topico: ' Aristóteles',
                    perguntas: [
                      {
                        pergunta: '- Quais os métodos de **racionalização** lógica?',
                        resposta: '↳ resposta1 ↳ alo2',
                        nestedQuestions: [
                          {
                            pergunta: '- Silogismo dedutivo',
                            resposta: '- Conexão de ideias, argumentação logicamente perfeita, conclusão racionalmente indiscutível. ↳ 1ª premissa: “Todo homem é mortal” ↳ 2ª premissa: “Sócrates é um homem” ↳ Conclusão: “Logo, Sócrates é mortal”'
                          },
                          {
                            pergunta: '- Indução',
                            resposta: '- Testes e repetições (maior chance de erros) → Não se pode afirmar a universalidade ↳ 1ª premissa: “Todo cão é mortal.” ↳ 10ª premissa: “Todo gato é mortal.” ↳ 100ª premissa: “Todo peixe é mortal” ↳ Conclusão: “Logo, todo animal é mortal”'
                          }
                        ]
                      },
                      {
                        pergunta: '- **Metafísica**',
                        resposta: '- Crítica ao dualismo ontológico do Platão → “Nada chega à mente sem passar pelos sentidos” ; não há um mundo inteligível, nem inato - Há, porém, uma essência presente nas coisas, uma forma comum que define o que é cada objeto e sem a qual um objeto não seria o que é. → Mundo suprassensível, origem de tudo'
                      },
                      {
                        pergunta: '- **Teoria da Causalidade**: Quais são as causas?',
                        resposta: `- 1ª causa / 1° motor = motor imóvel (Deus), ato puro;  primeiro criador. <br>↳ *Causa Formal*: “O que é?” <br>↳ *Causa Material*: “Do que é feito?” <br>↳ *Causa Eficiente*: “Quem fez?” <br>↳ *Causa Final*: “Para quê?”`
                      },
                      {
                        pergunta: '- **Teoria do conhecimento** e **oncologia**',
                        resposta: `- “Tudo se movimenta, passando do ato para potência” (crítica à Parmênides) - Ser em *constante mudança* (ATO ➝ POTÊNCIA ➝ ATO ..........) 
                        ↳ *Potência*: o que o ser pode vir a se tornar; devir 
                        ↳ *Ato*: manifestação atual do ser, realização de uma potência`
                      },
                      {
                        pergunta: '- **Ética**',
                        resposta: '- Discorda de Platão quanto ao caráter inato do bem / virtude. - Virtude deve ser ensinada e aprendida. - Virtuosidade alcançado pela justa medida ( *vícios pela falta* x *vícios pelo excesso* ) - O prêmio da vida virtuosa é a Felicidade ↳ “Dianoética”: capacidades de conhecimento ↳ “Ética”: moral, caráter individual'
                      },
                      {
                        pergunta: '- **Política**',
                        resposta: '- Homem é um animal inerentemente político → não há humanidade sem sociedade política. - Governo ideal é o exercido pelo homem “virtuoso” - Formas normais (monarquia, aristocracia e democracia) ➝ corrupção ➝ Formas anormais (tirania, oligarquia, demagogia)'
                      },
                      {
                        pergunta: '- **Arte**',
                        resposta: '- Mímesis como imitação da realidade, porém é poética - Discorda de Platão quanto ao valor negativo da arte - **Catarse**: processo de purificação da alma pelo teatro trágico.'
                      }
                    ]
                  } ]
            },
            descartes: {
                nome: "Descartes",
                id: 2,
                gif: "https://thumbs.gfycat.com/PlumpArtisticGangesdolphin-size_restricted.gif",
                perguntas: [{
                    topico: 'Filosofia de Descartes',
                    perguntas: [
                      {
                        pergunta: '- Ele era de qual **escola filosófica**? Qual era seu **método**?',
                        resposta: '- **Ceticismo metodológico**: dúvida de todos os fatos e afirmações - **Racionalismo**: renúncia aos sentidos como fonte de conhecimento.'
                      },
                      {
                        pergunta: '- O que o filósofo concluiu no ***Primeiro Cogito***? Qual a famosa **frase** utilizada?',
                        resposta: '- Não é possível duvidar do fato de que sou um ser que exercita a dúvida, que pensa - “Penso, logo existo”'
                      },
                      {
                        pergunta: '- O que Descartes conclui sobre a **existência de Deus**?',
                        resposta: '- A ideia inata de **perfeição**, infinidade e da presença de conceitos matemáticos na mente **comprovaria a existência de Deus**. - Imperfeição humana justificada por ser **parte da totalidade perfeita**'
                      },
                      {
                        pergunta: '- **OBS**: Como ele retrata o **dualismo mente-corpo?**',
                        resposta: '- Essência humana como substância pensante e inextensa, entidade metafísica, n**ão necessita de um corpo para existir** - Corpo extenso e material',
                        obs: true
                      },
                      {
                        pergunta: '- **OBS**: Qual eram os **procedimentos** utilizados?',
                        resposta: `- Ideias claras, ausência de dúvidas
                        - Divisão do problema em partes menores
                        - Ordem do simples para o complexo
                        - Realização de revisões.`,
                        obs: true
                      },
                      {
                        pergunta: '- **OBS**: O que era a hipótese do **gênio maligno**?',
                        resposta: '- Deus do mal que manipula a realidade para enganar, para fazer crer na existência do mundo irreal',
                        obs: true
                      },
                      {
                        pergunta: '- **OBS OBS**: Quem pode utilizar a linguagem?',
                        resposta: '- Humanos são os únicos que podem, de forma consciente, utilizar a linguagem (diferentemente de máquinas e animais)',
                        obs: true
                      }
                    ]
                  }]
            }
        }
    },
    sociologia: {
        nome: "Sociologia",
        id: 9,
        temas: {
            cultura: {
                loading: true,
                nome: "Cultura",
                id: 1,
                gif: "https://i.makeagif.com/media/4-03-2017/DIGEiJ.gif",
                perguntas: [{
                    topico: "Definição",
                    perguntas: [{
                        pergunta: "O que é cultura imaterial?",
                        resposta: "Danças, rituais..."
                    }, ]
                }, ]
            },
        }
    },
    historia: {
        nome: "História",
        id: 10,
        temas: {
            segundaguerra: {
                nome: "Segunda Guerra",
                id: 1,
                gif: "https://media.tenor.com/images/3e8a577d9927905a06f75b90d3757a92/tenor.gif",
                perguntas: [{
                    topico: "Alianças",
                    perguntas: [{
                            pergunta: "Qual foram os dois agrupamentos militares e quais países faziam parte de cada um?",
                            resposta: "EIXO: Alemanha, Itália e Japão  ALIADOS: URSS, EUA, Inglaterra, França",
                            imagemResposta: "https://1.bp.blogspot.com/-Br_gosLXecE/ULdHZRclu2I/AAAAAAAAAFQ/T08ws-H--aQ/s1600/Apresenta%C3%A7%C3%A3o1.jpg",
                            nestedQuestions: [{
                                pergunta: "Em que ano acabou?",
                                resposta: "1945"
                            }, {
                                pergunta: "Pergunta",
                                imagemResposta: "https://1.bp.blogspot.com/-Br_gosLXecE/ULdHZRclu2I/AAAAAAAAAFQ/T08ws-H--aQ/s1600/Apresenta%C3%A7%C3%A3o1.jpg"
                            },{
                                pergunta: "Pergunta",
                                imagemResposta: "https://1.bp.blogspot.com/-Br_gosLXecE/ULdHZRclu2I/AAAAAAAAAFQ/T08ws-H--aQ/s1600/Apresenta%C3%A7%C3%A3o1.jpg"
                            },{
                                pergunta: "Pergunta",
                                imagemResposta: "https://1.bp.blogspot.com/-Br_gosLXecE/ULdHZRclu2I/AAAAAAAAAFQ/T08ws-H--aQ/s1600/Apresenta%C3%A7%C3%A3o1.jpg"
                            },]
                        },
                    ]
                }, ]
            },
            revolucaocubana: {
                nome: "Revolução Cubana",
                id: 2,
                gif: "https://media1.tenor.com/images/f0f853eefafdab07f664ddb35b620629/tenor.gif?itemid=14927106",
                perguntas: [{
                    topico: "",
                    perguntas: [{
                            pergunta: "O que foi a Emenda Platt?",
                            resposta: "Autorizava os EUA intervir política e militarmente a qualquer momento em Cuba"
                        }, {
                            pergunta: "Quem e por que implementaram essa emenda?",
                            resposta: "Os EUA ajudaram Cuba com a independência e organizaram uma assembleia para a elaboração da primeira constituição cubana. A aprovação dela só aconteceu depois que o senado norte-americano garantiu a aprovação da chamada Emenda"
                        },
                        {
                            pergunta: "Qual foi a grande marca do governo de Fungêncio Batista?",
                            resposta: "Foi um ditador e favorecia empresários, latifundiários e o governo norte-americanos"
                        },
                        {
                            pergunta: "A qual movimento Fidel Castro era associado?",
                            resposta: "Era a favor do Movimento Nacionalista (oposto à Fungêncio)"
                        },
                        {
                            pergunta: "Caracterize o Movimento Revolucionário (MR-26)",
                            resposta: "Che Guevara e Fidel Castro → por meio da guerra de guerrilhas e foquismo ganham apoio da população para implementar o nacionalismo"
                        },
                        {
                            pergunta: "O que foi o Foquismo?",
                            resposta: "Foquismo → espalhar focos de resistência guerrilheira pelo território para dispersar seus ataques e pegar os inimigos de surpresa"
                        },
                        {
                            pergunta: "Quais medidas foram adotadas após a Revolução Cubana?",
                            resposta: "Medidas nacionalistas → Reforma agrária, estatização de empresas estrangeiras"
                        },
                        {
                            pergunta: "Quem ficou descontente com essas medidas? O que fizeram?",
                            resposta: "Os EUA, pois perderam territórios e economia (latifúndios e empresas). Implementaram embargo econômico a Cuba e depois deixam de ser parceiros comerciais.",
                            imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/776617ac-5cbb-4b61-b72b-13fb6417305f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T031856Z&X-Amz-Expires=86400&X-Amz-Signature=f2cc6aac34f59302511a371503756bd6cf8a217f926f8112450755e5342ec437&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                        },
                        {
                            pergunta: "Qual o motivo da aproximação Cuba-URSS?",
                            resposta: "Aproveitando a fragilidade economica de Cuba e com a necessidade de aliados no contexto da guerra fria, Crushev se aproxima de Cuba economica e politicamente (socialismo)"
                        },
                        {
                            pergunta: "O que foi a Crise dos mísseis?",
                            resposta: "U2 estadunidense sobrevoa Cuba e descobre bases militares soviéticas (uma grande ameaça aos EUA, e o mais próximo que chegamos da 3ª G.M.) "
                        }
                    ]}]
            },
            revolucaoindustrial: {
                nome: "Revolução Industrial",
                id:3,
                gif: "https://media.giphy.com/media/Tj4xrJS9l1FV2ezfVc/giphy.gif",
                perguntas: [{
                    topico: "Contexto e pioneirismo",
                    perguntas: [{
                        pergunta: "Qual o contexto da revolução industrial?",
                        resposta: "Passagem do capitalismo comercial para o industrial"
                    }, {
                        pergunta: "Quais as razões para o pioneirismo inglês?",
                        resposta: "- Burguesia forte após a Revolução Gloriosa  - “Cercamentos” liberaram mão-de-obra e matéria-prima  - Acúmulo de capital"
                    }, {
                        pergunta: "Por que houve o acúmulo de capital?",
                        resposta: "Tratado de Methuen e comércio marítimo"
                    }]
                }, {
                    topico: "Características e consequências",
                    perguntas: [{
                        pergunta: "Qual era o mercado consumidor?",
                        resposta: "Colônias inglesas e Europa"
                    }, {
                        pergunta: "Quais as principais características?",
                        resposta: "Começo na Inglaterra (déspotas esclarecidos de outros países tomam iniciativas de fomento à manufatura para competição)",
                        nestedQuestions: [{
                            pergunta: "O que são os déspotas esclarecidos?",
                            resposta: "resposta"
                        }]
                    }, {
                        pergunta: "Quais foram as consequências?",
                        resposta: "Surgimento do proletariado urbano"
                    }]
                }, {
                    topico: "Movimentos sociais",
                    perguntas: [{
                        pergunta: "Quais foram os <span class='bold'>três</span> tipos de movimentos sociais mais comuns na época?",
                        resposta: `
                        - <span class='bold'>Trade Unions:</span> prestavam assistência aos trabalhadores (sindicatos) 
                        - <span class='bold'>Ludismo:</span> destruição das maquinas 
                        - <span class='bold'>Cartismo:</span> reunião de assinaturas na “Carta do Povo” e entrega ao parlamento inglês, exigindo voto secreto e universal`
                    }]
                }]
            },
            revolucaofrancesa: {
              nome: "Revolução Francesa",
              id: 4,
              gif: "https://pa1.narvii.com/6973/9d2d39c4c087bc4c77b1b756b72a0738546b16f4r1-356-200_hq.gif",
              perguntas: [{
                topico: ' PRÉ-REVOLUÇÃO',
                perguntas: [
                  {
                    pergunta: '- Qual é **contexto** pré-revolucionário? Quais **ideias** permeavam a sociedade?',
                    resposta: '- Crise financeira → alto preço dos alimentos - Ideais iluministas - Concentração de renda e de direitos'
                  }
                ]
              },{
                topico: ' CONVOCAÇÃO DOS ESTADOS GERAIS',
                perguntas: [
                  {
                    pergunta: '- **OBS**: Por que foi convocada a **Assembleia dos Notáveis**?',
                    resposta: '- Proposta de aumentar os impostos para todos, incluindo nobreza e clero',
                    obs: true
                  },
                  {
                    pergunta: '- O que aconteceu na convocação da **Assembleia dos Estados Gerais**?',
                    resposta: '- Impasse votação por cabeça ou por Estado',
                    nestedQuestions: [
                      {
                        pergunta: '- Por que o **Terceiro Estado** se reuniu?',
                        resposta: '- Para criar uma Constituição'
                      },
                      {
                        pergunta: '- **OBS**: O que se organizou nesse período?',
                        resposta: '- Uma guarda nacional burguesa',
                        obs: true
                      }
                    ]
                  }
                ]
              },{
                topico: ' ASSEMBLEIA CONSTITUINTE',
                perguntas: [
                  {
                    pergunta: '- Qual é o **marco inicial** da Revolução Francesa?',
                    resposta: '- Queda da Bastilha em 1789'
                  },
                  {
                    pergunta: '- O que foi o **Grande Medo**?',
                    resposta: '- Invasão de terras dos nobres pelos camponeses',
                  },{
                    pergunta: '- Por que houve **aproximação** entre burguesia e nobreza?',
                    resposta: "- Receio da popularização da Revolução",
                    description: "Defina as medidas tomadas para **acalmar os camponeses**",
                    nestedQuestions: [
                      {
                          destaque: '**DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO**',
                          resposta: '- Garantiu a igualdade jurídica, propriedade privada e liberdades política e econômica' 
                      }, {
                        destaque: '**CONSTITUIÇÃO CIVIL DO CLERO**',
                        resposta: '- Faz com que eles se tornem funcionários do Estado e toma posse dos bens da Igreja'
                      }, {
                        pergunta: '- **OBS**: O que foi a **Declaração dos Direitos da Mulher**?',
                        obs: true,
                        resposta: "- Tentativa de igualdade de gênero → fracassou"
                      }
                    ]
                  }
                ]
              }, {
                topico: ' MONARQUIA CONSTITUCIONAL',
                perguntas: [
                  {
                    pergunta: '- O que marca o **início da Monarquia Constituicional**? Cite **características** implementadas',
                    resposta: '- Conclusão da Constituição com limitação do poder do Rei, voto censitário e igualdade jurídica'
                  },
                  {
                    pergunta: '- Qual era a **divisão** que existia na Assembleia?',
                    resposta: '- **GIRONDINOS** → "direita" → conservadores - **JACOBINOS** → "esquerda" → radicais'
                  },
                  {
                    pergunta: '- O que foi a **Declaração de Pillnitz**? Por que isso foi feito?',
                    resposta: '- Formação de um exército (Áustria + Prússia) para combater a revolução - Medo dela se alastar para outros países',
                    nestedQuestions: [
                      {
                        pergunta: '- Como esse **exército foi detido**?',
                        resposta: '- União da população francesa na **Comuna Insurreicional de Paris**'
                      }
                    ]
                  }
                ]
              },{
                topico: ' REPÚBLICA JACOBINA',
                perguntas: [
                  {
                    pergunta: '- **OBS**: Que **instituições** foram criadas nesse período?',
                    resposta: '- Criação do Comitê de Salvação Pública e do Tribunal Revolucionário',
                    obs: true
                  },
                  {
                    pergunta: '- O que aconteceu com o **rei**?',
                    resposta: '- Condenação de Luís XVI à guilhotina'
                  },
                  {
                    pergunta: '- O que a **Nova Constituição** criada nesse período previa?',
                    resposta: '- Voto universal masculino, ensino público gratuito e convocação obrigatória para guerra',
                    nestedQuestions: [
                      {
                        destaque: '- **LEI DO MÁXIMO**',
                        resposta: '- Congelamento dos preços'
                      }
                    ]
                  },
                  {
                    pergunta: '- O que foi o **Período do Terror**? Quem o liderou e que lei foi instaurada na época?',
                    resposta: '- O período do Terror foi um tempo de muitas execuções (de qualquer um que era contra a Revolução) - Liderada por Robespierre',
                    nestedQuestions: [
                      {
                        destaque: '- **Lei dos Suspeitos**',
                        resposta: '- Qualquer pessoa suspeita de ir contra a revolução era guilhotinada'
                      }
                    ]
                  },
                  {
                    pergunta: '- **Como e por que** **acabou**?',
                    resposta: '- Perda de apoio popular',
                    nestedQuestions: [
                      {
                        pergunta: '- **Reação Termidoriana**',
                        resposta: '- Golpe com a ascenção dos girondinos'
                      }
                    ]
                  }
                ]
              },{
                topico: ' DIRETÓRIO',
                perguntas: [
                  {
                    pergunta: '- O que aconteceu no começo?',
                    resposta: '- Criação de uma nova Constituição que anulava medidas jacobinas'
                  },
                  {
                    pergunta: '- OBS: Cite dois golpes fracassados do período',
                    resposta: '- **MONARQUISTAS** - **CONSPIRAÇÃO DOS IGUAIS** → jacobinos',
                    obs: true
                  },
                  {
                    pergunta: '- Como **Napoleão** chega ao poder?',
                    resposta: '- Através do golpe de **18 do Brumário**, criando uma nova forma de governo → CONSULADO'
                  }
                ]
              } ]
            },
            civilizacoesprecambrianas: {
              nome: "Civilizações pré-cambrianas",
              id: 5,
              gif: "https://media1.tenor.com/images/5e5d5457f673e57a38d6c07f9c665d96/tenor.gif?itemid=4576836",
              perguntas: [
                {
                  topico: ' MAIAS',
                  perguntas: [
                    {
                      destaque: '- **ECONOMIA**',
                      resposta: '- Agricultura irrigada (milho, cacau e batata) e queimadas com desgaste do solo'
                    },
                    {
                      destaque: '- **SOCIEDADE**',
                      resposta: '- elite, funcionários estatais e agricultores.',
                      obs: true
                    },
                    {
                      destaque: '- **CULTURA**',
                      resposta: '- uso do número zero, calendários lunar e solar, politeísta',
                      obs: true
                    },
                    {
                      destaque: '- **DESAPARECIMENTO**',
                      resposta: '- conflitos e guerras entre cidades e/ou desgaste do solo'
                    },
                    {
                      pergunta: '- OBS: os Maias formaram império?',
                      resposta: '- não, eles organizavam-se em cidades-estados',
                      obs: true
                    }
                  ]
                },
                {
                  topico: ' ASTECAS',
                  perguntas: [
                    {
                      destaque: '- **OBS**: **FORMAÇÃO**',
                      resposta: '- foram do norte ao sul dominando outros povos e absorvendo suas culturas. ↳ Cobrança pesada de tributos, de pessoas para sacrifícios e pessoas para participação em construções estatais',
                      obs: true
                    },
                    {
                      destaque: '- **ECONOMIA**',
                      resposta: '- agricultura em **chinampas** (ilhas artificiais)'
                    },
                    {
                      destaque: '- **OBS**: **SOCIEDADE**',
                      resposta: '- imperador e família, sacerdotes e chefes, comerciantes, camponeses, artesãos e escravos',
                      obs: true
                    },
                    {
                      destaque: '- **CULTURA**',
                      resposta: '- politeísmo com sacrifícios humanos, escrita pictográfica, acúmulo de ouro de prata, escolas, calendário cíclico.'
                    },
                    {
                      destaque: '- **DESAPARECIMENTO**',
                      resposta: '- conquista pelos espanhóis (Hernan Cortez)'
                    }
                  ]
                },
                {
                  topico: ' INCAS',
                  perguntas: [
                    {
                      destaque: '- **ECONOMIA**',
                      resposta: '- agricultura (milho e batata) em terraços, canais de irrigação, divisões entre terras da comunidade, dos deuses e estatais'
                    },
                    {
                      destaque: '- **OBS**:**SOCIEDADE**',
                      resposta: '- Imperador, sacerdotes, lideres locais, militares, artesãos, comerciantes, camponeses e escravos',
                      obs: true
                    },
                    {
                      destaque: '- **CULTURA**',
                      resposta: '- politeísmo com sacrifícios humanos, correios (chasquis), estradas, nós em quipus (contabilidade), **não tinham escrita**'
                    },
                    {
                      destaque: '- **DESAPARECIMENTO**',
                      resposta: '- conquista pelos espanhóis (Francisco Pizarro), disputa pelo trono'
                    }
                  ]
                }
              ]
            },
            unificacoestardias: {
              nome: "Unificações tardias",
              id: 6,
              gif: "https://news.crunchbase.com/wp-content/uploads/2018/07/germany.gif",
              perguntas: [
                {
                  topico: ' Unificação Alemã',
                  perguntas: [
                    {
                      pergunta: '- Quem foi o principal **personagem**?',
                      resposta: '- Otto Von Bismarck'
                    },
                    {
                      pergunta: '- Qual seu **caráter** comparado à italiana?',
                      resposta: '- Conservador'
                    },
                    {
                      pergunta: '- Quais foram as **três guerras** para unificar a Alemanha?',
                      resposta: '',
                      description: "Diga **contra quem** foi, quem **ganhou** e quais suas **consequências**",
                      nestedQuestions: [
                        {
                          destaque: '- ***GUERRA DOS DUCADOS***',
                          resposta: '- Contra DINAMARCA - Vitória da Prússia com apoio da Áustria'
                        },
                        {
                          destaque: '- ***GUERRA DAS SETE SEMANAS***',
                          resposta: '- Contra Áustria - Qual acordo foi tratado com a **França**? - Acordo para que ela não interferisse na guerra'
                        },
                        {
                          destaque: '- ***GUERRA FRANCO-PRUSSIANA***',
                          resposta: '- Contra a França - Derrubada de Napoleão III e instauração da **Comuna de Paris**'
                        }, {
                          pergunta: "O que foi a ***Comuna de Paris***?",
                          resposta: "Movimento operário socialista que durou pouco",
                        }
                      ]
                    }
                  ]
                },
                {
                  topico: ' Unificação Italiana',
                  perguntas: [
                    {
                      pergunta: '- Quem foi o principal **personagem**?',
                      resposta: '- Giuseppe Garibaldi'
                    },
                    {
                      pergunta: '- **OBS**: Qual foi a **divergencia** inicial?',
                      resposta: '- Escolha entre modelo republicano ou monárquico',
                      obs: true
                    },
                    {
                      pergunta: '- Qual foi a **primeira conquista**? Obteve **apoio** de que países?',
                      resposta: '- **Veneza** → apoio prussiano e francês'
                    },
                    {
                      pergunta: '- Qual foi a posição **papal**?',
                      resposta: '- Oposição de Pio IX, que ainda contava com apoio francês',
                      nestedQuestions: [
                        {
                          pergunta: '- Qual foi a **consequência** da **Guerra Franco-Prussiana** para a Itália?',
                          resposta: '- Perda de apoio francês pelo papa (oportunidade para a anexação de Roma)'
                        }
                      ]
                    },
                    {
                      pergunta: '- O que foi a ***Questão Romana***?',
                      resposta: '- Não-reconhecimento da unificação italiana pela Igreja',
                      nestedQuestions: [
                        {
                          pergunta: '- **Quando** e **por quem** foi **resolvida**?',
                          resposta: '- Com o ***Tratado de Latrão*** de Mussolini'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
        }
    },
}

export default Dados