import React, { useEffect, useState } from 'react'
import { ListOfAuthor } from './author/ListOfAuthors'
import { AddAuthor } from '../components/organisms/AddAuthor'
import { Link, Switch } from 'react-router-dom'
import { bindActionCreators, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { update_navbar } from '../store/navbar/actions'
import { NAVBAR_TITLE } from '../utils/constants'
import '../styles/text.css'
import '../styles/main.css'
import { Fab } from '../components/atoms/Fab'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { LinkButton } from '../components/atoms/Buttons/LinkButton'
import { NeedRegistration } from '../components/molecules/Problems/NeedRegistration'
import { SuccessfulRegistration } from '../components/molecules/Problems/SuccessfulRegistration'
import NeedVerify from '../components/molecules/Problems/NeedVerify'
import { setVerifiedEmail } from '../store/auth/actions'
import { Loading } from '../components/molecules/Problems/Loading'

const VerifyEmail = ({ user_id, verified_email, isLoading, setVerifiedEmail }) => {
  useEffect(() => {
    setVerifiedEmail(user_id)
  }, [])

  return (
    <div className="center_block">
      {isLoading === true ? (
        <Loading />
      ) : (
        <div>{verified_email ? <SuccessfulRegistration /> : <NeedVerify />}</div>
      )}

      {/*{used_id === undefined || used_id === null ? (*/}
      {/*  <NeedRegistration />*/}
      {/*) : (*/}
      {/*  <div>*/}
      {/*    {verify !== undefined && verify === true ? <SuccessfulRegistration /> : <NeedVerify />}*/}
      {/*  </div>*/}
      {/*)}*/}
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
    setVerifiedEmail: bindActionCreators(setVerifiedEmail, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(VerifyEmail)