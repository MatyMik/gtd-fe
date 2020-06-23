import React from "react";
import "./MyFrameList.css";
import {ListElement} from "./ListElement/ListElement"

const MyFrameList = props => {
    const listElements = props.tasks;
    const listElementsMapped = listElements.map((element, index) =>{
        return <ListElement title={element.title}
        key ={index}
        number = {element.number}/>
    })
    return (
        <div className="MyFrameListContainer">
            <div className="MyFrameListHeader">
                {props.title}
            </div>
            <div className="MyFrameListElements">
                {listElementsMapped}
            </div>
        </div>
    )
}

export default MyFrameList