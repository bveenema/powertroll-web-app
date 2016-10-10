import { combineReducers } from 'redux'
import processField from './processField'

const todoApp = combineReducers({
  processField,
})

export default todoApp
