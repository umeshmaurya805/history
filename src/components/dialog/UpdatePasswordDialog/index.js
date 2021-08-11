import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { notify } from "../../../utils";
import protectedHandler from "../../../utils/protectedHandler";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";
import { useUpdatePasswordMutation } from "../../../app/api/auth";

const validationSchema = yup.object({
  currentPassword: yup
    .string("Enter your current password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Current password is required"),
  newPassword: yup
    .string("Enter your new password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("New password is required"),
  confirmNewPassword: yup
    .string("Confirm your new password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Confirmation is required"),
});

const UpdatePasswordDialog = ({ handleClose, ...props }) => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData, actions) => {
      console.log(formData);

      if (formData.newPassword !== formData.confirmNewPassword) {
        notify.error("UpdatePasswordDialog", "Password does not match");
        return;
      }

      await updatePassword(formData).unwrap();

      notify.success("UpdatePasswordDialog", "Password Updated");

      handleClose();
      actions.resetForm();
    }),
  });

  const handleOnClose = () => {
    formik.resetForm();
    handleClose();
  };

  return (
    <Dialog onClose={handleOnClose} {...props}>
      <DialogTitle id="update-dialog-title" disableTypography>
        Update Password
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            fullWidth
            required
            autoFocus
            variant="outlined"
            margin="normal"
            id="currentPassword"
            name="currentPassword"
            label="Current Password"
            type="password"
            autoComplete="current-password"
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.currentPassword &&
              Boolean(formik.errors.currentPassword)
            }
            helperText={
              formik.touched.currentPassword && formik.errors.currentPassword
            }
          />
          <TextField
            fullWidth
            required
            variant="outlined"
            margin="normal"
            id="newPassword"
            name="newPassword"
            label="New Password"
            type="password"
            autoComplete="new-password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <TextField
            fullWidth
            required
            variant="outlined"
            margin="normal"
            id="confirmNewPassword"
            name="confirmNewPassword"
            label="Confirm New Password"
            type="password"
            autoComplete="new-password"
            value={formik.values.confirmNewPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmNewPassword &&
              Boolean(formik.errors.confirmNewPassword)
            }
            helperText={
              formik.touched.confirmNewPassword &&
              formik.errors.confirmNewPassword
            }
          />
        </form>
      </DialogContent>
      <DialogActions>
        <UpdateButtonGroup
          isLoading={isLoading}
          handleOnSubmit={formik.handleSubmit}
          handleOnClose={handleOnClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdatePasswordDialog;
