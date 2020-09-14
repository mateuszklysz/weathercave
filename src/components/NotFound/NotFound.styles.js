import styled from "styled-components";

export const Text = styled.h1`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.l};
`;
