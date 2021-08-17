import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  itemLeft: {
    display: "flex",
    alignItems: "flex-start",
  },
  nextLine: {
    "@media (max-width: 750px) and (min-width: 600px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  noEvents: {
    background: "white",
    boxShadow: "0rem 0.3125rem 2.5rem -0.625rem rgba(0,0,0,0.14)",
    margin: "auto",
    height: "10rem",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    color: "#C9C9C9",
  },
}));

export default useStyles;
