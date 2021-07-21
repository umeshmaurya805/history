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
import { format, isSameMonth } from "date-fns";
import { getEvents } from "../../../../data";

const NextInLine = ({ visibleDate }) => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const eventsForTheSelectedMonth = getEvents().filter(({ startDate }) =>
    isSameMonth(startDate, visibleDate)
  );

  return (
    <div className={classes.root}>
      <Title size="large" tooltipText="Events list for the selected month">
        Events on {format(visibleDate, "LLL, y")}
      </Title>
      <List aria-label="next-in-line-list" className={classes.list}>
        {eventsForTheSelectedMonth.map((event, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem
                selected={event.slug === slug}
                button
                onClick={() =>
                  history.push(`/dashboard/calendar/${event.slug}`)
                }
              >
                <ListItemAvatar>
                  <Avatar className={classes.eventDate}>
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
                      label={`Deadline: ${format(
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
