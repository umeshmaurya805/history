import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import useStyles from "./style";

const EventDetails = ({ event }) => {
  const classes = useStyles();

  const { name, subHeading, image } = event;

  const list = [
    ["Date:", event.startDate.toLocaleDateString("in")],
    ["Time:", event.startDate.toLocaleTimeString("in")],
    ["Class:", "9 - 12"],
    ["Mode:", "Online"],
    ["Fee:", "Rs. 500"],
    ["Registration Deadline:", new Date(2021, 5, 14).toLocaleDateString("in")],
  ];

  return (
    <Grid container alignContent="space-between" className={classes.root}>
      <Grid item xs={12} sm={6} md={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={image} alt="" className={classes.image} />
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
          >
            Student Message
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.registerButton}
          >
            Cancel Registration
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EventDetails;
