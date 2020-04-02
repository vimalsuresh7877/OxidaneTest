import React, { Component } from "react";
import "./home.css";
import App from "../App";
class Home extends Component {
 
  render() {
   
    return (
        <div className="home">
       <App/>
    <div className="buttons">
    <button type="button" class="btn btn-outline-light">LOGIN</button><br/>
    <button type="button" class="btn btn-outline-light">SIGN UP</button>
    </div>
    </div>
    );
  
}
}
export default Home;