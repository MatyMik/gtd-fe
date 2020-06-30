import React, {useEffect, useState} from 'react';
import "./Work.css";
import Topic from "../../components/Topic/Topic";
import {getTopics, topicDelete, topicAdd, topicUpdate, taskDelete, taskAdd, taskUpdate} from "../../store/actions"
import {connect} from "react-redux";
import TopMenu from "../../components/PageMenu/PageMenu"

const Work = props => {
    const {userId} = props
    const [archiveFilter, setArchiveFilter] = useState(false)
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

    const updateTopicTitle = (topicId, title) => {
        const topicData = {topicId, title, userId: props.userId}
        props.updateTopic(topicData)
    }
    const updateTask = taskId => {
        props.updateTask(taskId)
    }
    const topicsMapped = props.topics.map((topic, index) => (
        <Topic 
        title = {topic.title} 
        tasks={topic.tasks} 
        key = {index}
        topicId={topic._id}
        addNewTask = {addTaskHandler}
        updateTask = {updateTask}
        userId = {props.userId}
        deleteTopic = {props.deleteTopic}
        updateTopic = {updateTopicTitle}
        archiveFilter = {archiveFilter}
        />))

    const archiveFilterHandler = () => {
        setArchiveFilter(!archiveFilter)
    }
    console.log(props.topics)
    return ( 
        <div className = "Work">
            <TopMenu 
            addLabel = "Add a topic"
            filterText = {archiveFilter ? "Show All" : "Don't Show Archived"}
            filterHandler = {() => archiveFilterHandler()} 
            filterActive = {archiveFilter}
            addNewClicked = { () => addTopic()}
            />
            <div className = "AddTopicButton" onClick = {() => addTopic()}></div>
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