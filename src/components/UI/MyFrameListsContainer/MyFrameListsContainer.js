import React from "react";
import "./MyFrameListsContainer.css";
import MyFrameList from "../MyFrameList/MyFrameList"
import AddMenu from "./AddSingleList/AddSingleList"

const myFrameListsContainer = props => {
    
    console.log(props.lists)
    const listsMapped = props.lists.map((list, index)=><MyFrameList 
                                                    title ={list.title} 
                                                    tasks ={list.elements} 
                                                    editListTitleFinished ={props.editListTitleFinished}
                                                    listId={list._id}
                                                    dayId = {props.dayId}
                                                    nextOrder = {list.nextOrder}
                                                    key = {index}/>)
    return (
        <div className="MyFrameListsContainer">
            <div className="MyFrameLists">
                {listsMapped}
            </div>
            
            <AddMenu 
            listTypesToAdd={props.listTypesToAdd} 
            addListToListContainer={props.addListToListContainer}
            orderInContents = {props.orderInContents}
            containerId = {props.id}
            />
        </div>
    )
}

export default myFrameListsContainer