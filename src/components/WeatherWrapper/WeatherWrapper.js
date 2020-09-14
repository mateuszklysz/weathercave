import React from "react";
import { Container } from "./WeatherWrapper.styles";
import Info from "../Info/Info";
import Map from "../Map/Map";

const WeatherWrapper = ({ data }) => {
  return (
    <Container>
      <Info data={data} />
      <Map data={data} />
    </Container>
  );
};

export default WeatherWrapper;
