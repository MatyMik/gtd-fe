import React, { Fragment, useEffect } from "react";
import "./Popup.css";
import { connect } from "react-redux";
import {clearPopupInput, setPopupInput, hidePopup, setInputEntered} from "../../store/actions"
import Modal from "../../components/UI/Modal/Modal";

const popup = props =>{
        // I have to set up somehow, that every page could send an error message
        // I'll have to set up that every page can communicate something via popup.
        // There will be different types of modals, and I haave to implement that in the modal component
        // Here I just sort out the type and set it as a prop
        useEffect(()=>{
            //props.clearPopupInput()
        },[])
        const inputHandler = inputContent => {
            console.log(inputContent)
            props.setPopupInput(inputContent)
        }

        const closePopup = () => {
            props.hidePopup()
        }

        const modalClickedHandler = event => {
            event.preventDefault()
            props.hidePopup()
            props.setInputEntered()

        }
        const popupElement = props.showPopup ? 
        <Modal 
        changed = {event => inputHandler(event.target.value)}
        clikckBackdrop = {() => closePopup() }
        popupType = {props.popupType}
        clicked = {event => modalClickedHandler(event)}
        message = {props.popupText}
        /> 
        : null; 
        return(
            <Fragment>
                {popupElement}
                {props.children}
            </Fragment>
        )
    }

const mapStateToProps = state => {
    return {
        showPopup: state.popup.showPopup,
        popupType: state.popup.popupType,
        error: state.error.error,
        popupText: state.popup.popupText
    }
}

const mapDispatchToProps = dispatch => {
    return {
       clearPopupInput: () => dispatch(clearPopupInput()),
       setPopupInput: inputContent => dispatch(setPopupInput(inputContent)),
       hidePopup: () => dispatch(hidePopup()),
       setInputEntered: () => dispatch(setInputEntered())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(popup);