import React from 'react'
import Header from '../Estrutural/header'
import Footer from '../Estrutural/footer'
import Navigation from '../Estrutural/navegation'

const updatenotes = () => {

    const implementados = [
        "Sistema de login e senha",
        "Salvamento dos cards já feitos",
        "MAIS CARDS!",
    ]
    const vemai = [
        "Melhorias no design para celulares e tablets",
        "Introdução da aba de sugestões",
        "Implementação de anúncios pequenos e sistema de doações",
        "Estamos trabalhando em ainda mais cards!"  
    ]

    return (
        <div>
            <Header />
            <Navigation />
            <div className="justcolor cardDiv">
                <h2>NOTAS DE ATUALIZAÇÃO</h2>
                <div className="borders list margin">
                    <span className="destaque">Implementados</span>
                    <ol>
                        {implementados.map((el) => {
                            return <li className="liComo">{el}</li>
                        })}
                    </ol>
                </div>
                <div className="borders list margin">
                    <span className="destaque">Vem aí</span>
                    <ol>
                    {vemai.map((el) => {
                            return <li className="liComo">{el}</li>
                        })}
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default updatenotes