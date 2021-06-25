import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 242,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoBox: {
    height: 116,
    width: 116,
    marginBottom: theme.spacing(2.5),
  },
  logo: {
    height: 116,
    width: 116,
    marginTop: theme.spacing(2.5),
  },
  navList: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  selected: {
    backgroundColor: "white !important",
    borderLeft: "6px solid #F89503",
    paddingLeft: "54px !important",
    color: "#4A90E2",
    "& span": {
      fontWeight: "500",
    },
  },
  listItem: {
    paddingLeft: 60,
  },
  listItemIcon: {
    minWidth: "unset",
    marginRight: 10,
    height: 20,
    width: 20,
  },
  listItemText: {
    flex: "unset",
    "& span": {
      fontFamily: "Roboto !important",
      fontSize:20,
    },
  },
  logoutButton: {
    color: theme.palette.primary.main,
    backgroundColor: "white",
    borderRadius: 21,
    marginTop: 128,
    padding: "3px 27px",
    "&:hover": {
      backgroundColor: "#F0F0F1",
    },
  },
}));

export default useStyles;
