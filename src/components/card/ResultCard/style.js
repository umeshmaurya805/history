import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    height: "100%",
    padding: "0.75rem !important",
  },
  container: {
    height: "100%",
  },
  position: {
    display: "flex",
    flexGrow: 1,
    alignSelf: "start",
    justifyContent: "flex-end",
    "& > img": {
      height: '2.5rem',
    },
  },
  logo: {
    height: '5rem',
    width: '5rem',
    marginRight: "0.5rem",
    backgroundColor: "#C4C4C4",
    "@media (max-width: 1500px)": {
      height: '3.75rem',
      width: '3.75rem',
    },
  },
  name: {
    fontFamily: "Roboto",
    maxWidth: '11.6rem',
    fontWeight: 500,
    fontSize: '1rem',
    marginBottom: 5,
    "@media (max-width: 1500px)": {
      fontSize: '0.875rem',
    },
  },
  pointsScored: {
    fontFamily: "Roboto",
    fontSize: '0.875rem',
    fontWeight: 500,
    "@media (max-width: 1500px)": {
      fontSize: "0.75rem",
    },
  },
  extraInfo: {
    fontSize: '0.875rem',
    color: "#383838",
    "@media (max-width: 1500px)": {
      fontSize: "0.75rem",
    },
  },
}));

export default useStyles;
