import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import firstMedal from "../../../assets/svg/first.svg";
import secondMedal from "../../../assets/svg/second.svg";
import thirdMedal from "../../../assets/svg/third.svg";
import useStyles from "./style";

const TeamMember = ({ data }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar src={data.avatar} className={classes.avatar} />
      </ListItemAvatar>
      <Box className={classes.studentBox}>
        <Typography component="p" className={classes.name}>
          {data.firstName} {data.lastName}
        </Typography>
        <Typography component="p" className={classes.class}>
          Class: {data.studentClass} {data.section}
        </Typography>
      </Box>
    </ListItem>
  );
};

const TeamResultCard = ({ info }) => {
  const classes = useStyles();
  const { position, team, schoolName, address, members } = info;
  const medals = { first: firstMedal, second: secondMedal, third: thirdMedal };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid
          container
          justifyContent="center"
          spacing={1}
          className={classes.container}
        >
          <Grid item className={classes.teamGrid}>
            <Typography
              variant="body2"
              component="h6"
              className={classes.team}
              color="primary"
            >
              {team}
            </Typography>
            <Typography className={classes.extraInfo} color="primary">
              {schoolName}
            </Typography>
            <Typography className={classes.extraInfo} color="primary">
              {address}
            </Typography>
            <Grid item className={classes.position}>
              <img src={medals[position]} alt="" />
            </Grid>
            <Grid item>
              <List>
                {members.map((member, index) => {
                  return <TeamMember key={index} data={member} />;
                })}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TeamResultCard;
