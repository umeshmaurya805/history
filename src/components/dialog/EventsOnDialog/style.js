import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 700,
    margin: "auto",
  },
  content: {
    fontSize: 18,
    fontWeight: 600,
    maxWidth: 400,
  },
  listItem: {
    borderRadius: 12,
    border: "2px solid #E5E5E5",
    boxShadow: "0px 4px 10px -3px rgba(0, 0, 0, 0.15)",
    marginBottom: theme.spacing(2),
    "&:hover": {
      boxShadow: "0px 5px 30px -10px rgba(0,0,0,0.14)",
    },
  },
  eventName: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  eventSubHeading: {
    fontSize: 12,
    color: "#383838",
  },
  eventRegisteredTag: {
    fontFamily: "Roboto",
    margin: theme.spacing(1, 0),
    padding: theme.spacing(0, 1),
  },
  eventTiming: {
    fontSize: 12,
    color: "#383838",
    marginLeft: theme.spacing(2),
  },
}));

export default useStyles;
