const processField = (state = {Form1:{name:'',enableCustom:false},setpointSetter:{toleranceType: 'symmetric'}}, action) => {
  switch (action.type) {
    case 'ADD_PROCESS_FIELD':
      let key = action.id
      let value = action.value
      switch (action.formStep){
        case 'form1':
          return {
            ...state,
            Form1: {...state.Form1, [key]: value}
          }
        default:
          return state
      }
    case 'UPDATE_PROCESS_FIELDS':
      switch (action.formStep){
        case 'form1':
          return {
            ...state,
            Form1: {...state.Form1, ...action.formFields}
          }
        case 'setpointSetter':
          return {
            ...state,
            setpointSetter: {...state.setpointSetter, ...action.formFields}
          }
        default:
          return state
    }
    case 'UPDATE_FORM_VALIDITY':
      switch(action.formName){
        case 'form1':
          return {
            ...state,
            Form1: {...state.Form1, isValid: action.isValid}
          }
        case 'setpointSetter':
          return {
            ...state,
            setpointSetter: {...state.setpointSetter, isValid:action.isValid}
          }
        default:
          return state
      }
    default:
      return state
  }
}

export default processField
