import * as actions from './index'


let testFields = {
  name: "name",
  template: "template",
  sensor: "sensor",
}
describe('updateProcessFields', () => {
  it('should create UPDATE_PROCESS_FIELDS action', () =>{
    expect(actions.updateProcessFields(testFields,1)).toEqual({
      type: 'UPDATE_PROCESS_FIELDS',
      formFields: testFields,
      formStep: 1,
    })
  })
})

describe('updateFormValidity', ()=> {
  it('should create UPDATE_FORM_VALIDITY action', ()=> {
    expect(actions.updateFormValidity('setpointSetter',true)).toEqual({
      type: 'UPDATE_FORM_VALIDITY',
      formName: 'setpointSetter',
      isValid: true,
    })
  })
})

describe('updateAddProcessStep', ()=> {
  it('should create UPDATE_ADD_PROCESS_STEP action', ()=> {
    expect(actions.updateAddProcessStep(1)).toEqual({
      type: 'UPDATE_ADD_PROCESS_STEP',
      newStep: 1,
    })
  })
})

describe('addActionCreator', () => {
  it('should create ADD_ACTION_CREATOR action', () => {
    expect(actions.addActionCreator()).toEqual({
      type: 'ADD_ACTION_CREATOR',
      id: 0
    })
    expect(actions.addActionCreator()).toEqual({
      type: 'ADD_ACTION_CREATOR',
      id: 1
    })
  })
})

describe('removeActionCreator', () => {
  it('should create REMOVE_ACTION_CREATOR action', () => {
    expect(actions.removeActionCreator(1)).toEqual({
      type: 'REMOVE_ACTION_CREATOR',
      id: 1,
    })
  })
})

describe('updateActionCreator', () => {
  it('should create UPDATE_ACTION_CREATOR action', () => {
    expect(actions.updateActionCreator(1,testFields)).toEqual({
      type: 'UPDATE_ACTION_CREATOR',
      data: testFields,
      id: 1
    })
  })
})

describe('updateActionValidity', () => {
  it('should create UPDATE_ACTION_CREATOR action with data specifying isValid', () => {
    expect(actions.updateActionValidity(1, true)).toEqual({
      type: 'UPDATE_ACTION_CREATOR',
      id: 1,
      data: {isValid: true}
    })
  })
})
