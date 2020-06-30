import React from "react";
import "./PageMenu.css";

const pageMenu = props => {
    return (
        <div className = "PrivatePageMenu">
            <div className = "AddNewListItem" onClick = { props.addNewClicked}> {props.addLabel}</div>
            <div className = "ActiveFilter" onClick = { props.filterHandler}> {props.filterText} </div>
        </div>
    )
}

export default pageMenu;

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