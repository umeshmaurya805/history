import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    fontWeight: "900",
    fontSize: "1.3rem",
    fontFamily: "Roboto",
    marginBottom: "0.5rem",
  },
  image: {
    width: "100%",
    marginBottom: "0.5rem",
  },
  description: {
    color: "#F4F9FF",
    fontSize: "14px",
    marginBottom: "0.5rem",
  },
  learnMore: {
    fontWeight: 500,
    color: "#D4F4FF",
    textDecoration: "none",
    fontSize: "1.1rem",

    "&:hover": {
      color: "#B5FCFF",
      "& span": {
        marginLeft: "0.125rem",
      },
    },
  },
}));

export default useStyles;
