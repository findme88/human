import React, { Component } from "react";



export default class Me extends Component {
    render() {
        let {name, age, ShowAlert} = this.props
        return (
          <div>
              <h1>{name}</h1>
              <span>{age}</span>
              <button onClick = {() => ShowAlert(name, age) }>Alert</button>
              
          </div>
           
        );
      }
}