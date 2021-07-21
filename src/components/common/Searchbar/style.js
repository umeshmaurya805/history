import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 100,
    background:'white',
    fontFamily: "Roboto",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    height: "3.125rem",
    width: "18.75rem",
    margin: "auto 0.5rem",
    padding: "0.5rem 1rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
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
      fontSize: "1.25rem",
      color: theme.palette.grey[500],
      marginRight: "1rem",
    },
    "& > *:last-child": {
      fontSize: "1.25rem",
      color: theme.palette.grey[500],
    },
  },
}));

export default useStyles;
