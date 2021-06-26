import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "./style";

const CreditPanel = () => {
  const classes = useStyles();
  const creditScore = 500;
  const scoreUpdatedAt = new Date().toLocaleDateString('en-GB');
  console.log(typeof scoreUpdatedAt, scoreUpdatedAt)

  return (
    <div>
      <Typography color="primary" className={classes.creditDetailsLabel}>
        Credit Details
      </Typography>
      <Box className={classes.creditBox}>
        <Typography className={classes.totalCreditsLabel}>
          Total Credit score
        </Typography>
        <Typography className={classes.creditScore}>{creditScore}</Typography>
      </Box>
      <Typography className={classes.scoreUpdatedAt}>
        Last Updated on - {scoreUpdatedAt}
      </Typography>
    </div>
  );
};

export default CreditPanel;
