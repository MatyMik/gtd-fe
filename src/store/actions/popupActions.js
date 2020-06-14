import * as actionTypes from "./actionTypes";

export const showPopup = () =>{
    return dispatch => dispatch ({
        type: actionTypes.POPUP_SHOW
    })
}

export const hidePopup = () => {
    return dispatch => dispatch ({
        type: actionTypes.POPUP_HIDE
    })
}

export const setPopupInput = inputContent =>{
    return dispatch => dispatch ({
        type: actionTypes.POPUP_INPUT_SET,
        inputContent
    })
}

export const clearPopupInput = () => {
    return dispatch => dispatch ({
        type: actionTypes.POPUP_INPUT_CLEAR
    })
}

export const setPopupType = popupType => {
    return dispatch => dispatch ({
        type:actionTypes.POPUP_TYPE_SET,
        popupType
    })
}

export const setPopupText = popupText => {
    return dispatch => dispatch({
        type: actionTypes.POPUP_TEXT_SET,
        popupText
    })
}

export const setInputEntered =()=> dispatch => dispatch({
        type: actionTypes.POPUP_INPUT_ENTERED
    })