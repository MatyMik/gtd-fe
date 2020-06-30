import React from "react";
import "./MyFrameListsContainer.css";
import MyFrameList from "../MyFrameList/MyFrameList"

const myFrameListsContainer = props => {
    const lists = props.lists.map((list, index)=><MyFrameList title ={list.title} tasks ={list.tasks} key = {index}/>)
    return (
        <div className="MyFrameListsContainer">
            {lists}
        </div>
    )
}

export default myFrameListsContainer