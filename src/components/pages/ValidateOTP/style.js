import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 2, 2, 2),
      padding: "2rem",
      backgroundColor: "white",
      borderRadius: "0.5rem",
      height: "100%",
    },
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    color: theme.palette.primary.main,
    marginBottom: "0.625rem",
    maxWidth: "400px",
  },
  subTitle: {
    fontFamily: "'Inter', sans-serif",
    marginBottom: "1.25rem",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "0.5rem",
  },
  forgotPasswordLink: {
    display: "flex",
    justifyContent: "flex-end",

    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    "& a:hover": {
      opacity: "0.8",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "56px",
  },
}));

export default useStyles;
