import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: '18.75rem',
    height: '24.375rem',
    margin: " 3.5rem auto",
    "@media (min-width:1001px)": {
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
    left: '0.625rem',
    top: '1rem',
    zIndex: 1,
    letterSpacing: 2,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "0.125rem 0.5rem",
    borderRadius: '0.5rem',
    fontWeight: 700,
    fontSize: "0.75rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  ad: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "24.375rem",
    width: "105%",
    marginLeft: '-0.25rem',
  },
  adButtonLeft: {
    position: "absolute",
    left: '0.625rem',
    height: '1.562rem',
    width: '1.562rem',
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  adButtonRight: {
    position: "absolute",
    right: '0.625rem',
    height: '1.562rem',
    width: '1.562rem',
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  adIcon: {
    width: '0.937rem',
    height: '0.937rem',
  },
}));

export default useStyles;
