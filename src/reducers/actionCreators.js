const actionCreators = (state=[],action) => {
  switch(action.type){
    case 'ADD_ACTION_CREATOR':
      return [
        ...state,
        {id: action.id}
      ]
    default:
      return state
  }
}

export default actionCreators
