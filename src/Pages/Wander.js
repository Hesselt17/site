import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./Style.css";

import TravelMap from "./Widgets/TravelMap";

const Wander = () => {
  const [content, setContent] = useState("");
  return (
    <div>
      <div>Wander</div>
      <TravelMap setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Wander;
