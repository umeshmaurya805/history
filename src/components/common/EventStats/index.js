import React from "react";
import Grid from "@material-ui/core/Grid";
import StatsCard from "../../card/StatsCard";
import useStyles from "./style";

const EventStats = ({data, ...props}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root} {...props}>
      {data.map(({ name, value }, index) => {
        return (
          <Grid key={index} item className={classes.cardContainer}>
            <StatsCard name={name} value={value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventStats;
