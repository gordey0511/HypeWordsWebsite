import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { TextFieldMaterial } from '../../components/atoms/TextsInput/TextFieldMaterial'
import { ButtonMaterial } from '../../components/atoms/Buttons/ButtonMaterial'
import '../../styles/blocks.css'
import { bindActionCreators } from 'redux'
import { update_navbar } from '../../store/navbar/actions'
import { getAllBooks } from '../../store/books/actions'
import { connect } from 'react-redux'
import { NAVBAR_TITLE } from '../../utils/constants'
import { Link, useHistory } from 'react-router-dom'
import { FormAuth } from '../../components/molecules/FormAuth'
import { CardActionAuth } from '../../components/atoms/CardActionAuth'
import { createUser } from '../../store/auth/actions'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 400,
  },

  left: {
    float: 'left',
    textAlign: 'left',
    fontSize: 25,
    // fontWeight: 520,
  },
})

const Register = ({ token, updateNavbar, createUser, error }) => {
  const classes = useStyles()
  let history = useHistory()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (token !== undefined && token !== null && token !== '') {
      history.push('/profile')
    }
  }, [token])

  const changeName = (event) => {
    if (event.target.value.length < 50) {
      setName(event.target.value)
    }
  }

  const changeSurname = (event) => {
    if (event.target.value.length < 50) {
      setSurname(event.target.value)
    }
  }

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleButton = () => {
    console.log('REGISTER START ' + name + ' ' + surname + ' ' + email + ' ' + password)
    if (surname.length > 0 && name.length > 0) {
      createUser(name, surname, email, password)
    }
  }

  useEffect(() => {
    updateNavbar(NAVBAR_TITLE.Login)
  }, [])

  useEffect(() => {
    // if (error !== undefined && error !== '') {
    //   alert('?????? ??????????????????, ?????????????????? ????????????')
    // }
    console.log('ERROR REGISTER ' + error)
  }, [error])

  return (
    <div className={'block_vertical'}>
      <div className={'center_block_auth'}>
        <Card className={classes.root} variant="outlined" elevation={5}>
          <FormAuth
            title={'??????????????????????'}
            text1={'??????????'}
            text2={'????????????'}
            text_button={'????????????????????????????????????'}
            email={email}
            changeEmail={changeEmail}
            password={password}
            changePassword={changePassword}
            name={name}
            changeName={changeName}
            surname={surname}
            changeSurname={changeSurname}
            handleButton={handleButton}
          />
          <CardActionAuth text={'?????? ???????? ??????????????'} link={'/login'} />
        </Card>
        {/*{name} {email} {password}*/}
      </div>
    </div>
  )
}

const putStateToProps = (state) => {
  return {
    token: state.auth.token,
    error: state.auth.error,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    updateNavbar: bindActionCreators(update_navbar, dispatch),
    createUser: bindActionCreators(createUser, dispatch),
  }
}

export default connect(putStateToProps, putDispatchToProps)(Register)
