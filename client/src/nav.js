import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Nav extends Component {
 
  render() {
   
    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg">
  <a className="navbar-brand">OXIDANE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/Contact">Contact</Link>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
      </div>
    );
  
}
}
export default withRouter(Nav);