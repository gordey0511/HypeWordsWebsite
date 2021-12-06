import React from 'react'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import { MainTitle } from '../../atoms/Texts/MainTitle'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'
import { Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logOut, sendVerifyEmail } from '../../../store/auth/actions'

const NeedVerify = ({ user_id, email, sendVerifyEmail, logOut }) => {
  const history = useHistory()

  const handleClickSendEmail = () => {
    sendVerifyEmail(user_id)
    alert('Письмо успешно отправлено!')
  }

  const handleClickRegisterAgain = () => {
    logOut()
    history.push('/register')
  }

  return (
    <div>
      <MarkEmailUnreadIcon
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
        Подтвердите электронную почту {email}
        <p style={{ marginTop: 0, fontSize: 19 }}>
          При регистрации вам уже было выслано письмо, оно должно прийти в течение 3 минут. Если оно
          не пришло, то нажмите кнопку снизу
        </p>
      </Typography>
      <Link
        to={'/login'}
        style={{
          textDecoration: 'none',
        }}
      >
        <ButtonMaterial handleClick={handleClickSendEmail} text={'Отправить письмо повторно'} />
      </Link>
      <br />
      {/*<Link*/}
      {/*  to={'/register'}*/}
      {/*  style={{*/}
      {/*    marginTop: 20,*/}
      {/*    display: 'block',*/}
      {/*    textDecoration: 'none',*/}
      {/*  }}*/}
      {/*>*/}
      <ButtonMaterial
        handleClick={handleClickRegisterAgain}
        styles={{ marginTop: 20 }}
        text={'Зарегистрироваться заново'}
      />
      {/*</Link>*/}
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

export default connect(putStateToProps, putDispatchToProps)(NeedVerify)
