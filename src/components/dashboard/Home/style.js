import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {},
  mainSection: {
    flexGrow: 1,
    padding: "1.25rem 1.25rem 1.25rem 0 !important",
  },
  sideSection: {
    padding: "1.25rem 0 !important",
  },
  featuredEvent: {
    [theme.breakpoints.only("xs")]: {
      margin: "auto",
    },
  },
  ad: {
    padding: "1.25rem 0 !important",
    margin: "auto",
  },
}));

export default useStyles;
