import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">

      <Header />

        <Switch>
          
          <Route path="/" exact={true}>
            <Home />
          </Route>


          <Route path="/checkout">
            <Checkout />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
