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
    fontSize: "1rem",
    textAlign: "center",
  },
  competitiveInfoChip: {
    minWidth: "13.75rem",
  },
  info: {
    fontSize: "0.875rem",
    "& > span": {
      color: "#383838",
    },
  },
  chips: {
    margin: "1rem 0rem",
  },
  button: {
    alignSelf: "flex-end",
  },
}));

export default useStyles;
