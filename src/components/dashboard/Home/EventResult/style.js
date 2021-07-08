import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3, 0),
    borderTop: "1px solid #E5E5E5",
    borderBottom: "1px solid #E5E5E5",
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
    minWidth: 200,

    [theme.breakpoints.down("xs")]: {
      minWidth: "unset",
      width: "100%",
    },
  },
}));

export default useStyles;
