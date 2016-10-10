// libs
import React, {Component} from 'react'

// Formsy Components
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import FormsyToggle from 'formsy-material-ui/lib/FormsyToggle'

// Material UI Components
import RaisedButton from 'material-ui/RaisedButton'

// Components
import InputWrapper from '../general/InputWrapper';


class Test extends Component{
  constructor(props){
    super(props)
    this.state = {
      canSubmit: false
    }
    this.styles = {
      paperStyle: {
        width: 300,
        margin: 'auto',
        padding: 20,
      },
      switchStyle: {
        marginBottom: 16,
      },
      submitStyle: {
        marginTop: 32,
      },
    }
    this.errorMessages = {
      wordsError: "Please only use letters",
      numericError: "Please provide a number",
      urlError: "Please provide a valid URL",
    }
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;

    return (
      <Formsy.Form
        className="pure-u-1"
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onValidSubmit={this.submitForm}
        onInvalidSubmit={this.notifyFormError}
      >
        <FormsyToggle
          name="toggle"
          label="Toggle"
          style={switchStyle}
        />
        <FormsyText
          name="name"
          validations="isWords"
          validationError={wordsError}
          required
          hintText="What is your name?"
          floatingLabelText="Name"
        />
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
      </Formsy.Form>
    )
  }
}

export default Test
