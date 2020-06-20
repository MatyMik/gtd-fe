import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const getListsStart = () => {
    return {
        type: actionTypes.GET_LISTS_START
    }
}

export const getListsSuccess = lists => {
    return {
        type: actionTypes.GET_LISTS_SUCCESS,
        lists
    }
}

export const getListsFailed = error => {
    return {
        type: actionTypes.GET_LISTS_FAILED,
        error
    }
}

export const getLists = (userId, querydata = null) => {
    return dispatch => {
        dispatch(getListsStart())
        axios.get("/getlists/"+userId, {params: querydata})
        .then( response => {
            const lists = response.data.lists
            dispatch(getListsSuccess(lists))
        })
        .catch( err => dispatch(getListsFailed(err)))
    }
}

export const addNewListStart = () => {
    return {
        type: actionTypes.ADD_LIST_START
    }
}

export const addNewListSuccess = lists => {
    return {
        type: actionTypes.ADD_LIST_SUCCESS,
        lists
    }
}

export const addNewListFailed = error => {
    return {
        type: actionTypes.ADD_LIST_FAILED,
        error
    }
}

export const addNewList = listData => {
    return dispatch => {
        dispatch(addNewListStart())
        console.log("Add new list dispatched")
        axios.post("/addnewlist", listData)
        .then( response => {
            const lists = response.data.lists
            console.log(response.data)
            dispatch(addNewListSuccess(lists))
        })
        .catch(err => dispatch(addNewListFailed(err)))
    }
}

export const setAddNewListStateSuccess = () => {
    return dispatch => dispatch({
        type: actionTypes.ADD_NEW_LIST_SET_TO_TRUE
    })
}