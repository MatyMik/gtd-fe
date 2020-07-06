import React, {useState, Fragment} from "react";
import "./AddMenu.css";
import Tooltip from "react-tooltip";
import Backdrop from "../../UI/Backdrop/Backdrop"

const addContentElementMenu = props => {
    const [menuOpen, setMenuOpen] = useState(false);

    const addListHandler = () => {
        console.log("Clicked")
        setMenuOpen(false)
        props.addListHandler();
    }

    const addTextfieldHandler = () => {
        setMenuOpen(false)
        props.addTextfieldHandler();
    }

    const menuItems = menuOpen ? (
        <Fragment>
            <div className = "AddItemsContainer">
                <div className ="AddItem" onClick = {() => addListHandler()}>
                    Add Lists
                </div>  
                <div className ="AddItem" onClick = {() => addTextfieldHandler()}>
                    Add textField
                </div>          
            </div> 
            <Backdrop cssClassName ="AddItemsListCloseBackdrop" clicked = {() => setMenuOpen(false)}/>
        </Fragment>
    ) : null;
    return (
        <div className = "AddMenuContainer">
            <div className = "AddMenuContainerPositioner">
                <img src = {require("../../../images/add.svg")} className = "AddItemSVG" alt = "" data-tip = {props.tootltipText} onClick = {() => setMenuOpen(true)}/>
                <Tooltip/>
                {menuItems}
 
            </div>
            
        </div>
    )
}

export default addContentElementMenu;