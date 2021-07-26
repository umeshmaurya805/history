import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { isSameDay } from "date-fns";
import { isAfter } from "date-fns/esm";
import { useHistory, useParams } from "react-router-dom";
import { Calendar } from "../../../../CustomCalendar";
import "../../../../CustomCalendar/DatePicker.css";
import EventsOnDialog from "../../../dialog/EventsOnDialog";
import EventConfiguration from "../../../config/EventConfiguration";
import { getSlugHash } from "../../../../data";
import { calendarEvents } from "./../../../../data";
import useStyles from "./style";

const EventCalendar = ({ setVisibleDate }) => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const slugHash = getSlugHash();

  const selectedDay = slugHash.find((item) => slug === item[0])[1];

  const [eventList, setEventList] = useState([]);
  const [dialogDate, setDialogDate] = useState(selectedDay);
  const [openDialog, setOpenDialog] = useState(false);
  const [option, setOption] = useState({ class: 0, user: 0, category: 0 });

  const handleClose = (slug) => {
    setOpenDialog(false);

    if (typeof slug !== "string") return;

    history.push(`/dashboard/calendar/${slug}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOption({ ...option, [name]: value });
  };

  const handleDateClick = (selectedEventDate) => {
    calendarEvents.forEach(({ year, month, day, eventCount, events }) => {
      if (
        year === selectedEventDate.year &&
        month === selectedEventDate.month &&
        day === selectedEventDate.day
      ) {
        if (eventCount === 1) {
          history.push(`/dashboard/calendar/${events[0].slug}`);
          console.log(`/dashboard/calendar/${events[0].slug}`);
        } else {
          setEventList(events);
          setDialogDate(new Date(year, month - 1, day));
          setOpenDialog(true);
        }
      }
    });
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const displayEventDays = calendarEvents.map(
    ({ year, month, day, events }) => {
      const date = new Date(year, month - 1, day);
      // console.log(selectedDay, date);
      const isSelected = isSameDay(selectedDay, date);
      let isRegistrationDeadlineFinished = true;

      events.forEach(({ registrationDeadline }) => {
        if (isAfter(registrationDeadline, today)) {
          isRegistrationDeadlineFinished = false;
        }
      });

      return {
        year,
        month: month,
        day,
        className: `-selected ${
          isSelected
            ? isRegistrationDeadlineFinished
              ? classes.selectedEventPast
              : classes.selectedEvent
            : isRegistrationDeadlineFinished && classes.pastEvent
        }`,
      };
    }
  );

  const handleDateChange = (activeDate) => {
    console.log(activeDate);
    const date = new Date(
      activeDate.year,
      activeDate.month - 1,
      activeDate.day
    );

    setVisibleDate(date);
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
        classes={{ root: classes.config }}
      />
      <Calendar
        calendarClassName={classes.calendar}
        onChange={handleDateClick}
        colorPrimary="#007AFF"
        colorPrimaryLight="#D5EFFF"
        calendarTodayClassName={classes.today}
        customDaysClassName={displayEventDays}
        onDateChange={handleDateChange}
      />
      <EventsOnDialog
        open={openDialog}
        handleClose={handleClose}
        date={dialogDate}
        data={eventList}
      />
    </Box>
  );
};

export default EventCalendar;
