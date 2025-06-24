import React, { Component } from "react";

export default class DidMount extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      console.log("Warning Message");
      console.error("Error Msg");
    }, 3000);
  }
  render() {
    return <div>DidMount</div>;
  }
}
