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
  affiliationNumber: yup
    .string("Enter your affiliation number")
    .required("Affiliation number is required"),
});

const UpdateAffiliationNumber = ({ value, handleClose, ...props }) => {
  const formik = useFormik({
    initialValues: {
      affiliationNumber: value,
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData, actions) => {
      console.log(formData);

      if (formData.affiliationNumber === value) {
        return handleClose();
      }

      toast.success("Affiliation Number Updated", {
        toastId: "UpdateAffiliationNumber",
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
        Update Affiliation Number
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            fullWidth
            required
            autoFocus
            variant="outlined"
            margin="normal"
            id="affiliationNumber"
            name="affiliationNumber"
            label="Affiliation Number"
            value={formik.values.affiliationNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.affiliationNumber &&
              Boolean(formik.errors.affiliationNumber)
            }
            helperText={
              formik.touched.affiliationNumber &&
              formik.errors.affiliationNumber
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

export default UpdateAffiliationNumber;
