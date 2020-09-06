import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import gsap from "gsap";
import NavBar from "../components/NavBar/NavBar";
import WeatherComponent from "../components/Weather/WeatherComponent";
import NotFound from "../components/NotFound/NotFound";
import Shape from "../components/Shape/Shape";

const StyledContainer = styled.main`
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
    const tl = gsap.timeline();
    tl.fromTo(
      [containerRef.current, ".shapesContainer"],
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 2, stagger: 2, ease: "Power1.easeInOut" }
    ).fromTo(
      ".shapesContainer div",
      { x: -50 },
      { x: 0, duration: 3, stagger: 0.1, ease: "Power1.easeInOut" }
    );
  }, []);

  useEffect(() => {
    gsap.to(
      [containerRef.current.children[1], containerRef.current.children[2]],
      { y: 15, autoAlpha: 0 }
    );

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
        setFound(true);
      })
      .catch(() => {
        setFound(false);
      })
      .then(() => {
        gsap.to(containerRef.current.children, {
          y: 0,
          autoAlpha: 1,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputData[0]]);

  return (
    <>
      <StyledContainer ref={containerRef}>
        <NavBar />
        {found ? <WeatherComponent data={result} /> : <NotFound />}
      </StyledContainer>
      <div className="shapesContainer">
        <Shape
          width="35%"
          height="10%"
          top="10%"
          right="0"
          opacity="30%"
          blue={true}
        />
        <Shape
          width="45%"
          height="20%"
          top="0"
          right="0"
          opacity="20%"
          blue={true}
        />
        <Shape
          width="7%"
          height="25%"
          top="15%"
          left="0"
          opacity="60%"
          blue={true}
        />
        <Shape
          width="12%"
          height="30%"
          bottom="3%"
          left="3%"
          opacity="20%"
          blue={true}
        />
        <Shape
          width="50%"
          height="20%"
          bottom="0"
          left="40%"
          opacity="20%"
          blue={true}
        />
        <Shape
          width="20%"
          height="20%"
          top="40%"
          right="15%"
          opacity="20%"
          blue={true}
        />
        <Shape
          width="27%"
          height="30%"
          top="27%"
          left="30%"
          opacity="30%"
          blue={true}
        />
      </div>
    </>
  );
};

export default Weather;
