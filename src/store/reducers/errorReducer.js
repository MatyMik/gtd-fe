import * as actionTypes from "../actions/actionTypes";

const initialState = {
    error: null
}

const errorReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.ERROR_OCCURED):{
            return {
                ...state, 
                error: action.error
            }
        }
        case(actionTypes.ERROR_CLEANED):{
            return{
                ...state, error: null
            }
        }
        default:
            return state
    }
}

export default errorReducer; 