import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Title from "../../../common/Title";
import EventsTable from "../../../table/EventsTable";
import ParticipantListDialog from "../../../dialog/ParticipantListDialog";
import EventConfiguration from "../../../config/EventConfiguration";
import { useGetUpcomingEventsQuery } from "../../../../app/api/schoolEvent";
import useStyles from "./style";

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

const UpcomingEvent = () => {
  const classes = useStyles();
  const { data } = useGetUpcomingEventsQuery();

  const [open, setOpen] = useState(false);
  const [eventId, setEventId] = useState(null);

  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    if (data) {
      setUpcomingEvents(data);
    }
  }, [data]);

  const handleClickOpen = (id) => {
    setEventId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setEventId(null);
    setOpen(false);
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
            <EventConfiguration
              data={data}
              onChange={setUpcomingEvents}
            />
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
