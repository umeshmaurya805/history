import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: theme.spacing(0, 2),
    "& > .MuiCard-root": {
      height: "100%",
    },
  },
  content: {
    padding: 15,
    height: "100%",
    "& > .MuiGrid-container": {
      height: "105%",
    },
  },
  imageContainer: {
    display: "flex",
  },
  image: {
    margin: "auto",
    width: "100%",
    height: "100%",
    borderRadius: "0.75rem",
    boxShadow: "0rem 0.3125rem 0.625rem rgba(0,0,0,0.24)",
    [theme.breakpoints.only("xs")]: {
      height: 150,
      width: 250,
    },
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: 22,
    color: "#4E4C4C",
    textAlign: "center",
  },
  summary: {
    color: "#383838",
    textAlign: "center",
    padding: theme.spacing(1, 0.5),
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0, 4),
    },
  },
  infoBox: {
    width: "100%",
    marginBottom: theme.spacing(1.5),
  },
  innerBox: {
    padding: theme.spacing(0, 1),
  },
  infoLabel: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1.25rem",
    textAlign: "center",
  },
  infoValue: {
    fontFamily: "Roboto",
    fontSize: 14,
    textAlign: "center",
  },
  detailsButton: {
    minWidth: 90,
    height: 35,
    fontSize: "0.75rem",
    fontFamily: "Roboto",
    alignSelf: "flex-end",
  },
}));

export default useStyles;
