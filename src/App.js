import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import EnergyStuff from "./Pages/EnergyStuff";
import Projects from "./Pages/Projects";
import Wander from "./Pages/Wander";

function App() {
  const [clickage, setClickage] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClickage = (name) => {
    console.log(name);
    console.log(clickage);
    const buttonName = name;
    setClickage((prevState) => ({
      ...prevState,
      [buttonName]: !clickage[buttonName],
    }));
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home handleClickage={handleClickage} clickage={clickage} />
          </Route>
          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>
          <Route exact path="/Energy">
            <EnergyStuff />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/Wander">
            <Wander />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
