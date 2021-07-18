import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme) => ({
  root: {
    borderColor: "#EBEFF2",
  },
  head: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: "0.875rem",
  },
  body: {
    fontSize: "0.8125rem",
    color: "#707683",
  },
  footer: {
    fontSize: "0.8125rem",
    color: "#707683",
    borderTop: "0.0625rem solid #EBEFF2",
    "&:first-child": {
      borderLeft: "0.0625rem solid #EBEFF2",
    },
    "&:last-child": {
      borderRight: "0.0625rem solid #EBEFF2",
    },
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0rem 0.25rem",
  },
  schoolColumn: {
    color: "#5C6269 !important",
    fontWeight: 600,
    fontSize: "0.9375rem !important",
  },
  paginationCell: { border: "none !important" },
  currentSchoolLabel: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    margin: "0rem 0rem 0.5rem",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: '3.5rem',
  },
  image: {
    width: '27.3125rem',
    [theme.breakpoints.down("xs")]: {
      width: '15.625rem',
    },
  },
  tablePagination: {
    color: "#5C6269",
  },
}));

export default useStyles;
