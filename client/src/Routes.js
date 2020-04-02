import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact"
class Routes extends Component {
 
  render() {
   
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  
}
}
export default Routes;
