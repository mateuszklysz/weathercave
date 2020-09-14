import styled from "styled-components";
import media from "../../utils/media";

export const Container = styled.div`
  width: 500px;
  height: 300px;
  ${media.phone`
  width: 300px;
  height: 200px;
`}
`;
