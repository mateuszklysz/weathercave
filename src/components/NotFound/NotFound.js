import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledText = styled.h1`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.l};
`;

const NotFound = () => {
  return (
    <StyledContainer>
      <StyledText>Not Found...</StyledText>
    </StyledContainer>
  );
};

export default NotFound;
