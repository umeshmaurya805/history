import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useGetProfileQuery } from "../../../../app/api/school";
import useStyles from "./style";

const WelcomeBanner = () => {
  const classes = useStyles();
  const { data = {} } = useGetProfileQuery();

  return (
    <Grid container alignItems="center" spacing={4}>
      <Grid item>
        <Avatar src={data.logo} className={classes.logo}>
          {""}
        </Avatar>
      </Grid>
      <Grid item>
        <Box>
          <Typography color="primary" className={classes.heading}>
            Welcome,
          </Typography>
          <Typography color="primary" className={classes.heading}>
            {data.name}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WelcomeBanner;
