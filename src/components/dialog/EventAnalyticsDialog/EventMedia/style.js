import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0.5rem",
  },
  card: {
    width: "303px",
    position: "relative",
      margin: "1.5rem 1rem",
  },
  media: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#F89503",
    width: "300px",
    height: "240px",
  },
  playImage: {
    position: "absolute",
    left:0,
    right:0,
    top:0,
    bottom:100,
    margin:'auto'
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  description: {
    fontSize: 11,
    color: "#383838",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 2, 2),
  },
  actionButton: {},
}));

export default useStyles;
