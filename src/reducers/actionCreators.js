const actionCreators = (state=[],action) => {
  switch(action.type){
    case 'ADD_ACTION_CREATOR':
      return [
        ...state,
        {id: action.id}
      ]
    case 'REMOVE_ACTION_CREATOR':
      return state.filter((actionCreator) =>{
        return actionCreator.id !== action.id
      })
    case 'UPDATE_ACTION_CREATOR':
      return state.map((actionCreator) => {
        if(actionCreator.id !== action.id) return actionCreator
        else return {
            ...actionCreator,
            ...action.data
          }
      })
    default:
      return state
  }
}

export default actionCreators
