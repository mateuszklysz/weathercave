import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import Shape from "../components/Shape/Shape";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

const StyledHeader = styled.h1`
  font-size: ${({ theme: { size } }) => size.l};
  margin-bottom: 10px;
`;

const IndexPage = () => {
  const [enter, setEnter] = useState(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (enter) {
      gsap.fromTo(
        wrapperRef.current,
        { y: -50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1 }
      );
    } else {
      gsap.fromTo(
        wrapperRef.current,
        { y: 0, autoAlpha: 1 },
        { y: 50, autoAlpha: 0, duration: 1 }
      );
    }
  }, [enter]);

  return (
    <div ref={wrapperRef} style={{ opacity: 0 }}>
      <StyledContainer>
        <StyledHeader>Weathercave</StyledHeader>
        <SearchBar setEnter={setEnter} />
      </StyledContainer>
      <Shape
        width="65%"
        height="65%"
        bottom="0"
        left="0"
        opacity="20%"
        blue={false}
      />
      <Shape
        width="50%"
        height="20%"
        top="0"
        left="40%"
        opacity="20%"
        blue={false}
      />
      <Shape
        width="10%"
        height="40%"
        bottom="0"
        right="0"
        opacity="30%"
        blue={false}
      />
    </div>
  );
};

export default IndexPage;
