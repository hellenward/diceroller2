import React from 'react';

class PresetButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.handleRoll(this.props.presets);
  }
  render() {
    return (
      <button onClick={this.onClick}>{this.props.label}</button>
    )
  }
}

export default PresetButton;
