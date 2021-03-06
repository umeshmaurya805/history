import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import SendIcon from "@material-ui/icons/Send";
import LoadingIconButton from "../../../button/LoadingIconButton";
import protectedHandler from "../../../../utils/protectedHandler";
import useStyles from "./style";
import ChoiceSelectButton from "../../../button/ChoiceSelectButton";
import {
  setSupportIndex,
  setSupportTitle,
  setSupportMessage,
  resetSupport,
} from "../../../../app/slices/supportSlice";
import { notify } from "../../../../utils";
import { useGetProfileQuery } from "../../../../app/api/school";
import { useCreateTicketMutation } from "../../../../app/api/support";

const SupportPanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const supportTitles = [
    "Technical",
    "Event Related",
    "Credit Related",
    "Others",
  ];

  const { schoolId } = useGetProfileQuery(undefined, {
    selectFromResult: ({ data }) => ({ schoolId: data?._id }),
  });

  const [createTicket, { isLoading }] = useCreateTicketMutation();

  const { selectedSupportIndex, supportTitle, supportMessage } = useSelector(
    (state) => state.support
  );

  const formik = useFormik({
    initialValues: {
      title:
        selectedSupportIndex !== supportTitles.length - 1
          ? supportTitles[selectedSupportIndex]
          : supportTitle,
      message: supportMessage,
    },
    onSubmit: protectedHandler(async (formData) => {
      await createTicket({ schoolId, ...formData }).unwrap();
      handleSupportReset();
      notify.success("Ticket", "Ticket created successfully");
    }),
  });

  const handleTitleSelectorChange = (index) => {
    const title =
      index !== supportTitles.length - 1 ? supportTitles[index] : supportTitle;

    dispatch(setSupportIndex(index));
    formik.setFieldValue("title", title);
  };

  const handleTitleFieldChange = (e) => {
    dispatch(setSupportTitle(e.target.value));
    formik.handleChange(e);
  };

  const handleMessageFieldChange = (e) => {
    dispatch(setSupportMessage(e.target.value));
    formik.handleChange(e);
  };

  const handleSupportReset = () => {
    formik.setFieldValue("title", supportTitles[0]);
    formik.setFieldValue("message", "");
    dispatch(resetSupport());
  };

  return (
    <React.Fragment>
      <Typography color="primary" className={classes.supportLabel}>
        For any queries write to us
      </Typography>
      <ChoiceSelectButton
        values={supportTitles}
        selectedIndex={selectedSupportIndex}
        onClick={handleTitleSelectorChange}
        classes={{ root: classes.titleButtonRoot, button: classes.titleButton }}
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
          disabled={selectedSupportIndex !== supportTitles.length - 1}
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
          onChange={(e) => handleMessageFieldChange(e)}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <LoadingIconButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          isLoading={isLoading}
          icon={<SendIcon />}
          startIcon={false}
        >
          Send
        </LoadingIconButton>
        <Button
          color="primary"
          className={classes.button}
          onClick={handleSupportReset}
        >
          Clear
        </Button>
      </form>
    </React.Fragment>
  );
};

export default SupportPanel;
