import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
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
  image: {
    width: "100%",
    height: '50%',
    borderRadius: 12,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.24)",
    marginBottom: theme.spacing(2),
  },
  name: {
    marginTop: 20,
    fontFamily: "Roboto",
    fontWeight: 900,
    fontSize: 22,
    textAlign: "center",
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
    maxHeight: 400,
    overflow: "auto",
    margin: theme.spacing(2, 0,4),

    "@media (min-width: 1700px)": {
      maxHeight: 230,
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
