import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  stats: {
    borderTop: "1px solid #DADADA",
    paddingTop: theme.spacing(2),
  },
  loader: {
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  chart: {
    marginTop: theme.spacing(7),
  },
}));

export default useStyles;
