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
import { getSlugHash } from "../../../data";

const Calendar = () => {
  const classes = useStyles();
  const history = useHistory();

  const { slug } = useParams();

  const slugHash = getSlugHash();

  if (!slug) {
    const today = new Date();

    const slugItem = slugHash.find((item) => {
      return isAfter(item[2], today);
    });

    if (!slugItem) {
      toast.info("No Events found", {
        toastId: "NoEventFound",
      });
      return <div>No Events</div>;
    }
    // console.log("slugItem", slugItem);
    history.push(`/dashboard/calendar/${slugItem[0]}`);
    return null;
  } else {
    const slugItem = slugHash.find((item) => slug === item[0]);
    if (!slugItem) {
      history.push("/dashboard/calendar");
      return null;
    }
  }

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} xl={12} className={classes.itemLeft}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <EventCalendar />
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.nextLine}>
              <NextInLine />
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={7} xl={8}> */}
          {/* <EventDetails /> */}
        {/* </Grid> */}
      </Grid>
    </Layout>
  );
};

export default Calendar;
