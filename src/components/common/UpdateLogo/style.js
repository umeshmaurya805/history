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
    color: "#7A7878",
    "&:hover":{
        backgroundColor: "#E8E8E8",
    }
  },
}));

export default useStyles;
