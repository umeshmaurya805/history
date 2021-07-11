import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  reactMarkdown: {
    maxHeight: 380,
    overflow: "auto",
    margin: theme.spacing(1,0),
    "@media (min-width: 1700px)": {
      maxHeight: 280,
    },
  },
  dialogActions: {
    justifyContent: "space-evenly",
    backgroundColor: "#E7E2E2",
    padding: theme.spacing(2, 1),
  },
  button: {
    margin: theme.spacing(1),
    width: 130,
  },
}));

export default useStyles;
