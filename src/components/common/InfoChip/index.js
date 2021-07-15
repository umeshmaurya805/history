import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "./style";

const InfoChip = ({ name, value, classes: customClasses = {}, ...props }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexGrow={1}
      className={`${classes.root} ${customClasses.root}`}
      {...props}
    >
      <Typography
        color="primary"
        className={`${classes.name} ${customClasses.name}`}
      >
        {name}
      </Typography>
      <Typography className={`${classes.value} ${customClasses.value}`}>
        {value}
      </Typography>
    </Box>
  );
};

export default InfoChip;
