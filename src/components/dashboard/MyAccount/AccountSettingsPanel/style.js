import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    fontSize: 18,
    fontWeight: 600,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #C4C4C4",
    padding: theme.spacing(2),
  },
  editableBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #C4C4C4",
    paddingLeft: theme.spacing(2.5),
  },
  name: {
    color: "#383838",
    fontWeight: 600,
    marginRight: theme.spacing(2),
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  value: {
    fontFamily: "'Inter', sans-serif",
    color: "#1D1C3F",
    marginRight: theme.spacing(5),
  },
  iconButton: {
    height: 39,
    width: 39,
    margin: theme.spacing(1),
  },
  editIcon: {
    fontSize: 15,
  },
  logoBox: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(5),
    border: "1px solid #C4C4C4",
    height: 86,
    width: 86,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 72,
    width: 72,
    backgroundColor: "#C4C4C4",
  },
  logoChange: {
    fontWeight: 600,
    borderRadius: 40,
    width: 86,
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(1),
  },
  coordinatorTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleButton: {
    margin: theme.spacing(3, 1, 2),
    height: 39,
    width: 39,
  },
  coordinatorValue: {
    fontFamily: "'Inter', sans-serif",
    color: "#1D1C3F",
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
