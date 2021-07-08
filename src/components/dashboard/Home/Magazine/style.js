import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 255,
    border: "none",
  },
  media: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  description: {
    fontSize: 11,
    color: "#383838",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2, 2),
  },
  actionButtons: {
    width: 80,
  },
}));

export default useStyles;
