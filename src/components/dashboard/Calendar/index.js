import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import Layout from "../../common/Layout";
import EventCalendar from "./EventCalendar";
// import { useParams } from 'react-router-dom';

const Calendar = () => {
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
      endDate: new Date(2021, 6, 3, 18, 30),
      slug: "event-1",
      subHeading: "This is our first event",
    },
  ];

  // const day = useParams();
  

  return (
    <Layout>
      <Grid container>
        <Grid item sm={6}>
          <EventCalendar events={events} />
        </Grid>
        <Grid item sm={6}></Grid>
      </Grid>
    </Layout>
  );
};

export default Calendar;
