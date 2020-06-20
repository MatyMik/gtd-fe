import React from 'react';
import "./FilterDeleter.css";

const filterDeleter = props => {
    return (
        <div onClick={props.clicked}
        className = "FilterDeleter">
            {props.content}
        </div>
    )
}

export default filterDeleter;