import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    border: "1px solid #E5E5E5",
    borderRadius: 12,
    height: 50,
    width: 300,
    margin: "auto 5px",
    padding: theme.spacing(1, 2),
    boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
    [theme.breakpoints.only("xs")]: {
      flexGrow: 1,
    },
  },
  input: {
    fontSize: 15,
  },
  adornedStart: {
    "& > *:first-child": {
      // * is the icon at the beginning of input
      fontSize: 20,
      color: theme.palette.grey[500],
      marginRight: theme.spacing(1),
    },
    "& > *:last-child": {
      fontSize: 20,
      color: theme.palette.grey[500],
      marginLeft: theme.spacing(1),
    },
  },
}));

export default useStyles;
