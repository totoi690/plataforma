import React, { useEffect } from 'react'
import LoginButton from './loginButton'
import ProfileBox from './profileBox'
import { useRouter } from 'next/router'
import { useWarnIfUnsavedChanges } from "../Funções/useWarnIfUnsavedChanges"
import { useUser } from "@auth0/nextjs-auth0"

const Header = (props) => {
    const { user } = useUser()
    const router = useRouter()
    const titulo = "VESTCARDS"

        if (props.bool && user) {
            useWarnIfUnsavedChanges(props.bool, user.email)
        } else if (user){
            useWarnIfUnsavedChanges(false, user.email)
        }

    return (<div className="header, tooltip">
    <ProfileBox />
    <span title="Ir para o menu"><h1 onClick={() => {router.push("/menu")}}>{titulo} <img alt="flashcards" className="flashcards" src={"/flashcards.png"}></img></h1></span>
    <LoginButton/>
    </div>)
}

export default Header