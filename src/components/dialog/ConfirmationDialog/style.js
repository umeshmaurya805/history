import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 700,
    margin: "auto",
  },
  content: {
    fontSize: 18,
    fontWeight: 600,
    maxWidth: 400,
    textAlign: "center",
    margin: theme.spacing(1, 3),
    "& > span": {
      color: theme.palette.primary.main,
    },
  },
  dialogActions: {
    justifyContent: "space-between",
    margin: theme.spacing(0, 3, 2),
  },
  button: {
    width: 120,
    fontFamily: "Roboto",
    fontSize: 18,
  },
}));

export default useStyles;
