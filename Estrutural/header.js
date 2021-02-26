import React from 'react'
import LoginButton from './loginButton'
import ProfileBox from './profileBox'
import { useRouter } from 'next/router'


const Header = () => {
    const router = useRouter()
    const titulo = "VESTCARDS"

    return (<div className="header, tooltip">
    <ProfileBox />
    <span title="Ir para o menu"><h1 onClick={() => {router.push("/menu")}}>{titulo} <img alt="flashcards" className="flashcards" src={"/flashcards.png"}></img></h1></span>
    <LoginButton/>
    </div>)
}

export default Header