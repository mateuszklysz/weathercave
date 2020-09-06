import React from "react";
import styled, { css } from "styled-components";

const StyledShape = styled.div`
  z-index: ${({ blue }) => (blue ? "0" : "-1")};
  position: fixed;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ blue, theme: { color } }) =>
    blue
      ? css`
          ${color.cloudy}
        `
      : css`
          ${color.dark}
        `};
`;

const Shapes = ({ width, height, top, bottom, left, right, opacity, blue }) => {
  return (
    <StyledShape
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      opacity={opacity}
      blue={blue}
    />
  );
};

export default Shapes;
