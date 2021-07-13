import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
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
    border: "1px solid #E5E5E5",
  },
  user: {
    minWidth: 48,
    border: "1px solid #E5E5E5",
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
    border: "1px solid #E5E5E5",
    marginLeft: theme.spacing(1),  [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  academicYear: {
    minWidth: 60,
    marginLeft: theme.spacing(1),
    border: "1px solid #E5E5E5",  [theme.breakpoints.only("xs")]: {
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
    margin: theme.spacing(1),
    width: 90,
    boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
    borderRadius: 12,

    "&.MuiButton-outlined": {
      border: "1px solid #E5E5E5",
    },
  },
}));

export default useStyles;
