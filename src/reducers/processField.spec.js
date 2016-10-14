import processField from './processField'

describe('processField reducer', () => {
  let initialState = {Form1:{name:'',enableCustom:false},setpointSetter:{toleranceType: 'symmetric'}}

  it('should handle initial state', () => {
    expect(
      processField(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle ADD_PROCESS_FIELD with empty array', () => {
    expect(
      processField(initialState, {
        type: 'ADD_PROCESS_FIELD',
        formStep: 'form1',
        id: 'id',
        value: 'My Process',
      })
    ).toEqual({
      ...initialState,
      Form1: {...initialState.Form1,id:'My Process'}
    })
  })

  let prefilledState = {
    Form1:{Dog: "Poodle",name:"Ben"},
    Form2:{Cat: "Krumpit"}
  }
  it('should ADD_PROCESS_FIELD with filled array', () => {
    expect(
      processField(prefilledState, {
        type: 'ADD_PROCESS_FIELD',
        formStep: 'form1',
        id: 'id',
        value: 'My Process',
      })
    ).toEqual({
      ...prefilledState,
      Form1:{...prefilledState.Form1,id: "My Process"}
    })
  })

  it('should handle UPDATE_PROCESS_FIELDS', () => {
    expect(
      processField(initialState, {
        type: 'UPDATE_PROCESS_FIELDS',
        formStep: 'form1',
        formFields: prefilledState.Form1,
      })
    ).toEqual({
      ...initialState,
      Form1: {...initialState.Form1, ...prefilledState.Form1}
    })
  })

  it('should handle UPDATE_FORM_VALIDITY', () => {
    expect(
      processField(initialState, {
        type: 'UPDATE_FORM_VALIDITY',
        formName: 'form1',
        isValid: true
      })
    ).toEqual({
      ...initialState,
      Form1: {...initialState.Form1, isValid: true}
    })
  })



})
