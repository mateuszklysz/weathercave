import React from "react";
import styled from "styled-components";
import media from "../../utils/media";
import { Link } from "gatsby";

const StyledLargeLogo = styled(Link)`
  width: 250px;
  text-align: center;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
  text-decoration: none;
  ${media.tablet`
    display: none;
  `}
`;

const StyledSmallLogo = styled(Link)`
  display: none;
  width: 250px;
  text-align: center;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
  text-decoration: none;
  ${media.tablet`
    display: block;
  `}
`;

const Logo = () => {
  return (
    <>
      <StyledLargeLogo to="/">Weathercave</StyledLargeLogo>
      <StyledSmallLogo to="/">WC</StyledSmallLogo>
    </>
  );
};

export default Logo;
