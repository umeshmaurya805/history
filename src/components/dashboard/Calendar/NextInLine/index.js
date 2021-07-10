import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Title from "../../../common/Title";
import useStyles from "./style";
import { Box } from "@material-ui/core";

const NextInLine = ({ events, handleEventClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title tooltipText="Events list for the current month">
        Next In Line
      </Title>
      <List aria-label="next-in-line-list" className={classes.list}>
        {events.map((event, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem
                selected={index === 0}
                button
                onClick={() => handleEventClick(index)}
              >
                <ListItemAvatar>
                  <Avatar className={classes.eventDate}>
                    {event.startDate.getDate()}
                  </Avatar>
                </ListItemAvatar>
                <Box>
                  <Typography component="p" className={classes.eventName}>
                    {event.name}
                  </Typography>
                  <Typography component="p" className={classes.eventSubHeading}>
                    {event.subHeading}
                  </Typography>
                  <Chip
                    size="small"
                    label={index % 3 === 0 ? "Not Registered" : "Registered"}
                    className={classes.eventRegisteredTag}
                    style={{
                      background: index % 3 === 0 ? "#EF7373" : "#69DE91",
                    }}
                  />
                </Box>
              </ListItem>
              {index + 1 !== events.length && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default NextInLine;
