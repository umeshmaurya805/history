import React from "react";
import icon from "../../../assets/svg/analytics-icon.svg";
import selectedIcon from "../../../assets/svg/analytics-icon-selected.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "4px 0 3px 2px",
    borderLeft: "2px solid white",
    borderBottom: "2px solid white",
  },
  rootSelected: {
    padding: "4px 0 3px 2px",
    borderLeft: "2px solid #4A90E2",
    borderBottom: "2px solid #4A90E2",
  },
}));

const AnalyticsIcon = ({ isSelected }) => {
  const classes = useStyles();
  return isSelected ? (
    <img className={classes.rootSelected} src={selectedIcon} alt="" />
  ) : (
    <img className={classes.root} src={icon} alt="" />
  );
};

export default AnalyticsIcon;
