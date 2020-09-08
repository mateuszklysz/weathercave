import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: color }) => color.white};
`;

const NotFound = () => {
  return <StyledBackground />;
};
export default NotFound;
