import React, { useState, Fragment, memo } from "react";
import "./ProjectListItem.css";
import Switch from "react-switch";
import { useHistory, useLocation } from "react-router";
import ReactTooltip from 'react-tooltip'

const ProjectListItem = memo(props => {
    const [activeThisWeek, setActiveThisWeek] = useState(false);
    const [done, setDone] = useState(false);

    const cssProject = done ? 'ProjectListItem Done' : 'ProjectListItem Active'

    const history = useHistory();
    const location = useLocation()

    const activationHandler = () => {
        setActiveThisWeek(!activeThisWeek)
    }

    const doneHandler = ()=> {
        setDone(!done);
    }

    const addNextActionHandler = ()=> {
        sessionStorage.setItem("pageBeforeAddNextAction", location.pathname)
        history.push("/addnextaction/"+props.projectId)
    }

    const detailsHandler = () => {
        //console.log(props.projectId)
        history.push("/projectdetails/"+props.projectId+"/"+props.userId)
    }

    
    const handleItems = done ? null: (
        <Fragment>
            <img className = 'SVG' data-tip = 'Add next action' src = {require("../../../images/add.svg")} onClick={()=>addNextActionHandler()}/>
            <ReactTooltip />
            <img className = 'SVG' data-tip = 'View detils' src = {require("../../../images/eyes.svg")} onClick={()=>detailsHandler()}/>
            <ReactTooltip />
            <div data-tip = 'Active this week?' className = "CenterSwitch">
                <Switch className = 'Switch' onChange={activationHandler} checked={activeThisWeek} />
            </div>
            
            <ReactTooltip />
        </Fragment>
    )
    return(
        <div className = {cssProject}>
            <img className = 'SVG' src = {require("../../../images/done.svg")} onClick={()=>doneHandler()}/>
            <div className="CenterText">
            {props.title}
            </div>
            
            {handleItems}
                    

        </div>
    )
})

export default ProjectListItem;