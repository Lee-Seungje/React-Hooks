import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, opctions) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, opctions);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, opctions);
    }
  };
  return fireNotification;
};

const App = () => {
  const tNotification = useNotification("당신은 김경수인가요?", {
    body: "맞다면 moondgod@gmail.com으로 인증을 해주세요 상품을 드립니다"
  });
  return (
    <div className="App">
      <button onClick={tNotification}>절대 누르지 마세요</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
