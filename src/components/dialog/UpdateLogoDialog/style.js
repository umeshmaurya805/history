import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  files: {
    backgroundColor: "#EBEBEB",
    padding: theme.spacing(3),
    borderRadius: 8,
    height: 200,
    width: 500,
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
      height: 100,
      width: 200,
    },
  },
}));

export default useStyles;
