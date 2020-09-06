import React from "react";
import styled from "styled-components";

const StyledText = styled.h1`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.l};
`;

const NotFound = () => {
  return <StyledText>Not Found...</StyledText>;
};

export default NotFound;
