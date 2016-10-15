import actionCreators from './actionCreators'

describe('actionCreators Reducer', () =>{

  let initialState = []

  it('should hand initial state', () => {
    expect(
      actionCreators(undefined, {})
    ).toEqual(initialState)
  })

  let addActionCreatorAction = {
    type: 'ADD_ACTION_CREATOR',
    id: 1
  }

  it('should handle ADD_ACTION_CREATOR', () =>{
    expect(
      actionCreators(initialState, addActionCreatorAction)
    ).toEqual([
      {id: addActionCreatorAction.id}
    ])
  })
})
