import "./App.css";
import "./Transition.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";

function App() {
  const [clickage, setClickage] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClickage = (name) => {
    console.log(clickage);
    console.log(name);
    const buttonName = name;
    setClickage((prevState) => ({
      ...prevState,
      [buttonName]: !clickage[buttonName],
    }));
    var layerClass = "." + name + "-layer";
    console.log(layerClass);
  };

  /*const buttons = document.getElementsByTagName("button");

  for (const button of buttons) {
    button.addEventListener("click", () => {
      var id = button.getAttribute("id");
      var layerClass = "." + id + "-layer";
      var layers = document.querySelectorAll(layerClass);
      for (const layer of layers) {
        layer.classList.toggle("active");
      }
    });
  }*/
  return (
    <div>
      <header>
        <p>Tommy Hessel</p>
      </header>
      <div className="container">
        <div className="top-layer"></div>
        <div className="top-layer top-layer--2"></div>
        <div className="top-layer top-layer--3"></div>
        <div className="top-layer top-layer--4"></div>
        <div className="top-layer top-layer--5"></div>
        <div className="bottom-layer"></div>
        <div className="bottom-layer bottom-layer--2"></div>
        <div className="bottom-layer bottom-layer--3"></div>
        <div className="left-layer"></div>
        <div className="left-layer left-layer--2"></div>
        <div className="left-layer left-layer--3"></div>
        <div className="left-layer left-layer--4"></div>
        <div className="right-layer"></div>
        <div className="right-layer right-layer--2"></div>
        <div className="right-layer right-layer--3"></div>
        <div className="buttons">
          <Button id="top" onClick={() => handleClickage("top")}>
            Top
          </Button>
          <Button id="bottom" onClick={() => handleClickage("bottom")}>
            Bottom
          </Button>
          <Button id="left" onClick={() => handleClickage("left")}>
            Left
          </Button>
          <Button id="right" onClick={() => handleClickage("right")}>
            Right
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
