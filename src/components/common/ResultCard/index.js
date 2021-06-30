import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./style";

const ResultCard = ({ info }) => {
  const classes = useStyles();
  const { position, name, avatar, points, studentClass, schoolName } = info;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid container spacing={1} className={classes.container}>
        <Grid item>
        <Typography
              variant="h4"
              component="div"
              className={classes.points}
              color="primary"
            >
              {position}
            </Typography>
        </Grid>
          <Grid item className={classes.centerItem}>
            <Avatar src={avatar} className={classes.logo} />
          </Grid>
          <Grid item className={classes.centerItem}>
            <Typography
              variant="body2"
              component="div"
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
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
