import React, { Fragment } from "react";
import "./ProjectItem.css"

const projectItem = props => {
    if(props.item === true) {
        return null;
    }
    let item = <iframe className="Iframe" src = {props.item} title = {Math.random()}/>
    if(props.itemType ==='table') {
        item = <table/>
    }
    return (
        <Fragment>
            {item}
        </Fragment>
    )
}

export default projectItem;