import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import gsap from "gsap";
import NavBar from "../components/NavBar/NavBar";
import Info from "../components/Info/Info";
import Map from "../components/Map/Map";
import NotFound from "../components/NotFound/NotFound";

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
  const [found, setFound] = useState(false);
  const [result, setResult] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 3 }
    );
    console.log(containerRef.current.children);
  }, []);

  useEffect(() => {
    if (found) {
      gsap.to(
        [containerRef.current.children[1], containerRef.current.children[2]],
        { y: 15, autoAlpha: 0 }
      );
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputData[0].toLowerCase()}&units=metric&appid=${
          process.env.GATSBY_WEATHER_API
        }`
      )
      .then(response => {
        console.log(response);

        setResult(response.data);
      })
      .then(() => {
        setFound(true);
      })
      .catch(() => {
        setFound(false);
      })
      .then(() => {
        if (found) {
          gsap.to(containerRef.current.children, {
            y: 0,
            autoAlpha: 1,
          });
        }
      });

    console.log("pętla");
  }, [inputData[0]]);

  return (
    <>
      <StyledContainer ref={containerRef}>
        <NavBar />
        {found ? (
          <>
            <Info data={result} />
            <Map data={result} />
          </>
        ) : (
          <>
            <NotFound />
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default Weather;
