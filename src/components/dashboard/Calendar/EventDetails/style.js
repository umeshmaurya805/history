import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(8),
    height: "100%",
    border: "1px solid #E5E5E5",
    borderRadius: 12,
    boxShadow: "0px 5px 40px -10px rgba(0,0,0,0.14)",
    padding: theme.spacing(5),

    "@media (max-width: 1100px)": {
      "& > div": {
        maxWidth: "100%",
        flexBasis: "100%",
      },
    },
  },
  imageContainer: {
    width: "100%",
    paddingTop: "50%" /* 2:1 Aspect Ratio */,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 12,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.24)",
    marginBottom: theme.spacing(2),
  },
  name: {
    marginTop: 30,
    fontFamily: "Roboto",
    fontWeight: 900,
    fontSize: 22,
    textAlign: "center",
    "@media (min-width: 1700px)": {
      marginTop: 50,
    },
  },
  subHeading: {
    color: "#383838",
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  item: {
    margin: theme.spacing(1, 2),
    minWidth: 105,
  },
  itemName: {
    fontFamily: "Roboto",
    fontWeight: 500,
    marginRight: theme.spacing(1),
  },
  reactMarkdown: {
    maxHeight: 470,
    overflow: "auto",
    margin: theme.spacing(2, 0, 4),
    "@media (min-width: 1700px)": {
      maxHeight: 280,
    },
  },
  messageButton: {
    backgroundColor: "#F89503",
    color: "white",
    width: 180,
    "&:hover": {
      backgroundColor: "#C37603",
    },
    "&:active": {
      backgroundColor: "#C37603",
    },
  },
  registerButton: {
    width: 180,
  },
}));

export default useStyles;
