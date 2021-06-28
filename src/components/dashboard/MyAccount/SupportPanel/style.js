import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  supportLabel: {
    fontSize: 24,
    fontWeight: 600,
    margin: theme.spacing(8, 0, 2),
  },
  titleButton: {
    width: 120,
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0.5, 3.5),
    [theme.breakpoints.only("sm")]: {
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.only("xs")]: {
      marginRight: theme.spacing(2),
    },
  },
  form: {
    [theme.breakpoints.up("md")]: {
      width: 650,
    },
  },
  submit: {
    marginTop: theme.spacing(2),
    width: 120,
  },
}));

export default useStyles;
