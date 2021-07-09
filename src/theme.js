import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

export const rootTheme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#4f84c3",
      main: "#2366B5",
      dark: "#18477e",
    },
    secondary: blue,
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
    MuiCard: {
      root: {
        backgroundColor: "#FBFBFB",
        borderRadius: 12,
        border: "2px solid #E5E5E5",
        boxShadow: "0px 4px 10px -3px rgba(0, 0, 0, 0.15)",
      },
    },
    MuiSelect: {
      root: {
        background: "white",
        color: "#2366B5",
        fontSize: 12,
        paddingLeft: 24,
        paddingTop: 14,
        paddingBottom: 15,
        boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
      },
      select: {
        paddingRight: "40px !important",
        borderRadius: 12,
        "&:focus": {
          borderRadius: 12,
          backgroundColor: "white",
        },
      },
      icon: {
        color: "#008FD0",
        right: 12,
        position: "absolute",
        userSelect: "none",
        pointerEvents: "none",
      },
    },
    MuiMenu: {
      paper: {
        borderRadius: 12,
        marginTop: 8,
      },
      list: {
        paddingTop: 0,
        paddingBottom: 0,
        background: "white",
        "& li": {
          fontSize: 12,
          color: "black",
          paddingTop: 12,
          paddingBottom: 12,
          height: 40,
        },
        "& li:hover": {
          background: "#C0D8F5",
        },
        "& li.Mui-selected": {
          color: "white",
          background: "#2366B5",
        },
        "& li.Mui-selected:hover": {
          background: "#0A52A7",
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontFamily: "Roboto",
        backgroundColor: "rgba(255, 255,255, 1)",
        color: "rgba(0, 0, 0, 0.7)",
        padding: 10,
        border: "0.5px solid #E5E5E5",
        borderRadius: 12,
        boxShadow: "0px 5px 10px -5px rgba(0,0,0,0.14)",
      },
    },
    MuiListItem: {
      root: {
        // backgroundColor: "rgba(41, 121, 255, 0.08) !important",
      },
      selected: {
        backgroundColor: "rgba(41, 121, 255, 0.08) !important",
        height: 400,
      },
    },
  },
});
