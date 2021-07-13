import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
  },
  eventName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
  },
  item: {
    padding: theme.spacing(1, 1.5),
    margin: theme.spacing(1),
    border: "0.5px solid #E5E5E5",
    borderRadius: 21,
    boxShadow: "0px 5px 20px -10px rgba(0,0,0,0.14)",
    "& > p": {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: 185,
    },
  },
  itemName: {
    flex: 1,
    fontFamily: "Roboto",
    fontWeight: 500,
    marginRight: theme.spacing(1.5),
    fontSize: 14,
  },
  itemValue: {
    fontSize: 14,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    margin: "-9px -12px",
    borderTopRightRadius: 21,
    borderBottomRightRadius: 21,
    padding: "8px 16px",
  },
  info: {
    fontSize: 14,
    "& > span": {
      color: "#383838",
    },
  },
  chips: {
    margin: theme.spacing(2, 0),
  },
  button: {
    alignSelf: "flex-end",
  },
}));

export default useStyles;
