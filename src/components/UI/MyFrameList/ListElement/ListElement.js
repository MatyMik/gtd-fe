import React from 'react';
import "./ListElement.css";
import EditableTextField from "../../../../containers/EditableTextField/EditableTextField"

export const ListElement = props => {
    const numberToRender = props.number ? props.number.toString()+ "." : "(Op)"
    return (
        <div className="ListElement">
            <div className="MyFrameTaskNumber">
                {numberToRender}
            </div>
            <EditableTextField textValue = {props.title} className="MyFrameTaskName"/>
                
            
        </div>
    )
}