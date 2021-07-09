import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  creditDetailsLabel: {
    marginTop: theme.spacing(8),
    fontSize: 18,
    fontWeight: 600,
  },
  creditBox: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #C4C4C4",
    borderRadius: 8,

    padding: theme.spacing(2.5),
    margin: theme.spacing(2, 0),
  },
  totalCreditsLabel: {
    color: "#5C6269",
    fontWeight: 600,
    marginRight: theme.spacing(2),
  },
  creditScore: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    color: "#5C6269",
  },
  scoreUpdatedAt: {
    color: "#929292",
  },
}));

export default useStyles;
