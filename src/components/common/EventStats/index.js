import React from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import StatsCard from "../../card/StatsCard";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./style";

const EventStats = ({ data, isLoading, ...props }) => {
  const classes = useStyles();
  const enableFixedWidth = useMediaQuery("@media (min-width: 1000px)");

  return (
    <Grid container spacing={3} className={classes.root} {...props}>
      {data.map(({ name, value, tooltipText }, index) => {
        return (
          <Grid
            key={index}
            item
            className={classes.cardContainer}
            style={enableFixedWidth ? { width: `${100 / data.length}%` } : {}}
          >
            {isLoading ? (
              <Skeleton
                className={classes.skeleton}
                animation="wave"
                height="11rem"
              />
            ) : (
              <StatsCard name={name} value={value} tooltipText={tooltipText} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventStats;
