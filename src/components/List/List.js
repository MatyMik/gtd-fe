import React, { useState, useEffect, memo } from "react";
import "./List.css";
import ProjectListItem from "../UI/ProjectList/ProjectListItem";
import {connect} from "react-redux";
import {showPopup, setPopupType, setPopupText, addNewProject, setAddNewProjectStateSuccess} from "../../store/actions"
import * as popupTypes from "../../utils/popupTypes";


const List = memo(props => {
 
    const [showProjects, setShowProjects] = useState(false);
    const [addNewProject, setAddNewProject] = useState(false);


    useEffect(()=>{
        if(props.inputEntered && addNewProject && props.addNewProjectState){
            const listId = props.listId
            const projectName = props.inputContent;
            const userId = props.userId;
            const projectData = {
                listId,
                title:projectName,
                userId
            } 
            props.addNewProject(projectData)
            setAddNewProject(false);
        }
        // see if new project name has been entered
        // if both true => addnewpopup
    },[props]);
    const projects = props.projects;
    const projectList = showProjects ? projects.map(project => {
        console.log(project)
         return (
        
        <ProjectListItem title ={project.title} key = {project.title} projectId = {project.id} userId = {props.userId}/>
    )
        }
    ) : null;

    //const input = showInput ? <input type='text' className='ProjectNameInput'/> : null;
    
    const openProjectListHandler = () => {
        setShowProjects(!showProjects)
    }

    const showProjectNameInput = () => {
        props.setPopupType(popupTypes.INPUT)
        props.setPopupText("Project Name")
        props.unhidePopup()
        props.setAddNewProjectStateSuccess()
        setAddNewProject(true)
        
    }

    return(
        <div className = "ListContainer">
            <div className = "ListHeader">
                <div className = "ListHeaderAdditional"  onClick={()=>openProjectListHandler()}>
                    Show Projects
                </div>
                <div className = "ListName">
                        {props.title}
                </div>
                <div className = "AddProject"  onClick= { () => showProjectNameInput()}>
                    Add Project
                </div>
                
                <div className = "ListHeaderAdditional">View Details</div>
                
            </div>
            {projectList}
        </div>

    )
})

const mapStateToProps = state => {
    return {
        showPopup: state.popup.showPopup,
        inputContent: state.popup.inputContent,
        inputEntered: state.popup.inputEntered,
        userId : state.auth.userId,
        addNewProjectState: state.listAndProject.addNewProject
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unhidePopup: () => dispatch(showPopup()), 
        setPopupType: popupType => dispatch(setPopupType(popupType)),
        setPopupText: popupText => dispatch(setPopupText(popupText)),
        addNewProject: (projectData)=> dispatch(addNewProject(projectData)),
        setAddNewProjectStateSuccess: () => dispatch(setAddNewProjectStateSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);