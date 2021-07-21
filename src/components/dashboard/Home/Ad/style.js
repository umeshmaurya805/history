import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 300,
    height: 390,
    [theme.breakpoints.up("sm")]: {
      margin: "3.5rem 0rem 0rem auto",
    },
  },
  slider: {
    boxShadow: "0rem 0.3125rem 0.625rem -0.125rem rgba(0,0,0,0.14)",
    borderRadius: "0.75rem",
  },
  adLabel: {
    userSelect: "none",
    position: "absolute",
    left: 10,
    top: 15,
    zIndex: 1,
    letterSpacing: 2,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "0.125rem 0.5rem",
    borderRadius: 6,
    fontWeight: 700,
    fontSize: "0.75rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  ad: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "390px",
    width: "105%",
    marginLeft: -4,
  },
  adButtonLeft: {
    position: "absolute",
    left: 10,
    height: 25,
    width: 25,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  adButtonRight: {
    position: "absolute",
    right: 10,
    height: 25,
    width: 25,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  adIcon: {
    width: 15,
    height: 15,
  },
}));

export default useStyles;
