import * as actionTypes from "../actions/actionTypes";

const initialState = {
    isAuthenticated: false,
    loading: false, 
    error: null,
    userId: null,
    autoAuthenticateTried: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.SIGNUP_STARTED): {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case(actionTypes.SIGNUP_SUCCESS):{
            return {
                ...state,
                loading: false
            }
        }
        case(actionTypes.SIGNUP_FAILED): {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        case(actionTypes.LOGIN_STARTED): {
            return {
                ...state,
                loading: true,
                error: null,
                userId: null,
                isAuthenticated: false
            }
        }
        case(actionTypes.LOGIN_SUCCESS): {
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userId: action.userId
            }
        }
        case(actionTypes.LOGIN_FAILED):{
            return {
                ...state,
                error:action.error,
                loading: false
            }
        }
        case(actionTypes.LOGOUT_STARTED):{
            return {
                ...state,
                loading: true
            }
        }
        case(actionTypes.LOGOUT_SUCCESS): {
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                userId: null
            }
        }
        case(actionTypes.LOGOUT_FAILED): {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        case(actionTypes.AUTO_LOGIN_SUCCESS): {
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userId: action.userId,
                autoLoginTried: true
            }
        }
        case(actionTypes.AUTO_LOGIN_FAILED): {
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                autoLoginTried: true
            }
        }
        default:
            return state
    }
}

export default authReducer;