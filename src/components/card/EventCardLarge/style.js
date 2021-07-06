import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(0, 2),
  },
  content: {
    padding: 15,
  },
  imageContainer: {
    display: "flex",
  },
  image: {
    margin: "auto",
    width: "100%",
    borderRadius: 12,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.24)",
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
  subHeading: {
    color: "#383838",
    textAlign: "center",
    padding: theme.spacing(0, 0.5),
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
    fontSize: 20,
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
    fontSize: 12,
    fontFamily: "Roboto",
    alignSelf: "flex-end",
  },
}));

export default useStyles;
