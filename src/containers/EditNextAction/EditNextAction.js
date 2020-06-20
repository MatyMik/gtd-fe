import React, { useState, useEffect } from "react";
import "./EditNextAction.css"
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import Button from "../../components/UI/Button/Button";
import { useParams, useHistory } from "react-router";
import {addNewNextAction, getNextActions, setNextActionsToNull} from "../../store/actions"
import { connect } from "react-redux";


const editNextAction = props => {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const [time, setTime] = useState(null);
    const [notes, setNotes] = useState("");

    const params = useParams();
    const {projectId} = params;
    const history = useHistory();
    useEffect(()=> {
        // If edit, load the data
    },[])

    useEffect(()=> {
        //console.log(title, dueDate, time, notes)
    },[title, notes, time, dueDate])

    const timeInputHandler = time => {
        const hours = parseInt(time.slice(0,2), 10);
        const minutes = parseInt(time.slice(3,5), 10);
        const timestamp = hours * 60*60*1000 + minutes*60*1000
        setTime(timestamp);
    }

    const addNextActionHandler = event => {
        event.preventDefault()
        const nextActionData = {
            title,
            notes,
            time,
            dueDate,
            projectId,
            userId:props.userId
        }
        props.addNextAction(nextActionData)
        const redirectPage = sessionStorage.getItem("pageBeforeAddNextAction") || "/private"
        //set nextActions to zero
        props.setNextActionsToNull();
        history.push(redirectPage)
    }

    return (
        <div>
            <div className = "Title">
                Next Action
            </div>
             
            <Input cssClass = 'InputContainer'
            labelText = 'Next Action Title '
            name = 'title'
            type = 'text'
            changed = {event =>setTitle(event.target.value)}/>
            <div className="DateSelectorContainer"> 
                <Input cssClass = 'InputContainer'
                labelText = 'Next Action Due Date'
                name = 'date'
                type = 'date'
                changed = {event =>setDueDate(new Date(event.target.value).getTime())}/>
                <Input cssClass = 'InputContainer'
                labelText = 'Next Action Due Time'
                name = 'time'
                type = 'time'
                changed = {event =>timeInputHandler(event.target.value)}/>
            </div>
                <Textarea name ="notes" title="Notes" value = {notes} changed = {event => setNotes(event.target.value)}/>
            <Button 
            btnType="submit"
            btnClass = 'AuthButton'
            title = 'Add Next Action'
            clicked = {event => addNextActionHandler(event)}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        loading: state.listAndProject.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNextAction: nextActionData => dispatch(addNewNextAction(nextActionData)),
        getNextActions: userId => dispatch(getNextActions(userId)),
        setNextActionsToNull: () => dispatch(setNextActionsToNull())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(editNextAction);