import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import LoadingIconButton from "../LoadingIconButton";
import useStyles from "./style";

const UpdateDialogButton = ({ isLoading, handleOnClose, handleOnSubmit }) => {
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
      <LoadingIconButton
        type="submit"
        onClick={handleOnSubmit}
        className={classes.saveButton}
        icon={<SaveIcon/>}
        color="primary"
        variant="contained"
        isLoading={isLoading}
      >
        Save
      </LoadingIconButton>
    </div>
  );
};

export default UpdateDialogButton;
