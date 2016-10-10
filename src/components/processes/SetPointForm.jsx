// Libs
import React, {Component} from 'react';
import capitalize from 'lodash/capitalize';

// Material-UI Components
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

// Styles
const styles = {
  paper:{
    height: '100px',
    minWidth: '130px',
    margin: '4px',
    padding: '8px',
  },
  arrowDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  arrowButton:{
    padding: '0',
    height: '24px',
    width: '24px',
  },
  formDiv:{
    display: 'flex',
    alignItems: 'center',
  },
  inputDiv: {
    position: 'relative',
  },
  label : {
    lineHeight: '24px',
    position: 'absolute',
    right: '4px',
    bottom: '0',
    opacity: '0.3',
  },
  input:{
    width: '100%',
    height: '24px',
    boxSizing: 'border-box',
  },
  sensorName: {
    fontSize: '0.75em',
  },
  submit: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
  },
  submitButton: {
    height: '24px',
    lineHeight: '24px',
  }


}

// Component
class SetPointForm extends Component {
  constructor(props){
    super(props);
    this.state =  {
                    value: props.value,
                    originalValue: props.value,
                  };
    this.incrementUp = this.incrementUp.bind(this);
    this.incrementDown = this.incrementDown.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  incrementUp() {
    console.log("incrementUp");
    this.setState({value: this.state.value + 1});
  }

  incrementDown() {
    console.log("incrementDown");
    this.setState({value: this.state.value - 1});
  }

  onValueChange(e) {
    console.log('on Value Change');
    this.setState({value: e.target.value});
  }

  onInputBlur(e){
    console.log('onInputBlur');
    let newValue = parseFloat(e.target.value);
    this.setState({value: newValue});
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('onSubmit');
    let newValue = parseFloat(this.state.value);
    if(newValue === this.state.originalValue){
      console.log('value didnt change');
      return;
    }
    console.log('new value submitted!');
    this.setState({originalValue: newValue});
  }

  render() {
    // Capatalize props.controlled
    let controlled = capitalize(this.props.controlled);
    return(
      <Paper style={styles.paper}>
        <div style={styles.title}>
          {controlled} Setpoint
        </div>
        <form  onSubmit={this.onSubmit}>
          <div style={styles.formDiv} className="pure-g">

            <div className="pure-u-2-3" style={styles.inputDiv}>
              <input
                type="text" name="value" id="value" style={styles.input}
                value={this.state.value}
                onChange={this.onValueChange}
                onBlur={this.onInputBlur}
              />
              <label style={styles.label} htmlFor="value">{this.props.unit}</label>
            </div>
            <div  style={styles.arrowDiv} className="pure-u-1-3">
              <IconButton style={styles.arrowButton} onClick={this.incrementDown}>
                <NavigationChevronLeft />
              </IconButton>
              <IconButton style={styles.arrowButton}  onClick={this.incrementUp}>
                <NavigationChevronRight />
              </IconButton>
            </div>
          </div>
          <div style={styles.sensorName}>
            {this.props.sensorName}
          </div>
          <div style={styles.submit}>
            <RaisedButton primary={true} type="submit" style={styles.submitButton} fullWidth={true}>Update</RaisedButton>
          </div>
        </form>
      </Paper>
    )
  }
}

SetPointForm.propTypes = {
  controlled: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
  unit: React.PropTypes.string,
  sensorName: React.PropTypes.string.isRequired,
}

export default SetPointForm
