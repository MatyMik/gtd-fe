import * as actionTypes from "../actions/actionTypes";

const initialState = {
    iteration: null,
    loading: false, 
    shareList :[], 
    iterationList : [], 
    dayList:[],
    error: null,
    day:[]
}

const myFrameReducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.GET_ITERATION_START): {
            return {
                ...state,
                loading: true
            }
        }
        case(actionTypes.GET_ITERATION_SUCCESS): {
            return {
                ...state,
                iteration: action.iteration, 
                shareList: action.shareList, 
                iterationList: action.iterationList, 
                dayList: action.dayList,
                loading: false
            }
        }
        case(actionTypes.GET_ITERATION_FAILED): {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        case(actionTypes.GET_DAY_START):{
            return {
                ...state,
                loading: true,
            }
        }
        case(actionTypes.GET_DAY_SUCCESS): {
            return {
                ...state,
                loading: false,
                day: action.day
            }
        }
        case(actionTypes.GET_DAY_FAILED): {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export default myFrameReducer;