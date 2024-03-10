import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  render() {
    return <h1 className="time">it is {this.state.time}</h1>;
  }
}

export default Timer