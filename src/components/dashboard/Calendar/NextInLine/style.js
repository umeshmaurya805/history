import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2.5rem",
    },
  },
  list: {
    marginTop: "0.5rem",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    maxHeight: 374,
    overflow: "auto",
    boxShadow: "0rem 0.3125rem 2.5rem -0.625rem rgba(0,0,0,0.14)",
    "& .MuiListItem-root.Mui-selected, & .MuiListItem-root.Mui-selected:hover":
      {
        backgroundColor: "rgba(41, 121, 255, 0.08)",
      },
    "@media (min-width: 1050px) and (max-width: 1279px)": {
      maxHeight: 485,
    },
  },
  eventDate: {
    backgroundColor: "#007AFF",
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: 900,
    marginRight: 30,
    height: 55,
    width: 55,
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
    padding: theme.spacing(0, 1),
  },
}));

export default useStyles;
