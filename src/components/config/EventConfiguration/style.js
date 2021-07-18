import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "0.5rem",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "space-between",
      "& > div": {
        flexGrow: 1,
        margin: "0.5rem",
      },
    },
  },
  selectClass: {
    minWidth: 47,
  },
  selectUser: {
    minWidth: 48,
  },
  selectCategory: {
    minWidth: 90,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
}));

export default useStyles;
