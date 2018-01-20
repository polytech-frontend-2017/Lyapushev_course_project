import React, { Component } from "react";

class ToggleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }

  render() {
    const { title, children } = this.props;
    const { opened } = this.state;
    return (
      <div role="banner" className="box" id="box">
        <button
          role="textbox"
          className="boxTitle"
          id="boxTitle"
          onClick={this.toggleBox}
        >
          {title}
        </button>
        {opened &&
          children && (
            <div role="Note" className="boxContent" id="boxContent">
              {children}
            </div>
          )}
      </div>
    );
  }
}

export default ToggleBox;
