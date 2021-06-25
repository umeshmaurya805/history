import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    borderBottom: "1px solid hsl(210, 32%, 93%)",
    [theme.breakpoints.up("md")]: {
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
    padding: theme.spacing(5),
  },
}));

export default useStyles;
