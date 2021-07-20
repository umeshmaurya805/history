import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import format from "date-fns/format";
import { Chip } from "@material-ui/core";
import StudentMessageDialog from "../../../dialog/StudentMessageDialog";
import ConfirmationDialog from "../../../dialog/ConfirmationDialog";
import ViewParticipantsDialog from "../../../dialog/ViewParticipantsDialog";
import { getEvents } from "../../../../data";
import useStyles from "./style";
import { toast } from "react-toastify";

const EventDetails = () => {
  const classes = useStyles();
  const { slug } = useParams();

  const event = getEvents().find((event) => event.slug === slug);

  const {
    title,
    summary,
    image,
    startDate,
    description,
    mode,
    fee,
    isFree,
    forClass,
    registrationDeadline,
    isLimited,
  } = event;

  const list = [
    ["Registration Deadline", format(registrationDeadline, "PP")],
    ["Date", format(startDate, "PP")],
    ["Class", `${forClass.from} - ${forClass.to}`],
    ["Time", format(startDate, "p")],
    ["Mode", mode],
    ["Fee", isFree ? "Free" : `Rs. ${fee}`],
  ];

  const initialState = {
    studentMessage: false,
    schoolRegistration: false,
    viewParticipants: false,
  };

  const [open, setOpen] = useState(initialState);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleOpen = (eventType) => {
    setOpen({ ...initialState, [eventType]: true });
  };

  const handleClose = () => {
    setOpen(initialState);
  };

  const handleRegistration = () => {
    handleClose();
    setIsRegistered(!isRegistered);
  };

  return (
    <Grid container alignContent="space-between" className={classes.root}>
      <Grid item xs={12} sm={6} md={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <div className={classes.imageContainer}>
            <img src={image} alt="" className={classes.image} />
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
          {list.map((item, index) => {
            return (
              <Grid key={index} item className={classes.item}>
                <Chip
                  variant={index === 0 ? "default" : "outlined"}
                  color="primary"
                  label={`${item[0]}: ${item[1]}`}
                />
              </Grid>
            );
          })}
          <Grid item className={classes.item}>
            <Chip
             className={classes.instructorButton}
              label="View Instructors"
              clickable
              onClick={() =>
                toast.success("Instructor Details shown", {
                  toastId: "instructorDetails",
                })
              }
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
          {isRegistered && isLimited && (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleOpen("viewParticipants")}
            >
              Add Team / Participants
            </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            className={classes.messageButton}
            onClick={() => handleOpen("studentMessage")}
          >
            Student Message
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleOpen("schoolRegistration")}
          >
            {console.log(isRegistered, event.title)}
            {isRegistered ? "Cancel Registration" : "Register"}
          </Button>
        </Box>
      </Grid>
      <ViewParticipantsDialog
        open={open.viewParticipants}
        onClose={handleClose}
      />
      <StudentMessageDialog open={open.studentMessage} onClose={handleClose} />
      <ConfirmationDialog
        open={open.schoolRegistration}
        handleOk={handleRegistration}
        handleCancel={handleClose}
        title={isRegistered ? "Cancel Registration" : "School Registration"}
        content={
          isRegistered ? (
            "Are you sure you want to cancel your registration?"
          ) : (
            <React.Fragment>
              Would you like to register for <span>{title}</span>?
            </React.Fragment>
          )
        }
      />
    </Grid>
  );
};

export default EventDetails;
