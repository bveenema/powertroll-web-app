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
