import React from "react";
import "./TextFieldContainer.css";
import TextField from "../UI/TextField/TextField"

const textFieldContainer = props => {
    const textFieldsMapped = props.textFields && props.textFields.map((textField, index) =>{
        console.log(textField)
        return <TextField  
                title = {textField.title}
                content = {textField.content}
                key={index}
                updateTextfield = {props.updateTextfield}
                id = {textField._id}
            />
    })
    return (
        <div className ="TextFieldContainer">
            <div className ="TextFieldsContainer">
            {textFieldsMapped} 
            </div>
            
            <img className ="AddTextFieldSVG" alt = "" src = {require("../../images/add.svg")} onClick = {(event, id) =>props.addTextfieldHandler(event,props.id)}/>
        </div>

    )
}

export default textFieldContainer;