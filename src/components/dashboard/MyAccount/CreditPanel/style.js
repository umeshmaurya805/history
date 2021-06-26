import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  creditDetailsLabel: {
    marginTop: theme.spacing(4),
    fontSize: 18,
    fontWeight: 600,
  },
  creditBox: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #EBEFF2",
    padding: theme.spacing(2.5),
    margin: theme.spacing(2, 0),
  },
  totalCreditsLabel: {
    color: "#383838",
    fontWeight: 600,
  },
  creditScore: {
    fontFamily: "'Inter', sans-serif",
    color: "#1D1C3F",
  },
  scoreUpdatedAt: {
    color: "#929292",
  },
}));

export default useStyles;
