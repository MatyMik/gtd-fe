import React, { useEffect, useState } from "react";
import "./NextActions.css";
import {getNextActions} from "../../store/actions"
import { connect } from "react-redux";
import nextAction from "../../components/NextAction/NextAction";

const nextActions = props => {
    const [nextActionsFromServer, setNextActionsFromServer] = useState([]);

    useEffect(()=>{
        props.getNextActions(props.userId)
        if(nextActionsFromServer && nextActionsFromServer.length===0 && !props.loading){
            setNextActionsFromServer(props.nextActions);
        }
        console.log(nextActionsFromServer)
    },[props])

    return(
        <div className = "NextActioncontainer">
            <div classN>
                {props.title}
            </div>
            <div>
                <img alt = "" src = {require("../../images/trash.svg")}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        nextActions: state.listAndProject.nextActions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNextActions: userId => dispatch(getNextActions(userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(nextActions);