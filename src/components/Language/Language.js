import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  position: absolute;
  right: 150px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100px;
`;

const StyledLang = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
`;

const Language = () => {
  return (
    <StyledContainer>
      <StyledLang>ENG</StyledLang>
    </StyledContainer>
  );
};

export default Language;
