import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { MainTitle } from '../../atoms/Texts/MainTitle'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const SuccessfulRegistration = () => {
  return (
    <div>
      <CheckCircleIcon
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
        Вы успешно зарегистрировались!
      </Typography>
      <Link
        to={'/profile'}
        style={{
          textDecoration: 'none',
        }}
      >
        <ButtonMaterial text={'Перейти в профиль'} />
      </Link>
    </div>
  )
}
