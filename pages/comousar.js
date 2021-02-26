import React from 'react'
import Header from '../Estrutural/header'
import Footer from '../Estrutural/footer'
import Navegation from '../Estrutural/navegation'

class ComoUsar extends React.Component {
    render() {
        return (<>
        <Header/>
        <Navegation/>
            <div className="justcolor cardDiv">
            <h2>{"Como usar a plataforma:".toUpperCase()}</h2>

            <iframe className="iframe"
            src="https://youtube.com/embed/9BqsGKCMeM8">
            </iframe>

            <div className="list">
            <ol>
                <li className="liComo">Escolha um tema no <a href="/menu">MENU</a></li>
                <li className="liComo">Faça a pergunta a si mesmo, sem trapacear, e responda</li>
                <li className="liComo">Confira a resposta clicando no cartão e marque, nos botões, quão bem você foi</li>
                <li className="liComo">A partir de agora esse cartão entrará para revisão quando julgarmos necessário</li>
            </ol>
            <div className="margin"><b className="bold">APROVEITE!</b></div>

            </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default ComoUsar