import Dados from "../../Dados/dados"

function convertData () {
    let DadosNovos = {}

    Object.entries(Dados).map((e1) => {
        let materia = e1[0]
        DadosNovos[materia] = {}
        return (e1.map((e2) => {
            if (typeof e2 !== "string") {
                return (Object.entries(e2.temas).map((e4) => {
                    let nome = e4[0]
                    DadosNovos[materia][nome] = []
                    return (e4[1].perguntas.map((e5, ind) => {
                        DadosNovos[materia][nome][ind] = []
                        return (e5.perguntas.map((pergunta, ind2) => {
                        DadosNovos[materia][nome][ind].push([{pontos: pergunta.pontos, cor: pergunta.cor, data: pergunta.data, spacedData: pergunta.spacedData}])
                        if (pergunta.nestedQuestions) {
                            DadosNovos[materia][nome][ind][ind2].push([])
                            pergunta.nestedQuestions.map((nested) => {
                                DadosNovos[materia][nome][ind][ind2][1].push({pontos: nested.pontos, cor: nested.cor})
                            })
                        }

                        }))
                    }))
                }))
            } else {return ""}
        }))
    })
    return DadosNovos
}

export default convertData