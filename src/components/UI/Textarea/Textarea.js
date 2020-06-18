import React from "react";
import "./Teaxtarea.css"
import Linkify from 'react-linkify';

const textarea = props => {
    return(
        <div>
            <div className = "TextareaTitle">
                {props.title}
            </div>
            
                <textarea name = {props.name} className = 'Textarea' onChange = {props.changed}/>
        </div>
        
    )
}

export default textarea;