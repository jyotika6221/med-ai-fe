// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route key="home" path="/" exact>
            <Hero />
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
