import styled from "styled-components";
import media from "../../utils/media";

export const Container = styled.section`
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 500px;
  ${media.tablet`
    margin-bottom:100px;
  `}
  ${media.phone`
    width: 300px;
  `}
`;
