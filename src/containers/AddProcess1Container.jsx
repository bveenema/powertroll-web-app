import { connect } from 'react-redux'
import { addProcessField, updateProcessFields } from '../actions';

import AddProcess1 from '../components/addProcess/AddProcess1';

const mapStateToProps = (state) => {
  console.log('state Add Process', state.processField.Form1)
  return {
    initialValues: state.processField.Form1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (formFields,formStep) => dispatch(updateProcessFields(formFields,formStep)),
    onChange: (id,value,formStep) => dispatch(addProcessField(id,value,formStep)),
  }
}

let AddProcess1Container = connect(mapStateToProps,mapDispatchToProps)(AddProcess1)

export default AddProcess1Container
