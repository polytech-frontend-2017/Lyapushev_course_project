import React, { Component } from "react";
import "./App.css";
import WeatherDisplay from "./WeatherDisplay.js";
import SearchBar from "./SearchBar.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      icity: "saint petersburg"
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
      </div>
    );
  }
}

export default App;
