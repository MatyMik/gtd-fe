import React, { Fragment } from "react";
import "./Modal.css"
import Backdrop from "../Backdrop/Backdrop";
import * as popupTypes  from "../../../utils/popupTypes";
import Input from "../Input/Input";
import Button from "../Button/Button";

const modal = props => {


    //let cssClass = null;
    let inputPart = null;
    let buttonText = null;
    switch(props.popupType){
        case(popupTypes.ERROR_MESSAGE):{
            //cssClass = "ErrorPopup"
            break;
        }
        case(popupTypes.INPUT):{
            inputPart = <Input cssClass = "ModalContainer" type =  "text" name = "ModalInput" changed = {props.changed} labelText = ""/>;
            buttonText = "OK"
            break;
        }
        default:
            break;
    }

    
    return(
        <Fragment>
            <Backdrop clicked = {props.clikckBackdrop}/>
            <div className = "Modal">
                <div className ="closeModalButtonContainer">
                    <div className = "closeModalButton"
                    onClick = {props.clikckBackdrop}
                    >x</div>
                </div>
                
                {props.message}
                {inputPart}
                <Button btnClass = 'AuthButton'
                btnType = 'submit'
                clicked = {props.clicked}
                title = {buttonText}/>
            </div>
        </Fragment>
    )
}

export default modal;