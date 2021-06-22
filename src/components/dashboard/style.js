import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    borderBottom: "1px solid hsl(210, 32%, 93%)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  collapseBtn: {
    color: "#fff",
    minWidth: 0,
    width: 40,
    borderRadius: "50% !important",
    border: "none",
    backgroundColor: "rgba(0,0,0,0.24) !important",
    margin: "0 auto 16px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.38) !important",
    },
  },
  sidebar: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
  },
  content: {},
}));

export default useStyles;
