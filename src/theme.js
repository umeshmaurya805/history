import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

export const rootTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2366B5",
    },
    secondary: blue,
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});
