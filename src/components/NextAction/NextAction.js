import React from  "react";
import "./NextAction.css";

const nextAction = props => {
    const dueDate = new Date(props.dueDate)
    const dateTransformed = dueDate.getFullYear() +"/" + (dueDate.getMonth()+1) +"/" + dueDate.getDate()
    const time = props.time;   
    
    return (
        <div className = "NextActioncontainer">
            <div className = "CenterTitle">
                {props.title}
            </div>
            <div>
                {dateTransformed}
            </div>
            <div>
                {time}
            </div>
            <div>
                {props.notes}
            </div>
            <div className = "DeleteIcon">
                <img alt = "" src = {require("../../images/trash.svg")} className = "DeleteIcon"/>
            </div>
        </div>
    )
}

export default nextAction;