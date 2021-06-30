import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 100,
  },
  content: {
    padding: "6px 15px 10px 6px !important",
  },
  points: {
    fontWeight: 900,
    fontSize: 32,
  },
  centerItem: {
    alignSelf: "center",
  },
  logo: {
    height: 50,
    width: 50,
    backgroundColor: "#C4C4C4",
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
  // value: {
  //   fontWeight: 900,
  // },
  // name: {
  //   color: "#3D3D3D",
  // },
}));

export default useStyles;
