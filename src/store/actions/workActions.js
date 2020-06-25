import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";


// Get Topics
//
export const getTopicsStart = () => {
    return {
        type: actionTypes.TOPIC_GET_START
    }
}

export const getTopicsSuccess = topics => {
    return {
        type: actionTypes.TOPIC_GET_SUCCESS,
        topics
    }
}

export const getTopicsFailed = error => {
    return {
        type: actionTypes.TOPIC_GET_FAILED,
        error
    }
}

export const getTopics = userId => {
    return dispatch => {
        dispatch(getTopicsStart())
        axios.get("/topics/"+userId)
        .then((response) => {
            const topics = response.data.topics;
            dispatch(getTopicsSuccess(topics))
        })
        .catch((error) =>dispatch(getTopicsFailed(error)))
    }
}

// Delete topic
//
export const topicDeleteStart = () => {
    return {
        type: actionTypes.TOPIC_DELETE_START
    }
}

export const topicDeleteSuccess = topics => {
    return {
        type: actionTypes.TOPIC_DELETE_SUCCESS,
        topics
    }
}

export const topicDeleteFailed = error => {
    return {
        type: actionTypes.TOPIC_DELETE_FAILED,
        error
    }
}

export const topicDelete = (topicData) => {
    return dispatch => {
        dispatch(topicDeleteStart())
        axios.post("/deletetopic", topicData)
        .then(response => {
            const topics = response.data.topics;
            dispatch(topicDeleteSuccess(topics))
        })
        .catch(error => dispatch(topicDeleteFailed(error)))
    }
}

// Update Topic
//
export const topicUpdateStart = () => {
    return {
        type: actionTypes.TOPIC_UPDATE_START
    }
}

export const topicUpdateSuccess = topics => {
    return {
        type: actionTypes.TOPIC_UPDATE_SUCCESS,
        topics
    }
}

export const topicUpdateFailed = error => {
    return {
        type: actionTypes.TOPIC_UPDATE_FAILED,
        error
    }
}

export const topicUpdate = (topicData) => {
    return dispatch => {
        dispatch(topicUpdateStart())
        axios.post("/updatetopic", topicData)
        .then(response => {
            dispatch(topicUpdateSuccess())
        })
        .catch(error => dispatch(topicUpdateFailed(error)))
    }
}

// Add Topic
//
export const topicAddStart = () => {
    return {
        type: actionTypes.TOPIC_ADD_START
    }
}

export const topicAddSuccess = topics => {
    return {
        type: actionTypes.TOPIC_ADD_SUCCESS,
        topics
    }
}

export const topicAddFailed = error => {
    return {
        type: actionTypes.TOPIC_ADD_FAILED,
        error
    }
}

export const topicAdd = (topicData) => {
    return dispatch => {
        dispatch(topicAddStart())
        axios.post("/addtopic", topicData)
        .then(response => {
            const topics = response.data.topics;
            console.log(topics)
            dispatch(topicAddSuccess(topics))
        })
        .catch(error => dispatch(topicAddFailed(error)))
    }
}

// Add task
// 

export const taskAddStart = () => {
    return {
        type: actionTypes.TASK_ADD_START
    }
}

export const taskAddSuccess = (topics) => {
    return {
        type: actionTypes.TASK_ADD_SUCCESS,
        topics
    }
}

export const taskAddFailed = (error) => {
    return {
        type: actionTypes.TASK_ADD_FAILED,
        error
    }
}

export const taskAdd = taskData => {
    return dispatch => {
        dispatch(taskAddStart())
        axios.post("/addtask", taskData)
        .then(res => {
            console.log(res.data)
            dispatch(taskAddSuccess(res.data.topics))
        })
        .catch(error => dispatch(taskAddFailed(error)))
    }
}

//Delete task
//

export const taskDeleteStart = () => {
    return {
        type: actionTypes.TASK_DELETE_START
    }
}

export const taskDeleteSuccess = () => {
    return { 
        type: actionTypes.TASK_DELETE_SUCCESS
    }
}

export const taskDeleteFailed = (error) => {
    return {
        type: actionTypes.TASK_DELETE_FAILED,
        error
    }
}

export const taskDelete = (taskData) => {
    return dispatch => {
        dispatch(taskDeleteStart())
        axios.post("/deletetask", taskData)
        .then(response => dispatch(taskDeleteSuccess()))
        .catch(error => dispatch(taskDeleteFailed(error)))
    }
}

// Update task
// 

export const taskUpdateStart = () => {
    return {
        type: actionTypes.TASK_UPDATE_START
    }
}

export const taskUpdateSuccess = () => {
    return {
        type: actionTypes.TASK_UPDATE_SUCCESS
    }
}

export const taskUpdateFailed = (error) => {
    return {
        type: actionTypes.TASK_UPDATE_FAILED,
        error
    }
}

export const taskUpdate = taskData => {
    return dispatch => {
        dispatch(taskUpdateStart())
        axios.post("/updatetask", taskData)
        .then(response => {
            dispatch(taskUpdateSuccess())
        })
        .catch(error => {dispatch(taskUpdateFailed(error))})
    }
}