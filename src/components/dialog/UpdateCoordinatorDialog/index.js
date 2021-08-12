import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";
import PhoneInput from "react-phone-input-2";
import EmailUpdate from "./EmailUpdate";
import protectedHandler from "../../../utils/protectedHandler";
import {
  useGetMainCoordinatorQuery,
  useUpdateMainCoordinatorMutation,
} from "../../../app/api/coordinator";
import useStyles from "./style";
import { notify } from "../../../utils";

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
});

const UpdateCoordinatorDialog = ({ handleClose, ...props }) => {
  const classes = useStyles();

  const { data } = useGetMainCoordinatorQuery();

  const [updateMainCoordinator, { isLoading: isEmailUpdating }] =
    useUpdateMainCoordinatorMutation();

  const coordinator = {
    firstName: data?.coordinator?.firstName,
    lastName: data?.coordinator?.lastName,
    designation: data?.coordinator?.designation,
    phone: data?.coordinator?.phone,
  };

  const formik = useFormik({
    initialValues: coordinator,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: protectedHandler(async (formData, actions) => {
      if (
        formData.firstName === coordinator.firstName &&
        formData.lastName === coordinator.lastName &&
        formData.designation === coordinator.designation &&
        formData.phone === coordinator.phone
      ) {
        return handleClose();
      }

      if (formData.phone.length < 10) {
        return notify.error("PhoneNumber", "Phone number isn't valid");
      }

      await updateMainCoordinator(formData).unwrap();

      notify.success("UpdateCoordinatorDialog", "Coordinator Updated");

      actions.resetForm();
      handleClose();
    }),
  });

  const handleOnClose = () => {
    formik.resetForm();
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} {...props}>
      <DialogTitle id="update-dialog-title" disableTypography>
        Update Coordinator Details
      </DialogTitle>
      <DialogContent>
        <EmailUpdate />
        <form>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
                  formik.touched.designation &&
                  Boolean(formik.errors.designation)
                }
                helperText={
                  formik.touched.designation && formik.errors.designation
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PhoneInput
                inputClass={classes.phoneInput}
                country={"in"}
                value={formik.values.phone}
                onChange={(phone) => formik.setFieldValue("phone", phone)}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <UpdateButtonGroup
          isLoading={isEmailUpdating}
          handleOnSubmit={() => formik.handleSubmit()}
          handleOnClose={handleOnClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCoordinatorDialog;
