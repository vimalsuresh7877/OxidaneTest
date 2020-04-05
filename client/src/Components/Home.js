import React, { Component } from "react";
import "./home.css";
import Nav from "./nav";
import {Redirect,Link} from "react-router-dom";
class Home extends Component {
 
  onSubmit = event =>{
    event.preventDefault();
    return <Redirect to="/welcome"/>
  }
  render() {
   
    return (
        <div className="home">
  <Nav/>
    <div className="buttons">
    <Link to="/App">
      <button type="button">
        login
      </button>
    </Link>
    </div>
    </div>
    );
  
}
}
export default Home;