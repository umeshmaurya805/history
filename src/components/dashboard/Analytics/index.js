import React from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../../common/Layout";
import TabLayout from "../../common/TabLayout";
import ParticipantPanel from "./ParticipantPanel";
import WinnerPanel from "./WinnerPanel";
import CompetitivePanel from "./CompetitivePanel";
import NonCompetitivePanel from "./NonCompetitivePanel";
import useStyles from "./style";

const Analytics = () => {
  const classes = useStyles();
  const labelTop = ["Participants", "Winners"];
  const panelTop = [ParticipantPanel, WinnerPanel];

  const labelBottom = ["Competitive", "Non - Competitive"];
  const panelBottom = [CompetitivePanel, NonCompetitivePanel];
  return (
    <Layout>
      <Typography color="primary" className={classes.title}>
        School Performance
      </Typography>
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
