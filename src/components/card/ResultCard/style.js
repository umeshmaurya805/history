import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    padding: "6px 15px 10px 6px !important",
  },
  container: {
    height: 120,
  },
  position: {
    alignSelf: "start",
    "& > div.MuiTypography-root": {
      fontWeight: 900,
      fontSize: 32,
    },
  },
  logo: {
    height: 80,
    width: 80,
    marginRight: theme.spacing(1),
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
      fontSize: 12,
    },
  },
  extraInfo: {
    fontSize: 14,
    color: "#383838",
    "@media (max-width: 1500px)": {
      fontSize: 12,
    },
  },
}));

export default useStyles;
