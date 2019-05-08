import React from 'react';
import Die from './die';
import PresetButton from './presetButton';

class Presets extends React.Component {
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset className="formStyle">
          <legend className="legendText">Presets</legend>
            <PresetButton label="1D20 plus 1D8" handleRoll={this.props.handleRoll} presets={{
              8: 1,
              20: 1
            }} />
            <PresetButton label="2D20 plus 1D8" handleRoll={this.props.handleRoll} presets={{
              20: 2,
              8: 1
            }} />
            <PresetButton label="1D20 plus 1D8 + 8 Modifier" handleRoll={this.props.handleRoll} presets={{
              20: 1,
              8: 1,
              fixed: 8
            }} />
            <PresetButton label="2D20 plus 1D8" handleRoll={this.props.handleRoll} presets={{
              20: 1,
              8: 1,
              6: 1,
              fixed: 8
            }} />
        </fieldset>
      </form>
    )
  }
}

export default Presets;

/*Examples of presets for my dwarf paladin would be:
- D20 and a D8 (weapon hit and damage)
- 2D20 and a D8 (weapon hit with Advantage, plus damage)
- D20 and a D8, with a +8 modifier on the D8 (roll to hit plus damage with associated modifiers).
- D20 and a D8 and a D6, +8 (roll to hit, plus damage, modifiers and the Hunter’s Mark spell)

Ideally you’d be able to customise which dice and modifiers were totalled together and which were displayed parallel. So in that final example I’d want the D20 shown as one result, and the D6, D8 and the +8 to be shown as a total.

If you could give them little headings when they’re displayed (so that total would be called ‘damage’ and the d20 would show as ‘hit’, that’d be cool).
*/
