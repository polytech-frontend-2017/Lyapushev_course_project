import React, { Component } from "react";

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
      <div className="searchbar-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            size="56"
            placeholder="City"
            onChange={this.handleChangeCity}
            value={this.state.value}
          />

          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
