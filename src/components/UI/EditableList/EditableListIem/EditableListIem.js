import React from "react";
import "./EditableListIem.css";

const EditableListIem = props => {
    if(props.headers) {
        return (
            <div className = "EditableListItemHeader">
            <div className = "PersonalDataContainer">
                <div>
                    {props.headers[0]}
                </div>
                <div className="EmailAddress">
                    {props.headers[1]}
                </div>
            </div>
            <div>
                    {props.headers[2]}
                </div>
                <div className="">
                    {props.headers[3]}
                </div>
        </div>
        )
    }
    return (
        <div className = "EditableListItem">
            <div className = "PersonalDataContainer">
                <div>
                    {props.name}
                </div>
                <div className="EmailAddress">
                    {props.email}
                </div>
            </div>
            <img className = "Tick" src = {require("../../../../images/tick.svg")} alt = "" />
            <img className = "Tick" src = {require("../../../../images/tick.svg")} alt = "" />
        </div>
    )
}

export default EditableListIem;