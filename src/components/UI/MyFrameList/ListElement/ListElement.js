import React from 'react';
import "./ListElement.css";
import EditableTextField from "../../../../containers/EditableTextField/EditableTextField"

export const ListElement = props => {
    const numberToRender = props.order ? props.order.toString()+ "." : "(Op)"
    return (
        <div className="ListElement">
            <div className="MyFrameTaskNumber">
                {numberToRender}
            </div>
            <EditableTextField textValue = {props.title} outputCssClass="MyFrameTaskName"/>
            <div><input type = "checkbox"/></div>
            
        </div>
    )
}