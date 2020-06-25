import React, {useEffect, useState} from 'react';
import "./Work.css";
import Topic from "../../components/Topic/Topic";
import {getTopics, topicDelete, topicAdd, topicUpdate, taskDelete, taskAdd, taskUpdate} from "../../store/actions"
import {connect} from "react-redux";

const Work = props => {
    const {userId} = props
    // get the topics at startup
    useEffect(()=>{
        props.getTopics(userId)
    },[])


    const addTopic = () => {
        const newTopic = {title: "New Topic", tasks: []}
        props.addTopic({...newTopic, userId: props.userId})
    }

    const addTaskHandler = taskData => {
        props.addTask(taskData)
    }

    const updateTask = taskId => {
        props.updateTask(taskId)
    }
    const topicsMapped = props.topics.map((topic, index) => (
        <Topic 
        title = {topic._doc.title} 
        tasks={topic.tasks} 
        key = {index}
        topicId={topic._doc._id}
        addNewTask = {addTaskHandler}
        updateTask = {updateTask}
        userId = {props.userId}
        deleteTopic = {props.deleteTopic}
        />))
    return ( 
        <div className = "Work">
            <div className = "AddTopicButton" onClick = {() => addTopic()}>Add a topic</div>
            {topicsMapped}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        topics: state.work.topics
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTopics: userId => dispatch(getTopics(userId)),
        addTopic: topicData => dispatch(topicAdd(topicData)),
        deleteTopic: topicData => dispatch(topicDelete(topicData)),
        updateTopic: topicData => dispatch(topicUpdate(topicData)),
        addTask: taskData => dispatch(taskAdd(taskData)),
        deleteTask: taskData => dispatch(taskDelete(taskData)),
        updateTask: taskData => dispatch(taskUpdate(taskData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Work);