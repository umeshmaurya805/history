import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
    },
  },
  list: {
    marginTop: theme.spacing(1),
    border: "1px solid #E5E5E5",
    borderRadius: 12,
    maxHeight: 374,
    overflow: "auto",
    boxShadow: "0px 5px 40px -10px rgba(0,0,0,0.14)",
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
    width:55,
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
}));

export default useStyles;
