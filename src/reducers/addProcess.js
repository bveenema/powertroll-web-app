const addProcess = (state={stepIndex:0,stepCompleted:[]}, action) => {
  switch (action.type) {
    case 'UPDATE_ADD_PROCESS_STEP':
      return {
        ...state,
        stepIndex: action.newStep
      }
    default:
      return state
  }
}

export default addProcess
