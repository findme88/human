import React, { Component } from "react";
import Me from "./me/me"


export default class Person extends Component {
    render() {
        let {name, age} = this.props
        return (
           
        
            <Me name = {name} age = {age}/>
          
        );
      }
}