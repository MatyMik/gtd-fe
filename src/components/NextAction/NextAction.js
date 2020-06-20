import React from  "react";
import "./NextAction.css";
import ReactTooltip from "react-tooltip";

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
            <div className = "Notes" data-tip = {props.notes}>
                {props.notes}
            </div>
            <ReactTooltip/>
            <div className = "DeleteIcon">
                <img 
                alt = "" 
                src = {require("../../images/trash.svg")} 
                className = "DeleteIcon" 
                onClick = {(nextActionId, userId, projectId) => props.deleteNA(props.id, props.userId, props.projectId)}/>
            </div>
        </div>
    )
}

export default nextAction;