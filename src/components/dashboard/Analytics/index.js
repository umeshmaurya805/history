import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Layout from "../../common/Layout";
import TabLayout from "../../common/TabLayout";
import ParticipantPanel from "./ParticipantPanel";
import WinnerPanel from "./WinnerPanel";
import CompetitivePanel from "./CompetitivePanel";
import NonCompetitivePanel from "./NonCompetitivePanel";
import EventStats from "../../common/EventStats";
import { useGetSchoolStatsQuery } from "../../../app/api/school";
import useStyles from "./style";

const Analytics = () => {
  const classes = useStyles();
  const {
    data: schoolPerformance = {
      points: 0,
      studentCompetitiveEvent: 0,
      studentNonCompetitiveEvent: 0,
      studentParticipation: 0,
      teacherParticipation: 0,
      totalCompetitiveEvents: 0,
      totalEvents: 0,
      totalNonCompetitiveEvents: 0,
      totalParticipation: 0,
    },
  } = useGetSchoolStatsQuery();

  const labelTop = ["Participation", "Competition Winners"];
  const panelTop = [ParticipantPanel, WinnerPanel];

  const labelBottom = ["Competitive Events", "Non - Competitive Events"];
  const panelBottom = [CompetitivePanel, NonCompetitivePanel];

  const data = [
    {
      name: "Points",
      value: schoolPerformance.points,
    },
    {
      name: "Competitive Events",
      value: schoolPerformance.totalCompetitiveEvents,
    },
    {
      name: "Non-Competitive Events",
      value: schoolPerformance.totalNonCompetitiveEvents,
    },
    {
      name: "Students",
      value: schoolPerformance.studentParticipation,
      tooltipText: (
        <div>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>Competitive Events:</Grid>
            <Grid item>{schoolPerformance.studentCompetitiveEvent}</Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>Non-Competitive Events:</Grid>
            <Grid item>{schoolPerformance.studentNonCompetitiveEvent}</Grid>
          </Grid>
        </div>
      ),
    },
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
