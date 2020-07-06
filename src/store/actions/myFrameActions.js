import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const getIterationStart = () => {
    return {
        type: actionTypes.GET_ITERATION_START
    }
}

export const getIterationSuccess = (iteration, shareList, iterationList, dayList, suggestionLists) => {
    return { 
        type: actionTypes.GET_ITERATION_SUCCESS,
        iteration, 
        shareList, 
        iterationList, 
        dayList,
        suggestionLists
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
            const {iteration, shareList, iterationList, dayList, suggestionLists} = response.data;
            dispatch(getIterationSuccess(iteration, shareList, iterationList, dayList, suggestionLists))
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

export const getDaySuccess = (day, contents) => {
    return {
        type: actionTypes.GET_DAY_SUCCESS,
        day, 
        contents
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
            const {day, contents} = response.data;
            //console.log(day, contents)
            dispatch(getDaySuccess(day, contents))
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

export const addListContainerToDayStart = () => {
    return {
        type: actionTypes.ADD_LIST_CONTAINER_TO_DAY_START
    }
}

export const addListContainerToDayFailed = (error) => {
    return {
        type: actionTypes.ADD_LIST_CONTAINER_TO_DAY_FAILED,
        error
    }
}

export const addListContainerToDaySuccess = (day, contents) => {
    return {
        type: actionTypes.ADD_LIST_CONTAINER_TO_DAY_SUCCESS,
        day, 
        contents
    }
}

export const addListContainerToDay = listData => {
    return dispatch => {
        dispatch(addListContainerToDayStart());
        axios.post("/addlistcontainer", listData)
        .then(response => {
            const {day, contents} = response.data;
            dispatch(addListContainerToDaySuccess(day, contents));
        })
        .catch(error =>dispatch(addListContainerToDayFailed(error)))
    }
}

export const addListToContainerStart = () => {
    return {
        type: actionTypes.ADD_LIST_TO_CONTAINER_START
    }
}

export const addListToContainerSuccess = (day, contents) => {
    return {
        type: actionTypes.ADD_LIST_TO_CONTAINER_SUCCESS,
        day,
        contents
    }
}

export const addListToContainerFailed = (error) => {
    return {
        type: actionTypes.ADD_LIST_TO_CONTAINER_FAILED,
        error
    }
}

export const addListToContainer = (listData) => {
    return dispatch => {
        dispatch(addListToContainerStart())
        axios.post("/addlist", listData)
        .then(response =>{
            const {day, contents} = response.data;
            dispatch(addListToContainerSuccess(day, contents))
        })
        .catch(error => dispatch(addListToContainerFailed(error)))
    }
}

export const updateMyFrameListTitleStart = () => {
    return {
        type: actionTypes.UPDATE_MYFRAME_LIST_TITLE_START
    }
}

export const updateMyFrameListTitleSuccess = (day, contents) => {
    return {
        type: actionTypes.UPDATE_MYFRAME_LIST_TITLE_SUCCESS,
        day,
        contents
    }
}

export const updateMyFrameListTitleFailed = (error) => {
    return {
        type: actionTypes.UPDATE_MYFRAME_LIST_TITLE_FAILED,
        error
    }
}

export const updateMyFrameListTitle = listData => {
    return dispatch => {
        dispatch(updateMyFrameListTitleStart())
        axios.post("/updatelisttitle", listData)
        .then((response) =>{
            const {day, contents} = response.data;
            dispatch(updateMyFrameListTitleSuccess(day, contents))
        })
        .catch(error => dispatch(updateMyFrameListTitleFailed(error)))
    }
}

export const addTaskToListStart = () => {
    return {
        type: actionTypes.ADD_TASK_TO_LIST_START
    }
}

export const addTaskToListSuccess = (day, contents) => {
    return {
        type: actionTypes.ADD_TASK_TO_LIST_SUCCESS,
        day,
        contents
    }
}

export const addTaskToListFailed = error => {
    return {
        type: actionTypes.ADD_TASK_TO_LIST_FAILED,
        error
    }
}

export const addTaskToList = taskData => {
    return dispatch => {
        dispatch(addTaskToListStart())
        axios.post("/addmyframetask", taskData)
        .then(response => {
            const {day, contents} = response.data;
            dispatch(addTaskToListSuccess(day, contents))
        })
        .catch(error => {dispatch(addTaskToListFailed(error))})
    }
}

export const addTextfieldToDayStart = () => {
    return {
        type: actionTypes.ADD_TEXTFIELD_TO_DAY_START
    }
}

export const addTextfieldToDaySuccess = (day, contents) => {
    return {
        type: actionTypes.ADD_TEXTFIELD_TO_DAY_SUCCESS,
        day, 
        contents
    }
}

export const addTextfieldToDayFailed = error => {
    return {
        type: actionTypes.ADD_TEXTFIELD_TO_DAY_FAILED,
        error
    }
}

export const addTextfieldToDay = textfieldData => {
    return dispatch => {
        dispatch(addTextfieldToDayStart())
        axios.post('/addtextfieldcontainer', textfieldData)
        .then((response) => {
            const {day, contents} = response.data;
            dispatch(addTextfieldToDaySuccess(day, contents))
        })
        .catch((error) => {dispatch(addTextfieldToDayFailed(error))})
    }
}

export const addTextfieldToContainerStart = () => {
    return {
        type: actionTypes.ADD_TEXTFIELD_TO_CONTAINER_START
    }
}

export const addTextfieldToContainerSuccess = (day, contents) => {
    return {
        type: actionTypes.ADD_TEXTFIELD_TO_CONTAINER_SUCCESS,
        day, 
        contents
    }
}

export const addTextfieldToContainerFailed = error => {
    return {
        type: actionTypes.ADD_TEXTFIELD_TO_CONTAINER_FAILED,
        error
    }
}

export const addTextfieldToContainer = textfieldData => {
    return dispatch => {
        dispatch(addTextfieldToContainerStart())
        axios.post("/addtextfield", textfieldData)
        .then(response => {
            const {day, contents} = response.data;
            dispatch(addTextfieldToContainerSuccess(day, contents))
        })
        .catch(error => dispatch(addTextfieldToContainerFailed(error)))
    }
}

export const updateTextfieldStart = () => {
    return {
        type: actionTypes.UPDATE_TEXTFIELD_START
    }
}

export const updateTextfieldSuccess = (day, contents) => {
    return {
        type: actionTypes.UPDATE_TEXTFIELD_SUCCESS,
        day, 
        contents
    }
}

export const updateTextfieldFailed = error => {
    return {
        type: actionTypes.UPDATE_TEXTFIELD_FAILED,
        error
    }
}

export const updateTextfield = textfieldData => {
    return dispatch => {
        dispatch(updateTextfieldStart())
        axios.post("/updatetextfield", textfieldData)
        .then(response =>{
            const {day, contents} = response.data;
            dispatch(updateTextfieldSuccess(day, contents))
        })
        .catch(error => dispatch(updateTextfieldFailed(error)))
    }
}