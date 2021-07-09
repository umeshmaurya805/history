import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Title from "../../../common/Title";
import useStyles from "./style";

const NextInLine = ({ events, handleEventClick }) => {
  const classes = useStyles();

  return (
    <div>
      <Title tooltipText="Events list for the current month">
        Next In Line
      </Title>
      <List aria-label="next-in-line-list">
        {events.map((event, index) => {
          return (
            <ListItem
              key={index}
              button
              onClick={() => handleEventClick(index)}
            >
              <ListItemAvatar>
                <Avatar className={classes.eventDate}>{event.startDate.getDate()}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={event.name}
                secondary={
                  <React.Fragment>
                    <Typography component="span">{event.subHeading}</Typography>

                    <Typography component="span">
                      {"                       "}
                      {event.startDate.toLocaleTimeString()} (IST)
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default NextInLine;
