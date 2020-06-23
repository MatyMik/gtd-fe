import React, {Fragment, useState} from "react";
import "./Task.css";
import Linkify from 'react-linkify';

const Task = props => {

    const [done, setDone] = useState(false)
    const taskElements = done ? (
        <Fragment>
        <div className="TaskName TaskItem">
            
        </div>
        <div className="TaskDexcription TaskItem">
  
        </div>
        <div className="TaskLink TaskItem">
            
        </div>
        <div className="TaskWith TaskItem">

        </div>
        <div className="DeleteIcon TaskItem">
            <img className="DeleteTask" alt = "" src = {require("../../images/trash.svg")} onClick ={props.deleteTask}/>
        </div>
        <div className="TaskDeadline TaskItem" onClick = {props.archiveTask}>
            Archive
        </div>
        </Fragment>
        ) : (
        <Fragment>
            <div className="TaskName TaskItem">
                {props.taskName}
            </div>
            <div className="TaskDexcription TaskItem">
                {props.description}
            </div>
            <div className="TaskLink TaskItem">
                <Linkify><span className="Linkify">{props.link}</span></Linkify>
            </div>
            <div className="TaskWith TaskItem">
            {props.with}
            </div>
            <div className="TaskResponsible TaskItem">
                {props.responsible}
            </div>
            <div className="TaskDeadline TaskItem">
                {props.deadline.toString()}
            </div>
            </Fragment>
    )
    return (
        <div className="Task">
            {taskElements}
            <div className="TaskDeadline TaskItem">
                <input type="checkbox" onChange={() => setDone(!done)}/>
            </div>
            
        </div>
    )
}

export default Task;