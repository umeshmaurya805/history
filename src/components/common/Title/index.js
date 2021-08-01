import React from "react";
import Typography from "@material-ui/core/Typography";
import InfoButton from "../../button/InfoButton";
import useStyles from "./style";

const Title = ({ tooltipText, size = "medium", children }) => {
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      style={{ width: size === "large" && "16rem" }}
    >
      {children}
      {tooltipText && <InfoButton position="right-end" text={tooltipText} />}
    </Typography>
  );
};

export default Title;
