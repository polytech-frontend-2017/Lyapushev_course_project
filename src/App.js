import React, { Component } from "react";
import "./App.css";
import WeatherDisplay from "./WeatherDisplay.js";
import SearchBar from "./SearchBar.js";

import ToggleBox from "./Info.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      icity: "Санкт-Петербург"
    };
  }
  handleChangeCity(CityItem) {
    this.setState({ icity: CityItem });
  }
  render() {
    return (
      <div className="App">
        <SearchBar
          value={this.state.icity}
          onChangeCity={this.handleChangeCity.bind(this)}
        />

        <WeatherDisplay zip={this.state.icity} />
		
        <ToggleBox title="Information">
          Приложение показывает температуру, скорость ветра, количество осадков
          на 5 дней. Для этого необходимо ввести название города на русском или
          английском языке в соответсвующем поле
        </ToggleBox>
      </div>
    );
  }
}

export default App;
