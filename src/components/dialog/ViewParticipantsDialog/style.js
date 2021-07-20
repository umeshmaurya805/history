import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: "2rem",
  },
  box: {
    marginBottom: "1rem",
  },
  toolbar: {
    padding: "1.5rem 1.5rem 1.5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  addButton: {
    padding: "0.5rem 1rem",
    borderRadius: "0.75rem",
    width: "6.25rem",
  },
}));

export default useStyles;
