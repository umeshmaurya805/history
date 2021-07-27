import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import protectedHandler from "../../../utils/protectedHandler";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../app/api/school";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter coordinator first name")
    .required("Coordinator's first name is required"),
  lastName: yup
    .string("Enter coordinator last name")
    .required("Coordinator's last name is required"),
  designation: yup
    .string("Enter coordinator designation")
    .required("Designation is required"),
  phone: yup
    .string("Enter coordinator contact number")
    .required("Contact number is required"),
  email: yup
    .string("Enter coordinator email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const UpdateCoordinatorDialog = ({ handleClose, ...props }) => {
  const { coordinator } = useGetProfileQuery(undefined, {
    selectFromResult: ({ data }) => ({
      coordinator: data ? data.coordinator : {},
    }),
  });

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const formik = useFormik({
    initialValues: coordinator,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: protectedHandler(async (formData, actions) => {
      if (
        formData.firstName === coordinator.firstName &&
        formData.lastName === coordinator.lastName &&
        formData.designation === coordinator.designation &&
        formData.phone === coordinator.phone &&
        formData.email === coordinator.email
      ) {
        return handleClose();
      }

      await updateProfile({ coordinator: formData }).unwrap();

      toast.success("Coordinator Updated", {
        toastId: "UpdateCoordinatorDialog",
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
        Update Coordinator Details
      </DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                autoFocus
                variant="outlined"
                margin="normal"
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                autoFocus
                variant="outlined"
                margin="normal"
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            required
            variant="outlined"
            margin="normal"
            id="designation"
            name="designation"
            label="Designation"
            value={formik.values.designation}
            onChange={formik.handleChange}
            error={
              formik.touched.designation && Boolean(formik.errors.designation)
            }
            helperText={formik.touched.designation && formik.errors.designation}
          />
          <TextField
            fullWidth
            required
            variant="outlined"
            margin="normal"
            id="phone"
            name="phone"
            label="Contact Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
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
          isLoading={isLoading}
          handleOnSubmit={() => formik.handleSubmit()}
          handleOnClose={handleOnClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCoordinatorDialog;
