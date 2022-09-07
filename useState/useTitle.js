import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle,[title])
  return setTitle;
}

const App = () => {
  const titleUpdate = useTitle("Loading...");
  const sayHello = () => {
    console.log("Hello");
  };
  const [number, setNumber] = useState(0);
  useEffect(sayHello, [number]);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
