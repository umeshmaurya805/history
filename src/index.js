import { ThemeProvider } from "@material-ui/core";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store";
import { rootTheme } from "./theme";

render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={rootTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
