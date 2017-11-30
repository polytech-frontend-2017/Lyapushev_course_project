import React, { Component } from "react";

function Day(date) {
  var datee = new Date(0);
  datee.setUTCSeconds(date);

  var dat = datee.getDay();

  if (dat == 1) {
    return "Mon";
  }
  if (dat == 2) {
    return "Tue";
  }
  if (dat == 3) {
    return "Wed";
  }
  if (dat == 4) {
    return "Thu";
  }
  if (dat == 5) {
    return "Fri";
  }
  if (dat == 6) {
    return "Sat";
  }
  if (dat == 0) {
    return "Sun";
  }
}

function toC(date) {
  return Math.round((date - 32) * (5 / 9));
}

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      weatherDataDay: null
    };
  }
  componentDidMount() {
    this.fetchWeatherData(this.props.zip);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.zip != nextProps.zip) {
      this.fetchWeatherData(nextProps.zip);
    }
  }
  fetchWeatherData(zip) {
    let URL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";

    let URL1 =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";

    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({ weatherData: json });
      });

    fetch(URL1)
      .then(res => res.json())
      .then(json => {
        this.setState({ weatherDataDay: json });
      });
  }

  render() {
    let weatherDataDay = this.state.weatherDataDay;

    let weatherData = this.state.weatherData;

    if (!weatherData || !weatherDataDay) return <div>Loading</div>;

    if (weatherData.cod == 404 || weatherDataDay.cod == 404)
      return <div>City not found</div>;

    let weather = weatherData.weather[0];

    let iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <div>
          <h1>
            {weather.main} in {weatherData.name}
            <p>{weatherData.sys.country}</p>
            <p>
              {" "}
              <img src={iconUrl} alt={weatherData.description} />{" "}
            </p>
          </h1>

          <p>Current: {toC(weatherData.main.temp)} °C</p>
          <p>High: {toC(weatherData.main.temp_max)} °C</p>
          <p>Low: {toC(weatherData.main.temp_min)} °C</p>
          <p>
            Wind Speed: {Math.round(weatherData.wind.speed * 0.44704, -1)} m/s
          </p>
        </div>

        <div className="forecast" id="forecast">
          <div className="block">
            <h1 className="day">{Day(weatherDataDay.list[1].dt)}</h1>
            <h2 className="temp">{toC(weatherDataDay.list[1].main.temp)} °C</h2>
          </div>

          <div className="block">
            <h1 className="day">{Day(weatherDataDay.list[9].dt)}</h1>
            <h2 className="temp">{toC(weatherDataDay.list[9].main.temp)} °C</h2>
          </div>

          <div className="block">
            <h1 className="day">{Day(weatherDataDay.list[17].dt)}</h1>
            <h2 className="temp">
              {toC(weatherDataDay.list[17].main.temp)} °C
            </h2>
          </div>

          <div className="block">
            <h1 className="day">{Day(weatherDataDay.list[25].dt)}</h1>
            <h2 className="temp">
              {toC(weatherDataDay.list[25].main.temp)} °C
            </h2>
          </div>

          <div className="block">
            <h1 className="day">{Day(weatherDataDay.list[33].dt)}</h1>
            <h2 className="temp">
              {toC(weatherDataDay.list[33].main.temp)} °C
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;
