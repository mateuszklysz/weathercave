import React, { useState, useEffect } from "react";
import ReactMapGL from "!react-map-gl";
import { Container } from "./Map.styles";

const mapSettings = {
  mapboxApiAccessToken: process.env.GATSBY_MAPS_API,
  mapStyle: "mapbox://styles/nickyy00/ckemjqtdj1cje19o2e2t60ry6",
  width: "100%",
  height: "100%",
};

const Map = ({ data }) => {
  const [viewport, setViewport] = useState({
    latitude: data.coord.lat,
    longitude: data.coord.lon,
    zoom: 11,
    pitch: 55.0,
  });

  useEffect(() => {
    setViewport({
      latitude: data.coord.lat,
      longitude: data.coord.lon,
      zoom: 11,
      pitch: 55.0,
    });
  }, [data]);

  return (
    <Container>
      <ReactMapGL
        {...mapSettings}
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        style={{ zIndex: 10 }}
      ></ReactMapGL>
    </Container>
  );
};

export default Map;
