import React, {useRef} from "react";
import autosize from 'autosize';

const InputTag = props => {
    const textAreaRef = useRef(null)
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