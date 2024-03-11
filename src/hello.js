import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

class Hello extends React.Component {
  render() {
    return <h2 className="text" >{this.props.title}</h2>;
  }
}

export default Hello