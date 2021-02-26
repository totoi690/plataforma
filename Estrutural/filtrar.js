import React from 'react'
import RenderOptions from "../Funções/renderOptions"
import Dados from "../Dados/dados"

class Filtrar extends React.Component {
    constructor() {
        super()
        this.handleChangeMateria = this.handleChangeMateria.bind(this)
    }

    handleChangeMateria(e) {
        let materia = e.target.value
        this.props.handler("filtrar", materia)
        this.props.handler("fanimate", !this.props.fn)
      }

    render() {
        let newArray = []
        newArray[0] = "todos"
        newArray[1] = {nome: "-------------"}
        let arrayFiltrar = Object.entries(Dados)
        arrayFiltrar.push(newArray)

        return(
            <div>
            <form onChange={this.handleChangeMateria}>Filtrar: <select value={this.props.selectMateria} onChange={this.handleChangeMateria}>{<RenderOptions tema={arrayFiltrar} />}</select></form>
            </div>
        )
    }
}

export default Filtrar