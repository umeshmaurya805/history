import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
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
}));

export default useStyles;
