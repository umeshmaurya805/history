import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import useStyles from "./style";
import StudentMessageDialog from "../../../dialog/StudentMessageDialog";
import ConfirmationDialog from "../../../dialog/ConfirmationDialog";

const EventDetails = ({ events }) => {
  const classes = useStyles();

  const { name, subHeading, image, startDate } = events[0];

  const list = [
    ["Date:", startDate.toLocaleDateString("in")],
    ["Time:", startDate.toLocaleTimeString("in")],
    ["Class:", "9 - 12"],
    ["Mode:", "Online"],
    ["Fee:", "Rs. 500"],
    ["Registration Deadline:", new Date(2021, 5, 14).toLocaleDateString("in")],
  ];

  const initialState = {
    studentMessage: false,
    schoolRegistration: false,
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
              <Grid key={index} item xs={12} sm={4} md={6} lg={4} xl={3}>
                <Box display="flex" flexWrap="wrap" className={classes.item}>
                  <Typography color="primary" className={classes.itemName}>
                    {item[0]}
                  </Typography>
                  <Typography>{item[1]}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <ReactMarkdown
          className={classes.reactMarkdown}
          children={`Decription of event here .Decription of event here
Decription of event here . Decription of event here. Decription of event here . Decription of event here. Decription of event here . Decription of event here Decription of event here . Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here 

Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here
Decription of event here .Decription of event here
Decription of event here . Decription of event here. Decription of event here . Decription of event here. Decription of event here . Decription of event here Decription of event here . Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here 

Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here
Decription of event here .Decription of event here
Decription of event here . Decription of event here. Decription of event here . Decription of event here. Decription of event here . Decription of event here Decription of event here . Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here 

Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here
Decription of event here .Decription of event here
Decription of event here . Decription of event here. Decription of event here . Decription of event here. Decription of event here . Decription of event here Decription of event here . Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here 

Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here
Decription of event here .Decription of event here
Decription of event here . Decription of event here. Decription of event here . Decription of event here. Decription of event here . Decription of event here Decription of event here . Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here 

Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here
Decription of event here .Decription of event here
Decription of event here . Decription of event here. Decription of event here . Decription of event here. Decription of event here . Decription of event here Decription of event here . Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here 

Decription of event here .Decription of event here Decription of event here .Decription of event here Decription of event here Decription of event here Decription of event here .Decription of event here Decription of event here .Decription of event here
`}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <Box display="flex" justifyContent="space-evenly">
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
            className={classes.registerButton}
            onClick={() => handleOpen("schoolRegistration")}
          >
            {isRegistered ? "Cancel Registration" : "Register"}
          </Button>
        </Box>
      </Grid>
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
