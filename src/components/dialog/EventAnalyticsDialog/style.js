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
    fontSize: "1.125rem",
    marginLeft: "3.125rem",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "unset",
    },
  },
  chips: {
    margin: "1rem 0",
  },
  chipItems: {
    flexGrow: 1,
    "@media (min-width: 1000px) and (max-width: 1306px)": {
      minWidth: '19.5rem',
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
