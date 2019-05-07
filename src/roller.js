import React from 'react';
import Die from './die';

class Roller extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.handleRoll({
      4: this.d4.getValue(),
      6: this.d6.getValue(),
      8: this.d8.getValue(),
      10: this.d10.getValue(),
      12: this.d12.getValue(),
      20: this.d20.getValue(),
      100: this.d100.getValue()
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset className="formStyle">
          <legend className="legendText">Roll your dice</legend>
            <Die size={4} ref={(input) => this.d4 = input}/>
            <Die size={6} ref={(input) => this.d6 = input} />
            <Die size={8} ref={(input) => this.d8 = input} />
            <Die size={10} ref={(input) => this.d10 = input} />
            <Die size={12} ref={(input) => this.d12 = input} />
            <Die size={20} ref={(input) => this.d20 = input} />
            <Die size={100} ref={(input) => this.d100 = input} />
          <button className="submitButton" type="submit">Submit</button>
          <button className="resetButton" type="reset">Reset</button>
        </fieldset>
      </form>
    );
  }
}



export default Roller;
