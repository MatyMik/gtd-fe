import React from "react";
import "./PrivatePageMenu.css";
import AddNewItem from "../AddNewItemButton/AddNewItemButton"
import Filters from "../Filters/Filters";
import FilterDeleter from "../UI/FilterDeleter/FilterDeleter";

const privatePageMenu = props => {
    return (
        <div className = "PrivatePageMenu">
            <div className = "AddNewListItem" onClick = { props.addNewListClicked}> Add new List</div>
            <div className = "ActiveFilter" onClick = { props.thisWeekFilter}> {props.activeWeekFilterActivated ? "Show All" : "Only Show Active"} </div>

        </div>
    )
}

export default privatePageMenu;

/*            <Filters 
            thisWeekFilter={props.thisWeekFilter}
            filterMenuOpen = { props.filterMenuOpen}
            filterMenuOpenHandler = { props.filterMenuOpenHandler}
            />

            <AddNewItem 
            menuOpen = {props.menuOpen}
            clicked = {props.clicked}
            addNewListClicked = { props.addNewListClicked}/>
            */