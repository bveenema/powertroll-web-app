// libs
import React, { Component } from 'react';
import {find} from 'lodash';

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
    this.state = {
      customize: false,
      currentTemplate: '',
      templateDefined: {
        loadType: this.props.initalValues.loadType,
        controlType: this.props.initalValues.controlType,
        controlMethod: this.props.initalValues.controlMethod,
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.setTemplateDefinedStates = this.setTemplateDefinedStates.bind(this);
  }

  componentWillMount(){
    let {initalValues} = this.props;
    if(initalValues.template){
      this.setTemplateDefinedStates(initalValues.template)
    }
  }

  setTemplateDefinedStates(templateName){
    let templateObject = find(templates, {'name':templateName});
    if(templateObject){
      this.setState({templateDefined: {
        loadType: templateObject.defaultSettings.loadType,
        controlType: templateObject.defaultSettings.controlType,
        controlMethod: templateObject.defaultSettings.controlMethod,
      }});
    }
  }

  handleChange(event, value, id) {
    if(id === 'template'){
      this.setState({currentTemplate: value});
      if(value === 'Custom'){
        this.setState({customize: true})
      }else{
        this.setTemplateDefinedStates(value);
      }
    }
    this.props.onChange({value,id});
  }

  handleToggle(){
    if(this.state.currentTemplate === 'Custom'){
      return
    }
    this.setState({customize: !this.state.customize});
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

      let {initalValues} = this.props;
    return(
      <div className="select-boxes" style={styles.templateSelect}>
        <InputWrapper
          id="name"
          onChange={this.handleChange}
          initialValue={initalValues.name}>
          <TextField
            hintText='Make your name memorable'
            floatingLabelText="Name"
            fullWidth={true}
          />
        </InputWrapper>
        <SelectFieldWrapper
          id="template"
          floatingLabelText="Template"
          initialValue={initalValues.template}
          values={templateNames}
          texts={templateNames}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="device"
          floatingLabelText="Select a Device"
          initialValue={initalValues.device}
          values={deviceNames}
          texts={deviceNames}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="sensor"
          floatingLabelText="Select a Sensor"
          initialValue={initalValues.sensor}
          values={sensorNames}
          texts={sensorNames}
          handleChange={this.handleChange}
        />
        <Toggle
          className="pure-u-1-3"
          label="Customize"
          labelPosition="right"
          toggled={this.state.customize}
          onToggle={this.handleToggle}
        />


        <SelectFieldWrapper
          id="loadType"
          floatingLabelText="Type of Load"
          initialValue={this.state.templateDefined.loadType}
          values={loadTypeNames}
          texts={loadTypeNames}
          disabled={!this.state.customize}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="controlType"
          floatingLabelText="Type of Control"
          initialValue={this.state.templateDefined.controlType}
          values={controlTypeNames}
          texts={controlTypeNames}
          disabled={!this.state.customize}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="controlMethod"
          floatingLabelText="Control Method"
          initialValue={this.state.templateDefined.controlMethod}
          values={controlMethodNames}
          texts={controlMethodNames}
          disabled={!this.state.customize}
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
