import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3.3, 0),
    borderTop: "1px solid #E5E5E5",
    borderBottom: "1px solid #E5E5E5",
  },
  title: {
    width: 225,
    marginBottom: 20,
    fontFamily: "Roboto",
    fontSize: 22,
    color: "#383838",
    borderBottom: "5px solid #F89503",
  },
  resultContainer: {
    marginTop: theme.spacing(1),
  },
  selector: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  select: {
    border: "1px solid #E5E5E5",

    [theme.breakpoints.down("xs")]: {
      minWidth: "unset",
      width: "100%",
    },
  },
}));

export default useStyles;
