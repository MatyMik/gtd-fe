import React, {useState, Fragment} from "react";
import "./AddSingleList.css";
import AddSingleListType from "./AddListType/AddListType";
import Backdrop from "../../Backdrop/Backdrop"
import Tooltip from "react-tooltip";

const addSingleList = props => {

    const [menuOpen, setMenuOpen] = useState(false);
    //console.log(props)
    const addListTypes = props.listTypesToAdd && props.listTypesToAdd.map(listType => {
        return (
            <AddSingleListType 
                type={listType} 
                key={listType} 
                containerId = {props.containerId} 
                orderInContents = {props.orderInContents}
                addListToListContainer={props.addListToListContainer}
            />
        )
    })
    const dropMenu = menuOpen ? (
        <Fragment>
            <div className="AddSingleListMenuDropDownContainer">
                {addListTypes}
                <div onClick={() => props.addListToListContainer("New List",props.orderInContents, props.containerId)}>
                    Add new list...
                </div>
            </div>
            <Backdrop cssClassName="ListCloseBackdrop" clicked={() => setMenuOpen(false)}/>
        </Fragment>) : null;
    return (
        <div className="AddSingleListMenuContainer">
            <div className="AddSingleListMenuContainerPositioned">
                <img className="AddSingleListSVG" data-tip="Add new list" src = {require("../../../../images/addOrange.svg")} alt = "" onClick={() => setMenuOpen(true)}/>
                <Tooltip />
                {dropMenu}
            </div>
        </div>
    )
}

export default addSingleList;