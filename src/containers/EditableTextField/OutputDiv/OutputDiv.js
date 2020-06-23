import React from 'react';

const outputDiv = props => {
    return (
        <div className={props.outputCssClass || "Output"} onClick={props.divClicked}>
            {props.text}
        </div>
    )
}

export default outputDiv;