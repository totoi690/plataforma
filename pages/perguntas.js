import React, { useState, useEffect } from 'react'
import Header from "../Estrutural/header"
import Dados from "../Dados/dados"
import Footer from "../Estrutural/footer"
import RenderCards from "../Funções/renderCards"
import Forms from "../Estrutural/forms"
import Total from "../Estrutural/total"
import Salvar from "../Funções/salvar"
import ScrollButton from "../Estrutural/scrollbutton"
import { CSSTransition } from "react-transition-group"
import Navegation from "../Estrutural/navegation"
import { useRouter } from 'next/router'

const Perguntas = () => {
  const [selectTema, setselectTema] = useState("sintaxe")
  const [selectMateria, setselectMateria] = useState("gramatica")
  const [paraFrente, setparaFrente] = useState([])
  const [windowScroll, setwindowScroll] = useState("")
  const [animate, setanimate] = useState(true)
  const [animatecards, setanimatecards] = useState(true)

      function handler(prop1, prop2) {
        switch (prop1) {
          case "selectTema": setselectTema(prop2); break
          case "selectMateria": setselectMateria(prop2); break
          case "paraFrente": setparaFrente(prop2); break
          case "windowScroll": setwindowScroll(prop2); break
          case "animate": setanimate(prop2); break
          case "animatecards": setanimatecards(prop2); break
        }
      }
      const router = useRouter()
      const { materiaP, temaP } = router.query
      function selectRandom () {
        if (router.query !== undefined) {
          if (materiaP !== undefined && temaP !== undefined) {
          window.scrollTo(0, 0)
          setselectMateria(materiaP); setselectTema(temaP);
        }} else {
          let maxlenghtMateria = Object.entries(Dados).length
          let randomMateria = Math.floor(Math.random() * Number(maxlenghtMateria))
          let materia = Object.entries(Dados)[randomMateria][0]
          let maxlenghtTema = Object.entries(Dados[materia].temas).length
          let randomTema = Math.floor(Math.random() * Number(maxlenghtTema-1))
          let tema = Object.entries(Object.entries(Dados)[randomMateria][1].temas)[randomTema][0]
          setState({selectMateria: materia, selectTema: tema})
        }
      }
    
      useEffect(() => {
        selectRandom()
        Salvar(selectTema)
      })
    
        const materia = Dados[selectMateria].temas[selectTema]
        const temas = Object.entries(Dados[selectMateria].temas)
        const materias = Object.entries(Dados);
        return (
<>
          <div className="App" onClick={() => setwindowScroll(window.scrollY)}>
            <Header/>
            <Navegation/>

            <div className="justcolor">
            <CSSTransition
                in={animate}
                 appear={true}
                 timeout={500}
                 classNames={"fade"}>
            <Forms ca={animatecards} handler={handler} selectMateria={selectMateria} selectTema={selectTema} materias={materias} temas={temas}/>
            </CSSTransition>
            </div>


            <div className="totalDiv">
            <div className="justcolor1">
            <CSSTransition
                in={animate}
                 appear={true}
                 timeout={500}
                 classNames={"fade"}>
            <Total tema={materia} materia={Dados[selectMateria]} selecttema={selectTema} selectmateria={selectMateria}/>
            </CSSTransition>
            </div>
            </div>

            <div className="justcolor">
              <CSSTransition
                in={animatecards === true}
                 appear={true}
                 timeout={700}
                 classNames={"cartao"}>
            <div className="cardDiv">
            <hr></hr>
            {/*materia.gif !== undefined ? <div className="gifDiv"><img className="gif" src={materia.gif} alt="gif"></img><hr></hr></div> : null*/}
            <RenderCards handler={handler} tema={materia}/>
            </div>
            </CSSTransition>
            </div>

            
            <ScrollButton materia={materia}/>

            <div className="justcolor2">
              <CSSTransition
                in={animate}
                 appear={true}
                 timeout={500}
                 classNames={"fade"}>
                  <Footer />
              </CSSTransition>
            </div>

          </div>
</>
          )
      
}

export default Perguntas