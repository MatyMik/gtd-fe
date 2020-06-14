import React from "react";
import "./Input.css"; 

const Input = props => {
    return (
        <div className = {props.cssClass}>
            <label name = {props.name} className = "InputLabel">
                {props.labelText}
            </label>
            <input type = {props.type} name ={props.name} className = "Input" onChange = {props.changed}/>
        </div>
    )
}

export default Input;