import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import EventCalendar from "./EventCalendar";
import NextInLine from "./NextInLine";
import EventDetails from "./EventDetails";
import useStyles from "./style";
import { useHistory, useParams } from "react-router-dom";
import { isAfter } from "date-fns";
import { toast } from "react-toastify";
import { getSlugHash } from "../../../data";

const Calendar = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();
  const history = useHistory();
  const [visibleDate, setVisibleDate] = useState(new Date());

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
        <Grid item xs={12} md={5} xl={5} className={classes.itemLeft}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <EventCalendar setVisibleDate={setVisibleDate} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} className={classes.nextLine}>
              <NextInLine visibleDate={visibleDate} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} xl={7}>
          <EventDetails />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Calendar;
