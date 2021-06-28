import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
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
    MuiTextField: {
      root: {
        "& input": {
          color: "#1D1C3F",
        },
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 8,
      },
    },
    MuiDialogTitle: {
      root: {
        fontSize: 18,
        fontWeight: 700,
        textAlign: "center",
        padding: "16px 24px",
        color: "#383838",
      },
    },
  },
});
