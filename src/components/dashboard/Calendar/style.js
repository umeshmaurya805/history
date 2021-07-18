import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  itemLeft: {
    display: "flex",
    alignItems: "flex-start",
  },
  nextLine: {
    "@media (max-width: 750px) and (min-width: 600px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));

export default useStyles;
