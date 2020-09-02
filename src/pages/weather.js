import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo/Logo";
import Language from "../components/Language/Language";
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
        <Logo />
        <Language />
        <Info data={inputData} />
      </StyledContainer>
    </>
  );
};

export default Weather;
