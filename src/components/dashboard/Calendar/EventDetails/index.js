import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import format from "date-fns/format";
import { Chip } from "@material-ui/core";
// import eventImage from "../../../../assets/svg/event-image.png";
import StudentMessageDialog from "../../../dialog/StudentMessageDialog";
import ConfirmationDialog from "../../../dialog/ConfirmationDialog";
import UpdateParticipantsDialog from "../../../dialog/UpdateParticipantsDialog";
import { getEvents } from "../../../../data";
import useStyles from "./style";

const EventDetails = () => {
  const classes = useStyles();
  const { slug } = useParams();

  // const events = [
  //   {
  //     name: "Event X  Online theatre show",
  //     startDate: new Date(2021, 6, 1, 15),
  //     endDate: new Date(2021, 6, 2, 18, 30),
  //     slug: "event-0",
  //     subHeading:
  //       "This is our test event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 1",
  //     startDate: new Date(2021, 6, 1, 10),
  //     endDate: new Date(2021, 6, 5, 18, 30),
  //     slug: "event-1",
  //     subHeading:
  //       "This is our first event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 2",
  //     startDate: new Date(2021, 6, 7, 12),
  //     endDate: new Date(2021, 6, 10, 18, 30),
  //     slug: "event-2",
  //     subHeading:
  //       "This is our second event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 3",
  //     startDate: new Date(2021, 6, 9, 8),
  //     endDate: new Date(2021, 6, 12, 14),
  //     slug: "event-3",
  //     subHeading:
  //       "This is our third event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 4",
  //     startDate: new Date(2021, 6, 12, 12),
  //     endDate: new Date(2021, 6, 18, 15),
  //     slug: "event-4",
  //     subHeading:
  //       "This is our fourth event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 5",
  //     startDate: new Date(2021, 6, 15, 10),
  //     endDate: new Date(2021, 6, 16, 18, 30),
  //     slug: "event-5",
  //     subHeading:
  //       "This is our fifth event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 6",
  //     startDate: new Date(2021, 6, 20, 10),
  //     endDate: new Date(2021, 6, 20, 14, 30),
  //     slug: "event-6",
  //     subHeading:
  //       "This is our sixth event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 7 - World of Theater",
  //     startDate: new Date(2021, 6, 28, 10),
  //     endDate: new Date(2021, 7, 4, 20),
  //     slug: "event-7",
  //     subHeading:
  //       "This is our seventh event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 8 - World of Theater",
  //     startDate: new Date(2021, 6, 28, 8),
  //     endDate: new Date(2021, 7, 7, 15),
  //     slug: "event-8",
  //     subHeading:
  //       "This is our eight event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  //   {
  //     name: "Event 9 - World of Theater",
  //     startDate: new Date(2021, 6, 28, 12),
  //     endDate: new Date(2021, 7, 1, 15),
  //     slug: "event-9",
  //     subHeading:
  //       "This is our ninth event Online theatre show for class 9-12  Online theatre show for class 9-12",
  //     image: eventImage,
  //     description: "Event details, rounds timings, etc.",
  //   },
  // ];

  const event = getEvents().find((event) => event.slug === slug);

  console.log("event", event);
  const {
    name,
    subHeading,
    image,
    startDate,
    description,
    mode,
    fee,
    forClass,
    registrationDeadline,
  } = event;
console.log(startDate)
  const list = [
    ["Registration Deadline", format(registrationDeadline, "PP")],
    ["Date", format(startDate, "PP")],
    ["Class", `${forClass.from} - ${forClass.to}`],
    ["Time", format(startDate, "p")],
    ["Mode", mode],
    ["Fee", `Rs. ${fee}`],
  ];

  const initialState = {
    studentMessage: false,
    schoolRegistration: false,
    updateParticipants: false,
  };

  const [open, setOpen] = useState(initialState);
  const [isRegistered, setIsRegistered] = useState(false);
  const isLimited = true;

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
            className={classes.name}
            gutterBottom
          >
            {name}
          </Typography>
          <Typography variant="body2" className={classes.subHeading}>
            {subHeading}
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
                {/* <Typography color="primary" className={classes.itemName}> */}
                {/* {item[0]} */}
                {/* </Typography> */}
                {/* <Typography>{item[1]}</Typography> */}
                {/* </Chip> */}
              </Grid>
            );
          })}
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
              onClick={() => handleOpen("updateParticipants")}
            >
              Update Participants
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
            {isRegistered ? "Cancel Registration" : "Register"}
          </Button>
        </Box>
      </Grid>
      <UpdateParticipantsDialog
        open={open.updateParticipants}
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
              Would you like to register for <span>{name}</span>?
            </React.Fragment>
          )
        }
      />
    </Grid>
  );
};

export default EventDetails;
