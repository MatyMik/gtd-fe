import * as actionTypes from "../actions/actionTypes";

const initialState = {
    topics: [],
    loading: false,
    error: null,
}

const workReducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.TOPIC_GET_START): {
            return {
                ...state,
                loading: true
            }
        }
        case(actionTypes.TOPIC_GET_SUCCESS): {
            return {
                ...state,
                loading: false,
                topics: action.topics
            }
        }
        case(actionTypes.TOPIC_GET_FAILED): {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        case(actionTypes.TOPIC_ADD_START):{
            return {
                ...state,
                loading: true
            }
        }
        case(actionTypes.TOPIC_ADD_SUCCESS): {
            return {
                ...state,
                loading: false,
                topics: action.topics
            }
        }
        case(actionTypes.TOPIC_ADD_FAILED): {
            return {
                ...state,
                error: action.error,
                loading: false
            }
        }
        case(actionTypes.TOPIC_UPDATE_START): {
            return { 
                ...state, 
                loading:true
            }
        }
        case(actionTypes.TOPIC_UPDATE_SUCCESS): {
            return {
                ...state,
                loading:false
            }
        }
        case(actionTypes.TOPIC_UPDATE_FAILED): {
            return {
                ...state,
                error: action.error,
                loading: false
            }
        }
        case(actionTypes.TOPIC_DELETE_START): {
            return {
                ...state,
                loading: true
            }
        }
        case(actionTypes.TOPIC_DELETE_SUCCESS): {
            return {
                ...state,
                loading: false,
                topics: action.topics
            }
        }
        case(actionTypes.TASK_ADD_START): {
            return {
                ...state, 
                loading:false
            }
        }
        case(actionTypes.TASK_ADD_SUCCESS):{
            return {
                ...state,
                loading: false,
                topics:action.topics
            }
        }
        case(actionTypes.TASK_ADD_FAILED): {
            return {
                ...state,
                error: action.error,
                loading: false
            }
        }
        case(actionTypes.TASK_UPDATE_START): return state;
        case(actionTypes.TASK_UPDATE_SUCCESS): return state;
        case(actionTypes.TASK_UPDATE_FAILED): {
            return { 
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}

export default workReducer;