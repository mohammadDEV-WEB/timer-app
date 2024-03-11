import React, { useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import Hello from "./hello";
import Timer from "./time";

function Massage() {
  const [title,setTitle]=useState('سلام به همه')
  const [isLight, setIsLight] = useState(false);

  const changeState = () => {
    setIsLight(!isLight);
  };

  useEffect(() => {
    console.log("useEffect");
    return () => {};
  }, [isLight]);
  return (
      <div className="main" style={{background:isLight?"white":"black"}}>
        <div>
        <Hello title={title} />
        <Timer isLight={isLight} changeState={changeState} />
        </div>
      </div>
  );
}

export default Massage;
