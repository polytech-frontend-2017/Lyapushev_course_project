import React, { Component } from 'react'


class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
	  
	  const URL1 = "http://api.openweathermap.org/data/2.5/forecast?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
	  
    fetch(URL).then(res => res.json()).then(json => {
		
      this.setState({ weatherData: json }); //Погода по дню http://openweathermap.org/current
    });
	
	fetch(URL1).then(res => res.json()).then(json => {
		
      this.setState({ weatherDataDay: json }); //Погода по дням http://openweathermap.org/forecast5
    });
  }
  render() {
	  
const weatherDataDay = this.state.weatherDataDay;
	
    const weatherData = this.state.weatherData;
    if (!weatherData || !weatherDataDay) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
	
	<div>
	
      <div> 
	  
        <h1>
          {weather.main} in {weatherData.name}
		  <p>{weatherData.sys.country}</p>
         <p> <img src={iconUrl} alt={weatherData.description} /> </p>
        </h1>
		
        <p>Current: {Math.round((weatherData.main.temp - 32) * (5 / 9))} °C</p>
        <p>High: {Math.round((weatherData.main.temp_max - 32) * (5 / 9))} °C</p>
        <p>Low: {Math.round((weatherData.main.temp_min - 32) * (5 / 9))} °C</p>
        <p>Wind Speed: {Math.round(weatherData.wind.speed*0.44704,-1)} m/s</p>
		
      </div>
	  
	  
	  
	  <div class = "forecast" id ="forecast">
	  
		<div class="block">
  
			<h1 class = "day"> Завтра</h1>
  <h2 class = "temp">{weatherDataDay.cod}</h2>
			
			// !!!!!!!!Добавить погоду на 5 дней. UTC, либо добавляем к текущей дате 1 день секундами, либо еще как-то
			
			
			
		</div>
		
		<div class="block">
			<h1 class = "day">Послезавтра </h1>
			<h2 class = "temp">1 </h2>
		</div>
		
		
		<div class="block">
			<h1 class = "day">ппЗавтра</h1>
			<h2 class = "temp">1 </h2>
		</div>
		
		<div class="block">
			<h1 class = "day">пппЗавтра</h1>
			<h2 class = "temp">1 </h2>
		</div>
		
		
		<div class="block">
			<h1 class = "day">ппппЗавтра</h1>
			<h2 class = "temp">1 </h2>
		</div>
		
	
		
	  </div>
	  
	  
	  </div>
	  
    );
  }
}


export default WeatherDisplay