import { connect } from 'react-redux'
import { addProcessField } from '../actions';

import AddProcess1 from '../components/addProcess/AddProcess1';

const mapStateToProps = (state) => {
  console.log('state Add Process', state.processField.Form1)
  return {
    initialValues: state.processField.Form1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (id,value,formStep) => dispatch(addProcessField(id,value,formStep)),
  }
}
// comment please
let AddProcess1Container = connect(mapStateToProps,mapDispatchToProps)(AddProcess1)

export default AddProcess1Container
