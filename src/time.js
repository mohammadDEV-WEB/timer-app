import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SaveItem from "./listSaveTime";
import TestContext from "./testContext";

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }

  static contextType=TestContext
  //============= this code for start timer===========

  startTimer = () => {
    if (this.state.isStart == false) {
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second == 60) {
          this.setState({
            minute: this.state.minute + 1,
            second: 0,
          });
        }
        if (this.state.minute == 60) {
          this.setState({
            hour: this.state.hour + 1,
            minute: 0,
          });
        }
        if (this.state.hour == 24) {
          this.setState({
            hour: 0,
          });
        }
      }, 1000);
    }
    this.props.changeTitle("شروع شد😍");
  };
  //============= setState for save time===========

  saveTime = () => {
    let saveTimeItem = document.querySelector('.time').innerHTML
    this.context.setSaveTime([...this.context.saveTime, saveTimeItem]);
  };

  //============= this code for stop timer===========
  stopTimer = (e) => {
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
    this.props.changeTitle("وایستادی😒");
  };
  //============= this code for reset timer===========
  resetTimer = (e) => {
    this.stopTimer();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
    this.props.changeTitle("دوباره😁");
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <h1 onClick={this.saveTime} className="time">{`${
          h > 9 ? h : "0" + h
        } : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h1>

        <div className="btn">
          <button className="start-btn" onClick={this.startTimer}>
            start
          </button>
          <button className="stop-btn" onClick={this.stopTimer}>
            stop
          </button>
          <button className="reset-btn" onClick={this.resetTimer}>
            reset
          </button>
          <button
            onClick={this.props.changeState}
            style={{
              background: this.props.isLight ? "black" : "white",
              color: this.props.isLight ? "white" : "black",
            }}
            className="reset-btn"
          >
            {this.props.isLight ? "dark" : "light"}
          </button>
        </div>
      </>
    );
  }
}

export default Timer;
