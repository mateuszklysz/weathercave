import React from "react";
import styled from "styled-components";
import moment from "moment";
import media from "../../utils/media";

const StyledDate = styled.p`
  position: absolute;
  left: 0;
  top: 0;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  text-align: center;
  ${media.tablet`
    position: static;
  `}
`;

const StyledCity = styled.p`
  position: absolute;
  left: 0;
  top: 40px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.l};
  ${media.tablet`
    margin-top: 10px;
    position: static;
  `}
`;

const StyledTemp = styled.p`
  position: absolute;
  left: 5px;
  top: 110px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.xl};
  ${media.tablet`
    position: static;
  `}
`;

const StyledSmallTemp = styled.p`
  position: absolute;
  left: 95px;
  top: 155px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.s};
  ${media.tablet`
    position: static;
  `}
`;

const StyledDataContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;

const StyledContainer = styled.div`
  position: absolute;
  left: ${({ left }) => (left ? left : null)};
  right: ${({ right }) => (right ? right : null)};
  top: ${({ top }) => top};
  display: flex;
  flex-direction: column;
  justify-content: row;
  align-items: center;
  width: 170px;
  height: 60px;
  ${media.tablet`
    position: static;
    width: 200px;
  `}
  ${media.phone`
    width: 106.666666667px;
  `}
  ${media.ip4`
    width: 100px;
  `}
`;

const StyledWind = styled.p`
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

const StyledPressure = styled.p`
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

const StyledHumidity = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.xm};
  ${media.tablet`
    font-size: ${({ theme: { size } }) => size.m};
  `}
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
      <StyledDate>{moment().format("h:mma, dddd, MMMM D, YYYY")}</StyledDate>
      <StyledCity>
        {data.name}, {data.sys.country}
      </StyledCity>
      <StyledTemp>{Math.round(data.main.temp)}°</StyledTemp>
      <StyledSmallTemp>
        {Math.round(data.main.temp_min)}° - {Math.round(data.main.temp_max)}°
      </StyledSmallTemp>
      <StyledDataContainer>
        <StyledContainer top="200px">
          <StyledWind>Wind speed</StyledWind>
          <StyledWindValue>{data.wind.speed} m/s</StyledWindValue>
        </StyledContainer>
        <StyledContainer top="280px">
          <StyledPressure>Pressure</StyledPressure>
          <StyledPressureValue>{data.main.pressure} hPa</StyledPressureValue>
        </StyledContainer>
        <StyledContainer top="20px" right="50px">
          <StyledHumidity>Humidity</StyledHumidity>
          <StyledHumidityValue>{data.main.humidity}%</StyledHumidityValue>
        </StyledContainer>
      </StyledDataContainer>
    </>
  );
};

export default Info;
