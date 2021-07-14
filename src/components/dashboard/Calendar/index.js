import React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import EventCalendar from "./EventCalendar";
import NextInLine from "./NextInLine";
import EventDetails from "./EventDetails";
import useStyles from "./style";
import { useHistory, useParams } from "react-router-dom";
import { isAfter } from "date-fns";
// import { eventBinarySearch } from './../../../utils/algorithms';
import { toast } from "react-toastify";

const Calendar = () => {
  const classes = useStyles();
  const history = useHistory();

  const { slug } = useParams();

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
      return <div>No Events</div>;
    }
    console.log("slugItem", slugItem);
    history.push(`/dashboard/calendar/${slugItem[0]}`);
    return null;
  }

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} xl={4} className={classes.itemLeft}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <EventCalendar              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} className={classes.nextLine}>
              <NextInLine />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} xl={8}>
          <EventDetails/>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Calendar;
