import React from 'react'
import RenderNestedQuestions from "../Funções/renderNestedQuestions"
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { CSSTransition } from "react-transition-group"
import Translate from "../Funções/translate"
import axios from "axios"

class CardModel extends React.Component {
    constructor() {
        super()
        this.state = {frente: true, fade: false, toggle: false}
        this.handler = this.handler.bind(this)
        this.save = this.save.bind(this)
    }

    handler(prop1, prop2) {
        this.setState({[prop1]: prop2})
      }

      save = () => {
        //axios.post("/api/salvar", { mensagem: "salve galera" })
    }

    render() {
        const nested = this.props.nested
        const object = this.props.object

        let mudarCor = (prop) => {
            switch (prop) {
                case 1: return "FFEDED"
                case 2: return "FFFEED"
                case 3: return "EDFFEE"
                default: return null
            }
        }

        let newDate = () => {return new Date()}

        let pontos = object.pontos
        let corselecionada = () => {
            if (object.cor === undefined) { 
                return undefined } else { 
                    return (object.cor)
                } }


        let funcao = (pontos) => {            
            object.pontos === undefined ? object.pontos = pontos : object.pontos = object.pontos + pontos
            object.cor = mudarCor(pontos)
            object.data = newDate()
            this.save()
            
            this.setState({
                cor: mudarCor(pontos)
            })
            if (!nested) {
                this.setState({
                    toggle: true
                })
            }

            if (nested) {
                let pontosArray = this.props.nestedQuestions.map(el => {
                    return(el.pontos)
                })
                if ( pontosArray.every((pnt) => {return (pnt !== 0 && pnt !== undefined)}) ) {
                    this.props.changeHandler("toggle", false)
            }
            }
        }


        let arePoints = false
        if (pontos !== undefined) {
            arePoints = true
        }

        return(<div>
                <div className={ nested ? "nestedQuestionsDiv": "cardHolderDiv"}>

            { !nested &&((object.nestedQuestions !== undefined  && object.pontos !== 0 && object.pontos !== undefined) || (object.nestedQuestions !== undefined && (object.resposta === undefined || object.resposta === "")))? 
            <div className="toggleNested" onClick={() => {this.setState((prevState) => {return({toggle: !prevState.toggle})})}}>
            </div> : null}

                {this.props.toggle || !nested ?
                <div>
                    <CSSTransition
                        in={this.props.toggle === true && nested}
                        appear={true}
                        timeout={700}
                        classNames={"fade"}>

                    <div className={this.state.fade ? `card ${ nested ? "nestedQuestions" : null}` : `card-animated ${ nested ? "nestedQuestions" : null}`} style={arePoints ? {backgroundColor: "#" + corselecionada()} : null} 
                    onClick={ nested ? () => {this.setState(prevState => {return {frente: !prevState.frente, fade: !prevState.fade}})} : 
                    (object.math !== undefined || (object.resposta !== "" && object.resposta !== undefined) || this.props.imagemResposta !== undefined) ? () => {this.setState(prevState => {return {frente: !prevState.frente, fade: !prevState.fade}})} : () => {this.setState((prevState) => {return({toggle: !prevState.toggle})})}}>
                    {this.state.frente ?
                        <div>
                        <div className="pointcontainer, isFlipped">
                            <span className="check">{object.pontos !== 0 && object.pontos !== undefined ? "✅" : null}</span>
                            <span className="pontos">{object.pontos}</span>
                        </div>
            
                        <div className="isFlipped">
                            <p>
                            <b className="per">{ object.pergunta !== undefined ? "Pergunta:": object.destaque !== undefined ? Translate(object.destaque, "d") : null}</b>
                            <span className="res"><span dangerouslySetInnerHTML={{__html: Translate(object.pergunta, "p")}}></span></span>
                            {object.imagemPergunta !== undefined ? <p className="imagemPerguntaDiv"><img className="imagemPergunta" alt="imagem pergunta" src={object.imagemPergunta}></img></p> : null}
                            </p>
                        </div>

                        { object.obs ?
                <div className="obscontainer, isFlipped">
                    <span className="obs">OBS</span>
                </div> : null}
                        </div> : 
            
                        <div className={this.state.fade ? "" : 'isFlipped'}>
                            <p>
                            <b className="per">Resposta: </b> 
                            <span className="res"><span dangerouslySetInnerHTML={{__html: Translate(object.resposta, "r")}}></span></span>
                            {object.math !== undefined ? <p className="math"><BlockMath math={String(object.math)}/></p> : null}
                            {object.imagemResposta !== undefined ? <p className="imagemRespostaDiv"><img className="imagemResposta" alt="imagem resposta" src={object.imagemResposta}></img></p> : null}
                            </p> 
            
                        <p>
                            <button onClick={() => funcao(3)}>Acertei fácil!</button> <button onClick={() => funcao(2)}>Acertei, mas difícil!</button> <button onClick={() => funcao(1)}>Errei!</button></p>
                        </div>          
                        }
                </div>
                </CSSTransition>
                </div>
    : null}
     </div>

     {!nested && this.state.toggle && object.nestedQuestions !== undefined  && ((object.pontos !== 0 && object.pontos !== undefined) || (object.resposta === undefined || object.resposta === "")) ? 
        <div className="cont">
            <div className={ "verticalLine"}></div>
            {object.description !== undefined ? <div className="description">{object.description}</div> : null}
            <RenderNestedQuestions 
            handler={this.props.handler}
            changehandler={this.handler}
            tema={this.props.tema}
            index={this.props.index}
            toggle={this.state.toggle}
            nestedQuestions={object.nestedQuestions}
            />
        </div>
        : null}
        
     </div>
     )
    }
}

export default CardModel