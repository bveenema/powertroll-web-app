//Libs
import React from 'react';

// Material-UI Components
import RaisedButton from 'material-ui/RaisedButton';

//styles
const styles = {
  actionButtonStyles:{
    height: '100px',
    width: '100%',
    lineHeight: '18px',
    margin: '4px',
  },
  actionButtonText:{
    textAlign: 'left',
    padding: '4px',
  },
  actionButtonTextHeader:{
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  actionButtonTextSub:{
    fontSize: '0.7em',
    lineHeight: '1.2em',
    textIndent: '8px',
    opacity: '0.5',
  }
}

// Component
const ActionButton = (props) => {
  // Set type string
  let type = `at ${props.type.value}%`;

  // Set duration string
  let duration = `for ${props.duration}ms`
  // Set while string
  let until;
  if(typeof props.while !== 'undefined'){
    let direction = (props.while.invert) ? "under" : "over";
    let whileStringA = `until ${props.while.sensorName}`
    let whileStringB = `is ${direction} ${props.while.level}`;
    until = <div style={styles.actionButtonTextSub}>{whileStringA}<br />{whileStringB}</div>
  }

  return(
    <RaisedButton
      style={styles.actionButtonStyles}
      backgroundColor="rgba(63,191,63,0.8)"
      disabledBackgroundColor="rgba(191,65,63,0.2)"
      disabled={props.disabled}
      >
      <div style={styles.actionButtonText}>
        <div style={styles.actionButtonTextHeader}>{props.name}</div>
        <div style={styles.actionButtonTextSub}>{type}</div>
        <div style={styles.actionButtonTextSub}>{duration}</div>
        {until}
      </div>
    </RaisedButton>
  );
};

ActionButton.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
  }).isRequired,
  duration: React.PropTypes.number.isRequired,
  while: React.PropTypes.shape({
    sensorName: React.PropTypes.string.isRequired,
    level: React.PropTypes.number.isRequired,
    invert: React.PropTypes.bool.isRequired,
  }),
  disabled: React.PropTypes.bool,
};

ActionButton.defaultProps = {
  disable: false,
};

export default ActionButton;
