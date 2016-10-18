//libs
import React from 'react';
import { connect } from 'react-redux'
import { addActionCreator } from '../../actions'

// Components
import RaisedButton from 'material-ui/RaisedButton'
import SetpointSetterContainer from '../../containers/SetpointSetterContainer'
import ActionCreator from './ActionCreator'

let AddProcess2 = (props) => {
  let modules = props.modules.map((module,index) => {
    switch (module.name) {
      case 'setpoint':
        return <SetpointSetterContainer key={index}/>
      case 'actionCreator':
        return (
          <ActionCreator key={index} id={module.id} />
        )
      default:
        return <p key={index}>Oops! {module} module not implemented</p>
      }
  })
  return (
    <div className="add-process-2">
      {modules}
      <RaisedButton
        label="Add an Action"
        primary
        onClick={props.addAction}
      />
    </div>
  );
};

AddProcess2.propTypes = {
  modules: React.PropTypes.array,
}

AddProcess2.defaultProps = {
  modules: ['setpoint'],
}

const mapStateToProps = (state) => {
  let modulesToRender = []
  modulesToRender[0] = {name: state.processField.Form1.controlType}
  let startingIndex = modulesToRender.length
  state.actionCreators.forEach((actionCreator,index) => {
    modulesToRender[startingIndex+index] = {name: 'actionCreator', id: actionCreator.id}
  })
  return {
    modules: modulesToRender
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAction: () => {console.log('clicked'); dispatch(addActionCreator())}
  }
}


AddProcess2 = connect(mapStateToProps,mapDispatchToProps)(AddProcess2)

export default AddProcess2;
