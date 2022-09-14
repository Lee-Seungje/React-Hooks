import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullScreen = () => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "We are Empty");
  };
  const { element, triggerFull, exitFull } = useFullScreen();
  return (
    <div className="App">
      <div ref={element}>
        <img src="http://www.yonexmall.com/shop/data/skin/standard_C/img/banner/logo.jpg" />
        <button onClick={exitFull}>Make small Screnn</button>
      </div>
      <button onClick={triggerFull}>Make Full Screnn</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
