import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: 300,
    display: "flex",
    flexDirection: "column",
  },
  card: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: 300,
    border: "none",
    marginRight: "2rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  media: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    flexGrow: 1,
    border: "0.03125rem solid #E5E5E5",
    borderTop: "none",
    borderBottom: "none",
    textAlign: "justify",
  },
  description: {
    fontSize: 11,
    color: "#383838",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2, 2),
    border: "0.03125rem solid #E5E5E5",
    borderTop: "none",
    borderRadius: "0 0 16px 16px",
  },
  actionButtons: {
    width: 100,
  },
}));

export default useStyles;
