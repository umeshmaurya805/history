import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./style";

const StatsCard = ({ name, value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
          variant="h4"
          className={classes.value}
          color="primary"
          gutterBottom
        >
          {value}
        </Typography>
        <Typography variant="body2" className={classes.name}>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
