import React, { useEffect, useState } from 'react'
import { Link, Switch } from 'react-router-dom'
import { bindActionCreators, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { NeedRegistration } from './NeedRegistration'
import { SuccessfulRegistration } from './SuccessfulRegistration'
import NeedVerify from './NeedVerify'
import { getUser, setVerifiedEmail } from '../../../store/auth/actions'

export const checkUserAuth = (user_id, verified_email) => {
  console.log('CHECK USER AUTH ' + user_id + ' ' + verified_email)
  if (
    user_id !== undefined &&
    user_id !== null &&
    user_id !== ''
    //   &&
    // verified_email !== undefined &&
    // verified_email !== null &&
    // verified_email === true
  ) {
    return true
  }

  return false
}

const NeedAuth = ({ user_id, verified_email, getData, isLoading, fromProfile = false }) => {
  useEffect(() => {
    if (!fromProfile) {
      getData(user_id)
    }
  }, [user_id])

  return (
    <div className="center_block">
      {user_id === undefined || user_id === null ? (
        <NeedRegistration />
      ) : (
        <div>
          {verified_email !== undefined && verified_email === true ? (
            <SuccessfulRegistration />
          ) : (
            <NeedVerify />
          )}
        </div>
      )}
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    user_id: state.auth.token,
    verified_email: state.auth.verified_email,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getUser, dispatch),
    // setVerifiedEmail: bindActionCreators(setVerifiedEmail, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(NeedAuth)
