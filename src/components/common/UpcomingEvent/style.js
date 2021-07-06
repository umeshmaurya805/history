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
    marginTop: theme.spacing(2),
    border: "1px solid #DADADA",
    boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
    borderRadius: 8,
  },
  selectorGrid: {
    flexGrow: 1,
  },
  selectorBox: {
    [theme.breakpoints.only("xs")]: {
      justifyContent: "space-between",
      "& > div": {
        flexGrow: 1,
        margin: theme.spacing(1),
      },
    },
  },
  selector: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
    },
  },
  select: {
    fontSize: 15,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  icon: {
    color: "white",
  },
  selectClass: {
    minWidth: 58,
  },
  selectUser: {
    minWidth: 55,
  },
  selectCategory: {
    minWidth: 101,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginLeft: "unset",
    },
  },
  titleColumn: {
    color: "#383838 !important",
    fontWeight: 600,
  },
  viewButton: {
    fontWeight: 700,
    fontSize: 13,
    borderRadius: 40,
    width: 70,
    padding: theme.spacing(1, 0),
    margin: theme.spacing(-0.5, 0),
  },
}));

export default useStyles;
