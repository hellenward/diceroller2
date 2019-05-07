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
              if (value === 20 && sidesNumber === 20) {
                return (<p key={index} className="newThrowGreen">You threw a 20 / 20</p>);
              } else if (value === 1 && sidesNumber === 20) {
                return (<p key={index} className="newThrowRed">You threw a 1 / 20</p>);
              } else {
                return (<p key={index} className="newThrow">You threw a {value} / {sidesNumber}</p>);
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
