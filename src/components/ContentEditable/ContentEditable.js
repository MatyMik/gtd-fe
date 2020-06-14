import React,{useState, useRef, useEffect} from "react";

const contentEditable = props => {
    
    const contentRef = useRef(null);
    const [text, setText] = useState("innerasdf")
    

    const handleInput = (textInput) => {
        setText(textInput);
        console.log(textInput)
    }
    return(
        <div contentEditable onInput={event => {handleInput(event.target.innerText)}}>
        </div>
    )
}

export default contentEditable;