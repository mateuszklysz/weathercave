import React from "react";
import styled from "styled-components";

const StyledLang = styled.p`
  width: 250px;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
`;

const Language = () => {
  return <StyledLang>ENG</StyledLang>;
};

export default Language;
