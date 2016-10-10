// libs
import React, { Component } from 'react';
import { find, forEach } from 'lodash'

// Material-UI Components
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

// Components
import SelectFieldWrapper from '../general/SelectFieldWrapper';
import InputWrapper from '../general/InputWrapper';

// Data
import templates from '../../data/templates';
import setupSettings from '../../data/setup1';

// Styles
const styles = {
  templateSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
}

// Component
class AddProcess1 extends Component {
  constructor(props){
    super(props)
    this.state ={
      settings: this.props.initialValues,
    }
    this.handleChange = this.handleChange.bind(this)
    this.checkTemplate = this.checkTemplate.bind(this)
  }

  checkTemplate(templateName) {
      let newState = this.state.settings
      if(templateName === 'Custom'){
        newState.enableCustom = true;
        this.setState({settings: newState})
      }else{
        let template = find(templates, {'name': templateName}).defaultSettings
        forEach(template, (value, key) => {
          newState[key] = value
        })
        this.setState({settings: newState})
      }
  }

  handleChange(event, value, id) {
    let newState = this.state.settings
    newState[id] = value;
    this.setState({settings: newState})
    if(id === 'template') {this.checkTemplate(value)}
  }

  render() {
    // Generate Template Names
      let templateNames = templates.map((template) => {return template.name});
      templateNames.unshift('Custom');
    // Generate Device Names
      let deviceNames = setupSettings.devices.map((device) => {return device.name});
    // Generate Sensor Names
      let sensorNames = setupSettings.sensors.map((sensor) => {return sensor.name});
    // Generate Load Type Names
      let loadTypeNames = setupSettings.loadTypes.map((loadType) => {return loadType.name});
    // Generate Control Type Names
      let controlTypeNames = setupSettings.controlTypes.map((controlType) => {return controlType.name});
    // Generate Control Method Names
      let controlMethodNames = setupSettings.controlMethods.map((controlMethod) => {return controlMethod.name});

      let {settings} = this.state
    return(
      <div className="select-boxes" style={styles.templateSelect}>
        <InputWrapper
          id="name"
          onChange={this.handleChange}
          initialValue={settings.name}>
          <TextField
            hintText='Make your name memorable'
            floatingLabelText="Name"
            fullWidth={true}
          />
        </InputWrapper>
        <SelectFieldWrapper
          id="template"
          floatingLabelText="Template"
          initialValue={settings.template}
          values={templateNames}
          texts={templateNames}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="device"
          floatingLabelText="Select a Device"
          initialValue={settings.device}
          values={deviceNames}
          texts={deviceNames}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="sensor"
          floatingLabelText="Select a Sensor"
          initialValue={settings.sensor}
          values={sensorNames}
          texts={sensorNames}
          handleChange={this.handleChange}
        />
        <InputWrapper
          id="enableCustom"
          onChange={this.handleChange}
          initialValue={settings.enableCustom}>
          <Toggle
            label="Customize"
            labelPosition="right"
          />
        </InputWrapper>


        <SelectFieldWrapper
          id="loadType"
          floatingLabelText="Type of Load"
          initialValue={settings.loadType}
          values={loadTypeNames}
          texts={loadTypeNames}
          disabled={!settings.enableCustom}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="controlType"
          floatingLabelText="Type of Control"
          initialValue={settings.controlType}
          values={controlTypeNames}
          texts={controlTypeNames}
          disabled={!settings.enableCustom}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="controlMethod"
          floatingLabelText="Control Method"
          initialValue={settings.controlMethod}
          values={controlMethodNames}
          texts={controlMethodNames}
          disabled={!settings.enableCustom}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

AddProcess1.propTypes = {
  onChange: React.PropTypes.func,
  initialValues: React.PropTypes.object,
}

AddProcess1.defaultProps = {

}

export default AddProcess1;
