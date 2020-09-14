import styled from "styled-components";
import media from "../../utils/media";

export const Lang = styled.p`
  width: 250px;
  text-align: center;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
  ${media.tablet`
    display:none;
  `}
`;
