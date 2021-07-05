import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
    marginBottom:theme.spacing(1),
  },
  
  cancelButton: {
    height: 36,
    width: 90,
  },
  saveButton: {
    height: 36,
    width: 90,
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
