import React from 'react';
import "./Topic.css";
import Task from "../Task/Task"
import EditableTextField from "../../containers/EditableTextField/EditableTextField"

const Topic = props => {
    const header = ["Task name", "Description", "JIRA link", "With", "Asignee", "Due date"]
    const headerMapped = header.map((item, index) => <div className = "HeaderItem" key={index}>{item}</div>)
    const tasksMapped = props.tasks.map((task, index) => {
        return <Task {...task} />
    })

    const addTaskHandler = () =>{
        const {userId} = props;
        const {topicId} = props;
        const taskData = {
            userId, 
            topicId,
            taskName:"New Task"}
        props.addNewTask(taskData)
    }
    
    return (
        <div className ="Topic">
            <EditableTextField 
                className ="" 
                inputTagLeft = {props.inputTagLeft}
                divClicked = {props.divClicked}
                outputCssClass = "TopicTitle"
                inputCssClass = "TopicTitleInput"
                textValue = {props.title}
                />

            <div className = "TopicHeader">
                {headerMapped}
            </div>
            <div className ="TopicContent">
                {tasksMapped}
            </div>
            <div className = "AddNewTaskButtonContainer">
                <img className ="AddNewTaskButton" src = {require("../../images/add.svg")} onClick = {() => addTaskHandler()} />
            </div>
        </div>

    )
}

export default Topic;