import React from "react";
import "./FilterMenu.css"

const filterMenu = props => {
return (
    <div className = "FilterMenu">
        <div className = "FilterMenuItems"
            onClick={props.showIterationSelectorHandler}
            >
                {props.iteratorSelectorText}
        </div>
        <div className = "FilterMenuItems"
            onClick={props.showDaySelectorHandler}
            >
                {props.daySelectorText}
        </div>
        <div className = "FilterMenuItems"
        onClick={props.showSharingHandler}
        > 
            {props.sharingText}
        </div>
    </div>
    )

}

export default filterMenu;