import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "flex-end !important",
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
    minWidth: "3.125rem",
  },
  selectUser: {
    minWidth: "3.125rem",
  },
  selectCategory: {
    minWidth: "5.625rem",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  resetButton: {
    width: "5rem",
  },
}));

export default useStyles;
