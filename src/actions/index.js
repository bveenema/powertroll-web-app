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
  console.log('action UPDATE_FORM_VALIDITY',formName,isValid)
  return({
    type: 'UPDATE_FORM_VALIDITY',
    formName,
    isValid
  })
}

export const updateAddProcessStep = (newStep) => {
  console.log('action UPDATE ADD PROCESS STEP', newStep)
  return({
    type: 'UPDATE_ADD_PROCESS_STEP',
    newStep
  })
}
