import React from "react";

const InputTag = props => {
    return <input 
    className={props.inputCssClass || "InputTag"}
    type = "text" 
    value={props.value} 
    onBlur = {props.inputTagLeft} 
    autoFocus 
    onChange = {event =>props.changed(event)}/>
}

export default InputTag;