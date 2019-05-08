import React from 'react';
import logo from './logo.svg';
import './App.css';
import Roller from './roller';
import Scoretable from './scoretable';
import Presets from './presets';
import Menu from './menu';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleRoll = this.handleRoll.bind(this);
    this.setPage = this.setPage.bind(this);
    this.state = {
      throwArray: [],
      sidesNumber: 0,
      currentPage: "Roller"
    };
  }

  handleRoll(rolls) {
    let throwArray = [];
    Object.keys(rolls).forEach(sidesNumber => {
      const rollNumber = parseInt(rolls[sidesNumber], 10);
      if(sidesNumber === 'fixed') {
        throwArray.push({
          sidesNumber: 'fixed',
          value: rollNumber
        });
      } else {
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
      }
    })
    console.log(throwArray);
    this.setState({throwArray: throwArray, sidesNumber: 0});
  }

  setPage(page) {
    this.setState({currentPage: page})
  }

  render() {
    let togglePage = <Roller handleRoll={this.handleRoll}/>;
    if(this.state.currentPage === "Roller") {
      togglePage = <Roller handleRoll={this.handleRoll}/>
    } else {
      togglePage = <Presets handleRoll={this.handleRoll}/>;
    }

    return (
      <div className="App">
        <h1>Dice Throw Calculator</h1>
        <div className="parentContainer">

          <Menu setPage={this.setPage}/>
          {togglePage}
          <Scoretable throwArray={this.state.throwArray} sidesNumber={this.state.sidesNumber} />

        </div>
      </div>
    );
  }
}

export default App;
