import axios from "axios"
import convertData from "./convertData"

function Save(user, bool) {
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    async function getData() {
        const DATA = convertData()
        let dadosImport
        if (user) {  
            if (getCookie("server")) {
                dadosImport = getCookie("server")
            } else {
                setCookie("server", user, 10)
            dadosImport = await axios.post("/api/salvar", {
                user: user,
                func: "fetch"
            })
            }
            
            if (dadosImport) {

                if ((user && (user === dadosImport || user === dadosImport.data.user))) {
                    //USUÁRIO JÁ TEM CONTA NO BANCO DE DADOS
                     axios.post("/api/salvar", {
                        func: "update",
                        user: user,
                        dados: DATA
                    })
                } else if (user) {
                    //USUÁRIO AINDA NÃO TEM CONTA NO BANCO DE DADOS
                    axios.post("/api/salvar", {
                        func: "postFirst",
                        user: user,
                        dados: DATA
                    })
                }
                if (bool) {
                    axios.post("/api/salvar", {
                        func: "close",
                    })}
            } else {
                //OCORREU UM ERRO NA HORA DE ACHAR O USUÁRIO
                return "Erro do banco de dados"
            }

        } else return "Usuário não-logado"
    }
    return getData()
}

export default Save