let nextTodoId = 0
export const addTodo = (text) => {console.log('action');return({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleCustomProcess = (isToggled) => {
  console.log('action', isToggled)
  return ({
    type: 'TOGGLE_CUSTOM_PROCESS',
    toggled: !isToggled,
  })
}

export const addProcessField = (id, value, formStep) => {
  console.log('action', id, value, formStep)
  return ({
    type: 'ADD_PROCESS_FIELD',
    formStep,
    id,
    value,
  })
}
