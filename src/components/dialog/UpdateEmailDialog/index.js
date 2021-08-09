import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import protectedHandler from "../../../utils/protectedHandler";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email address")
    .email("Enter a valid email")
    .required("Email is required"),
  otp: yup.string("Enter the OTP sent to your new email address"),
});

const UpdateEmailDialog = ({ handleClose, ...props }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData, actions) => {
      console.log(formData);

      toast.success("Email Updated", {
        toastId: "UpdateEmailDialog",
      });

      actions.resetForm();
      handleClose();
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
          <TextField
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
        </form>
      </DialogContent>
      <DialogActions>
        <UpdateButtonGroup
          isLoading={false}
          handleOnSubmit={formik.handleSubmit}
          handleOnClose={handleOnClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateEmailDialog;
