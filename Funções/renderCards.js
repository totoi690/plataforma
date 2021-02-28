import React from 'react'
import RenderTopico from "../Funções/renderTopico"
import { CSSTransition } from "react-transition-group"
import Translate from "../Funções/translate"

class RenderCards extends React.Component {
    constructor() {
        super()
        this.state = {paraFrente: [], temaAtual: "", card: []}
        this.onUpdateItem = this.onUpdateItem.bind(this)
        this.mudarstat = this.mudarstat.bind(this)
    }

      componentDidMount() {
        let newArray = Array(this.props.tema.perguntas.length).fill(true)
        this.setState({paraFrente: newArray, temaAtual: this.props.tema.nome})

        let cardState = []
        this.props.tema.perguntas.map(() => {
            return(cardState.push(false))
        })
        this.setState({ card: cardState })
      }

      onUpdateItem = (index, valor) => { 
        if (this.props.tema.nome === this.state.temaAtual) {
            this.setState(state => {
                let itens = state.paraFrente; itens[index] = valor
                return {itens}
            }); 
        } else {
            this.setState({temaAtual: this.props.tema.nome})
            let newArray = Array(this.props.tema.perguntas.length).fill(true)
            this.setState({paraFrente: newArray});
            this.setState(state => {
                let itens = state.paraFrente; itens[index] = valor
                return {itens}
            });
        }
        this.props.handler("paraFrente", this.state.paraFrente)
      };

      mudarstat = (i, e) => {
        e.preventDefault()
        let itemsInit = this.state.card[i]
        let items = this.state.card.map(() => {
            return(false)
        });
        
        if ( itemsInit === true ) {
            items[i] = false
        } else {
            items[i] = true

    }

        this.setState({card: items});
      }


    render() {
        if (this.props.tema.perguntas !== undefined) {
            return( 
                this.props.tema.perguntas.map((element, index) => {
                return(
                    <div key={index}>
                    {element.topico !== undefined ? 
                    <div className="topico" onClick={(e) => { this.mudarstat(index, e) }}> {Translate(element.topico, "t")} </div> 
                    : null}
                    
                    {this.state.card[index] === true && element.topico !== undefined ?    
                        <CSSTransition
                        in={this.state.card[index] === true}
                        appear={true}
                        timeout={600}
                        classNames={"topico"}>                         
                    <div className="envolta">
                    <RenderTopico user={this.props.user} element={element} index={index} tema={this.props.tema} handler={this.props.handler}/>
                    </div> 
                        </CSSTransition>
                    : null}
                    
                    { element.topico === undefined || element.topico === "" ?                     
                    <div className="envolta">
                        <RenderTopico user={this.props.user} element={element} index={index} tema={this.props.tema} handler={this.props.handler}/>
                    </div> 
                    : null}

                    <hr></hr>
                    </div>
                )  
            }))
                }  else return null
        }
}

export default RenderCards
