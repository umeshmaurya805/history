import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2.5rem",
  },
  gridItem: {
    display: "flex",
    flexWrap: "wrap",
  },
  yearSelector: {
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  class: {
    minWidth: 47,
    border: "0.0625rem solid #E5E5E5",
  },
  user: {
    minWidth: 48,
    border: "0.0625rem solid #E5E5E5",
  },
  category: {
    minWidth: 125,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  pastDays: {
    minWidth: 80,
    border: "0.0625rem solid #E5E5E5",
    marginLeft: "0.5rem",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  academicYear: {
    minWidth: 60,
    marginLeft: "0.5rem",
    border: "0.0625rem solid #E5E5E5",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  customRangeContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    margin: "0.5rem",
    width: 90,
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
    borderRadius: "0.75rem",

    "&.MuiButton-outlined": {
      border: "0.0625rem solid #E5E5E5",
    },
  },
}));

export default useStyles;
