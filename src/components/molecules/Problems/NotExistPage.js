import React from 'react'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import { MainTitle } from '../../atoms/Texts/MainTitle'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'
import { Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logOut, sendVerifyEmail } from '../../../store/auth/actions'

const NotExistPage = ({ user_id, email, sendVerifyEmail, logOut }) => {
  const history = useHistory()

  return (
    <div>
      <SentimentDissatisfiedIcon
        style={{
          height: 100,
          width: 100,
        }}
      />

      <Typography
        style={{
          fontSize: 35,
        }}
      >
        Такой страницы не существует
      </Typography>
      <Link
        to={'/profile'}
        style={{
          textDecoration: 'none',
        }}
      >
        <ButtonMaterial text={'В профиль'} />
      </Link>
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    user_id: state.auth.token,
    email: state.auth.email,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    logOut: bindActionCreators(logOut, dispatch),
    sendVerifyEmail: bindActionCreators(sendVerifyEmail, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(NotExistPage)
