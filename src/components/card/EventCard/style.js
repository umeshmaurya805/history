import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(0, 2),
  },
  content: {
    padding: "0px 10px 0px 10px !important",
  },
  imageContainer: {
    margin: theme.spacing(2, 0),
  },
  image: {
    width: 240,
    height: 160,
    borderRadius: 12,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.24)",
    margin: theme.spacing(0, 1),
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 15,
    color: "black",
  },
  subHeading: {
    color: "black",
    opacity: 0.8,
    fontSize: 12,
    textAlign: "center",
    margin: theme.spacing(1),
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
    fontSize: 18,
    textAlign: "center",
  },
  infoValue: {
    fontFamily: "Roboto",
    fontSize: 14,
    textAlign: "center",
  },
  detailsButton: {
    minWidth: 90,
    height: 30,
    fontSize: 12,
    fontFamily: "Roboto",
    margin: theme.spacing(0, 1, 2, 1),
    alignSelf: "flex-end",
  },
}));

export default useStyles;