import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import TopBar from "./Components/TopBar";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/HomePage";
import ContactPage from "./Components/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
