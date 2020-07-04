import React, { Component } from "react";
import Person from "./components/person"



export default class App extends Component {
  state = {
    name: "Pikachu",
    age: 11,

  }

  
  
  render() {
    return (
      
        <Person name = { this.state.name } age = { this.state.age }/>
      
    );
  }
}
