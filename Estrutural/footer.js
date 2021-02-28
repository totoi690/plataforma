import React from 'react'
import Link from 'next/link'

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
        {this.state.showMore ? 
        <div className="showMoreDiv">
            Você achou o easter egg! 🥚🐇 
            <br></br> 
            Muito obrigado por acessar o site!
            <hr className="hrfaderl"/>
            <Link href={"/updatenotes"} style={{ textDecoration: 'none' }}><a className="normalfont">  NOTAS DE ATUALIZAÇÃO   </a></Link>
            <hr className="hrfaderl"/>
            </div> : null}
        @HeitorTanoue {'\u2728'} - v.1.0.2
        {queroverobotao ? botaodeapagartudo: null}
    </footer>
    </div>)
}
} 

export default Footer