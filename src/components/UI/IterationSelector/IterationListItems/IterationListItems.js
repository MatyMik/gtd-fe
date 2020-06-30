import React from "react";
import "./IterationListItems.css"

const iterationListItem = props => {
    return (
        <div className = "IterationListItem" onClick={props.clicked}>
            {props.text}
            {props.current ? <img className = "Tick" src = {require("../../../../images/tick.svg")} alt = "" /> : null}
        </div>
    )
}

export default iterationListItem