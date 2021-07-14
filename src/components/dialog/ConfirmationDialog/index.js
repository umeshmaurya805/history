import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

const ConfirmationDialog = ({
  title,
  content,
  handleOk,
  handleCancel,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Dialog onClose={handleCancel} {...props}>
      <DialogTitle
        id="confirmation-dialog-title"
        disableTypography
      >
        <Typography className={classes.title}> {title} </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography className={classes.content}>{content}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleCancel}
        >
          No
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleOk}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
