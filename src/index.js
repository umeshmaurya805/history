import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Layout, { Root } from "@mui-treasury/layout";
import App from "./components/App";
import store from "./app/store";
import { rootTheme } from "./theme";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "sticky",
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", { anchor: "left" })
    .registerPermanentConfig("lg", {
      width:'15.125rem',
    });
});

render(
  <StrictMode>
    <Provider store={store}>
      <Root theme={rootTheme} scheme={scheme}>
        <App />
      </Root>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
