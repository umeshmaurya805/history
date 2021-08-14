import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme) => ({
  root: {
    borderColor: "#DFE0EB",
  },
  head: {
    height: "5rem",
    color: "#9FA2B4",
    fontWeight: 700,
    fontSize: "1rem",
    "& .MuiTableSortLabel-active": {
      color: "#4F515C",
    },
  },
  body: {
    fontSize: "0.875rem",
    color: "#252733",
  },
}))(TableCell);

export const BlueStyledTableCell = withStyles((theme) => ({
  root: {
    borderColor: "#DFE0EB",
  },
  head: {
    height: "5rem",
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: "1rem",
    "& .MuiTableSortLabel-active": {
      color: theme.palette.primary.dark,
    },
  },
  body: {
    fontSize: "0.875rem",
    color: "#252733",
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: {
    border: "0.0625rem solid #DFE0EB",
    boxShadow: "0rem 0.3125rem 1.25rem -0.3125rem rgba(0,0,0,0.14) !important",
    borderRadius: "0.75rem",
  },
  toolbar: {
    padding: "1.5rem 1.5rem 0rem 1rem",
    flexWrap: "wrap",
  },
  title: {
    flex: 1,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  participantName: {
    color: "#323C47 !important",
    fontWeight: 600,
  },
  downloadButton: {
    padding: "0.5rem 1rem",
    borderRadius: "0.75rem",
  },
  table: {
    minWidth: 800,
  },
  sortLabel: {
    paddingLeft: "1.125rem",
  },
  bulkCertificateDownload: {
    marginLeft: "0.5rem",
  },
  medals: {
    height: "2.25rem",
  },
  avatar: {
    marginRight: "1rem",
  },
  viewButton: {
    fontWeight: 700,
    fontSize: "0.8125rem",
    borderRadius: "2.5rem",
    width: "4.375rem",
    padding: "0.5rem 0rem",
    margin: "-0.25rem 0rem",
  },
  downloadCertificate: {
    padding: "0.7rem",
  },
  deleteButton: {
    margin: "-0.25rem 0",
  },
  tag: {
    fontFamily: "Roboto",
    padding: "0.5rem",
    width: "8.125rem",
  },
  visuallyHidden: {
    border: "0rem",
    clip: "rect(0 0 0 0)",
    height: "0.0625rem",
    margin: "-0.0625rem",
    overflow: "hidden",
    padding: "0rem",
    position: "absolute",
    top: "1.25rem",
    width: "0.0625rem",
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
