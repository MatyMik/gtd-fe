import React from  "react";
import "./NextAction.css";

const nextAction = props => {
    return (
        <div className = "NextActioncontainer">
            <div className = "CenterTitle">
                {props.title}
            </div>
            <div>
                {props.dueDate}
            </div>
            <div>
                {props.time}
            </div>
            <div className = "DeleteIcon">
                <img alt = "" src = {require("../../images/trash.svg")} className = "DeleteIcon"/>
            </div>
        </div>
    )
}

export default nextAction;