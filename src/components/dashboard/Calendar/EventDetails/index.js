import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import { Chip } from "@material-ui/core";
import { useSelector } from "react-redux";
import StudentMessageDialog from "../../../dialog/StudentMessageDialog";
import ConfirmationDialog from "../../../dialog/ConfirmationDialog";
import AddTeamAndParticipantsDialog from "../../../dialog/AddTeamAndParticipantsDialog";
import ViewInstructorsDialog from "../../../dialog/ViewInstructorsDialog";
import { useGetEventDetailsQuery } from "../../../../app/api/events";
import useStyles from "./style";
import { useRegisterSchoolMutation } from "../../../../app/api/schoolEvent";
import protectedHandler from "../../../../utils/protectedHandler";
import { isBefore } from "date-fns";

const EventDetails = () => {
  const classes = useStyles();
  const { selectedEventId } = useSelector((state) => state.event);

  const { data = {} } = useGetEventDetailsQuery(selectedEventId);
  const {
    title,
    summary,
    registrationDeadline,
    bannerLarge,
    description,
    studentMessage,
    infoList = [],
    isRegistered,
    eventFor,
    isTeamEvent,
    hasLimit,
    personDesignation = "Instructor",
    persons = [],
    media = {},
  } = data;

  const initialState = {
    studentMessage: false,
    schoolRegistration: false,
    viewParticipants: false,
    viewInstructors: false,
  };

  const [open, setOpen] = useState(initialState);
  const [registerSchool] = useRegisterSchoolMutation();
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    setDisableButton(isBefore(new Date(registrationDeadline), new Date()));
  }, [registrationDeadline]);

  let buttonText = "Add Students / Teams";

  if (eventFor === "Student") {
    if (hasLimit && !isTeamEvent) buttonText = "Add Students";
    else if (!hasLimit && isTeamEvent) buttonText = "Add Teams";
  } else {
    buttonText = "Add Teachers";
  }

  const handleOpen = (eventType) => {
    setOpen({ ...initialState, [eventType]: true });
  };

  const handleClose = () => {
    setOpen(initialState);
  };

  const handleRegistration = protectedHandler(async () => {
    await registerSchool({ eventId: selectedEventId }).unwrap();
    handleClose();
  });

  return (
    <Grid container alignContent="space-between" className={classes.root}>
      <Grid item xs={12} sm={6} md={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <div className={classes.imageContainer}>
            <img src={bannerLarge} alt="" className={classes.image} />
          </div>
          <Typography
            color="primary"
            variant="h4"
            className={classes.title}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="body2" className={classes.summary}>
            {summary}
          </Typography>
        </Box>
        <Grid container>
          {infoList.map((item, index) => {
            return (
              <Grid key={index} item className={classes.item}>
                <Chip
                  variant={index === 0 ? "default" : "outlined"}
                  color="primary"
                  label={`${item.name}: ${item.value}`}
                />
              </Grid>
            );
          })}
          <Grid item className={classes.item}>
            <Chip
              className={classes.instructorButton}
              label={`View ${personDesignation}s`}
              clickable
              onClick={() => handleOpen("viewInstructors")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <ReactMarkdown
          className={classes.reactMarkdown}
          children={description}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
          <Button
            variant="contained"
            color="secondary"
            className={classes.messageButton}
            disabled={disableButton}
            onClick={() => handleOpen("studentMessage")}
          >
            Student Message
          </Button>
          {isRegistered && (isTeamEvent || hasLimit || eventFor !== "Student") && (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={disableButton}
              onClick={() => handleOpen("viewParticipants")}
            >
              {buttonText}
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={disableButton}
            disableRipple={isRegistered}
            onClick={() => {
              if (!isRegistered) handleOpen("schoolRegistration");
            }}
          >
            {isRegistered ? "Registered" : "Register"}
          </Button>
        </Box>
      </Grid>
      <AddTeamAndParticipantsDialog
        open={open.viewParticipants}
        onClose={handleClose}
        hasTeam={isTeamEvent}
        isLimited={hasLimit}
        isEventForStudent={eventFor === "Student"}
      />
      <ViewInstructorsDialog
        open={open.viewInstructors}
        onClose={handleClose}
        title={personDesignation}
        data={persons}
      />
      <StudentMessageDialog
        open={open.studentMessage}
        onClose={handleClose}
        data={{
          title,
          studentMessage,
          poster: media.poster,
          pdf: media.aboutEventPDF,
        }}
      />
      {title && (
        <ConfirmationDialog
          open={open.schoolRegistration}
          handleOk={handleRegistration}
          handleCancel={handleClose}
          title="School Registration"
          content={
            <React.Fragment>
              Would you like to register for <span>{title}</span>?
            </React.Fragment>
          }
        />
      )}
    </Grid>
  );
};

export default EventDetails;
