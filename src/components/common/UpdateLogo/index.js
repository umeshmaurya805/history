import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";
import Files from "react-files";
import protectedHandler from "../../../utils/protectedHandler";
import UpdateDialogButton from "../UpdateDialogButton";
import useStyles from "./style";

const UpdateLogo = ({ value, handleClose, ...props }) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);

  const handleOnClose = () => {
    setFile(null);
    handleClose();
  };

  const handleOnSubmit = protectedHandler(async () => {
    if (!file) {
      return handleClose();
    }

    toast.success("School Logo Updated", {
      toastId: "UpdateLogo",
    });

    setFile(null);

    handleOnClose();
  });

  const onFilesChange = (files) => {
    console.log(files);
    setFile(files[0]);
  };

  const onFilesError = (error, file) => {
    setFile(null);

    console.log("error code " + error.code + ": " + error.message);
  };

  return (
    <Dialog onClose={handleOnClose} {...props}>
      <DialogTitle id="update-dialog-title" disableTypography>
        Update School Logo
      </DialogTitle>
      <DialogContent>
        <div>
          <Files
            className={classes.files}
            onChange={onFilesChange}
            onError={onFilesError}
            accepts={["image/png", "image/jpg", "image/jpeg"]}
            multiple={false}
            maxFiles={1}
            clickable
          >
            <Typography>Drop logo here or click to upload</Typography>
            {file && <Typography>Logo: {file.name}</Typography>}
          </Files>
        </div>
      </DialogContent>
      <DialogActions>
        <UpdateDialogButton
          isLoading={false}
          handleOnSubmit={handleOnSubmit}
          handleOnClose={handleOnClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateLogo;
