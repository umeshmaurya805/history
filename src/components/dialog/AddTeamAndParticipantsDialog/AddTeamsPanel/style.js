import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    height: "4rem",
    padding: "0.5rem 1rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  teamsContainer: {
    margin: "4rem 0rem",
  },
  teamBox: {
    color: theme.palette.grey[500],
    margin: "1rem 0rem",
    fontFamily: "Roboto",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    height: "4rem",
    width: "100%",
    padding: "0.5rem 1rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  teamName: {
    flexGrow: 1,
    marginLeft: "2rem",
    color: "#383838",
    fontWeight: 600,
  },
  avatarGroup: {
    margin: "0rem 1rem",
  },
  input: {
    fontSize: "1.1rem",
  },
  adornedStart: {
    "& > *:first-child": {
      // * is the icon at the beginning of input
      fontSize: "1.6rem",
      color: theme.palette.grey[500],
      marginRight: "2rem",
    },
    "& > *:last-child": {
      fontSize: "1.1rem",
      color: theme.palette.grey[500],
    },
  },
  iconButton: {
    color: theme.palette.grey[500],
  },
  button: {
    padding: "0.5rem 1rem",
    margin: "1rem 0rem 1rem 1rem",
  },
}));

export default useStyles;
