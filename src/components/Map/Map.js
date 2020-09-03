import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const mapSettings = {
  mapboxApiAccessToken: process.env.GATSBY_MAPS_API,
  mapStyle: "mapbox://styles/nickyy00/ckemjqtdj1cje19o2e2t60ry6",
  width: "500px",
  height: "300px",
};

const Map = ({ data }) => {
  const [viewport, setViewport] = useState({
    latitude: data.coord.lat,
    longitude: data.coord.lon,
    zoom: 11,
    pitch: 55.0,
  });

  return (
    <ReactMapGL
      {...mapSettings}
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
    ></ReactMapGL>
  );
};

export default Map;
