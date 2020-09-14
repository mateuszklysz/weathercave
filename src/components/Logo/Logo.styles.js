import styled from "styled-components";
import media from "../../utils/media";
import { Link } from "gatsby";

export const StyledLogo = styled(Link)`
  width: 250px;
  text-align: center;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { size } }) => size.m};
  font-weight: bold;
  text-decoration: none;
  ${media.tablet`
    display: none;
  `}
`;
