import React from "react";
import "./PrivatePageMenu.css";
import AddNewItem from "../AddNewItemButton/AddNewItemButton"
import Filters from "../Filters/Filters";
import FilterDeleter from "../UI/FilterDeleter/FilterDeleter";

const privatePageMenu = props => {
    const activeWeekFilterDeleter = props.activeWeekFilterActivated ? (
        <FilterDeleter clicked = {props.activeWeekFilterDeleteHandler}
        content = "Active week filter"/>
        ) : null;
    return (
        <div className = "PrivatePageMenu">
            <Filters 
            thisWeekFilter={props.thisWeekFilter}
            filterMenuOpen = { props.filterMenuOpen}
            filterMenuOpenHandler = { props.filterMenuOpenHandler}
            />

            <AddNewItem 
            menuOpen = {props.menuOpen}
            clicked = {props.clicked}
            addNewListClicked = { props.addNewListClicked}/>
            {activeWeekFilterDeleter}
            
        </div>
    )
}

export default privatePageMenu;