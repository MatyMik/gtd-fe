import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const getIterationStart = () => {
    return {
        type: actionTypes.GET_ITERATION_START
    }
}

export const getIterationSuccess = (iteration, shareList, iterationList, dayList, currentIteration) => {
    return { 
        type: actionTypes.GET_ITERATION_SUCCESS,
        iteration, 
        shareList, 
        iterationList, 
        dayList, 
        currentIteration
    }
} 

export const getIterationFailed = error => {
    return { 
        type: actionTypes.GET_ITERATION_FAILED,
        error
    }
}

export const getIteration = (userId, iterationId) => {
    return dispatch => {
        dispatch(getIterationStart())
        axios.get("/iteration/"+userId + "/" + iterationId)
        .then(response => {
            const {iteration, shareList, iterationList, dayList} = response.data;
            dispatch(getIterationSuccess(iteration, shareList, iterationList, dayList))
        })
        .catch(err => dispatch(getIterationFailed(err)))
    }
}

export const addIterationStart = () => {
    return {
        type: actionTypes.ADD_ITERATION_START
    }
}

export const addIterationSuccess = () => {
    return { type: actionTypes.ADD_ITERATION_SUCCESS}
}

export const addIterationFailed = (error) => {
    return { 
        type: actionTypes.ADD_ITERATION_FAILED, 
        error 
    }
}

export const addIteration = (iterationData) => {
    return dispatch => {
        dispatch(addIterationStart())
        axios.post("/additeration", iterationData)
        .then(response => {
            const {iteration, shareList, iterationList, dayList} = response.data;
            dispatch(getIterationSuccess(iteration, shareList, iterationList, dayList))
        })
        .catch(error => dispatch(addIterationFailed(error)))
    }
}

export const getDayStart = () => {
    return {
        type: actionTypes.GET_DAY_START
    }
}

export const getDaySuccess = day => {
    return {
        type: actionTypes.GET_DAY_SUCCESS,
        day
    }
}

export const getDayFailed = error => {
    return { 
        type: actionTypes.GET_DAY_FAILED,
        error
    }
}

export const getDay = dayId => {
    return dispatch => {
        dispatch(getDayStart())
        axios.get("/day/"+dayId)
        .then(response =>{
            const {day} = response.data;
            dispatch(getDaySuccess(day))
        })
        .catch(err => dispatch(getDayFailed(err)))
    }
}

export const addDayStart = () => {
    return {
        type: actionTypes.ADD_DAY_START
    }
}

export const addDaySuccess = () => {
    return {
        type: actionTypes.ADD_DAY_SUCCESS
    }
}

export const addDayFailed = error => {
    return {
        type: actionTypes.ADD_DAY_FAILED,
        error
    }
}

export const addDay = dayData => {
    return dispatch => {
        dispatch(addDayStart())
        axios.post("/addday", dayData)
        .then(response => dispatch(addDaySuccess()))
        .catch(error => dispatch(addDayFailed(error)))
    }
}