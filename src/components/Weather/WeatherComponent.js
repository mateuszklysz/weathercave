import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Map from "./Map";

const StyledContainer = styled.section`
  z-index: 10;
  position: relative;
  width: 700px;
  height: 400px;
  /* background-color: red; */
`;

const WeatherComponent = ({ data }) => {
  return (
    <StyledContainer>
      <Info data={data} />
      <Map data={data} />
    </StyledContainer>
  );
};

export default WeatherComponent;
