// libs
import React from 'react'
import { connect } from 'react-redux'

let ActionCreator = (props) => {
  return (
    <p>Action Creator {props.id}</p>
  )
}

const mapStateToProps  = (state) => {
  return{
    id: 1
  }
}

ActionCreator = connect(mapStateToProps)(ActionCreator)

export default ActionCreator
