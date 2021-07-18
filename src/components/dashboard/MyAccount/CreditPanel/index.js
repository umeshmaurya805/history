import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { format } from "date-fns";
import useStyles from "./style";
import { Button } from "@material-ui/core";
import { setSupportIndex } from "../../../../app/slices/supportSlice";
import { useDispatch } from "react-redux";

const CreditPanel = ({ setActivePanel }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const creditScore = 500;
  const scoreUpdatedAt = format(new Date(), "PP");

  const handleRedeemCredits = () => {
    dispatch(setSupportIndex(2));
    setActivePanel(2);
  };

  return (
    <React.Fragment>
      <Typography color="primary" className={classes.creditDetailsLabel}>
        Credit Details
      </Typography>
      <Box className={classes.creditBox}>
        <Typography className={classes.totalCreditsLabel}>
          Total Credit score
        </Typography>
        <Typography className={classes.creditScore}>{creditScore}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.scoreUpdatedAt}>
          Last Updated on - {scoreUpdatedAt}
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          className={classes.button}
          onClick={handleRedeemCredits}
        >
          Redeem Credits
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreditPanel;
