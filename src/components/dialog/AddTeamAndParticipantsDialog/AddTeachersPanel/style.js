import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem 0rem",
  },
  button: {
    padding: "0.5rem 1rem",
    margin: "1rem 2rem 1rem 1rem",
  },
  formContainer: {
    margin: "2rem",
  },
  form: {
    display: "flex",
    "& > div": {
      flexGrow: 1,
      margin: "1rem",
    },
  },
  files: {
    marginTop: "2rem !important",
    position: "relative",
    height: 100,
    width: 100,
    backgroundColor: "#C4C4C4",
    borderRadius: "50%",
    cursor: "pointer",
  },
  avatar: {
    height: 100,
    width: 100,
    border: "0.125rem solid #E5E5E5",
  },
  classRoot: {
    width: "100%",
  },
  buttonItem: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default useStyles;
