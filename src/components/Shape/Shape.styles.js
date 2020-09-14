import styled, { css } from "styled-components";

export const Shape = styled.div`
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
