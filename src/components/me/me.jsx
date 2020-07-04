import React, { Component } from "react";



export default class Me extends Component {
    render() {
        let {name, age} = this.props
        return (
          <div>
              <h1>{name}</h1>
              <span>{age}</span>
          </div>
           
        );
      }
}