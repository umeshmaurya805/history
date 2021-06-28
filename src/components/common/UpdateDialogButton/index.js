import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import useStyles from "./style";

const UpdateDialogButton = ({ handleOnClose, handleOnSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
      disableFocusRipple
        className={classes.cancelButton}
        onClick={handleOnClose}
        color="primary"
      >
        Cancel
      </Button>
      <Button
        type="submit"
        onClick={handleOnSubmit}
        className={classes.saveButton}
        startIcon={<SaveIcon />}
        color="primary"
        variant="contained"
      >
        Save
      </Button>
    </div>
  );
};

export default UpdateDialogButton;
