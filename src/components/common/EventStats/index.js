import React from "react";
import Grid from "@material-ui/core/Grid";
import StatsCard from "../../card/StatsCard";

const EventStats = ({data}) => {
  return (
    <Grid container spacing={3}>
      {data.map(({ name, value }, index) => {
        return (
          <Grid key={index} item style={{ flexGrow: 1 }}>
            <StatsCard name={name} value={value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventStats;
