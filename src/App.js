import React, { Component } from "react";
import { Switch } from "react-router-dom";

import TopBarLayout from "./Components/TopBarLayout";
import NoTopBarLayout from "./Components/NoTopBarLayout";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import RegisterPage from "./Components/RegisterPage";
import AppRoute from "./Components/AppRoute";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <AppRoute
              exact
              path="/"
              layout={TopBarLayout}
              component={HomePage}
            />
            <AppRoute
              exact
              path="/about"
              layout={TopBarLayout}
              component={AboutPage}
            />
            <AppRoute
              exact
              path="/contact"
              layout={TopBarLayout}
              component={ContactPage}
            />
            <AppRoute
              exact
              path="/register"
              layout={NoTopBarLayout}
              component={RegisterPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
