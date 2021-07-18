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
import { format, isThisMonth } from "date-fns";
import { getEvents } from "../../../../data";

const NextInLine = () => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const eventsInThisMonth = getEvents().filter(({ startDate }) =>
    isThisMonth(startDate)
  );

  return (
    <div className={classes.root}>
      <Title tooltipText="Events list for the current month">
        Next In Line
      </Title>
      <List aria-label="next-in-line-list" className={classes.list}>
        {eventsInThisMonth.map((event, index) => {
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
                      label={`Starts On: ${format(event.startDate, "p")}`}
                      className={classes.eventRegisteredTag}
                    />
                  </Box>
                </Box>
              </ListItem>
              {index + 1 !== eventsInThisMonth.length && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default NextInLine;
