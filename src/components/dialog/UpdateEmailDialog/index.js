import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import LockIcon from "@material-ui/icons/Lock";
import * as yup from "yup";
import { useFormik } from "formik";
import protectedHandler from "../../../utils/protectedHandler";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";
import LoadingIconButton from "../../button/LoadingIconButton";
import {
  useRequestEmailUpdateMutation,
  useUpdateEmailMutation,
} from "../../../app/api/auth";
import { notify } from "../../../utils";

const validationSchema = yup.object({
  email: yup
    .string("Enter your new email address")
    .email("Enter a valid email")
    .required("Email is required"),
  otp: yup.string("Enter the OTP sent to your new email address"),
});

const UpdateEmailDialog = ({ handleClose, ...props }) => {
  const [enableOTPField, setEnabledOTPField] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const [requestEmailUpdate, { isLoading: isOTPGenerating }] =
    useRequestEmailUpdateMutation();

  const [updateEmail, { isLoading: isEmailUpdating }] =
    useUpdateEmailMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async ({ email, otp }, actions) => {
      switch (activeButton) {
        case 0:
          await requestEmailUpdate({ newEmail: email }).unwrap();
          setEnabledOTPField(true);
          notify.success("EmailUpdation", "OTP sent to your email address");
          break;
        case 1:
          await updateEmail({ newEmail: email, otp }).unwrap();
          handleClose();
          actions.resetForm();
          notify.success("EmailUpdation", "Email Updated");
          break;
        default:
      }
    }),
  });

  const handleOnClose = () => {
    formik.resetForm();
    handleClose();
  };

  return (
    <Dialog onClose={handleOnClose} {...props}>
      <DialogTitle id="update-dialog-title" disableTypography>
        Update Email Address
      </DialogTitle>
      <DialogContent>
        <form>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12}>
              <TextField
                autoFocus
                fullWidth
                required
                variant="outlined"
                margin="normal"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                disabled={!enableOTPField}
                fullWidth
                required
                variant="outlined"
                margin="normal"
                id="otp"
                name="otp"
                label="OTP"
                value={formik.values.otp}
                onChange={formik.handleChange}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              />
            </Grid>
            <Grid container justifyContent="center" item xs={12} sm={5}>
              <LoadingIconButton
                variant="contained"
                color="primary"
                icon={<LockIcon />}
                onClick={(e) => {
                  setActiveButton(0);
                  formik.handleSubmit(e);
                }}
                isLoading={isOTPGenerating}
              >
                Generate OTP
              </LoadingIconButton>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <UpdateButtonGroup
          isLoading={isEmailUpdating}
          handleOnSubmit={(e) => {
            setActiveButton(1);
            formik.handleSubmit(e);
          }}
          handleOnClose={handleOnClose}
          disabled={!enableOTPField}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateEmailDialog;
