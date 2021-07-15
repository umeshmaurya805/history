import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(3),
    },
  },
  card: {
    border: "none",
  },
  category: {
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-2px)",
    },
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 14,
    display: "flex",
    padding: theme.spacing(1),
    transition: "all 0.2s ease-out 0s",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 4,
    textDecoration: "none",
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(1),
      padding: theme.spacing(1, 2),
      fontSize: 16,
    },
  },
  categorySelected: {
    color: theme.palette.primary.main,
  },
  media: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#F89503",
    width: "300px",
    height:'240px'
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
