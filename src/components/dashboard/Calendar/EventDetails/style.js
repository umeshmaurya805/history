import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    boxShadow: "0rem 0.3125rem 2.5rem -0.625rem rgba(0,0,0,0.14)",
    padding: "1.5rem",

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
    "@media (min-width: 1700px)": {
      width: "80%",
      paddingTop: "40%",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: "0.75rem",
    boxShadow: "0rem 0.3125rem 0.625rem rgba(0,0,0,0.24)",
    marginBottom: "1rem",
  },
  title: {
    marginTop: 30,
    fontFamily: "Roboto",
    fontWeight: 900,
    fontSize: 22,
    textAlign: "center",
    "@media (min-width: 1700px)": {
      marginTop: 50,
    },
  },
  summary: {
    color: "#383838",
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  item: {
    margin: "0.5rem",
    minWidth: 105,
  },
  itemName: {
    fontFamily: "Roboto",
    fontWeight: 500,
    marginRight: "0.5rem",
  },
  reactMarkdown: {
    color: "#383838",
    maxHeight: 380,
    overflow: "auto",
    margin: theme.spacing(2, 0, 4),
    "@media (min-width: 1700px)": {
      maxHeight: 280,
    },
    "& > h1, h2, h3, h4, h5, h6": {
      color: theme.palette.primary.main,
    },
  },
  messageButton: {
    // flexGrow: 1,
    backgroundColor: "#F89503",
    color: "white",
    width: 180,
    margin: "0.5rem",
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: "#C37603",
    },
    "&:active": {
      backgroundColor: "#C37603",
    },
  },
  button: {
    // flexGrow: 1,
    width: 180,
    margin: "0.5rem",
    padding: "0.5rem",
  },
}));

export default useStyles;
