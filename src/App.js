import React, { Component } from "react";
import "./App.css";
import WeatherDisplay from "./WeatherDisplay.js";
import SearchBar from "./SearchBar.js";




const PLACES = [
  { name: "saint petersburg", zip: "" } // !!!!!Сюда вставить полученный город
];



class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
	
// !!!!Связать WeatherDisplay и SearchBar через redux(новый файл)
	
	
      <div className="App">
	  
	  <SearchBar />
	  
      <WeatherDisplay key={activePlace} zip={PLACES[activePlace].name} />
		
		
		
      </div>
    );
  }
}

export default App;
