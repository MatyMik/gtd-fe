import React from "react";
import "./TextField.css"
import EditableTextField from "../../../containers/EditableTextField/EditableTextField"

const TextField = props => {
    const {title, id} = props;
    const updateTextfield = (event, field ) => {
        if(field === 'title') {
            console.log(event.target.value)
            props.updateTextfield(event.target.value, props.content, props.id)
        } else if (field === 'content') {
            props.updateTextfield(title, event.target.value, props.id)
        }
        
    }
    return (
        <div className = "TextField">
            <EditableTextField 
                textValue = {props.title}
                outputCssClass ="TextFieldTitle"
                inputCssClass = "TextFieldTitleInput"
                inputTagLeft = {updateTextfield}
                field = "title"
                textfieldId = {id}
            />
            
            <EditableTextField 
                textValue = {props.content} 
                editMode = {false}
                outputCssClass = "TextFieldContent"
                inputCssClass = "TextFieldContentInput"
                inputTagLeft = {updateTextfield}
                field = "content"
                textfieldId = {id}
            />
        </div>
    )
}

export default TextField