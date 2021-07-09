import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  config: {
    marginBottom: theme.spacing(1),
    justifyContent: "space-between",
    "@media (max-width: 1050px)": {
      maxWidth: 330,
    },
    "& > div": {
      flexGrow: 1,
      margin: theme.spacing(0, 1, 1),
    },
  },
  calendar: {
    marginBottom: theme.spacing(4.5),
    "@media (min-width: 1050px)": {
      fontSize: 12,
    },
  },
  eventDay: {
    backgroundColor: "#007AFF",
    color: "white !important",
    "&:hover": {},
  },
}));

export default useStyles;
