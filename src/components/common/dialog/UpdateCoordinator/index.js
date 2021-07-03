import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import protectedHandler from "../../../../utils/protectedHandler";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";

const validationSchema = yup.object({
  name: yup
    .string("Enter coordinator name")
    .required("Coordinator name is required"),
  designation: yup
    .string("Enter coordinator designation")
    .required("Designation is required"),
  contactNumber: yup
    .string("Enter coordinator contact number")
    .required("Contact number is required"),
  email: yup
    .string("Enter coordinator email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const UpdateCoordinator = ({ values, handleClose, ...props }) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData, actions) => {
      console.log(formData);

      if (
        formData.name === values.name &&
        formData.designation === values.designation &&
        formData.contactNumber === values.contactNumber &&
        formData.email === values.email
      ) {
        return handleClose();
      }

      toast.success("Coordinator Updated", {
        toastId: "UpdateCoordinator",
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
          <TextField
            fullWidth
            required
            autoFocus
            variant="outlined"
            margin="normal"
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
            id="contactNumber"
            name="contactNumber"
            label="Contact Number"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.contactNumber &&
              Boolean(formik.errors.contactNumber)
            }
            helperText={
              formik.touched.contactNumber && formik.errors.contactNumber
            }
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
          isLoading={false}
          handleOnSubmit={formik.handleSubmit}
          handleOnClose={handleOnClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCoordinator;
