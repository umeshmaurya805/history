import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 255,
    border: "none",
    boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
  },
  media: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  description: {
    fontSize: 11,
    color: "#383838",
  },
  content: {
    border: "0.03125rem solid #E5E5E5",
    borderTop: "none",
    borderBottom: "none",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2, 2),
    border: "0.03125rem solid #E5E5E5",
    borderTop: "none",
    borderRadius:'0 0 16px 16px'
  },
  actionButtons: {
    width: 100,
  },
}));

export default useStyles;
