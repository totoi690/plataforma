import React from 'react'
import Header from '../Estrutural/header'
import RenderBlocks from "../Funções/renderBlocks"
import Footer from "../Estrutural/footer"
import Filtrar from "../Estrutural/filtrar"
import { CSSTransition } from "react-transition-group"
import Navegation from "../Estrutural/navegation"
import Select from "react-dropdown-select"
import SearchOptions from "../Funções/searchOptions"
//import { CloudinaryContext, Image } from "cloudinary-react"

class Menu extends React.Component {
    constructor() {
        super()
        this.handler = this.handler.bind(this)
        this.state = { filtrar: "todos", animate: true , fanimate: true}
    }

    handler(prop1, prop2) {
        this.setState({[prop1]: prop2})
      }

    render() {
        return (
        <div className="principal">
        <Header page={"menu"} handler={this.handler}/>
        <Navegation />

        <div className="justcolor">
        <CSSTransition
                in={this.state.animate}
                 appear={true}
                 timeout={500}
                 classNames={"fade"}>
        <div className="intro">
            <div className="filtrarSelect">
            <Filtrar handler={this.handler} fn={this.state.fanimate}/>
            <div className="selectDiv">
            <Select
                className={"searchField"}
                options={SearchOptions()} 
                searchBy={"temaNome"}
                searchable={true} 
                valueField={"tema"} 
                labelField={"temaNome"} 
                onChange={(values) => this.setState(prevState => {return({ search: values , fanimate: !prevState.fanimate})})}
                dropdownHandle={true}
                separator={true}
                clearable={true}
                backspaceDelete={true}
                color={"#3d75dd"}
                placeholder={"Buscar tema"}
                clearOnSelect={true}
                closeOnScroll={true}
                value={null}
            /></div> </div>
            <hr></hr> 
        </div>
        </CSSTransition>
        </div>

        <div className="justcolor">
            <CSSTransition
              in={this.state.fanimate === true }
              appear={true}
               timeout={700}
               classNames={"blocks"}>
            <div className="blockDiv">
                <RenderBlocks filtrar={this.state.filtrar} search={this.state.search}/>
            </div>
            </CSSTransition>
        </div>

        <Footer />
        </div>
)
    }
}

export default Menu