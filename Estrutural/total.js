import React from 'react'

class Total extends React.Component {
    render() {
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

        /*if (!localStorage.getItem('localSave')) {
            localStorage.clear()
            let save = {}; let object = {};
            object[this.props.selecttema] = arrayPontos
            save[this.props.selectmateria] = object;
            localStorage.setItem('localSave', JSON.stringify(save))
        } else {
            let saveLocal = JSON.parse(localStorage.getItem('localSave'))
            if (saveLocal[this.props.selectmateria] === undefined) {
                let object = {};
                object[this.props.selecttema] = arrayPontos
                saveLocal[this.props.selectmateria] = object;
                localStorage.setItem('localSave', JSON.stringify(saveLocal))
            };
            if (saveLocal[this.props.selectmateria][this.props.selecttema] === undefined) {
                let object = [this.props.selecttema, arrayPontos];
                saveLocal[this.props.selectmateria][this.props.selecttema] = object
                localStorage.setItem('localSave', JSON.stringify(saveLocal))
            } else {
                
            }
        }*/

        return(<div>
            <div className="totalDiv"><div>{this.props.materia.nome} - {this.props.tema.nome}{finished ? " - ✅" : null}</div>
            <span className="totalSpan">Total de pontos: </span>{arraySoma}</div></div>)
    }
}

export default Total