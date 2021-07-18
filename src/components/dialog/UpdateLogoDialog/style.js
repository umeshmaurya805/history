import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  files: {
    backgroundColor: "#EBEBEB",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    height: "12.5rem",
    width: "31.25rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#7A7878",
    "&:hover": {
      backgroundColor: "#E8E8E8",
    },
    [theme.breakpoints.down("xs")]: {
      height: "6.25rem",
      width: "12.5rem",
    },
  },
}));

export default useStyles;
