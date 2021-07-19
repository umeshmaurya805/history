import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    margin: "1rem 0rem",
  },
  button: {
    margin: "0rem 2rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.75rem",
    height: "3.125rem",
  },
  select: {
    minWidth: "3.75rem",
  },
}));

export default useStyles;
