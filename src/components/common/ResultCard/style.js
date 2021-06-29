import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 100,
  },
  content: {
    padding: "12px 25px 36px 10px !important",
  },
  logo: {
    height: 50,
    width: 50,
    backgroundColor: "#C4C4C4",
  },
  name: {
    fontFamily: "Roboto",
    fontWeight: 500,
    marginBottom: 5,
  },
  extraInfo: {
    fontSize: 10,
    color: "#383838",
    marginBottom: 5,
  },
  // value: {
  //   fontWeight: 900,
  // },
  // name: {
  //   color: "#3D3D3D",
  // },
}));

export default useStyles;
