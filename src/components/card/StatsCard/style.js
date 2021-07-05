import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:95
  },
  content: {
    padding: "5px 15px 5px 10px !important",
  },
  value: {
    fontWeight: 900,
  },
  name: {
    color: "#3D3D3D",
  },
}));

export default useStyles;
