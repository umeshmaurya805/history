import React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import EventCalendar from "./EventCalendar";
import NextInLine from "./NextInLine";
import useStyles from "./style";
// import { useParams } from 'react-router-dom';

const Calendar = () => {
  const classes = useStyles();

  const events = [
    {
      name: "Event 7",
      startDate: new Date(2021, 6, 28, 10),
      endDate: new Date(2021, 7, 4, 20),
      slug: "event-7",
      subHeading: "This is our seventh event",
    },
    {
      name: "Event 6",
      startDate: new Date(2021, 6, 20, 10),
      endDate: new Date(2021, 6, 20, 14, 30),
      slug: "event-6",
      subHeading: "This is our sixth event",
    },
    {
      name: "Event 5",
      startDate: new Date(2021, 6, 15, 10),
      endDate: new Date(2021, 6, 16, 18, 30),
      slug: "event-5",
      subHeading: "This is our fifth event",
    },
    {
      name: "Event 4",
      startDate: new Date(2021, 6, 12, 12),
      endDate: new Date(2021, 6, 18, 15),
      slug: "event-4",
      subHeading: "This is our fourth event",
    },
    {
      name: "Event 3",
      startDate: new Date(2021, 6, 9, 8),
      endDate: new Date(2021, 6, 12, 14),
      slug: "event-3",
      subHeading: "This is our third event",
    },
    {
      name: "Event 2",
      startDate: new Date(2021, 6, 7, 12),
      endDate: new Date(2021, 6, 10, 18, 30),
      slug: "event-2",
      subHeading: "This is our second event",
    },
    {
      name: "Event 1",
      startDate: new Date(2021, 6, 1, 10),
      endDate: new Date(2021, 6, 5, 18, 30),
      slug: "event-1",
      subHeading: "This is our first event",
    },
    {
      name: "Event 0",
      startDate: new Date(2021, 6, 1, 15),
      endDate: new Date(2021, 6, 2, 18, 30),
      slug: "event-0",
      subHeading: "This is our first event",
    },
  ];

  // const day = useParams();

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Grid container justify="center">
            <Grid item xs={12} sm={7} lg={12}>
              <EventCalendar events={events} />
            </Grid>
            <Grid item xs={12} sm={5} lg={12} className={classes.nextLine}>
              <NextInLine events={events} handleEventClick={() => {}} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          event
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Calendar;
