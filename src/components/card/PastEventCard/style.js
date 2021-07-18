import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: "0.5rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  eventName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
  },
  competitiveInfoChip: {
    minWidth: 220,
  },
  info: {
    fontSize: 14,
    "& > span": {
      color: "#383838",
    },
  },
  chips: {
    margin: theme.spacing(2, 0),
  },
  button: {
    alignSelf: "flex-end",
  },
}));

export default useStyles;
