import React, { useState, Fragment, memo } from "react";
import "./ProjectListItem.css";
import Switch from "react-switch";
import { useHistory, useLocation } from "react-router";
import ReactTooltip from 'react-tooltip'

const ProjectListItem = memo(props => {
    const [activeThisWeek, setActiveThisWeek] = useState(props.active);
    const [done, setDone] = useState(false);
    const [active, setActive] = useState(props.active)

    const cssProject = done ? 'ProjectListItem Done' : 'ProjectListItem Active'

    const history = useHistory();
    const location = useLocation()
    const {projectId, userId, listId} = props;

    const activationHandler = () => {
        setActiveThisWeek(!activeThisWeek)
        setActive(!active)
        //send an update to the project to activate it or deactivate it
        props.toggleActiveProject({projectId,userId})
    }

    const doneHandler = ()=> {
        setDone(!done);
    }

    const addNextActionHandler = ()=> {
        sessionStorage.setItem("pageBeforeAddNextAction", location.pathname)
        history.push("/addnextaction/"+projectId)
    }

    const detailsHandler = () => {
        //console.log(props.projectId)
        history.push("/projectdetails/"+projectId+"/"+userId)
    }

    const deleteProjectHandler = () => {
        console.log(props.active);
        props.deleteProject(projectId,userId, listId)
    }

    
    const handleItems = done ? (
        <Fragment>        <div></div>
        <div></div>
    <img className = 'SVG' alt = ""  src = {require("../../../images/trash.svg")} onClick={()=>deleteProjectHandler()}/>
    </Fragment>

    )
    : (
        <Fragment>
            <img className = 'SVG' alt = "" data-tip = 'Add next action' src = {require("../../../images/add.svg")} onClick={()=>addNextActionHandler()}/>
            <ReactTooltip />
            <img className = 'SVG' alt = "" data-tip = 'View detils' src = {require("../../../images/eyes.svg")} onClick={()=>detailsHandler()}/>
            <ReactTooltip />
            <div data-tip = 'Active this week?' className = "CenterSwitch">
                <Switch className = 'Switch' onChange={activationHandler} checked={!!activeThisWeek} />
            </div>
            
            <ReactTooltip />
        </Fragment>
    )
    const projectElement = (
        <div className = {cssProject}>
            <img className = 'SVG' alt = "" src = {require("../../../images/done.svg")} onClick={()=>doneHandler()}/>
            <div className="CenterText">
            {props.title}
            </div>
            {handleItems}
        </div>
    )
    const projectIfActive = props.activeWeekFilter ? (active ? projectElement : null): projectElement
    return (
            projectIfActive
        )
})

export default ProjectListItem;