import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fff",
    borderBottom: "1px solid hsl(210, 32%, 93%)",
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
    backgroundColor: "#2366B5",
    color: "white",
    border: "none",
  },
  content: {
    // backgroundColor: "#f9f9f9",
  },
}));

export default useStyles;
