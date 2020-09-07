import React from "react";
import styled from "styled-components";
import media from "../../utils/media";
import Info from "./Info";
import Map from "./Map";

const StyledContainer = styled.section`
  z-index: 10;
  position: relative;
  width: 700px;
  height: 400px;
  ${media.tablet`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 600px;
    height: 650px;
    bottom: 50px;
  `}
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
