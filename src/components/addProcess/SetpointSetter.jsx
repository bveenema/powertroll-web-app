// libs
import React, {Component} from 'react';

//Components
import Formsy from 'formsy-react';
import MenuItem from 'material-ui/MenuItem';
import { FormsySelect, FormsyText, FormsyToggle } from 'formsy-material-ui/lib';

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
      settings: {}
    }
    this.handleChange = this.handleChange.bind(this)
    // setpoint: null,
    // toleranceEnabled: false,
    // toleranceType: 'Symmetric',
    // tolerancePlus: null,
    // toleranceMinus: null,
    // durationEnabled: false,
    // duration: null, // forever
    // durationType: 'Seconds',
  }

  componentWillUnmount() {
    //this.props.updateStore(this.state.settings)
  }

  handleChange(formValues, isChanged) {
    console.log('formValue', formValues)
    if(isChanged){this.setState({settings: formValues}, ()=>{
      console.log('newState', this.state.settings)
    })}
  }

  render() {
    let { settings } = this.state

    return (
      <Formsy.Form
        onChange={this.handleChange}
      >
        <FormsyText
          name="setpoint"
          validations="isNumeric"
          validationError="Only numbers please"
          required
          hintText={this.props.unit}
          floatingLabelText="Setpoint*"
          value={settings.setpoint}
          fullWidth={true}
        />
        <div>
          <FormsyToggle
            name="toleranceEnabled"
            label="Tolerance"
            value={settings.toleranceEnabled}
          />
        <div style={styles.row} hidden={!settings.toleranceEnabled}>
            <FormsyText
              style={{flex: '0 1 35%', marginRight: '5%'}}
              name="tolerancePlus"
              validations="isNumeric"
              validationError="Only numbers please"
              required
              floatingLabelText={(settings.toleranceType === 'symmetric') ? "Tolerance" : "Positive Tolerance"}
              value={settings.tolerancePlus}
            />
            <FormsySelect
              style={{flex: '0 1 55%'}}
              disabled={!settings.toleranceEnabled}
              name="toleranceType"
              floatingLabelText="Tolerance Type"
              value={settings.toleranceType}
            >
              <MenuItem value='symmetric' primaryText='Symmetric' />
              <MenuItem value='limit' primaryText='Limit' />
            </FormsySelect>
          </div>
        </div>
        <div>
          <FormsyToggle
            name="durationEnabled"
            label="Duration"
            value={settings.durationEnabled}
          />
        <div style={styles.row} hidden={!settings.durationEnabled}>
            <FormsyText
              style={{flex: '0 1 35%', marginRight: '5%'}}
              name="duration"
              validations="isNumeric"
              validationError="Only numbers please"
              required
              floatingLabelText="Time"
              value={settings.duration}
            />
            <FormsySelect
              style={{flex: '0 1 55%'}}
              disabled={!settings.durationEnabled}
              name="durationType"
              floatingLabelText="Duration Type"
              value={settings.durationType}
            >
              <MenuItem value='seconds' primaryText='Seconds' />
              <MenuItem value='minutes' primaryText='Minutes' />
              <MenuItem value='hours' primaryText='Hours' />
              <MenuItem value='days' primaryText='Days' />
            </FormsySelect>
          </div>
        </div>
      </Formsy.Form>
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
