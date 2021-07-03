import React from "react";
import Grid from "@material-ui/core/Grid";
import StatsCard from "../card/StatsCard";

const EventStats = () => {
  const data = [
    {
      name: "Schools Partnered",
      value: 56,
    },
    {
      name: "Events Conducted",
      value: 56,
    },
    { name: "Total Participation", value: 4567 },
  ];

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
