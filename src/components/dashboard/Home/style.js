import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem 0rem !important",
    justifyContent: "space-between",
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
