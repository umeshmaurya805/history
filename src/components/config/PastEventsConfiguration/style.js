import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5, 0, 2),
  },
  gridItem: {
    display: "flex",
    flexWrap: "wrap",
  },
  status: {
    minWidth: 100,
    border: "0.0625rem solid #E5E5E5",
  },
  month: {
    minWidth: 80,
    border: "0.0625rem solid #E5E5E5",
  },
  year: {
    minWidth: 80,
    border: "0.0625rem solid #E5E5E5",
  },
  class: {
    minWidth: 50,
    border: "0.0625rem solid #E5E5E5",
  },
  user: {
    minWidth: 50,
    border: "0.0625rem solid #E5E5E5",
  },
  category: {
    minWidth: 125,
    border: "0.0625rem solid #E5E5E5",
  },
  customRangeContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  downloadButton: {
    margin: theme.spacing("auto", 1),
    padding: "0.5rem 1rem",
    borderRadius: "0.75rem",
    height: 50,
  },
}));

export default useStyles;
