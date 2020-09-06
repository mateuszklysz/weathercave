import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMapGL from "react-map-gl";

const StyledContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
`;

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

  useEffect(() => {
    setViewport({
      latitude: data.coord.lat,
      longitude: data.coord.lon,
      zoom: 11,
      pitch: 55.0,
    });
  }, [data]);

  return (
    <StyledContainer>
      <ReactMapGL
        {...mapSettings}
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        style={{ zIndex: 10 }}
      ></ReactMapGL>
    </StyledContainer>
  );
};

export default Map;
