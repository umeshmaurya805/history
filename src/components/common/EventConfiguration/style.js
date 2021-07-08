import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      justifyContent: "space-between",
      "& > div": {
        flexGrow: 1,
        margin: theme.spacing(1),
      },
    },
  },
  selectClass: {
    minWidth: 60,
  },
  selectUser: {
    minWidth: 55,
  },
  selectCategory: {
    minWidth: 101,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
}));

export default useStyles;