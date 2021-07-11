import React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import EventCalendar from "./EventCalendar";
import NextInLine from "./NextInLine";
import EventDetails from "./EventDetails";
import eventImage from "../../../assets/svg/event-image.png";
import useStyles from "./style";
// import { useHistory, useParams } from "react-router-dom";
import { eventBinarySearch } from './../../../utils/algorithms';

const Calendar = () => {
  const classes = useStyles();
  // const history = useHistory();
  const events = [
    {
      name: "Event X  Online theatre show for",
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
  ];

  // let { slug } = useParams();
  const slug="hi"
  // console.log('slug',slug);

  // if (!slug) {
  //   slug = eventBinarySearch(events, new Date());
  //   history.push(`/dashboard/calendar/${slug}`)
  // }

  const handleEventClick = (slug) => {
    // history.push(`/dashboard/calendar/${slug}`);
  };

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} xl={4} className={classes.itemLeft}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <EventCalendar slug={slug} events={events} handleEventClick={handleEventClick} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} className={classes.nextLine}>
              <NextInLine
                slug={slug}
                events={events}
                handleEventClick={handleEventClick}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} xl={8}>
          <EventDetails slug={slug} events={events} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Calendar;
