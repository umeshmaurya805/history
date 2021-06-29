import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./style";

const ResultCard = ({ info }) => {
  const classes = useStyles();
  const { name, avatar, studentClass, schoolName } = info;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid container spacing={2} >
          <Grid item>
            <Avatar src={avatar} className={classes.logo} />
          </Grid>
          <Grid item>
            <Typography
              variant="body"
              component="div"
              className={classes.name}
              color="primary"
            >
              {name}
            </Typography>
            <Typography
              className={classes.extraInfo}
              color="primary"
            >
              Class - {studentClass}
            </Typography>
            <Typography
              className={classes.extraInfo}
              color="primary"
            >
              {schoolName}
            </Typography>
          </Grid>
        </Grid>
        {/* 
        
        <Typography variant="body" className={classes.name}>
          {name}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
