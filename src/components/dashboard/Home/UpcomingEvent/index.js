import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Title from "../../../common/Title";
import EventsTable from "../../../table/EventsTable";
import ParticipantListDialog from "../../../dialog/ParticipantListDialog";
import EventConfiguration from "../../../config/EventConfiguration";
import useStyles from "./style";
// import { getEvents } from "../../../../data";
// import { format, isAfter } from "date-fns";
import { useGetUpcomingEventsQuery } from "../../../../app/api/schoolEvent";

const columns = [
  {
    id: "title",
    label: "Title",
    fixedWidth: "12rem",
  },
  {
    id: "date",
    label: "Date",
    fixedWidth: "9.375rem",
  },
  {
    id: "forClass",
    label: "Classes",
    fixedWidth: "9.375rem",
  },
  {
    id: "registrations",
    label: "Registrations",
    fixedWidth: "9.375rem",
    tooltipText: "Number of student registrations for this event",
  },
  {
    id: "list",
    label: "List",
    fixedWidth: "9.375rem",
    tooltipText: "List of students registered for this event",
  },
];

// function createData(eventId, title, date, classes, registrations, list) {
//   return { eventId, title, date, classes, registrations, list };
// }

// const today = new Date();
// today.setHours(0, 0, 0, 0);

// const upcomingEventList = getEvents()
//   .filter((event) => isAfter(event.startDate, today) && event.isRegistered)
//   .map((event) => {
//     return {
//       title: event.title,
//       eventId: event.eventId,
//       date: format(event.startDate, "PP"),
//       classes: `${event.forClass.from} - ${event.forClass.to}`,
//       registrations: 17,
//     };
//   });

const UpcomingEvent = () => {
  const classes = useStyles();
  const { data } = useGetUpcomingEventsQuery();

  const [open, setOpen] = useState(false);
  const [eventId, setEventId] = useState(null);

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  console.log(upcomingEvents);

  useEffect(() => {
    if (data) {
      setUpcomingEvents(data);
    }
  }, [data]);

  const handleClickOpen = (slug) => {
    setEventId(slug);
    setOpen(true);
  };

  const handleClose = () => {
    setEventId(null);
    setOpen(false);
  };

  const [option, setOption] = useState({ class: 0, user: 0, category: 0 });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOption({ ...option, [name]: value });
  };

  return (
    <div className={classes.root}>
      <Box>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Title tooltipText="List of upcoming events your school is registered into">
              Upcoming Events
            </Title>
          </Grid>
          <Grid item className={classes.selectorGrid}>
            <EventConfiguration value={option} handleChange={handleChange} />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <EventsTable
          clickableEvent
          rows={upcomingEvents}
          columns={columns}
          handleClickOpen={handleClickOpen}
        />
      </Box>
      <ParticipantListDialog
        eventId={eventId}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default UpcomingEvent;
