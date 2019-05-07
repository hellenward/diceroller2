import React from 'react';

class Roller extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const rollNumber = this.diceNumberInput.value;
    const sidesNumber = this.sidesNumberInput.value;
    this.props.handleRoll(sidesNumber, rollNumber);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset className="formStyle">
          <legend className="legendText">Roll your dice</legend>
            <label className="formText">Number of Dice rolled</label>
            <input
              className="formText"
              name="diceNumber"
              type="text"
              placeholder="0"
              ref={(input) => this.diceNumberInput = input}
            />
            <label className="formText">Number of Sides on Dice</label>
            <input
              className="formText"
              name="sidesNumber"
              type="text"
              placeholder="0"
              ref={(input) => this.sidesNumberInput = input}
            />
          <button className="submitButton" type="submit">Submit</button>
          <button className="resetButton" type="reset">Reset</button>
        </fieldset>
      </form>
    );
  }
}



export default Roller;
