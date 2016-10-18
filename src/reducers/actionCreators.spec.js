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

  let prefilledState = [
    {name: 'one',id: 0},{name: 'two',id: 1},{name: 'three',id: 2}
  ]
  let removeActionCreatorAction = {
    type: 'REMOVE_ACTION_CREATOR',
    id: 1
  }
  it('should hande REMOVE_ACTION_CREATOR', () => {
    expect(
      actionCreators(prefilledState,removeActionCreatorAction)
    ).toEqual(
      prefilledState.filter((state) => {
        return state.id !== removeActionCreatorAction.id
      })
    )
  })


  it('should handle UPDATE_ACTION_CREATOR', () => {
    expect(
      actionCreators([{id:0}], {
        type: 'UPDATE_ACTION_CREATOR',
        id: 0,
        data: {name: 'one',type:'ON'}
      })
    ).toEqual(
      [{id:0,name:'one',type:'ON'}]
    )
  })
  it('should reject UPDATE_ACTION_CREATOR if id does not exist', () => {
    expect(
      actionCreators([{id: 1}], {
        type: 'UPDATE_ACTION_CREATOR',
        id: 0,
        data: {name: 'one',type:'ON'}
      })
    ).toEqual(
      [{id: 1}]
    )
  })

  it('should hande UPDATE_ACTION_VALIDITY', () => {
    expect(
      actionCreators([{name: 'one',id: 0},{name: 'two',id: 1}], {
        type: 'UPDATE_ACTION_CREATOR',
        id: 0,
        data: {isValid: true}
      })
    ).toEqual(
      [{name: 'one',id: 0,isValid:true},{name: 'two',id: 1}]
    )
  })
})
