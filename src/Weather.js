import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import WeatherInfo from "./WeatherInfo";

dotenv.config();

const Weather = ({ location }) => {
  const [data, setData] = useState({current: [], location: []});

  useEffect(() => {
    const fetchWeather = async () => {
      const params = {
        key: process.env.REACT_APP_API_KEY,
        q: location
      };
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/current.json`,{ params });
      setData({ current: response.data.current, location: response.data.location });
    };

    fetchWeather();
  }, []);

  console.log(data);

  if (data.location.length < 1) {
    return "LOADING";
  }

  return (
    <>
      <WeatherInfo data={data} />
    </>
  );
};

export default Weather;
