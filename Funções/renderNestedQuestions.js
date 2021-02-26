import React from 'react'
import CardModel from "../Estrutural/cardModel"

class RenderNestedQuestions extends React.Component {
    render() {
        return(
            this.props.nestedQuestions.map((el, index, ind) => {
                return(
                    <div className="nestedQuestionsAnimate">
                <CardModel 
                    key={ind}
                    handler={this.props.handler}
                    changeHandler={this.props.changehandler}
                    tema={this.props.tema} 
                    object={el}
                    index={this.props.index}
                    index1={index}
                    toggle={this.props.toggle}
                    length={this.props.nestedQuestions.length}
                    nested={true}
                    nestedQuestions={this.props.nestedQuestions}
                />
                </div>
                )})
        )
    }
}

export default RenderNestedQuestions