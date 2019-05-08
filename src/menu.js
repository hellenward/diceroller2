import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.goToRoller = this.goToRoller.bind(this);
    this.goToPresets = this.goToPresets.bind(this);
  }

  goToRoller() {
    this.props.setPage('Roller');
  }

  goToPresets() {
    this.props.setPage('Presets');
  }

  render() {
    return(
      <div>
        <button onClick={this.goToRoller}>Roller</button>
        <button onClick={this.goToPresets}>Presets</button>
      </div>
    )
  }
}

export default Menu;
