import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "nowrap",
    padding: theme.spacing(1, 1.5),
    margin: "0.5rem",
    border: "0.0.3125rem solid #E5E5E5",
    borderRadius: 21,
    boxShadow: "0rem 0.3125rem 1.25rem -0.625rem rgba(0,0,0,0.14)",
    "& > p": {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: 185,
    },
  },
  name: {
    fontFamily: "Roboto",
    fontWeight: 500,
    marginRight: theme.spacing(1.5),
    fontSize: 14,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    margin: "-9px -12px",
    borderTopLeftRadius: 21,
    borderBottomLeftRadius: 21,
    padding: "0.5rem 16px",
  },
  value: {
    fontSize: 14,
    flex: 1,
    justifyContent: "flex-end",
  },
}));

export default useStyles;
