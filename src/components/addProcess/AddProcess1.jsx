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
    }
    this.handleChange = this.handleChange.bind(this)
    this.checkTemplate = this.checkTemplate.bind(this)
  }

  componentWillUnmount() {
    this.props.updateStore(this.state.settings, 1)
  }

  checkTemplate(templateName) {
    if(templateName){
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
  }

  handleChange(formValues, isChanged) {
    if(isChanged){this.setState({settings: formValues})}
    this.checkTemplate(formValues.template)
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
          >
            {deviceItems}
          </FormsySelect>
          <FormsySelect
            name="sensor"
            floatingLabelText="Sensor"
            value={settings.sensor}
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
            >
              {loadTypeItems}
            </FormsySelect>
            <FormsySelect
              disabled={!settings.enableCustom}
              name="controlType"
              floatingLabelText="Control Type"
              value={settings.controlType}
            >
              {controlTypeItems}
            </FormsySelect>
            <FormsySelect
              disabled={!settings.enableCustom}
              name="controlMethod"
              floatingLabelText="Control Method"
              value={settings.controlMethod}
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
