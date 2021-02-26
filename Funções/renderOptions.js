import React from 'react'

class RenderOptions extends React.Component {
    render() {
        let arrayProp = this.props.tema
        let newArray = []
        for (let index = 0; index < arrayProp.length; index++) {
            const element = arrayProp[index];
            newArray.push(element)
        }

        let organizado = newArray.sort((a, b) => a[1].nome.localeCompare(b[1].nome)) //ordem alfabetica

        return(organizado.map((element, ind) => {
            return(
            <option key={ind} value={element[0]}>{element[1].nome}</option>
            )}))
            }
}

export default RenderOptions
