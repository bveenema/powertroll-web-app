// libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeActionCreator, updateActionCreator, updateActionValidity } from '../../actions'
import { findIndex, includes, capitalize } from 'lodash'

// CSS
import './ActionCreator.css'

// Components
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import Formsy from 'formsy-react'
import MenuItem from 'material-ui/MenuItem'
import { FormsySelect, FormsyText } from 'formsy-material-ui/lib'

class ActionCreator extends Component {
  constructor(props){
    super(props)
    this.state = {
      settings: props.data
    }
    this.isValid = false
    this.handleChange = this.handleChange.bind(this)
    this.handleValid = this.handleValid.bind(this)
    this.handleInvalid = this.handleInvalid.bind(this)
    this.renderActionSpecifier = this.renderActionSpecifier.bind(this)
    this.renderActionTime = this.renderActionTime.bind(this)
  }

  handleChange(formValues, isChanged) {
    if(!isChanged) return
    this.setState({settings: formValues})
    this.props.updateStore(formValues)
  }

  handleValid() {
    if(this.isValid) return
    this.isValid=true
    this.props.updateValidity(this.isValid)
  }

  handleInvalid() {
    if(!this.isValid) return
    this.isValid=false
    this.props.updateValidity(this.isValid)
  }

  renderActionSpecifier(actionType) {
    if(includes(['duty','setpoint'],actionType)) {
      return (
        <FormsyText
          className="ContentText"
          name='actionValue'
          validations="isNumeric"
          validationError="Only numbers please"
          required
          floatingLabelText={capitalize(actionType)}
          value={this.state.settings.actionValue}
        />
      )
    }
    return null
  }

  renderActionTime(durationType) {
    if(includes(['seconds','minutes','hours','days'],durationType)) {
      return (
        <FormsyText
          className="ContentText"
          name='durationValue'
          validations="isNumeric"
          validationError="Only numbers please"
          required
          floatingLabelText={capitalize(durationType)}
          value={this.state.settings.durationValue}
        />
      )
    }
    return null
  }
  render () {
    let { settings } = this.state
    return (
      <Formsy.Form
        onChange={this.handleChange}
        onValid={this.handleValid}
        onInvalid={this.handleInvalid}
      >
        <Paper className="ActionCreator">
          <div className="Header">
            <h1>Add Action</h1>
            <FormsyText
              className="HeaderText"
              name='name'
              validations="isWords"
              validationError="No numbers"
              required
              floatingLabelText='Action Name'
              hintText="Short and Concise"
              value={settings.name}
              fullWidth={true}
            />
          </div>
          <div className="Content">
            <span className="ContentWords">Turn {this.props.deviceName}</span>
            <FormsySelect
              className="ContentSelect"
              name="actionType"
              floatingLabelText="Action"
              required
              value={settings.actionType}
            >
              <MenuItem value='on' primaryText='On' />
              <MenuItem value='off' primaryText='Off' />
              <MenuItem value='toggle' primaryText='Toggle On/Off' />
              <MenuItem value='duty' primaryText='Duty' />
              <MenuItem value='setpoint' primaryText='Setpoint' />
              <MenuItem value='curve' primaryText='Follow Curve' />
            </FormsySelect>
            {this.renderActionSpecifier(settings.actionType)}
          </div>
          <div className="Content">
            <span className="ContentWords">for</span>
              {this.renderActionTime(settings.durationType)}
            <FormsySelect
              className="ContentSelect"
              name="durationType"
              floatingLabelText="Time"
              required
              value={settings.durationType}
            >
              <MenuItem value='forever' primaryText='Forever' />
              <MenuItem value='seconds' primaryText='Seconds' />
              <MenuItem value='minutes' primaryText='Minutes' />
              <MenuItem value='hours' primaryText='Hours' />
              <MenuItem value='days' primaryText='Days' />
            </FormsySelect>
          </div>
          <FlatButton
            className="RemoveButton"
            label="Remove Action"
            onClick={this.props.removeAction}
          />
        </Paper>
      </Formsy.Form>
    )
  }

}

const mapStateToProps  = (state, ownProps) => {
  let index = findIndex(state.actionCreators, {'id': ownProps.id})
  return{
    deviceName: state.processField.Form1.device || 'device',
    data: state.actionCreators[index],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateStore: (data) => {dispatch(updateActionCreator(ownProps.id, data))},
    updateValidity: (isValid) => {dispatch(updateActionValidity(ownProps.id, isValid))},
    removeAction: () => {dispatch(removeActionCreator(ownProps.id))},
  }
}

ActionCreator = connect(mapStateToProps,mapDispatchToProps)(ActionCreator)

export default ActionCreator
