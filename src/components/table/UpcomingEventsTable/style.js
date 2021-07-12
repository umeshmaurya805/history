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
    borderRadius: 12,
    border: "1px solid #DADADA",
    boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
  },
  container: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  tablePagination: {
    color: "#5C6269",
    padding: `${theme.spacing(1, 2)} !important`,

    "& .MuiSelect-select.MuiSelect-select": {
      border: "0.5px solid #DFE0EB",
      boxShadow: "0px 4px 8px -3px rgba(0,0,0,0.14)",
    },
  },
}));

export default useStyles;
