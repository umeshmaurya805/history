import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
