import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    padding: "15px 10px 0px 10px !important",
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
    width: 600,
    [theme.breakpoints.between("sm", "md")]: {
      width: 350,
    },
    [theme.breakpoints.only("xs")]: {
      width: 250,
    },
  },
  imageContainer: {
    margin: theme.spacing(2, 0),
    width: "100%",
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 12,
    boxShadow: "0px 5px 20px rgba(0,0,0,0.24)",
    margin: theme.spacing(0, 1),
  },
  infoBox: {
    width: "100%",
    marginBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(7),
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
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default useStyles;
