import { combineReducers } from 'redux'
import processField from './processField'
import addProcess from './addProcess'

const powertrollApp = combineReducers({
  processField,
  addProcess,
})

export default powertrollApp
