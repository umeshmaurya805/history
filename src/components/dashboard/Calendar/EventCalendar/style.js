import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      alignItems: "center",
    },
  },
  config: {
    width: "100%",
    marginLeft: "0.125rem",
    marginBottom: "0.5rem",
    justifyContent: "space-between",
    "& > div": {
      flexGrow: 1,
      margin: "0rem 0.5rem 0.5rem",
    },
  },
  calendar: {
    width: "100%",
    color: "green !important",
    marginBottom: "2.25rem",
    [theme.breakpoints.only("sm")]: {
      marginBottom: "unset",
    },
    border: "0.0625rem solid #E5E5E5",
    boxShadow: "0rem 0.3125rem 2.5rem -0.625rem rgba(0,0,0,0.14)",

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
      fontSize: 11,
    },
    "@media (min-width: 960px) and (max-width: 1050px)": {
      fontSize: 10,
    },
    "@media (min-width: 750px) and (max-width: 960px)": {
      fontSize: 11,
    },
    "@media (min-width: 450px) and (max-width: 600px)": {
      fontSize: 13,
      width: "80%",
    },

    "& .Calendar__section": {
      padding: "0 4em",
    },

    "& .Calendar__weekDays": {
      padding: "0 3.4em",
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
  today: {
    border:'2px solid #383838',
    "&::after": {
      visibility: "hidden",
    },
  },
  selectedEvent: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  selectedEventPast: {
    backgroundColor: "#918C8C !important",
  },
  pastEvent: {
    backgroundColor: "#C4C4C4 !important",
  },
}));

export default useStyles;
