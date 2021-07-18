import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

export const useCustomTableStyles = makeStyles(() => ({
  root: {
    display: "table",
    width: "100%",
    tableLayout: "fixed",
    overflow: "auto",
    minWidth: 900,
  },
}));

export const StyledTableCell = withStyles((theme) => ({
  root: {
    borderColor: "#DADADA",
  },
  head: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    fontWeight: 900,
    fontSize: 16,
  },
  body: {
    fontSize: 13,
    color: "black",
  },
}))(TableCell);

export const StyledTableBody = withStyles((theme) => ({
  root: {
    maxHeight: 315,
    minWidth: 900,
    display: "block",
    overflowX: "hidden",
    tableLayout: "fixed",
    width: "100%",
  },
}))(TableBody);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3.3, 0),
  },
  container: {
    marginTop: "1rem",
    border: "0.0625rem solid #DADADA",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
    borderRadius: 8,
  },
  selectorGrid: {
    flexGrow: 1,
  },
}));

export default useStyles;
