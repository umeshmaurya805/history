import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  supportLabel: {
    fontSize: "1.5rem",
    fontWeight: 600,
    margin: "4rem 0rem 1rem",
  },
  titleButton: {
    minWidth: "10rem",
    marginRight: "2.5rem",
    marginBottom: "1rem",
    padding: "0.25rem 1.75rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
    borderRadius: "0.75rem",

    "&.MuiButton-outlined": {
      border: "0.0625rem solid #E5E5E5",
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: "1.2rem",
    },
    [theme.breakpoints.only("xs")]: {
      marginRight: "1rem",
    },
    margin: "0.5rem",
  },
  form: {
    [theme.breakpoints.up("md")]: {
      width: "49.375rem",
    },
  },
  button: {
    marginTop: "1rem",
    marginRight: "1rem",
    width: "7.5rem",
  },
}));

export default useStyles;
