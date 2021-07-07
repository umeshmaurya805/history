import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme) => ({
  root: {
    borderColor: "#DFE0EB",
  },
  head: {
    color: "#9FA2B4",
    fontWeight: 700,
    fontSize: 16,
    "& .MuiTableSortLabel-active": {
      color: "#4F515C",
    },
  },
  body: {
    fontSize: 14,
    color: "#252733",
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #DFE0EB",
    boxShadow: "0px 5px 20px -5px rgba(0,0,0,0.14) !important",
  },
  toolbar: {
    padding: theme.spacing(4, 2),
  },
  title: {
    flex: 1,
    fontWeight: 700,
  },
  downloadButton: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 3),
  },
  table: {
    minWidth: 800,
  },
  sortLabel: {
    paddingLeft: 18,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  deleteButton: {
    margin: "-4px 0",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
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
