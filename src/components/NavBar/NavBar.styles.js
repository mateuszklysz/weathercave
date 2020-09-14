import styled from "styled-components";
import media from "../../utils/media";

export const Container = styled.section`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  ${media.tablet`
    height: 120px;
    top: calc(100% - 120px);
  `}
  ${media.ip4`
    height: 100px;
    top: calc(100% - 100px);
  `}
`;
