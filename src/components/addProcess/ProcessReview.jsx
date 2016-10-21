// libs
import React from 'react'
import { connect } from 'react-redux'
import { omit } from 'lodash'

// CSS
import './ProcessReview.css'

// Components

// Component
let ProcessReview = ({processName, setupInfo, processInfo, actionInfo}) => {
  console.log('ProcessReview', processName, setupInfo, processInfo, actionInfo)
  let setupList = (
    <ul className="SetupList">
      <li>Troll: {setupInfo.device}</li>
      <li>Template: {setupInfo.template}</li>
      <li>Sensor: {setupInfo.sensor}</li>
      <li>Load Type: {setupInfo.loadType}</li>
      <li>Control Type: {setupInfo.controlType}</li>
      <li>Control Method: {setupInfo.controlMethod}</li>
    </ul>
  )
  let processList = (
    <ul className="ProcessList">
      <li>Setpoint: {processInfo.setpoint}</li>
      <li>Tolerance: {processInfo.tolerancePlus} {processInfo.toleranceType}</li>
      <li>Duration: {processInfo.duration} {processInfo.durationType}</li>
    </ul>
  )
  let actionList = actionInfo.map((action,index) => {
    return (
      <div key={index}>
        <h4>{action.name}</h4>
        <ul className="ActionInfo">
          <li>Action: {action.actionValue} {action.actionType}</li>
          <li>Duration: {action.durationValue} {action.durationType}</li>
        </ul>
      </div>
    )
  })
  return (
    <div>
      <p>These are the settings we're going to run {setupInfo.device} with.</p>
      <h4>Setup</h4>
        {setupList}
      <h4>Settings</h4>
        {processList}
      {actionList}
      <p>Go back and change any mistakes. Click "Add Process" to upload your new process to {setupInfo.device}.</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  let setupInfo = omit(state.processField.Form1, 'name')
  return {
    processName: state.processField.Form1.name,
    setupInfo: setupInfo,
    processInfo: state.processField.setpointSetter,
    actionInfo: state.actionCreators,
  }
}

ProcessReview = connect(mapStateToProps)(ProcessReview)


export default ProcessReview
