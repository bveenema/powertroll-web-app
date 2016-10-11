import React from 'react';
import Formsy from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

const Test = React.createClass({



  getInitialState() {
    return {
      canSubmit: false,
    };
  },

  errorMessages: {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  },

  styles: {
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  //mixins: [Formsy.Mixin],

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  },

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  handleChange(formValues, isChanged) {
    console.log('formValues',formValues)
    console.log('isChanged', isChanged)
  },



  render() {
    // Formsy.addValidationRule('isFruit', function (values, value) {
    //   return ['apple', 'orange', 'pear'].indexOf(value) >= 0;
    // });

    let {switchStyle, submitStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;

    return (
      <Formsy.Form
        className="pure-u-1"
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onValidSubmit={this.submitForm}
        onInvalidSubmit={this.notifyFormError}
        onChange={this.handleChange}
      >

        <FormsyText
          name="name"
          validations="isAlphanumeric"
          validationError="Only letters and numbers please"
          required
          hintText="Make your name memorable"
          floatingLabelText="Name*"
          value=""
        />
        <FormsySelect
          name="template"
          floatingLabelText="Template"
          initialValue='never'
        >
          <MenuItem value={'never'} primaryText="Never" />
          <MenuItem value={'nightly'} primaryText="Every Night" />
          <MenuItem value={'weeknights'} primaryText="Weeknights" />
        </FormsySelect>



{/*


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
            <FormsyDate
              name="date"
              required
              floatingLabelText="Date"
            />
            <FormsyTime
              name="time"
              required
              floatingLabelText="Time"
            />
            <FormsySelect
              name="frequency"
              required
              floatingLabelText="How often do you?"
              menuItems={this.selectFieldItems}
            >
              <MenuItem value={'never'} primaryText="Never" />
              <MenuItem value={'nightly'} primaryText="Every Night" />
              <MenuItem value={'weeknights'} primaryText="Weeknights" />
            </FormsySelect>
            <FormsyCheckbox
              name="agree"
              label="Do you agree to disagree?"
              style={switchStyle}
            />
            <FormsyToggle
              name="toggle"
              label="Toggle"
              style={switchStyle}
            />
            <FormsyRadioGroup name="shipSpeed" defaultSelected="not_light">
              <FormsyRadio
                value="light"
                label="prepare for light speed"
                style={switchStyle}
              />
              <FormsyRadio
                value="not_light"
                label="light speed too slow"
                style={switchStyle}
              />
              <FormsyRadio
                value="ludicrous"
                label="go to ludicrous speed"
                style={switchStyle}
                disabled={true}
              />
            </FormsyRadioGroup>
            <FormsyText
              name="name"
              validations="isWords"
              validationError={wordsError}
              required
              hintText="What is your name?"
              floatingLabelText="Name"
            />
            <FormsyText
              name="age"
              validations="isNumeric"
              validationError={numericError}
              hintText="Are you a wrinkly?"
              floatingLabelText="Age (optional)"
            />
            <FormsyText
              name="url"
              validations="isUrl"
              validationError={urlError}
              required
              hintText="http://www.example.com"
              floatingLabelText="URL"
              updateImmediately
            />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
            />

            */}
          </Formsy.Form>
    );
  },
});

export default Test;
