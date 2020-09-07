import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import Wind from "../../assets/svg/wind.svg";
import Pressure from "../../assets/svg/pressure.svg";
import Humidity from "../../assets/svg/humidity.svg";
import media from "../../utils/media";

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  ${media.phone`
    height: 60px;
  `}
`;

const StyledDate = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.s};
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.ss};
  `}
`;

const StyledCity = styled.div`
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

const StyledTemp = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  width: 120px;
  line-height: 90px;
  text-align: center;
  font-size: ${({ theme: { size } }) => size.xl};
  ${media.phone`
    font-size: ${({ theme: { size } }) => size.xm};
    line-height: 60px;
  `}
`;

const StyledDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.div`
  & > svg {
    padding-right: 5px;
    width: 40px;
    ${media.phone`
      width:30px;
    `}
  }
`;

const StyledWindValue = styled.p`
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

const StyledPressureValue = styled.p`
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

const StyledHumidityValue = styled.p`
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

const Info = ({ data }) => {
  return (
    <>
      <StyledDate>
        {format(new Date(), "HH:mmaaaa iiii, MMMM d, yyyy")}
      </StyledDate>
      <FlexRow>
        <StyledCity>
          {data.name}, {data.sys.country}
        </StyledCity>
        <StyledTemp>{Math.round(data.main.temp)}°</StyledTemp>
      </FlexRow>
      <StyledDataContainer>
        <StyledContainer>
          <StyledIcon>
            <Wind />
          </StyledIcon>
          <StyledWindValue>{data.wind.speed} m/s</StyledWindValue>
        </StyledContainer>
        <StyledContainer>
          <StyledIcon>
            <Pressure />
          </StyledIcon>
          <StyledPressureValue>{data.main.pressure} hPa</StyledPressureValue>
        </StyledContainer>
        <StyledContainer>
          <StyledIcon>
            <Humidity />
          </StyledIcon>
          <StyledHumidityValue>{data.main.humidity}%</StyledHumidityValue>
        </StyledContainer>
      </StyledDataContainer>
    </>
  );
};

export default Info;
