import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      flexGrow: 1,
    },
  },
  coloredSelect: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    minWidth: 120,
    maxWidth: 300,
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  normalSelect:{
    border: "0.0625rem solid #E5E5E5",
    minWidth: 120,
    maxWidth: 300,
  },
  icon: {
    color: "white",
  },
}));

export default useStyles;
