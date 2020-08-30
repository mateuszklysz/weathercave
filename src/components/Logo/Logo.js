import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
`;

const StyledLogo = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.xm};
  font-weight: bold;
`;

const Logo = () => {
  return (
    <>
      <StyledContainer>
        <StyledLogo>CMW</StyledLogo>
      </StyledContainer>
    </>
  );
};

export default Logo;
