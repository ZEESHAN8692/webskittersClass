import React, { Component } from "react";

export default class ComponentWillUnmount extends Component {
  constructor() {
    super();
    this.state = { actice: true };
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount call");
    alert("user has been deleted");
  }
  hnadleClic = () => {
    this.setState({ actice: false });
  };
  render() {
    return (
      <>
        {this.state.actice ? (
          <div>
            <h1>User Name : Zeeshan Khan </h1>
          </div>
        ) : null}
        <button onClick={this.hnadleClic}>Delete User</button>
      </>
    );
  }
}
