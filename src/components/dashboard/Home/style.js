import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  mainSection: {
    flexGrow: 1,
    padding: "20px 20px 20px 0 !important",
  },
  sideSection: {
    padding: "20px 0 !important",
  },
  featuredEvent: {
    [theme.breakpoints.only("xs")]: {
      margin: "auto",
    },
  },
  ad: {
    padding: "20px 0 !important",
    margin: "auto",
  },
}));

export default useStyles;
