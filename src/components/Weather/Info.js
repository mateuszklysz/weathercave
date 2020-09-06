import React from "react";
import styled from "styled-components";
import Icon from "../../assets/svg/cloud.svg";
import moment from "moment";

const StyledDate = styled.p`
  position: absolute;
  left: 0;
  top: 0;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  line-height: 33px;
`;

const StyledCity = styled.p`
  position: absolute;
  left: 0;
  top: 50px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.l};
  line-height: 33px;
`;

const StyledTemp = styled.p`
  position: absolute;
  left: 0;
  top: 120px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.xl};
  line-height: 33px;
`;

const StyledSmallTemp = styled.p`
  position: absolute;
  left: 90px;
  top: 135px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.s};
  line-height: 33px;
`;

const StyledContainer = styled.div`
  position: absolute;
  left: ${({ left }) => (left ? left : null)};
  right: ${({ right }) => (right ? right : null)};
  top: ${({ top }) => top};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 60px;
  /* background-color: green; */
`;

const StyledWind = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  line-height: 33px;
`;

const StyledWindValue = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  line-height: 33px;
`;

const StyledPressure = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  line-height: 33px;
`;

const StyledPressureValue = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  line-height: 33px;
`;

const Info = ({ data }) => {
  return (
    <>
      <StyledDate>{moment().format("h:mm a, dddd, MMMM D, YYYY")}</StyledDate>
      <StyledCity>
        {data.name}, {data.sys.country}
      </StyledCity>

      <StyledTemp>{Math.round(data.main.temp)}°</StyledTemp>
      <StyledSmallTemp>
        {Math.round(data.main.temp_min)}° - {Math.round(data.main.temp_max)}°
      </StyledSmallTemp>
      <StyledContainer top="190px">
        <StyledWind>Wind speed</StyledWind>
        <StyledWindValue>{data.wind.speed} m/s</StyledWindValue>
      </StyledContainer>
      <StyledContainer top="270px">
        <StyledPressure>Pressure</StyledPressure>
        <StyledPressureValue>{data.main.pressure} hPa</StyledPressureValue>
      </StyledContainer>
      <StyledContainer top="20px" right="50px">
        <StyledPressure>Humidity</StyledPressure>
        <StyledPressureValue>{data.main.humidity}%</StyledPressureValue>
      </StyledContainer>
    </>
  );
};

export default Info;
