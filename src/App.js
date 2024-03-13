import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hello from "./hello";
import Timer from "./time";
// import Information from "./imotional"
import TestContext from "./testContext";
import SaveItem from "./listSaveTime";

function Massage() {
  const [title,setTitle]=useState('سلام به همه')
  const [isLight, setIsLight] = useState(false);
  const [saveTime,setSaveTime] = useState([])


  const changeTitle=(text)=>{
    setTitle(text)
  }

  const changeState = () => {
    setIsLight(!isLight);
    if (isLight==false) {
      changeTitle("وایی چشامم😫")
    }else(
      changeTitle("الان خوبه😉")
    )
  };

  // useEffect(() => {
  //   console.log("useEffect");
  //   return () => {};
  // }, [isLight]);
  return (
    <TestContext.Provider value={{setSaveTime, saveTime}}>
      <div className="main" style={{background:isLight?"white":"black"}}>
        <div>
        {/* <Information/> */}
        <Hello 
        title={title}/>
        <Timer 
        changeTitle={changeTitle}
        setTitle={setTitle}
        isLight={isLight} 
        changeState={changeState}/>
        <SaveItem/>
        </div>
      </div> 
    </TestContext.Provider>   
  );
}

export default Massage;
