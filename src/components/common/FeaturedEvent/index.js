import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Ad from "../Ad";
import useStyles from "./style";

const FeaturedEvent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.title}>Featured Event</Typography>

      <Grid container alignItems="center" spacing={4}>
        <Grid item>

        </Grid>
        <Grid item>
          <Ad/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FeaturedEvent;
