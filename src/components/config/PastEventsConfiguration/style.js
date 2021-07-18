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
    border: "0.0625rem solid #E5E5E5",
  },
  month: {
    minWidth: '5rem',
    border: "0.0625rem solid #E5E5E5",
  },
  year: {
    minWidth: '5rem',
    border: "0.0625rem solid #E5E5E5",
  },
  class: {
    minWidth: '3.125rem',
    border: "0.0625rem solid #E5E5E5",
  },
  user: {
    minWidth: '3.125rem',
    border: "0.0625rem solid #E5E5E5",
  },
  category: {
    minWidth: '8.125rem',
    border: "0.0625rem solid #E5E5E5",
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
