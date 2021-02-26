//import Dados from "../Dados/dados"

function Salvar (selecttema) { /*
if (localStorage.getItem('localSave')) {
    let saveLocal = Object.entries(JSON.parse(localStorage.getItem('localSave')))
    let DadosCorrigido = saveLocal.map((element) => {
        if(element[1][selecttema] !== undefined) {
            console.log(Dados[element[0]].temas,element[1])
            let inDados = Dados[element[0]].temas[element[1][selecttema][0]].perguntas
            let arrayPontosTema = element[1][selecttema][1]

            inDados.map((element1, index1) => {
                element1.pontos = arrayPontosTema[index1]
            })

            Dados[element[0]].temas[element[1][selecttema][0]].perguntas = inDados
        }
    })
}*/}

export default Salvar