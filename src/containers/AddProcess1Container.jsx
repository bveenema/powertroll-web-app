import { connect } from 'react-redux'
import { addProcessField, updateProcessFields, updateFormValidity } from '../actions';

import AddProcess1 from '../components/addProcess/AddProcess1';

const mapStateToProps = (state) => {
  return {
    initialValues: state.processField.Form1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (formFields) => dispatch(updateProcessFields(formFields,'form1')),
    updateValidity: (isValid) => dispatch(updateFormValidity('form1',isValid)),
    onChange: (id,value,formStep) => dispatch(addProcessField(id,value,formStep)),
  }
}

let AddProcess1Container = connect(mapStateToProps,mapDispatchToProps)(AddProcess1)

export default AddProcess1Container
