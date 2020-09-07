import React from "react";
import styled from "styled-components";
import media from "../../utils/media";

const StyledLang = styled.p`
  width: 250px;
  text-align: center;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
  ${media.tablet`
    display:none;
  `}
`;

const Language = () => {
  return <StyledLang>ENG</StyledLang>;
};

export default Language;
