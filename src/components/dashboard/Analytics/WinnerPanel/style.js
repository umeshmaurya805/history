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
}));

export default useStyles;
