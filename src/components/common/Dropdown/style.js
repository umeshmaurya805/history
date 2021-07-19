import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0.5rem",
    [theme.breakpoints.only("xs")]: {
      flexGrow: 1,
    },
  },
  coloredSelect: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  normalSelect:{
    border: "0.0625rem solid #E5E5E5",
  },
  icon: {
    color: "white",
  },
}));

export default useStyles;
