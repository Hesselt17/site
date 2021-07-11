import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../Style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
  },
}));

const Home = ({ handleClickage, clickage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            About Me
          </Button>
          <Button
            id="bottom"
            onClick={() => handleClickage("bottom")}
            component={Link}
            to="/Projects"
          >
            Projects
          </Button>
          <Button
            id="left"
            onClick={() => handleClickage("left")}
            component={Link}
            to="/Wander"
          >
            Wander
          </Button>
          <Button
            id="right"
            onClick={() => handleClickage("right")}
            component={Link}
            to="/Energy"
          >
            Energy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
