import { createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";

export const rootTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2366B5",
    },
    secondary: lightBlue,
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});
