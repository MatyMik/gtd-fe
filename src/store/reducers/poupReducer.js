import * as actionTypes from "../actions/actionTypes";

const initialState = {
    inputContent: null,
    showPopup: false,
    popupType: null, 
    popupText: null,
    inputEntered: false
}

const popupReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.POPUP_SHOW):{
            return {
                ...state,
                showPopup: true,
                inputEntered: false
            }
        }
        case(actionTypes.POPUP_HIDE):{
            return {
                ...state,
                showPopup: false
            }
        }
        case(actionTypes.POPUP_TYPE_SET):{
            return {
                ...state,
                popupType: action.popupType
            }
        }
        case(actionTypes.POPUP_INPUT_SET):{
            return {
                ...state,
                inputContent : action.inputContent
            }
        }
        case(actionTypes.POPUP_INPUT_CLEAR): {
            return {
                ...state,
                inputContent: null,
                inputEntered: false
            }
        }
        case(actionTypes.POPUP_TEXT_SET):{
            return {
                ...state, 
                popupText:  action.popupText
            }
        }
        case(actionTypes.POPUP_INPUT_ENTERED):{
            return {
                ...state,
                inputEntered: true
            }
        }
        default:
            return state
    }
}

export default popupReducer;