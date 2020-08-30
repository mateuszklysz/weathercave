import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";

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
`;

const IndexPage = () => {
  return (
    <>
      <StyledContainer>
        <StyledHeader>Check My Weather</StyledHeader>
        <SearchBar />
      </StyledContainer>
    </>
  );
};

export default IndexPage;
