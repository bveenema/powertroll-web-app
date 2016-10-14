//libs
import React from 'react';
import { connect } from 'react-redux'

// Components
import SetpointSetterContainer from '../../containers/SetpointSetterContainer';

const AddProcess2 = (props) => {
  let modules = props.modules.map((module,index) => {
    switch (module) {
      case 'SetpointSetter':
        return <SetpointSetterContainer key={index}/>
      default:
        return <p key={index}>Oops! {module} module not implemented</p>
      }
  })
  return (
    <div className="add-process-2">
      {modules}
    </div>
  );
};

AddProcess2.propTypes = {
  modules: React.PropTypes.array,
}

AddProcess2.defaultProps = {
  modules: ['SetpointSetter'],
}

const mapStateToProps = (state) => {
  let stepCompleted = []
  stepCompleted[0] = state.processField.Form1.isValid
  return {
    stepIndex: state.addProcess.stepIndex,
    stepIsComplete: stepCompleted,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStep: (newStep) => dispatch(updateAddProcessStep(newStep))
  }
}

AddProcess2 = connect(mapStateToProps,mapDispatchToProps)(AddProcess2)

export default AddProcess2;
