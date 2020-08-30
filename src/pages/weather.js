import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Info from "../components/Info/Info";

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    ${({ theme: { color } }) => color.brightly},
    ${({ theme: { color } }) => color.cloudy}
  );
`;

const Weather = props => {
  const inputData = props["*"].split("/");

  return (
    <>
      <StyledContainer>
        <NavBar />
        <Info data={inputData} />
      </StyledContainer>
    </>
  );
};

export default Weather;
