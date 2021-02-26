import Dados from "../Dados/dados"

let SearchOptions = () => {
        let array = []
        Object.entries(Dados).map((e1) => {
            let materia = e1[0]
            let materiaNome = e1[1].nome
            return (e1.map((e2) => {
                if (typeof e2 !== "string") {
                    return (Object.entries(e2.temas).map((e4) => {
                        let nome = e4[0]
                        let temaNome = e4[1].nome
                        let gif = e4[1].gif
                        array.push({
                            tema: nome,
                            temaNome: temaNome,
                            materiaNome: materiaNome,
                            materia: materia,
                            gif: gif
                        })
                        return ""
                    }))
                } else {return ""}
            }))
        })
        let organizado = array.sort((a, b) => a.temaNome.localeCompare(b.temaNome))
        return (organizado)
}

export default SearchOptions