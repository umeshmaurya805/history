import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { isAfter, isPast, isSameDay } from "date-fns";
import { useHistory, useParams } from "react-router-dom";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import EventsOnDialog from "../../../dialog/EventsOnDialog";
import EventConfiguration from "../../../config/EventConfiguration";
import eventImage from "../../../../assets/svg/event-image.png";
// import { eventBinarySearch } from './../../../../utils/algorithms';
import useStyles from "./style";
import { toast } from "react-toastify";

const EventCalendar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const events = [
    {
      year: 2021,
      month: 6,
      day: 1,
      eventCount: 2,
      events: [
        {
          name: "Event X  Online theatre show",
          startDate: new Date(2021, 6, 1, 15),
          endDate: new Date(2021, 6, 2, 18, 30),
          slug: "event-0",
          subHeading:
            "This is our test event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
        {
          name: "Event 1",
          startDate: new Date(2021, 6, 1, 10),
          endDate: new Date(2021, 6, 5, 18, 30),
          slug: "event-1",
          subHeading:
            "This is our first event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
      ],
    },
    {
      year: 2021,
      month: 6,
      day: 7,
      eventCount: 1,
      events: [
        {
          name: "Event 2",
          startDate: new Date(2021, 6, 7, 12),
          endDate: new Date(2021, 6, 10, 18, 30),
          slug: "event-2",
          subHeading:
            "This is our second event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
      ],
    },
    {
      year: 2021,
      month: 6,
      day: 9,
      eventCount: 1,
      events: [
        {
          name: "Event 3",
          startDate: new Date(2021, 6, 9, 8),
          endDate: new Date(2021, 6, 12, 14),
          slug: "event-3",
          subHeading:
            "This is our third event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
      ],
    },
    {
      year: 2021,
      month: 6,
      day: 12,
      eventCount: 1,
      events: [
        {
          name: "Event 4",
          startDate: new Date(2021, 6, 12, 12),
          endDate: new Date(2021, 6, 18, 15),
          slug: "event-4",
          subHeading:
            "This is our fourth event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
      ],
    },
    {
      year: 2021,
      month: 6,
      day: 15,
      eventCount: 1,
      events: [
        {
          name: "Event 5",
          startDate: new Date(2021, 6, 15, 10),
          endDate: new Date(2021, 6, 16, 18, 30),
          slug: "event-5",
          subHeading:
            "This is our fifth event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
      ],
    },
    {
      year: 2021,
      month: 6,
      day: 20,
      eventCount: 1,
      events: [
        {
          name: "Event 6",
          startDate: new Date(2021, 6, 20, 10),
          endDate: new Date(2021, 6, 20, 14, 30),
          slug: "event-6",
          subHeading:
            "This is our sixth event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
      ],
    },
    {
      year: 2021,
      month: 6,
      day: 28,
      eventCount: 3,
      events: [
        {
          name: "Event 7 - World of Theater",
          startDate: new Date(2021, 6, 28, 10),
          endDate: new Date(2021, 7, 4, 20),
          slug: "event-7",
          subHeading:
            "This is our seventh event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
        {
          name: "Event 8 - World of Theater",
          startDate: new Date(2021, 6, 28, 8),
          endDate: new Date(2021, 7, 7, 15),
          slug: "event-8",
          subHeading:
            "This is our eight event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
        {
          name: "Event 9 - World of Theater",
          startDate: new Date(2021, 6, 28, 12),
          endDate: new Date(2021, 7, 1, 15),
          slug: "event-9",
          subHeading:
            "This is our ninth event Online theatre show for class 9-12  Online theatre show for class 9-12",
          image: eventImage,
          description: "Event details, rounds timings, etc.",
        },
      ],
    },
  ];

  const slugHash = [
    ["event-0", { year: 2021, month: 6, day: 1 }],
    ["event-1", { year: 2021, month: 6, day: 1 }],
    ["event-2", { year: 2021, month: 6, day: 7 }],
    ["event-3", { year: 2021, month: 6, day: 9 }],
    ["event-4", { year: 2021, month: 6, day: 12 }],
    ["event-5", { year: 2021, month: 6, day: 15 }],
    ["event-6", { year: 2021, month: 6, day: 20 }],
    ["event-7", { year: 2021, month: 6, day: 28 }],
    ["event-8", { year: 2021, month: 6, day: 28 }],
    ["event-9", { year: 2021, month: 6, day: 28 }],
  ];

  if (!slug) {
    const today = new Date();

    const slugItem = slugHash.find(([_, item]) => {
      const day = new Date(item.year, item.month, item.day);

      return isAfter(day, today);
    });

    if (!slugItem) {
      toast.info("No Events found", {
        toastId: "NoEventFound",
      });
      // return <div>No Events</div>;
    }
    console.log("slugItem", slugItem);
    // slug = slugItem[0]
    history.push(`/dashboard/calendar/${slugItem[0]}`);
    // return null;
  }
  const selectedDay = slugHash.find((item) => slug === item[0])[1];

  // const [displayData, setDisplayData] = useState({});
  // const [selectedEvent, setSelectedEvent] = useState({ slug });
  const [eventList, setEventList] = useState([]);
  const [dialogDate, setDialogDate] = useState(
    new Date(selectedDay.year, selectedDay.month, selectedDay.day)
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [option, setOption] = useState({ class: 0, user: 0, category: 0 });

  const handleClose = (slug) => {
    setOpenDialog(false);

    if (typeof slug !== "string") return;

    history.push(`/dashboard/calendar/${slug}`);
    console.log(slug);
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
  console.log(events);
  const handleDateClick = (selectedEventDate) => {
    events.forEach(({ year, month, day, eventCount, events: eventArray }) => {
      if (
        year === selectedEventDate.year &&
        month + 1 === selectedEventDate.month &&
        day === selectedEventDate.day
      ) {
        if (eventCount === 1) {
          history.push(`/dashboard/calendar/${eventArray[0].slug}`);
          console.log(`/dashboard/calendar/${eventArray[0].slug}`);
        } else {
          setEventList(eventArray);
          setDialogDate(new Date(year, month, day));
          setOpenDialog(true);
        }
      }
    });
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

  const selectedDate = new Date(
    selectedDay.year,
    selectedDay.month,
    selectedDay.day
  );

  const displayEventDays = events.map(({ year, month, day }) => {
    const date = new Date(year, month, day);

    const isSelected = isSameDay(selectedDate, date);

    return {
      year,
      month: month + 1,
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
        styles={{ root: classes.config }}
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
