import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.125rem",
    fontWeight: 700,
    margin: "auto",
  },
  content: {
    fontSize: "1.125rem",
    maxWidth: "30rem",
  },
  listItem: {
    borderRadius: "0.75rem",
    border: "0.125rem solid #E5E5E5",
    boxShadow: "0rem 0.25rem 0.625rem -0.1875rem rgba(0, 0, 0, 0.15)",
    marginBottom: "1rem",
    "&:hover": {
      boxShadow: "0rem 0.3125rem 30px -0.625rem rgba(0,0,0,0.14)",
    },
  },
  eventName: {
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  eventSubHeading: {
    fontSize: "0.75rem",
    color: "#383838",
  },
  eventRegisteredTag: {
    fontFamily: "Roboto",
    margin: "0.5rem 0rem",
    padding: '0rem 0.5rem',
  },
  eventTiming: {
    fontSize: "0.75rem",
    color: "#383838",
    marginLeft: "1rem",
  },
}));

export default useStyles;
