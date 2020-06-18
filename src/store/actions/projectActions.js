import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";
import { getListsStart} from "./listActions";

export const addNewProjectStart = ()=> {
    return {
        type: actionTypes.ADD_PROJECT_START
    }
}

export const addNewProjectSuccess = lists => {
    return {
        type:actionTypes.ADD_PROJECT_SUCCESS,
        lists
    }
}

export const addNewProjectFailed = error => {
    return {
        type: actionTypes.ADD_PROJECT_FAILED,
        error
    }
}

export const addNewProject = (projectData) => {
    return dispatch => {
        dispatch(addNewProjectStart())
        axios.post("/addnewproject", projectData)
        .then(result => {
            const updatedLists = result.data.lists;
            dispatch(addNewProjectSuccess(updatedLists))
        })    
        .catch(err => dispatch(addNewProjectFailed(err)))
    }
}

export const setAddNewProjectStateSuccess = () => {
    return dispatch => dispatch({
        type: actionTypes.ADD_NEW_PROJECT_SET_TO_TRUE
    })
}

export const getProjectStart = () => {
    return {
        type: actionTypes.GET_PROJECT_START
    }
}

export const getProjectSuccess = project => {
    return {
        type: actionTypes.GET_PROJECT_SUCCESS,
        project
    }
}

export const getProjectFailed = error => {
    return {
        type: actionTypes.GET_PROJECT_FAILED,
        error
    }
}

export const getProject = ({projectId, userId}) => {
    return dispatch => {
        dispatch(getListsStart())
        axios.get("/getproject/"+userId + "/"+projectId)
        .then(response => {
            const project = response.data.project
            dispatch(getProjectSuccess(project))
        })
        .catch(err => dispatch(getProjectFailed(err)))
    }
}

export const setAddNewItemStateSuccess = () => {
    return dispatch => dispatch({
        type: actionTypes.ADD_NEW_ITEM_SET_TO_TRUE
    })
}

export const addItemToProjectStart = () => {
    return {
        type: actionTypes.ADD_ITEM_TO_PROJECT_START
    }
}

export const addItemToProjectSuccess = project => {
    return {
        type: actionTypes.ADD_ITEM_TO_PROJECT_SUCCESS,
        project
    }
}

export const addItemToProjectFailed = error => {
    return {
        type: actionTypes.ADD_ITEM_TO_PROJECT_FAILED,
        error
    }
}


export const addItemToProject = (projectData) => {
    return dispatch => {
        dispatch(addItemToProjectStart())
        axios.post("/additemtoproject", projectData)
        .then(response => {
            const project = response.data.project
            dispatch(addItemToProjectSuccess(project))
        })
        .catch(err => dispatch(addItemToProjectFailed(err)))
    }
}

export const addNewNextActionStart = () => {
    return {
        type: actionTypes.ADD_NEW_NEXT_ACTION_START
    }
}

export const addNewNextActionSuccess = nextActions => {
    return {
        type: actionTypes.ADD_NEW_NEXT_ACTION_SUCCESS,
        nextActions
    }
}

export const addNewNextActionFailed = error => {
    return {
        type: actionTypes.ADD_NEW_NEXT_ACTION_FAILED,
        error
    }
}

export const addNewNextAction = nextActionData => {
    return dispatch => {
        dispatch(addNewNextActionStart())
        axios.post("/addnextaction", nextActionData)
        .then(response => {
            const nextactions = response.data.nextActions
            dispatch(addNewNextActionSuccess(nextactions))
        })
        .catch(err => dispatch(addNewNextActionFailed(err)))
    }
}

export const getNextActionsStart = () => {
    return {
        type: actionTypes.GET_NEXT_ACTIONS_START
    }
}

export const getNextActionsSuccess = nextActions => {
    return {
        type: actionTypes.GET_NEXT_ACTIONS_SUCCESS,
        nextActions
    }
}

export const getNextActionsFailed = error => {
    return {
        type: actionTypes.GET_NEXT_ACTIONS_FAILED,
        error
    }
}

export const getNextActions = (userId, projectId) => {
    return dispatch => {
        dispatch(getNextActionsStart())
        axios.get("/getnextactions/" + userId + "/" + projectId)
        .then(response => {
            const nextactions = response.data.nextActions
            dispatch(getNextActionsSuccess(nextactions))
        })
        .catch(err => dispatch(getNextActionsFailed(err)))
    }
}

export const getNextActionsForProjectStart = () => {
    return {
        type: actionTypes.GET_NEXT_ACTIONS_FOR_PROJECT_START
    }
}

export const getNextActionsForProjectSuccess = nextActions => {
    return {
        type: actionTypes.GET_NEXT_ACTIONS_FOR_PROJECT_SUCCESS,
        nextActions
    }
}

export const getNextActionsForProjectFailed = error => {
    return {
        type: actionTypes.GET_NEXT_ACTIONS_FOR_PROJECT_FAILED,
        error
    }
}

export const getNextActionsForProject = (userId, projectId) => {
    return dispatch => {
        dispatch(getNextActionsForProjectStart())
        axios.get("/getnextactions/" + userId + "/" + projectId)
        .then(response => {
            const nextactions = response.data.nextActions
            dispatch(getNextActionsForProjectSuccess(nextactions))
        })
        .catch(err => dispatch(getNextActionsForProjectFailed(err)))
    }
}

export const setNextActionsToNullEvent = () => {
    return {
        type: actionTypes.SET_NEXT_ACTIONS_TO_NULL
    }
}

export const setNextActionsToNull = () => {
    return dispatch => dispatch(setNextActionsToNull);
}