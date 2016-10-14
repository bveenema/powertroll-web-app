// libs
import React, { Component } from 'react';
import { find, forEach } from 'lodash'

//Components
import Formsy from 'formsy-react';
import MenuItem from 'material-ui/MenuItem';
import { FormsySelect, FormsyText, FormsyToggle } from 'formsy-material-ui/lib';

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
    width: '100%',
  }
}

// Component
class AddProcess1 extends Component {
  constructor(props){
    super(props)
    this.state ={
      settings: this.props.initialValues,
      animal: 'cat',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleValid = this.handleValid.bind(this)
    this.handleInvalid = this.handleInvalid.bind(this)
    this.checkTemplate = this.checkTemplate.bind(this)
  }

  componentWillUnmount() {
    this.props.updateStore(this.state.settings)
  }

  checkTemplate(state, templateName) {
    if(templateName){
      let newState = state
      if(templateName === 'Custom'){
        newState.enableCustom = true;
      }else{
        let template = find(templates, {'name': templateName}).defaultSettings
        forEach(template, (value, key) => {
          newState[key] = value
        })
      }
      return newState
    }
    return state
  }

  handleValid() {
    if(this.isValid) return
    console.log('form1 is valid')
    this.isValid=true
    this.props.updateValidity(this.isValid)
  }

  handleInvalid() {
    if(!this.isValid) return
    this.isValid=false
    this.props.updateValidity(this.isValid)
  }

  handleChange(formValues, isChanged) {
    if(!isChanged) {return}
    let newState = this.checkTemplate(formValues,formValues.template)
    this.setState({settings: newState})
  }

  render() {
    // Generate Template MenuItems
      let templateNames = templates.map((template) => {return template.name});
      templateNames.unshift('Custom');
      let templateItems = templateNames.map((name, index) => {return (<MenuItem value={name} primaryText={name} key={index}/>)})
    // Generate Device MenuItems
      let deviceItems = setupSettings.devices.map((device, index) => {return (<MenuItem value={device.name} primaryText={device.name} key={index}/>)});
    // Generate Sensor Items
      let sensorItems = setupSettings.sensors.map((sensor, index) => {return (<MenuItem value={sensor.name} primaryText={sensor.name} key={index}/>)});
    // Generate Load Type Items
      let loadTypeItems = setupSettings.loadTypes.map((loadType, index) => {return (<MenuItem value={loadType.name} primaryText={loadType.name} key={index}/>)});
    // Generate Control Type Items
      let controlTypeItems = setupSettings.controlTypes.map((controlType, index) => {return (<MenuItem value={controlType.name} primaryText={controlType.name} key={index}/>)});
    // Generate Control Method Items
      let controlMethodItems = setupSettings.controlMethods.map((controlMethod, index) => {return (<MenuItem value={controlMethod.name} primaryText={controlMethod.name} key={index}/>)});

      let {settings} = this.state
    return(
      <Formsy.Form
        onChange={this.handleChange}
        onValid={this.handleValid}
        onInvalid={this.handleInvalid}
      >
        <div className="select-boxes" style={styles.templateSelect}>
          <FormsyText
            name="name"
            validations="isAlphanumeric"
            validationError="Only letters and numbers please"
            required
            hintText="Make your name memorable"
            floatingLabelText="Name*"
            value={settings.name}
            fullWidth={true}
          />
          <FormsySelect
            name="template"
            floatingLabelText="Template"
            value={settings.template}
          >
            {templateItems}
          </FormsySelect>
          <FormsySelect
            name="device"
            floatingLabelText="Device"
            value={settings.device}
            required
          >
            {deviceItems}
          </FormsySelect>
          <FormsySelect
            name="sensor"
            floatingLabelText="Sensor"
            value={settings.sensor}
            required
          >
            {sensorItems}
          </FormsySelect>

          <FormsyToggle
            name="enableCustom"
            label="Customize"
            value={settings.enableCustom}
          />
          <div hidden={!settings.enableCustom} style={styles.templateSelect}>
            <FormsySelect
              disabled={!settings.enableCustom}
              name="loadType"
              floatingLabelText="Load Type"
              value={settings.loadType}
              required={settings.enableCustom}
            >
              {loadTypeItems}
            </FormsySelect>
            <FormsySelect
              disabled={!settings.enableCustom}
              name="controlType"
              floatingLabelText="Control Type"
              value={settings.controlType}
              required={settings.enableCustom}
            >
              {controlTypeItems}
            </FormsySelect>
            <FormsySelect
              disabled={!settings.enableCustom}
              name="controlMethod"
              floatingLabelText="Control Method"
              value={settings.controlMethod}
              required={settings.enableCustom}
            >
              {controlMethodItems}
            </FormsySelect>
          </div>
        </div>
      </Formsy.Form>



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
