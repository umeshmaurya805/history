import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "4rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0rem 1rem 1rem 1rem",
      padding: "2rem",
      backgroundColor: "white",
      borderRadius: "0.5rem",
      height: "100%",
      maxWidth: "25rem",
    },
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    color: theme.palette.primary.main,
    marginBottom: "0.625rem",
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
    margin: "1.5rem 0rem 1rem",
    height: "3.5rem",
  },
}));

export default useStyles;
