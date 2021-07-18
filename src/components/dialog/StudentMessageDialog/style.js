import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  reactMarkdown: {
    maxHeight: "23.75rem",
    overflow: "auto",
    margin: "0.5rem 0rem",
    "@media (min-width: 1700px)": {
      maxHeight: "17.5rem",
    },
  },
  dialogActions: {
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "#E7E2E2",
    padding: "1rem 0.5rem",
  },
  button: {
    margin: "0.5rem",
    width: "8.125rem",
  },
}));

export default useStyles;
