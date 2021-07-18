import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.125rem",
    fontWeight: 700,
    margin: "auto",
  },
  content: {
    fontSize: "1.125rem",
    fontWeight: 600,
    maxWidth: "25rem",
    textAlign: "center",
    margin: '1.5rem 0.5rem',
    "& > span": {
      color: theme.palette.primary.main,
    },
  },
  dialogActions: {
    justifyContent: "space-between",
    margin: "0rem 1.5rem 1rem",
  },
  button: {
    width: "7.5rem",
    fontFamily: "Roboto",
    fontSize: "1.125rem",
  },
}));

export default useStyles;
