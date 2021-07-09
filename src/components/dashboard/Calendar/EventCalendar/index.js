import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { getDate, getMonth, getYear } from "date-fns";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import EventList from "../../../dialog/EventList";
import EventConfiguration from "../../../common/EventConfiguration";
import useStyles from "./style";
import { Button, Typography } from "@material-ui/core";

const EventCalendar = ({ events }) => {
  const classes = useStyles();

  const [displayData, setDisplayData] = useState({});
  const [selectedEvent, setSelectedEvent] = useState({});
  const [eventList, setEventList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDayRange, setSelectedDayRange] = useState(null);
  const [option, setOption] = useState({ class: 0, user: 0, category: 0 });

  const handleClose = (selectedEventIndex) => {
    setOpenDialog(false);
    const { name, subHeading, startDate, endDate } =
      eventList[selectedEventIndex];
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <EventConfiguration
        value={option}
        handleChange={handleChange}
        styles={{ root: classes.config }}
      />
      <Calendar
        calendarClassName={classes.calendar}
        value={selectedDayRange}
        onChange={handleDateClick}
        colorPrimary="#007AFF"
        colorPrimaryLight="#D5EFFF"
        shouldHighlightWeekends
        customDaysClassName={!selectedDayRange ? selectedDays : []}
        renderFooter={() =>
          selectedDayRange && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem 2rem",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  setSelectedDayRange(null);
                }}
                style={{
                  padding: "1rem 2rem",
                }}
              >
                Reset Value!
              </Button>
            </div>
          )
        }
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
