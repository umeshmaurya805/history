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
    maxWidth: "600px !important",
    margin: "auto",
    padding: `${theme.spacing(5)}px !important`,
  },
  featureList: {
    maxHeight: "500px",
  },
  logo: {
    height: "125px",
    width: "125px",
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
