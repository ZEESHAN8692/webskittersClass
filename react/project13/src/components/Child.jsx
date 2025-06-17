import React, { Component } from "react";

export default class Child extends Component {
  render() {
    const { name, fruit } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <ul>
          {fruit.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </>
    );
  }
}
