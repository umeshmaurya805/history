import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xl")]: {
      width: 1276,
    },
    [theme.breakpoints.only("lg")]: {
      width: 638,
    },
    [theme.breakpoints.only("md")]: {
      width: 319,
    },
    [theme.breakpoints.only("sm")]: {
      width: 319,
    },
    [theme.breakpoints.only("xs")]: {
      width: 319,
      margin: "auto",
    },
  },
  itemRoot: {
    width: 319,
    padding: theme.spacing(2),
  },
  content: {
    padding: "0px 10px 0px 10px !important",
  },
  buttonLeft: {
    position: "absolute",
    left: 5,
    height: 25,
    width: 25,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonRight: {
    position: "absolute",
    right: 5,
    height: 25,
    width: 25,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    width: 15,
    height: 15,
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
  imageContainer: {
    margin: theme.spacing(2, 0),
  },
  image: {
    width: 250,
    height: 160,
    borderRadius: 12,
    boxShadow: "0px 5px 20px rgba(0,0,0,0.24)",
    margin: theme.spacing(0, 1),
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
    margin: theme.spacing(2, 1),
    alignSelf: "flex-end",
    // [theme.breakpoints.down("md")]: {
    //   alignSelf: "flex-end",
    //   marginRight: theme.spacing(0),
    //   marginLeft: theme.spacing(1),
    // },
  },
}));

export default useStyles;
