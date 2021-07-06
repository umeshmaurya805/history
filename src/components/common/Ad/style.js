import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 255,
    height: 390,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
    },
  },
  slider: {
    boxShadow: "0px 5px 10px -2px rgba(0,0,0,0.14)",
    borderRadius: 12,
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
    padding: "2px 8px",
    borderRadius: 6,
    fontWeight: 700,
    fontSize: 12,
    boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
  },
  ad: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 390,
    width: 260,
    marginBottom: -5,
    marginTop: -3,
    marginLeft:-1,
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
