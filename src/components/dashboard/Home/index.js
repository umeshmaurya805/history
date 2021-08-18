import React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import FeaturedEvent from "./FeaturedEvent";
import EventStats from "../../common/EventStats";
import EventResult from "./EventResult";
import WelcomeBanner from "./WelcomeBanner";
import UpcomingEvent from "./UpcomingEvent";
import Magazine from "./Magazine";
import Podcast from "./Podcast";
import Ad from "./Ad";
import { useGetStatsQuery } from "../../../app/api/historyDiaries";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  const {
    data: stats = {
      schools: 0,
      competitiveEvents: 0,
      nonCompetitiveEvents: 0,
      students: 0,
      studentCompetitiveEvents: 0,
      studentNonCompetitiveEvents: 0,
    },
    isLoading,
  } = useGetStatsQuery();

  const data = [
    {
      name: "Schools",
      value: stats.schools,
    },
    {
      name: "Competitive Events",
      value: stats.competitiveEvents,
    },
    {
      name: "Non-Competitive Events",
      value: stats.nonCompetitiveEvents,
    },
    {
      name: "Student Participation",
      value: stats.students,
      tooltipText: (
        <div>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>Competitive Events:</Grid>
            <Grid item>{stats.studentCompetitiveEvents}</Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>Non-Competitive Events:</Grid>
            <Grid item>{stats.studentNonCompetitiveEvents}</Grid>
          </Grid>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <WelcomeBanner />
      <EventStats isLoading={isLoading} data={data} />
      <EventResult />
      <Grid container className={classes.container} spacing={2}>
        <Grid item lg={4}>
          <Magazine />
        </Grid>
        <Grid item lg={4}>
          <Podcast />
        </Grid>
        <Grid item lg={4}>
          <Ad />
        </Grid>
      </Grid>
      <FeaturedEvent />
      <UpcomingEvent />
    </Layout>
  );
};

export default Home;
