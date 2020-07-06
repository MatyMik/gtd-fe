import React from "react";
import "./SuggestionList.css";
import SuggestionListItem from "./SuggestionListItem/SuggestionListItem"

const SuggestionList = props => {
    const suggestionsMapped = props.elements.map(suggestion => {
        return <SuggestionListItem />
    })
    return (
        <div className = "">
            {suggestionsMapped}
        </div>
    )
}

export default SuggestionList;