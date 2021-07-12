import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    display: "flex",
  },
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
  closeButton: {
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(255,0,0,0.7)",
    },
  },
  button: {
    width: 120,
    fontFamily: "Roboto",
    fontSize: 18,
  },
}));

export default useStyles;
