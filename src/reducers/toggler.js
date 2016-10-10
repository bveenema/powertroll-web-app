const toggler = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CUSTOM_PROCESS':
      return action.toggled
    default:
      return state
  }
}

export default toggler
