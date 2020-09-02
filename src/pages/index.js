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
  margin-bottom: 10px;
`;

const IndexPage = () => {
  return (
    <>
      <StyledContainer>
        <StyledHeader>Weathercave</StyledHeader>
        <SearchBar />
      </StyledContainer>
    </>
  );
};

export default IndexPage;
