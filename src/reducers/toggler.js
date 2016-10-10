const toggler = (state = false, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case 'TOGGLE_CUSTOM_PROCESS':
      return action.toggled
    default:
      return state
  }
}

export default toggler
