import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const EventList = ({ date, data, handleClose, ...props }) => {
  return (
    <Dialog onClose={handleClose} {...props}>
      <DialogTitle id="event-list-dialog-title" disableTypography>
        Events on {date.toLocaleDateString("in")}
      </DialogTitle>
      <DialogContent>
        <List aria-label="upcoming-event-list">
          {data.map((event, index) => {
            return (
              <ListItem key={index} button onClick={() => handleClose(index)}>
                <ListItemIcon>
                  <div
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "blue",
                      color: "white",
                      height: 50,
                      width: 50,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 18,
                      marginRight: "40px",
                    }}
                  >
                    {event.startDate.getDate()}
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary={event.name}
                  secondary={
                    <React.Fragment>
                      <Typography component="span">{event.subHeading}</Typography>
                      <Typography component="span">7:00 PM (IST)</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default EventList;
