import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  config: {
    marginLeft:2,
    marginBottom: theme.spacing(1),
    justifyContent: "space-between",
    "@media (max-width: 1050px)": {
      maxWidth: 330,
    },
    "& > div": {
      flexGrow: 1,
      margin: theme.spacing(0, 1, 1),
    },
  },
  calendar: {
    color: "green !important",
    marginBottom: theme.spacing(4.5),
    "@media (min-width: 1050px)": {
      fontSize: 13,
    },
    "& .Calendar__yearText, & .Calendar__yearSelectorText, & .Calendar__monthText, & .Calendar__monthSelectorItemText":
      {
        color: "#333333",
      },
    "& .Calendar__day": {
      cursor: "unset",
    },
    "& .Calendar__day.-selected": {
      cursor: "pointer",
      "&:hover": {
        filter: "brightness(0.9)",
      },
      "&:active": {
        transform: "scale(0.95)",
      },
    },
  },
  pastEvent: {
    backgroundColor: "#C4C4C4 !important",
  },
}));

export default useStyles;
