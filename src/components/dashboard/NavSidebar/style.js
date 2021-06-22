import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 256,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 116,
    marginTop: theme.spacing(2.5),
  },
  navList: {
    width: "100%",
  },
}));

export default useStyles;
