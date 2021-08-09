import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Files from "react-files";
import protectedHandler from "../../../utils/protectedHandler";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";
import { useUploadLogoMutation } from "../../../app/api/school";
import { notify } from "../../../utils";
import useStyles from "./style";

const UpdateLogoDialog = ({ value, handleClose, ...props }) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);

  const [uploadLogo, { isLoading }] = useUploadLogoMutation();

  const handleOnClose = () => {
    setFile(null);
    handleClose();
  };
  const handleOnSubmit = protectedHandler(async () => {
    if (!file) {
      return handleClose();
    }

    const formData = new FormData();
    formData.append("logo", file);

    await uploadLogo(formData).unwrap();

    notify.success("SchoolLogo", "School logo updated", 3000);

    setFile(null);

    handleOnClose();
  });

  const onFilesChange = (files) => {
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
        <UpdateButtonGroup
          isLoading={isLoading}
          handleOnSubmit={handleOnSubmit}
          handleOnClose={handleOnClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateLogoDialog;
