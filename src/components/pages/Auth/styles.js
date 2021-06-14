import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  },
  board: {
    maxWidth: "600px",
    margin: "auto",
    padding: theme.spacing(5),
  },
  featureList: {
    overflowY: "auto",
    maxHeight: "500px",
  },
  logo: {
    height: "125px",
    width: "125px",
    marginBottom: theme.spacing(2),
  },
  paper: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
