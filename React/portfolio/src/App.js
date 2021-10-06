import React from "react";
import './App.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import PortfolioItem from "./components/PortfolioItem";
import Contact from "./components/Contact";
import Error from "./components/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/portfolio/:id" exact component={PortfolioItem} />
          <Route path="/contact" exact component={Contact} />
          <Route   component={Error} />
        </Switch>

        
      </Router>
    </div>
  );
}

export default App;
