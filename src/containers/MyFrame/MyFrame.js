import React, {useState, useEffect, useRef, memo} from "react";
import "./MyFrame.css";
import MyFrameList from "../../components/UI/MyFrameList/MyFrameList";
import TextField from "../../components/UI/TextField/TextField";
import IterationSelector from "../../components/UI/IterationSelector/IterationSelector";
import Sharing from "../../components/UI/SharingComponent/SharingComponent";
import {getIteration, addIteration, addDay, getDay} from "../../store/actions";
import FilterMenu from "../../components/UI/FilterMenu/FilterMenu"
import {connect} from "react-redux";
import {createDayIndex} from "./MyFrameHelpers"
import MyFrameLists from "../../components/UI/MyFrameListsContainer/MyFrameListsContainer"
import MyFrameContent from "../../components/MyFrameContentContainer/MyFrameContentContainer"

const MyFrame = memo(props => {

    const {userId, shareList, iteration} = props;

    const [openSharingMenu, setOpenSharingMenu] = useState(false);
    const [showIterationSelector, setShowIterationSelector] = useState(true);
    const [showSharing, setShowSharing] = useState(false);
    const [showDaySelector, setShowDaySelector] = useState(true);
    const [startingDay, setStartingDay] = useState(0);
    const [iterationId, setIterationId] = useState(localStorage.getItem("iterationId"))
    const [nextDayToCreateStart, setNextDayToCreateStart] = useState(-1);
    const [dayId, setDayId] = useState(localStorage.getItem("dayId"));
    const [firstLoad, setFirstLoad] = useState(false)
    // dayId is
    // const dayIndex = iteration && iteration.dayList && iteration.daylist.length
    // const dayIdToStart = dayIndex && iteration.dayList[dayIndex].id
    // setDayId(dayIdToStart)
    const dayIndex = iteration && iteration.startingDay && createDayIndex(iteration.startingDay, nextDayToCreateStart)
    const todayDayIndex = iteration && iteration.startingDay && createDayIndex(iteration.startingDay, new Date().getTime())
    

    // get iteration list
    const showAddEvenetListeners = (event) => {
        console.log(event.target.children)
    }



    useEffect(()=>{
        if((localStorage.getItem("iterationId")!== iterationId && iterationId && !props.loading) ||
        (iterationId && !props.loading) || (!firstLoad && !props.loading)){

            props.getIteration(userId, iterationId)
            setFirstLoad(true)
        } 

    },[iterationId])

    useEffect(()=>{
        if(iteration && iteration.startingDay && !props.loading && !startingDay){
            setStartingDay(iteration && iteration.startingDay)
        }
        if(iteration && !iterationId){
            localStorage.setItem("iterationId", iteration._id)
            setIterationId(iteration._id);
        }
    }, [iteration])

    useEffect(()=>{
        if(iteration&& iteration.dayIds) {
            if(iteration.dayIds.includes(dayId)){
                props.getDay(dayId)
            } 
        }
    },[iteration, dayId])
    // if iteration list is empty, render that u need to add your first iteration
    // get the list of ppl u have shared your myframe with
    // get the last iteration --> get all data. populate day selector
    const addIerationHandler = () => {
        if(!startingDay){
            return null;
        }
        const iterationData = {
            userId, 
            startingDay,
            shareList
        }
        props.addIteration(iterationData)
    }

    const addDayHandler = () => {
        if(nextDayToCreateStart<0 || dayIndex<0 || dayIndex>13 || iteration.dayIndexesTaken.includes(dayIndex)){
            return null;
            // TODO Error message: it can't be done, because...
        }
        const dayData = {
            userId, 
            iterationId,
            startingDay, 
            dayIndex, 
            lists:[], 
            textFields:[]
        }
        props.addDay(dayData)
    }
    const iterationSelectHandler = iterationId =>{
        localStorage.setItem("iterationId", iterationId)
        setIterationId(iterationId);
        
    }
    const daySelectHandler = dayId =>{
        localStorage.setItem("dayId", dayId)
        setDayId(dayId); 
    }
    const starterList = [{
        title: "Törődés", 
        tasks: [{
            number:1,
            title:"react",
            done: false
        }, {
            title:"Angular", 
            done: false
        }]
    },{
        title: "Opcionális", 
        tasks: [{number:1,
            title:"Macska alom",
            done: false
        }, {number:2,
            title:"Robotporszívó", 
            done: false
        }]
    },{
        title: "Törődés", 
        tasks: [{
            number:1,
            title:"react",
            done: false
        }, {
            title:"Angular", 
            done: false
        }]
    },{
        title: "Opcionális", 
        tasks: [{number:1,
            title:"Macska alom",
            done: false
        }, {number:2,
            title:"Robotporszívó", 
            done: false
        }]
    }]

    const dayLists = [{lists: [{
        title: "Törődés", 
        tasks: [{
            number:1,
            title:"react",
            done: false
        }, {
            title:"Angular", 
            done: false
        }]
    },{
        title: "Opcionális", 
        tasks: [{number:1,
            title:"Macska alom",
            done: false
        }, {number:2,
            title:"Robotporszívó", 
            done: false
        }]
    },{
        title: "Törődés", 
        tasks: [{
            number:1,
            title:"react",
            done: false
        }, {
            title:"Angular", 
            done: false
        }]
    },{
        title: "Opcionális", 
        tasks: [{number:1,
            title:"Macska alom",
            done: false
        }, {number:2,
            title:"Robotporszívó", 
            done: false
        }]
    }]},
    {
        textfield:{title: "Hála", content: "Csenge"}
    },
    {
        textfield:{title: "Hála", content: "Csenge"}
    },{lists: [{
        title: "Törődés", 
        tasks: [{
            number:1,
            title:"react",
            done: false
        }, {
            title:"Angular", 
            done: false
        }]
    },{
        title: "Opcionális", 
        tasks: [{number:1,
            title:"Macska alom",
            done: false
        }, {number:2,
            title:"Robotporszívó", 
            done: false
        }]
    },{
        title: "Törődés", 
        tasks: [{
            number:1,
            title:"react",
            done: false
        }, {
            title:"Angular", 
            done: false
        }]
    },{
        title: "Opcionális", 
        tasks: [{number:1,
            title:"Macska alom",
            done: false
        }, {number:2,
            title:"Robotporszívó", 
            done: false
        }]
    }]}
]
    const textFields = [{title: "Hála", content: "Csenge"}, ]
    console.log(props)

    const iteratorText = props.iteration ? props.iteration.dateToShow || "No Iterations Yet" : "Loading..."
    const dayText = iteration && iteration.dayIds && iteration.dayIds.includes(dayId) && props.day ? props.day.daySelectorText ||  "Loading..." : "No Days Selected Yet"
    return (
        <div className = "MyFrame">
            <FilterMenu 
            showIterationSelectorHandler = {() => setShowIterationSelector(!showIterationSelector)}
            iteratorSelectorText = {showIterationSelector ? "Hide Iterations" : "Show Iterations"}
            showDaySelectorHandler = {() => setShowDaySelector(!showDaySelector)}
            daySelectorText = {showDaySelector ? "Hide Days" : "Show Days"}
            showSharingHandler = {() => setShowSharing(!showSharing)}
            sharingText = {showSharing ? "Hide Sharing Options" : "Show Sharing Options"}
            />


            {showIterationSelector ? 
                <IterationSelector 
                    text = {iteratorText}
                    setTimestamp = {setStartingDay}
                    addHandler = {() => addIerationHandler()}
                    tooltipText = "Create Next Iteration"
                    listItems = {props.iterationList}
                    selectHandler = {iterationSelectHandler}
                    currentId = {iterationId}
                    addButtonVisible = {true}
                /> 
            : null}

            {showDaySelector ? 
                <IterationSelector 
                addButtonVisible = {todayDayIndex && todayDayIndex <14}
                text = {dayText}
                setTimestamp = {setNextDayToCreateStart}
                addHandler = {() => addDayHandler()}
                tooltipText = "Add Next Day"
                listItems = {iteration && iteration.dayList}
                selectHandler = {daySelectHandler}
                maxDate = {iteration && iteration.maxDate}
                minDate = {iteration && iteration.minDate}
                //selectHandler = {iterationSelectHandler}
                currentId = {dayId}
            /> 
            : null}

            <Sharing 
                openSharingMenu = {openSharingMenu} 
                openSharingMenuToggler = {() => setOpenSharingMenu(!openSharingMenu)}
                showSharing = {showSharing}
                />
            <MyFrameContent dayLists = {[]} />
        </div>
    )
})

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        iteration: state.myFrame.iteration, 
        shareList: state.myFrame.shareList, 
        iterationList: state.myFrame.iterationList, 
        dayList: state.myFrame.dayList,
        currentIteration: state.myFrame.currentIteration,
        loading: state.myFrame.loading,
        day: state.myFrame.day,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getIteration: (userId, iterationId) => dispatch(getIteration(userId, iterationId)),
        addIteration: iterationData => dispatch(addIteration(iterationData)), 
        addDay: dayData => dispatch(addDay(dayData)),
        getDay: dayId => dispatch(getDay(dayId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFrame); 