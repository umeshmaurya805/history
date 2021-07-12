import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { getDate, getMonth, getYear, isPast, isSameDay } from "date-fns";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import EventList from "../../../dialog/EventList";
import EventConfiguration from "../../../config/EventConfiguration";
import useStyles from "./style";
// import { eventBinarySearch } from './../../../../utils/algorithms';

const EventCalendar = ({ slug, events, handleEventClick }) => {
  const classes = useStyles();

  const [displayData, setDisplayData] = useState({});
  const [selectedEvent, setSelectedEvent] = useState({ slug });
  const [eventList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [option, setOption] = useState({ class: 0, user: 0, category: 0 });

  console.log(displayData);

  const handleClose = (selectedEventIndex) => {
    setOpenDialog(false);
    console.log(typeof selectedEventIndex);
    if (typeof selectedEventIndex !== "number") return;

    const { name, subHeading, startDate, endDate } =
      eventList[selectedEventIndex];

    setDisplayData({ name, subHeading, startDate, endDate });
  };

  const dateHash = {};

  events.forEach((event, index) => {
    const { startDate } = event;

    if (dateHash[startDate]) {
      dateHash[startDate].push({ ...event, key: index });
    } else {
      dateHash[startDate] = [event];
    }
  });

  // console.log(dateHash);

  const selectedDays = Object.keys(dateHash).map((date) => {
    date = new Date(date);
    const isSelected = isSameDay(
      date.setHours(0, 0, 0, 0),
      new Date(selectedEvent.year, selectedEvent.month - 1, selectedEvent.day)
    );

    return {
      day: getDate(date),
      month: getMonth(date) + 1,
      year: getYear(date),
      className: `-selected ${
        isSelected
          ? isPast(date)
            ? classes.selectedEventPast
            : classes.selectedEvent
          : isPast(date) && classes.pastEvent
      }`,
    };
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOption({ ...option, [name]: value });
  };

  const handleDateClick = (selectedEventDate) => {
    selectedDays.forEach((date) => {
      if (
        date.year === selectedEventDate.year &&
        date.month === selectedEventDate.month &&
        date.day === selectedEventDate.day
      ) {
        // setEventList(
        //   events.filter(({ startDate: date }) => {
        //     return (
        //       getYear(date) === selectedEventDate.year &&
        //       getMonth(date) + 1 === selectedEventDate.month &&
        //       getDate(date) === selectedEventDate.day
        //     );
        //   })
        // );
        setSelectedEvent(selectedEventDate);
        // handleEventClick(eventBinarySearch(events, new Date()));
        // setOpenDialog(true);
        return;
      }
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      className={classes.root}
    >
      <EventConfiguration
        value={option}
        handleChange={handleChange}
        styles={{ root: classes.config }}
      />
      <Calendar
        calendarClassName={classes.calendar}
        onChange={handleDateClick}
        colorPrimary="#007AFF"
        colorPrimaryLight="#D5EFFF"
        customDaysClassName={selectedDays}
      />
      <EventList
        open={openDialog}
        handleClose={handleClose}
        date={
          new Date(selectedEvent.year, selectedEvent.month, selectedEvent.day)
        }
        data={eventList}
      />
    </Box>
  );
};

export default EventCalendar;
