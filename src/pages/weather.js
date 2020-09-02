import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from "../components/Logo/Logo";
import Language from "../components/Language/Language";
import Info from "../components/Info/Info";
import Map from "../components/Map/Map";

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
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState("");

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputData[0].toLowerCase()}&units=metric&appid=${
        process.env.GATSBY_WEATHER_API
      }`
    )
    .then(response => {
      setResult(response.data);
    })
    .then(() => {
      setReady(true);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <>
      <StyledContainer>
        <Logo />
        <Language />
        {ready ? <Info data={result} /> : null}
        <Map data={result} />
      </StyledContainer>
    </>
  );
};

export default Weather;
