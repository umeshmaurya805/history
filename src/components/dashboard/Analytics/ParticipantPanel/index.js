import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import EventStats from "../../../common/EventStats";
import useStyles from "./style";
import AnalyticsConfiguration from "../../../common/AnalyticsConfiguration";

const ParticipantPanel = () => {
  const classes = useStyles();
  const [option, setOption] = useState({
    class: 0,
    user: 0,
    category: 0,
    academicYear: 0,
    pastDays: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOption({ ...option, [name]: value });
  };
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

  const dateConfig = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const chartData = {
    labels: [
      new Date(2021, 6, 23).toLocaleDateString("in", dateConfig),
      new Date(2021, 6, 24).toLocaleDateString("in", dateConfig),
      new Date(2021, 6, 25).toLocaleDateString("in", dateConfig),
      new Date(2021, 6, 26).toLocaleDateString("in", dateConfig),
      new Date(2021, 6, 27).toLocaleDateString("in", dateConfig),
      new Date(2021, 6, 28).toLocaleDateString("in", dateConfig),
      new Date(2021, 6, 29).toLocaleDateString("in", dateConfig),
    ],
    datasets: [
      {
        label: "Competitive",
        data: [50, 90, 120, 136, 120, 120, 50],
        backgroundColor: "blue",
        borderColor: "blue",
      },
      {
        label: "Non-Competitive",
        data: [60, 100, 80, 100, 140, 60, 40],
        backgroundColor: "#F89503",
        borderColor: "#F89503",
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Event Day",
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "No. of Participants",
          padding: { top: 0, left: 0, right: 0, bottom: 20 },
        },
      },
    },
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        // position: "chartArea",
      },
    },
  };

  return (
    <div className={classes.root}>
      <EventStats
        className={classes.stats}
        itemStyle={classes.statsItem}
        data={data}
      />
      <AnalyticsConfiguration value={option} handleChange={handleChange} />
      <Line
        className={classes.chart}
        height={100}
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default ParticipantPanel;
