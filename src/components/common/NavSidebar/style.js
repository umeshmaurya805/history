import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "15.125rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoBox: {
    height: "7.25rem",
    width: "7.25rem",
    marginBottom: "1.25rem",
  },
  logo: {
    height: "7.25rem",
    width: "7.25rem",
    marginTop: "1.25rem",
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
    borderLeft: "0.375rem solid #F89503",
    paddingLeft: "3.375rem !important",
    color: "#4A90E2",
    "& span": {
      fontWeight: 500,
    },
  },
  listItem: {
    paddingLeft: "3.75rem",
  },
  listItemIcon: {
    minWidth: "unset",
    marginRight: "0.625rem",
    height: "1.25rem",
    width: "1.25rem",
  },
  listItemText: {
    flex: "unset",
    "& span": {
      fontFamily: "Roboto !important",
      fontSize: "1.25rem",
    },
  },
  logoutButton: {
    color: theme.palette.primary.main,
    backgroundColor: "white",
    borderRadius: "1.25rem",
    marginTop: "8rem",
    padding: "0.1875rem 1.6875rem",
    "&:hover": {
      backgroundColor: "#F0F0F1",
    },
  },
}));

export default useStyles;
