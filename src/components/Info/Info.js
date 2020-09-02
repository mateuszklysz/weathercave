import React from "react";
import styled from "styled-components";
import Icon from "../../assets/svg/cloud.svg";
import moment from "moment";

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
  return (
    <StyledContainer>
      <StyledText>{moment().format("h:mma, dddd, MMMM D, YYYY")}</StyledText>
      <StyledLargeText>
        {data.name}, {data.sys.country}
      </StyledLargeText>
      <StyledTemp>
        <StyledLargeText>{Math.round(data.main.temp)}°C</StyledLargeText>
        <StyledIcon />
      </StyledTemp>
      <StyledText>Wind speed - {data.wind.speed} m/s</StyledText>
    </StyledContainer>
  );
};

export default Info;
