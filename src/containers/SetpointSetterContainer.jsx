import { connect } from 'react-redux'
import { find } from 'lodash'
import { updateProcessFields } from '../actions'

import SetpointSetter from '../components/addProcess/SetpointSetter'

import setupSettings from '../data/setup1'

const mapStateToProps = (state) => {
  let sensor = find(setupSettings.sensors, {'name':state.processField.Form1.sensor})
  let unit = sensor.unit
  let type = sensor.type
  return {
    initialValues: state.processField.setpointSetter,
    unit: unit,
    type: type,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (formFields) => dispatch(updateProcessFields(formFields,'setpointSetter'))
  }
}

let SetpointSetterContainer = connect(mapStateToProps,mapDispatchToProps)(SetpointSetter)

export default SetpointSetterContainer
