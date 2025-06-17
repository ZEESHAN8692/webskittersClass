import React, { Component } from "react";

export default class ClassComponents extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello",
      numArray: [10, 20, 30, 40],
    };
  }
  ClickItem = () => {
    if (this.state.greeting === "Hello") {
      this.setState({ ...this.state, greeting: "" });
    } else if (this.state.greeting === "") {
      this.setState({ ...this.state, greeting: "Hello" });
    }
  };
  render() {
    return (
      <>
        <h1>{this.state.greeting}</h1>

        <ul>
          {this.state.numArray.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
        <button onClick={this.ClickItem}>Click</button>
      </>
    );
  }
}
