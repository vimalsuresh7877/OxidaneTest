import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact"
import App from "./App";
import welcome from "./Components/welcome"
class Routes extends Component {
 
  render() {
   
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/App" exact component={App} />
        </Switch>
      </BrowserRouter>
    );
  
}
}
export default Routes;
