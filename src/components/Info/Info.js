import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../../assets/svg/cloud.svg";
import moment from "moment";
import axios from "axios";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
`;

const StyledText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.m};
  line-height: 33px;
`;

const StyledLargeText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: ${({ theme: { size } }) => size.l};
`;

const StyledIcon = styled(Icon)`
  height: 50px;
`;

const StyledTemp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const Info = ({ data }) => {
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data[0].toLowerCase()}&units=metric&appid=${
          process.env.GATSBY_WEATHER_API
        }`
      )
      .then(response => {
        setResult(response.data);
      })
      .then(() => {
        setReady(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, [data]);
  if (ready) {
    return (
      <StyledContainer>
        <StyledText>{moment().format("h:mma, dddd, MMMM D, YYYY")}</StyledText>
        <StyledLargeText>
          {result.name}, {result.sys.country}
        </StyledLargeText>
        <StyledTemp>
          <StyledLargeText>{Math.round(result.main.temp)}°C</StyledLargeText>
          <StyledIcon />
        </StyledTemp>
        <StyledText>Wind speed - {result.wind.speed} m/s</StyledText>
      </StyledContainer>
    );
  } else {
    return null;
  }
};

export default Info;
