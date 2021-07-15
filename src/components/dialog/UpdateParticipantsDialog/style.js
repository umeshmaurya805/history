import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: theme.spacing(4),
  },
  box: {
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    padding: theme.spacing(3, 3, 3, 2),
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  addButton: {
    padding: theme.spacing(1, 2),
    borderRadius: 12,
    width: 100,
  },
}));

export default useStyles;
