import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Container, Header } from "../styles/index.styles";
import SearchBar from "../components/SearchBar/SearchBar";
import Shape from "../components/Shape/Shape";

const IndexPage = () => {
  const [enter, setEnter] = useState(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (enter) {
      gsap.fromTo(
        wrapperRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1 }
      );
    } else {
      gsap.fromTo(
        wrapperRef.current,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 1 }
      );
    }
  }, [enter]);

  return (
    <div ref={wrapperRef} style={{ opacity: 0 }}>
      <Container>
        <Header>Weathercave</Header>
        <SearchBar setEnter={setEnter} />
      </Container>
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
