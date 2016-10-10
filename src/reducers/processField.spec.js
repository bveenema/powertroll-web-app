import processField from './processField'

describe('processField reducer', () => {
  let initialState = {ProcessAddForm_1:{},ProcessAddForm_2:{}}
  it('should handle initial state', () => {
    expect(
      processField(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle ADD_PROCESS_FIELD with empty array', () => {
    expect(
      processField(initialState, {
        type: 'ADD_PROCESS_FIELD',
        formStep: 1,
        id: 'id',
        value: 'My Process',
      })
    ).toEqual({
      ...initialState,
      ProcessAddForm_1: {id:'My Process'}
    })
  })

  let prefilledState = {
    ProcessAddForm_1:{Dog: "Poodle"},
    ProcessAddForm_2:{Cat: "Krumpit"}
  }
  it('should ADD_PROCESS_FIELD with filled array', () => {
    expect(
      processField(prefilledState, {
        type: 'ADD_PROCESS_FIELD',
        formStep: 1,
        id: 'id',
        value: 'My Process',
      })
    ).toEqual({
      ...prefilledState,
      ProcessAddForm_1:{Dog: "Poodle",id: "My Process"}
    })
  })
})
