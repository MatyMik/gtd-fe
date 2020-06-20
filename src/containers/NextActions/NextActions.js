import React, { useEffect, useState } from "react";
import "./NextActions.css";
import {getNextActions, deleteNextAction} from "../../store/actions"
import { connect } from "react-redux";
import ProjectsOfNextActions from "../../components/ProjectsOfNextActions/ProjectsOfNextActions";

const nextActions = props => {
    const [nextActionsFromServer, setNextActionsFromServer] = useState([]);
    const [nextActionsLoaded, setNextActionsLoaded] = useState(false);

    //const today = new Date()
    //const todayFilter = today.getFullYear()+"/" + (today.getMonth()+1) + "/" + today.getDate()

    useEffect(()=> {
        props.getNextActions(props.userId)
    },[])

    useEffect(()=>{
        if((!nextActionsFromServer || nextActionsFromServer.length===0) && !props.loading && !nextActionsLoaded && props.nextActions && props.nextActions.length>0){
            setNextActionsFromServer(props.nextActions);
            setNextActionsLoaded(true)   
        }
        
    },[props])

    const nextActionsMapped = nextActionsFromServer ? nextActionsFromServer.map((project, index) => {
        return <ProjectsOfNextActions 
        title = {project.projectTitle} 
        nextActions = {project.nextActions} 
        key = {index} 
        deleteNA = {(nextActionId,userId, projectId) =>props.deleteNextAction(nextActionId,userId, projectId)}
        userId = {props.userId}
        projectId = {project._id}
        />
    }) : null;
    return(
        <div className = "AllNextActionContainer">
            {nextActionsMapped}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        nextActions: state.listAndProject.nextActions,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNextActions: userId => dispatch(getNextActions(userId)),
        deleteNextAction: (nextActionId,userId, projectId) => dispatch(deleteNextAction(nextActionId,userId,projectId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(nextActions);