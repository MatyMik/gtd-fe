import React, {useState, Fragment} from 'react';
import "./EditableTextField.css";
import OutputDiv from "./OutputDiv/OutputDiv"
import InputTag from "./InputTag/InputTag";

const EditableTextField = props => {
    const [textValue, setTextValue] = useState(props.textValue);
    const [editMode, setEditMode] = useState(props.editMode || false)

    const inputTagLeft = ()=>{
        setEditMode(false);
        props.inputTagLeft ? props.inputTagLeft() : null
    }

    const divClicked = ()=>{
        setEditMode(true)
        props.divClicked ? props.divClicked() : null
    }

    const elementToRender = editMode ? 
    (
        <InputTag 
            inputTagLeft = {() => inputTagLeft()} 
            value = {textValue} 
            changed={event => setTextValue(event.target.value)}
            inputCssClass = {props.inputCssClass}
        />
    ): (
        <OutputDiv 
            text = {textValue} 
            divClicked = {() => divClicked()}
            outputCssClass = {props.outputCssClass}
        />
        )
    return (
        <Fragment>
                {elementToRender}
        </Fragment>
    )
}

export default EditableTextField;