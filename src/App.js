import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import pages
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
