import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import '../../styles/blocks.css'
import { bindActionCreators } from 'redux'
import { update_navbar } from '../../store/navbar/actions'
import { connect } from 'react-redux'
import { NAVBAR_TITLE } from '../../utils/constants'
import { Link, useHistory } from 'react-router-dom'
import { FormAuth } from '../../components/molecules/FormAuth'
import { CardActionAuth } from '../../components/atoms/CardActionAuth'
import { loginUser } from '../../store/auth/actions'
import { CommonSnackbar } from '../../components/atoms/Snackbars/CommonSnackbar'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  left: {
    float: 'left',
    textAlign: 'left',
    fontSize: 25,
    // fontWeight: 520,
  },
})

const Login = ({ updateNavbar, loginUser, token, error }) => {
  const classes = useStyles()
  let history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    console.log('Login ' + token)
    if (token !== undefined && token !== null && token !== '') {
      history.push('/profile')
    }
  }, [token])

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleButton = () => {
    loginUser(email, password)
  }

  useEffect(() => {
    updateNavbar(NAVBAR_TITLE.Login)
  }, [])

  useEffect(() => {
    console.log('ERROR ' + error)
    if (error !== undefined && error !== '') {
      setOpenSnackbar(true)
    }
  }, [error])

  const handleCloseSnacbar = () => {
    setOpenSnackbar(!openSnackbar)
  }

  return (
    <div className={'block_vertical'}>
      <div className={'center_block_login'}>
        <Card className={classes.root} variant="outlined" elevation={5}>
          <div
          // className={"form_auth"}
          >
            <FormAuth
              title={'Вход'}
              text1={'Почта'}
              text2={'Пароль'}
              text_button={'Войти'}
              email={email}
              changeEmail={changeEmail}
              password={password}
              changePassword={changePassword}
              handleButton={handleButton}
            />
            <CardActionAuth text={'Создать аккаунт'} link={'/register'} />
          </div>
        </Card>

        <CommonSnackbar open={openSnackbar} text={error} handleClose={handleCloseSnacbar} />
        {/*Параметры {email} {password}*/}
      </div>
    </div>
  )
}

const putStateToProps = (state) => {
  state.auth.token = localStorage.getItem('userToken')
  return {
    token: state.auth.token,
    error: state.auth.error,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    updateNavbar: bindActionCreators(update_navbar, dispatch),
    loginUser: bindActionCreators(loginUser, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(Login)
