import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  creditDetailsLabel: {
    marginTop: "4rem",
    fontSize: "1.125rem",
    fontWeight: 600,
  },
  creditBox: {
    display: "flex",
    justifyContent: "space-between",
    border: "0.0625rem solid #C4C4C4",
    borderRadius: "0.5rem",

    padding: "1.25rem",
    margin: "1rem 0rem",
  },
  totalCreditsLabel: {
    color: "#5C6269",
    fontWeight: 600,
    marginRight: "1rem",
  },
  creditScore: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    color: "#5C6269",
  },
  scoreUpdatedAt: {
    color: "#929292",
    margin: "auto 0rem",
  },
  button: {
    padding: "0.5rem 1rem",
    marginLeft: "0.5rem",
  },
}));

export default useStyles;
