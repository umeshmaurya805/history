import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "0.5rem",
    marginLeft: '-1rem',
    marginRight: '-1rem',
  },
  buttonLeft: {
    position: "absolute",
    left: '0.312rem',
    height: '1.562rem',
    width: '1.562rem',
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonRight: {
    position: "absolute",
    right: '0.312rem',
    height: '1.562rem',
    width: '1.562rem',
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    width: '1rem',
    height: '1rem',
  },
}));

export default useStyles;
