import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
`;

const StyledLang = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
`;

const Language = () => {
  return (
    <>
      <StyledContainer>
        <StyledLang>ENG</StyledLang>
      </StyledContainer>
    </>
  );
};

export default Language;
