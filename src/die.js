import React from 'react';

class Die extends React.Component {

  getValue() {
    return this.diceNumberInput.value;
  }

  render() {
    return (
      <div>
        <label className="formText">Number of D{this.props.size} rolled</label>
        <input
          className="formText"
          name="diceNumber"
          type="text"
          placeholder="0"
          ref={(input) => this.diceNumberInput = input}
        />
      </div>
    );
  }
}

export default Die;
