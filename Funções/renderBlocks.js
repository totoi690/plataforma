import React, {useState} from 'react'
import Dados from "../Dados/dados"
import { useRouter } from 'next/router'

const RenderBlocks = (props) => {
    let [redirect, setRedirect] = useState(null)
    let [materiaP, setMateria] = useState(null)
    let [temaP, setTema] = useState(null)

        if (redirect) {
            const router = useRouter()
            router.push({ pathname: redirect, query: { materiaP: materiaP, temaP: temaP}})
          }

          if(props.search !== undefined && props.search[0] !== undefined){
            let materia = props.search[0].materiaNome
            let nome = props.search[0].temaNome
            let gif = props.search[0].gif
            return (

                        <div className= "blockOuterDiv">
                        <div className ="blockInnerDiv" onClick={() => {setRedirect("/perguntas"); setMateria(props.search[0].materia); setTema(props.search[0].tema)}}>
                        <div className="block">
                            <div className="blockGif">{ gif !== undefined ? <img className="blockGifImg" alt="gif" src={gif}></img> : <div className="rect">IMAGEM INDISPONÍVEL</div>}</div>
                            <hr className="hrFull"></hr>

                            <div className="blockText">
                            <div className="blockName">{nome}</div> 
                            <div className="blockMateria">{materia}</div>
                            </div>
                        </div>
                        </div>
                        </div>     
            )
          } else {
            if (props.filtrar !== undefined && props.filtrar !== "todos") {
                return (
                    Object.entries(Dados[props.filtrar].temas).map((element2, ind) => {
                        let materia = Dados[props.filtrar].nome
                        let nome = element2[1].nome
                        let gif = element2[1].gif
                        return (
                            <div className= "blockOuterDiv" key={ind}>
                            <div className ="blockInnerDiv" onClick={() => {setRedirect("/perguntas"); setMateria(props.filtrar); setTema(element2[0])}}>
                            <div className="block">
                                <div className="blockGif">{ gif !== undefined ? <img className="blockGifImg" alt="gif" src={gif}></img> : <div className="rect">IMAGEM INDISPONÍVEL</div>}</div>
                                <hr className="hrFull"></hr>
    
                                <div className="blockText">
                                <div className="blockName">{nome}</div> 
                                <div className="blockMateria">{materia}</div>
                                </div>
                            </div>
                            </div>
                            </div>
                        )
                    })
                )
    
            } else {
            return (
                Object.entries(Dados).map((element1) => {
                    return (
                        Object.entries(element1[1].temas).map((element2, ind) => {
                            let materia = element1[1].nome
                            let nome = element2[1].nome
                            let gif = element2[1].gif
                            let loading = element2[1].loading
                            return (
    
                                <div className ="blockInnerDiv" key={ind} onClick={() => {setRedirect("/perguntas"); setMateria(element1[0]); setTema(element2[0])}}>
                                {loading ? <><div className="loading">&#xd7;</div><div className="loadingmini">Em produção...</div></> : null}
                                <div className="block">
                                    <div className="blockGif">{ gif !== undefined ? loading ? <img className="blockGifImg grayscale" alt="gif" src={gif}></img> : <img className="blockGifImg" alt="gif" src={gif}></img> : <div className="rect">IMAGEM INDISPONÍVEL</div>}</div>
                                    <hr className="hrFull"></hr>
    
                                    <div className="blockText">
                                    <div className="blockName">{nome}</div> 
                                    <div className="blockMateria">{materia}</div>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    )
                })
                )}
          }
}

export default RenderBlocks