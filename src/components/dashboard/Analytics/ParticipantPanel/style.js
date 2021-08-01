import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    borderBottom: "0.0625rem solid #DADADA",
    paddingBottom: "2rem",
  },
  loader: {
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  chart: {
    marginTop: "2rem",
    padding: "1rem",
    border: "0.0625rem solid #DFE0EB",
    boxShadow: "0rem 0.3125rem 1.25rem -0.3125rem rgba(0,0,0,0.14) !important",
    borderRadius: "0.75rem",
  },
}));

export default useStyles;
