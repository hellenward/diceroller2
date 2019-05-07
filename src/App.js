import React from 'react';
import logo from './logo.svg';
import './App.css';
import Roller from './roller';
import Scoretable from './scoretable';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleRoll = this.handleRoll.bind(this);
    this.state = {
      throwArray: [],
      sidesNumber: 0
    };
  }

  handleRoll(rolls) {
    let throwArray = [];
    Object.keys(rolls).forEach(sidesNumber => {
      const rollNumber = parseInt(rolls[sidesNumber], 10);
      sidesNumber = parseInt(sidesNumber, 10);
      if (!isNaN(rollNumber) && (!isNaN(sidesNumber)) ) {
        for (let i = 0; i < rollNumber; i++) {
          let result = Math.floor(Math.random() * sidesNumber + 1);
          throwArray.push({
            sidesNumber: sidesNumber,
            value: result
          });
        }
      }
    })
    console.log(throwArray);
    this.setState({throwArray: throwArray, sidesNumber: 0});
  }

  render() {
    return (
      <div className="App">
        <h1>Dice Throw Calculator</h1>
        <div className="parentContainer">

          <Roller handleRoll={this.handleRoll}/>
          <Scoretable throwArray={this.state.throwArray} sidesNumber={this.state.sidesNumber} />

        </div>
      </div>
    );
  }
}

export default App;
