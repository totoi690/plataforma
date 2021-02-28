import Dados from "../../Dados/dados"

function unconvertData (receivedData) {
    Object.entries(receivedData).map((e1) => {
        Object.entries(e1[1]).map ((e2) => {
            e2[1].map((e3, ind) => {
                //TOPICOS
                e3.map((pergunta, indP) => {
                    Dados[e1[0]].temas[e2[0]].perguntas[ind].perguntas[indP].pontos = pergunta[0].pontos
                    Dados[e1[0]].temas[e2[0]].perguntas[ind].perguntas[indP].cor = pergunta[0].cor

                    if (pergunta[1]) {
                    pergunta[1].map((nested, indN) => {
                        Dados[e1[0]].temas[e2[0]].perguntas[ind].perguntas[indP].nestedQuestions[indN].pontos = nested.pontos
                        Dados[e1[0]].temas[e2[0]].perguntas[ind].perguntas[indP].nestedQuestions[indN].cor = nested.cor
                    })

                }
                })
            })
        })
    })
    return Dados
}

export default unconvertData