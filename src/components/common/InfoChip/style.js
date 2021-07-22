import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "nowrap",
    padding: "0.5rem 0.75rem",
    margin: "0.5rem 1rem",
    border: "0.125rem solid #E5E5E5",
    borderRadius: "1.25rem",
    boxShadow: "0rem 0.3125rem 1.25rem -0.625rem rgba(0,0,0,0.14)",
    "& > p": {
      display: "flex",
      alignItems: "center",
    },
    justifyContent: "space-evenly",
    display: "flex",
  },
  name: {
    fontFamily: "Roboto",
    fontWeight: 500,
    marginRight: "1rem",
    fontSize: "1rem",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    margin: "-0.562rem -0.75rem",
    borderTopLeftRadius: "1.25rem",
    borderBottomLeftRadius: "1.25rem",
    padding: "0.5rem 16px",
  },
  value: {
    fontSize: "0.875rem",
    flex: 1,
    justifyContent: "flex-end",
  },
}));

export default useStyles;
