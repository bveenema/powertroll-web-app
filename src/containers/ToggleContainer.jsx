import React from 'react';
import { connect } from 'react-redux'
import { toggleCustomProcess } from '../actions';
import Toggle from 'material-ui/Toggle';

let ToggleContainer = ({isToggled,handleToggle}) => {
  return(
    <div>
      <Toggle
        className="pure-u-1-3"
        label="Customize"
        labelPosition="right"
        toggled={isToggled}
        onToggle={handleToggle}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('state Toggle', state.toggler);
  return {
    isToggled: state.toggler,
  }
};
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {isToggled} = stateProps;
  const {dispatch} = dispatchProps;
  return {
    ...stateProps,
    ...ownProps,
    handleToggle: () => {
      dispatch(toggleCustomProcess(isToggled));
    }

  }
};

ToggleContainer = connect(mapStateToProps,null,mergeProps)(ToggleContainer);

export default ToggleContainer;
