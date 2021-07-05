import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    fontWeight: "900",
    fontSize: "1.3rem",
    fontFamily: "Roboto",
    marginBottom: theme.spacing(1),
  },
  image: {
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  description: {
    color: "#F4F9FF",
    fontSize: "14px",
    marginBottom: theme.spacing(1),
  },
  learnMore: {
    fontWeight: 500,
    color: "#D4F4FF",
    textDecoration: "none",
    fontSize: "1.1rem",

    "&:hover": {
      color: "#B5FCFF",
      "& span": {
        marginLeft: "2px",
      },
    },
  },
}));

export default useStyles;
