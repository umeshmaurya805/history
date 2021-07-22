import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem 0rem !important",
    justifyContent: "space-between",
    "&.MuiGrid-spacing-xs-2 > .MuiGrid-item":{
      padding:'1rem 0.5rem'
    }
  },
}));

export default useStyles;
