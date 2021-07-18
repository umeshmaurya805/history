import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const StyledTabs = withStyles({
  indicator: {
    height: "0.3125rem",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      minWidth: "30%",
      maxWidth: "40%",
      width: "100%",
      backgroundColor: "#F89503",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const StyledTab = withStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "#7A7878",
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({}));

export default useStyles;
