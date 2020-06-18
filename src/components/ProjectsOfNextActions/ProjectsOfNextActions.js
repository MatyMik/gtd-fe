import "./ProjectsOfNextActions.css"
import React from "react"
import NextAction from "../NextAction/NextAction"

const projectsOfNextActions = props => {
    const nextActions = props.nextActions;
    const nextActionsMapped = nextActions ? (nextActions.map((nA, index) => {
        let time = nA.time;
        if(typeof time ==="number") {
            let minutes = (time % (3600 *1000))/1000/60
            let hours =  (time-minutes *1000*60)/1000/3600
            if (hours<10){
                hours = "0"+hours.toString()
            }
            if (minutes<10){
                minutes = "0"+minutes.toString()
            }
            time = hours+":"+minutes;
             
        }
        return <NextAction title = {nA.title} dueDate = {nA.dueDate} time = {time} notes = {nA.notes} key = {index}/>
    })): null;
    return (
        <div>
            <div className = "ProjectTitleContainer">
                {props.title}
            </div>
            
            {nextActionsMapped}
        </div>
    )
}

export default projectsOfNextActions;