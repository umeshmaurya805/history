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
  contactNumber: yup
    .string("Enter school contact number")
    .required("Contact number is required"),
});

const UpdateContactNumberDialog = ({ value, handleClose, ...props }) => {
  const formik = useFormik({
    initialValues: {
      contactNumber: value,
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData, actions) => {
      console.log(formData);

      if (formData.contactNumber === value) {
        return handleClose();
      }

      toast.success("School Contact Number Updated", {
        toastId: "UpdateContactNumberDialog",
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
        Update Contact Number
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            fullWidth
            required
            autoFocus
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

export default UpdateContactNumberDialog;
