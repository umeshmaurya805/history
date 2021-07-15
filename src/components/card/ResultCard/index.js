import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import firstMedal from "../../../assets/svg/first.svg";
import secondMedal from "../../../assets/svg/second.svg";
import thirdMedal from "../../../assets/svg/third.svg";
import useStyles from "./style";

const ResultCard = ({ info }) => {
  const classes = useStyles();
  const { position, name, avatar, points, studentClass, schoolName } = info;
  const medals = [firstMedal, secondMedal, thirdMedal];

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid
          alignItems="center"
          container
          spacing={1}
          className={classes.container}
        >
          <Grid item>
            <Avatar src={avatar} className={classes.logo} />
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              component="h6"
              className={classes.name}
              color="primary"
            >
              {name}
            </Typography>
            {points && (
              <Typography
                variant="body2"
                component="div"
                className={classes.pointsScored}
                color="primary"
              >
                Points Gained - {points}
              </Typography>
            )}
            <Typography className={classes.extraInfo} color="primary">
              Class - {studentClass}
            </Typography>
            <Typography className={classes.extraInfo} color="primary">
              {schoolName}
            </Typography>
          </Grid>
          <Grid item className={classes.position}>
            <img src={medals[position-1]} alt="" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
