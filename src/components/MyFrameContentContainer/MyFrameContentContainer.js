import React from "react";
import "./MyFrameContentContainer.css";
import MyFrameLists from "../UI/MyFrameListsContainer/MyFrameListsContainer"
import TextFieldContainer from "../TextFieldContainer/TextFieldContainer"
import AddMenu from "./AddContentElementMenu/AddContentElementMenu"

const MyFrameContentContainer = props => {
    const contentMapped = props.dayLists && props.dayLists.map((listElement, index)=>{
        if(listElement.type==="lists"){
            return <MyFrameLists 
                        lists = {listElement.lists} 
                        key = {index} 
                        orderInContents = {index} 
                        listTypesToAdd = {props.listTypesToAdd}
                        addListToListContainer = {props.addListToListContainer}
                        id = {listElement.id}
                        editListTitleFinished ={props.editListTitleFinished}
                        dayId = {props.dayId}
                    />
        } if(listElement.type === "textfield"){
            return <TextFieldContainer 
                        textFields = {listElement.textfields} 
                        key = {index}  
                        orderInContents = {index}
                        id = {listElement.id}
                        addTextfieldHandler = {props.addTextfieldHandler}
                        updateTextfield = {props.updateTextfield}
                    />
        } else {
            return null;
        }
    }) 
    return (
        <div className = "MyFrameContentContainer">
                {contentMapped}
                <AddMenu 
                addListHandler={props.addListHandler}
                addTextfieldHandler = {props.addTextfieldContainerHandler}
                />
            </div>
    )
}

export default MyFrameContentContainer