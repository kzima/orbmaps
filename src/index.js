import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "material-ui/styles";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
