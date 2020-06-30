import React from "react";
import "./Backdrop.css"

const Backdrop = props => {
    return(
        <div className = {props.cssClassName || "Backdrop"} onClick = {props.clicked}>

        </div>
    )
}

export default Backdrop;