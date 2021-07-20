import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Title from "../../../common/Title";
import EventsTable from "../../../table/EventsTable";
import ParticipantListDialog from "../../../dialog/ParticipantListDialog";
import EventConfiguration from "../../../config/EventConfiguration";
import useStyles from "./style";
import { getEvents } from "../../../../data";
import { format, isAfter } from "date-fns";

const columns = [
  {
    id: "title",
    label: "Title",
    fixedWidth: "12rem",
    tooltipText: "Upcoming event names",
  },
  {
    id: "date",
    label: "Date",
    fixedWidth: "9.375rem",
    tooltipText: "Starting date of the event",
  },
  {
    id: "classes",
    label: "Classes",
    fixedWidth: "9.375rem",
    tooltipText: "Range of classes which can participate in the event",
  },
  {
    id: "registrations",
    label: "Registrations",
    fixedWidth: "9.375rem",
    tooltipText: "Number of registrations done from your school until now",
  },
  {
    id: "list",
    label: "List",
    fixedWidth: "9.375rem",
    tooltipText: "List of participants registered in the event",
  },
];

// function createData(slug, title, date, classes, registrations, list) {
//   return { slug, title, date, classes, registrations, list };
// }

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingEventList = getEvents()
  .filter((event) => isAfter(event.startDate, today) && event.isRegistered)
  .map((event) => {
    return {
      title: event.title,
      slug: event.slug,
      date: format(event.startDate, "PP"),
      classes: `${event.forClass.from} - ${event.forClass.to}`,
      registrations: 17,
    };
  });

const UpcomingEvent = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState(null);

  const handleClickOpen = (slug) => {
    setSlug(slug);
    setOpen(true);
  };

  const handleClose = () => {
    setSlug(null);
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
            <Title tooltipText="List of upcoming events that are open now">
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
          rows={upcomingEventList}
          columns={columns}
          handleClickOpen={handleClickOpen}
        />
      </Box>
      <ParticipantListDialog slug={slug} open={open} onClose={handleClose} />
    </div>
  );
};

export default UpcomingEvent;
