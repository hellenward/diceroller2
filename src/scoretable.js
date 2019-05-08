import React from 'react';
import TotalScore from './totalScore';

class Scoretable extends React.Component {
  render() {
    return (
      <div id="bitsToClear" className="scoreTable">
        <div>
          {this.props.throwArray.map((item, index) => {
            const sidesNumber = item.sidesNumber;
            const value = item.value;
            if (sidesNumber === 'fixed') {
              return (<p key={index} className="newThrow">Fixed modifier of {value}</p>);
            } else {
              if (value === sidesNumber) {
                return (<p key={index} className="newThrowGreen">You threw a {value} on a {sidesNumber}-sided die</p>);
              } else if (value === 1) {
                return (<p key={index} className="newThrowRed">You threw a 1 on a {sidesNumber}-sided die</p>);
              } else {
                return (<p key={index} className="newThrow">You threw a {value} on a {sidesNumber}-sided die</p>);
              }
            }
          })}
        </div>
        <div className="totalScore">
          <TotalScore throwArray={this.props.throwArray}/>
        </div>
      </div>
    );
  }
}

export default Scoretable;
