import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

//const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const geoUrl =
  "https://raw.githubusercontent.com/Hesselt17/site/master/src/Pages/Wander/visited.json?token=AJ3QM4LBHELB5VDUAAA7ULTBDYGDG";

const TravelMap = ({ setTooltipContent, mapHeight, mapWidth }) => {
  return (
    <div>
      <ComposableMap
        data-tip=""
        projectionConfig={{ scale: 175 }}
        width={890}
        height={460}
        //style={{ width: "90%", height: "100%" }}
      >
        {/*<ZoomableGroup>*/}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME, VISITED } = geo.properties;
                  setTooltipContent(`${NAME} — ${VISITED}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {/*</ZoomableGroup>*/}
      </ComposableMap>
    </div>
  );
};

export default memo(TravelMap);
