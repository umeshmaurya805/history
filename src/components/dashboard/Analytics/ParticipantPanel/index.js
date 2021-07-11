import React from "react";
import EventStats from "../../../common/EventStats";
import useStyles from "./style";

const ParticipantPanel = () => {
  const classes = useStyles();
  const data = [
    {
      name: "Schools Points",
      value: 150,
    },
    {
      name: "Competitive Events",
      value: 15,
    },
    { name: "Non Competitive Events", value: 56 },
    {
      name: "Students",
      value: 2000,
    },
    {
      name: "Teachers",
      value: 250,
    },
  ];

  return (
    <div className={classes.root}>
      <EventStats data={data} />
    </div>
  );
};

export default ParticipantPanel;
