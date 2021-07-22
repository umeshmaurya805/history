import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2rem",
  },
  toolbar: {
    padding: "1.5rem 1.5rem 1.5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  greyBackground: {
    background: "rgba(0,0,0,0.6)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    opacity: 0,
    transition: "opacity .2s ease-in",
    visibility: "hidden",
  },
  list: {
    position: "absolute",
    top: '5rem',
    left: '1.25rem',
    zIndex: 100,
    background: "white",
    maxHeight: "20.75rem",
    marginTop: "0.5rem",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    overflow: "auto",
    boxShadow: "0rem 0.3125rem 2.5rem -0.625rem rgba(255,255,255,0.8)",
    "& .MuiListItem-root.Mui-selected, & .MuiListItem-root.Mui-selected:hover":
      {
        backgroundColor: "rgba(41, 121, 255, 0.08)",
      },

    [theme.breakpoints.up("sm")]: {
      minWidth: "30rem",
    },
  },
  listItem: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  emptyItemText: {
    textAlign: "center",
    width: "100%",
    color: "#9e9e9e",
    lineHeight: "2rem",
  },
  avatar: {
    height: "4rem",
    width: "4rem",
    marginRight: "1rem",
  },
  studentBox: {
    flexGrow: 1,
    [theme.breakpoints.only("xs")]: {
      order: 1,
      flexBasis: "100%",
      margin: "1rem 0 0",
    },
  },
  eventName: {
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  eventSubHeading: {
    fontSize: "1rem",
    color: "#383838",
  },
  inviteButton: {
    fontWeight: 700,
    fontSize: "0.8125rem",
    borderRadius: "2.5rem",
    width: "5rem",
    padding: "0.4rem 0rem", [theme.breakpoints.up("sm")]: {
          marginLeft: "2rem",
    },

  },
}));

export default useStyles;
