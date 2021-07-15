import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { isSameDay } from "date-fns";
import { useHistory, useParams } from "react-router-dom";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import EventsOnDialog from "../../../dialog/EventsOnDialog";
import EventConfiguration from "../../../config/EventConfiguration";
// import eventImage from "../../../../assets/svg/event-image.png";
// import { eventBinarySearch } from './../../../../utils/algorithms';
import useStyles from "./style";
// import { toast } from "react-toastify";
import { getSlugHash } from "../../../../data";
import { calendarEvents } from "./../../../../data";

const EventCalendar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const slugHash = getSlugHash();

  const selectedDay = slugHash.find((item) => slug === item[0])[1];
  // selectedDay.setHours(0, 0, 0, 0);

  // const [displayData, setDisplayData] = useState({});
  // const [selectedEvent, setSelectedEvent] = useState({ slug });
  const [eventList, setEventList] = useState([]);
  const [dialogDate, setDialogDate] = useState(selectedDay);
  const [openDialog, setOpenDialog] = useState(false);
  const [option, setOption] = useState({ class: 0, user: 0, category: 0 });

  const handleClose = (slug) => {
    setOpenDialog(false);

    if (typeof slug !== "string") return;

    history.push(`/dashboard/calendar/${slug}`);
    // console.log(slug);
  };

  // const handleClose = (selectedEventIndex) => {
  //   setOpenDialog(false);
  //   console.log(displayData);

  //   if (typeof selectedEventIndex !== "number") return;

  //   const { name, subHeading, startDate, endDate } =
  //     eventList[selectedEventIndex];

  //   setDisplayData({ name, subHeading, startDate, endDate });
  // };

  // const dateHash = {};

  // events.forEach((event, index) => {
  //   const { startDate } = event;

  //   if (dateHash[startDate]) {
  //     dateHash[startDate].push({ ...event, key: index });
  //   } else {
  //     dateHash[startDate] = [event];
  //   }
  // });

  // console.log(dateHash);

  // const selectedDays = Object.keys(dateHash).map((date) => {
  //   date = new Date(date);
  //   const isSelected = isSameDay(
  //     date.setHours(0, 0, 0, 0),
  //     new Date(selectedEvent.year, selectedEvent.month - 1, selectedEvent.day)
  //   );

  //   return {
  //     day: getDate(date),
  //     month: getMonth(date) + 1,
  //     year: getYear(date),
  //     className: `-selected ${
  //       isSelected
  //         ? isPast(date)
  //           ? classes.selectedEventPast
  //           : classes.selectedEvent
  //         : isPast(date) && classes.pastEvent
  //     }`,
  //   };
  // });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOption({ ...option, [name]: value });
  };
  // console.log(events);
  const handleDateClick = (selectedEventDate) => {
    calendarEvents.forEach(
      ({ year, month, day, eventCount, events: eventArray }) => {
        if (
          year === selectedEventDate.year &&
          month === selectedEventDate.month &&
          day === selectedEventDate.day
        ) {
          if (eventCount === 1) {
            history.push(`/dashboard/calendar/${eventArray[0].slug}`);
            console.log(`/dashboard/calendar/${eventArray[0].slug}`);
          } else {
            setEventList(eventArray);
            setDialogDate(new Date(year, month - 1, day));
            setOpenDialog(true);
          }
        }
      }
    );
    // const date = new Date(selectedEventDate)

    // console.log(events)
    //   selectedDays.forEach((date) => {
    //     if (
    //       date.year === selectedEventDate.year &&
    //       date.month === selectedEventDate.month &&
    //       date.day === selectedEventDate.day
    //     ) {

    // setSelectedEvent(selectedEventDate);
    // handleEventClick(eventBinarySearch(events, new Date()));
    // setOpenDialog(true);
    //       return;
    //     }
    //   });
  };

  const isPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const displayEventDays = calendarEvents.map(({ year, month, day }) => {
    const date = new Date(year, month-1, day);
    // console.log(selectedDay, date);
    const isSelected = isSameDay(selectedDay, date);

    return {
      year,
      month: month,
      day,
      className: `-selected ${
        isSelected
          ? isPast(date)
            ? classes.selectedEventPast
            : classes.selectedEvent
          : isPast(date) && classes.pastEvent
      }`,
    };
  });

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
        customDaysClassName={displayEventDays}
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
