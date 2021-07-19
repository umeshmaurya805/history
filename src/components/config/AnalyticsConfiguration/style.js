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
    minWidth: '3.125rem',
  },
  user: {
    minWidth: '3.125rem',
  },
  category: {
    minWidth: '8.125rem',
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  pastDays: {
    minWidth: '5.625rem',
    marginLeft: "0.5rem",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  datePicker: {
    display: "flex",
    alignItems: "center",
  },
  datePickerInput: {
    cursor: "pointer",
    border: "0.0625rem solid #E5E5E5",
    textAlign: "center",
    borderRadius: "0.75rem",
    padding: "1.05rem 1.5rem",
    fontSize: "0.75rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
    color: theme.palette.primary.main,
    outline: "none",
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
    width: "5.625rem",
    padding: "0.35rem 0.5rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
    borderRadius: "0.75rem",

    "&.MuiButton-outlined": {
      border: "0.0625rem solid #E5E5E5",
    },
  },
}));

export default useStyles;
