import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      alignItems: "center",
    },
  },
  config: {
    width: "100%",
    marginLeft: 2,
    marginBottom: theme.spacing(1),
    justifyContent: "space-between",
    "@media (max-width: 1050px)": {
      // maxWidth: 330,
    },
    "& > div": {
      flexGrow: 1,
      margin: theme.spacing(0, 1, 1),
    },
  },
  calendar: {
    width: "100%",
    color: "green !important",
    marginBottom: theme.spacing(4.5),
    border: "1px solid #E5E5E5",
    boxShadow: "0px 5px 40px -10px rgba(0,0,0,0.14)",

    "@media (min-width: 1600px)": {
      fontSize: 16,
    },
    "@media (min-width: 1400px) and (max-width: 1600px)": {
      fontSize: 14,
    },
    "@media (min-width: 1200px) and (max-width: 1400px)": {
      fontSize: 12,
    },
    "@media (min-width: 1050px) and (max-width: 1200px)": {
      fontSize: 10,
    },
    "@media (min-width: 960px) and (max-width: 1050px)": {
      fontSize: 8,
    },
    "@media (min-width: 600px) and (max-width: 960px)": {
      fontSize: 10,
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
