import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    padding: "1.5rem 0rem",
    borderTop: "0.0625rem solid #E5E5E5",
    borderBottom: "0.0625rem solid #E5E5E5",
  },
  resultContainer: {
    marginTop: "0.5rem",
  },
  selector: {
    justifyContent: "flex-end",
    display: "flex",
    flexWrap: "wrap-reverse",

    flexGrow:1,
  },
  selectTheme: {
    minWidth: "5rem",
    [theme.breakpoints.only("xs")]: {
      minWidth: "unset",
      width: "100%",
      flexGrow: 1,
    },
  },
  selectEvent: {
    minWidth: "12.5rem",
    [theme.breakpoints.only("xs")]: {
      minWidth: "unset",
      width: "100%",
      flexGrow: 1,
    },
  },
}));

export default useStyles;
