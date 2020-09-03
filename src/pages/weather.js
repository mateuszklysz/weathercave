import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import gsap from "gsap";
import Logo from "../components/Logo/Logo";
import Language from "../components/Language/Language";
import Info from "../components/Info/Info";
import Map from "../components/Map/Map";

const StyledContainer = styled.main`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to top,
    ${({ theme: { color } }) => color.brightly},
    ${({ theme: { color } }) => color.cloudy}
  );
`;

const Weather = props => {
  const inputData = props["*"].split("/");
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (ready) {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 2 }
      );
      gsap.fromTo(
        containerRef.current.children,
        { x: -10, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 2 }
      );
    }
  }, [ready]);

  return (
    <StyledContainer ref={containerRef}>
      {ready ? (
        <>
          <Logo />
          <Language />
          <Info data={result} />
          <Map data={result} />
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </StyledContainer>
  );
};

export default Weather;
