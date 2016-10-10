import { combineReducers } from 'redux'
import toggler from './toggler'
import processField from './processField'

const todoApp = combineReducers({
  toggler,
  processField,
})

export default todoApp
