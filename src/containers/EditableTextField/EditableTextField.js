import React, {useState, Fragment} from 'react';
import "./EditableTextField.css";
import OutputDiv from "./OutputDiv/OutputDiv"
import InputTag from "./InputTag/InputTag";

const EditableTextField = props => {
    const [textValue, setTextValue] = useState(props.textValue);
    const [editMode, setEditMode] = useState(props.editMode || false)

    const inputTagLeft = event=>{
        setEditMode(false);
        if(props.inputTagLeft) props.inputTagLeft(event)
    }

    const divClicked = ()=>{
        setEditMode(true)
        if(props.divClicked) props.divClicked()
    }

    const elementToRender = editMode ? 
    (
        <InputTag 
            inputTagLeft = {(event) => inputTagLeft(event)} 
            value = {textValue} 
            changed={event => setTextValue(event.target.value)}
            inputCssClass = {props.inputCssClass}
        />
    ): (
        <OutputDiv
            linkify = {props.linkify}  
            text = {textValue} 
            divClicked = {() => divClicked()}
            outputCssClass = {props.outputCssClass}
            options = {props.options}
        />
        )
    return (
        <Fragment>
                {elementToRender}
        </Fragment>
    )
}

export default EditableTextField;