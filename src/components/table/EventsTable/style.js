import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme) => ({
  root: {
    borderColor: "#DADADA",
  },
  head: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    fontWeight: 900,
    fontSize: "1rem",
  },
  body: {
    fontSize: "0.8125rem",
    color: "black",
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: {
    border: "0.0625rem solid #DADADA",
    boxShadow: "0rem 0.3125rem 1.25rem -0.3125rem rgba(0,0,0,0.14) !important",
    borderRadius: "0.75rem",
  },
  container: {
    borderTop: "none",
    borderTopLeftRadius: "0.75rem",
    borderTopRightRadius: "0.75rem",
  },
  titleColumn: {
    fontWeight: 600,

    "& a": {
      textDecoration: "none",
      color: "#383838",
    },
    "& a:hover": {
      opacity: "0.8",
    },
  },
  viewButton: {
    fontWeight: 700,
    fontSize: "0.8125rem",
    borderRadius: "2.5rem",
    width: "4.375rem",
    padding: "0.5rem 0rem",
    margin: "-0.25rem 0rem",
  },
  tag: {
    fontFamily: "Roboto",
    padding: "0.5rem",
    width: "8.125rem",
  },
  tablePagination: {
    color: "#5C6269",
    padding: "0.5rem 1rem !important",

    "& .MuiSelect-select.MuiSelect-select": {
      border: "0.03125rem solid #DFE0EB",
      boxShadow: "0rem 0.25rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
    },
  },
}));

export default useStyles;
