import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
  cardContainer: {
    flexGrow: 1,
  },
  skeleton: {
    marginTop: "-3rem",
    marginBottom: "-1rem",
    borderRadius: "1rem",
  },
}));

export default useStyles;
