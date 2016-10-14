import addProcess from './addProcess'

describe('addProcess reducer', () => {
  let initialState = {addProcessMeta:{stepIndex:0,stepCompleted:[]}}

  it('should handle initial state', () => {
    expect(
      addProcess(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle UPDATE_ADD_PROCESS_STEP', () => {
    expect(
      addProcess(initialState, {
        type: 'UPDATE_ADD_PROCESS_STEP',
        newStep: 1,
      })
    ).toEqual({
      ...initialState,
      addProcessMeta: {...initialState.addProcessMeta, stepIndex: 1}
    })
  })
})
