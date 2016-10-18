import React from 'react'
import { connect } from 'react-redux'
import { addActionCreator } from '../actions'

// Components
import RaisedButton from 'material-ui/RaisedButton'
import ActionCreator from '../components/addProcess/ActionCreator'



let Test = (props) => {
  let actionCreators = props.actionCreators.map((actionCreator,index) => {
    return (<ActionCreator key={actionCreator.id} id={actionCreator.id} />)
  })
  return (
    <div className="pure-u-1">
      {actionCreators}
      <RaisedButton
        label='add action'
        onClick={props.addAction}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    actionCreators: state.actionCreators
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAction: () => {dispatch(addActionCreator())}
  }
}

Test = connect(mapStateToProps,mapDispatchToProps)(Test)



export default Test
