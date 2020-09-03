import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";

const StyledContainer = styled.section`
  opacity: 0;
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
  const containerRef = useRef(null);
  useEffect(() => {
    if (enter) {
      gsap.fromTo(
        containerRef.current,
        { y: -50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1 }
      );
    } else {
      gsap.fromTo(
        containerRef.current,
        { y: 0, autoAlpha: 1 },
        { y: 50, autoAlpha: 0, duration: 1 }
      );
    }
  }, [enter]);
  return (
    <StyledContainer ref={containerRef}>
      <StyledHeader>Weathercave</StyledHeader>
      <SearchBar setEnter={setEnter} />
    </StyledContainer>
  );
};

export default IndexPage;
