import React from "react";
import axios from "axios";

const Weather = props => {
  let inputData = ["error", "en"];
  inputData = props["*"].split("/");
  const fetchWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputData[0].toLowerCase}&appid=${process.env.GATSBY_WEATHER_API}`
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // fetchWeather();
  return (
    <>
      <h1>Weather working</h1>
      {}
    </>
  );
};

export default Weather;
