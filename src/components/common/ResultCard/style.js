import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 100,
  },
  content: {
    padding: "6px 15px 10px 6px !important",
  },
  container: {
    height: 90,
  },
  points: {
    fontWeight: 900,
    fontSize: 32,
  },
  centerItem: {
    alignSelf: "center",
    flexGrow: 1,
  },
  logo: {
    height: 50,
    width: 50,
    backgroundColor: "#C4C4C4",
    margin: "auto",
  },
  name: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 2,
  },
  pointsScored: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: 500,
  },
  extraInfo: {
    fontSize: 12,
    color: "#383838",
  },
}));

export default useStyles;
