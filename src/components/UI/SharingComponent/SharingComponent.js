import React from "react";
import "./SharingComponent.css";
import List from "../EditableList/EditableList";

const sharingComponent = props => {

    return (
                <div className = "SharingContentContainer">
                    {props.showSharing ?<div className = "Sharing" >
                         
                            <div className = "SharingText" onClick = {props.openSharingMenuToggler}>
                                Sharing... <img className ="DownArrow" alt = "" />
                            </div>
                            <List visible = {props.openSharingMenu} />

                    </div> : null}
                    <div className = "PersonSelectorContainer">
                        <div className = "ActiveUser">Mik</div>
                        <div>Balázs</div>
                    </div>
                </div>
                )
}

export default sharingComponent