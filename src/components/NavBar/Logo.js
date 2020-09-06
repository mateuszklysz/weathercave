import React from "react";
import styled from "styled-components";

const StyledLogo = styled.p`
  width: 250px;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
`;

const Logo = () => {
  return <StyledLogo>Weathercave</StyledLogo>;
};

export default Logo;
