import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
