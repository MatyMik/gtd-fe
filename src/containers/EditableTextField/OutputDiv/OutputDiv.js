import React from 'react';
import Linkify from "react-linkify"

const outputDiv = props => {
    const text = props.linkify ? <Linkify options = {props.options}>{props.text}</Linkify> : props.text
    return (
        <div className={props.outputCssClass || "Output"} onClick={props.divClicked}>
            {text}
        </div>
    )
}

export default outputDiv;