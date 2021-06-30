import React from "react";
import Grid from "@material-ui/core/Grid";
import eventImage from "../../../assets/svg/event-image.png";
import SingleEventCard from "../SingleEventCard";
// import useStyles from "./style";

const FeaturedEvent = () => {
  // const classes = useStyles();

  const eventData = [
    {
      title: "Trade To Territory",
      subHeading:
        "Embark on the journey of historical era of ( 16th - 19th century) thatwitnessed the transition of foreign piwers in India.",
      images: [eventImage,eventImage],
      forClass: "9 - 12",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
  ];

  return eventData.length === 1 ? (
    <SingleEventCard data={eventData[0]} />
  ) : (
    <React.Fragment>
      <Grid container alignItems="center" spacing={4}>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FeaturedEvent;
