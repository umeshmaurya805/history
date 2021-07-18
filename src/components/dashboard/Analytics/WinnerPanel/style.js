import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    borderTop: "0.0625rem solid #DADADA",
    borderBottom: "0.0625rem solid #DADADA",
    paddingBottom: "2rem",
  },
  stats: {
    paddingTop: "2rem",
    marginBottom: theme.spacing(6),
  },
}));

export default useStyles;
