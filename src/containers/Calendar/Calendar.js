import React, {useState} from "react";
import "./Calendar.css";
import {Calendar, momentLocalizer, Views}  from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'


const localizer = momentLocalizer(moment)

const allViews = Object.keys(Views).map(k => Views[k]);

const DragAndDropCalendar = withDragAndDrop(Calendar)

const CalendarView = props => {
    const [events, setEvents] = useState([{
        title: "Test",
        start: Date.now(),
        end: Date.now(),
        allDay: false 
      }])

      const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title){
            setEvents([
              ...events,
              {
                start,
                end,
                title,
              },
            ],
          )
      }
    }

    /*const resizeEvent = ({event, start, end}) => {
        const newEvents = events.map(existingEvent => {
            return existingEvent.id === event.id ? {...existingEvent, start, end} : existingEvent
        }) 
        setEvents(newEvents);
    }*/
    return (
        <div className = "CalendarContainer">
            <DragAndDropCalendar
            selectable
            localizer={localizer}
            events = {events}
            step={60}
            views={allViews}
            defaultDate={new Date(2020, 4, 1)}
            onSelectSlot = {handleSelect}
            />
        </div>
    )
}

export default CalendarView;