import React, {Fragment}  from 'react';
import "./Filters.css";

const filters = props => {
    const filterItems = props.filterMenuOpen ? (
        <Fragment>
            <div className = "Filter-item" onClick = {props.thisWeekFilter}>
                This week active
            </div>
        </Fragment>
    ) : null
    return (
        <div className = "Filters" >
            <div className = "FilterHeader" onClick = {props.filterMenuOpenHandler}>
                Filters...
            </div>
            {filterItems}
        </div>
    )
}

export default filters;