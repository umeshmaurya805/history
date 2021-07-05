import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    padding: "15px 15px 0px 15px !important",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: 22,
    color: "#4E4C4C",
    alignItems: "center",
  },
  subHeading: {
    color: "#383838",
    textAlign:"center",
    padding: theme.spacing(0, 10),
    [theme.breakpoints.only('xs')]:{
      padding: theme.spacing(0, 4),
    }
  },
  imageContainer: {
    margin: theme.spacing(2, 0),
    width: "100%",
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 12,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.24)",
    margin: theme.spacing(0, 1),
    [theme.breakpoints.only("xs")]: {
      height: 150,
      width: 250,
    },
  },
  infoBox: {
    width: "100%",
    marginBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.only("xs")]: {
      paddingLeft: theme.spacing(0),
    },
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
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      alignSelf: "flex-end",
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(1),
    },
  },
}));

export default useStyles;
