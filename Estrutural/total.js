import React from 'react'

class Total extends React.Component {
    constructor () {
        super()
        this.state = {loading: true, finished: false, pontos: 0}
        this.atualizarPontos = this.atualizarPontos.bind(this)
    }

    componentDidMount() {
        this.atualizarPontos()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.load !== this.props.load || 
           prevProps.materia.nome !== this.props.materia.nome || 
           prevProps.tema.nome !== this.props.tema.nome) {
            this.atualizarPontos()
        }
    }

    atualizarPontos () {
        let pontos = this.props.tema.perguntas
        let total = []
        pontos.map((element) => {
            return( element.perguntas.map(element1 => {
                if (element1.nestedQuestions !== undefined){
                element1.nestedQuestions.map((element2) => {
                    return(element2.pontos === undefined ? total.push(0) : total.push(element2.pontos))
                })}
                return(element1.pontos === undefined ? total.push(0) : total.push(element1.pontos))
            }
            ))
        })

        let somarTudo = (num1, num2) => {return(num1 + num2)}
        let intermed = [].concat.apply([], total);
        let arraySoma = intermed.reduce(somarTudo)

        let finished = intermed.every((element) => {
            if (element === 0) {return false}
            else {return true}
        })

        this.setState({pontos: arraySoma, finished: finished})
    }

    render() {
        return(<div>
            <div className="totalDiv"><div>{this.props.materia.nome} - {this.props.tema.nome}{this.state.finished ? " - ✅" : null}</div>
            <span className="totalSpan">Total de pontos: </span>{this.state.pontos}</div></div>)
    }
}

export default Total