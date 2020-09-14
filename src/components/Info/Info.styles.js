import styled from "styled-components";
import media from "../../utils/media";

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  ${media.phone`
    height: 60px;
  `}
`;

export const StyledDate = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.s};
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.ss};
  `}
`;

export const City = styled.div`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  line-height: 90px;
  text-overflow: ellipsis;
  font-size: ${({ theme: { size } }) => size.l};
  width: 350px;
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.xm};
    line-height: 60px;
  `}
`;

export const Temp = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  flex-grow: 1;
  line-height: 90px;
  text-align: center;
  font-size: ${({ theme: { size } }) => size.xl};
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.xm};
    line-height: 60px;
  `}
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  & > svg {
    padding-right: 5px;
    width: 40px;
    ${media.phone`
      width:30px;
    `}
  }
`;

export const WindValue = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.s};
  `}
  ${media.ip4`
    font-size: ${({ theme: { size } }) => size.ss};
  `}
`;

export const PressureValue = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.s};
  `}
  ${media.ip4`
    font-size: ${({ theme: { size } }) => size.ss};
  `}
`;

export const HumidityValue = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.s};
  `}
  ${media.ip4`
    font-size: ${({ theme: { size } }) => size.ss};
  `}
`;
