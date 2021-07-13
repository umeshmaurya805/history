import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    borderTop: "1px solid #DADADA",
    borderBottom: "1px solid #DADADA",
    paddingBottom: theme.spacing(4),
  },
  stats: {
    paddingTop: theme.spacing(4),
  },
  loader: {
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  chart: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    border: "1px solid #DFE0EB",
    boxShadow: "0px 5px 20px -5px rgba(0,0,0,0.14) !important",
    borderRadius: 12,
  },
}));

export default useStyles;
