import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: "2rem",
  },
  box: {
    margin: "1rem 0rem 2rem",
    display: "flex",
    flexDirection: "column",
  },
  eventName: {
    flexGrow: 1,
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 50,
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      fontSize: 32,
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 28,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "unset",
    },
  },
  chips: {
    margin: theme.spacing(2, 0),
  },
  chipItems: {
    flexGrow: 1,
    "@media (min-width: 1000px) and (max-width: 1306px)": {
      minWidth: 310,
    },
  },
  button: {
    alignSelf: "flex-end",
    margin: "0 1rem",
  },
  tabLayout: {
    paddingBottom: "0.5rem",
  },
}));

export default useStyles;
