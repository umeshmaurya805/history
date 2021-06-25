import { makeStyles, withStyles } from "@material-ui/core/styles";

export const configStyles = withStyles((theme) => ({
  root: {
    borderColor: "#EBEFF2",
  },
  head: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  body: {
    fontSize: 14,
    color: "#707683",
  },
  footer: {
    fontSize: 14,
    color: "#707683",
    borderTop: "1px solid #EBEFF2",
    "&:first-child": {
      borderLeft: "1px solid #EBEFF2",
    },
    "&:last-child": {
      borderRight: "1px solid #EBEFF2",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(0, 0.5) },
  schoolColumn: {
    color: "#323C47 !important",
    fontWeight: 600,
    fontSize: "15px !important",
  },
  currentSchoolLabel: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    margin: theme.spacing(3, 0, 1),
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(7),
  },
  image: {},
}));

export default useStyles;
