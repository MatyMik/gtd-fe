import React, {useState, Fragment} from "react";
import "./IterationSelector.css"
import Tooltip from "react-tooltip";
import ListItem from "./IterationListItems/IterationListItems"
import Backdrop from "../Backdrop/Backdrop";
//import {createDayTimestamp} from "../../../containers/MyFrame/MyFrameHelpers"

const iterationSelector = props => {
    const [listOpen, setListOpen] = useState(false)
    const [addMenuOpen, setAddMenuOpen] = useState(false);
    const [addCustom, setAddCustom] = useState(false);

    const selectHandler = id => {
        setListOpen(false)
        props.selectHandler(id);
    }

    const addHandler = (daysFromToday) => {
        //const timestampOfDayToAdd = createDayTimestamp(daysFromToday);
        props.addHandler();
        setAddMenuOpen(false)
    }
    const listMapped = props.listItems ? props.listItems.map((item, index) => {
        return <ListItem key = {index} text = {item.text} clicked= {(event) => selectHandler(item.id)} id = {item.id} current = {item.id===props.currentId}/>
    }) : null;

    const addMenu = addCustom ? <div className="AddMenu">
    <input 
        type="date" 
        onChange = {event => props.setTimestamp(new Date(event.target.value).getTime())}
        max = {props.maxDate || "2099-12-31"}
        min = {props.minDate || "2009-12-31"}
    />
    <div className ="AddItemButton" > <span onClick ={() => addHandler()}>Add</span></div>
    <div className = "CloseMenuButton" ><span onClick ={() => setAddMenuOpen(false)}>x</span></div>
</div> : <div className="AddMenuOptions">
        <div onClick= {event => addHandler(0)}> Add Today</div>
        <div>Add Tomorrow</div>
        <div onClick= {() => setAddCustom(true)}>Add Custom</div>
        <div>
            <input type = "checkbox" data-tip= "Copy current day" name = "CopyCurrent"/>
            <Tooltip/>
        </div>
    </div> 
    return (
        <div className = "IterationSelectorContainer">
                <img className ="LeftArrow" alt = "" />
                <div className ="IterationDate">
                    <span onClick = { () => setListOpen(!listOpen) }>{props.text}</span>
                    <img className ="DownArrow" alt = ""  onClick = { () => setListOpen(!listOpen) } />
                    {props.addButtonVisible ? 
                    <img src = {require("../../../images/add.svg")} className ="AddIteration" data-tip= {props.tooltipText} alt = "" onClick ={() => setAddMenuOpen(true)}/>
                    : null}
                    <Tooltip />
                    {listOpen && props.listItems && props.listItems.length>0 ? 
                        <Fragment>
                            <div className="ListOfSelectableItems">
                                { listMapped}
                            </div> 
                            <Backdrop cssClassName ="ListCloseBackdrop" clicked = {() => setListOpen(false)}/>
                        </Fragment>
                        : null}
                    {addMenuOpen ? addMenu : null}
                </div>
                
                <img className ="RightArrow" alt = "" />
            </div>
    )
}

export default iterationSelector;