import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ data }) => {

  console.log(data);

  return (
    <div className="WeatherInfo">
      <h1>
        {data.location.name}, {data.location.region}
      </h1>

      <div className="WeatherHeader">
        <div className="WeatherHeader-Left">
          <img
            id="currentWeatherImg"
            src={data.current.condition.icon}
            alt={data.current.condition.text}
          />

          <h1>{data.current.condition.text}</h1>
        </div>

        <div className="WeatherHeader-Right">
          <h1 id="current-temp">{data.current.temp_f}&deg; </h1>
          <p>Feels: {data.current.feelslike_f}&deg;</p>
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <td>Humidity</td>
            <td>{data.current.humidity}</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>{data.current.wind_mph}</td>
          </tr>
          <tr>
            <td>Wind Direction</td>
            <td>{data.current.wind_dir}</td>
          </tr>
          <tr>
            <td>Gust</td>
            <td>{data.current.gust_mph}</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{data.current.pressure_in}</td>
          </tr>
          <tr>
            <td>Precipitation</td>
            <td>{data.current.precip_in}</td>
          </tr>
          <tr>
            <td>UV</td>
            <td>{data.current.uv}</td>
          </tr>
          <tr>
            <td>Last Updated</td>
            <td>{data.current.last_updated}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherInfo;
