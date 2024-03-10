import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import Hello from "./hello";
import Timer from "./time";

class Massage extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Timer />
      </div>
    );
  }
}

export default Massage