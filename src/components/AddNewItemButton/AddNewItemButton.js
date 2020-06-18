import React,{Fragment} from "react";
import "./AddNewItemButton.css";

const addNewItemButton = props => {

    
    const newItems = (
        <Fragment>
            <div className = "AddNewItem-item" onClick={props.addNewListClicked}>
                List
            </div>
            <div className = "AddNewItem-item">
                Table
            </div>
        </Fragment>
    );

    const items = props.menuOpen ? newItems : null;
    return(
        <div className = "AddNewItemContainer">
            <div className = "AddNewItemHeader" onClick = {props.clicked}>
            Add new ...
            </div>
            {items}
            

        </div>
    )
}

export default addNewItemButton;