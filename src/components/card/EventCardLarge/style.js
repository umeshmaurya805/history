import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: '0rem 1rem',
    "& > .MuiCard-root": {
      height: "100%",
    },
  },
  content: {
    padding: '1rem',
    height: "100%",
    maxWidth:'unset',
    "& > .MuiGrid-container": {
      height: "105%",
    },
  },
  imageContainer: {
    display: "flex",
    "@media (min-width: 1400px)":{
      maxHeight: '16.25rem'
    }
  },
  image: {
    margin: "auto",
    width: "100%",
    height: "100%",
    borderRadius: "0.75rem",
    boxShadow: "0rem 0.3125rem 0.625rem rgba(0,0,0,0.24)",
    [theme.breakpoints.only("xs")]: {
      height: '9.375rem',
      width: '15.625rem',
    },
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: '1.375rem',
    color: "#4E4C4C",
    textAlign: "center",
  },
  summary: {
    color: "#383838",
    textAlign: "center",
    padding: '0.5rem 0.25rem',
    [theme.breakpoints.only("xs")]: {
      padding:'0rem 2rem',
    },
  },
  infoBox: {
    width: "100%",
    marginBottom: '0.75rem',
  },
  innerBox: {
    padding: '0rem 0.5rem',
  },
  infoLabel: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1.25rem",
    textAlign: "center",
  },
  infoValue: {
    fontFamily: "Roboto",
    fontSize: '0.875rem',
    textAlign: "center",
  },
  detailsButton: {
    minWidth: '5.625rem',
    height: '2.25rem',
    fontSize: "0.75rem",
    fontFamily: "Roboto",
    alignSelf: "flex-end",
  },
}));

export default useStyles;
