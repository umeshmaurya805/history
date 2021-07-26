import React from "react";
import Grid from "@material-ui/core/Grid";
import StatsCard from "../../card/StatsCard";
import useStyles from "./style";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const EventStats = ({ data, ...props }) => {
  const classes = useStyles();
  const enableFixedWidth = useMediaQuery("@media (min-width: 1000px)");

  return (
    <Grid container spacing={3} className={classes.root} {...props}>
      {data.map(({ name, value }, index) => {
        return (
          <Grid
            key={index}
            item
            className={classes.cardContainer}
            style={enableFixedWidth ? { width: `${100 / data.length}%` } : {}}
          >
            <StatsCard name={name} value={value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventStats;
