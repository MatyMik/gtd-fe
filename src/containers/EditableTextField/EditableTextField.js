import React, {useState, Fragment,} from 'react';
import "./EditableTextField.css";
import OutputDiv from "./OutputDiv/OutputDiv"
import InputTag from "./InputTag/InputTag";

const EditableTextField = props => {
    const [textValue, setTextValue] = useState(props.textValue);
    const [editMode, setEditMode] = useState(props.editMode || false);
    const [lastTextValue, setLastTextValue] = useState("")

    const {listId, textfieldId, field} = props;


        //if last input 500 seconds ago was the same, send update
    const userChangedInupt = setTimeout(() => {
        if(lastTextValue!==textValue){
            
            setLastTextValue(textValue)
        } else {
            console.log( lastTextValue, textValue)
            clearInterval(userChangedInupt)
        }
    }, 500)

    const inputTagLeft = event=>{
        const newTextValue = event.target.value 
        setTextValue(newTextValue)
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
            changed={event => inputTagLeft(event) }
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