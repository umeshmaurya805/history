import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "nowrap",
    padding: theme.spacing(1, 1.5),
    margin: theme.spacing(1),
    border: "0.5px solid #E5E5E5",
    borderRadius: 21,
    boxShadow: "0px 5px 20px -10px rgba(0,0,0,0.14)",
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
    padding: "8px 16px",
  },
  value: {
    fontSize: 14,
    flex: 1,
    justifyContent: "flex-end",
  },
}));

export default useStyles;
