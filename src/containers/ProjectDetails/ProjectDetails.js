import React, { useEffect, useState } from "react";
import "./ProjectDetails.css"
import {getProject, setAddNewItemStateSuccess, addItemToProject, setPopupText, setPopupType, showPopup, getNextActionsForProject} from "../../store/actions"
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useParams, useHistory } from "react-router";
import * as popupTypes from "../../utils/popupTypes"
import ProjectItem from "../../components/UI/ProjectItem/ProjectItem";
import NextAction from "../../components/NextAction/NextAction";

const projectDetails = props => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [addNewItem, setAddNewItem] = useState(false)
    const [itemType
        //, setItemType
    ] = useState("Iframe")
    const [loadingNextActions, setLoadingNextActions] = useState(false);
    const [nextActions, setNextActions] = useState([]);

    const params = useParams()
    const {projectId} = params;
    const userId = props.userId
    const history = useHistory();
    
    useEffect(()=>{

    },[])

    useEffect(() => {
        if(!project &&!props.loading && ! loading){
            setLoading(true)
            props.getProject({ projectId, userId})
        }
        if(props.project && props.project !== project) {
            setProject(props.project)
            setLoading(false)
        }
        if(addNewItem && props.addNewItemState && props.inputEntered) {
            //this means that the Iframe url is entered
            //add to the project
            //only the project has to be updated
            const item = props.inputContent
            props.addItemToProject({projectId, itemType, item})
            setAddNewItem(false)
        }
        if(nextActions && nextActions.length===0 && !props.loading && !loadingNextActions){
            props.getNextActions(undefined, projectId)
            setLoadingNextActions(true)
        }
        if(props.nextActionProject && props.nextActionProject !== nextActions && !props.lodaingNextAction){
            setNextActions(props.nextActionProject)
            setLoadingNextActions(false)
        }
    },[props])

    const title = props.loading ? <Spinner/> : project ? project.title : null;

    const projectItems = props.loading ? <Spinner/> : 
                project ? project.items ? (
                            project.items.map((item, index) => (
                            <ProjectItem item = {item.item} itemType = {item.itemType} key = {index}/>
                            ))
                                    ) :  null 
                        : null;

    const nextActionsMapped = nextActions.map((nA, index) => {
        const dueDate = new Date(nA.dueDate)
        const dateTransformed = dueDate.getFullYear() +"/" + (dueDate.getMonth()+1) +"/" + dueDate.getDate()
        const time = nA.time;
        let minutes = (time % (3600 *1000))/1000/60
        let hours =  (time-minutes *1000*60)/1000/3600
        if (hours<10){
            hours = "0"+hours.toString()
        }
        if (minutes<10){
            minutes = "0"+minutes.toString()
        }
        const timeTransformed = hours+":"+minutes;
        return <NextAction title = {nA.title} key = {index} dueDate = {dateTransformed} time = {timeTransformed}/>
    })
    const addItemHandler = () => {
        props.setPopupType(popupTypes.INPUT)
        props.setPopupText("url")
        props.unhidePopup()
        props.setAddNewItemStateSuccess()
        setAddNewItem(true)
    }

    const addNextActionHandler = () => {
        console.log(props)
        sessionStorage.setItem("pageBeforeAddNextAction", props.location.pathname)
        history.push("/addnextaction/"+projectId)
    }
    return (
        <div>
            <div className = "Title">
                {title}
            </div>

            <div>
                <div >
                    <div className = "SectionTitle" >Next Actions 
                        <img className = 'AddNextactionSVG' alt = "" src = {require("../../images/add.svg")} onClick={addNextActionHandler}/> 
                    </div>  
                    {nextActionsMapped}
                </div>
                <div>

                </div>
            </div>
            <div>
                <div className = "SectionTitle">
                    Tables
                    <img className = 'AddNextactionSVG' alt = "" src = {require("../../images/add.svg")} onClick = {addItemHandler}/>
                </div>
                <div>
                {projectItems}
                </div>
            </div>            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        project: state.listAndProject.project,
        loading: state.listAndProject.loading,
        userId: state.auth.userId,
        addNewItemState: state.listAndProject.addNewItem,
        inputEntered: state.popup.inputEntered,
        inputContent: state.popup.inputContent,
        nextActionProject: state.listAndProject.nextActionProject,
        loadingNextAction: state.listAndProject.loadingNextAction
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProject: projectId => dispatch(getProject(projectId)),
        setAddNewItemStateSuccess: () => dispatch(setAddNewItemStateSuccess()),
        setPopupText: text => dispatch(setPopupText(text)),
        setPopupType: popupType => dispatch(setPopupType(popupType)),
        unhidePopup: ()=> dispatch(showPopup()),
        addItemToProject: projectDetails => dispatch(addItemToProject(projectDetails)),
        getNextActions: (userId, projectId) => dispatch(getNextActionsForProject(userId, projectId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(projectDetails);