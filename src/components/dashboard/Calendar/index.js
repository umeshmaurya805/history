import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useHistory, useParams } from "react-router-dom";
import { isAfter, isSameMonth } from "date-fns";
import Layout from "../../common/Layout";
import EventCalendar from "./EventCalendar";
import NextInLine from "./NextInLine";
import EventDetails from "./EventDetails";
import { useGetEventsQuery } from "../../../app/api/events";
import {
  setSelectedEventId,
  setEventsData,
} from "../../../app/slices/eventSlice";
import useStyles from "./style";

const Calendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [visibleDate, setVisibleDate] = useState(new Date());
  const [monthHasEvent, setMonthHasEvent] = useState(false);

  const events = useSelector((state) => state.event.data);

  const { data } = useGetEventsQuery();

  const { id } = useParams();

  useEffect(() => {
    if (data?.length > 0) {
      dispatch(
        setEventsData(data.filter(({ eventFor }) => eventFor === "Student"))
      );
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (!events) return;

    let selectedEvent;

    if (id) {
      selectedEvent = events.find(({ _id }) => _id === id);

      if (!selectedEvent) {
        history.push("/dashboard/calendar");
        return null;
      }
    } else {
      const today = new Date();

      const eventsThisMonth = events.filter(({ date }) =>
        isSameMonth(new Date(date), today)
      );

      if (eventsThisMonth.length === 0) {
        setMonthHasEvent(false);
        return;
      }

      selectedEvent = eventsThisMonth.find(({ registrationDeadline }) =>
        isAfter(new Date(registrationDeadline), today)
      );

      if (!selectedEvent) {
        selectedEvent = eventsThisMonth[eventsThisMonth.length - 1];
      }
    }

    setMonthHasEvent(true);
    setVisibleDate(new Date(selectedEvent.date));
    dispatch(setSelectedEventId(selectedEvent._id));
  }, [events, dispatch, id, history]);

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} xl={5} className={classes.itemLeft}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <EventCalendar
                visibleDate={visibleDate}
                setVisibleDate={setVisibleDate}
                setMonthHasEvent={setMonthHasEvent}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} className={classes.nextLine}>
              {monthHasEvent && <NextInLine visibleDate={visibleDate} />}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} xl={7}>
          {monthHasEvent ? (
            <EventDetails />
          ) : (
            <div className={classes.noEvents}>
              Events not available for this month
            </div>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Calendar;
