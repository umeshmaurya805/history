import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "18.75rem",
    display: "flex",
    flexDirection: "column",
  },
  card: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "18.75rem",
    border: "none",
    marginRight: "2rem",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  media: {
    borderTopLeftRadius: "0.75rem",
    borderTopRightRadius: "0.75rem",
  },
  content: {
    flexGrow: 1,
    border: "0.03125rem solid #E5E5E5",
    borderTop: "none",
    borderBottom: "none",
    textAlign: "justify",
  },
  description: {
    fontSize: "0.75rem",
    color: "#383838",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0rem 1rem 1rem",
    border: "0.03125rem solid #E5E5E5",
    borderTop: "none",
    borderRadius: "0 0 1rem 1rem",
  },
  actionButtons: {
    width: "6.25rem",
  },
}));

export default useStyles;
