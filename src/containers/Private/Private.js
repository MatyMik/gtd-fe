import React, { useState, useEffect, memo } from "react";
import "./Private.css";
import List from "../../components/List/List";
import AddNewItem from "../../components/AddNewItemButton/AddNewItemButton"
import {getLists, setPopupText, setPopupType, showPopup, addNewList, setInputEntered, setAddNewListStateSuccess} from "../../store/actions"
import { connect } from "react-redux";
import * as popupTypes from "../../utils/popupTypes";
import Spinner from "../../components/UI/Spinner/Spinner"

const Private = memo(props => {

    const [lists, setLists] = useState([])
    const [newListAdded, setNewListAdded] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(()=>{
        //populate the list before render
        const userId = props.userId;
        props.getLists(userId)
    },[])
    useEffect(()=>{
        
        if(lists !== props.lists){
            setLists(props.lists)
        }
        if(props.inputEntered && newListAdded && props.addNewListState){
            console.log(props.inputEntered ,newListAdded)
            const userId = props.userId; 
            const title = props.inputContent;
            const listData = {
                title,
                userId
            } 
            console.log(props)
            setNewListAdded(false)
            props.addNewList(listData)
            
        }
    },[props, lists, newListAdded])
    
   
    
    const listsMapped = props.loading ? <Spinner/> : lists ? lists.map((list, index) => (
        <List title={list.title} projects={list.projects} key={index} listId = {list._id}/>
    )): null;
    
    const addNewListHandler = () => {
        props.setPopupType(popupTypes.INPUT)
        props.setPopupText("List Name")
        props.startAddNewList()
        props.unhidePopup()
        setMenuOpen(false)
        setNewListAdded(true);
    }

    
    return(
        <div>
         
                 {listsMapped}     
            <AddNewItem 
            menuOpen = {menuOpen}
            clicked = {() =>setMenuOpen(!menuOpen)}
            addNewListClicked = { () => addNewListHandler()}/>
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
        getLists: (userId) => dispatch(getLists(userId)),
        unhidePopup: () => dispatch(showPopup()), 
        setPopupType: popupType => dispatch(setPopupType(popupType)),
        setPopupText: popupText => dispatch(setPopupText(popupText)),
        addNewList: listData => dispatch(addNewList(listData)),
        setInputEntered: () => dispatch(setInputEntered()),
        startAddNewList: () => dispatch(setAddNewListStateSuccess())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Private);

/*<iframe 
            className = "Iframe"
            src="https://docs.google.com/spreadsheets/d/1rBCC95aCAgW77yevOIUJOJuoPvSRsA3G2jBGj_C5Ldo/edit?usp=sharing&chrome=true">

            </iframe>*/