import React, {useState} from "react";
import "./EditableList.css"
import ListItem from "./EditableListIem/EditableListIem"

const ListToSelectFrom = props => {

    const [shareInputOpen, setShareInputOpen] = useState(false);
    const [emailToShare, setEmailToShare] = useState("");
    if(!props.visible) {
        return null;
    }
    return (
        <div className="EditableListContainer">
            <ListItem headers = {["Name", "Email", "Shared mine", "Shared thiers"]}/>
            <ListItem name = "Balázs" email= "(baliamg@gmail.com)"/>
            {shareInputOpen ? (
            <div className="ShareWithContainer">
                <input type = "email" onChange = {event => setEmailToShare(event.target.value)} value = {emailToShare}/> 
                <div> Share</div>
                <div onClick={() => setShareInputOpen(false)}>x</div>
            </div>
            )
            :<div onClick={() => setShareInputOpen(true)}> Share with ...</div>}
        </div>
    )
}

export default ListToSelectFrom;