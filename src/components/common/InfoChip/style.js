import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "nowrap",
    padding: theme.spacing(1, 1.5),
    margin: "0.5rem 1rem",
    border: "0.125rem solid #E5E5E5",
    borderRadius: 21,
    boxShadow: "0rem 0.3125rem 1.25rem -0.625rem rgba(0,0,0,0.14)",
    "& > p": {
      display: "flex",
      alignItems: "center",
    },
    justifyContent:'space-evenly',
    display:'flex'
    // [theme.breakpoints.down("md")]: {
      // minWidth: 400,
    // },
  },
  name: {
    fontFamily: "Roboto",
    fontWeight: 500,
    marginRight: '1rem',
    fontSize: 16,
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
