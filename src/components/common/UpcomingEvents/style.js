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
    fontSize: 16,
  },
  body: {
    fontSize: 13,
    color: "black",
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3.3, 0),
  },
  tableBox: {
    marginRight: -20,
  },
  container: {
    maxHeight: 375,
    marginTop: theme.spacing(2),
    // border: "1px solid #DADADA",
    // boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
    // borderRadius: 12,
  },
  table: { border: "1px solid #DADADA" },
  title: {
    width: 225,
    marginBottom: 20,
    fontFamily: "Roboto",
    fontSize: 22,
    color: "#383838",
    borderBottom: "5px solid #F89503",
  },
  selector: {
    marginLeft: theme.spacing(2),
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
    minWidth: 100,
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
