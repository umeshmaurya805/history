import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import LoadingButton from "../../../button/LoadingButton";
import protectedHandler from "../../../../utils/protectedHandler";
import useStyles from "./style";
import ChoiceSelectButton from "./../../../button/ChoiceSelectButton/index";

const SupportPanel = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [customTitle, setCustomTitle] = useState("");

  const queryTitles = ["Technical", "Logical", "Serious", "Others"];
  // const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      title: queryTitles[0],
      message: "",
    },
    onSubmit: protectedHandler(async (formData) => {
      // await login(formData).unwrap();
      console.log(formData);
      toast.success("Message sent successfully", { toastId: "SupportMessage" });
    }),
  });

  const handleTitleSelectorChange = (index) => {
    const title =
      index !== queryTitles.length - 1 ? queryTitles[index] : customTitle;

    setSelectedIndex(index);
    formik.setFieldValue("title", title);
  };

  const handleTitleFieldChange = (e) => {
    setCustomTitle(e.target.value);
    formik.handleChange(e);
  };

  return (
    <React.Fragment>
      <Typography color="primary" className={classes.supportLabel}>
        For any queries write to us
      </Typography>
      <ChoiceSelectButton
        values={queryTitles}
        selectedIndex={selectedIndex}
        onClick={handleTitleSelectorChange}
        classes={{ button: classes.titleButton }}
      />
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          required
          id="title"
          name="title"
          label="Title"
          type="text"
          variant="outlined"
          margin="normal"
          disabled={selectedIndex !== queryTitles.length - 1}
          value={formik.values.title}
          onChange={(e) => handleTitleFieldChange(e)}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          required
          autoFocus
          multiline
          rows={7}
          variant="outlined"
          margin="normal"
          id="message"
          name="message"
          label="Message"
          placeholder="Type your message here"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          // isLoading={isLoading}
        >
          Send
        </LoadingButton>
      </form>
    </React.Fragment>
  );
};

export default SupportPanel;
