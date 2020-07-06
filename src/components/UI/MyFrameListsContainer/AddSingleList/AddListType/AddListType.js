import React from "react";
import "./AddListType.css"

const addListType = props => {
    console.log(props)
    return (
        <div className = "" onClick={() => props.addListToListContainer(props.type,props.orderInContents, props.containerId)}>
            {props.type}
        </div>
    )
}

export default addListType;