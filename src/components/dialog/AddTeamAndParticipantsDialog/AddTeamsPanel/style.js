import { makeStyles } from "@material-ui/core/styles";

export const useInputBaseStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    fontFamily: "Roboto",
    border: "0.0625rem solid #E5E5E5",
    borderRadius: "0.75rem",
    height: "4rem",
    padding: "0.5rem 1rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  // teamBox: {
  //   flexWrap: "wrap",
  //   color: theme.palette.grey[500],
  //   margin: "1rem 0rem",
  //   fontFamily: "Roboto",
  //   border: "0.0625rem solid #E5E5E5",
  //   borderRadius: "0.75rem",
  //   width: "100%",
  //   padding: "0.5rem 1rem",
  //   boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  // },
  // groupIcon: {
  //   marginRight: "2rem",
  //   [theme.breakpoints.only("xs")]: {
  //     display: "none",
  //   },
  // },
  // editBox: {
  //   [theme.breakpoints.only("xs")]: {
  //     flexGrow: 1,
  //   },
  // },
  // nameBox: {
  //   [theme.breakpoints.only("xs")]: {
  //     flexGrow: 1,
  //   },
  // },
  // teamName: {
  //   flexGrow: 1,
  //   color: "#383838",
  //   fontWeight: 600,
  //   [theme.breakpoints.only("xs")]: {
  //     marginBottom: "1rem",
  //   },
  // },
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
}));

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
  },
  teamName: {
    fontFamily: "Roboto",
    fontSize: "1.4rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  list: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listItem: {
    flexGrow: 1,
    width: "fit-content",
    flexWrap: "wrap",
    justifyContent: "space-between",
    border: "0.0625rem solid #C9C9C9",
    borderRadius: "0.75rem",
    margin: "0.4rem",
    background: "white",
  },
  avatar: {
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
  name: {
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  class: {
    fontSize: "1rem",
    color: "#383838",
  },
  iconButton: {
    color: theme.palette.grey[500],
  },
  button: {
    padding: "0.5rem 1rem",
    margin: "1rem 0rem 1rem 1rem",
  },
  emptyBox: {
    width: "100%",
    color: "#C9C9C9",
    fontSize: "1rem",
  },
}));

export default useStyles;
