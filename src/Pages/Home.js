import "./Transition.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = ({ handleClickage, clickage }) => {
  return (
    <div>
      <header>
        <p>Tommy Hessel</p>
      </header>
      <div className="container">
        <div className="buttons">
          <Button
            id="top"
            onClick={() => handleClickage("top")}
            component={Link}
            to="/AboutMe"
          >
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
};

export default Home;
