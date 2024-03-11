import React , {useEffect, useState} from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

var interval;

// function Timer() {
//   const [hour,setHour]=useState(0)
//   const [minute,setMinute]=useState(0)
//   const [second,setSecond]=useState(0)
//   const [isStart,setIsStart]=useState(false)

//   const startTimer =()=>{
//     if (isStart===false) {
//       interval =setInterval(()=>{
//         setSecond(second+1)
//         if (second===60) {
//           setSecond(0)
//           setMinute(minute+1)
//         }
//         if (minute===60) {
//           setMinute(0)
//           setHour(hour+1)
//         }
//         if (hour===24) {
//           setHour(0)
//         }
//       },1000)
//     }
//   }

//   // useEffect(()=>{
//   //   startTimer()
//   // },[second,minute,hour])

//   const stopTimer =()=>{
//     setIsStart(false)
//     clearInterval(interval)
//   }

//   const resetTimer =()=>{
//     stopTimer()
//     setHour(0)
//     setMinute(0)
//     setSecond(0)
//   }
//   let h = hour;
//   let m = minute;
//   let s = second;
//   return( 
//       <>
//         <h1 className="time">{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
//           s > 9 ? s : "0" + s
//         }`}</h1>
//         <button className="start-btn" onClick={startTimer}>
//           start
//         </button>
//         <button className="stop-btn" onClick={stopTimer}>
//           stop
//         </button>
//         <button className="reset-btn" onClick={resetTimer}>
//           reset
//         </button>
//       </>
//   )
// }
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
  };
  //============= this code for stop timer===========
  stopTimer = (e) => {
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
  };

  resetTimer = (e) => {
    this.stopTimer();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <h1 className="time">{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
          s > 9 ? s : "0" + s
        }`}</h1>
        <button className="start-btn" onClick={this.startTimer}>
          start
        </button>
        <button className="stop-btn" onClick={this.stopTimer}>
          stop
        </button>
        <button className="reset-btn" onClick={this.resetTimer}>
          reset
        </button>
        <button onClick={this.props.changeState} style={{background:this.props.isLight? "black" : "white",color:this.props.isLight? "white" :"black"}} className="reset-btn" >
        {this.props.isLight? "dark" : "light"}
        </button>
      </>
    );
  }
}

export default Timer;
