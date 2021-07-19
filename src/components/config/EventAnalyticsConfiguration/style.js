import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2.5rem 0rem 1rem",
  },
  gridItem: {
    display: "flex",
    flexWrap: "wrap",
  },
  status: {
    minWidth: '6.25rem',
  },
  month: {
    minWidth: '5rem',
  },
  year: {
    minWidth: '5rem',
  },
  class: {
    minWidth: '3.125rem',
  },
  user: {
    minWidth: '3.125rem',
  },
  category: {
    minWidth: '8.125rem',
  },
  customRangeContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  downloadButton: {
    margin: 'auto 0.5rem',
    padding: "0.5rem 1rem",
    borderRadius: "0.75rem",
    height: '3.125rem',
  },
}));

export default useStyles;
