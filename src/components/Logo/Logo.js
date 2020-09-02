import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  position: absolute;
  left: 200px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100px;
`;

const StyledLogo = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
`;

const Logo = () => {
  return (
    <StyledContainer>
      <StyledLogo>Weathercave</StyledLogo>
    </StyledContainer>
  );
};

export default Logo;
