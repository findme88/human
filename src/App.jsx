import React, { Component } from "react";
import Person from "./components/person"



export default class App extends Component {
  state = {
    name: "Pikachu",
    age: 11,

  }

  ShowAlert = (name, age) => {
    alert(name, age)
  }
  
  render() {
    return (
      
        <Person name = { this.state.name } age = { this.state.age } ShowAlert = {this.ShowAlert}/>
      
    );
  }
}
