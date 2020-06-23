import React from "react";
import "./TextField.css"
import EditableTextField from "../../../containers/EditableTextField/EditableTextField"

const TextField = props => {
    const textValue = "Kezdőérték";
    return (
        <div className = "TextField">
            <div>
                {props.title}
            </div>
            <EditableTextField textValue = {textValue} editMode = {false}/>
        </div>
    )
}

export default TextField