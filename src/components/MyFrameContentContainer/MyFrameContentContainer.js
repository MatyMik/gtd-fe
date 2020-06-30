import React from "react";
import "./MyFrameContentContainer.css";
import MyFrameLists from "../UI/MyFrameListsContainer/MyFrameListsContainer"
import TextField from "../UI/TextField/TextField"
import AddMenu from "./AddContentElementMenu/AddContentElementMenu"

const MyFrameContentContainer = props => {

    const contentMapped = props.dayLists.map((listElement, index)=>{

        if(listElement.type==="lists"){
            return <MyFrameLists lists = {listElement} key = {index}/>
        } if(listElement.type === "textfield"){
            return <TextField textValue={listElement.content} key = {index} title={listElement.title}/>
        } else {
            return null;
        }
    })
    return (
        <div className = "MyFrameContentContainer">
                {contentMapped}
                <AddMenu />
            </div>
    )
}

export default MyFrameContentContainer