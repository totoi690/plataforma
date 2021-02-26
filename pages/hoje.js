import React from 'react'
import Header from "../Estrutural/header"
import HojeBody from "../Estrutural/hojeBody"
import Footer from "../Estrutural/footer"
import Navegation from "../Estrutural/navegation"
import { CSSTransition } from "react-transition-group"

class Hoje extends React.Component {
    constructor () {
        super()
        this.state = {animate: true}
    }

    render() {
        return (
            <div>
            <Header />
            <Navegation />

            <div className="justcolor">
            <CSSTransition
                in={this.state.animate}
                 appear={true}
                 timeout={500}
                 classNames={"cartao"}>
            <HojeBody />
            </CSSTransition>
            </div>

            <Footer />
            </div>
        )
    }
}

export default Hoje