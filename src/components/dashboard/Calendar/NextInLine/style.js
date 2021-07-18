import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2.5rem",
    },
  },
  list: {
    flexGrow: 1,
    height: "22.5rem",
    marginTop: "0.5rem",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    overflow: "auto",
    boxShadow: "0rem 0.3125rem 2.5rem -0.625rem rgba(0,0,0,0.14)",
    "& .MuiListItem-root.Mui-selected, & .MuiListItem-root.Mui-selected:hover":
      {
        backgroundColor: "rgba(41, 121, 255, 0.08)",
      },
  },
  eventBox: {
    width: "100%",
  },
  eventDate: {
    backgroundColor: "#007AFF",
    fontFamily: "Roboto",
    fontSize: "1.625rem",
    fontWeight: 900,
    marginRight: "1.875rem",
    height: "3.4375rem",
    width: "3.4375rem",
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
    padding: "0rem 0.5rem",
  },
}));

export default useStyles;
