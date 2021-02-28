import axios from "axios"
import unconvertData from "./unconvertData"

function Load (user) {
    async function getData() {
        let dataRecovered
        if (user) {
            let DadosImport = await axios.post("/api/salvar", {
                user: user,
                func: "fetch"
            })
            dataRecovered = DadosImport.data
            unconvertData(dataRecovered.dados)
            return dataRecovered
        } else return null
    }
    return getData()
}



export default Load