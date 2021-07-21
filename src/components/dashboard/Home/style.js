import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem 0rem !important",
    justifyContent: "space-evenly",
  },
  ad: {
    // padding: "1.25rem 0 !important",
    // margin: "auto",
    "@media (max-width:1000px)": {
      maxWidth: "100%",
      flexBasis:'100%',

    },
  },
}));

export default useStyles;
