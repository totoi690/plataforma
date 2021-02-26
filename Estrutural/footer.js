import React from 'react'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = { showMore: false }
    }

render() {
    const botaodeapagartudo = <button onClick={() => {localStorage.clear()}}>Apagar pontos</button>
    const queroverobotao = false

    return(<div>
    <footer onClick={() => {this.setState({ showMore: !this.state.showMore})}}>
        {this.state.showMore ? <div className="showMoreDiv">Você achou o easter egg! 🥚🐇 <br></br> Muito obrigado por acessar o site! <hr></hr></div> : null}
        @HeitorTanoue {'\u2728'} - v.1.0.0
        {queroverobotao ? botaodeapagartudo: null}
    </footer>
    </div>)
}
} 

export default Footer