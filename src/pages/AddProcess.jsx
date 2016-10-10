// Libs
import React, {Component} from 'react';
import Measure from 'react-measure';
import { has } from 'lodash';

// Material UI Components
import Paper from 'material-ui/Paper';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

// Components
import AddProcess1Container from '../containers/AddProcess1Container';
import AddProcess2 from '../components/addProcess/AddProcess2';


class AddProcess extends Component {
  constructor(props){
    super(props)
    this.state = {
      stepIndex: 0,
      stepCompleted: [false],
      showLabels: false,
    };
    this.processInfo = {};
    this.numSteps = 3;
    this.onMeasure = this.onMeasure.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
    this.handleStepData = this.handleStepData.bind(this);
    this.checkFormCompleted = this.checkFormCompleted.bind(this);
  }

  onMeasure(dimensions) {
    this.setState({
      showLabels: (dimensions.width > 300) ? true : false,
    });
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if(stepIndex < (this.numSteps - 1)){
      this.setState({
        stepIndex: stepIndex + 1
      });
    }else{
      this.handleFinish();
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handleFinish() {
    console.log("Finished!");
  }

  handleStepData(data) {
    this.processInfo[data.id] = data.value;
    console.log('processInfo', this.processInfo);
    this.checkFormCompleted();
  }

  checkFormCompleted() {
    if(this.state.stepIndex === 0){
      if(this.processInfo.template && this.processInfo.template !== "Custom"){
        let checkKeys = ['name','device','sensor'];
        let isComplete = checkKeys.every((key) => has(this.processInfo, key))
        console.log('complete:',isComplete);
      }else{
        let checkKeys = ['device','sensor','loadType','controlType','controlMethod'];
        let isComplete = checkKeys.every((key) => has(this.processInfo, key))
        console.log('complete:',isComplete);
      }
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (<AddProcess1Container />);
      case 1:
        return (<AddProcess2 />);
      default:
        return 'Somethings on Fire! Go Back.. now!!!';
    }
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === (this.numSteps - 1) ? 'Add Process' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex,showLabels} = this.state;

    return (
      <Measure onMeasure={this.onMeasure}>
        <Paper className="pure-u-1">
            <Stepper activeStep={stepIndex} orientation='horizontal'>
              <Step>
                <StepLabel>{showLabels && ('Setup')}</StepLabel>
              </Step>
              <Step>
                <StepLabel>{showLabels && ('Settings')}</StepLabel>
              </Step>
              <Step>
                <StepLabel>{showLabels && ('Review')}</StepLabel>
              </Step>
            </Stepper>
            <div style={{margin: '0 16px'}}>
              {this.getStepContent(stepIndex)}
              {this.renderStepActions(stepIndex)}
            </div>
        </Paper>
      </Measure>
    );
  }
}

export default AddProcess;
