import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import Title from "../../../common/Title";
// import eventImage from "../../../../assets/svg/event-image.png";
import useStyles from "./style";
import { format, isPast, isSameMonth } from "date-fns";
import { getEvents } from "../../../../data";

const NextInLine = ({ visibleDate }) => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const eventsForTheSelectedMonth = getEvents().filter(({ startDate }) =>
    isSameMonth(startDate, visibleDate)
  );

  const rotateArray = function (events, k) {
    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }

    k %= events.length;

    reverse(events, 0, events.length - 1);
    reverse(events, 0, k - 1);
    reverse(events, k, events.length - 1);

    return events;
  };

  return (
    <div className={classes.root}>
      <Title size="large" tooltipText="Events list for the selected month">
        Events in {format(visibleDate, "LLL, y")}
      </Title>
      <List aria-label="next-in-line-list" className={classes.list}>
        {rotateArray(
          eventsForTheSelectedMonth,
          1 +
            eventsForTheSelectedMonth.findIndex(({ registrationDeadline }) =>
              isPast(registrationDeadline)
            )
        ).map((event, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem
                className={
                  isPast(event.registrationDeadline)
                    ? classes.pastEvent
                    : classes.upcomingEvent
                }
                //  style={{
                //       backgroundColor:
                //         isPast(event.registrationDeadline) && "#C4C4C4",
                //     }}
                selected={event.slug === slug}
                button
                onClick={() =>
                  history.push(`/dashboard/calendar/${event.slug}`)
                }
              >
                <ListItemAvatar>
                  <Avatar
                    className={`${classes.eventDate} ${
                      isPast(event.registrationDeadline)
                        ? classes.pastDate
                        : classes.upcomingDate
                    }`}
                    // style={{
                    //   backgroundColor:
                    //     isPast(event.registrationDeadline) && "grey",
                    // }}
                  >
                    {event.startDate.getDate()}
                  </Avatar>
                </ListItemAvatar>
                <Box className={classes.eventBox}>
                  <Typography component="p" className={classes.eventName}>
                    {event.title}
                  </Typography>
                  <Typography component="p" className={classes.eventSubHeading}>
                    {event.summary}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Chip
                      size="small"
                      label={index % 3 === 0 ? "Not Registered" : "Registered"}
                      className={classes.eventRegisteredTag}
                      style={{
                        background: index % 3 === 0 ? "#EF7373" : "#69DE91",
                      }}
                    />
                    <Chip
                      size="small"
                      variant="outlined"
                      label={`Registration Deadline: ${format(
                        event.registrationDeadline,
                        "PP"
                      )}`}
                      className={classes.eventRegisteredTag}
                    />
                  </Box>
                </Box>
              </ListItem>
              {index + 1 !== eventsForTheSelectedMonth.length && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default NextInLine;
