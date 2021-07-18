import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    padding: "6px 15px 0.625rem 6px !important",
  },
  container: {
    height: 120,
  },
  position: {
    display: "flex",
    flexGrow: 1,
    alignSelf: "start",
    justifyContent: "flex-end",
    "& > img": {
      minWidth: 30,
      maxWidth: "10%",
      width: "25%",
    },
  },
  logo: {
    height: 80,
    width: 80,
    marginRight: "0.5rem",
    backgroundColor: "#C4C4C4",
    "@media (max-width: 1500px)": {
      height: 60,
      width: 60,
    },
  },
  name: {
    fontFamily: "Roboto",
    maxWidth: 185,
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 5,
    "@media (max-width: 1500px)": {
      fontSize: 14,
    },
  },
  pointsScored: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 500,
    "@media (max-width: 1500px)": {
      fontSize: "0.75rem",
    },
  },
  extraInfo: {
    fontSize: 14,
    color: "#383838",
    "@media (max-width: 1500px)": {
      fontSize: "0.75rem",
    },
  },
}));

export default useStyles;
