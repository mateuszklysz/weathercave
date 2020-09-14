import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

export const Header = styled.h1`
  font-size: ${({ theme: { size } }) => size.l};
  margin-bottom: 10px;
`;
