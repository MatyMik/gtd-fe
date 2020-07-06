import React, {useState, useEffect, Suspense} from "react";
import "./MyFrame.css";
//import MyFrameList from "../../components/UI/MyFrameList/MyFrameList";
//import TextField from "../../components/UI/TextField/TextField";
import IterationSelector from "../../components/UI/IterationSelector/IterationSelector";
import Sharing from "../../components/UI/SharingComponent/SharingComponent";
import {
    getIteration, 
    addIteration, 
    addDay, 
    getDay,
    addListContainerToDay,
    addListToContainer,
    updateMyFrameListTitle,
    addTextfieldToDay,
    addTextfieldToContainer,
    updateTextfield
} from "../../store/actions";
import FilterMenu from "../../components/UI/FilterMenu/FilterMenu"
import {connect} from "react-redux";
import {createDayIndex} from "./MyFrameHelpers"
//import MyFrameLists from "../../components/UI/MyFrameListsContainer/MyFrameListsContainer"
import MyFrameContent from "../../components/MyFrameContentContainer/MyFrameContentContainer"
import Spinner from "../../components/UI/Spinner/Spinner"

const MyFrame = props => {

    //console.log(props)

    const {userId, shareList, iteration, contents, suggestionLists} = props;

    const [openSharingMenu, setOpenSharingMenu] = useState(false);
    const [showIterationSelector, setShowIterationSelector] = useState(true);
    const [showSharing, setShowSharing] = useState(false);
    const [showDaySelector, setShowDaySelector] = useState(true);
    const [startingDay, setStartingDay] = useState(0);
    const [iterationId, setIterationId] = useState(localStorage.getItem("iterationId"))
    const [nextDayToCreateStart, setNextDayToCreateStart] = useState(-1);
    const [dayId, setDayId] = useState(localStorage.getItem("dayId"));
    const [firstLoad, setFirstLoad] = useState(false)
    const [listsToAdd, setListsToAdd] = useState(suggestionLists, suggestionLists.listsToAdd)
    //const [currentContentLength, setCurrentContentLength] = useState(day && day.content.length)
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

    /*const updateDayContents = newItem => {
        const currentDayContents = [...contents];
        currentDayContents.push(newItem);
        setDayContentItems(currentDayContents);
        //send to backend

    }*/
    const addListHandler = () =>{
        //what it needs=
        // add an element to the day elements
        const listData = {
            userId,
            dayId,
            orderInContents:contents.length
        }
        //updateDayContents(listData)
        props.addListContainerToDay(listData)
        // send to BE to update day lists there
    }

    const addTextfieldHandler = (event,id) => {
        const textfieldData = { 
            type: "textfield",
            content:"",
            title: "New textfield",
            dayId,
            userId,
            containerId:id
        }
        props.addTextfieldToContainer(textfieldData)
    }

    const addTextfieldContainerHandler = () => {
        const textfieldContainerData = {
            userId,
            dayId,
            orderInContents:contents.length
        }
        //console.log(textfieldContainerData)
        props.addTextfieldToDay(textfieldContainerData)
    }

    const addListToListContainer = (title,dayListIndex, containerId) => {
        // the index of the element in the day, and then the type(title) of the list --> immediately an api call to the BE to update the dayList
        // need dayId, userId
        const listData = {
            userId,
            dayId,
            dayListIndex,
            title,
            containerId
        }
        //console.log(listData)
        props.addListToContainer(listData)
    }   

    const editListTitleFinished = (event,id) => {
        const listData = {
            title: event.target.value, 
            listId:id,
            dayId
        }
        console.log(listData)
        props.updateMyFrameListTitle(listData)
    }

    const updateTextfield = (title, content, textfieldId) => {
        const textfieldData = {
            textfieldId,
            title,
            content,
            dayId
        }

        props.updateTextfield(textfieldData)
    }

    
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
            
            <Suspense fallback={<Spinner/>} >
                <MyFrameContent 
                    dayLists = {contents} 
                    dayId = {dayId}
                    addTextfieldContainerHandler = {addTextfieldContainerHandler}
                    addListHandler = {addListHandler}
                    listTypesToAdd = {listsToAdd}
                    addListToListContainer = {addListToListContainer}
                    editListTitleFinished ={editListTitleFinished}
                    addTextfieldHandler = {addTextfieldHandler}
                    updateTextfield= {updateTextfield}
                />
            </Suspense>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        iteration: state.myFrame.iteration, 
        shareList: state.myFrame.shareList, 
        iterationList: state.myFrame.iterationList, 
        dayList: state.myFrame.dayList,
        currentIteration: state.myFrame.currentIteration,
        loadingIteration: state.myFrame.loadingIteration,
        loadingDay: state.myFrame.loadingDay,
        loadingContainer: state.myFrame.loadingContainer,
        day: state.myFrame.day,
        contents: state.myFrame.contents,
        suggestionLists: state.myFrame.suggestionLists,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getIteration: (userId, iterationId) => dispatch(getIteration(userId, iterationId)),
        addIteration: iterationData => dispatch(addIteration(iterationData)), 
        addDay: dayData => dispatch(addDay(dayData)),
        getDay: dayId => dispatch(getDay(dayId)),
        addListContainerToDay: listData => dispatch(addListContainerToDay(listData)),
        addListToContainer: listData => dispatch(addListToContainer(listData)),
        updateMyFrameListTitle: listData => dispatch(updateMyFrameListTitle(listData)),
        addTextfieldToDay:textfieldData => dispatch(addTextfieldToDay(textfieldData)),
        addTextfieldToContainer: textfieldData => dispatch(addTextfieldToContainer(textfieldData)),
        updateTextfield: textfieldData => dispatch(updateTextfield(textfieldData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFrame); 