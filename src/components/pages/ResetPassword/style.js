import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 2, 2, 2),
      padding: theme.spacing(4),
      backgroundColor: "white",
      borderRadius: theme.spacing(1),
      height: "100%",
      maxWidth: "400px",
    },
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    color: theme.palette.primary.main,
    marginBottom: "10px",
  },
  subTitle: {
    fontFamily: "'Inter', sans-serif",
    marginBottom: "20px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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
