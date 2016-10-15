import { combineReducers } from 'redux'
import processField from './processField'
import addProcess from './addProcess'
import actionCreators from './actionCreators'

const powertrollApp = combineReducers({
  processField,
  addProcess,
  actionCreators,
})

export default powertrollApp
