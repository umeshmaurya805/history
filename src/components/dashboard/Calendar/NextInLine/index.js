import React from "react";
import { useSelector } from "react-redux";
import { format, isAfter, isPast, isSameMonth } from "date-fns";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Title from "../../../common/Title";
// import { useGetEventsQuery } from "../../../../app/api/events";
import useStyles from "./style";

const NextInLine = ({ visibleDate }) => {
  const classes = useStyles();
  const history = useHistory();
  const { data: events, selectedEventId } = useSelector((state) => state.event);

  const data = events?.filter(({ date }) =>
    isSameMonth(new Date(date), visibleDate)
  );

  const rotateArray = (events) => {
    // reverse helper function
    const reverse = (arr, start, end) => {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    };

    const today = new Date();

    const selectedEventIndex = data.findIndex(({ registrationDeadline }) =>
      isAfter(new Date(registrationDeadline), today)
    );

    if (selectedEventIndex <= 0) {
      return events;
    }

    reverse(events, 0, selectedEventIndex - 1);
    reverse(events, selectedEventIndex, events.length - 1);
    reverse(events, 0, events.length - 1);

    return events;
  };

  return (
    <div className={classes.root}>
      <Title size="large" tooltipText="Events list for the selected month">
        Events in {format(visibleDate, "LLL, y")}
      </Title>
      <List aria-label="next-in-line-list" className={classes.list}>
        {rotateArray(data).map((event, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem
                className={
                  isPast(new Date(event.registrationDeadline))
                    ? classes.pastEvent
                    : classes.upcomingEvent
                }
                selected={event._id === selectedEventId}
                button
                onClick={() => history.push(`/dashboard/calendar/${event._id}`)}
              >
                <ListItemAvatar>
                  <Avatar
                    className={`${classes.eventDate} ${
                      isPast(new Date(event.registrationDeadline))
                        ? classes.pastDate
                        : classes.upcomingDate
                    }`}
                  >
                    {new Date(event.date).getDate()}
                  </Avatar>
                </ListItemAvatar>
                <Box className={classes.eventBox}>
                  <Typography component="p" className={classes.eventName}>
                    {event.title}
                  </Typography>
                  <Typography component="p" className={classes.eventSubHeading}>
                    {event.cardSummary}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Chip
                      size="small"
                      label={
                        event.isRegistered ? "Registered" : "Not Registered"
                      }
                      className={classes.eventRegisteredTag}
                      style={{
                        background: event.isRegistered ? "#69DE91" : "#EF7373",
                      }}
                    />
                    <Chip
                      size="small"
                      variant="outlined"
                      label={`Registration Deadline: ${format(
                        new Date(event.registrationDeadline),
                        "PP"
                      )}`}
                      className={classes.eventRegisteredTag}
                    />
                  </Box>
                </Box>
              </ListItem>
              {index + 1 !== data.length && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default NextInLine;
