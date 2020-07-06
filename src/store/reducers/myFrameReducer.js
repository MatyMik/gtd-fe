import * as actionTypes from "../actions/actionTypes";

const initialState = {
    iteration: null,
    loadingIteration: false,
    loadingDay: false,
    loadingContainer: false,
    loadingList: false,
    loadingElement: false, 
    loadingTextfield:false,
    shareList :[], 
    iterationList : [], 
    loadingTextContainer:false,
    dayList:[],
    error: null,
    day:[],
    suggestionLists:[],
    contents:[]
}

const myFrameReducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.GET_ITERATION_START): {
            return {
                ...state,
                loadingIteration: true
            }
        }
        case(actionTypes.GET_ITERATION_SUCCESS): {
            return {
                ...state,
                iteration: action.iteration, 
                shareList: action.shareList, 
                iterationList: action.iterationList, 
                dayList: action.dayList,
                suggestionLists: action.suggestionLists,
                loadingIteration: false
            }
        }
        case(actionTypes.GET_ITERATION_FAILED): {
            return {
                ...state,
                loadingIteration: false,
                error: action.error
            }
        }
        case(actionTypes.GET_DAY_START):{
            return {
                ...state,
                loadingDay: true,
            }
        }
        case(actionTypes.GET_DAY_SUCCESS): {
            return {
                ...state,
                loadingDay: false,
                day: action.day, 
                contents: action.contents
            }
        }
        case(actionTypes.GET_DAY_FAILED): {
            return {
                ...state,
                loadingDay: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_LIST_CONTAINER_TO_DAY_START):{
            return {
                ...state,
                loadingDay: true,
            }
        }
        case(actionTypes.ADD_LIST_CONTAINER_TO_DAY_SUCCESS): {
            return {
                ...state,
                loadingDay: false,
                day: action.day, 
                contents: action.contents
            }
        }
        case(actionTypes.ADD_LIST_CONTAINER_TO_DAY_FAILED): {
            return {
                ...state,
                loadingDay: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_LIST_TO_CONTAINER_START):{
            return {
                ...state,
                loadingContainer: true,
            }
        }
        case(actionTypes.ADD_LIST_TO_CONTAINER_SUCCESS): {
            return {
                ...state,
                loadingContainer: false,
                day: action.day, 
                contents: action.contents
            }
        }
        case(actionTypes.ADD_LIST_TO_CONTAINER_FAILED): {
            return {
                ...state,
                loadingContainer: false,
                error: action.error
            }
        }
        case(actionTypes.UPDATE_MYFRAME_LIST_TITLE_START):{
            return {
                ...state,
                loadingList: true,
            }
        }
        case(actionTypes.UPDATE_MYFRAME_LIST_TITLE_SUCCESS): {
            return {
                ...state,
                loadingList: false,
                day: action.day, 
                contents: action.contents
            }
        }
        case(actionTypes.UPDATE_MYFRAME_LIST_TITLE_FAILED): {
            return {
                ...state,
                loadingList: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_TASK_TO_LIST_START):{
            return {
                ...state,
                loadingList: true,
            }
        }
        case(actionTypes.ADD_TASK_TO_LIST_SUCCESS): {
            return {
                ...state,
                loadingList: false,
                day: action.day, 
                contents: action.contents
            }
        }
        case(actionTypes.ADD_TASK_TO_LIST_FAILED): {
            return {
                ...state,
                loadingList: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_TEXTFIELD_TO_DAY_START):{
            return {
                ...state,
                loadingTextContainer: true,
            }
        }
        case(actionTypes.ADD_TEXTFIELD_TO_DAY_SUCCESS): {
            return {
                ...state,
                loadingTextContainer: false,
                day: action.day, 
                contents: action.contents
            }
        }
        case(actionTypes.ADD_TEXTFIELD_TO_DAY_FAILED): {
            return {
                ...state,
                loadingTextContainer: false,
                error: action.error
            }
        }
        case(actionTypes.ADD_TEXTFIELD_TO_CONTAINER_START):{
            return {
                ...state,
                loadingTextfield: true,
            }
        }
        case(actionTypes.ADD_TEXTFIELD_TO_CONTAINER_SUCCESS): {
            return {
                ...state,
                loadingTextfield: false,
                day: action.day, 
                contents: action.contents
            }
        }
        case(actionTypes.ADD_TEXTFIELD_TO_CONTAINER_FAILED): {
            return {
                ...state,
                loadingTextfield: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export default myFrameReducer;