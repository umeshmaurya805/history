import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "6.25rem",
  },
  content:{
    padding: "0.625rem 1rem !important",
  },
  value: {
    fontWeight: 900,
    fontSize: "2.5rem",
  },
  name: {
    color: "#3D3D3D",
    fontSize: "1rem",
  },
}));

export default useStyles;
