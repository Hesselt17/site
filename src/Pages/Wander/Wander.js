import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import TravelMap from "./TravelMap";

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
