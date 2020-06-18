import React from "react";
import "./Navigation.css"
import NavigationItem from "./NavigationItem/NavigationItem";
import { useHistory } from "react-router";

const Navigation = props => {
    const navigationItems = {
        pirvate: {
            to: "/private",
            title: "Private"
        },
        work: {
            to: "/work",
            title: "Work"
        },
        calendar: {
            to: "/calendar",
            title: "Calendar"
        },
        nextActions: {
            to: "/nextactions",
            title: "Next Actions"
        },
        myFrame:{
            to: "/myframe",
            title: "MyFrame"
        },
        logs: {
            to: "/logs",
            title: "Logs"
        },
        lists: {
            to: "/lists",
            title: "Lists"
        },
        inbox:{
            to: "/inbox",
            title: "Inbox"
        }
    }

    const navigationItemList = Object.keys(navigationItems).map(navItemName => {
        const navItem = navigationItems[navItemName]
        return <NavigationItem key = {navItemName} to = {navItem.to} title = {navItem.title}/>
    })

    const history = useHistory();
    
    const logout = () => {
        history.push("/logout")
    }
    return (
        <div className = "NavigationContainerForHover">

        
        <div className = "NavigationContainer">
            {navigationItemList}
            <div className = "Logout" onClick = {() => logout()}>
                <div className = "NavItem">
                Logout
                </div>
            </div>
        
        </div>
        
        </div>
    )
}

export default Navigation;