import React from "react";


const InputTag = props => {
    //autosize(textAreaRef.current)
    return <textarea   
    autoFocus
    className={props.inputCssClass || "InputTag"}
    value={props.value} 
    //ref = {textAreaRef}
    onBlur = {props.inputTagLeft} 
    onChange = {event =>props.changed(event)}></textarea>
}

export default InputTag;