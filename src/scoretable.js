import React from 'react';
import TotalScore from './totalScore';

class Scoretable extends React.Component {
  render() {
    return (
      <div id="bitsToClear" className="scoreTable">
        <div>
          {this.props.throwArray.map((item, index) => {
              if (item === 20 && this.props.sidesNumber === 20) {
                return (<p key={index} className="newThrowGreen">You threw a 20</p>);
              } else if (item === 1 && this.props.sidesNumber === 20) {
                return (<p key={index} className="newThrowRed">You threw a 1</p>);
              } else {
                return (<p key={index} className="newThrow">You threw a {item}</p>);
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
