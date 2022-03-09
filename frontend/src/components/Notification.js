
import React from 'react'
import {connect} from 'react-redux'

const Notification = (props) => {

  const {message,isVisible} = props
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (

    isVisible ?
      <div style={style}>
        {message}
      </div> :
      <div></div>

  )
}

const mapStateToProps = state => {
  return {
    message: state.notification.message,
    isVisible: state.notification.isVisible
  }
}


const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification