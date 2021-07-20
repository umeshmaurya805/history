import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Chip from "@material-ui/core/Chip";
import format from "date-fns/format";
import useStyles from "./style";

const ViewInstructorDialog = ({ date, data, handleClose, ...props }) => {
  const classes = useStyles();
  return (
    <Dialog onClose={handleClose} {...props}>
      <DialogTitle
        disableTypography
        className={classes.dialogTitle}
      >
        <Box display="flex" justifyContent="flex-end">
          <Typography className={classes.title}>
            Instructor Details
          </Typography>
          <IconButton
            edge="start"
            size="small"
            onClick={handleClose}
            aria-label="close"
          >
            <CancelIcon color="error" />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <List aria-label="upcoming-event-list">
          {data.map((event, index) => {
            return (
              <ListItem
                key={index}
                button
                onClick={() => handleClose(event.slug)}
                className={classes.listItem}
              >
                <Box>
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
            );
          })}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default ViewInstructorDialog;
