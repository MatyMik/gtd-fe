import React from "react";
import IsAuth from "../../hoc/IsAuth";
import "./ApplicationContainer.css"
import {Switch, Route} from "react-router-dom";
//import IndexPage from "../IndexPage/IndexPage";
import Navigation from "../Navigation/Navigation";
import Calendar from "../Calendar/Calendar";
import Private from "../Private/Private";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import EditNextAction from "../EditNextAction/EditNextAction";
import Logout from "../Logout/Logout";
import NextActions from "../NextActions/NextActions";

const ApplicationContainer = props => {
    return (
        <IsAuth>
            <div className = "AppContainer">

            
            <Navigation/>
            <div></div>
            <Switch>
                <Route path="/calendar" component = {Calendar}/>
                <Route path="/private" component = {Private}/>
                <Route path = "/projectdetails/:projectId" component = {ProjectDetails}/>
                <Route path = "/editnextaction/:projectId" component = {EditNextAction}/>
                <Route path = "/addnextaction/:projectId" component = {EditNextAction}/>
                <Route path = "/nextactions" component = {NextActions}/>
                <Route path = "/logout" component = {Logout}/>
                <Route exact path="/" component={Private}/>
                
            </Switch>
            </div>
        </IsAuth>
    )
}

export default ApplicationContainer;