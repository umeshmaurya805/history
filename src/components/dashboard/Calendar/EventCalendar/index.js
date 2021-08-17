import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import { isSameDay, isSameMonth } from "date-fns";
import { isAfter } from "date-fns/esm";
import { useHistory } from "react-router-dom";
import { Calendar } from "../../../../CustomCalendar";
import "../../../../CustomCalendar/DatePicker.css";
import EventsOnDialog from "../../../dialog/EventsOnDialog";
import EventConfiguration from "../../../config/EventConfiguration";
import { useGetEventsQuery } from "../../../../app/api/events";
import {
  setSelectedEventId,
  setEventsData,
} from "../../../../app/slices/eventSlice";
import useStyles from "./style";

const EventCalendar = ({ visibleDate, setVisibleDate, setMonthHasEvent }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { data = [] } = useGetEventsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data,
    }),
  });

  const events = useSelector((state) => state.event.data);
  console.log("e", events);
  // const [events, setEvents] = useState(data);
  const [calendarEvents, setCalendarEvents] = useState(events);
  const [eventList, setEventList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (events?.length > 0) {
      const eventHash = new Map();

      events.forEach((event) => {
        const date = new Date(event.date);
        date.setHours(0, 0, 0, 0, 0);
        const dateString = date.toString();

        if (eventHash.has(dateString)) {
          const hashedData = eventHash.get(dateString);
          hashedData.eventCount++;
          hashedData.events.push(event);
          eventHash.set(dateString, hashedData);
        } else {
          eventHash.set(dateString, {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            eventCount: 1,
            events: [event],
          });
        }
      });

      setCalendarEvents(
        Array.from(eventHash, ([name, value]) => ({
          name,
          value,
        })).map(({ value }) => value)
      );
    }
    console.log("hi");
  }, [events]);

  const handleClose = (id) => {
    setOpenDialog(false);

    if (typeof id !== "string") return;

    history.push(`/dashboard/calendar/${id}`);
  };

  const handleDateClick = (selectedEventDate) => {
    calendarEvents.forEach(({ year, month, day, eventCount, events }) => {
      if (
        year === selectedEventDate.year &&
        month === selectedEventDate.month &&
        day === selectedEventDate.day
      ) {
        if (eventCount === 1) {
          history.push(`/dashboard/calendar/${events[0]._id}`);
        } else {
          setEventList(events);
          setVisibleDate(new Date(year, month - 1, day));
          setOpenDialog(true);
        }
      }
    });
  };

  const today = new Date();

  const handleDateChange = (activeDate) => {
    const selectedDate = new Date(
      activeDate.year,
      activeDate.month - 1,
      activeDate.day
    );

    const eventsThisMonth = events.filter(({ date }) =>
      isSameMonth(new Date(date), selectedDate)
    );

    if (eventsThisMonth.length === 0) {
      setMonthHasEvent(false);
      return;
    }

    let selectedEvent = eventsThisMonth.find(({ registrationDeadline }) =>
      isAfter(new Date(registrationDeadline), today)
    );

    if (!selectedEvent) {
      selectedEvent = eventsThisMonth[eventsThisMonth.length - 1];
    }

    setMonthHasEvent(true);
    dispatch(setSelectedEventId(selectedEvent._id));
    history.push(`/dashboard/calendar/${selectedEvent._id}`);
  };

  const handleEventChange = (events) => {
    // setMonthHasEvent(event`)
    console.log("eee", events);
    dispatch(setEventsData(events));
    history.push("/dashboard/calendar");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      className={classes.root}
    >
      <EventConfiguration
        data={data}
        onChange={handleEventChange}
        classes={{ root: classes.config }}
      />
      <Calendar
        selectedMonth={visibleDate.getMonth() + 1}
        calendarClassName={classes.calendar}
        onChange={handleDateClick}
        colorPrimary="#007AFF"
        colorPrimaryLight="#D5EFFF"
        calendarTodayClassName={classes.today}
        customDaysClassName={calendarEvents.map(
          ({ year, month, day, events }) => {
            const date = new Date(year, month - 1, day);
            const isSelected = isSameDay(visibleDate, date);
            let isRegistrationDeadlineFinished = true;

            events?.forEach(({ registrationDeadline }) => {
              if (isAfter(new Date(registrationDeadline), today)) {
                isRegistrationDeadlineFinished = false;
              }
            });

            return {
              year,
              month,
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
        )}
        onDateChange={handleDateChange}
      />
      <EventsOnDialog
        open={openDialog}
        handleClose={handleClose}
        date={visibleDate}
        data={eventList}
      />
    </Box>
  );
};

export default EventCalendar;
