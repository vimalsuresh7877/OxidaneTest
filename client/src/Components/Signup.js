import React, { Component } from "react";
import "./home.css";
import App from "../App";
class SignUp extends Component {
constructor(props){
    super(props)
    this.state={
        name:"",
        adharno:0
    }
}
handleSubmit=(event)=>{
    event.preventDefault()
    this.props.setCustomer(this.state.name,this.state.adharno)
}
 handleInputChange=(event)=>{
event.preventDefault()
this.setState({
    [event.target.name]:event.target.value
})
 }
  render() {
   
    return (
       <div>
           <form onSubmit={this.handleSubmit}>
           <input type="text"
           name="name"
           onChange={this.handleInputChange}
          />
        
             <input type="number"
             name="adharno"
           onChange={this.handleInputChange}
          />
           <button type="submit">signup</button>
           </form>
       </div>
       
   
    );
  
}
}
export default SignUp;