import React from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../../common/Layout";
import TabLayout from "../../common/TabLayout";
import ParticipantPanel from "./ParticipantPanel";
import WinnerPanel from "./WinnerPanel";
import CompetitivePanel from "./CompetitivePanel";
import NonCompetitivePanel from "./NonCompetitivePanel";
import EventStats from "../../common/EventStats";
import useStyles from "./style";

const Analytics = () => {
  const classes = useStyles();
  const labelTop = ["Participation", "Competition Winners"];
  const panelTop = [ParticipantPanel, WinnerPanel];

  const labelBottom = ["Competitive Events", "Non - Competitive Events"];
  const panelBottom = [CompetitivePanel, NonCompetitivePanel];

  
  const data = [
    {
      name: "Points",
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
    // {
    //   name: "Teachers",
    //   value: 250,
    // },
  ];

  return (
    <Layout>
      <Typography color="primary" className={classes.title}>
        School Performance
      </Typography>
      <EventStats className={classes.stats} data={data} />

      <TabLayout labels={labelTop} panels={panelTop} />
      <TabLayout
        className={classes.competitiveLayout}
        labels={labelBottom}
        panels={panelBottom}
      />
    </Layout>
  );
};

export default Analytics;
