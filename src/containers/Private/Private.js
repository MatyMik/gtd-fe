import React, { useState, useEffect, memo } from "react";
import "./Private.css";
import List from "../../components/List/List";
import SideMenu from "../../components/PageMenu/PageMenu"
import {getLists, setPopupText, setPopupType, showPopup, 
    addNewList, setInputEntered, 
    setAddNewListStateSuccess, toggleActiveProject} from "../../store/actions"
import { connect } from "react-redux";
import * as popupTypes from "../../utils/popupTypes";
import Spinner from "../../components/UI/Spinner/Spinner"

const Private = memo(props => {

    const [lists, setLists] = useState([])
    const [newListAdded, setNewListAdded] = useState(true);
    const [activeWeekFilter, setActiveWeekFilter] = useState(!localStorage.getItem("activeWeekFilter")===false);

    useEffect(()=>{
        const userId = props.userId;
        const queryParameters = new URLSearchParams();
        if(activeWeekFilter){
            queryParameters.append('active', true)
        }
        props.getLists(userId,  queryParameters)
    },[])
    useEffect(()=>{
        
        if(lists !== props.lists){
            setLists(props.lists)
        }
        if(props.inputEntered && newListAdded && props.addNewListState){
            const userId = props.userId; 
            const title = props.inputContent;
            const listData = {
                title,
                userId
            } 
            setNewListAdded(false)
            props.addNewList(listData)
            
        }
    },[props, lists, newListAdded])
    
   
    const listsMapped = props.loading ? <Spinner/> : lists ? lists.map((list, index) => (
        <List 
        title={list.title} 
        projects={list.projects} 
        key={index} 
        listId = {list._id} 
        activeWeekFilter = {activeWeekFilter}
        toggleActiveProject={projectId => props.toggleActiveProject(projectId)}
        userId = {props.udserId}/>
    )): null;
    
    const addNewListHandler = () => {
        props.setPopupType(popupTypes.INPUT)
        props.setPopupText("List Name")
        props.startAddNewList()
        props.unhidePopup()
        setNewListAdded(true);
    }
    const activeWeekFilterHandler = () => {
        setActiveWeekFilter(!activeWeekFilter)
        localStorage.setItem("activeWeekFilter", !activeWeekFilter)
    }


    
    return(
        <div className="Private">
                 {listsMapped}     

            <SideMenu
            filterText = {activeWeekFilter ? "Show All Projects" : "Only Show Active Projects"}
            filterHandler = {() => activeWeekFilterHandler()} 
            filterActive = {activeWeekFilter}
            addLabel = "Add New List"
            addNewClicked = { () => addNewListHandler()}/>
        </div>
    )
})

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        inputEntered: state.popup.inputEntered,
        inputContent: state.popup.inputContent,
        loading: state.listAndProject.loading,
        lists: state.listAndProject.lists,
        addNewListState: state.listAndProject.addNewList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLists: (userId, queryParameters) => dispatch(getLists(userId, queryParameters)),
        unhidePopup: () => dispatch(showPopup()), 
        setPopupType: popupType => dispatch(setPopupType(popupType)),
        setPopupText: popupText => dispatch(setPopupText(popupText)),
        addNewList: listData => dispatch(addNewList(listData)),
        setInputEntered: () => dispatch(setInputEntered()),
        startAddNewList: () => dispatch(setAddNewListStateSuccess()),
        toggleActiveProject: projectData => dispatch(toggleActiveProject(projectData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Private);