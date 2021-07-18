import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2.5rem",
  },
  title: {
    margin: "2rem 0rem 1rem",
    fontSize: "1.125rem",
    fontWeight: 600,
  },
  boxStart: {
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    borderTop: "0.0625rem solid #C4C4C4 !important",
  },
  boxEnd: {
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    border: "0.0625rem solid #C4C4C4",
    borderTop: "none",
    padding: "1rem",
  },
  editableBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "0.0625rem solid #C4C4C4",
    borderTop: "none",
    paddingLeft: "1rem",
  },
  name: {
    color: "#5C6269",
    fontWeight: 600,
    marginRight: "1rem",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  value: {
    fontFamily: "'Inter', sans-serif",
    color: "#1D1C3F",
    marginRight: "2.5rem",
  },
  iconButton: {
    height: "2.4375rem",
    width: "2.4375rem",
    margin: "0.5rem",
  },
  editIcon: {
    fontSize: "0.9375rem",
  },
  logoBox: {
    marginTop: "1rem",
    marginRight: "2.5rem",
    border: "0.0625rem solid #C4C4C4",
    borderRadius: "0.5rem",
    height: "5.375rem",
    width: "5.375rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "4.5rem",
    width: "4.5rem",
    backgroundColor: "#C4C4C4",
  },
  logoChange: {
    fontWeight: 600,
    borderRadius: "2.5rem",
    width: "5rem",
    padding: "0.5rem 0rem",
    marginTop: "0.5rem",
    marginLeft: "0.1875rem",
  },
  coordinatorTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleButton: {
    margin: "1.5rem 0.5rem 1rem",
    height: "2.4375rem",
    width: "2.4375rem",
  },
  coordinatorValue: {
    fontFamily: "'Inter', sans-serif",
    color: "#1D1C3F",
    marginRight: "0.5rem",
  },
}));

export default useStyles;
