import React from "react";
import "./Button.css";

const Button = props => {
    return (
        <button 
        type = {props.btnType} 
        className = {props.btnClass}
        onClick={props.clicked}>
            {props.title}
        </button>
    )
}

export default Button;