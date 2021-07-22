import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
  },
  item: {
    margin: "1rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "19rem",
    position: "relative",
  },
  media: {
    borderTopLeftRadius: "0.75rem",
    borderTopRightRadius: "0.75rem",
    backgroundColor: "#F89503",
    width: "300px",
    height: "240px",
  },
  cardContent: {
    flexGrow: 1,
  },
  playImage: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "7.5rem",
    margin: "auto",
  },
  categoryName: {
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "1rem",
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  description: {
    fontSize: "0.75rem",
    color: "#383838",
    textAlign: "justify",
    fontFamily: "Roboto",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    padding: "0rem 1rem 1rem",
  },
}));

export default useStyles;
