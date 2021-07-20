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
    width: "303px",
    position: "relative",
  },
  media: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
    top: 120,
    margin: "auto",
  },
  categoryName: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: "1rem",
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  description: {
    fontSize: 12,
    color: "#383838",
    textAlign: "justify",
    fontFamily: "Roboto",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 2, 2),
  },
}));

export default useStyles;
