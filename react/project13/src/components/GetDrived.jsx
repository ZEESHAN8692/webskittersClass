import React, { Component } from "react";

export default class GetDrived extends Component {
  constructor() {
    super();
    this.state = {
      colorState: "red",
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.colorState !== props.colorState) {
      return { colorState: props.colorState };
    }
  }
  render() {
    return <div>getDrived {this.state.colorState}</div>;
  }
}
