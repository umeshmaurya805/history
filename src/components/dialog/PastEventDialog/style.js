import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: theme.spacing(4),
  },
  box: {
    marginBottom: theme.spacing(2),
  },
  cardContainer: {
    marginTop: theme.spacing(-6),
  },
  cardContent: {
    padding: "5px 15px 5px 10px !important",
  },
}));

export default useStyles;
