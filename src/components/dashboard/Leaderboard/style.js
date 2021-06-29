import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme) => ({
  root: {
    borderColor: "#EBEFF2",
  },
  head: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 14,
  },
  body: {
    fontSize: 13,
    color: "#707683",
  },
  footer: {
    fontSize: 13,
    color: "#707683",
    borderTop: "1px solid #EBEFF2",
    "&:first-child": {
      borderLeft: "1px solid #EBEFF2",
    },
    "&:last-child": {
      borderRight: "1px solid #EBEFF2",
    },
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(0, 0.5) },
  schoolColumn: {
    color: "#5C6269 !important",
    fontWeight: 600,
    fontSize: "15px !important",
  },
  paginationCell: { border: "none !important" },
  currentSchoolLabel: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    margin: theme.spacing(0, 0, 1),
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(7),
  },
  image: {
    width: 437,
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  tablePagination: {
    color: "#5C6269",
  },
}));

export default useStyles;
