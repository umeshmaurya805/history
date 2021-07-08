import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { getDate, getMonth, getYear } from "date-fns";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import EventList from "../../../dialog/EventList";
import EventConfiguration from "../../../common/EventConfiguration";
import useStyles from "./style";

const EventCalendar = ({ events }) => {
  const classes = useStyles();

  const [selectedEvent, setSelectedEvent] = useState({});
  const [eventList, setEventList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDayRange, setSelectedDayRange] = useState(null);
  const [option, setOption] = useState({ class: 0, user: 0, category: 0 });

  const handleClose = (selectedEventIndex) => {
    setOpenDialog(false);
    console.log(selectedEventIndex);
    const { startDate, endDate } = eventList[selectedEventIndex];
    console.log(startDate, endDate);
    setSelectedDayRange({
      from: {
        day: getDate(startDate),
        month: getMonth(startDate) + 1,
        year: getYear(startDate),
      },
      to: {
        day: getDate(endDate),
        month: getMonth(endDate) + 1,
        year: getYear(endDate),
      },
    });
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
    return {
      day: getDate(date),
      month: getMonth(date) + 1,
      year: getYear(date),
      className: "-selected",
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
        setEventList(
          events.filter(({ startDate: date }) => {
            return (
              getYear(date) === selectedEventDate.year &&
              getMonth(date) + 1 === selectedEventDate.month &&
              getDate(date) === selectedEventDate.day
            );
          })
        );
        setSelectedEvent(selectedEventDate);
        setSelectedDayRange(null);
        setOpenDialog(true);
        return;
      }
    });
  };

  return (
    <Box className={classes.root}>
      <EventConfiguration value={option} handleChange={handleChange} />
      <Calendar
        value={selectedDayRange}
        onChange={handleDateClick}
        colorPrimary="#007AFF"
        colorPrimaryLight="#D5EFFF"
        shouldHighlightWeekends
        customDaysClassName={!selectedDayRange ? selectedDays : []}
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
