import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Hello extends React.Component {
  render() {
    return <h2 className="text" >{this.props.title}</h2>;
  }
}

export default Hello