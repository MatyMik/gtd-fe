import React from "react";
import "./NavigationItem.css"
import {NavLink} from "react-router-dom"

const navigationItem = props => {
    return(
        <div className = "NavItemContainer">
            <NavLink className ="NavItem" activeClassName = "ActiveNavItem" to ={props.to}>
                {props.title}
            </NavLink>
        </div>
    )
}

export default navigationItem;