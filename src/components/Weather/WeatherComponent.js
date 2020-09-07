import React from "react";
import styled from "styled-components";
import media from "../../utils/media";
import Info from "./Info";
import Map from "./Map";

const StyledContainer = styled.section`
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 500px;
  ${media.phone`
    width: 300px;
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
