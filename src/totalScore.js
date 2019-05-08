import React from 'react';

class TotalScore extends React.Component {
  render() {
    const totalThrowArray = this.props.throwArray.reduce((partial_sum, a) => partial_sum + a.value, 0);
    return (
      <p className="totalScore">Total score: {totalThrowArray}</p>
    )
  }
}

export default TotalScore;
