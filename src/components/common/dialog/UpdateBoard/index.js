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
  board: yup.string("Enter board").required("Board is required"),
});

const UpdateBoard = ({ value, handleClose, ...props }) => {
  const formik = useFormik({
    initialValues: {
      board: value,
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData, actions) => {
      console.log(formData);

      if (formData.board === value) {
        return handleClose();
      }

      toast.success("Board Updated", {
        toastId: "UpdateBoard",
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
        Update Board
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            fullWidth
            required
            autoFocus
            variant="outlined"
            margin="normal"
            id="board"
            name="board"
            label="Board"
            value={formik.values.board}
            onChange={formik.handleChange}
            error={formik.touched.board && Boolean(formik.errors.board)}
            helperText={formik.touched.board && formik.errors.board}
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

export default UpdateBoard;
