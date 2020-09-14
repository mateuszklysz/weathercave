import React from "react";
import { format } from "date-fns";
import Wind from "../../assets/svg/wind.svg";
import Pressure from "../../assets/svg/pressure.svg";
import Humidity from "../../assets/svg/humidity.svg";
import {
  FlexRow,
  StyledDate,
  City,
  Temp,
  DataContainer,
  Container,
  Icon,
  WindValue,
  PressureValue,
  HumidityValue,
} from "./Info.styles";

const Info = ({ data }) => {
  return (
    <>
      <StyledDate>
        {format(new Date(), "HH:mmaaaa iiii, MMMM d, yyyy")}
      </StyledDate>
      <FlexRow>
        <City>
          {data.name}, {data.sys.country}
        </City>
        <Temp>{Math.round(data.main.temp)}°</Temp>
      </FlexRow>
      <DataContainer>
        <Container>
          <Icon>
            <Wind />
          </Icon>
          <WindValue>{data.wind.speed} m/s</WindValue>
        </Container>
        <Container>
          <Icon>
            <Pressure />
          </Icon>
          <PressureValue>{data.main.pressure} hPa</PressureValue>
        </Container>
        <Container>
          <Icon>
            <Humidity />
          </Icon>
          <HumidityValue>{data.main.humidity}%</HumidityValue>
        </Container>
      </DataContainer>
    </>
  );
};

export default Info;
