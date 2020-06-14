import React, { Fragment } from "react";
import "./ProjectItem.css"

const projectItem = props => {
    let item = <iframe className="Iframe" src = {props.item}/>
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