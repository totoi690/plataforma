import React from 'react'
import Dados from "../Dados/dados"
import RenderOptions from "../Funções/renderOptions"

class Forms extends React.Component {
    constructor() {
        super()
        this.handleChangeTema = this.handleChangeTema.bind(this)
        this.handleChangeMateria = this.handleChangeMateria.bind(this)
    }
    handleChangeTema(e) {
        this.props.handler("selectTema", e.target.value)
        this.props.handler("selectMateria", this.props.selectMateria)
        this.props.handler("animatecards", !this.props.ca)
      }
      handleChangeMateria(e) {
        this.props.handler("selectTema", Object.keys(Dados[e.target.value].temas)[0])
        this.props.handler("selectMateria", e.target.value)
        this.props.handler("animatecards", !this.props.ca)
      }


      render() {
          return(<div className="outerFormsDiv"><div className="forms">
         <form onChange={this.handleChangeMateria}>Matéria: <select value={this.props.selectMateria} onChange={this.handleChangeMateria}>{<RenderOptions tema={this.props.materias}/>}</select></form>
        <form onChange={this.handleChangeTema}>Tema:  <select value={this.props.selectTema} onChange={this.handleChangeTema}>{<RenderOptions tema={this.props.temas}/>}</select></form></div></div>)
      }

}

export default Forms