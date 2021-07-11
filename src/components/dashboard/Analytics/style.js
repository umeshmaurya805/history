import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: 900,
    textAlign:'center',
    marginBottom:theme.spacing(5)
  },
}));

export default useStyles;
