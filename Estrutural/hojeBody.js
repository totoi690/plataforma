import React from 'react'
import SpacedRepetition from "../Funções/spacedRepetition"
import { useUser } from "@auth0/nextjs-auth0";

function HojeBody () {
    const { user } = useUser()

        return(
            <div className="hojeBodyDiv, cardDiv">
                <SpacedRepetition user={user}/>
            </div>
        )

}

export default HojeBody