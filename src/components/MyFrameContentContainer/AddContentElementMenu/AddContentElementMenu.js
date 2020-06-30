import React, {useState, Fragment} from "react";
import "./AddContentElementMenu.css";
import Tooltip from "react-tooltip";
import Backdrop from "../../UI/Backdrop/Backdrop"

const addContentElementMenu = props => {
    const [menuOpen, setMenuOpen] = useState(false);

    const addListHandler = () => {
        setMenuOpen(false)
        props.addListHandler();
    }

    const addTextfieldHandler = () => {
        setMenuOpen(false)
        props.addTextfieldHandler();
    }

    const menuItems = menuOpen ? (
        <Fragment>
            <div className = "AddContentItemsContainer">
                <div className ="AddMyFrameItem" onClick = {() => addListHandler()}>
                    Add Lists
                </div>  
                <div className ="AddMyFrameItem" onClick = {() => addTextfieldHandler()}>
                    Add textField
                </div>          
            </div> 
            <Backdrop cssClassName ="ListCloseBackdrop" clicked = {() => setMenuOpen(false)}/>
        </Fragment>
    ) : null;
    return (
        <div className = "AddContentElementMenuContainer">
            <div></div>
            <div className = "AddContentElementMenuContainerPoitioner">
                <img src = {require("../../../images/add.svg")} className = "AddMyFrameItemSVG" alt = "" data-tip = "Add new content" onClick = {() => setMenuOpen(true)}/>
                <Tooltip/>
                
                {menuItems}
 
            </div>
            
        </div>
    )
}

export default addContentElementMenu;