import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

export const rootTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#4f84c3",
        main: "#2366B5",
        dark: "#18477e",
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
          borderRadius: "0.5rem",
        },
      },
      MuiInputBase: {
        root: {
          borderRadius: "0.5rem",
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
          borderRadius: "0.5rem",
        },
      },
      MuiDialogTitle: {
        root: {
          fontSize: "1.125rem",
          fontWeight: 700,
          textAlign: "center",
          padding: "1rem 2rem",
          color: "#383838",
        },
      },
      MuiCard: {
        root: {
          backgroundColor: "#FBFBFB",
          borderRadius: "0.75rem",
          border: "0.125rem solid #E5E5E5",
          boxShadow: "0rem 0.25rem 0.625rem -0.1875rem rgba(0, 0, 0, 0.15)",
        },
      },
      MuiSelect: {
        root: {
          background: "white",
          color: "#2366B5",
          fontSize: "0.75rem",
          paddingLeft: "1.5rem",
          paddingTop: "0.875rem",
          paddingBottom: "0.9375rem",
          boxShadow: "0rem 0.3125rem 0.5rem -0.1875rem rgba(0,0,0,0.14)",
        },
        select: {
          paddingRight: "2.5rem !important",
          borderRadius: "0.75rem",
          "&:focus": {
            borderRadius: "0.75rem",
            backgroundColor: "white",
          },
        },
        icon: {
          color: "#008FD0",
          top: "calc(50% - 0.75rem)",
          right: "0.75rem",
          position: "absolute",
          userSelect: "none",
          pointerEvents: "none",
        },
      },
      MuiMenu: {
        paper: {
          borderRadius: "0.75rem",
          marginTop: "0.5rem",
        },
        list: {
          paddingTop: "0rem",
          paddingBottom: "0rem",
          background: "white",
          "& li": {
            fontSize: "0.75rem",
            color: "#383838",
            fontWeight: 200,
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
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
          padding: "0.625rem",
          border: "0.0.3125rem solid #E5E5E5",
          borderRadius: "0.75rem",
          boxShadow: "0rem 0.3125rem 0.625rem -0.3125rem rgba(0,0,0,0.14)",
        },
      },
    },
  })
);
