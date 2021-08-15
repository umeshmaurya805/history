import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    height: "100%",
    padding: "0.75rem !important",
    paddingBottom: "0rem !important",
  },
  container: {
    height: "100%",
  },
  teamGrid: {
    width: "100%",
  },
  position: {
    display: "flex",
    alignSelf: "start",
    justifyContent: "center",
    marginTop: "1rem",
    "& > img": {
      height: "2.5rem",
    },
  },
  team: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "1.2rem",
    marginBottom: 5,
    "@media (max-width: 1500px)": {
      fontSize: "0.875rem",
    },
  },
  extraInfo: {
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#383838",
    "@media (max-width: 1500px)": {
      fontSize: "0.75rem",
    },
  },
  listItem: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    border: "0.0625rem solid #C9C9C9",
    borderRadius: "0.75rem",
    margin: "0.4rem",
    background: "white",
  },
  avatar: {
    marginRight: "1rem",
  },
  studentBox: {
    flexGrow: 1,
    [theme.breakpoints.only("xs")]: {
      order: 1,
      flexBasis: "100%",
      margin: "1rem 0 0",
    },
  },
  name: {
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  class: {
    fontSize: "1rem",
    color: "#383838",
  },
}));

export default useStyles;
