import React, {useState, Fragment, useEffect} from "react";
import "./MyFrameList.css";
import {ListElement} from "./ListElement/ListElement"
import EditableText from "../../../containers/EditableTextField/EditableTextField";
import Button from "../../../components/UI/Button/Button"
import {addTaskToList} from "../../../store/actions";
import {connect} from "react-redux"

const MyFrameList = props => {
    const {listId, nextOrder, dayId, userId, tasks} = props;

    const [order, setOrder] = useState(-1);
    const [taskName, setTaskName] = useState("");
    const [addNewTask, setAddNewTask] = useState(false)

    //console.log(tasks)
    const [addNewItemMenuOpen, setAddNewItemMenuOpen] = useState(false)
    if(!tasks){
        return null
    }
    const listElementsMapped = tasks.map((element, index) =>{
        return <ListElement title={element.value}
        key ={index}
        order = {element.order}/>
    })
    //console.log(props)

    useEffect(()=>{
        if(addNewTask){
            const taskData = {
                listId, 
                userId, 
                optional:!order, 
                order, 
                value:taskName , 
                done: false, 
                dayId
            }
            props.addTaskToList(taskData)
            setAddNewTask(false)
        }
        
    }, [addNewTask])
    const addNewTaskHandler = event => {
        event.preventDefault()
        setAddNewItemMenuOpen(false)
        
        setAddNewTask(true)
    }

    const addNewItemMenu = addNewItemMenuOpen ? (
        <div>
            <div>
                <input type="radio" value = "optional" name="type" onChange ={() => setOrder(0)}/>
                <label>Optional</label>
                <input type="radio" value = "must" name="type" onChange ={() => setOrder(nextOrder || 1)}/>      
                <label>Must</label>
            </div>
            <input type="text" onChange ={event => setTaskName(event.target.value)}/>
            <Button btnClass = "AuthButton" clicked={event =>addNewTaskHandler(event)}/>
        </div>
    ) : (
        <Fragment>
            {listElementsMapped}
            <div className="AddNewTaskToList" onClick = {() => setAddNewItemMenuOpen(true)}>
                        Add New Task
                </div>
        </Fragment>
    )
    return (
        <div className="MyFrameListContainer">
            <div className = "MyFrameListTitleContainer">
                <EditableText 
                textValue ={props.title}
                outputCssClass = "MyFrameListHeader"
                inputTagLeft ={props.editListTitleFinished}
                listId = {listId}
                inputCssClass ="MyFrameListTitleInput"
                />
            </div>
            

            <div className="MyFrameListElements">
               
                {addNewItemMenu}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTaskToList: taskData => dispatch(addTaskToList(taskData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFrameList)