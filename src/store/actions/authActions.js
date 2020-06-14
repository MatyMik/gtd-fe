import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const loginStarted = () => {
    return {
        type: actionTypes.LOGIN_STARTED
    }
}

export const loginSuccess = userId => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userId
    }
}

export const loginFailed = error => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error
    }
}

export const login = userData => {
    return dispatch => {
        dispatch(loginStarted())
        axios.post("/auth/login", userData)
        .then(res => {
            const userId = res.data.userId;
            localStorage.setItem("userId", userId)
            dispatch(loginSuccess(userId))
        })
        .catch(err=> dispatch(loginFailed(err)))
    }
}


export const signupStarted = () => {
    return {
        type: actionTypes.SIGNUP_STARTED
    }
}

export const signupSuccess = () => {
    return {
        type: actionTypes.SIGNUP_SUCCESS
    }
}

export const signupFailed = error => {
    return {
        type: actionTypes.SIGNUP_FAILED,
        error
    }
}

export const signup = userData => {
    return dispatch => {
        dispatch(signupStarted())
        axios.post("/auth/signup", userData)
        .then(res => {
            dispatch(signupSuccess())
        })
        .catch(err=> {
            dispatch(signupFailed(err))
        })       
    }
}



export const logoutStarted = () => {
    return {
        type: actionTypes.LOGOUT_STARTED
    }
}

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}

export const logoutFailed = error => {
    return {
        type: actionTypes.LOGOUT_FAILED,
        error
    }
}

export const logoutHandler = userId => {
    return dispatch => {
        dispatch(logoutStarted())
        axios.post("/auth/logout", {userId})
        .then(res => {
            localStorage.setItem("userId", "")
            dispatch(logoutSuccess())
        })
        .catch(err => dispatch(logoutFailed(err)))
    }
}

export const autoLogin = () => {
    return dispatch => {
        dispatch(loginStarted())
        const userId = localStorage.getItem("userId")
        if (userId) {
            dispatch(loginSuccess(userId))
        }
    }
}