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
import { setToken, setVerifiedEmail } from '../store/auth/actions'
import { Loading } from '../components/molecules/Problems/Loading'

const VerifyEmail = ({
  user_id,
  setToken,
  verified_email,
  isLoading,
  setVerifiedEmail,
  getData,
}) => {
  const link = window.location.pathname
  const token = link.substr(14, link.length - 14)

  useEffect(() => {
    console.log('TOKEN INF ' + ' ' + token + ' ' + user_id)
    // if (token === user_id) {
    setVerifiedEmail(user_id)
    // } else if (user_id === undefined || user_id === null || user_id === '') {
    //   setToken()
    // } else {
    //   alert('Ошибка, попробуйте снова')
    // }
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
    setToken: bindActionCreators(setToken, dispatch),
    setVerifiedEmail: bindActionCreators(setVerifiedEmail, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(VerifyEmail)
