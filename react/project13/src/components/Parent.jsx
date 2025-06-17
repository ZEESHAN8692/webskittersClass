import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello Zeeshan Khan",
      fruit: ["Mango", "Banana", "Cherry", "Greps", "Orange", "Apple"],
    };
  }
  render() {
    return <Child name={this.state.msg} fruit={this.state.fruit} />;
  }
}
