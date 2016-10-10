const processField = (state = {Form1:{name:'',enableCustom:false},Form2:{}}, action) => {
  switch (action.type) {
    case 'ADD_PROCESS_FIELD':
      let key = action.id
      let value = action.value
      switch (action.formStep){
        case 1:
          return {
            ...state,
            Form1: {...state.Form1, [key]: value}
          }
        case 2:
          return {
            ...state,
            Form2: {...state.Form2, [key]: value}
          }
        default:
          return state
      }
    case 'UPDATE_PROCESS_FIELDS':
    switch (action.formStep){
      case 1:
        return {
          ...state,
          Form1: action.formFields
        }
      case 2:
        return {
          ...state,
          Form2: action.formFields
        }
      default:
        return state
    }
    default:
      return state
  }
}

export default processField
