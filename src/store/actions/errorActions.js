import * as actionTypes from "./actionTypes";

export const setErrorToNull = () => {
    return dispatch =>{
        dispatch({
        type: actionTypes.ERROR_CLEANED
    })
}
}

export const setError = error => {
    return dispatch =>{
        dispatch({
            type:actionTypes.ERROR_OCCURED,
            error
        })
    }
    
}