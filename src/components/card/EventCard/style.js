import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: "0rem 1rem",
  },
  card: {
    height: "100%",
    padding: "0rem 1rem",
  },
  content: {
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    paddingTop: "50%" /* 2:1 Aspect Ratio */,
    position: "relative",
    margin: "1rem 0rem",
    paddingLeft: "2.5rem",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: "0.75rem",
    boxShadow: "0rem 0.3125rem 0.625rem rgba(0,0,0,0.24)",
    marginBottom: "1rem",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1rem",
    color: "black",
    marginTop: '0.5rem',
  },
  summary: {
    flexGrow: 1,
    color: "black",
    opacity: 0.8,
    fontSize: "0.75rem",
    textAlign: "justify",
    margin: "0.5rem",
  },
  infoBox: {
    width: "100%",
    marginBottom: "0.75rem",
  },
  innerBox: {
    padding: "0rem 0.5rem",
  },
  infoLabel: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1.125rem",
    textAlign: "center",
  },
  infoValue: {
    fontFamily: "Roboto",
    fontSize: "0.875rem",
    textAlign: "center",
  },
  detailsButton: {
    minWidth: "5.625rem",
    height: "1.875rem",
    fontSize: "0.75rem",
    fontFamily: "Roboto",
    margin: "0rem 0.5rem 1rem 0.5rem",
    alignSelf: "flex-end",
  },
}));

export default useStyles;
