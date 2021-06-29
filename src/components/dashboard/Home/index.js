import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Layout from "../../common/Layout";
import FeaturedEvent from "../../common/FeaturedEvent";
import EventStats from "../../common/EventStats";
import EventResult from "../../common/EventResult";
import WelcomeBanner from "../../common/WelcomeBanner";
import Magazine from "../../common/Magazine";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container>
        <WelcomeBanner />
        <Grid container spacing={5} className={classes.resultStatsGrid}>
          <Grid item lg={9} md={7} sm={6} xs={12}>
            <EventStats />
            <EventResult />
          </Grid>
          <Grid item lg={3} md={5} sm={6} xs={12}>
            <Magazine />
          </Grid>
        </Grid>
        {/* <FeaturedEvent /> */}
      </Container>
    </Layout>
  );
};

export default Home;
