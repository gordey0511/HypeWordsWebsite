import React from 'react'
import InputIcon from '@material-ui/icons/Input'
import { MainTitle } from '../../atoms/Texts/MainTitle'
import { ButtonMaterial } from '../../atoms/Buttons/ButtonMaterial'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PersonOffIcon from '@mui/icons-material/PersonOff'
export const EmptyPage = ({ name, date }) => {
  return (
    <div
      style={{
        marginTop: 0,
      }}
    >
      <PersonOffIcon
        style={{
          height: 70,
          width: 70,
        }}
      />

      <Typography
        style={{
          fontSize: 25,
        }}
      >
        Никто еще не отправил сочинения
      </Typography>
    </div>
  )
}
