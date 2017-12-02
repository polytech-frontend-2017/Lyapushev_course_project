import React, { Component } from "react";

function Day(date) {
  var datee = new Date(0);
  datee.setUTCSeconds(date);

  var dat = datee.getDay();

  if (dat === 1) {
    return "Mon";
  }
  if (dat === 2) {
    return "Tue";
  }
  if (dat === 3) {
    return "Wed";
  }
  if (dat === 4) {
    return "Thu";
  }
  if (dat === 5) {
    return "Fri";
  }
  if (dat === 6) {
    return "Sat";
  }
  if (dat === 0) {
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
    if (this.props.zip !== nextProps.zip) {
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
      return <h1 className="head">City not found</h1>;

    let weather = weatherData.weather[0];

    let w1 = weatherDataDay.list[1].weather[0];
    let w2 = weatherDataDay.list[9].weather[0];
    let w3 = weatherDataDay.list[17].weather[0];
    let w4 = weatherDataDay.list[25].weather[0];
    let w5 = weatherDataDay.list[33].weather[0];

    let iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

    let icon1 = "http://openweathermap.org/img/w/" + w1.icon + ".png";
    let icon2 = "http://openweathermap.org/img/w/" + w2.icon + ".png";
    let icon3 = "http://openweathermap.org/img/w/" + w3.icon + ".png";
    let icon4 = "http://openweathermap.org/img/w/" + w4.icon + ".png";
    let icon5 = "http://openweathermap.org/img/w/" + w5.icon + ".png";

    return (
      <div>
        <h1 className="head">
          {weather.main} in {weatherData.name}
          <p>{weatherData.sys.country}</p>
        </h1>

        <div className="forecast1" id="forecast1">
          <div className="icon">
            <img
              src={iconUrl}
              width="150"
              height="160"
              alt={weatherData.description}
            />
          </div>

          <div className="cent">
            <h2 className="temp">Current: {toC(weatherData.main.temp)} °C</h2>
            <h2 className="temp">High: {toC(weatherData.main.temp_max)} °C</h2>
            <h2 className="temp">Low: {toC(weatherData.main.temp_min)} °C</h2>
            <h2 className="temp">
              Wind Speed: {Math.round(weatherData.wind.speed * 0.44704, -1)} m/s
            </h2>
          </div>
        </div>

        <div className="forecast" id="forecast">
          <div className="block1">
            <h1 className="day">{Day(weatherDataDay.list[1].dt)}</h1>
            <img src={icon1} />
            <h2 className="temp">{toC(weatherDataDay.list[1].main.temp)} °C</h2>
          </div>

          <div className="block2">
            <h1 className="day">{Day(weatherDataDay.list[9].dt)}</h1>
            <img src={icon2} />
            <h2 className="temp">{toC(weatherDataDay.list[9].main.temp)} °C</h2>
          </div>

          <div className="block3">
            <h1 className="day">{Day(weatherDataDay.list[17].dt)}</h1>
            <img src={icon3} />
            <h2 className="temp">
              {toC(weatherDataDay.list[17].main.temp)} °C
            </h2>
          </div>

          <div className="block4">
            <h1 className="day">{Day(weatherDataDay.list[25].dt)}</h1>
            <img src={icon4} />
            <h2 className="temp">
              {toC(weatherDataDay.list[25].main.temp)} °C
            </h2>
          </div>

          <div className="block5">
            <h1 className="day">{Day(weatherDataDay.list[33].dt)}</h1>
            <img src={icon5} />
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
