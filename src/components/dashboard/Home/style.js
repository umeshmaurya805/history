import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  title: {
    width: 200,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: "Roboto",
    fontSize: 22,
    color: "#383838",
    borderBottom: "5px solid #F89503",
  },
  mainSection: {
    flexGrow: 1,
    padding: "20px 20px 20px 0 !important",
  },
  sideSection: {
    maxWidth: 255,
    padding: "20px 0 !important",
  },
}));

export default useStyles;
