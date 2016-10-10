// libs
import React, {Component} from 'react';

// Material UI Components
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle'

// Components
import SelectFieldWrapper from '../general/SelectFieldWrapper';

// Styles
const styles = {
  row: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
}

class SetpointSetter extends Component {
  constructor(props){
    super(props);
    this.state = {
      setpoint: null,
      toleranceEnabled: false,
      toleranceType: 'Symmetric',
      tolerancePlus: null,
      toleranceMinus: null,
      durationEnabled: false,
      duration: null, // forever
      durationType: 'Seconds',
    }
    this.handleToleranceToggle = this.handleToleranceToggle.bind(this);
    this.handleDurationToggle = this.handleDurationToggle.bind(this);

  }

  handleDurationToggle() {
    this.setState({durationEnabled: !this.state.durationEnabled});
  }

  handleToleranceToggle() {
    this.setState({toleranceEnabled: !this.state.toleranceEnabled})
  }

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.unit}
          floatingLabelText="Setpoint"
          fullWidth={true}
        />
        <div>
          <Toggle
            label="Tolerance"
            toggled={this.state.toleranceEnabled}
            onToggle={this.handleToleranceToggle}/>
          <div style={styles.row} hidden={!this.state.toleranceEnabled}>
            <TextField
              style={{flex: '0 1 35%', marginRight: '5%'}}
              hintText={this.state.toleranceType}
              floatingLabelText="Tolerance"
            />
            <SelectFieldWrapper
              style={{flex: '0 1 55%'}}
              id="toleranceType"
              floatingLabelText="Type"
              values={['Symmetric', 'Limit']}
              texts={['Symmetric', 'Limit']}
            />
          </div>
        </div>
        <div>
          <Toggle
            label="Duration"
            toggled={this.state.durationEnabled}
            onToggle={this.handleDurationToggle}/>
          <div style={styles.row} hidden={!this.state.durationEnabled}>
            <TextField
              style={{flex: '0 1 35%', marginRight: '5%'}}
              hintText={this.state.durationType}
              floatingLabelText="Time"
            />
            <SelectFieldWrapper
              initialValue={this.state.durationType}
              style={{flex: '0 1 55%'}}
              id="durationType"
              values={['Seconds', 'Minutes', 'Hours', 'Days']}
              texts={['Seconds', 'Minutes', 'Hours', 'Days']}
            />
          </div>
        </div>
      </div>
    )
  }
}

SetpointSetter.propTypes = {
  unit: React.PropTypes.string,
}

SetpointSetter.defaultProps = {
  unit: 'add a unit!'
}

export default SetpointSetter;
