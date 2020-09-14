import styled from "styled-components";
import media from "../../utils/media";

export const SearchContainer = styled.input`
  width: 450px;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: ${({ theme: { color } }) => color.dark};
  font-size: ${({ theme: { size } }) => size.s};
  -webkit-user-select: text;
  text-align: center;
  outline: none;
  ${media.phone`
    width: 320px;
  `}
  ${media.ip4`
    width: 250px;
  `}
`;
