export const addProcessField = (id, value, formStep) => {
  return ({
    type: 'ADD_PROCESS_FIELD',
    formStep,
    id,
    value,
  })
}

export const updateProcessFields = (formFields, formStep) => {
  return ({
    type: 'UPDATE_PROCESS_FIELDS',
    formStep,
    formFields,
  })
}

export const updateFormValidity = (formName, isValid) => {
  return({
    type: 'UPDATE_FORM_VALIDITY',
    formName,
    isValid
  })
}

export const updateAddProcessStep = (newStep) => {
  return({
    type: 'UPDATE_ADD_PROCESS_STEP',
    newStep
  })
}

let actionCreatorId = 0
export const addActionCreator = () => {
  return ({
    type: 'ADD_ACTION_CREATOR',
    id: actionCreatorId++,
  })
}

export const removeActionCreator = (id) => {
  return ({
    type: 'REMOVE_ACTION_CREATOR',
    id
  })
}

export const updateActionCreator = (id,data) => {
  return ({
    type: 'UPDATE_ACTION_CREATOR',
    id,
    data,
  })
}

export const updateActionValidity = (id,isValid) => {
  return ({
    type: 'UPDATE_ACTION_CREATOR',
    id,
    data: {isValid: isValid},
  })
}
