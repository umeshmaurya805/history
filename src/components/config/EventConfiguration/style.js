import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.only("xs")]: {
      justifyContent: "space-between",
      "& > div": {
        flexGrow: 1,
        margin: theme.spacing(1),
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
