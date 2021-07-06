import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(1),
  },
  buttonLeft: {
    position: "absolute",
    left: 5,
    height: 25,
    width: 25,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonRight: {
    position: "absolute",
    right: 5,
    height: 25,
    width: 25,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    width: 15,
    height: 15,
  },
}));

export default useStyles;
