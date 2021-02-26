import React from 'react'
import Link from 'next/link'

class Navegation extends React.Component {
    render() {
        return(
            <div className="navigationDiv">
                <Link href={"/menu"} style={{ textDecoration: 'none' }}><a className="navigationLink">   MENU    </a></Link>
                <Link href={"/comousar"} style={{ textDecoration: 'none' }}><a className="navigationLink">  COMO USAR   </a></Link>
                <Link href={"/hoje"} style={{ textDecoration: 'none' }}><a className="navigationLink">   REVISAR </a></Link>
                <Link href={"/perguntas"} style={{ textDecoration: 'none' }}><a className="navigationLink">  PERGUNTAS   </a></Link>
            </div>
        )
    }
}

export default Navegation