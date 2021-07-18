import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      overflow: "hidden",
    },
  },
  scrollableBoard: {
    display: "flex",
    overflowY: "auto",
  },
  board: {
    maxWidth: "37.5rem !important",
    margin: "auto",
    padding: "2.5rem !important",
  },
  featureList: {
    maxHeight: "31.25rem",
  },
  logo: {
    height: "7.8125rem",
    width: "7.8125rem",
    marginBottom: "1rem",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
