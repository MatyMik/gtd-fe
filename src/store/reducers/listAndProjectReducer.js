import * as actionTypes from "../actions/actionTypes";

const initialState = {
    error: null,
    lists: null,
    addNewList:false,
    addNewProject: false,
    addNewIframe: false,
    loadingNextAction: false
}

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.GET_LISTS_START):{
            return {
                ...state, 
                error: null,
                loading: true
            }
        }
        case(actionTypes.GET_LISTS_FAILED):{
            return{
                ...state, 
                error: action.error,
                loading: false
            }
        }
        case(actionTypes.GET_LISTS_SUCCESS):{
            return {
                ...state,
                lists: action.lists,
                loading: false
            }
        }
        case(actionTypes.ADD_PROJECT_START): {
            return {
                ...state,
                loading: true,
                addNewProject: true,
                addNewList: false
            }
        }
        case(actionTypes.ADD_PROJECT_SUCCESS): {
            return {
                ...state,
                lists: action.lists,
                loading: false,
                addNewProject: false,
            }
        }
        case(actionTypes.ADD_LIST_START): {
            return {
                ...state,
                error: null,
                loading: true,
                addNewProject: false,
                addNewList: true
            }
        }
        case(actionTypes.ADD_LIST_SUCCESS): {
            return {
                ...state,
                loading: false,
                lists: action.lists,
                addNewList: false
            }
        }
        case(actionTypes.ADD_PROJECT_FAILED): {
            return {
                ...state, 
                loading: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_NEW_PROJECT_SET_TO_TRUE): {
            return{
                ...state,
                addNewProject: true
            }
        }
        case(actionTypes.ADD_NEW_LIST_SET_TO_TRUE): {
            return{
                ...state,
                addNewList: true
            }
        }
        case(actionTypes.ADD_NEW_ITEM_SET_TO_TRUE): {
            return{
                ...state,
                addNewItem: true
            }
        }
        case(actionTypes.GET_PROJECT_START): {
            return {
                ...state,
                error: null,
                loading: true,
                //addNewProject: false,
                //addNewList: false
            }
        }
        case(actionTypes.GET_PROJECT_SUCCESS): {
            return {
                ...state,
                loading: false,
                project: action.project
            }
        }
        case(actionTypes.GET_PROJECT_FAILED): {
            return {
                ...state, 
                loading: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_ITEM_TO_PROJECT_START): {
            return {
                ...state,
                error: null,
                loading: true,
                addNewProject: false,
                addNewList: false,
                addNewProjectItem:true
            }
        }
        case(actionTypes.ADD_ITEM_TO_PROJECT_SUCCESS): {
            return {
                ...state,
                addNewProjectItem: false,
                loading: false,
                project: action.project
            }
        }
        case(actionTypes.ADD_ITEM_TO_PROJECT_FAILED): {
            return {
                ...state,
                addNewProjectItem: false,
                loading: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_NEW_NEXT_ACTION_START): {
            return {
                ...state,
                loading: true
            }
        }
        case(actionTypes.ADD_NEW_NEXT_ACTION_SUCCESS): {
            return {
                ...state,
                nextActions:action.nextActions,
                loading: false
            }
        }
        case(actionTypes.ADD_NEW_NEXT_ACTION_FAILED): {
            return {
                ...state,
                error: action.error,
                loading: false
            }
        }
        case(actionTypes.GET_NEXT_ACTIONS_START): {
            return {
                ...state,
                loadingNextAction: true
            }
        }
        case(actionTypes.GET_NEXT_ACTIONS_SUCCESS): {
            return {
                ...state,
                nextActions:action.nextActions,
                loadingNextAction: false
            }
        }
        case(actionTypes.GET_NEXT_ACTIONS_FAILED): {
            return {
                ...state,
                error: action.error,
                loadingNextAction: false
            }
        }
        default:
            return state
    }
}

export default listReducer; 