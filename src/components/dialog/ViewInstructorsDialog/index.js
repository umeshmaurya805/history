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
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import useStyles from "./style";

const ViewInstructorsDialog = ({ title, data, onClose, ...props }) => {
  const classes = useStyles();
  return (
    <Dialog onClose={onClose} {...props}>
      <DialogTitle disableTypography className={classes.dialogTitle}>
        <Box display="flex" justifyContent="flex-end">
          <Typography className={classes.title}>{title}s</Typography>
          <IconButton
            edge="start"
            size="small"
            onClick={onClose}
            aria-label="close"
          >
            <CancelIcon color="error" />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <List aria-label="instructors-list">
          {data.map((instructor, index) => {
            return (
              <ListItem key={index} className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar src={instructor.avatar} className={classes.avatar} />
                </ListItemAvatar>
                <Box className={classes.eventBox}>
                  <Typography component="p" className={classes.eventName}>
                    {instructor.name}
                  </Typography>
                  <Typography component="p" className={classes.eventSubHeading}>
                    {instructor.about}
                  </Typography>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default ViewInstructorsDialog;
