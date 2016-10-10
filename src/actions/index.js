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
