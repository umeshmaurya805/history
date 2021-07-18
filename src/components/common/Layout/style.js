import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    borderBottom: "0.0625rem solid hsl(210, 32%, 93%)",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  heading: {
    fontWeight: 700,
  },
  sidebar: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
  },
  content: {
    padding: "2rem",
    [theme.breakpoints.only("xs")]: {
      padding: "1rem",
    },
  },
}));

export default useStyles;
