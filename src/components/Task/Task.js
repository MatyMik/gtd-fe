import React, {Fragment, useState, useEffect} from "react";
import "./Task.css";
import Linkify from 'react-linkify';
import EditableTextField from "../../containers/EditableTextField/EditableTextField"

const Task = props => {
    console.log(props)
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
    const [doneTooltipOpen, setDoneTooltipOpen] = useState(false)

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

    const taskDone = () => {
        setDone(!done)
        setDoneTooltipOpen(true)
    }
    const closeDoneTooltip = () => {
        setDoneTooltipOpen(false)
    }

    const afterDoneTooltip = done && doneTooltipOpen ? (
        <div className = "DoneTooltip">
            
            <div className="TaskArchive TaskItem" onClick = {() => archiveTask()}>
                Archive
            </div>
            <img className="DeleteTask" alt = "" src = {require("../../images/trash.svg")} onClick ={props.deleteTask}/>
            <div onClick = {() => closeDoneTooltip()}>x</div>
        </div>
        ) :null;



    const taskElement = <Fragment>
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
    
    <div className="TaskDone TaskItem">
        <input type="checkbox" onChange={() => taskDone()} checked={done}/>
    </div>
    </Fragment>

        const archivedtaskElement = <Fragment>
        <div className = "TaskName ArchivedTaskItem"
        > {taskName} </div>
        <div className = "TaskDexcription ArchivedTaskItem"
        > {description} </div>
        <div className = "Linkify ArchivedTaskItem"
        > <Linkify>{link}</Linkify> </div>
        <div className = "TaskWith ArchivedTaskItem"
        > {doWith} </div>
        <div className = "TaskResponsible ArchivedTaskItem"
        > {asignee} </div>
        <div className = "TaskDeadline ArchivedTaskItem"
        > {deadline} </div>
        <img className="DeleteTask" alt = "" src = {require("../../images/trash.svg")} onClick ={props.deleteTask}/>
        </Fragment>
    let cssClass = "Task"
    if(props.archiveFilter && archived){
        return null;
    } 
    if (!props.archiveFilter && archived){
        cssClass = "TaskArchived"

    }

    const taskToRender = archived ? archivedtaskElement : taskElement
    return (
        <div className={cssClass}>
            {taskToRender}
            {afterDoneTooltip}
        </div>
    )
}

export default Task;