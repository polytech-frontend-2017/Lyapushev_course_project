import React, { Component } from "react";
import ReactAutocomplete from "react-autocomplete";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onChangeCity(this.state.value);
  }
  
  handleChangeCity(event) {
    this.setState({ value: event.target.value });
  }
  
  render() {
    return (
      <div>
        <div role="search">
          <form onSubmit={this.handleSubmit}>
		  
            <ReactAutocomplete
              items={[
                { id: "Москва", label: "Москва" },
                { id: "Санкт-Петербург", label: "Санкт-Петербург" },
                { id: "Казань", label: "Казань" },
                { id: "Екатеринбург", label: "Екатеринбург" },
                { id: "Владивосток", label: "Владивосток" },
                { id: "Сочи", label: "Сочи" },
                { id: "Калининград", label: "Калининград" },
                { id: "Новосибирск", label: "Новосибирск" },
                { id: "Адлер", label: "Адлер" },
                { id: "Краснодар", label: "Краснодар" },
                { id: "Paris", label: "Paris" },
                { id: "Washington", label: "Washington" },
                { id: "Beijing", label: "Beijing" },
                { id: "Helsinki", label: "Helsinki" },
                { id: "Hanoi", label: "Hanoi" },
                { id: "Rome", label: "Rome" },
                { id: "Kiev", label: "Kiev" },
                { id: "Minsk", label: "Minsk" },
                { id: "London", label: "London" },
                { id: "Oslo", label: "Oslo" }
              ]}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
              getItemValue={item => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? "#eee" : "transparent"
                  }}
                >
                  {item.label}
                </div>
              )}
              inputProps={{ placeholder: "City" , className: "search-input"}}
              value={this.state.value}
              onChange={this.handleChangeCity}
              onSelect={value => this.setState({ value })}
            />

            <button type="submit">Поиск</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
