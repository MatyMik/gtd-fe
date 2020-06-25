import React, {Fragment, useState, useEffect} from "react";
import "./Task.css";
import Linkify from 'react-linkify';
import {taskUpdate, taskDelete} from "../../store/actions";
import EditableTextField from "../../containers/EditableTextField/EditableTextField"

const Task = props => {

    const taskId = props._id;
    const {userId, topicId} = props;

    const linkifyOptions = {
        className: "Linkify"
    }

    const [done, setDone] = useState(false)
    const [taskName, setTaskName] = useState(props.taskName || '');
    const [description, setDescription] = useState(props.description || "");
    const [link, setLink] = useState(props.link || "");
    const [doWith, setDoWith] = useState(props.with || "");
    const [asignee, setAsignee] = useState(props.asignee || "");
    const [deadline, setDeadline] = useState(props.deadline || "");
    const [archived, setArchived] = useState(props.archived || false)

    useEffect(()=> {  
        if(archived){
            updateTask()
        }
    },[archived])

    const updateTask = () => {
        const taskData = {taskName, 
            description, 
            link, 
            doWith, 
            asignee, 
            deadline,
            taskId,
            archived, 
            userId,
            topicId
        }
        props.updateTask(taskData)
    }

    const archiveTask = () => {
        setArchived(true)
    }

    const taskNameUpdated = event => {
        setTaskName(event.target.value)
        updateTask()
    }

    const descriptionUpdated = event => {
        setDescription(event.target.value)
        updateTask()
    }

    const linkUpdated = event => {
        setLink(event.target.value)
        updateTask()
    }

    const doWithUpdated = event => {
        setDoWith(event.target.value)
        updateTask()
    }

    const asigneeUpdated = event => {
        setAsignee(event.target.value)
        updateTask()
    }

    const deadlineUpdated = event => {
        setDeadline(event.target.value)
        updateTask()
    }


    const taskElements = done ? (
        <Fragment>
        <div className="TaskName TaskItem">
            {taskName}
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
        <div className="TaskArchive TaskItem" onClick = {() => archiveTask()}>
            Archive
        </div>
        </Fragment>
        ) : (
        <Fragment>
            <EditableTextField 
            textValue ={taskName} 
            outputCssClass = "TaskName TaskItem"
            inputCssClass = "TaskInput"
            inputTagLeft = {event => taskNameUpdated(event)}
            />

            <EditableTextField 
            textValue ={description} 
            outputCssClass = "TaskDexcription TaskItem"
            inputCssClass = "TaskInput"
            inputTagLeft = {event => descriptionUpdated(event)}
            />

            <Linkify><EditableTextField 
            linkify = {true}
            options = {linkifyOptions}
            textValue ={link} 
            outputCssClass = "Linkify TaskItem"
            inputCssClass = "TaskInput"
            inputTagLeft = {event => linkUpdated(event)}
            /></Linkify>

            <EditableTextField 
            textValue ={doWith} 
            outputCssClass = "TaskWith TaskItem"
            inputCssClass = "TaskInput"
            inputTagLeft = {event => doWithUpdated(event)}
            />

            <EditableTextField 
            textValue ={asignee} 
            outputCssClass = "TaskResponsible TaskItem"
            inputCssClass = "TaskInput"
            inputTagLeft = {event => asigneeUpdated(event)}
            />
            <EditableTextField 
            textValue ={deadline} 
            outputCssClass = "TaskDeadline TaskItem"
            inputCssClass = "TaskInput"
            inputTagLeft = {event => deadlineUpdated(event)}
            />
            </Fragment>
    )
    if (archived) {
        return null;
    }
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